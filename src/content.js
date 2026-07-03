// Single source of truth for all site copy/data.
// To reuse this template for a new client: edit ONLY this file (and theme.css for colors).
// No component should ever contain hardcoded client copy — that's the whole point of this file.

export const content = {
  brand: 'ALTITUDE',

  nav: {
    links: [
      { label: 'Coffee', href: '#work' },
      { label: 'Process', href: '#services' },
      { label: 'For You', href: '#personas' },
      { label: 'Our Story', href: '#about' },
    ],
    cta: { label: 'Shop beans', href: '#contact' },
  },

  hero: {
    badge: 'Single-Origin Roastery — Est. 2026',
    headlineLine1: 'The Ultimate',
    headlineLine2: 'High-Altitude Roast',
    sub: 'Small-batch beans sourced directly from high-altitude farms in the Central Highlands, roasted weekly to order and shipped within 48 hours.',
    ctaLabel: 'Shop This Week’s Roast',
    ctaHref: '#contact',
    secondaryLabel: 'See Our Process',
    secondaryHref: '#services',
    stats: [
      { value: '12', label: 'Partner farms' },
      { value: '1,200m+', label: 'Min. elevation' },
      { value: '48h', label: 'Roast-to-ship' },
    ],
    visual: {
      windowTitle: 'roast-log.altitude',
      badgeTop: 'Fresh Roast',
      cardTitle: 'Cloud Forest',
      cardMeta: 'Washed · Arabica · 1,400m',
      promptQuestion: 'Grind for pour-over?',
      ribbon: '48H FROM ROAST TO DOOR',
    },
  },

  marquee: ['Single-Origin', 'Small-Batch', 'Direct Trade', 'Roasted Weekly'],

  personas: {
    eyebrow: 'Who It’s Roasted For',
    heading: 'Coffee for however you drink it.',
    items: [
      {
        tone: 'yellow',
        kicker: 'For Home Brewers',
        heading: 'Your First Perfect Cup',
        tags: ['Brew Guides', 'Freshness Tips', 'Starter Kit', 'Subscriptions'],
      },
      {
        tone: 'green',
        kicker: 'For Cafés & Restaurants',
        heading: 'Consistent Quality At Scale',
        tags: ['Wholesale', 'Barista Training', 'Custom Blends', 'Equipment'],
      },
      {
        tone: 'blue',
        kicker: 'For Gifting & Events',
        heading: 'Share The Altitude Experience',
        tags: ['Gift Sets', 'Corporate Orders', 'Custom Labels', 'Events'],
      },
    ],
  },

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
    features: [
      {
        title: 'Direct-Trade Sourcing',
        text: 'Every lot traced back to the farm that grew it — no brokers, no blending away the origin.',
      },
      {
        title: 'Roasted To Order, Never Warehoused',
        text: 'We roast twice a week in small batches, so what ships is days old, not months old.',
      },
    ],
  },

  about: {
    heading: 'Trusted by home brewers and independent cafés.',
    text: "We started Altitude because we couldn't find coffee at home that tasted like what we drank straight from the farm. So we built direct relationships with growers and started roasting it ourselves.",
    stats: [
      { value: '12', label: 'Partner farms' },
      { value: '1,200m+', label: 'Min. elevation' },
      { value: '48h', label: 'Roast-to-ship time' },
    ],
    features: [
      { title: 'Direct-Trade Sourcing', text: 'Paying growers well above market rate for quality lots, every harvest.' },
      { title: 'Small-Batch Roasting', text: '5kg batches, hand-profiled twice a week — never a mega-batch drum.' },
      { title: 'Grown Above 1,200m', text: 'Higher elevation means slower-ripening cherries and denser, more complex beans.' },
      { title: 'Free Roast-Day Shipping', text: 'Every subscription ships free the same day it comes off the roaster.' },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Everything you’re wondering before you order.',
    items: [
      {
        q: 'How fresh is the coffee when it arrives?',
        a: 'We roast to order twice a week and ship within 48 hours of roasting, so most orders arrive within a week of coming off the roaster — not months old like shelf coffee.',
      },
      {
        q: 'Do you offer subscriptions?',
        a: 'Yes — choose weekly, biweekly, or monthly delivery of any lot, and swap or pause anytime from your account. Subscriptions also ship free.',
      },
      {
        q: 'Is your coffee ethically and directly sourced?',
        a: 'Every lot is bought directly from the farm that grew it, at well above market rate, with no brokers in between. We publish the farm and elevation on every bag.',
      },
      {
        q: 'What grind options do you offer?',
        a: 'Whole bean, or ground for drip, pour-over, espresso, French press, or AeroPress — pick your grind at checkout and we grind fresh right before shipping.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'We currently ship across Vietnam with 48-hour delivery, and to a growing list of countries in Southeast Asia. Check your address at checkout to confirm.',
      },
    ],
  },

  cta: {
    heading: 'Ready to taste the difference altitude makes?',
    buttonLabel: 'Shop this week\'s roast →',
    email: 'hello@example.com',
  },

  footer: {
    tagline: 'Small-batch, direct-trade coffee from above the clouds.',
    ribbon: 'EST. 2026',
    columns: [
      {
        heading: 'Shop',
        links: [
          { label: 'Current Lineup', href: '#work' },
          { label: 'Subscriptions', href: '#contact' },
          { label: 'Gift Sets', href: '#personas' },
          { label: 'Wholesale', href: '#personas' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'Our Process', href: '#services' },
          { label: 'Our Story', href: '#about' },
          { label: 'Partner Farms', href: '#about' },
          { label: 'Careers', href: '#' },
        ],
      },
      {
        heading: 'Support',
        links: [
          { label: 'FAQ', href: '#faq' },
          { label: 'Shipping Info', href: '#faq' },
          { label: 'Contact Us', href: '#contact' },
          { label: 'Track Order', href: '#' },
        ],
      },
    ],
    newsletter: {
      heading: 'Get weekly roast drops in your inbox.',
      placeholder: 'Your email',
      buttonLabel: 'Subscribe',
    },
    copyright: '© 2026 Altitude Coffee Co. All rights reserved.',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'TikTok', href: '#' },
    ],
  },
}
