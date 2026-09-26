# martinezpascual.es

**Portfolio personal de Daniel Martínez Pascual — Operador Táctico y especialista en
ciberseguridad (Blue Team) con base Full-Stack.**

> *De Operador Táctico a Defensor de Infraestructuras.*

Sitio web de una sola página: presentación, experiencia, formación, condecoraciones,
proyectos y contacto. En español e inglés, con animaciones, modo oscuro y diseño
responsive.

🔗 **En producción:** [https://martinezpascual.es](https://martinezpascual.es)

---

## Sobre el proyecto

Antes de entrar en código, lo que da contexto a todo lo demás:

Soy **Cabo en activo del Ejército de Tierra**, con despliegues internacionales en
misiones de la OTAN y de la Unión Europea. Ese trabajo me enseñó a trabajar con
disciplina, en equipo y con la cabeza fría cuando algo se complica.

En el terreno de la tecnología el camino ha sido el inverso: primero me formé en
desarrollo (Full-Stack) y después apliqué esa mentalidad al lado
defensivo de la ciberseguridad. En un SOC, un despliegue y una alerta crítica se
gestionan con la misma lógica: **información clara, responsable asignado y nada que
se pierda por el camino**.

Ese es el criterio con el que está hecho este portfolio, y también con el que está
hecho el resto de mi trabajo (tengo dos proyectos en repositorios abiertos:
[ProMilitar](https://github.com/danimarpas4/ProMilitar) — una academia online para
preparación militar — y [AppMando](https://github.com/danimarpas4/AppMando) — una
app para centralizar tareas, agenda y subordinados).

## Qué contiene el sitio

| Sección | Contenido |
|---|---|
| **Inicio** | Vídeo de cabecera, presentación y acceso directo a proyectos y contacto. |
| **Sobre mí** | Perfil, base de conocimientos y perfil público de TryHackMe. |
| **Experiencia** | Operador táctico, instructor de combate y logística, y formación académica. |
| **Proyectos** | Los tres proyectos destacados, con su stack y enlace directo. |
| **Condecoraciones** | Medallas y distinciones de la career militar. |
| **Contacto** | Formulario de contacto y enlaces a GitHub, LinkedIn y TryHackMe. |
| **CV** | Descarga del CV en PDF, con versión optimizada para imprimir. |

- **Bilingüe:** todo el contenido está en español e inglés, conmutable desde la navegación.
- **Modo claro y oscuro** con persistencia de la preferencia.
- **Animaciones** con GSAP y scroll suave con Lenis.
- **PWA instalable**, con favicon, manifest y `sitemap.xml` propio.

## Stack

**Frontend**
- React 18 + Vite 5
- Tailwind CSS 3
- GSAP (`@gsap/react`) para las animaciones de entrada y scroll
- Lenis para el scroll suave
- lucide-react para los iconos

**Sitio**
- HTML5, CSS3 y JavaScript (ES modules)
- Sin framework de backend: es una web estática servida tras Nginx
- Desplegado en un VPS propio con certificado TLS (Let's Encrypt)

## Estructura

```
.
├── index.html              # Metadatos, SEO y punto de entrada
├── src/
│   ├── App.jsx             # Estructura de la página y gestión del idioma
│   ├── main.jsx            # Arranque de React
│   ├── index.css           # Estilos globales
│   ├── translations.js     # Todo el texto, en español e inglés
│   └── components/
│       ├── Navbar.jsx      # Navegación y selector de idioma
│       ├── Hero.jsx        # Cabecera con vídeo
│       ├── About.jsx       # Sobre mí
│       ├── Experience.jsx  # Experiencia, formación y condecoraciones
│       ├── Projects.jsx    # Proyectos destacados
│       ├── Contact.jsx     # Formulario de contacto
│       ├── CVPrint.jsx     # Versión del CV preparada para imprimir
│       ├── Radar.jsx       # Elemento gráfico decorativo
│       ├── Terminal.jsx    # Efecto de terminal
│       └── Footer.jsx
└── public/                 # Recursos estáticos (favicon, manifest, CV…)
```

## Cómo lo arranco

```bash
npm install        # dependencias
npm run dev        # servidor de desarrollo
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
npm run lint       # ESLint
```

El resultado de `npm run build` es una carpeta `dist/` estática que se copia al
servidor y se sirve con Nginx.

## Seguridad

- `tracker_api.py` (el servidor que avisa de las visitas por Telegram) queda
  **fuera del repositorio a propósito**: lleva el token del bot escrito dentro.
  Está en `.gitignore` y así se queda.
- No hay secretos, claves de API ni datos de terceros en el código.
- El historial del repositorio se revisó antes de hacerlo público: no contiene
  tokens, claves privadas ni contraseñas.

## Licencia

Código de uso personal y demostrativo. Si te resulta útil algún fragmento,
consúltame antes de reutilizarlo.

---

*Hecho con la misma disciplina que una operación: alcance controlado, comunicación
clara y resultado comprobable.*
