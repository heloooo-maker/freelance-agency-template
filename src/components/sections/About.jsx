import { content } from '../../content'
import Reveal from '../ui/Reveal'

export default function About() {
  const { about } = content

  return (
    <section id="about" className="trust">
      <Reveal className="section-head section-head--center">
        <h2>{about.heading}</h2>
        <p>{about.text}</p>
      </Reveal>

      <Reveal className="stat-row" delay={0.1}>
        {about.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </Reveal>

      <Reveal className="trust-features" delay={0.2}>
        {about.features.map((feature) => (
          <div className="trust-feature" key={feature.title}>
            <span className="trust-feature-icon" aria-hidden="true" />
            <h4>{feature.title}</h4>
            <p>{feature.text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
