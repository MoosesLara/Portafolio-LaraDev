import { profile, socials } from '../data/config'
import Reveal from './Reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Reveal as="footer" className="footer" animation="fadeIn">
      <div className="footer-socials">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
      <p className="footer-copy">
        © {year} {profile.name}. Hecho con amor &lt;3
      </p>
    </Reveal>
  )
}
