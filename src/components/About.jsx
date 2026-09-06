import { profile, strengths } from '../data/config'
import Reveal from './Reveal'
import useReveal from '../hooks/useReveal'
import StrengthCard from './StrengthCard'

export default function About() {
  const [skillsRef, skillsVisible] = useReveal()

  return (
    <section className="about" id="about">
      <div className="about-head">
        <Reveal as="h2" className="about-heading" animation="fadeInUp">
          Diseñado para Ayudarte a Lanzar Más Rápido, <em>Sin Complicaciones</em>
        </Reveal>
        <Reveal className="about-lead" animation="fadeInUp" delay={0.15}>
          <p>{profile.about}</p>
        </Reveal>
      </div>

      <div className="strengths">
        {strengths.map((item, i) => (
          <StrengthCard item={item} index={i} key={item.title} />
        ))}
      </div>

      <div ref={skillsRef} className="skills">
        {profile.skills.map((skill, i) => (
          <span
            key={skill}
            className={
              'skill-pill' + (skillsVisible ? ' animate__animated animate__fadeInUp' : ' reveal')
            }
            style={skillsVisible ? { animationDelay: `${i * 0.06}s` } : undefined}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
