/**
 * Generic content card used inside grids (services, etc). Keep this dumb —
 * it only knows how to render {number/title/text}, nothing client-specific.
 */
export default function Card({ number, title, text }) {
  return (
    <div className="service-card">
      {number && <div className="service-num">{number}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
