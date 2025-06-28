"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Departments
const departments = ["Engineering", "Product", "Design", "QA"];

// Team data
const teamMembers = [
  // Engineering (10 members)
  { name: "John Doe", role: "Software Engineer", department: "Engineering", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Bob Brown", role: "Backend Developer", department: "Engineering", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Emily White", role: "Frontend Developer", department: "Engineering", image: "https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Michael Blue", role: "DevOps Engineer", department: "Engineering", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Sara Green", role: "Mobile Developer", department: "Engineering", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Victor Orange", role: "Cloud Engineer", department: "Engineering", image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Wendy Silver", role: "Data Engineer", department: "Engineering", image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Xander Gold", role: "AI Engineer", department: "Engineering", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Yara Bronze", role: "Embedded Engineer", department: "Engineering", image: "https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Zane Copper", role: "Security Engineer", department: "Engineering", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  // Product
  { name: "Jane Smith", role: "Product Manager", department: "Product", image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Tom Black", role: "Product Owner", department: "Product", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Lisa Red", role: "Business Analyst", department: "Product", image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Sam Yellow", role: "Scrum Master", department: "Product", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  // Design
  { name: "Alice Johnson", role: "UI/UX Designer", department: "Design", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Nina Violet", role: "Graphic Designer", department: "Design", image: "https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Oscar Indigo", role: "Motion Designer", department: "Design", image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Paula Pink", role: "Brand Designer", department: "Design", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  // QA
  { name: "Charlie Green", role: "QA Engineer", department: "QA", image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Quinn Silver", role: "Automation Tester", department: "QA", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Rita Gold", role: "Manual Tester", department: "QA", image: "https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
  { name: "Steve Bronze", role: "QA Lead", department: "QA", image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=300&q=80", socials: { linkedin: "#", twitter: "#" } },
];

// SVG Social Icons
const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
);

function TeamCard({ name, role, image, socials }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.03,
        zIndex: 10
      }}
      className="w-52 flex-shrink-0 rounded-xl overflow-hidden mx-2"
      tabIndex={0}
      aria-label={`Team member: ${name}, ${role}`}
    >
      <div className="relative overflow-hidden h-56 bg-gradient-to-br from-blue-900 to-indigo-800 rounded-xl">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="object-cover w-full h-full"
          src={image}
          alt={`Profile of ${name}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <span className="block text-lg font-bold text-white">
              {name}
            </span>
            <span className="text-sm text-blue-200">{role}</span>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex gap-3 justify-center mt-3"
      >
        <motion.a 
          whileHover={{ y: -2 }}
          href={socials.linkedin} 
          aria-label="LinkedIn" 
          className="p-2 rounded-full bg-blue-900 text-blue-300 hover:text-white transition-colors duration-200" 
          tabIndex={0} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a 
          whileHover={{ y: -2 }}
          href={socials.twitter} 
          aria-label="Twitter" 
          className="p-2 rounded-full bg-blue-900 text-blue-300 hover:text-white transition-colors duration-200" 
          tabIndex={0} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default function TeamCardList() {
  const [selectedDept, setSelectedDept] = useState(departments[0]);
  const filteredMembers = teamMembers.filter(m => m.department === selectedDept);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#0c121f] to-[#0a1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with elegant styling */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              MEET OUR TEAM
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-300 max-w-2xl mx-auto"
          >
            The talented people behind our success
          </motion.p>
        </div>
        
        {/* Department selector */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {departments.map((dept) => (
            <motion.button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none ${
                selectedDept === dept 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-blue-900/50 text-blue-200 hover:bg-blue-800/50 border border-blue-700/50'
              }`}
              aria-pressed={selectedDept === dept}
            >
              {dept}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Team cards */}
        <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
          <motion.div 
            className="flex flex-nowrap gap-6 py-2 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, idx) => (
                  <TeamCard key={`${member.name}-${idx}`} {...member} />
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-500 dark:text-gray-300 text-center w-full py-8"
                >
                  No members in this department.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center text-sm text-blue-400 mt-6"
        >
          <svg 
            className="w-5 h-5 mr-2 animate-bounce-horizontal" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
            />
          </svg>
          Scroll horizontally to explore
        </motion.div>
      </div>
      
      {/* Animation styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1.5s infinite;
        }
      `}</style>
    </section>
  );
}