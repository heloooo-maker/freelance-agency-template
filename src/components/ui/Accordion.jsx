import { useState } from 'react'

/**
 * Single-open accordion. Pass {q, a} items — dumb component, no client copy.
 */
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = i === openIndex
        return (
          <div className={`accordion-item${isOpen ? ' is-open' : ''}`} key={item.q}>
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="accordion-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="accordion-panel">{item.a}</div>}
          </div>
        )
      })}
    </div>
  )
}
