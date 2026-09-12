import CodeCard from './CodeCard'
import { profile } from '../data/config'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="hero">
      <p
        className="hero-eyebrow animate__animated animate__fadeInDown"
        style={{ animationDelay: '0.08s' }}
      >
        {t.hero.eyebrow}
      </p>

      <p
        className="hero-identity animate__animated animate__fadeInDown"
        style={{ animationDelay: '0.14s' }}
      >
        <strong>{profile.name}</strong> · {profile.role} · {profile.keywords.join(' · ')}
      </p>

      <h1
        className="hero-heading animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.2s' }}
      >
        {t.hero.headingLine1}
        <br />
        {t.hero.headingLine2}
        <em>{t.hero.headingHighlight}</em>
      </h1>

      <p
        className="hero-tagline animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.26s' }}
      >
        {t.hero.tagline}
      </p>

      <div
        className="hero-actions animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.32s' }}
      >
        <a
          className="btn btn-primary animate__animated animate__pulse animate__infinite animate__slower"
          href="#projects"
        >
          {t.hero.ctaProjects} <span className="btn-arrow">→</span>
        </a>
        <a className="btn btn-ghost" href={`${import.meta.env.BASE_URL}cv.pdf`} download>
          {t.hero.ctaCV}
        </a>
      </div>

      <div
        className="hero-visual animate__animated animate__fadeInUp"
        style={{ animationDelay: '0.38s' }}
      >
        <CodeCard />
      </div>
    </section>
  )
}
