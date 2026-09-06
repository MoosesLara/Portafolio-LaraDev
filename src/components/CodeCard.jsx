export default function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card-bar">
        <span className="code-dot code-dot-red" />
        <span className="code-dot code-dot-yellow" />
        <span className="code-dot code-dot-green" />
        <span className="code-card-title">Portfolio.jsx</span>
      </div>
      <pre className="code-card-body">
        <code>
          <span className="tok-key">const</span> <span className="tok-var">Portfolio</span> = ()
          {' => {'}
          {'\n'}  <span className="tok-key">return</span> ({'\n'}
          {'    '}&lt;<span className="tok-tag">Header</span> /&gt;{'\n'}
          {'    '}&lt;<span className="tok-tag">Hero</span>{' '}
          <span className="tok-attr">role</span>=<span className="tok-str">"Frontend"</span> /&gt;
          {'\n'}
          {'    '}&lt;<span className="tok-tag">Projects</span> /&gt;{'\n'}
          {'    '}&lt;<span className="tok-tag">Contact</span> /&gt;{'\n'}
          {'  '}){'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  )
}
