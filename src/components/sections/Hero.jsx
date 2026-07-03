import { motion } from 'framer-motion'
import { content } from '../../content'
import CoffeeMark from '../ui/CoffeeMark'

const wordVariant = {
  hidden: { opacity: 0, y: '100%' },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.05 * i, ease: [0.2, 0.8, 0.2, 1] },
  }),
}

function AnimatedWords({ text, startAt = 0 }) {
  return text.split(' ').map((word, i) => (
    <motion.span
      key={word}
      custom={i + startAt}
      variants={wordVariant}
      initial="hidden"
      animate="show"
      style={{ display: 'inline-block' }}
    >
      {word}&nbsp;
    </motion.span>
  ))
}

export default function Hero() {
  const { hero } = content

  return (
    <section className="hero">
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <CoffeeMark />
      </motion.div>

      <motion.div
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {hero.eyebrow}
      </motion.div>

      <h1>
        <span className="line1"><AnimatedWords text={hero.headlineLine1} startAt={0} /></span>
        <span className="line2"><AnimatedWords text={hero.headlineLine2} startAt={10} /></span>
      </h1>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        {hero.sub}
      </motion.p>

      <div className="scroll-cue">
        <span className="dot" /> {hero.scrollCue}
      </div>
    </section>
  )
}
