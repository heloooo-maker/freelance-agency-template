import { content } from '../../content'
import Reveal from '../ui/Reveal'

export default function CTA() {
  const { cta } = content

  return (
    <section id="contact" className="cta">
      <Reveal className="cta-inner">
        <div className="cta-copy">
          <h2>{cta.heading}</h2>
          <a href={`mailto:${cta.email}`} className="btn btn-dark">{cta.buttonLabel}</a>
        </div>
        <div className="cta-visual" aria-hidden="true">
          <div className="cta-visual-card">
            <span className="cta-visual-swatch" />
            <div className="cta-visual-lines">
              <span style={{ width: '70%' }} />
              <span style={{ width: '45%' }} />
            </div>
          </div>
          <div className="cta-visual-chip">Roasted this week</div>
        </div>
      </Reveal>
    </section>
  )
}
