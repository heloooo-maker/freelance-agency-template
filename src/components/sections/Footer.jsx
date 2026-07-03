import { content } from '../../content'
import CoffeeMark from '../ui/CoffeeMark'

export default function Footer() {
  const { footer, brand } = content

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo logo--light">
            <CoffeeMark className="logo-mark" />
            {brand}
          </div>
          <p>{footer.tagline}</p>
          <span className="footer-ribbon">{footer.ribbon}</span>
        </div>

        <div className="footer-columns">
          {footer.columns.map((col) => (
            <div className="footer-column" key={col.heading}>
              <h4>{col.heading}</h4>
              {col.links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-newsletter">
          <h4>{footer.newsletter.heading}</h4>
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder={footer.newsletter.placeholder} />
            <button type="submit">{footer.newsletter.buttonLabel}</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div>{footer.copyright}</div>
        <div className="socials">
          {footer.socials.map((s) => (
            <a key={s.label} href={s.href}>{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
