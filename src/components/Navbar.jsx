import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'updates', label: "What's New" },
  { id: 'education', label: 'Education' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'more', label: 'More' },
];

const Navbar = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjusted for new full-width navbar height (64px + 16px buffer)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 navbar-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-center">
        <div className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2 transition-colors duration-700 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-2 sm:px-4 py-2 rounded-xl transition-all duration-300 flex-shrink-0"
            >
              <motion.span
                animate={{
                  scale: activeSection === item.id ? 1.05 : 1,
                  fontWeight: activeSection === item.id ? 600 : 500,
                  color: activeSection === item.id 
                    ? (theme === 'dark' ? '#f5f5f7' : '#1d1d1f')
                    : (theme === 'dark' ? '#9ca3af' : '#6b7280')
                }}
                className="text-sm relative z-10 transition-colors duration-700"
              >
                {item.label}
              </motion.span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-xl"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
