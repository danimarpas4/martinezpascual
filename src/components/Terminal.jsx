import React, { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';

const Terminal = ({ lang, isOpen, onClose, isInline = false }) => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'SOC_TERMINAL_V1.2.0 [Autorizado para acceso invitado · RFC 9116 Compliant]' },
    { type: 'system', text: 'Escribe "help" o "ls" para ver comandos y archivos disponibles.' }
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const inputRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const t = translations[lang].about;

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
    const rawCmd = cmd.trim();
    const cleanCmd = rawCmd.toLowerCase();
    const newHistory = [...history, { type: 'user', text: `guest@dmp-soc:~$ ${cmd}` }];

    // Cat handler
    if (cleanCmd.startsWith('cat ') || cleanCmd === 'cat') {
      const parts = rawCmd.split(/\s+/);
      const targetFile = parts[1] ? parts[1].toLowerCase().replace(/^(\.\/)/, '') : '';

      if (!targetFile) {
        newHistory.push({ type: 'error', text: 'cat: falta el operando de archivo. Ejemplo: cat skills.txt' });
      } else if (targetFile === 'skills.txt') {
        newHistory.push({ type: 'system', text: '[DEFENSE]: Ciberseguridad, Triage de Alertas, Análisis de Logs' });
        newHistory.push({ type: 'system', text: '[BACKEND]: Python, Django, SQL, APIs REST, Nginx Hardening' });
        newHistory.push({ type: 'system', text: '[FRONTEND]: React, Tailwind CSS, JavaScript' });
        newHistory.push({ type: 'system', text: '[TACTICAL]: Disciplina Militar, Liderazgo, Seguridad Operacional (OTAN/UE)' });
      } else if (targetFile === 'security.txt' || targetFile === '.well-known/security.txt') {
        newHistory.push({ type: 'system', text: '# RFC 9116 - Security Vulnerability Disclosure Policy' });
        newHistory.push({ type: 'system', text: 'Contact: mailto:danimarpas4@gmail.com' });
        newHistory.push({ type: 'system', text: 'Contact: https://martinezpascual.es/#contacto' });
        newHistory.push({ type: 'system', text: 'Expires: 2027-12-31T23:59:59.000Z' });
        newHistory.push({ type: 'system', text: 'Preferred-Languages: es, en' });
        newHistory.push({ type: 'system', text: 'Canonical: https://martinezpascual.es/.well-known/security.txt' });
        newHistory.push({ type: 'system', text: 'Policy: https://martinezpascual.es/' });
        newHistory.push({ type: 'system', text: 'Hiring: https://martinezpascual.es/#contacto' });
      } else if (targetFile === 'soc_telemetry.log' || targetFile === 'telemetry.log') {
        newHistory.push({ type: 'system', text: '[HETZNER CLOUD VPS - BLUE TEAM TELEMETRY]' });
        newHistory.push({ type: 'system', text: '  ● HOSTNAME:      srv-sec-node-01 (Ubuntu 24.04 LTS x86_64)' });
        newHistory.push({ type: 'system', text: '  ● IP / NODE:     91.98.***.*** [OPSEC PROTOCOL ACTIVE]' });
        newHistory.push({ type: 'system', text: '  ● STATUS:        ONLINE / DEFENSE IN DEPTH' });
        newHistory.push({ type: 'system', text: '  ● REVERSE PROXY: Nginx 1.24 + Rate Limiting (1r/s burst=3 on /api/track)' });
        newHistory.push({ type: 'system', text: '  ● SECURITY HDRS: Grade A+ (Strict CSP, HSTS 31536000 preload, X-Content-Type)' });
        newHistory.push({ type: 'system', text: '  ● INTEGRITY:     SHA-256 Validated Assets' });
      } else if (targetFile.includes('daniel_mart') || targetFile.includes('cv') || targetFile.endsWith('.pdf')) {
        newHistory.push({ type: 'system', text: '[STREAM BINARIO]: Formato Documento Portable (PDF) - 150.101 bytes' });
        newHistory.push({ type: 'system', text: '  ● SHA-256: 0a134ebdab1b7af660500ffd18895e7537fdca7b2e2fbdd2ff7e5d3faee95362' });
        newHistory.push({ type: 'info', text: '  ● TIP: Escribe el comando "cv" para abrir y descargar la copia oficial verificada.' });
      } else {
        newHistory.push({ type: 'error', text: `cat: ${parts[1]}: No existe el archivo o el directorio` });
      }
      setHistory(newHistory);
      setInput('');
      return;
    }

    switch (cleanCmd) {
      case 'help':
        newHistory.push({ type: 'system', text: 'Comandos disponibles:' });
        newHistory.push({ type: 'system', text: '  ls / dir       - Listar archivos del directorio actual' });
        newHistory.push({ type: 'system', text: '  cat [archivo]  - Leer contenido de un archivo (ej: cat skills.txt)' });
        newHistory.push({ type: 'system', text: '  whoami         - Identidad y rol actual' });
        newHistory.push({ type: 'system', text: '  soc status     - Telemetría y estado de defensas del nodo' });
        newHistory.push({ type: 'system', text: '  matrix         - Matriz de habilidades Fuerzas Armadas -> SOC' });
        newHistory.push({ type: 'system', text: '  certs          - Certificaciones y formación complementaria' });
        newHistory.push({ type: 'system', text: '  cv             - Descargar CV v3 en PDF (Copia verificada)' });
        newHistory.push({ type: 'system', text: '  sha256         - Verificación criptográfica del CV' });
        newHistory.push({ type: 'system', text: '  writeups       - Ver últimos CTFs resueltos (TryHackMe)' });
        newHistory.push({ type: 'system', text: '  contact        - Abrir protocolo de contacto seguro' });
        newHistory.push({ type: 'system', text: '  uname -a       - Información del kernel y sistema operativo' });
        newHistory.push({ type: 'system', text: '  history        - Historial de comandos de esta sesión' });
        newHistory.push({ type: 'system', text: '  sudo hire      - Iniciar protocolo de contratación' });
        newHistory.push({ type: 'system', text: '  clear          - Limpiar consola' });
        newHistory.push({ type: 'system', text: '  exit           - Cerrar terminal' });
        newHistory.push({ type: 'info', text: 'Tip: Usa las flechas [↑] y [↓] para navegar por comandos anteriores.' });
        break;

      case 'ls':
      case 'dir':
        newHistory.push({ type: 'system', text: 'DANIEL_MARTÍNEZ_PASCUAL_v3.pdf  security.txt  skills.txt  soc_telemetry.log  writeups/' });
        break;

      case 'ls -la':
      case 'ls -l':
      case 'll':
        newHistory.push({ type: 'system', text: 'total 28' });
        newHistory.push({ type: 'system', text: 'drwxr-xr-x 2 dmp-soc dmp-soc 4096 Oct 21 18:20 .' });
        newHistory.push({ type: 'system', text: 'drwxr-xr-x 4 root    root    4096 Oct 16 11:22 ..' });
        newHistory.push({ type: 'system', text: '-r--r--r-- 1 dmp-soc dmp-soc 150K Oct 21 09:11 DANIEL_MARTÍNEZ_PASCUAL_v3.pdf' });
        newHistory.push({ type: 'system', text: '-rw-r--r-- 1 dmp-soc dmp-soc  440 Oct 21 18:20 security.txt' });
        newHistory.push({ type: 'system', text: '-rw-r--r-- 1 dmp-soc dmp-soc  380 Oct 21 09:11 skills.txt' });
        newHistory.push({ type: 'system', text: '-rw-r--r-- 1 dmp-soc dmp-soc  512 Oct 21 10:48 soc_telemetry.log' });
        newHistory.push({ type: 'system', text: 'drwxr-xr-x 2 dmp-soc dmp-soc 4096 Oct 21 09:11 writeups/' });
        break;

      case 'whoami':
        newHistory.push({ type: 'system', text: 'daniel_martinez_pascual' });
        newHistory.push({ type: 'system', text: 'Role: Aspirante a Analista SOC (N1) · Blue Team · Ciberdefensa' });
        newHistory.push({ type: 'system', text: 'Status: Cabo en activo del Ejército de Tierra (Misiones OTAN/UE)' });
        break;

      case 'soc status':
      case 'status':
        newHistory.push({ type: 'system', text: '[VPS TELEMETRY - Hetzner Cloud Hardened Node]' });
        newHistory.push({ type: 'system', text: '  ● HOSTNAME:      srv-sec-node-01 [REDACTED]' });
        newHistory.push({ type: 'system', text: '  ● IP / NODE:     91.98.***.*** [MASKED - OPSEC PROTOCOL]' });
        newHistory.push({ type: 'system', text: '  ● STATUS:        ONLINE / HARDENED' });
        newHistory.push({ type: 'system', text: '  ● RATE LIMITING: Activo (1 req/seg burst=3 en /api/track)' });
        newHistory.push({ type: 'system', text: '  ● TLS/SSL:       Let\'s Encrypt TLS 1.3 (HSTS estricto 31536000)' });
        newHistory.push({ type: 'system', text: '  ● RFC 9116:      security.txt desplegado y validado' });
        newHistory.push({ type: 'system', text: '  ● DEFENSE:       SSH ed25519 strictly enforced (password auth off)' });
        newHistory.push({ type: 'system', text: '  ● AUDIT LOGS:    Nginx active error/access log monitoring' });
        break;

      case 'matrix':
      case 'skills':
        newHistory.push({ type: 'system', text: '[PUENTE OPERACIONAL: FUERZAS ARMADAS -> CIBERDEFENSA SOC]' });
        newHistory.push({ type: 'system', text: '  [1] SOPs Tácticos de Combate       -> Playbooks de Respuesta y Triage' });
        newHistory.push({ type: 'system', text: '  [2] Gestión de Crisis bajo Presión -> Incident Response de Severidad Alta' });
        newHistory.push({ type: 'system', text: '  [3] Seguridad Operacional (OPSEC)  -> Menor Privilegio & Zero Trust' });
        newHistory.push({ type: 'system', text: '  [4] Redes Tácticas y Enlaces 24/7  -> Monitorización y Análisis de Tráfico' });
        newHistory.push({ type: 'info', text: 'INFO: Redireccionando a la sección de la Matriz...' });
        setTimeout(() => {
          if (!isInline) onClose();
          document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
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

      case 'uname':
      case 'uname -a':
        newHistory.push({ type: 'system', text: 'Linux srv-sec-node-01 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux' });
        break;

      case 'date':
        newHistory.push({ type: 'system', text: new Date().toUTCString() + ' (Hetzner Node Sync)' });
        break;

      case 'history':
        if (cmdHistory.length === 0) {
          newHistory.push({ type: 'system', text: 'No hay comandos registrados en esta sesión.' });
        } else {
          cmdHistory.forEach((c, idx) => {
            newHistory.push({ type: 'system', text: `  ${idx + 1}  ${c}` });
          });
        }
        break;

      case 'contact':
      case 'contacto':
      case 'sudo hire':
      case 'sudo hire daniel':
        newHistory.push({ type: 'system', text: 'Ejecutando protocolo de contacto y contratación...' });
        newHistory.push({ type: 'info', text: 'INFO: Redireccionando a la sección de contacto seguro.' });
        setTimeout(() => {
          if (!isInline) onClose();
          document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        break;

      case 'writeups':
        newHistory.push({ type: 'system', text: 'Listando write-ups recientes (Acceso autorizado):' });
        newHistory.push({ type: 'system', text: ' [1] TryHackMe - Vulnversity (Rooted)' });
        newHistory.push({ type: 'system', text: ' [2] HackTheBox - Lame (Privilege Escalation)' });
        newHistory.push({ type: 'info', text: 'INFO: Abriendo perfil TryHackMe (Top 5% Global)...' });
        setTimeout(() => {
          window.open('https://tryhackme.com/p/danimarpas4', '_blank');
        }, 1500);
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

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
        newHistory.push({ type: 'error', text: `bash: ${cleanCmd}: comando no encontrado. Escribe "help" para ver los comandos disponibles.` });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        setCmdHistory(prev => [...prev, input.trim()]);
      }
      setHistoryPointer(-1);
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (cmdHistory.length === 0) return;
      e.preventDefault();
      const newPointer = historyPointer === -1 ? cmdHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(newPointer);
      setInput(cmdHistory[newPointer]);
    } else if (e.key === 'ArrowDown') {
      if (historyPointer === -1) return;
      e.preventDefault();
      if (historyPointer < cmdHistory.length - 1) {
        const newPointer = historyPointer + 1;
        setHistoryPointer(newPointer);
        setInput(cmdHistory[newPointer]);
      } else {
        setHistoryPointer(-1);
        setInput('');
      }
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
            className={`whitespace-pre-wrap ${
              entry.type === 'user' ? 'text-white' : 
              entry.type === 'error' ? 'text-red-400' : 
              entry.type === 'info' ? 'text-cyan-400' :
              entry.type === 'warning' ? 'text-amber-400' :
              'text-emerald-400'
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
