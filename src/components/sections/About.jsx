import { content } from '../../content'
import Reveal from '../ui/Reveal'

export default function About() {
  const { about } = content

  return (
    <section id="about">
      <Reveal className="about-wrap">
        <p>{about.text}</p>
        <div>
          <div className="stat-row">
            {about.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
