import { profile } from '../data/config'
import { skillIcons } from '../data/skillIcons'
import Reveal from './Reveal'
import useReveal from '../hooks/useReveal'
import StrengthCard from './StrengthCard'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const [skillsRef, skillsVisible] = useReveal()

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-head">
          <Reveal as="h2" className="about-heading" animation="fadeInUp">
            {t.about.headingPre}
            <em>{t.about.headingEm}</em>
          </Reveal>
          <Reveal className="about-lead" animation="fadeInUp" delay={0.15}>
            <p>{t.about.lead}</p>
          </Reveal>
        </div>

        <div className="strengths">
          {t.about.strengths.map((item, i) => (
            <StrengthCard item={item} index={i} key={i} />
          ))}
        </div>

        <div
          ref={skillsRef}
          className={'skills-viewport' + (skillsVisible ? ' animate__animated animate__fadeIn' : ' reveal')}
        >
          <div className="skills-track">
            {[0, 1].map((group) => (
              <div className="skills-group" key={group} aria-hidden={group === 1}>
                {profile.skills.map((skill) => {
                  const icon = skillIcons[skill]
                  return (
                    <span key={skill} className="skill-pill">
                      {icon && (
                        <svg viewBox="0 0 24 24" className="skill-pill-icon" aria-hidden="true">
                          <path d={icon.path} fill={icon.color} />
                        </svg>
                      )}
                      {skill}
                    </span>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
