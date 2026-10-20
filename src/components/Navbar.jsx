import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Menu, X } from 'lucide-react';
import { translations } from '../translations';

const Navbar = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const t = translations[lang].nav;
  
  useEffect(() => {
    const updateProgress = (pct, scrollY) => {
      const clamped = Math.min(100, Math.max(0, pct));
      setScrollProgress(clamped);
      setScrolled(scrollY > 20);
    };

    // 1. GSAP ScrollTrigger listener (synced directly with Lenis smooth scroll)
    const st = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        updateProgress(self.progress * 100, self.scroll());
      }
    });

    // 2. Native window scroll listener fallback
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      const docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      ) - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      updateProgress(pct, scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    setTimeout(handleScroll, 100);

    return () => {
      st.kill();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'contacto'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  const toggleLang = () => {
    setLang(prev => prev === 'ES' ? 'EN' : 'ES');
  };

  const getLinkClasses = (section) => {
    const isActive = activeSection === section;
    return `relative group text-xs transition-colors duration-300 font-medium tracking-wide pb-1 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`;
  };

  const getUnderlineClasses = (section) => {
    const isActive = activeSection === section;
    return `absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`;
  };

  return (
    <>
    <header className={`fixed w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex-shrink-0">
            <a href="#inicio" className="text-white font-medium text-lg tracking-tight hover:opacity-70 transition-opacity duration-300">
              Daniel Martínez Pascual
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-baseline space-x-6">
              <li>
                <a href="#inicio" className={getLinkClasses('inicio')}>
                  {t.home}
                  <span className={getUnderlineClasses('inicio')}></span>
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className={getLinkClasses('sobre-mi')}>
                  {t.about}
                  <span className={getUnderlineClasses('sobre-mi')}></span>
                </a>
              </li>
              <li>
                <a href="#experiencia" className={getLinkClasses('experiencia')}>
                  {t.exp}
                  <span className={getUnderlineClasses('experiencia')}></span>
                </a>
              </li>
              <li>
                <a href="#proyectos" className={getLinkClasses('proyectos')}>
                  {t.projects}
                  <span className={getUnderlineClasses('proyectos')}></span>
                </a>
              </li>
              <li>
                <a href="#contacto" className={getLinkClasses('contacto')}>
                  {t.contact}
                  <span className={getUnderlineClasses('contacto')}></span>
                </a>
              </li>
            </ul>
            
            <button 
              onClick={toggleLang}
              className="text-xs text-gray-400 hover:text-white transition-colors duration-300 font-medium tracking-wide"
              aria-label="Toggle Language"
            >
              {lang === 'ES' ? 'EN' : 'ES'}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="text-xs text-gray-400 hover:text-white transition-colors font-medium tracking-wide"
            >
              {lang === 'ES' ? 'EN' : 'ES'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white transition-colors">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-black/90 backdrop-blur-xl border-b border-white/10">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-sm font-medium tracking-wide transition-colors ${activeSection === 'inicio' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>{t.home}</a>
            <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-sm font-medium tracking-wide transition-colors ${activeSection === 'sobre-mi' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>{t.about}</a>
            <a href="#experiencia" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-sm font-medium tracking-wide transition-colors ${activeSection === 'experiencia' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>{t.exp}</a>
            <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-sm font-medium tracking-wide transition-colors ${activeSection === 'proyectos' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>{t.projects}</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-sm font-medium tracking-wide transition-colors ${activeSection === 'contacto' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>{t.contact}</a>
          </div>
        </div>
      </nav>
    </header>
      {/* Scroll Progress Bar (Terminal Emerald #34d399 glow) */}
      <div className="w-full h-[3px] bg-emerald-950/20 fixed top-0 left-0 z-[100] pointer-events-none">
        <div 
          className="h-full bg-emerald-400 shadow-[0_0_12px_#34d399,0_0_4px_#10b981] transition-all duration-75 relative" 
          style={{ width: `${scrollProgress}%` }}
        >
          {scrollProgress > 0 && scrollProgress < 100 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#34d399]"></div>
          )}
        </div>
      </div>
    </>

  );
};

export default Navbar;
