import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: "Projects", href: "#project" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Team", href: "#team" },
    { id: 4, name: "Journey", href: "#news" },
    
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 px-10 py-2 flex items-center justify-between font-orbitron transition-all duration-300 rounded-xl mx-2
         ${
        
          " backdrop-blur-md shadow-lg"
          
      }`
    }
    >
      {/* Logo Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        {/* Replace with actual logo image */}
        {/*<img src="/logo.svg" alt="Skyroot Logo" className="h-10" />*/}
        <div className="text-white text-2xl font-medium leading-tight tracking-wide">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
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

      {/* Navigation Links */}
      <ul className="flex gap-8 items-center">
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
              <motion.span
                className="relative z-10"
                whileHover={{ color: "#60A5FA" }}
              >
                {item.name}
              </motion.span>
              
              {/* Animated underline */}
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
        
        {/* Contact Button */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#contact"
            className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white text-sm font-medium tracking-wider uppercase shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Contact
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
}