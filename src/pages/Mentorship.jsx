import { profile, testimonials } from '../data/config'
import Reveal from '../components/Reveal'
import StrengthCard from '../components/StrengthCard'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

function TestimonialCard({ item, index }) {
  const [ref, visible] = useReveal()

  const handleAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return
    if (e.animationName === 'fadeInUp') {
      e.currentTarget.classList.remove('animate__fadeInUp')
    }
  }

  return (
    <div
      ref={ref}
      className={'testimonial-card' + (visible ? ' animate__animated animate__fadeInUp' : ' reveal')}
      style={visible ? { animationDelay: `${index * 0.1}s` } : undefined}
      onAnimationEnd={handleAnimationEnd}
    >
      <p className="testimonial-quote">“{item.quote}”</p>
      <p className="testimonial-author">{item.name}</p>
      <p className="testimonial-role">{item.role}</p>
    </div>
  )
}

export default function Mentorship() {
  const { t } = useLanguage()
  const items = testimonials.map((person, i) => ({
    ...person,
    quote: t.mentorship.testimonials[i].quote,
  }))

  return (
    <>
      <section className="page-section" id="mentorship-top">
        <div className="page-header">
          <Reveal as="p" className="page-eyebrow" animation="fadeInDown">
            {t.mentorship.eyebrow}
          </Reveal>
          <Reveal as="h1" className="section-title" animation="fadeInUp" delay={0.1}>
            {t.mentorship.headingPre}
            <span className="highlight">{t.mentorship.headingHighlight}</span>
          </Reveal>
          <Reveal as="p" className="page-intro-text" animation="fadeInUp" delay={0.2}>
            {t.mentorship.intro}
          </Reveal>
        </div>

        <Reveal as="h2" className="page-subheading" animation="fadeInUp">
          {t.mentorship.topicsHeading}
        </Reveal>
        <div className="strengths mentorship-topics">
          {t.mentorship.topics.map((item, i) => (
            <StrengthCard item={item} index={i} key={i} />
          ))}
        </div>
      </section>

      <section className="mentorship-cta">
        <Reveal as="h2" className="section-title" animation="bounceIn">
          {t.mentorship.ctaHeading}
        </Reveal>
        <Reveal delay={0.15}>
          <p className="contact-text">{t.mentorship.ctaText}</p>
        </Reveal>
        <Reveal delay={0.3} animation="zoomIn">
          <a
            className="btn btn-primary mentorship-cta-btn animate__animated animate__pulse animate__infinite animate__slower"
            href={`mailto:${profile.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {t.mentorship.ctaButton}
          </a>
        </Reveal>
      </section>

      <section className="testimonials-section">
        <Reveal as="h2" className="section-title" animation="fadeInUp">
          {t.mentorship.testimonialsHeading}
        </Reveal>
        <div className="testimonials">
          {items.map((item, i) => (
            <TestimonialCard item={item} index={i} key={i} />
          ))}
        </div>
      </section>
    </>
  )
}
