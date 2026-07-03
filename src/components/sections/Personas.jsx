import { content } from '../../content'
import Reveal from '../ui/Reveal'
import PersonaCard from '../ui/PersonaCard'

export default function Personas() {
  const { personas } = content

  return (
    <section id="personas" className="personas">
      <Reveal className="section-head section-head--center">
        <div className="eyebrow-pill">{personas.eyebrow}</div>
        <h2>{personas.heading}</h2>
      </Reveal>
      <div className="personas-grid">
        {personas.items.map((item, i) => (
          <Reveal key={item.heading} delay={i * 0.1}>
            <PersonaCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
