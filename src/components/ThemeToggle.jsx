import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      initial={false}
      animate={{
        backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)',
      }}
      className="fixed top-3 right-6 z-50 p-2 rounded-full hover:scale-110 active:scale-90 transition-transform duration-300 border border-black/[0.05] dark:border-white/[0.1]"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: 30, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -30, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-[#1d1d1f] fill-[#1d1d1f]" />
            ) : (
              <Sun className="w-5 h-5 text-[#f5f5f7] fill-[#f5f5f7]" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
