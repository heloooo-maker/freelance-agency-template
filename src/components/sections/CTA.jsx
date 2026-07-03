import { content } from '../../content'
import Reveal from '../ui/Reveal'

export default function CTA() {
  const { cta } = content

  return (
    <section id="contact" className="cta">
      <Reveal>
        <h2>{cta.heading}</h2>
        <a href={`mailto:${cta.email}`} className="cta-btn">{cta.buttonLabel}</a>
      </Reveal>
    </section>
  )
}
