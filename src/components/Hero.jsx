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
    // Wait for the main app loader to finish before animating
    const handleLoad = () => {
      const tl = gsap.timeline();
      
      tl.to(videoRef.current, {
        opacity: 0.4,
        duration: 2,
        ease: "power2.inOut"
      })
      .fromTo(textRefs.current, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        "-=1.5"
      )
      .fromTo(terminalRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1.0"
      );
    };

    window.addEventListener('appLoaded', handleLoad);
    return () => window.removeEventListener('appLoaded', handleLoad);
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-4 tracking-tighter leading-none opacity-0"
          >
            {t.title}
          </h1>
          
          <h2 
            ref={addToRefs}
            className="text-xl md:text-3xl font-medium mb-8 max-w-2xl text-gray-400 tracking-tight opacity-0"
          >
            {t.subtitle}
          </h2>
          
          <p 
            ref={addToRefs}
            className="max-w-xl text-base md:text-lg text-gray-500 mb-12 leading-relaxed font-light opacity-0"
          >
            {t.desc}
          </p>
          
          <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0">
            <a href="#proyectos" className="px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200 text-center w-full sm:w-auto">
              {t.btnProjects}
            </a>
            <a href="#contacto" className="px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full font-medium transition-all duration-300 text-center w-full sm:w-auto backdrop-blur-xl">
              {t.btnContact}
            </a>
          </div>
        </div>

        {/* Right Column (Terminal) */}
        <div ref={terminalRef} className="w-full opacity-0">
          <Terminal lang={lang} isInline={true} />
        </div>

      </div>
    </section>
  );
};

export default Hero;
