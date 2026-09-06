import useReveal from '../hooks/useReveal'

export default function StrengthCard({ item, index }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={'strength' + (visible ? ' animate__animated animate__fadeInUp' : ' reveal')}
      style={visible ? { animationDelay: `${index * 0.12}s` } : undefined}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}
