/**
 * Colored persona card used in the "who it's roasted for" section.
 * `tone` selects the pastel background via CSS class — persona-{tone}.
 */
export default function PersonaCard({ tone, kicker, heading, tags }) {
  return (
    <div className={`persona-card persona-${tone}`}>
      <span className="persona-kicker">{kicker}</span>
      <h3>{heading}</h3>
      <div className="persona-glyph" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="persona-tags">
        {tags.map((tag) => (
          <span key={tag} className="persona-tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}
