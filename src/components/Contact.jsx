import { profile, socials } from '../data/config'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal as="h2" className="section-title" animation="bounceIn">
        Contáctame <span className="highlight">.</span>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="contact-text">
          ¿Tienes un proyecto en mente o quieres platicar? Escríbeme, con gusto respondo.
        </p>
      </Reveal>
      <Reveal delay={0.3} animation="zoomIn">
        <a
          className="btn btn-primary contact-cta animate__animated animate__pulse animate__infinite animate__slower"
          href={`mailto:${profile.email}`}
          target="_blank"
          rel="noreferrer"
        >
          Enviar Email
        </a>
      </Reveal>
      <Reveal delay={0.45}>
        <div className="contact-socials">
          {socials
            .filter((s) => s.label !== 'Email')
            .map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
        </div>
      </Reveal>
    </section>
  )
}
