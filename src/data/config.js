// Edita aquí tus datos personales. El texto que sí cambia según el idioma
// (bio, títulos, descripciones) vive en src/i18n/translations.js.
export const profile = {
  name: 'Moises Lara',
  role: 'Software Engineer Frontend',
  location: 'México',
  email: 'laramoises73@gmail.com',
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

export const socials = [
  { label: 'GitHub', href: 'https://github.com/MoosesLara', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laradev/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:laramoises73@gmail.com', icon: 'email' },
  { label: 'Twitter / X', href: 'https://x.com/tu-usuario', icon: 'twitter' },
]

// stack/repo/demo no cambian con el idioma; título y descripción de cada
// proyecto (por índice) están en translations.js -> projects.items.
export const projects = [
  {
    stack: ['React', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/tu-usuario/proyecto-uno',
    demo: 'https://proyecto-uno.demo.com',
  },
  {
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
    repo: 'https://github.com/tu-usuario/proyecto-dos',
    demo: 'https://proyecto-dos.demo.com',
  },
  {
    stack: ['JavaScript', 'Express', 'Docker'],
    repo: 'https://github.com/tu-usuario/proyecto-tres',
    demo: null,
  },
]

// Título/institución no cambian con el idioma. Reemplaza con tus certificados reales.
export const certifications = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta · Coursera',
    date: '2025',
    verifyUrl: 'https://coursera.org/verify/tu-certificado',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2024',
    verifyUrl: 'https://freecodecamp.org/certification/tu-usuario/javascript-algorithms-and-data-structures',
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: '2024',
    verifyUrl: null,
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2023',
    verifyUrl: null,
  },
]

// Nombre/rol no cambian con el idioma; la cita (por índice) está en
// translations.js -> mentorship.testimonials.
export const testimonials = [
  { name: 'Ana Pérez', role: 'Junior Frontend Developer' },
  { name: 'Carlos Gómez', role: 'Bootcamp Graduate' },
  { name: 'Lucía Fernández', role: 'Career Switcher' },
]
