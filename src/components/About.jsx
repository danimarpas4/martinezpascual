import React, { useRef } from 'react';
import { Shield, Download, Server, Layout, Cpu, Lock, Crosshair } from 'lucide-react';
import { translations } from '../translations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = ({ lang, setShowCV }) => {
  const t = translations[lang].about;
  const container = useRef(null);
  
  useGSAP(() => {
    const elements = gsap.utils.toArray('.gsap-reveal');
    
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

  const skills = {
    backend: ["Python", "Django", "SQL", "MySQL", "SQLAlchemy"],
    frontend: ["React", "Tailwind CSS"],
    tools: ["Docker", "Git", "Linux (WSL)"],
    security: ["Ciberseguridad", "Blue Team"]
  };

  return (
    <section id="sobre-mi" ref={container} className="py-32 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center mb-24 text-center gsap-reveal">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tighter">{t.title}</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl">Mente táctica, código limpio.</p>
        </div>
        
        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          
          {/* Profile Image (Left column, tall) */}
          <div className="gsap-reveal md:col-span-1 rounded-[2rem] overflow-hidden bg-[#151516] border border-white/5 relative group h-[500px] flex flex-col justify-end transition-all duration-700 hover:scale-[1.01] hover:border-white/10">
            <img 
              src="/profile.jpg" 
              alt="Daniel Martínez Pascual - Army" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="relative z-20 p-8">
              <h3 className="text-2xl font-semibold text-white mb-1 tracking-tight">Daniel Martínez Pascual</h3>
              <p className="text-gray-400 text-sm mb-6 flex items-center gap-2 font-light">
                <Shield className="w-4 h-4 text-gray-500" /> Cabo en activo
              </p>
              
              <button 
                onClick={() => setShowCV(true)}
                className="flex items-center gap-3 px-5 py-3.5 bg-black/40 hover:bg-white text-white hover:text-black backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 w-full justify-center font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                <span>{t.download}</span>
              </button>
            </div>
          </div>

          {/* Content Column (Right column) */}
          <div className="md:col-span-2 flex flex-col gap-4 lg:gap-6">
            
            {/* About Text Box */}
            <div className="gsap-reveal bg-[#151516] p-8 lg:p-10 rounded-[2rem] border border-white/5 flex-1 flex flex-col justify-center transition-all duration-700 hover:bg-[#1c1c1e] hover:border-white/10">
              <article className="space-y-6 text-gray-400 leading-relaxed text-lg font-light tracking-wide">
                <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
                <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
                <p dangerouslySetInnerHTML={{ __html: t.p3 }} />
              </article>
            </div>

            {/* TryHackMe Simple Badge Card */}
            <a 
              href="https://tryhackme.com/p/danimarpas4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gsap-reveal bg-[#151516] p-6 lg:p-8 rounded-[2rem] border border-white/5 transition-all duration-700 hover:scale-[1.01] hover:bg-[#1c1c1e] hover:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 group relative"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h4 className="text-white font-medium text-xl mb-1 flex items-center gap-3 tracking-tight">
                  <Crosshair className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" /> 
                  {t.thmTitle}
                </h4>
                <p className="text-gray-400 text-sm font-light max-w-sm mb-2">
                  {t.thmDesc}
                </p>
                <div className="text-[10px] text-gray-700 font-mono italic">
                  {lang === 'ES' ? 'Pssst... ¿reclutador técnico? F12 o pulsa ~' : 'Pssst... tech recruiter? F12 or press ~'}
                </div>
              </div>
              <div className="shrink-0 px-6 py-2.5 bg-[#252528] rounded-full flex items-center gap-2 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                 <span className="font-medium text-sm tracking-tight">Ver Perfil &rarr;</span>
              </div>
            </a>

            {/* Skills Bento Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              
              <div className="gsap-reveal bg-[#151516] p-6 rounded-[2rem] border border-white/5 transition-all duration-700 hover:bg-[#1c1c1e] hover:border-white/10 flex flex-col">
                <div className="mb-4 text-gray-500">
                  <Server className="w-6 h-6" />
                </div>
                <h4 className="text-white font-medium mb-3 tracking-tight">Backend</h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skills.backend.slice(0,3).map(s => <span key={s} className="text-xs text-gray-500 font-light">{s}</span>)}
                </div>
              </div>
              
              <div className="gsap-reveal bg-[#151516] p-6 rounded-[2rem] border border-white/5 transition-all duration-700 hover:bg-[#1c1c1e] hover:border-white/10 flex flex-col">
                <div className="mb-4 text-gray-500">
                  <Layout className="w-6 h-6" />
                </div>
                <h4 className="text-white font-medium mb-3 tracking-tight">Frontend</h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skills.frontend.map(s => <span key={s} className="text-xs text-gray-500 font-light">{s}</span>)}
                </div>
              </div>
              
              <div className="gsap-reveal bg-[#151516] p-6 rounded-[2rem] border border-white/5 transition-all duration-700 hover:bg-[#1c1c1e] hover:border-white/10 flex flex-col">
                <div className="mb-4 text-gray-500">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-white font-medium mb-3 tracking-tight">DevOps</h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skills.tools.map(s => <span key={s} className="text-xs text-gray-500 font-light">{s}</span>)}
                </div>
              </div>
              
              <div className="gsap-reveal bg-[#151516] p-6 rounded-[2rem] border border-white/5 transition-all duration-700 hover:bg-[#1c1c1e] hover:border-white/10 flex flex-col">
                <div className="mb-4 text-gray-500">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-white font-medium mb-3 tracking-tight">Security</h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skills.security.map(s => <span key={s} className="text-xs text-gray-500 font-light">{s}</span>)}
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
