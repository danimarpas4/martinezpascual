import React, { useState } from 'react';
import { X, Download, ExternalLink, ShieldCheck } from 'lucide-react';

const CVPrint = ({ lang, onClose }) => {
  const [copiedHash, setCopiedHash] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText("0a134ebdab1b7af660500ffd18895e7537fdca7b2e2fbdd2ff7e5d3faee95362");
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center p-3 sm:p-6 overflow-hidden">
      {/* Control Bar */}
      <div className="w-full max-w-5xl flex flex-wrap justify-between items-center gap-3 mb-4 bg-[#151516] border border-white/10 px-5 py-3 rounded-2xl shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-white font-medium text-xs sm:text-sm font-mono truncate max-w-[200px] sm:max-w-none">
            DANIEL_MARTÍNEZ_PASCUAL_v3.pdf
          </span>
          <button
            type="button"
            onClick={handleCopyHash}
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-black/60 hover:bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 rounded-lg text-[11px] font-mono transition-colors"
            title="SHA-256: 0a134ebdab1b7af660500ffd18895e7537fdca7b2e2fbdd2ff7e5d3faee95362"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SHA-256: 0a134ebd...</span>
            <span className="text-slate-400 font-sans text-[10px] ml-1">{copiedHash ? "✓ Copiado" : "(Copiar)"}</span>
          </button>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="/DANIEL_MARTÍNEZ_PASCUAL_v3.pdf" 
            download="DANIEL_MARTÍNEZ_PASCUAL_v3.pdf"
            className="flex items-center gap-2 bg-white text-black px-3 sm:px-4 py-2 rounded-xl font-medium text-xs hover:bg-gray-200 transition-colors shadow-lg"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{lang === 'ES' ? 'Descargar' : 'Download'}</span>
          </a>
          
          <a 
            href="/DANIEL_MARTÍNEZ_PASCUAL_v3.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 text-white px-3 sm:px-4 py-2 rounded-xl font-medium text-xs hover:bg-white/20 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">{lang === 'ES' ? 'Pestaña nueva' : 'New tab'}</span>
          </a>
          
          <button 
            type="button"
            onClick={onClose} 
            className="flex items-center gap-1.5 bg-red-500/10 text-red-400 border border-red-500/20 px-3 sm:px-4 py-2 rounded-xl font-medium text-xs hover:bg-red-500 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>{lang === 'ES' ? 'Cerrar' : 'Close'}</span>
          </button>
        </div>
      </div>

      {/* Embedded Real PDF Viewer */}
      <div className="w-full max-w-5xl flex-1 bg-[#151516] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
        <iframe 
          src="/DANIEL_MARTÍNEZ_PASCUAL_v3.pdf#toolbar=1" 
          title="CV Daniel Martinez Pascual v3"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

export default CVPrint;
