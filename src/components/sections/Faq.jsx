import { content } from '../../content'
import Reveal from '../ui/Reveal'
import Accordion from '../ui/Accordion'

export default function Faq() {
  const { faq } = content

  return (
    <section id="faq" className="faq">
      <Reveal className="section-head section-head--center">
        <div className="eyebrow-pill">{faq.eyebrow}</div>
        <h2>{faq.heading}</h2>
      </Reveal>
      <Reveal className="faq-wrap" delay={0.1}>
        <Accordion items={faq.items} />
      </Reveal>
    </section>
  )
}
