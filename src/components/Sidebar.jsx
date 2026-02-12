import React from 'react';
import { Mail, Github, FileText, Beaker } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4 lg:sticky lg:top-32 h-fit flex flex-col items-center lg:items-start space-y-10 p-2">
      <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl transition-transform duration-500 hover:scale-105">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          alt="Profile"
          className="w-full h-full object-cover bg-surface-light dark:bg-surface-dark"
        />
      </div>
      
      <div className="text-center lg:text-left space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">Software Engineer</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Sun Yat-sen University</p>
      </div>

      <div className="flex flex-col space-y-5 w-full max-w-xs lg:max-w-none">
        <a href="mailto:example@email.com" className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark group-hover:scale-110 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <span className="font-medium">example@email.com</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark group-hover:scale-110 transition-transform">
            <Github className="w-5 h-5" />
          </div>
          <span className="font-medium">GitHub</span>
        </a>
        <a href="#" className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <span className="font-medium">Curriculum Vitae</span>
        </a>
        <a href="#" className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark group-hover:scale-110 transition-transform">
            <Beaker className="w-5 h-5" />
          </div>
          <span className="font-medium">Lab Page</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
