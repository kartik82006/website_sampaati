'use client'; // For Next.js 13+

import { useEffect, useState } from 'react';

export default function BlendingSection({ children, bgColor = 'bg-[#0c121f]' }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    const element = document.getElementById('blending-section');
    if (element) observer.observe(element);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="blending-section"
      className={`relative ${bgColor} transition-colors duration-700 ease-in-out`}
      style={{
        opacity: isVisible ? 1 : 0.7,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {/* Gradient overlay that creates the blending effect */}
      <div 
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(0,0,0,0.3) 0%, 
            transparent 100%)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      />
      
      <div className="container mx-auto px-6 py-20">
        {children}
      </div>

      {/* Bottom gradient overlay */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, 
            rgba(0,0,0,0.3) 0%, 
            transparent 100%)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      />
    </section>
  );
}