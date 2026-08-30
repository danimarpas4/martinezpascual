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

  useEffect(() => {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];

    const init = () => {
      particles = [];
      for (let i = 0; i < (window.innerWidth < 768 ? 40 : 100); i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.5)'; // Emerald
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 - dist/1000})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      {/* Background Network Canvas */}
      <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-black/80 to-black z-10 pointer-events-none"></div>
        <canvas id="network-canvas" className="absolute inset-0 w-full h-full opacity-0" ref={videoRef}></canvas>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
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
