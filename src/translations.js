export const translations = {
  ES: {
    nav: { home: "Inicio", about: "Sobre mí", exp: "Experiencia", projects: "Proyectos", contact: "Contacto" },
    hero: {
      title: "Blue Team.",
      subtitle: "Especialista en Seguridad con base Full-Stack",
      desc: "Me formo para proteger infraestructuras (Blue Team). Conocer a fondo cómo se construye el software en Backend y Frontend me permite defenderlo desde su núcleo.",
      btnProjects: "Ver Proyectos",
      btnContact: "Contactar"
    },
    about: {
      title: "Conoce al especialista",
      p1: "Soy un profesional con un perfil analítico y metódico. Como <strong>Cabo en activo en el Ejército de Tierra</strong>, con experiencia operativa y despliegues internacionales en misiones de la OTAN y la UE, he forjado una mentalidad orientada a la misión y a la protección.",
      p2: "Aplico los valores militares de <strong>disciplina, liderazgo y seguridad operacional</strong> a la ciberseguridad. Actualmente me estoy especializando en Blue Team, apoyándome en mis conocimientos de desarrollo para entender la tecnología en profundidad.",
      p3: "Mi objetivo es integrar esta formación técnica y mi mentalidad defensiva en el sector tecnológico, preparándome para aportar valor real en <strong>operaciones de seguridad (SOC) y equipos de respuesta a incidentes</strong>.",
      stack: "Conocimientos",
      download: "Descargar CV",
      thmTitle: "Perfil TryHackMe",
      thmDesc: "Entrenamiento continuo en entornos reales de Ciberseguridad."
    },
    exp: {
      title: "Trayectoria",
      jobs: [
        {
          role: "Communications NCO & Tactical Operator",
          org: "Misión OTAN (Eslovaquia)",
          date: "Dic 2024 - Jun 2025",
          desc: "Despliegue internacional. Gestión de redes de comunicaciones tácticas seguras y operación bajo protocolos estrictos en entornos de alta presión."
        },
        {
          role: "Combat Instructor & Logistics Operator",
          org: "Misión Unión Europea (Ubicación Desconocida)",
          date: "Jun 2024 - Ago 2024",
          desc: "Instrucción especializada y coordinación logística compleja, adaptando metodologías tecnológicas para superar barreras idiomáticas."
        },
        {
          role: "Militar en activo (Cabo)",
          org: "Ministerio de Defensa (Ejército de Tierra)",
          date: "Nov 2018 - Presente",
          desc: "Desarrollo de liderazgo, disciplina inquebrantable y seguridad operacional aplicados tanto al ámbito táctico como tecnológico. Participación en misiones nacionales en apoyo a la población española durante el COVID-19 (Operación Balmis y Operación Baluarte)."
        }
      ],
      edu: [
        {
          title: "Bachelor of Science Honours Degree (BSc) in Applied Computing",
          org: "University of Wales Trinity Saint David",
          date: "Cursando actualmente"
        },
        {
          title: "Bootcamp Desarrollo Full Stack",
          org: "Conquer Blocks",
          date: "2025 - 2026"
        },
        {
          title: "Bootcamp Desarrollo Blockchain",
          org: "Conquer Blocks",
          date: "Agosto 2025"
        }
      ],
      decorationsTitle: "Condecoraciones",
      certificationsTitle: "Certificaciones & Target",
      certifications: [
        { title: "eLearnSecurity Junior Penetration Tester (eJPT)", badge: "In Progress - 2026", desc: "Certificación práctica en hacking ético, pentesting y metodologías de Blue/Red Team." },
        { title: "CompTIA Security+", badge: "Target 2026", desc: "Fundamentos de ciberseguridad, gestión de riesgos y criptografía." }
      ],
      certificationsTitle: "Certifications & Targets",
      certifications: [
        { title: "eLearnSecurity Junior Penetration Tester (eJPT)", badge: "In Progress - 2026", desc: "Practical certification in ethical hacking, penetration testing, and Blue/Red Team methodologies." },
        { title: "CompTIA Security+", badge: "Target 2026", desc: "Cybersecurity fundamentals, risk management, and cryptography." }
      ],
      decorations: [
        {
          title: "Cruz al Mérito Militar con distintivo blanco",
          badge: "Ejército de Tierra",
          desc: "Condecoración por méritos, trabajos y acciones destacadas en el cumplimiento del deber."
        },
        {
          title: "Mención Honorífica",
          badge: "Ejército de Tierra",
          desc: "Reconocimiento oficial a la excelencia y dedicación en el servicio operativo."
        }
      ],
      languagesTitle: "Idiomas",
      languages: [
        {
          title: "Inglés Profesional (B2)",
          badge: "SLP 2.2.2.2",
          desc: "Aptitud lingüística certificada en comprensión y expresión (STANAG 6001).",
          link: "/bod-ingles.pdf",
          linkText: "Ver Boletín Oficial (BOD)"
        }
      ]
    },
    projects: {
      title: "Proyectos Destacados",
      items: [
        {
          title: "ProMilitar - Academia Online",
          prob: "Plataforma web educativa para preparación militar, ofreciendo un entorno completo con tests, temario, instructor IA y planificación personalizada.",
          det: "Arquitectura robusta desplegada en VPS Hetzner con proxy inverso Nginx. Integra frontend responsivo y backend centralizado con despliegue continuo vía Docker.",
          tech: ["Django", "PostgreSQL", "Docker", "Tailwind CSS", "Nginx", "VPS"],
          links: [
            { url: "https://promilitar.es", label: "promilitar.es" }
          ]
        },
        {
          title: "Bots de Telegram Automatizados",
          prob: "Sistema de gestión masiva de preguntas y envíos automáticos (tandas programadas) para el entrenamiento continuo de los opositores.",
          det: "Desarrollo en Python 3.12 con programación asíncrona. Consume una API REST y utiliza APScheduler para programar envíos ininterrumpidos en distintos rangos horarios.",
          tech: ["Python 3.12", "Asyncio", "Telegram API", "APScheduler", "REST API"],
          links: [
            { url: "https://t.me/testpromilitar", label: "Bot Cabo" },
            { url: "https://t.me/CaboPrimero", label: "Bot Cabo Primero" }
          ]
        },
        {
          title: "Sistema de Gestión de Personal",
          prob: "Aplicación web integral para el control, seguimiento y administración eficiente de subordinados en entornos de alta exigencia.",
          det: "Implementa lógica de negocio compleja para gestionar jerarquías, cuadrantes de turnos, vacaciones y control de estudios, con un diseño estricto de base de datos relacional y roles de usuario.",
          tech: ["React", "SQLAlchemy", "MySQL", "RBAC"],
          links: [
            { url: "https://app.promilitar.es", label: "app.promilitar.es" }
          ]
        }
      ]
    },
    contact: {
      title: "Contacto",
      desc: "¿Buscas asegurar tu infraestructura o un perfil versátil para tu equipo Blue Team? Hablemos.",
      name: "Nombre",
      namePh: "Introduce tu nombre",
      email: "Email",
      emailPh: "correo@ejemplo.com",
      msg: "Mensaje",
      msgPh: "¿En qué puedo ayudarte?",
      send: "Enviar Mensaje"
    }
  },
  EN: {
    nav: { home: "Home", about: "About", exp: "Experience", projects: "Projects", contact: "Contact" },
    hero: {
      title: "Blue Team.",
      subtitle: "Security Specialist with a Full-Stack Base",
      desc: "From Tactical Operator to Infrastructure Defender (Blue Team). I apply the military discipline, crisis management, and defensive mindset forged in international deployments to protect software cores and bring immediate value to Security Operations Centers (SOC).",
      btnProjects: "View Projects",
      btnContact: "Contact Me"
    },
    about: {
      title: "Meet the Specialist",
      p1: "I am a professional with an analytical and methodical profile. As an <strong>active Corporal in the Army</strong>, with operational experience and international deployments in NATO and EU missions, I have forged a mission-driven mindset.",
      p2: "I apply military values of <strong>discipline, leadership, and operational security</strong> to cybersecurity. I am currently specializing in Blue Team, leaning on my development knowledge to understand technology in depth.",
      p3: "My goal is to integrate this technical training and my defensive mindset into the tech sector, preparing to bring real value to <strong>Security Operations Centers (SOC) and Incident Response teams</strong>.",
      stack: "Knowledge Base",
      download: "Download Resume",
      thmTitle: "TryHackMe Profile",
      thmDesc: "Continuous training in real-world Cybersecurity environments."
    },
    exp: {
      title: "Experience & Education",
      jobs: [
        {
          role: "Communications NCO & Tactical Operator",
          org: "NATO Mission (Slovakia)",
          date: "Dec 2024 - Jun 2025",
          desc: "International deployment. Managed secure tactical communications networks and operated under strict protocols in high-stress environments."
        },
        {
          role: "Combat Instructor & Logistics Operator",
          org: "European Union Mission (Unknown Location)",
          date: "Jun 2024 - Aug 2024",
          desc: "Specialized instruction and complex logistics coordination, adapting technological methodologies to overcome language barriers."
        },
        {
          role: "Corporal (Active Duty)",
          org: "Ministry of Defence (Spanish Army)",
          date: "Nov 2018 - Present",
          desc: "Development of leadership, unwavering discipline, and operational security applied to both tactical and technological environments. Participated in domestic missions supporting the Spanish population during COVID-19 (Operation Balmis and Operation Baluarte)."
        }
      ],
      edu: [
        {
          title: "Bachelor of Science Honours Degree (BSc) in Applied Computing",
          org: "University of Wales Trinity Saint David",
          date: "Currently studying"
        },
        {
          title: "Full-Stack Development Bootcamp",
          org: "Conquer Blocks",
          date: "2025 - 2026"
        },
        {
          title: "Blockchain Development Bootcamp",
          org: "Conquer Blocks",
          date: "August 2025"
        }
      ],
      decorationsTitle: "Decorations",
      certificationsTitle: "Certificaciones & Target",
      certifications: [
        { title: "eLearnSecurity Junior Penetration Tester (eJPT)", badge: "In Progress - 2026", desc: "Certificación práctica en hacking ético, pentesting y metodologías de Blue/Red Team." },
        { title: "CompTIA Security+", badge: "Target 2026", desc: "Fundamentos de ciberseguridad, gestión de riesgos y criptografía." }
      ],
      certificationsTitle: "Certifications & Targets",
      certifications: [
        { title: "eLearnSecurity Junior Penetration Tester (eJPT)", badge: "In Progress - 2026", desc: "Practical certification in ethical hacking, penetration testing, and Blue/Red Team methodologies." },
        { title: "CompTIA Security+", badge: "Target 2026", desc: "Cybersecurity fundamentals, risk management, and cryptography." }
      ],
      decorations: [
        {
          title: "Cross of Military Merit with white decoration",
          badge: "Spanish Army",
          desc: "Decoration for merits, works, and outstanding actions in the line of duty."
        },
        {
          title: "Honorable Mention",
          badge: "Spanish Army",
          desc: "Official recognition for excellence and dedication in operational service."
        }
      ],
      languagesTitle: "Languages",
      languages: [
        {
          title: "Professional English (B2)",
          badge: "SLP 2.2.2.2",
          desc: "Certified linguistic aptitude in comprehension and expression (STANAG 6001).",
          link: "/bod-ingles.pdf",
          linkText: "View Official Bulletin (BOD)"
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "ProMilitar - Online Academy",
          prob: "Educational web platform for military preparation, offering a complete environment with tests, study materials, AI instructor, and custom planning.",
          det: "Robust architecture deployed on Hetzner VPS with Nginx reverse proxy. Integrates a responsive frontend and centralized backend with continuous deployment via Docker.",
          tech: ["Django", "PostgreSQL", "Docker", "Tailwind CSS", "Nginx", "VPS"],
          links: [
            { url: "https://promilitar.es", label: "promilitar.es" }
          ]
        },
        {
          title: "Automated Telegram Bots",
          prob: "Massive question management and automated delivery system (scheduled batches) for continuous candidate training.",
          det: "Developed in Python 3.12 with asynchronous programming. Consumes a REST API and uses APScheduler to schedule uninterrupted deliveries across different timeframes.",
          tech: ["Python 3.12", "Asyncio", "Telegram API", "APScheduler", "REST API"],
          links: [
            { url: "https://t.me/testpromilitar", label: "Cpl. Bot" },
            { url: "https://t.me/CaboPrimero", label: "1st Cpl. Bot" }
          ]
        },
        {
          title: "Personnel Management System",
          prob: "Comprehensive web application for the efficient control, tracking, and administration of subordinates in high-demand environments.",
          det: "Implements complex business logic to manage hierarchies, shift schedules, vacations, and study tracking, with a strict relational database design and user roles.",
          tech: ["React", "SQLAlchemy", "MySQL", "RBAC"],
          links: [
            { url: "https://app.promilitar.es", label: "app.promilitar.es" }
          ]
        }
      ]
    },
    contact: {
      title: "Contact",
      desc: "Looking to secure your infrastructure or a versatile profile for your Blue Team? Let's talk.",
      name: "Name",
      namePh: "Enter your name",
      email: "Email",
      emailPh: "email@example.com",
      msg: "Message",
      msgPh: "How can I help you?",
      send: "Send Message"
    }
  }
};
