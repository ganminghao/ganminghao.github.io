import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="section-card border border-black/[0.03] dark:border-white/[0.03] shadow-sm hover:shadow-md transition-shadow duration-500"
    >
      <h2 className="text-3xl font-bold mb-8 tracking-tight text-black dark:text-white">{title}</h2>
      <div className="space-y-6 text-gray-600 dark:text-gray-400">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
