import { motion } from 'framer-motion'
import { content } from '../../content'

export default function Hero() {
  const { hero } = content

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="dot" /> {hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {hero.headlineLine1}
          <br />
          {hero.headlineLine2}
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {hero.sub}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a href={hero.ctaHref} className="btn btn-primary">
            {hero.ctaLabel} <span aria-hidden="true">→</span>
          </a>
          <a href={hero.secondaryHref} className="btn btn-ghost">
            {hero.secondaryLabel}
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {hero.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        <div className="mock-window">
          <div className="mock-titlebar">
            <span className="mock-dot" />
            <span className="mock-dot" />
            <span className="mock-dot" />
            <span className="mock-title">{hero.visual.windowTitle}</span>
          </div>
          <div className="mock-body">
            <span className="mock-pill">{hero.visual.badgeTop}</span>
            <div className="mock-card">
              <div className="mock-card-swatch" />
              <div>
                <h4>{hero.visual.cardTitle}</h4>
                <span>{hero.visual.cardMeta}</span>
              </div>
            </div>
            <div className="mock-bars">
              <span style={{ width: '80%' }} />
              <span style={{ width: '55%' }} />
              <span style={{ width: '65%' }} />
            </div>
          </div>
        </div>
        <motion.div
          className="mock-floating"
          initial={{ opacity: 0, x: -10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <span>{hero.visual.promptQuestion}</span>
          <div className="mock-floating-btns">
            <button type="button" className="yes">Yes</button>
            <button type="button">No</button>
          </div>
        </motion.div>
        <div className="hero-ribbon">
          <span>{hero.visual.ribbon}</span>
        </div>
      </motion.div>
    </section>
  )
}
