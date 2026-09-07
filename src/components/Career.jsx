import { career } from '../data/config'
import Reveal from './Reveal'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

function TimelineItem({ job, item, index }) {
  const { t } = useLanguage()
  const [ref, visible] = useReveal()
  const end = job.end ? job.end : t.career.presentLabel

  return (
    <div
      ref={ref}
      className={'timeline-item' + (visible ? ' animate__animated animate__fadeInUp' : ' reveal')}
      style={visible ? { animationDelay: `${index * 0.08}s` } : undefined}
    >
      <span className="timeline-dot" aria-hidden="true" />
      <p className="timeline-year">
        {job.start} – {end} · {job.company}
      </p>
      <h3 className="timeline-title">{item.title}</h3>
      <p className="timeline-description">{item.description}</p>
    </div>
  )
}

export default function Career() {
  const { t } = useLanguage()

  return (
    <section className="career" id="career">
      <div className="career-grid">
        <div className="career-content">
          <Reveal as="p" className="page-eyebrow" animation="fadeInDown">
            {t.career.eyebrow}
          </Reveal>
          <Reveal as="h2" className="about-heading" animation="fadeInUp" delay={0.1}>
            {t.career.headingPre}
            <em>{t.career.headingEm}</em>
          </Reveal>
          <Reveal className="about-lead" animation="fadeInUp" delay={0.2}>
            <p>{t.career.intro}</p>
          </Reveal>
        </div>

        <div className="timeline">
          {t.career.items.map((item, i) => (
            <TimelineItem job={career[i]} item={item} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
