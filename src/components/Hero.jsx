import { profile, heroCopy } from '../data/config'
import CodeCard from './CodeCard'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p
        className="hero-eyebrow animate__animated animate__fadeInDown"
        style={{ animationDelay: '0.1s' }}
      >
        {heroCopy.eyebrow}
      </p>

      <h1
        className="hero-heading animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.25s' }}
      >
        {heroCopy.headingLine1}
        <br />
        {heroCopy.headingLine2}
        <em>{heroCopy.headingHighlight}</em>
      </h1>

      <p
        className="hero-tagline animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.5s' }}
      >
        {profile.tagline}
      </p>

      <div
        className="hero-actions animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.65s' }}
      >
        <a
          className="btn btn-primary animate__animated animate__pulse animate__infinite animate__slower"
          href="#projects"
        >
          Ver proyectos <span className="btn-arrow">→</span>
        </a>
        <a className="btn btn-ghost" href="#contact">
          Contactar
        </a>
      </div>

      <div
        className="hero-visual animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.85s' }}
      >
        <CodeCard />
      </div>
    </section>
  )
}
