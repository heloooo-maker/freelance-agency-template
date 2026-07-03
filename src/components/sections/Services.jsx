import { useState } from 'react'
import { content } from '../../content'
import Reveal from '../ui/Reveal'

export default function Services() {
  const { services } = content
  const [active, setActive] = useState(0)
  const current = services.items[active]

  return (
    <section id="services">
      <Reveal className="section-head section-head--center">
        <div className="eyebrow-pill">{services.index}</div>
        <h2>{services.heading}</h2>
        <p>{services.description}</p>
      </Reveal>

      <Reveal className="process-showcase" delay={0.1}>
        <div className="process-tabs">
          {services.items.map((item, i) => (
            <button
              key={item.number}
              type="button"
              className={`process-tab${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="process-tab-num">{item.number}</span>
              <span className="process-tab-copy">
                <b>{item.title}</b>
                <span>{item.text}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="process-preview">
          <div className="process-preview-card">
            <span className="process-preview-num">{current.number}</span>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <div className="process-preview-graphic" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
