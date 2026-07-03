import './App.css'
import { content } from './content'
import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Work from './components/sections/Work'
import About from './components/sections/About'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'
import Marquee from './components/ui/Marquee'

function App() {
  return (
    <>
      <div className="noise-bg" />
      <Nav />
      <main>
        <Hero />
        <Marquee items={content.marquee} />
        <Services />
        <Work />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
