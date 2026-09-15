import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'
import { getMailtoLink } from '../utils/contactLinks'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="contact" id="contact">
      <Reveal as="h2" className="section-title" animation="bounceIn">
        {t.contact.heading} <span className="highlight">.</span>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="contact-text">{t.contact.text}</p>
      </Reveal>
      <Reveal delay={0.3} animation="zoomIn">
        <a
          className="btn btn-primary contact-cta animate__animated animate__pulse animate__infinite animate__slower"
          href={getMailtoLink(t.contact.emailSubject, t.contact.emailBody)}
          target="_blank"
          rel="noreferrer"
        >
          {t.contact.cta}
        </a>
      </Reveal>
    </section>
  )
}
