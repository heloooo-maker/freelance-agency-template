// Single source of truth for all site copy/data.
// To reuse this template for a new client: edit ONLY this file (and theme.css for colors).
// No component should ever contain hardcoded client copy — that's the whole point of this file.

export const content = {
  brand: 'ALTITUDE',

  nav: {
    links: [
      { label: 'Coffee', href: '#work' },
      { label: 'Process', href: '#services' },
      { label: 'Our Story', href: '#about' },
    ],
    cta: { label: 'Shop beans', href: '#contact' },
  },

  hero: {
    eyebrow: 'Single-Origin Roastery — Est. 2026',
    headlineLine1: 'Coffee grown',
    headlineLine2: 'above the clouds.',
    sub: 'Small-batch beans sourced directly from high-altitude farms in the Central Highlands, roasted weekly to order.',
    scrollCue: 'Scroll to explore',
  },

  marquee: ['Single-Origin', 'Small-Batch', 'Direct Trade', 'Roasted Weekly'],

  services: {
    index: '01 — Our process',
    heading: 'From mountain farm to your cup, every step matters.',
    description:
      'We work directly with growers, roast in small batches, and ship within days of roasting — never months.',
    items: [
      {
        number: '01',
        title: 'Sourcing',
        text: 'We buy directly from smallholder farms above 1,200m elevation, paying well above market rate for quality lots.',
      },
      {
        number: '02',
        title: 'Roasting',
        text: 'Small 5kg batches, roasted twice a week, profiled by hand to bring out each origin\'s natural character.',
      },
      {
        number: '03',
        title: 'Packaging',
        text: 'One-way valve bags sealed within hours of roasting — your coffee stays fresh, not just "recently made".',
      },
      {
        number: '04',
        title: 'Shipping',
        text: 'Roasted to order and shipped within 48 hours, so what arrives is close to peak freshness, not months old.',
      },
    ],
  },

  work: {
    index: '02 — Featured beans',
    heading: 'Our current lineup.',
    description: "Rotating seasonally — once a lot sells out, it's gone until next harvest.",
    // `image`: drop a real photo file in public/images/ and point to it here,
    // e.g. '/images/cloud-forest.jpg'. Leave null and the card falls back to
    // the branded gradient — never a broken/empty look either way.
    items: [
      { title: 'Cloud Forest', meta: 'Washed · Arabica — Elevation 1,400m', image: null },
      { title: 'Red Basalt', meta: 'Honey Process · Arabica — Elevation 1,300m', image: null },
      { title: 'Night Harvest', meta: 'Natural · Robusta Blend — Elevation 900m', image: null },
      { title: 'First Frost', meta: 'Limited Lot · Arabica — Elevation 1,550m', image: null },
    ],
  },

  about: {
    text: "We started Altitude because we couldn't find coffee at home that tasted like what we drank straight from the farm. So we built direct relationships with growers and started roasting it ourselves.",
    stats: [
      { value: '12', label: 'Partner farms' },
      { value: '1,200m+', label: 'Min. elevation' },
      { value: '48h', label: 'Roast-to-ship time' },
    ],
  },

  cta: {
    heading: 'Ready to taste the difference altitude makes?',
    buttonLabel: 'Shop this week\'s roast →',
    email: 'hello@example.com',
  },

  footer: {
    copyright: '© 2026 Altitude Coffee Co. All rights reserved.',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'TikTok', href: '#' },
    ],
  },
}
