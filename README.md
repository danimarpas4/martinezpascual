# martinezpascual.es

<p align="center">
  <img src="https://martinezpascual.es/og-image.png" alt="Daniel Martínez Pascual - Blue Team Specialist" width="100%" style="border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);" />
</p>

<p align="center">
  <a href="https://martinezpascual.es"><img src="https://img.shields.io/badge/Production-Live%20Website-emerald?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Website"></a>
  <a href="https://tryhackme.com/p/danimarpas4"><img src="https://img.shields.io/badge/TryHackMe-Top%205%25%20Global-red?style=for-the-badge&logo=tryhackme&logoColor=white" alt="TryHackMe"></a>
  <img src="https://img.shields.io/badge/Security-TLS%201.3%20A%2B-blue?style=for-the-badge&logo=letsencrypt&logoColor=white" alt="TLS 1.3">
  <img src="https://img.shields.io/badge/Infra-Hetzner%20Cloud-orange?style=for-the-badge&logo=hetzner&logoColor=white" alt="Hetzner">
</p>

**Portfolio profesional de Daniel Martínez Pascual — Cabo en activo del Ejército de Tierra (Veterano OTAN/UE) y aspirante a Analista SOC (N1) / Blue Team con base Full-Stack.**

> *De Operador Táctico a Defensor de Infraestructuras y Respuesta a Incidentes.*

Sitio web interactivo de alto rendimiento: presentación, matriz de transición táctica a ciberdefensa, experiencia operativa, certificaciones (TryHackMe, FADE), proyectos securizados y terminal SOC interactiva. Bilingüe (ES / EN), optimizado para nitidez absoluta de fuentes y arquitectura hardened en producción.

