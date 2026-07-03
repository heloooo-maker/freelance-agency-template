/**
 * Original hand-drawn coffee cup mark with animated steam.
 * Pure inline SVG — no external image/asset dependency, no licensing concerns.
 */
export default function CoffeeMark({ className = '' }) {
  return (
    <svg
      className={`coffee-mark ${className}`}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Steam wisps */}
      <path className="steam steam-1" d="M40 46C40 46 30 36 40 26C50 16 40 6 40 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path className="steam steam-2" d="M60 46C60 46 50 36 60 26C70 16 60 6 60 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path className="steam steam-3" d="M80 46C80 46 70 36 80 26C90 16 80 6 80 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Cup body */}
      <path
        d="M20 54H90V96C90 112 77 124 61 124H49C33 124 20 112 20 96V54Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Handle */}
      <path
        d="M90 64H98C104 64 108 69 108 75V79C108 85 104 90 98 90H90"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Saucer */}
      <ellipse cx="55" cy="132" rx="45" ry="6" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}
