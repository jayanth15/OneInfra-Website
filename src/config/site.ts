// OneInfra site config — single source of truth for contact, prices, areas.
// Update `prices.validFrom` and `validUntil` on Monday each week and push.
// Prices aligned with the original OneInfra HTML price page (June 2026).

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
      pricePerTon: 1250, pricePerUnit: 1750, unitSize: '1 unit ≈ 1.4 ton',
      description: 'Crushed granite fines, double-washed to IS 383 Zone II/III. The default for Chennai RCC and plaster in 2026.',
      image: '/images-opt/product-msand-double-washed.webp',
    },
    p_sand: {
      name: 'P-Sand (Plastering Sand)', slug: 'p-sand',
      pricePerTon: 1400, pricePerUnit: 2000, unitSize: '1 unit ≈ 1.4 ton',
      description: 'Fine-grade double-washed plastering sand. IS 1542 graded. Silt removed for smooth wall and ceiling finishes.',
      image: '/images-opt/product-psand.webp',
    },
    crusher_dust: {
      name: 'Crusher Dust', slug: 'crusher-dust',
      pricePerTon: 950, pricePerUnit: 1400, unitSize: '1 unit ≈ 1.4 ton',
      description: 'Fine blue-metal dust (< 4.75 mm). Sub-base under floor slabs, backfill, pathway compaction and brick manufacturing.',
      image: '/images-opt/product-crusher-dust.webp',
    },
    aggregate_12mm: {
      name: '12mm Chips', slug: '12mm-chips',
      pricePerTon: 1100, pricePerUnit: 1600, unitSize: '1 unit ≈ 1.4 ton',
      description: 'Small (10-12 mm) blue-metal chips. Floor screed, thin RCC sections, pathway gravel, plinth protection.',
      image: '/images-opt/product-12mm-chips.webp',
    },
    aggregate_20mm_jelly: {
      name: '20mm Jelly Stones', slug: '20mm-jelly',
      pricePerTon: 1150, pricePerUnit: 1650, unitSize: '1 unit ≈ 1.4 ton',
      description: 'Standard 16-20 mm coarse aggregate for Chennai RCC slabs, beams and columns. The most-used size on residential sites.',
      image: '/images-opt/product-20mm-jelly.webp',
    },
    aggregate_20mm_blue: {
      name: '20mm Blue Metal (Grade A)', slug: '20mm-blue-metal',
      pricePerTon: 1200, pricePerUnit: 1700, unitSize: '1 unit ≈ 1.4 ton',
      description: '16-20 mm clean blue metal, tighter grading and lower dust. Preferred for high-grade M25+ concrete and exposed-aggregate finish.',
      image: '/images-opt/product-20mm-blue.webp',
    },
    aggregate_25mm: {
      name: '25mm Aggregate', slug: '25mm-blue-metal',
      pricePerTon: 1250, pricePerUnit: 1800, unitSize: '1 unit ≈ 1.4 ton',
      description: '20-25 mm coarse aggregate for mass-concrete pours (footings, rafts, dams), lean-concrete bases, road sub-base.',
      image: '/images-opt/product-25mm.webp',
    },
    aggregate_40mm: {
      name: '40mm Gravel (HBG)', slug: '40mm-blue-metal',
      pricePerTon: 1200, pricePerUnit: 1700, unitSize: '1 unit ≈ 1.4 ton',
      description: '40-63 mm large aggregate for foundation backfill, retaining-wall drainage, road base, gabion walls.',
      image: '/images-opt/product-40mm-gravel.webp',
    },
    wmm: {
      name: 'WMM (Wet Mix Macadam)', slug: 'wmm',
      pricePerTon: 1100, pricePerUnit: 1700, unitSize: '1 unit ≈ 1.4 ton',
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
