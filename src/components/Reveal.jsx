import useReveal from '../hooks/useReveal'

/**
 * Wraps children in a div that plays an animate.css animation the first
 * time it scrolls into view. `delay`/`duration` are in seconds.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  className = '',
}) {
  const [ref, visible] = useReveal()

  const classes = visible ? ['animate__animated', `animate__${animation}`] : ['reveal']
  if (className) classes.push(className)

  return (
    <Tag
      ref={ref}
      className={classes.join(' ')}
      style={
        visible
          ? { animationDelay: `${delay}s`, animationDuration: `${duration}s` }
          : undefined
      }
    >
      {children}
    </Tag>
  )
}
