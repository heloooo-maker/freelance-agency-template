/**
 * Infinite scrolling word ticker. Pass any list of words — duplicated once
 * internally so the CSS loop (-50%) is seamless regardless of item count.
 */
export default function Marquee({ items = [] }) {
  const loop = [...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {loop.map((word, i) => (
          <span key={`${word}-${i}`}>{word}</span>
        ))}
      </div>
    </div>
  )
}
