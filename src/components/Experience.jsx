import React, { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, Award, ExternalLink, Globe } from 'lucide-react';
import { translations } from '../translations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ lang }) => {
  const t = translations[lang].exp;
  const container = useRef(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.gsap-reveal-exp');
    
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

  return (
    <section id="experiencia" ref={container} className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-24 text-center gsap-reveal-exp">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tighter">{t.title}</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl">Operaciones tácticas y desarrollo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3 tracking-tight gsap-reveal-exp">
              <Briefcase className="text-gray-500 w-6 h-6" /> Experiencia Operativa
            </h3>
            <div className="border-l border-white/10 ml-4">
              {t.jobs.map((job, idx) => (
                <div key={idx} className="mb-12 relative pl-8 group gsap-reveal-exp">
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-500 rounded-full -left-[8.5px] top-1 ring-8 ring-black group-hover:bg-white transition-colors duration-500"></span>
                  <div className="flex flex-col">
                    <h4 className="font-medium text-white text-xl tracking-tight mb-1 group-hover:text-gray-300 transition-colors">
                      {job.role}
                    </h4>
                    <p className="text-gray-400 text-sm font-medium mb-3">{job.org}</p>
                    <span className="text-xs font-mono text-gray-500 bg-[#151516] border border-white/5 px-3 py-1.5 rounded-lg flex items-center gap-2 w-fit mb-4">
                      <Calendar className="w-3 h-3" /> {job.date}
                    </span>
                    <p className="text-gray-400 text-base leading-relaxed font-light">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3 tracking-tight gsap-reveal-exp">
              <GraduationCap className="text-gray-500 w-6 h-6" /> Educación y Estudios
            </h3>
            <div className="border-l border-white/10 ml-4">
              {t.edu.map((edu, idx) => (
                <div key={idx} className="mb-12 relative pl-8 group gsap-reveal-exp">
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-500 rounded-full -left-[8.5px] top-1 ring-8 ring-black group-hover:bg-white transition-colors duration-500"></span>
                  <div className="flex flex-col">
                    <h4 className="font-medium text-white text-xl tracking-tight mb-1 group-hover:text-gray-300 transition-colors">{edu.title}</h4>
                    <p className="text-gray-400 text-sm font-medium mb-3">{edu.org}</p>
                    <span className="text-xs font-mono text-gray-500 bg-[#151516] border border-white/5 px-3 py-1.5 rounded-lg flex items-center gap-2 w-fit">
                      <Calendar className="w-3 h-3" /> {edu.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorations & Languages */}
        <div className="mt-20 lg:mt-32 border-t border-white/5 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Decorations Column */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-3 tracking-tight mb-10 gsap-reveal-exp">
                <Award className="text-gray-500 w-7 h-7" /> {t.decorationsTitle}
              </h3>
              <div className="flex flex-col gap-6">
                {t.decorations.map((honor, idx) => (
                  <div key={idx} className="gsap-reveal-exp bg-[#151516] p-8 rounded-[2rem] border border-white/5 flex flex-col transition-all duration-700 hover:scale-[1.02] hover:bg-[#1c1c1e] hover:border-white/10">
                    <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full font-medium tracking-wide w-fit mb-6 border border-white/10">
                      {honor.badge}
                    </span>
                    <h4 className="text-white font-medium text-xl tracking-tight mb-4">{honor.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 flex-1">{honor.desc}</p>
                    
                    {honor.link && (
                      <a 
                        href={honor.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-sm text-white font-medium hover:text-gray-400 transition-colors mt-auto"
                      >
                        <ExternalLink className="w-4 h-4" /> {honor.linkText}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Column */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-3 tracking-tight mb-10 gsap-reveal-exp">
                <Globe className="text-gray-500 w-7 h-7" /> {t.languagesTitle}
              </h3>
              <div className="flex flex-col gap-6">
                {t.languages.map((lang, idx) => (
                  <div key={idx} className="gsap-reveal-exp bg-[#151516] p-8 rounded-[2rem] border border-white/5 flex flex-col transition-all duration-700 hover:scale-[1.02] hover:bg-[#1c1c1e] hover:border-white/10">
                    <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full font-medium tracking-wide w-fit mb-6 border border-white/10">
                      {lang.badge}
                    </span>
                    <h4 className="text-white font-medium text-xl tracking-tight mb-4">{lang.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 flex-1">{lang.desc}</p>
                    
                    {lang.link && (
                      <a 
                        href={lang.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-sm text-white font-medium hover:text-gray-400 transition-colors mt-auto"
                      >
                        <ExternalLink className="w-4 h-4" /> {lang.linkText}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
