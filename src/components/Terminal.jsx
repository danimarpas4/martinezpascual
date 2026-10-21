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
        newHistory.push({ type: 'system', text: '  whoami         - Identidad y rol actual' });
        newHistory.push({ type: 'system', text: '  soc status     - Telemetría y estado de defensas del VPS' });
        newHistory.push({ type: 'system', text: '  certs          - Certificaciones y formación complementaria' });
        newHistory.push({ type: 'system', text: '  cv             - Descargar CV v3 en PDF' });
        newHistory.push({ type: 'system', text: '  cat skills.txt - Ver matriz de habilidades' });
        newHistory.push({ type: 'system', text: '  writeups       - Ver últimos CTFs resueltos' });
        newHistory.push({ type: 'system', text: '  sudo hire      - Iniciar protocolo de contratación' });
        newHistory.push({ type: 'system', text: '  clear          - Limpiar consola' });
        newHistory.push({ type: 'system', text: '  exit           - Cerrar terminal' });
        break;
      case 'whoami':
        newHistory.push({ type: 'system', text: 'daniel_martinez_pascual' });
        newHistory.push({ type: 'system', text: 'Role: Aspirante a Analista SOC (N1) · Blue Team · Ciberdefensa' });
        newHistory.push({ type: 'system', text: 'Status: Cabo en activo del Ejército de Tierra (Misiones OTAN/UE)' });
        break;
      case 'soc status':
      case 'status':
        newHistory.push({ type: 'system', text: '[VPS TELEMETRY - Hetzner Cloud Hardened Node]' });
        newHistory.push({ type: 'system', text: '  ● HOSTNAME:   srv-sec-node-01 [REDACTED]' });
        newHistory.push({ type: 'system', text: '  ● IP / NODE:  91.98.***.*** [MASKED - OPSEC PROTOCOL]' });
        newHistory.push({ type: 'system', text: '  ● STATUS:     ONLINE / HARDENED' });
        newHistory.push({ type: 'system', text: '  ● FIREWALL:   UFW Active (Puertos 22, 80, 443 estrictos)' });
        newHistory.push({ type: 'system', text: '  ● FAIL2BAN:   2 jails activas (sshd, nginx-botsearch)' });
        newHistory.push({ type: 'system', text: '  ● TLS/SSL:    Let\'s Encrypt TLS 1.3 (HSTS estricto)' });
        newHistory.push({ type: 'system', text: '  ● DEFENSE:    SSH ed25519 strictly enforced (password auth off)' });
        newHistory.push({ type: 'system', text: '  ● AUDIT LOGS: Nginx active error/access log monitoring' });
        break;
      case 'certs':
      case 'certificaciones':
        newHistory.push({ type: 'system', text: '[CERTIFICACIONES & FORMACIÓN - CV v3]' });
        newHistory.push({ type: 'system', text: '  [✓] TryHackMe: Pre Security (Completado)' });
        newHistory.push({ type: 'system', text: '  [✓] TryHackMe: Cyber Security 101 (Completado)' });
        newHistory.push({ type: 'system', text: '  [⚙] TryHackMe: SOC Level 1 (En curso)' });
        newHistory.push({ type: 'system', text: '  [✓] Big Data aplicado al negocio (FADE - Nov 2025)' });
        newHistory.push({ type: 'system', text: '  [🎯] Objetivos: CompTIA Security+ · AWS Cloud · BTL1' });
        break;
      case 'cv':
      case 'download cv':
        newHistory.push({ type: 'system', text: 'INFO: Abriendo y descargando DANIEL_MARTÍNEZ_PASCUAL_v3.pdf...' });
        newHistory.push({ type: 'system', text: '  ● ARCHIVO:   DANIEL_MARTÍNEZ_PASCUAL_v3.pdf' });
        newHistory.push({ type: 'system', text: '  ● ALGORITMO: SHA-256' });
        newHistory.push({ type: 'system', text: '  ● HASH:      0a134ebdab1b7af660500ffd18895e7537fdca7b2e2fbdd2ff7e5d3faee95362' });
        newHistory.push({ type: 'system', text: '  ● ESTADO:    [INTEGRIDAD FORENSE VERIFICADA - COPIA OFICIAL]' });
        window.open('/DANIEL_MARTÍNEZ_PASCUAL_v3.pdf', '_blank');
        break;
      case 'sha256':
      case 'hash':
      case 'sha256sum':
        newHistory.push({ type: 'system', text: '[VERIFICACIÓN DE INTEGRIDAD CRIPTOGRÁFICA (SHA-256)]' });
        newHistory.push({ type: 'system', text: '  ● /DANIEL_MARTÍNEZ_PASCUAL_v3.pdf' });
        newHistory.push({ type: 'system', text: '    0a134ebdab1b7af660500ffd18895e7537fdca7b2e2fbdd2ff7e5d3faee95362' });
        newHistory.push({ type: 'system', text: '  ● ESTADO:    OK (Fichero inmutable verificado)' });
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
      case 'writeups':
        newHistory.push({ type: 'system', text: 'Listando write-ups recientes (Acceso autorizado):' });
        newHistory.push({ type: 'system', text: ' [1] TryHackMe - Vulnversity (Rooted)' });
        newHistory.push({ type: 'system', text: ' [2] HackTheBox - Lame (Privilege Escalation)' });
        newHistory.push({ type: 'system', text: 'INFO: Abriendo TryHackMe...' });
        setTimeout(() => {
          window.open('https://tryhackme.com/p/danimarpas4', '_blank');
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
