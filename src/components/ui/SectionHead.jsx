import Reveal from './Reveal'

/**
 * Reusable section header: small index label + big heading + short description.
 * Used by every content section so a new section only needs data, not new markup.
 */
export default function SectionHead({ index, heading, description }) {
  return (
    <Reveal className="section-head">
      <div>
        <div className="index"><span className="bean-accent" />{index}</div>
        <h2>{heading}</h2>
      </div>
      {description && <p>{description}</p>}
    </Reveal>
  )
}
