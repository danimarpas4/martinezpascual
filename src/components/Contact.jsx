import React, { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { translations } from '../translations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Radar from './Radar';

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ lang }) => {
  const t = translations[lang].contact;
  const container = useRef(null);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('idle');
        alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setStatus('idle');
      alert("No se pudo conectar con el servidor.");
    }
  };

  useGSAP(() => {
    const elements = gsap.utils.toArray('.gsap-reveal-contact');
    
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="contacto" ref={container} className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      
      {/* Background Radar Animation */}
      <Radar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center mb-16 text-center gsap-reveal-contact">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tighter">{t.title}</h2>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-xl">{t.desc}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#151516] p-8 md:p-10 rounded-[2rem] border border-white/5 gsap-reveal-contact relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">{t.name}</label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.namePh}
                disabled={status !== 'idle'}
                className="w-full px-5 py-4 bg-[#1c1c1e] text-white border border-white/5 rounded-xl focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300 outline-none font-light placeholder:text-gray-600 disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">{t.email}</label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.emailPh}
                disabled={status !== 'idle'}
                className="w-full px-5 py-4 bg-[#1c1c1e] text-white border border-white/5 rounded-xl focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300 outline-none font-light placeholder:text-gray-600 disabled:opacity-50"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">{t.msg}</label>
            <textarea 
              id="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t.msgPh}
              disabled={status !== 'idle'}
              className="w-full px-5 py-4 bg-[#1c1c1e] text-white border border-white/5 rounded-xl focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300 outline-none font-light resize-none placeholder:text-gray-600 disabled:opacity-50"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={status !== 'idle'}
            className={`w-full py-4 font-semibold rounded-xl transition-all duration-500 flex items-center justify-center gap-2 mt-4 
              ${status === 'idle' ? 'bg-white text-black hover:bg-gray-200' : ''}
              ${status === 'loading' ? 'bg-gray-800 text-white cursor-not-allowed' : ''}
              ${status === 'success' ? 'bg-emerald-500 text-white' : ''}
            `}
          >
            {status === 'idle' && <><Send className="w-4 h-4" /> {t.send}</>}
            {status === 'loading' && <span className="animate-pulse">Enviando...</span>}
            {status === 'success' && <span>✓ Mensaje Enviado</span>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
