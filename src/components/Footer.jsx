import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex space-x-8 mb-8">
          <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 text-sm font-light tracking-wide">
            &copy; {new Date().getFullYear()} Daniel Martínez Pascual.
          </p>
          <p className="text-gray-600 text-xs mt-2 font-light tracking-wide">
            Built with React & Tailwind CSS.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
