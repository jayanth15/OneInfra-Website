// OneInfra site config — single source of truth for contact, prices, areas.
// Prices are read from environment variables (.env file). Edit .env and rebuild to update.

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
    'Prices are loading-point prices and exclude transport. Transport is quoted on the call based on your delivery area.',
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
  unitToTon: number;
  description: string;
  image: string;
}

function envNum(key: string, fallback: number): number {
  const v = process.env[key];
  return v ? parseInt(v, 10) : fallback;
}
function envStr(key: string, fallback: string): string {
  return process.env[key] || fallback;
}

const P = (k: string, ton: number, unit: number) => ({
  pricePerTon: envNum(`PRICE_${k}_PER_TON`, ton),
  pricePerUnit: envNum(`PRICE_${k}_PER_UNIT`, unit),
});

export const prices = {
  validFrom: envStr('PRICES_VALID_FROM', '2026-06-15'),
  validUntil: envStr('PRICES_VALID_UNTIL', '2026-06-22'),
  lastUpdatedNote: envStr('PRICES_NOTE', 'This week: 20mm jelly up 3% due to Ambattur quarry truck strike; M-Sand steady.'),
  products: {
    m_sand_double_washed: {
      name: 'M-Sand (Double Washed)', slug: 'm-sand-double-washed',
      ...P('M_SAND_DOUBLE_WASHED', 1250, 5625),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: 'Crushed granite fines, double-washed to IS 383 Zone II/III. The default for Chennai RCC and plaster in 2026.',
      image: '/images-opt/product-msand-double-washed.webp',
    },
    p_sand: {
      name: 'P-Sand (Plastering Sand)', slug: 'p-sand',
      ...P('P_SAND', 1400, 6300),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: 'Fine-grade double-washed plastering sand. IS 1542 graded. Silt removed for smooth wall and ceiling finishes.',
      image: '/images-opt/product-psand.webp',
    },
    crusher_dust: {
      name: 'Crusher Dust', slug: 'crusher-dust',
      ...P('CRUSHER_DUST', 950, 4275),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: 'Fine blue-metal dust (< 4.75 mm). Sub-base under floor slabs, backfill, pathway compaction and brick manufacturing.',
      image: '/images-opt/product-crusher-dust.webp',
    },
    aggregate_12mm: {
      name: '12mm Chips', slug: '12mm-chips',
      ...P('AGGREGATE_12MM', 1100, 4950),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: 'Small (10-12 mm) blue-metal chips. Floor screed, thin RCC sections, pathway gravel, plinth protection.',
      image: '/images-opt/product-12mm-chips.webp',
    },
    aggregate_20mm_jelly: {
      name: '20mm Jelly Stones', slug: '20mm-jelly',
      ...P('AGGREGATE_20MM_JELLY', 1150, 5175),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: 'Standard 16-20 mm coarse aggregate for Chennai RCC slabs, beams and columns. The most-used size on residential sites.',
      image: '/images-opt/product-20mm-jelly.webp',
    },
    aggregate_20mm_blue: {
      name: '20mm Blue Metal (Grade A)', slug: '20mm-blue-metal',
      ...P('AGGREGATE_20MM_BLUE', 1200, 5400),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: '16-20 mm clean blue metal, tighter grading and lower dust. Preferred for high-grade M25+ concrete and exposed-aggregate finish.',
      image: '/images-opt/product-20mm-blue.webp',
    },
    aggregate_25mm: {
      name: '25mm Aggregate', slug: '25mm-blue-metal',
      ...P('AGGREGATE_25MM', 1250, 5625),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: '20-25 mm coarse aggregate for mass-concrete pours (footings, rafts, dams), lean-concrete bases, road sub-base.',
      image: '/images-opt/product-25mm.webp',
    },
    aggregate_40mm: {
      name: '40mm Gravel (HBG)', slug: '40mm-blue-metal',
      ...P('AGGREGATE_40MM', 1200, 5400),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: '40-63 mm large aggregate for foundation backfill, retaining-wall drainage, road base, gabion walls.',
      image: '/images-opt/product-40mm-gravel.webp',
    },
    wmm: {
      name: 'WMM (Wet Mix Macadam)', slug: 'wmm',
      ...P('WMM', 1100, 4950),
      unitSize: '1 unit ≈ 4.5 ton', unitToTon: 4.5,
      description: 'Pre-mixed graded aggregate with controlled moisture. MoRTH-spec base layer for bitumen roads, driveways, parking lots and compound roads.',
      image: '/images-opt/product-wmm.webp',
    },
  } satisfies Record<ProductKey, ProductPrice>,
};

export const productOrder: ProductKey[] = [
  'm_sand_double_washed', 'p_sand', 'crusher_dust',
  'aggregate_12mm', 'aggregate_20mm_jelly', 'aggregate_20mm_blue',
  'aggregate_25mm', 'aggregate_40mm', 'wmm',
];
