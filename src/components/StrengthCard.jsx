import useReveal from '../hooks/useReveal'

export default function StrengthCard({ item, index }) {
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
      className={'strength' + (visible ? ' animate__animated animate__fadeInUp' : ' reveal')}
      style={visible ? { animationDelay: `${index * 0.12}s` } : undefined}
      onAnimationEnd={handleAnimationEnd}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}
