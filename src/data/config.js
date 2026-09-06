// Edita aquí tus datos personales, se usan en todo el sitio.
export const profile = {
  name: 'Moises Lara',
  role: 'Software Engineer Frontend',
  tagline: 'Construyo aplicaciones web rápidas, escalables y con buen diseño.',
  location: 'México',
  email: 'laramoises73@gmail.com',
  about: `Soy Software Engineer especializado en frontend, enfocado en construir interfaces
que se sienten rápidas, se ven bien y no se rompen. Me gusta el código limpio, los
detalles de interacción y traducir diseño en productos reales que la gente usa.`,
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'CSS',
    'Git',
    'SQL',
    'APIs REST',
  ],
}

// Copy del hero estilo editorial: eyebrow (itálica) + heading de dos líneas
// con una palabra resaltada.
export const heroCopy = {
  eyebrow: 'Interfaces, en su mejor ritmo.',
  headingLine1: 'Construyo Interfaces',
  headingLine2: 'Rápidas, No ',
  headingHighlight: 'Complicadas',
}

// Las 3 columnas de la sección de fortalezas (reemplaza un "sobre mí" plano).
export const strengths = [
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
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/MoosesLara', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laradev/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:laramoises73@gmail.com', icon: 'email' },
  { label: 'Twitter / X', href: 'https://x.com/tu-usuario', icon: 'twitter' },
]

export const projects = [
  {
    title: 'Proyecto Uno',
    description:
      'Descripción breve del proyecto: qué problema resuelve y qué lo hace interesante.',
    stack: ['React', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/tu-usuario/proyecto-uno',
    demo: 'https://proyecto-uno.demo.com',
  },
  {
    title: 'Proyecto Dos',
    description:
      'Descripción breve del proyecto: qué problema resuelve y qué lo hace interesante.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
    repo: 'https://github.com/tu-usuario/proyecto-dos',
    demo: 'https://proyecto-dos.demo.com',
  },
  {
    title: 'Proyecto Tres',
    description:
      'Descripción breve del proyecto: qué problema resuelve y qué lo hace interesante.',
    stack: ['JavaScript', 'Express', 'Docker'],
    repo: 'https://github.com/tu-usuario/proyecto-tres',
    demo: null,
  },
]
