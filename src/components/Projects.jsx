import React, { useRef } from 'react';
import { ExternalLink, Github, Bot, Server, Shield, Database, Layout } from 'lucide-react';
import { useState } from 'react';
import { translations } from '../translations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ lang }) => {
  const t = translations[lang].projects;
  const container = useRef(null);
  const [activeArch, setActiveArch] = useState(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.gsap-reveal-proj');
    
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: container });

  // Render specific images/icons based on index
  const renderProjectVisual = (idx) => {
    if (idx === 0) {
      return (
        <img 
          src="/promilitar-transparent.png" 
          alt="ProMilitar" 
          className="h-16 md:h-20 object-contain group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
        />
      );
    } else if (idx === 1) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 text-white/30 group-hover:text-white/60 transition-colors duration-700 group-hover:scale-110">
          <Bot size={56} strokeWidth={1.5} />
          <span className="font-mono text-xs tracking-[0.2em] uppercase">Telegram Bot</span>
        </div>
      );
    } else if (idx === 2) {
      return (
        <img 
          src="/mando-transparent.png" 
          alt="Mando APP" 
          className="h-14 md:h-16 object-contain group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
        />
      );
    }
  };

  return (
    <section id="proyectos" ref={container} className="py-32 bg-[#000000] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-24 text-center gsap-reveal-proj">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tighter">{t.title}</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl">Diseñados para escalar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((project, idx) => (
            <div key={idx} className="gsap-reveal-proj bg-[#151516] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col group transition-all duration-700 hover:scale-[1.02] hover:bg-[#1c1c1e] hover:border-white/10">
              
              {/* Project Visual Header */}
              <div className="h-56 bg-[#0a0a0a] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                {renderProjectVisual(idx)}
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-gray-200 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed font-light">{project.prob}</p>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">{project.det}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-[#252528] text-gray-400 text-xs rounded-lg font-medium tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 items-center justify-between w-full">
                    <div className="flex gap-4">
                      {project.links && project.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white font-medium hover:text-gray-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> {link.label}
                      </a>
                    ))}
                    </div>
                    <button 
                      onClick={() => setActiveArch(idx)}
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded bg-emerald-500/10 transition-colors"
                    >
                      [Arquitectura]
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Modal */}
      {activeArch !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setActiveArch(null)}>
          <div className="bg-[#0c0c0e] border border-white/10 rounded-2xl p-8 max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-semibold text-white mb-8">{t.items[activeArch].title} - Blueprint</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-12">
              
              {/* Client */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Layout className="w-8 h-8 text-gray-400" />
                </div>
                <span className="text-sm text-gray-400 font-mono">Client (React)</span>
              </div>
              
              <div className="hidden md:block w-16 border-t-2 border-dashed border-gray-600"></div>
              
              {/* Firewall / Nginx */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="text-sm text-emerald-400 font-mono">Nginx Proxy</span>
              </div>
              
              <div className="hidden md:block w-16 border-t-2 border-dashed border-gray-600"></div>
              
              {/* App Server */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Server className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-sm text-blue-400 font-mono">Docker App</span>
              </div>
              
              <div className="hidden md:block w-16 border-t-2 border-dashed border-gray-600"></div>
              
              {/* Database */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-rose-400" />
                </div>
                <span className="text-sm text-rose-400 font-mono">Database</span>
              </div>
              
            </div>
            
            <div className="text-center mt-8">
              <button onClick={() => setActiveArch(null)} className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
