import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: "Projects", href: "#project" },
    { id: 2, name: "Journey", href: "#journey" },
    { id: 3, name: "Team", href: "#team" },
    { id: 4, name: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 px-6 py-3 flex items-center justify-between font-orbitron transition-all duration-300 ${
        scrolled ? " shadow-lg backdrop-blur-md" : ""
      }`}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="text-white text-2xl font-medium leading-tight tracking-wide">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            TEAM
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-light tracking-widest text-gray-300 ml-1"
          >
            SAMMPAATI
          </motion.span>
        </div>
      </motion.div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            onHoverStart={() => setHoveredItem(item.id)}
            onHoverEnd={() => setHoveredItem(null)}
            className="relative"
          >
            <a
              href={item.href}
              className="text-white text-sm tracking-widest font-light uppercase px-2 py-1 relative group"
            >
              <motion.span className="relative z-10" whileHover={{ color: "#60A5FA" }}>
                {item.name}
              </motion.span>
              {hoveredItem === item.id && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </a>
          </motion.li>
        ))}
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#contact"
            className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white text-sm font-medium tracking-wider uppercase shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Contact
          </a>
        </motion.li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full text-white md:hidden backdrop-blur-xl shadow-xl rounded-b-xl px-6 py-4 z-40"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm uppercase font-medium tracking-wide hover:text-blue-400 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2 mt-2 bg-blue-500 rounded-full font-semibold tracking-wide hover:bg-blue-600 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
