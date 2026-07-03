import { content } from '../../content'
import Reveal from '../ui/Reveal'

/**
 * Renders a real photo when `image` is provided (drop files in public/images/
 * and reference them as '/images/your-file.jpg' in content.js). Falls back to
 * the branded gradient + texture when no image is set yet, so the grid never
 * looks broken while photos are still pending.
 */
function ProductCard({ title, meta, image }) {
  return (
    <div
      className={`product-card${image ? ' has-image' : ''}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="product-meta">
        <h3>{title}</h3>
        <span>{meta}</span>
      </div>
    </div>
  )
}

function FeatureCard({ title, text }) {
  return (
    <div className="bento-feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function Work() {
  const { work } = content
  const [featureA, featureB] = work.features

  return (
    <section id="work">
      <Reveal className="section-head section-head--center">
        <div className="eyebrow-pill">{work.index}</div>
        <h2>{work.heading}</h2>
        <p>{work.description}</p>
      </Reveal>
      <Reveal className="bento-grid" delay={0.1}>
        <FeatureCard {...featureA} />
        <ProductCard {...work.items[0]} />
        <ProductCard {...work.items[1]} />
        <ProductCard {...work.items[2]} />
        <FeatureCard {...featureB} />
        <ProductCard {...work.items[3]} />
      </Reveal>
    </section>
  )
}
