import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      initial={false}
      animate={{
        backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(29, 29, 31, 0.8)',
      }}
      className="fixed top-8 right-8 z-50 p-3 rounded-full glass-card hover:scale-110 active:scale-90 transition-transform duration-300 shadow-lg border border-black/[0.08] dark:border-white/[0.12]"
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