🔗 **En producción:** [https://martinezpascual.es](https://martinezpascual.es)

---

## 🛡️ Sobre el Perfil: El Enfoque Defensivo

Soy **Cabo en activo del Ejército de Tierra**, con despliegues internacionales en misiones de la **OTAN** (Eslovaquia) y de la **Unión Europea**. Esta trayectoria militar forjó en mí competencias críticas inmediatamente transferibles a la ciberdefensa: trabajo bajo estrés extremo, cultura estricta de compartimentación (OPSEC) y ejecución metódica basada en doctrina y procedimientos normalizados.

En tecnología, unifiqué mi base de desarrollo Full-Stack con la especialización en **Blue Team / Ciberseguridad Defensiva**. En un SOC, una alerta crítica, un triaje de incidentes y una contención de amenazas se gestionan bajo la misma disciplina: **información clara, trazabilidad absoluta y contención metódica sin vacilación**.

---

## ⚔️ Matriz de Habilidades Transferibles: Fuerzas Armadas ➔ SOC

| Competencia Táctica (Militar) | Aplicación Técnica en Ciberdefensa (SOC) | Valor Aportado |
|---|---|---|
| **Procedimientos Estándar (SOPs)** | **Playbooks & Runbooks de SOC** | Operación disciplinada y trazabilidad exhaustiva en la gestión de eventos. |
| **Gestión de Crisis & Triage** | **Respuesta a Incidentes (IR) bajo Estrés** | Toma de decisiones rápida, metódica y contención en escenarios de alta volatilidad. |
| **Seguridad Operacional (OPSEC)** | **Need-to-Know & Mínimo Privilegio** | Cultura estricta de compartimentación de datos, control de accesos e higiene digital. |
| **Transmisiones & Misiones 24/7** | **Monitorización de Red & Turnos Rotativos** | Experiencia en redes tácticas seguras de la OTAN y resiliencia demostrada en guardias continuas. |

---

## 🚀 Arquitectura y Componentes del Sitio

| Sección / Componente | Características Técnicas |
|---|---|
| **Hero Táctico** | Video de fondo, presentación, accesos rápidos y terminal interactiva embebida. |
| **Terminal SOC (`>_ Terminal`)** | Emulador interactivo con comandos (`soc status`, `whoami`, `certs`, `cv`, `sha256`, `sudo hire`) y telemetría enmascarada bajo directrices OPSEC. Accesible desde cabecera fija, botón flotante o tecla `~`. |
| **Sobre mí (Bento Grid)** | Perfil, base de conocimientos, acceso a TryHackMe y tarjeta de contacto. |
| **Experiencia & Certificaciones** | Despliegues OTAN/UE, certificaciones activas (TryHackMe Pre Security, Cyber Security 101, SOC Level 1, Big Data FADE) y objetivos (CompTIA Security+, AWS Cloud, BTL1). |
| **Proyectos & Arquitectura** | ProMilitar SaaS, Bots Telegram asíncronos y Gestor de Personal, con modal de blueprints de arquitectura de seguridad (Firewall, Fail2ban, Nginx Proxy). |
| **Visor & Descarga de CV** | Visor de PDF embebido a pantalla completa y descarga directa del documento oficial v3 con verificación de hash SHA-256. |
| **Contacto Hardened** | Formulario con feedback táctico SOC (`Transmisión Segura Enviada · Respuesta en <24h`). |

---

## 🔒 Hardening del Servidor (Blue Team en Producción)

El portfolio no está alojado en un hosting compartido, sino en un nodo **Hetzner Cloud VPS** propio administrado con mentalidad defensiva:

### 1. Cabeceras de Seguridad Nginx (Grado A+ en SecurityHeaders)
* **Strict-Transport-Security (HSTS):** `max-age=31536000; includeSubDomains; preload` (fuerza HTTPS estricto).
* **Content-Security-Policy (CSP):** Control estricto de orígenes permitidos.
* **Permissions-Policy:** Deshabilita vectores no autorizados (`camera=(), microphone=(), geolocation=(), payment=()`).
* **Referrer-Policy:** `strict-origin-when-cross-origin`.
* **X-Content-Type-Options:** `nosniff`.
* **X-Frame-Options:** `SAMEORIGIN`.

### 2. Rate Limiting Activo (Anti-DDoS / Anti-Spam)
* Configuración con `limit_req_zone` a **1 petición por segundo (burst 3)** para el endpoint del tracker (`/api/track`), previniendo ataques de saturación o llamadas maliciosas contra el servicio de telemetría por Telegram.

### 3. Caché de Rendimiento Inmutable
* Reglas `Cache-Control: public, no-transform` con caducidad de 30 días para activos estáticos (`.css`, `.js`, imágenes, tipografías y PDF), reduciendo la huella de tráfico y maximizando la velocidad de carga.

### 4. Integridad Criptográfica Forense (SHA-256)
* Hash SHA-256 oficial del CV (`DANIEL_MARTÍNEZ_PASCUAL_v3.pdf`):
  ```
  0a134ebdab1b7af660500ffd18895e7537fdca7b2e2fbdd2ff7e5d3faee95362
  ```
  Verificable mediante el comando `sha256` en la terminal web o con el botón *(Copiar)* en el visor de PDF.

### 5. SEO & Social Cards
* Tarjeta panorámica Open Graph **1200×630** (`/og-image.png`) optimizada para previsualizaciones en LinkedIn, Twitter y WhatsApp.
* Datos estructurados JSON-LD Schema.org (`Person`) para indexación en Google.
* `sitemap.xml` dinámico con indexación independiente para el sitio y para el PDF del currículum.

---

## 💻 Stack Tecnológico

* **Core:** React 18 + Vite 5
* **Estilos:** Tailwind CSS 3 (con personalización de contraste y pesos tipográficos para lectura nítida en monitores dark mode)
* **Animaciones:** GSAP (`@gsap/react`) con ScrollTrigger optimizado (`once: true`, `clearProps: transform` para evitar cualquier desenfoque de fuentes)
* **Scroll:** Lenis smooth scrolling (unificado a un solo ciclo RAF mediante el ticker de GSAP)
* **Iconografía:** `lucide-react`
* **Servidor Web:** Nginx 1.24 sobre Ubuntu 24.04 LTS (Hetzner Cloud VPS)
* **TLS:** Let's Encrypt con renovación automatizada

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo local
npm run dev

# Compilar para producción (genera dist/)
npm run build

# Vista previa de la compilación
npm run preview
```

---

## 📄 Licencia y Contacto

Código de uso personal y demostrativo.
* **Email:** [danimarpas4@gmail.com](mailto:danimarpas4@gmail.com)
* **LinkedIn:** [linkedin.com/in/danimarpas4](https://www.linkedin.com/in/danimarpas4)
* **TryHackMe:** [tryhackme.com/p/danimarpas4](https://tryhackme.com/p/danimarpas4)
* **Web:** [martinezpascual.es](https://martinezpascual.es)

---

*Hecho con la misma disciplina que una operación militar: alcance controlado, rigor defensivo y resultado comprobable.*
