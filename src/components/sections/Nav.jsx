import { content } from '../../content'
import CoffeeMark from '../ui/CoffeeMark'

export default function Nav() {
  return (
    <nav>
      <a href="#top" className="logo">
        <CoffeeMark className="logo-mark" />
        {content.brand}
      </a>
      <div className="nav-links">
        {content.nav.links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
      <a href={content.nav.cta.href} className="nav-cta">{content.nav.cta.label}</a>
    </nav>
  )
}
