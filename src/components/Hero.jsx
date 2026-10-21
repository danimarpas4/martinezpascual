import React, { useRef } from 'react';
import { translations } from '../translations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import Terminal from './Terminal';

const Hero = ({ lang }) => {
  const t = translations[lang].hero;
  const container = useRef(null);
  const videoRef = useRef(null);
  const textRefs = useRef([]);
  const terminalRef = useRef(null);

  useGSAP(() => {
    let played = false;
    const playHeroAnimation = () => {
      if (played) return;
      played = true;
      const tl = gsap.timeline();
      
      tl.to(videoRef.current, {
        opacity: 0.4,
        duration: 1.5,
        ease: "power2.inOut"
      })
      .fromTo(textRefs.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", clearProps: "transform" },
        "-=1.2"
      )
      .fromTo(terminalRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "transform" },
        "-=0.6"
      );
    };

    window.addEventListener('appLoaded', playHeroAnimation, { once: true });
    const timer = setTimeout(playHeroAnimation, 2500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('appLoaded', playHeroAnimation);
    };
  }, { scope: container });

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section ref={container} id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Video (Muted, monochrome, subtle) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          ref={videoRef}
          className="w-full h-full object-cover opacity-0 grayscale contrast-125" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column (Text) */}
        <div className="flex flex-col items-start text-left">
          <h1 
            ref={addToRefs}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-4 tracking-tighter leading-none"
          >
            {t.title}
          </h1>
          
          <h2 
            ref={addToRefs}
            className="text-xl md:text-3xl font-medium mb-8 max-w-2xl text-slate-200 tracking-tight"
          >
            {t.subtitle}
          </h2>
          
          <p 
            ref={addToRefs}
            className="max-w-xl text-base md:text-lg text-slate-300 mb-12 leading-relaxed"
          >
            {t.desc}
          </p>
          
          <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#proyectos" className="px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200 text-center w-full sm:w-auto shadow-lg">
              {t.btnProjects}
            </a>
            <a href="#contacto" className="px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full font-medium transition-all duration-300 text-center w-full sm:w-auto backdrop-blur-xl">
              {t.btnContact}
            </a>
          </div>
        </div>

        {/* Right Column (Terminal) */}
        <div ref={terminalRef} className="w-full">
          <Terminal lang={lang} isInline={true} />
        </div>

      </div>
    </section>
  );
};

export default Hero;
