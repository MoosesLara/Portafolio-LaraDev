import { certifications } from '../data/config'
import Reveal from '../components/Reveal'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

function CertCard({ cert, index }) {
  const { t } = useLanguage()
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={'cert-card' + (visible ? ' animate__animated animate__fadeInUp' : ' reveal')}
      style={visible ? { animationDelay: `${index * 0.1}s` } : undefined}
    >
      <h3>{cert.title}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <p className="cert-date">
        {t.certifications.dateLabel} {cert.date}
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

  return (
    <section className="page-section" id="certifications-top">
      <div className="page-header">
        <Reveal
          as="p"
          className="page-eyebrow"
          animation="fadeInDown"
        >
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

      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <CertCard cert={cert} index={i} key={cert.title} />
        ))}
      </div>
    </section>
  )
}
