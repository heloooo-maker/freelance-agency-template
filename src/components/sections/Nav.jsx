import { content } from '../../content'

export default function Nav() {
  return (
    <nav>
      <div className="logo">{content.brand}</div>
      <div className="nav-links">
        {content.nav.links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
      <a href={content.nav.cta.href} className="nav-cta">{content.nav.cta.label}</a>
    </nav>
  )
}
