import { content } from '../../content'
import SectionHead from '../ui/SectionHead'
import Reveal from '../ui/Reveal'

/**
 * Renders a real photo when `image` is provided (drop files in public/images/
 * and reference them as '/images/your-file.jpg' in content.js). Falls back to
 * the branded gradient + texture when no image is set yet, so the grid never
 * looks broken while photos are still pending.
 */
function WorkCard({ title, meta, image }) {
  return (
    <div
      className={`work-card${image ? ' has-image' : ''}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="work-meta">
        <h3>{title}</h3>
        <span>{meta}</span>
      </div>
    </div>
  )
}

export default function Work() {
  const { work } = content

  return (
    <section id="work">
      <SectionHead index={work.index} heading={work.heading} description={work.description} />
      <Reveal className="work-grid">
        {work.items.map((item) => (
          <WorkCard key={item.title} title={item.title} meta={item.meta} image={item.image} />
        ))}
      </Reveal>
    </section>
  )
}
