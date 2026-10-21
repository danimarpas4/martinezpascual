import React from 'react';
import { Github, Linkedin, Mail, Crosshair } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex items-center space-x-7 mb-6">
          <a href="https://github.com/danimarpas4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" title="GitHub">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/danimarpas4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" title="LinkedIn">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://tryhackme.com/p/danimarpas4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300" title="TryHackMe (Top 5% Global)">
            <span className="sr-only">TryHackMe</span>
            <Crosshair className="w-5 h-5" />
          </a>
          <a href="mailto:danimarpas4@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300" title="Email">
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-center space-y-1">
          <p className="text-slate-300 text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Daniel Martínez Pascual.
          </p>
          <p className="text-emerald-400/90 text-xs font-mono tracking-wider flex items-center justify-center gap-1.5 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Secured with TLS 1.3 · Hardened Nginx Node · Hetzner Cloud · Blue Team Defense
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
