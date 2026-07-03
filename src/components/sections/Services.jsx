import { content } from '../../content'
import SectionHead from '../ui/SectionHead'
import Card from '../ui/Card'
import Reveal from '../ui/Reveal'

export default function Services() {
  const { services } = content

  return (
    <section id="services">
      <SectionHead
        index={services.index}
        heading={services.heading}
        description={services.description}
      />
      <Reveal className="services-grid">
        {services.items.map((item) => (
          <Card key={item.title} number={item.number} title={item.title} text={item.text} />
        ))}
      </Reveal>
    </section>
  )
}
