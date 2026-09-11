// Todo el texto visible del sitio, por idioma. Los datos que no cambian con el
// idioma (nombre, email, links, stack de tecnologías) viven en src/data/config.js.
export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      career: 'Mi Carrera',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      mentorship: 'Mentorías',
      contact: 'Contacto',
    },
    header: {
      cta: 'Contáctame',
    },
    hero: {
      eyebrow: 'Interfaces, en su mejor ritmo.',
      headingLine1: 'Construyo Interfaces',
      headingLine2: 'Rápidas, No ',
      headingHighlight: 'Complicadas',
      tagline: 'Construyo aplicaciones web rápidas, escalables y con buen diseño.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contactar',
    },
    about: {
      headingPre: 'Diseñado para Ayudarte a Lanzar Más Rápido, ',
      headingEm: 'Sin Complicaciones',
      lead: `Soy Software Engineer especializado en frontend, enfocado en construir interfaces
que se sienten rápidas, se ven bien y no se rompen. Me gusta el código limpio, los
detalles de interacción y traducir diseño en productos reales que la gente usa.`,
      strengths: [
        {
          title: 'Arquitectura de Componentes',
          description:
            'Interfaces modulares y reutilizables, fáciles de mantener y escalar conforme el producto crece.',
        },
        {
          title: 'Rendimiento y Accesibilidad',
          description:
            'Carga rápida, buenas prácticas de accesibilidad y una experiencia fluida en cualquier dispositivo.',
        },
        {
          title: 'Diseño Responsivo',
          description:
            'De diseño a código sin perder el detalle: layouts que se adaptan de móvil a escritorio.',
        },
      ],
    },
    career: {
      eyebrow: 'Mi trayectoria.',
      headingPre: 'Del código freelance al ',
      headingEm: 'frontend empresarial',
      intro:
        'Empecé en 2015 construyendo sitios web freelance para clientes locales. Desde entonces he trabajado en sistemas ERP, banca y salud, pasando de reportes SAP ABAP a interfaces modernas con Angular y React. Hoy lidero el desarrollo frontend de una plataforma empresarial, con más de 10 años de experiencia entregando software confiable en equipos multidisciplinarios.',
      presentLabel: 'Presente',
      items: [
        {
          title: 'Los inicios',
          description:
            'Empecé construyendo sitios web a la medida para clientes locales — HTML, CSS, JS y WordPress — aprendiendo a entregar soluciones reales, no solo código.',
        },
        {
          title: 'El mundo ERP',
          description:
            'Di el salto a sistemas empresariales: reportes ejecutivos, extracción de datos y soluciones SAP ABAP para procesos críticos de facturación y cumplimiento financiero.',
        },
        {
          title: 'Detrás de los datos',
          description:
            'Monitoreo 24/7 de flujos de datos y reportes, resolviendo incidencias y asegurando la integridad de la información hacia el data lake.',
        },
        {
          title: 'El giro a frontend',
          description:
            'Encontré mi lugar en el frontend: lideré el rediseño UI/UX de aplicaciones internas y construí una plataforma fintech con Angular, TailwindCSS y pruebas con Jest.',
        },
        {
          title: 'Diseño con propósito',
          description:
            'Diseñé una plataforma orientada a datos siguiendo Domain-Driven Design, con dashboards interactivos en Chart.js para decisiones operativas en tiempo real.',
        },
        {
          title: 'Frontend en salud',
          description:
            'Modernicé aplicaciones de salud construidas sobre AngularJS legacy, liderando la estabilización de componentes críticos como punto de escalamiento técnico.',
        },
        {
          title: 'Escalando en equipo',
          description:
            'Hoy formo parte de un equipo Scrum multidisciplinario, a cargo del desarrollo end-to-end de un ERP empresarial con Angular 21 y Tailwind CSS.',
        },
      ],
    },
    projects: {
      headingPre: 'Mis ',
      headingHighlight: 'proyectos',
      code: 'Código',
      demo: 'Demo',
      visit: 'Ver sitio',
      tabMine: 'Mis Proyectos',
      tabCollabs: 'Colaboraciones',
      statusActive: 'Colaboración activa',
      items: [
        {
          title: 'Proyecto Uno',
          description:
            'Descripción breve del proyecto: qué problema resuelve y qué lo hace interesante.',
        },
        {
          title: 'Proyecto Dos',
          description:
            'Descripción breve del proyecto: qué problema resuelve y qué lo hace interesante.',
        },
        {
          title: 'Proyecto Tres',
          description:
            'Descripción breve del proyecto: qué problema resuelve y qué lo hace interesante.',
        },
      ],
      collaborations: {
        items: [
          {
            title: 'Bitlab',
            description:
              'Plataforma integral para laboratorios y centros médicos que digitaliza todo el flujo clínico — desde la solicitud y toma de muestras hasta la entrega de resultados — con módulos de solicitudes, reportes, médicos, pruebas y administración de usuarios.',
          },
          {
            title: 'Bitbank',
            description:
              'Sistema de gestión para bancos de sangre, adaptable a las necesidades de cada institución: cubre desde la toma de muestra y su evaluación hasta la generación de reportes y el flujo administrativo completo.',
          },
        ],
      },
    },
    contact: {
      heading: 'Contáctame',
      text: '¿Tienes un proyecto en mente o quieres platicar? Escríbeme, con gusto respondo.',
      cta: 'Enviar Email',
    },
    certifications: {
      eyebrow: 'Aprendizaje continuo.',
      headingPre: 'Mis ',
      headingHighlight: 'certificaciones',
      intro:
        'Cursos y certificaciones que he completado para seguir creciendo como desarrollador.',
      verifyLabel: 'Ver certificado',
      dateLabel: 'Obtenido en',
    },
    mentorship: {
      eyebrow: 'Aprender es un camino, no una meta.',
      headingPre: 'Mentorías ',
      headingHighlight: '1 a 1',
      intro:
        'Acompaño a quienes están dando sus primeros pasos en frontend, ya sea para su primer empleo, un cambio de carrera o simplemente para dejar de sentirse perdidos.',
      topicsHeading: 'En qué te puedo ayudar',
      topics: [
        {
          title: 'React y JavaScript moderno',
          description:
            'Fundamentos sólidos y buenas prácticas para dejar de copiar y empezar a entender.',
        },
        {
          title: 'Preparación para entrevistas',
          description:
            'Práctica de preguntas técnicas, retos de código y cómo explicar tus decisiones con claridad.',
        },
        {
          title: 'Construcción de portafolio',
          description:
            'Cómo elegir, presentar y documentar tus proyectos para que realmente destaquen.',
        },
        {
          title: 'Plan de carrera',
          description:
            'Qué aprender después, cómo priorizar, y cómo moverte de junior a un rol con más criterio.',
        },
      ],
      ctaHeading: 'Agenda una sesión',
      ctaText: 'Escríbeme contándome en qué estás atorado y en qué te gustaría que te ayude.',
      ctaButton: 'Agendar mentoría',
      testimonialsHeading: 'Lo que dicen quienes ya tomaron una sesión',
      testimonials: [
        {
          quote:
            'Me ayudó a entender por qué mi código funcionaba, no solo a copiarlo. Cambió por completo cómo estudio.',
        },
        {
          quote:
            'Llegué sin saber ni por dónde empezar mi portafolio y salí con un plan claro de qué mostrar y cómo explicarlo.',
        },
        {
          quote:
            'La sesión de entrevistas técnicas fue justo lo que necesitaba antes de mi primera entrevista real.',
        },
      ],
    },
    footer: {
      madeWith: 'Hecho con amor',
    },
    themeToggle: {
      toLight: 'Cambiar a modo claro',
      toDark: 'Cambiar a modo oscuro',
      light: 'Modo claro',
      dark: 'Modo oscuro',
    },
    languageToggle: {
      label: 'Switch to English',
    },
    mobileMenu: {
      open: 'Abrir menú',
      close: 'Cerrar menú',
    },
  },

  en: {
    nav: {
      about: 'About',
      career: 'My Career',
      projects: 'Projects',
      certifications: 'Certifications',
      mentorship: 'Mentorship',
      contact: 'Contact',
    },
    header: {
      cta: 'Contact Me',
    },
    hero: {
      eyebrow: 'Interfaces, in their best rhythm.',
      headingLine1: 'I Build Interfaces',
      headingLine2: 'That Are Fast, Not ',
      headingHighlight: 'Complicated',
      tagline: 'I build web apps that are fast, scalable, and well designed.',
      ctaProjects: 'View projects',
      ctaContact: 'Contact',
    },
    about: {
      headingPre: 'Designed to Help You Ship Faster, ',
      headingEm: 'Without the Hassle',
      lead: `I'm a Software Engineer specialized in frontend, focused on building interfaces
that feel fast, look good, and don't break. I love clean code, interaction
details, and turning design into real products people actually use.`,
      strengths: [
        {
          title: 'Component Architecture',
          description:
            'Modular, reusable interfaces that are easy to maintain and scale as the product grows.',
        },
        {
          title: 'Performance & Accessibility',
          description:
            'Fast load times, solid accessibility practices, and a smooth experience on any device.',
        },
        {
          title: 'Responsive Design',
          description:
            'From design to code without losing the details: layouts that adapt from mobile to desktop.',
        },
      ],
    },
    career: {
      eyebrow: 'My journey.',
      headingPre: 'From freelance code to ',
      headingEm: 'enterprise frontend',
      intro:
        "I started in 2015 building freelance websites for local clients. Since then I've worked across ERP, fintech, and healthcare systems — moving from SAP ABAP reports to modern Angular and React interfaces. Today I lead frontend development for an enterprise platform, bringing 10+ years of experience delivering reliable software within cross-functional teams.",
      presentLabel: 'Present',
      items: [
        {
          title: 'The beginnings',
          description:
            'Started out building custom websites for local clients — HTML, CSS, JS, and WordPress — learning to ship real solutions, not just code.',
        },
        {
          title: 'Into the ERP world',
          description:
            'Made the jump into enterprise systems: executive reports, data extraction, and custom SAP ABAP solutions for critical billing and financial-compliance processes.',
        },
        {
          title: 'Behind the data',
          description:
            '24/7 monitoring of data flows and reporting, resolving incidents and keeping information flowing reliably into the data lake.',
        },
        {
          title: 'The shift to frontend',
          description:
            'Found my place in frontend: led the UI/UX redesign of internal apps and built a fintech lending platform with Angular, TailwindCSS, and Jest.',
        },
        {
          title: 'Design with purpose',
          description:
            'Designed a data-driven platform following Domain-Driven Design, with interactive Chart.js dashboards for real-time operational decisions.',
        },
        {
          title: 'Frontend in healthcare',
          description:
            'Modernized healthcare applications built on legacy AngularJS, leading UI stabilization as the technical escalation point for critical issues.',
        },
        {
          title: 'Scaling as a team',
          description:
            "Today I'm part of a cross-functional Scrum team, owning end-to-end frontend development for an enterprise ERP platform with Angular 21 and Tailwind CSS.",
        },
      ],
    },
    projects: {
      headingPre: 'My ',
      headingHighlight: 'projects',
      code: 'Code',
      demo: 'Demo',
      visit: 'Visit site',
      tabMine: 'My Projects',
      tabCollabs: 'Collaborations',
      statusActive: 'Active collaboration',
      items: [
        {
          title: 'Project One',
          description:
            'Short project description: what problem it solves and what makes it interesting.',
        },
        {
          title: 'Project Two',
          description:
            'Short project description: what problem it solves and what makes it interesting.',
        },
        {
          title: 'Project Three',
          description:
            'Short project description: what problem it solves and what makes it interesting.',
        },
      ],
      collaborations: {
        items: [
          {
            title: 'Bitlab',
            description:
              'A complete platform for laboratories and medical centers that digitizes the entire clinical workflow — from sample requests and collection to results delivery — with modules for orders, reports, doctors, tests, and user administration.',
          },
          {
            title: 'Bitbank',
            description:
              "A management system for blood banks, adaptable to each institution's needs — covering everything from sample collection and evaluation to reporting and the bank's full administrative workflow.",
          },
        ],
      },
    },
    contact: {
      heading: 'Contact Me',
      text: "Have a project in mind or just want to chat? Write to me, I'd love to hear from you.",
      cta: 'Send Email',
    },
    certifications: {
      eyebrow: 'Always learning.',
      headingPre: 'My ',
      headingHighlight: 'certifications',
      intro: "Courses and certifications I've completed to keep growing as a developer.",
      verifyLabel: 'View certificate',
      dateLabel: 'Earned',
    },
    mentorship: {
      eyebrow: 'Learning is a path, not a destination.',
      headingPre: '1:1 ',
      headingHighlight: 'Mentorship',
      intro:
        "I work with people taking their first steps in frontend — landing their first job, switching careers, or just feeling stuck and unsure what to focus on.",
      topicsHeading: 'How I can help',
      topics: [
        {
          title: 'React & Modern JavaScript',
          description:
            'Solid fundamentals and good practices, so you stop copying and start understanding.',
        },
        {
          title: 'Interview Prep',
          description:
            'Practice with technical questions, coding challenges, and how to explain your decisions clearly.',
        },
        {
          title: 'Portfolio Building',
          description: 'How to choose, present, and document your projects so they actually stand out.',
        },
        {
          title: 'Career Roadmap',
          description:
            "What to learn next, how to prioritize, and how to move from junior to a more senior mindset.",
        },
      ],
      ctaHeading: 'Book a session',
      ctaText: "Write to me and tell me what you're stuck on and how you'd like me to help.",
      ctaButton: 'Book a mentorship',
      testimonialsHeading: 'What people say after a session',
      testimonials: [
        {
          quote:
            "It helped me understand why my code worked, not just copy it. It completely changed how I study.",
        },
        {
          quote:
            "I came in not knowing where to even start with my portfolio and left with a clear plan of what to show and how to explain it.",
        },
        {
          quote: 'The interview prep session was exactly what I needed before my first real interview.',
        },
      ],
    },
    footer: {
      madeWith: 'Made with love',
    },
    themeToggle: {
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
      light: 'Light mode',
      dark: 'Dark mode',
    },
    languageToggle: {
      label: 'Cambiar a español',
    },
    mobileMenu: {
      open: 'Open menu',
      close: 'Close menu',
    },
  },
}
