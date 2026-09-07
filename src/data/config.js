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

// Certificaciones agrupadas por institución. `month` es opcional (1-12); si no
// se indica, solo se muestra el año. title/issuer no cambian con el idioma.
export const certificationGroups = [
  {
    issuer: 'Anthropic',
    items: [
      { title: 'Model Context Protocol: Advanced Topics', year: 2026, month: 4, verifyUrl: null },
      { title: 'Introduction to agent skills', year: 2026, month: 4, verifyUrl: null },
      { title: 'Introduction to subagents', year: 2026, month: 4, verifyUrl: null },
      { title: 'Claude 101', year: 2026, month: 4, verifyUrl: null },
      { title: 'AI Fluency Framework & Foundations', year: 2026, month: 4, verifyUrl: null },
    ],
  },
  {
    issuer: 'HackerRank',
    items: [
      {
        title: 'Software Engineer',
        year: 2026,
        month: 2,
        verifyUrl: 'https://www.hackerrank.com/certificates/4ffd0f98e2a1',
      },
      {
        title: 'Problem Solving (Intermediate)',
        year: 2026,
        month: 2,
        verifyUrl: 'https://www.hackerrank.com/certificates/95e85b24941d',
      },
      {
        title: 'JavaScript (Intermediate)',
        year: 2026,
        month: 2,
        verifyUrl: 'https://www.hackerrank.com/certificates/eb0a51305d61',
      },
      {
        title: 'SQL (Intermediate)',
        year: 2026,
        month: 2,
        verifyUrl: 'https://www.hackerrank.com/certificates/d907a20e64c9',
      },
      {
        title: 'Angular (Intermediate)',
        year: 2026,
        month: 2,
        verifyUrl: 'https://www.hackerrank.com/certificates/d04da3b87371',
      },
      {
        title: 'Software Engineer (Intermediate)',
        year: 2026,
        month: 2,
        verifyUrl: 'https://www.hackerrank.com/certificates/4a895deec8b1',
      },
    ],
  },
  {
    issuer: 'AWS',
    items: [
      { title: 'AWS Knowledge: Architecting Badge', year: 2023, month: 3, verifyUrl: null },
      { title: 'AWS Certified Cloud Practitioner', year: 2021, month: 10, verifyUrl: null },
      { title: 'AWS Partner: Accreditation (Business) Badge', year: 2021, month: 10, verifyUrl: null },
      { title: 'AWS Partner: Cloud Economics Accreditation Badge', year: 2021, month: 10, verifyUrl: null },
    ],
  },
  {
    issuer: 'Udemy',
    items: [
      {
        title: 'TypeScript',
        year: 2023,
        month: 5,
        verifyUrl: 'https://www.udemy.com/certificate/UC-eb245487-a34c-40fb-8b2a-8f9591bc2689/',
      },
      { title: 'Solutions Architect - AWS', year: 2023, month: null, verifyUrl: null },
    ],
  },
  {
    issuer: 'Platzi',
    items: [
      { title: 'Frontend Development', year: 2020, month: 12, verifyUrl: null },
      { title: 'Web Development Certification', year: 2020, month: 7, verifyUrl: null },
    ],
  },
]

// Nombre/rol no cambian con el idioma; la cita (por índice) está en
// translations.js -> mentorship.testimonials.
export const testimonials = [
  { name: 'Ana Pérez', role: 'Junior Frontend Developer' },
  { name: 'Carlos Gómez', role: 'Bootcamp Graduate' },
  { name: 'Lucía Fernández', role: 'Career Switcher' },
]
