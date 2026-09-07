import { certificationGroups } from '../data/config'
import Reveal from '../components/Reveal'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

function formatCertDate(year, month, lang) {
  if (!month) return String(year)
  const date = new Date(year, month - 1, 1)
  const locale = lang === 'es' ? 'es-MX' : 'en-US'
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date)
}

function CertCard({ cert, index }) {
  const { t, lang } = useLanguage()
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={'cert-card' + (visible ? ' animate__animated animate__fadeInUp' : ' reveal')}
      style={visible ? { animationDelay: `${index * 0.06}s` } : undefined}
    >
      <h3>{cert.title}</h3>
      <p className="cert-date">
        {t.certifications.dateLabel} {formatCertDate(cert.year, cert.month, lang)}
      </p>
      {cert.verifyUrl && (
        <a className="cert-verify" href={cert.verifyUrl} target="_blank" rel="noreferrer">
          {t.certifications.verifyLabel} →
        </a>
      )}
    </article>
  )
}

export default function Certifications() {
  const { t } = useLanguage()
  let cardIndex = 0

  return (
    <section className="page-section" id="certifications-top">
      <div className="page-header">
        <Reveal as="p" className="page-eyebrow" animation="fadeInDown">
          {t.certifications.eyebrow}
        </Reveal>
        <Reveal as="h1" className="section-title" animation="fadeInUp" delay={0.1}>
          {t.certifications.headingPre}
          <span className="highlight">{t.certifications.headingHighlight}</span>
        </Reveal>
        <Reveal as="p" className="page-intro-text" animation="fadeInUp" delay={0.2}>
          {t.certifications.intro}
        </Reveal>
      </div>

      {certificationGroups.map((group) => (
        <div className="cert-group" key={group.issuer}>
          <h2 className="cert-group-title">{group.issuer}</h2>
          <div className="cert-grid">
            {group.items.map((cert) => {
              const i = cardIndex++
              return <CertCard cert={cert} index={i} key={cert.title} />
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
