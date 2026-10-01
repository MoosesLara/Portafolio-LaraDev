import CodeCard from './CodeCard'
import { profile } from '../data/config'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="hero">
      <div className="halloween-moon" aria-hidden="true" />
      <div className="halloween-cloud halloween-cloud-1" aria-hidden="true" />
      <div className="halloween-cloud halloween-cloud-2" aria-hidden="true" />
      <img
        src={`${import.meta.env.BASE_URL}halloween_bat_dark.svg`}
        alt=""
        aria-hidden="true"
        className="halloween-bat halloween-bat-1"
      />
      <img
        src={`${import.meta.env.BASE_URL}halloween_bat_dark.svg`}
        alt=""
        aria-hidden="true"
        className="halloween-bat halloween-bat-2"
      />
      <img
        src={`${import.meta.env.BASE_URL}halloween_bat_dark.svg`}
        alt=""
        aria-hidden="true"
        className="halloween-bat halloween-bat-3"
      />
      <img
        src={`${import.meta.env.BASE_URL}fondoweb.png`}
        alt=""
        aria-hidden="true"
        className="halloween-ground"
      />

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
        <a
          className="btn btn-ghost"
          href={`${import.meta.env.BASE_URL}Curriculum.pdf`}
          target="_blank"
          rel="noreferrer"
          download="CV_MoisesLara.pdf"
        >
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
