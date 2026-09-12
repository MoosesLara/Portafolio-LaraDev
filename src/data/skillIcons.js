import {
  siJavascript,
  siTypescript,
  siHtml5,
  siCss,
  siSass,
  siAngular,
  siReact,
  siTailwindcss,
  siMui,
  siGit,
  siFigma,
  siJest,
  siDocker,
} from 'simple-icons'

const cloudPath =
  'M18.5 19a4.5 4.5 0 0 0 .5-8.98 6 6 0 0 0-11.8-1.62A5 5 0 0 0 6 19h12.5z'
const cyclePath =
  'M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08a5.99 5.99 0 0 1-5.65 4c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'

export const skillIcons = {
  'JavaScript (ES6+)': { path: siJavascript.path, color: `#${siJavascript.hex}` },
  TypeScript: { path: siTypescript.path, color: `#${siTypescript.hex}` },
  HTML5: { path: siHtml5.path, color: `#${siHtml5.hex}` },
  CSS3: { path: siCss.path, color: `#${siCss.hex}` },
  'Sass/SCSS': { path: siSass.path, color: `#${siSass.hex}` },
  Angular: { path: siAngular.path, color: '#dd0031' },
  React: { path: siReact.path, color: `#${siReact.hex}` },
  'Tailwind CSS': { path: siTailwindcss.path, color: `#${siTailwindcss.hex}` },
  'Material UI': { path: siMui.path, color: `#${siMui.hex}` },
  Git: { path: siGit.path, color: `#${siGit.hex}` },
  'Agile/Scrum': { path: cyclePath, color: '#0052cc' },
  Figma: { path: siFigma.path, color: `#${siFigma.hex}` },
  Jest: { path: siJest.path, color: `#${siJest.hex}` },
  AWS: { path: cloudPath, color: '#ff9900' },
  Docker: { path: siDocker.path, color: `#${siDocker.hex}` },
}
