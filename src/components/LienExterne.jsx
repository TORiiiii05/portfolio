export default function LienExterne({ href, className, children }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  )
}
