import React, { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';

const Terminal = ({ lang, isOpen, onClose, isInline = false }) => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'SOC_TERMINAL_V1.0.0 [Autorizado para acceso invitado]' },
    { type: 'system', text: 'Escribe "help" para ver los comandos disponibles.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const t = translations[lang].about; // We can use some translations if needed

  // Auto-focus when opened
  useEffect(() => {
    if (isOpen || isInline) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isInline]);

  // Auto-scroll inside the terminal only
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `guest@dmp-soc:~$ ${cmd}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({ type: 'system', text: 'Comandos disponibles:' });
        newHistory.push({ type: 'system', text: '  whoami         - Mostrar identidad actual' });
        newHistory.push({ type: 'system', text: '  cat skills.txt - Ver matriz de habilidades' });
        newHistory.push({ type: 'system', text: '  clear          - Limpiar consola' });
        newHistory.push({ type: 'system', text: '  sudo hire      - Iniciar protocolo de contratación' });
        newHistory.push({ type: 'system', text: '  exit           - Cerrar terminal' });
        break;
      case 'whoami':
        newHistory.push({ type: 'system', text: 'daniel_martinez_pascual' });
        newHistory.push({ type: 'system', text: 'Role: Blue Team Specialist / Full-Stack Developer' });
        break;
      case 'cat skills.txt':
        newHistory.push({ type: 'system', text: '[DEFENSE]: Ciberseguridad, Monitorización, Análisis de Logs' });
        newHistory.push({ type: 'system', text: '[BACKEND]: Python, Django, SQL, APIs REST' });
        newHistory.push({ type: 'system', text: '[FRONTEND]: React, Tailwind, JavaScript' });
        newHistory.push({ type: 'system', text: '[TACTICAL]: Liderazgo, Seguridad Operacional (OTAN/UE)' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'sudo hire':
      case 'sudo hire daniel':
        newHistory.push({ type: 'system', text: 'Ejecutando protocolo de contratación...' });
        newHistory.push({ type: 'system', text: 'INFO: Redireccionando a la sección de contacto.' });
        setTimeout(() => {
          if (!isInline) onClose();
          document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
        break;
      case 'exit':
        if (isInline) {
          newHistory.push({ type: 'error', text: 'bash: exit: Operación denegada. No se puede cerrar la interfaz principal del SOC.' });
        } else {
          onClose();
        }
        return;
      case '':
        break;
      default:
        newHistory.push({ type: 'error', text: `bash: ${cleanCmd}: comando no encontrado` });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const terminalContent = (
    <div 
      className={`w-full bg-[#0c0c0e] rounded-xl border border-white/20 shadow-2xl flex flex-col font-mono text-sm overflow-hidden ring-1 ring-white/10 ${isInline ? 'h-[400px] lg:h-[450px]' : 'max-w-3xl h-[60vh]'}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Terminal Header */}
      <div className="bg-[#1c1c1e] px-4 py-3 flex items-center gap-2 border-b border-white/10">
        <div className={`w-3 h-3 rounded-full ${isInline ? 'bg-red-500/50' : 'bg-red-500 cursor-pointer'}`} onClick={!isInline ? onClose : undefined}></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs text-gray-400">guest@dmp-soc: ~</div>
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-2 scroll-smooth" 
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, i) => (
          <div 
            key={i} 
            className={`${
              entry.type === 'user' ? 'text-white' : 
              entry.type === 'error' ? 'text-red-400' : 'text-emerald-400'
            }`}
          >
            {entry.text}
          </div>
        ))}
        
        <div className="flex items-center text-white">
          <span className="text-emerald-400 mr-2">guest@dmp-soc:~$</span>
          <input 
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );

  if (isInline) return terminalContent;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      {terminalContent}
    </div>
  );
};

export default Terminal;
