import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import CVPrint from './components/CVPrint';
import { TerminalSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [lang, setLang] = useState('ES');
  const [loading, setLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);
  
  const loaderRef = useRef(null);
  const loaderTextRef = useRef(null);

  // Tracker: notify once per session
  useEffect(() => {
    if (!sessionStorage.getItem('tracked')) {
      fetch('/api/track', { method: 'POST' }).catch(() => {});
      sessionStorage.setItem('tracked', 'true');
    }
  }, []);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Global Keydown for Terminal
  useEffect(() => {
    // CTF Easter Egg
    console.log("%c========================================", "color: #10b981; font-weight: bold;");
    console.log("%c    HACK THE PLANET! 🌎", "color: #10b981; font-size: 20px; font-weight: bold;");
    console.log("%c========================================", "color: #10b981; font-weight: bold;");
    console.log("%c¡Enhorabuena por mirar aquí! Estás demostrando la mentalidad Blue Team adecuada.", "color: white;");
    console.log("%cFLAG{DANIEL_SOC_2026_HIRE_ME}", "color: #ef4444; font-weight: bold; font-size: 16px; background: black; padding: 4px;");
    console.log("%cSi quieres ver algo más, pulsa la tecla ~ (o º en teclado español) para abrir la terminal SOC oculta.", "color: gray; font-style: italic;");
    
    const handleKeyDown = (e) => {
      // Tilde (~), Backtick (`), or ordinal indicator (º) common on ES keyboards
      if (e.key === '`' || e.key === '~' || e.key === 'º') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Preloader GSAP Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        // Dispatch event so children components know initial load is done
        window.dispatchEvent(new Event('appLoaded'));
      }
    });

    tl.to(loaderTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
    .to(loaderTextRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.in",
      delay: 0.5
    })
    .to(loaderRef.current, {
      height: 0,
      duration: 1.2,
      ease: "power4.inOut"
    });
  });

  return (
    <>
      {showCV && <CVPrint lang={lang} onClose={() => setShowCV(false)} />}
      
      <div className={showCV ? 'hidden' : 'block'}>
        <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} lang={lang} />
        
        {/* Preloader */}
        <div 
          ref={loaderRef} 
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          <div ref={loaderTextRef} className="opacity-0 translate-y-10 text-white font-medium text-2xl tracking-tighter">
            Daniel Martínez Pascual.
          </div>
        </div>

        <div className="flex flex-col min-h-screen bg-black text-white">
          <Navbar lang={lang} setLang={setLang} />
          <main className="flex-grow">
            <Hero lang={lang} />
            <About lang={lang} setShowCV={setShowCV} />
            <Experience lang={lang} />
            <Projects lang={lang} />
            <Contact lang={lang} />
          </main>
          <Footer />
          
          <button 
            onClick={() => setIsTerminalOpen(true)}
            className="fixed bottom-6 right-6 z-40 p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            title="Abrir Terminal SOC"
          >
            <TerminalSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
