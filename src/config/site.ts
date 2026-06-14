// OneInfra site config — single source of truth for contact, prices, areas.
// Update `prices.validFrom` and `validUntil` on Monday each week and push.

export const site = {
  name: 'OneInfra',
  domain: 'oneinfra.in',
  url: 'https://oneinfra.in',
  phone: '+91 99943 33918',
  phoneTel: '+919994333918',
  whatsapp: '919994333918',
  whatsappMessage: 'Hi OneInfra, I would like a quote for ',
  email: 'hello@oneinfra.in',
  address: 'Tambaram, Chennai, Tamil Nadu 600045',
  hours: 'Mon–Sat 7:00 AM – 8:00 PM',
  geo: { lat: 12.9229, lng: 80.1275 },
  serviceAreas: [
    'Tambaram', 'Velachery', 'OMR', 'ECR',
    'Ambattur', 'Avadi', 'Anna Nagar',
  ] as const,
  priceDisclaimer:
    'Prices are indicative for Chennai, change weekly, and depend on grade, distance, and tipper size. Call +91 99943 33918 for a firm quote for your area and quantity.',
};

export type ProductKey =
  | 'm_sand_double_washed'
  | 'p_sand'
  | 'crusher_dust'
  | 'aggregate_12mm'
  | 'aggregate_20mm_jelly'
  | 'aggregate_20mm_blue'
  | 'aggregate_25mm'
  | 'aggregate_40mm'
  | 'wmm';

export interface ProductPrice {
  name: string;
  slug: string;
  pricePerTon: number;
  pricePerUnit: number;
  unitSize: string;
  description: string;
  image: string;
}

export const prices = {
  validFrom: '2026-06-15',
  validUntil: '2026-06-22',
  lastUpdatedNote: 'This week: 20mm jelly up 3% due to Ambattur quarry truck strike; M-Sand steady.',
  products: {
    m_sand_double_washed: {
      name: 'M-Sand (Double Washed)', slug: 'm-sand-double-washed',
      pricePerTon: 1450, pricePerUnit: 2200, unitSize: '1 unit ≈ 1.5 ton',
      description: 'Crushed granite fines, double-washed to IS 383 grading. Used for plaster and RCC.',
      image: '/images/product-msand-double-washed.jpg',
    },
    p_sand: {
      name: 'P-Sand (Plastering Sand)', slug: 'p-sand',
      pricePerTon: 1300, pricePerUnit: 2000, unitSize: '1 unit ≈ 1.5 ton',
      description: 'Fine-grade washed plastering sand for smooth wall finishes. IS 1542 graded.',
      image: '/images/product-psand.jpg',
    },
    crusher_dust: {
      name: 'Crusher Dust', slug: 'crusher-dust',
      pricePerTon: 900, pricePerUnit: 1400, unitSize: '1 unit ≈ 1.5 ton',
      description: 'Fine blue-metal dust used for block-work joints, base compaction, and pathways.',
      image: '/images/product-crusher-dust.jpg',
    },
    aggregate_12mm: {
      name: '12mm Chips', slug: '12mm-chips',
      pricePerTon: 1100, pricePerUnit: 1700, unitSize: '1 unit ≈ 1.5 ton',
      description: 'Small-size blue-metal aggregate for thin slabs, pathways, and pre-cast elements.',
      image: '/images/product-12mm-chips.jpg',
    },
    aggregate_20mm_jelly: {
      name: '20mm Jelly', slug: '20mm-jelly',
      pricePerTon: 1150, pricePerUnit: 1750, unitSize: '1 unit ≈ 1.5 ton',
      description: 'The standard coarse aggregate for Chennai RCC slabs, beams, and columns.',
      image: '/images/product-20mm-jelly.jpg',
    },
    aggregate_20mm_blue: {
      name: '20mm Blue Metal', slug: '20mm-blue-metal',
      pricePerTon: 1200, pricePerUnit: 1850, unitSize: '1 unit ≈ 1.5 ton',
      description: 'Washed blue metal, low-fines variant for high-strength concrete and exposed-aggregate finish.',
      image: '/images/product-20mm-blue.jpg',
    },
    aggregate_25mm: {
      name: '25mm Blue Metal', slug: '25mm-blue-metal',
      pricePerTon: 1250, pricePerUnit: 1900, unitSize: '1 unit ≈ 1.5 ton',
      description: 'Medium coarse aggregate for mass-concrete pours, footings, and raft foundations.',
      image: '/images/product-25mm.jpg',
    },
    aggregate_40mm: {
      name: '40mm Blue Metal', slug: '40mm-blue-metal',
      pricePerTon: 1300, pricePerUnit: 2000, unitSize: '1 unit ≈ 1.5 ton',
      description: 'Large coarse aggregate for sub-base, heavy foundations, and industrial slabs.',
      image: '/images/product-40mm-gravel.jpg',
    },
    wmm: {
      name: 'WMM (Wet Mix Macadam)', slug: 'wmm',
      pricePerTon: 1100, pricePerUnit: 1700, unitSize: '1 unit ≈ 1.5 ton',
      description: 'Pre-mixed graded aggregate with controlled moisture for road sub-base and yard compaction.',
      image: '/images/product-wmm.jpg',
    },
  } satisfies Record<ProductKey, ProductPrice>,
};

export const productOrder: ProductKey[] = [
  'm_sand_double_washed', 'p_sand', 'crusher_dust',
  'aggregate_12mm', 'aggregate_20mm_jelly', 'aggregate_20mm_blue',
  'aggregate_25mm', 'aggregate_40mm', 'wmm',
];
