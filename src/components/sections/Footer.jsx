import { content } from '../../content'

export default function Footer() {
  const { footer } = content

  return (
    <footer>
      <div>{footer.copyright}</div>
      <div className="socials">
        {footer.socials.map((s) => (
          <a key={s.label} href={s.href}>{s.label}</a>
        ))}
      </div>
    </footer>
  )
}
