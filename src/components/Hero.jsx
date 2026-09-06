import CodeCard from './CodeCard'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <p
        className="hero-eyebrow animate__animated animate__fadeInDown"
        style={{ animationDelay: '0.1s' }}
      >
        {t.hero.eyebrow}
      </p>

      <h1
        className="hero-heading animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.25s' }}
      >
        {t.hero.headingLine1}
        <br />
        {t.hero.headingLine2}
        <em>{t.hero.headingHighlight}</em>
      </h1>

      <p
        className="hero-tagline animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.5s' }}
      >
        {t.hero.tagline}
      </p>

      <div
        className="hero-actions animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.65s' }}
      >
        <a
          className="btn btn-primary animate__animated animate__pulse animate__infinite animate__slower"
          href="#projects"
        >
          {t.hero.ctaProjects} <span className="btn-arrow">→</span>
        </a>
        <a className="btn btn-ghost" href="#contact">
          {t.hero.ctaContact}
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
