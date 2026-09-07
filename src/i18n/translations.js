// Todo el texto visible del sitio, por idioma. Los datos que no cambian con el
// idioma (nombre, email, links, stack de tecnologías) viven en src/data/config.js.
export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
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
    projects: {
      headingPre: 'Mis ',
      headingHighlight: 'proyectos',
      code: 'Código',
      demo: 'Demo',
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
    projects: {
      headingPre: 'My ',
      headingHighlight: 'projects',
      code: 'Code',
      demo: 'Demo',
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
