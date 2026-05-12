import React from 'react';
import avatarImg from '../../images/avatar.JPG';
import { Mail, Github, FileText, Beaker } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit flex flex-col items-center lg:items-start space-y-10 p-2">
      <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl transition-transform duration-500 hover:scale-105">
        <img
          src={avatarImg}
          alt="Profile"
          className="w-full h-full object-cover bg-surface-light dark:bg-surface-dark"
        />
      </div>
      
      <div className="text-center lg:text-left space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">Gan Minghao</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Sun Yat-sen University</p>
      </div>

      <div className="flex flex-col space-y-5 w-full max-w-xs lg:max-w-none">
        <a href="mailto:liamgan05@gmail.com" className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark group-hover:scale-110 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <span className="font-medium">liamgan05@gmail.com</span>
        </a>
        <a href="https://github.com/ganminghao" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300">
          <div className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark group-hover:scale-110 transition-transform">
            <Github className="w-5 h-5" />
          </div>
          <span className="font-medium">github.com/ganminghao</span>
        </a>
        <a
          href="/Gan_Minghao_CV.pdf"
          download
          className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300"
        >
          <div className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <span className="font-medium">CV Download</span>
        </a>
        <a
          href="https://naisslab.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300"
        >
          <div className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark group-hover:scale-110 transition-transform">
            <Beaker className="w-5 h-5" />
          </div>
          <span className="font-medium">NAISS LAB</span>
        </a>
      </div>

      <div className="w-full max-w-xs lg:max-w-none text-sm text-gray-400 dark:text-gray-500 text-center lg:text-left">
        Last updated: 2026-04-11
      </div>
    </div>
  );
};

export default Sidebar;
