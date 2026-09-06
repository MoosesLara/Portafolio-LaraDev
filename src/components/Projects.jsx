import { projects } from '../data/config'
import Reveal from './Reveal'
import useReveal from '../hooks/useReveal'

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal()

  const handleMouseEnter = (e) => {
    const el = e.currentTarget
    el.classList.remove('animate__zoomIn')
    el.classList.add('animate__animated', 'animate__heartBeat')
  }

  const handleAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return
    const el = e.currentTarget
    if (e.animationName === 'zoomIn') {
      el.classList.remove('animate__zoomIn')
    } else if (e.animationName === 'heartBeat') {
      el.classList.remove('animate__heartBeat')
    }
  }

  return (
    <article
      ref={ref}
      className={
        'project-card' + (visible ? ' animate__animated animate__zoomIn' : ' reveal')
      }
      style={visible ? { animationDelay: `${index * 0.12}s` } : undefined}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-stack">
        {project.stack.map((tech) => (
          <span key={tech} className="stack-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            Código
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <Reveal as="h2" className="section-title" animation="fadeInUp">
        Mis <span className="highlight">proyectos</span>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
