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
import { TerminalSquare, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [lang, setLang] = useState('ES');
  const [loading, setLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  
  const loaderRef = useRef(null);
  const loaderTextRef = useRef(null);

  // Tracker: notify once per session
  useEffect(() => {
    if (!sessionStorage.getItem('tracked')) {
      fetch('/api/track', { method: 'POST' }).catch(() => {});
      sessionStorage.setItem('tracked', 'true');
    }
  }, []);

    useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Unified single RAF loop via GSAP ticker to eliminate frame jitter
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Hook progress into Lenis directly (e.progress goes smoothly 0 to 1)
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      if (typeof e.progress === 'number' && !isNaN(e.progress)) {
        setScrollProgress(Math.min(100, Math.max(0, e.progress * 100)));
      }
    });

    const handleNativeScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const pct = (scrollY / total) * 100;
        if (!isNaN(pct)) {
          setScrollProgress(Math.min(100, Math.max(0, pct)));
        }
      }
    };
    window.addEventListener('scroll', handleNativeScroll, { passive: true });

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      window.removeEventListener('scroll', handleNativeScroll);
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

                {/* Scroll Progress Bar (Terminal Emerald #34d399 glow) */}
        <div className="w-full h-[3px] bg-emerald-950/20 fixed top-0 left-0 z-[100] pointer-events-none">
          <div 
            className="h-full bg-emerald-400 shadow-[0_0_12px_#34d399,0_0_4px_#10b981] relative will-change-[width]" 
            style={{ width: `${scrollProgress}%` }}
          >
            {scrollProgress > 0 && scrollProgress < 100 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#34d399]"></div>
            )}
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
          
          {/* Back to top button */}
          <button 
            id="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-20 right-6 z-40 p-3 bg-black border border-white/20 rounded-full text-white hover:bg-emerald-900/50 transition-all duration-300 backdrop-blur-md ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            title="Volver arriba"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsTerminalOpen(true)}
            className="fixed bottom-6 right-6 z-40 p-3 bg-black border border-white/20 rounded-full text-emerald-500 hover:text-white hover:bg-emerald-900/50 transition-all duration-300 backdrop-blur-md group"
            title="Abrir Terminal SOC"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75 group-hover:animate-none"></span>
            <TerminalSquare className="w-5 h-5 relative z-10" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
