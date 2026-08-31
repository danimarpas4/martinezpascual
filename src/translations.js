export const translations = {
  ES: {
    nav: { home: "Inicio", about: "Sobre mí", exp: "Experiencia", projects: "Proyectos", contact: "Contacto" },
    hero: {
      title: "Blue Team.",
      subtitle: "Especialista en Seguridad con base Full-Stack",
      desc: "De Operador Táctico a Defensor de Infraestructuras (Blue Team). Aplico la disciplina militar, la gestión de crisis y la mentalidad defensiva forjada en despliegues internacionales para proteger el núcleo del software y aportar valor inmediato en Centros de Operaciones de Seguridad (SOC).",
      btnProjects: "Ver Proyectos",
      btnContact: "Contactar"
    },
    about: {
      title: "Conoce al Especialista",
      p1: "Soy un profesional de perfil analítico y metódico. Como <strong>Cabo en activo del Ejército de Tierra</strong>, con experiencia operativa y despliegues internacionales en misiones de la OTAN y la Unión Europea, he forjado una mentalidad orientada a la misión.",
      p2: "Aplico los valores militares de <strong>disciplina, liderazgo y seguridad operativa</strong> a la ciberseguridad. Actualmente me especializo en Blue Team, apoyándome en mis conocimientos de desarrollo para entender la tecnología desde sus cimientos.",
      p3: "Mi objetivo es integrar esta formación técnica y mi mentalidad defensiva en el sector tecnológico, preparándome para aportar valor real en <strong>Centros de Operaciones de Seguridad (SOC) y equipos de respuesta a incidentes</strong>.",
      stack: "Base de Conocimientos",
      download: "Descargar CV",
      thmTitle: "Perfil de TryHackMe",
      thmDesc: "Entrenamiento continuo en entornos reales de Ciberseguridad."
    },
    exp: {
      title: "Experiencia y Formación",
      jobs: [
        {
          role: "Suboficial de Transmisiones y Operador Táctico",
          org: "Misión OTAN (Eslovaquia)",
          date: "Dic 2024 - Jun 2025",
          desc: "Despliegue internacional. Gestión de redes de comunicaciones tácticas seguras y operación bajo protocolos estrictos en entornos de alta exigencia."
        },
        {
          role: "Instructor de Combate y Operador Logístico",
          org: "Misión Unión Europea (Lugar reservado)",
          date: "Jun 2024 - Ago 2024",
          desc: "Instrucción especializada y coordinación logística compleja, adaptando metodologías tecnológicas para superar barreras idiomáticas."
        },
        {
          role: "Cabo (Servicio Activo)",
          org: "Ministerio de Defensa (Ejército de Tierra)",
          date: "Nov 2018 - Presente",
          desc: "Desarrollo de liderazgo, disciplina férrea y seguridad operativa aplicados tanto en el entorno táctico como tecnológico. Participación en misiones nacionales de apoyo a la población española durante el COVID-19 (Operación Balmis y Operación Baluarte)."
        }
      ],
      edu: [
        {
          title: "Bachelor of Science Honours Degree (BSc) in Applied Computing",
          org: "University of Wales Trinity Saint David",
          date: "Estudiando actualmente"
        },
        {
          title: "Bootcamp Desarrollo Full-Stack",
          org: "Conquer Blocks",
          date: "2025 - 2026"
        },
        {
          title: "Bootcamp Desarrollo Blockchain",
          org: "Conquer Blocks",
          date: "Agosto 2025"
        }
      ],
      certificationsTitle: "Certificaciones & Target",
      certifications: [
        { title: "eLearnSecurity Junior Penetration Tester (eJPT)", badge: "In Progress - 2026", desc: "Certificación práctica en hacking ético, pentesting y metodologías de Blue/Red Team." },
        { title: "CompTIA Security+", badge: "Target 2026", desc: "Fundamentos de ciberseguridad, gestión de riesgos y criptografía." }
      ],
      decorationsTitle: "Condecoraciones",
      decorations: [
        {
          title: "Medalla Vigilance OTAN",
          badge: "OTAN / NATO",
          desc: "Reconocimiento internacional por el despliegue y participación en misiones de vigilancia y presencia avanzada de la OTAN."
        },
        {
          title: "Medalla UE Ukraine",
          badge: "Unión Europea",
          desc: "Condecoración por la contribución a la Misión de Asistencia Militar de la Unión Europea (EUMAM) en apoyo a Ucrania."
        },
        {
          title: "Cruz del Mérito Militar con distintivo blanco",
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
          prob: "Plataforma web educativa orientada a la preparación militar, ofreciendo un entorno completo con tests, temarios, instructora IA y planificación a medida.",
          det: "Arquitectura robusta desplegada en VPS de Hetzner con proxy inverso Nginx. Integra un frontend responsivo y un backend centralizado con despliegue continuo mediante Docker.",
          tech: ["Django", "PostgreSQL", "Docker", "Tailwind CSS", "Nginx", "VPS"],
          links: [
            { url: "https://promilitar.es", label: "promilitar.es" }
          ]
        },
        {
          title: "Bots Automatizados Telegram",
          prob: "Gestión masiva de preguntas y sistema de entrega automatizada (lotes programados) para entrenamiento continuo de opositores.",
          det: "Desarrollo en Python 3.12 con programación asíncrona. Consume una API REST y emplea APScheduler para programar envíos ininterrumpidos en distintas franjas horarias.",
          tech: ["Python 3.12", "Asyncio", "Telegram API", "APScheduler", "REST API"],
          links: [
            { url: "https://t.me/testpromilitar", label: "Bot Cabo" },
            { url: "https://t.me/CaboPrimero", label: "Bot Cabo 1º" }
          ]
        },
        {
          title: "Gestor de Personal",
          prob: "Aplicación web integral para el control, seguimiento y administración eficiente de subordinados en entornos de alta exigencia.",
          det: "Implementa lógica de negocio compleja para gestionar jerarquías, cuadrantes de turnos, vacaciones y seguimiento de estudios, con un diseño de base de datos relacional estricto y roles de usuario.",
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
      certificationsTitle: "Certifications & Targets",
      certifications: [
        { title: "eLearnSecurity Junior Penetration Tester (eJPT)", badge: "In Progress - 2026", desc: "Practical certification in ethical hacking, penetration testing, and Blue/Red Team methodologies." },
        { title: "CompTIA Security+", badge: "Target 2026", desc: "Cybersecurity fundamentals, risk management, and cryptography." }
      ],
      decorationsTitle: "Decorations",
      decorations: [
        {
          title: "NATO Vigilance Medal",
          badge: "NATO / OTAN",
          desc: "International recognition for deployment and participation in NATO's enhanced Forward Presence and vigilance missions."
        },
        {
          title: "EU Ukraine Medal",
          badge: "European Union",
          desc: "Decoration for the contribution to the European Union Military Assistance Mission (EUMAM) in support of Ukraine."
        },
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
