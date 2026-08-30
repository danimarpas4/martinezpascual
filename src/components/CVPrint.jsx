import React, { useEffect, useRef } from 'react';
import { translations } from '../translations';
import { Printer, X } from 'lucide-react';

const CVPrint = ({ lang, onClose }) => {
  const t = translations[lang];

  return (
    <div className="bg-[#0c0c0e] min-h-screen relative flex flex-col items-center py-20">
      
      {/* Control Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#151516] border-b border-white/10 p-4 flex justify-between items-center z-50 shadow-2xl">
        <span className="text-white font-medium text-sm ml-4">Curriculum_Vitae_DMP.pdf</span>
        <div className="flex gap-4 mr-4">
          <button 
            onClick={() => window.print()} 
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            <Printer className="w-4 h-4" /> {lang === 'ES' ? 'Imprimir / Guardar PDF' : 'Print / Save PDF'}
          </button>
          <button 
            onClick={onClose} 
            className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-lg font-medium text-sm hover:bg-red-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" /> {lang === 'ES' ? 'Volver al Portfolio' : 'Back to Portfolio'}
          </button>
        </div>
      </div>

      {/* CV A4 Paper */}
      <div className="bg-white text-black w-full max-w-[21cm] min-h-[29.7cm] p-[2cm] shadow-2xl print:shadow-none print:p-0 print:m-0">
      <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-1">Daniel Martínez Pascual</h1>
          <h2 className="text-xl text-gray-600">{t.hero.subtitle}</h2>
        </div>
        <div className="text-right text-sm text-gray-600">
          <p>github.com/danimarpas4</p>
          <p>tryhackme.com/p/danimarpas4</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold border-b border-gray-300 mb-4 uppercase tracking-wider">{lang === 'ES' ? 'Perfil' : 'Profile'}</h3>
        <p className="text-sm leading-relaxed">{t.hero.desc} {t.about.p3.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="text-lg font-bold border-b border-gray-300 mb-4 uppercase tracking-wider">{t.exp.title}</h3>
          
          <div className="mb-6">
            <h4 className="font-bold">{t.exp.jobs[0].role}</h4>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{t.exp.jobs[0].org}</span>
              <span>{t.exp.jobs[0].date}</span>
            </div>
            <p className="text-sm">{t.exp.jobs[0].desc}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-bold">{t.exp.jobs[1].role}</h4>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{t.exp.jobs[1].org}</span>
              <span>{t.exp.jobs[1].date}</span>
            </div>
            <p className="text-sm">{t.exp.jobs[1].desc}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-bold">{t.exp.jobs[2].role}</h4>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{t.exp.jobs[2].org}</span>
              <span>{t.exp.jobs[2].date}</span>
            </div>
            <p className="text-sm">{t.exp.jobs[2].desc}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold border-b border-gray-300 mb-4 uppercase tracking-wider">{lang === 'ES' ? 'Educación' : 'Education'}</h3>
          {t.exp.edu.map((edu, i) => (
            <div key={i} className="mb-4">
              <h4 className="font-bold text-sm leading-tight">{edu.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{edu.org}</p>
              <p className="text-xs text-gray-500">{edu.date}</p>
            </div>
          ))}

          <h3 className="text-lg font-bold border-b border-gray-300 mb-4 mt-8 uppercase tracking-wider">{t.exp.languagesTitle}</h3>
          {t.exp.languages.map((langItem, i) => (
            <div key={i} className="mb-4">
              <h4 className="font-bold text-sm">{langItem.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{langItem.badge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CVPrint;
