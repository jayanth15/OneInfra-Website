export interface AreaFaq {
  q: string;
  a: string;
}

export interface AreaData {
  key: string;
  name: string;
  intro: string;
  landmarks: string[];
  deliveryTime: string;
  truckAccess?: string;
  popularMaterials?: string[];
  faqs?: AreaFaq[];
}

export const areas: AreaData[] = [
  {
    key: "tambaram",
    name: "Tambaram",
    intro: "Our Tambaram supply yard is the heart of our operations — washed and graded material loaded in under 30 minutes, with tippers on the road before 9 AM.",
    landmarks: ["Tambaram Sanatorium", "Selaiyur", "Camp Road", "Chrompet", "Pallavaram", "Medavakkam", "Vandalur", "Perungalathur"],
    deliveryTime: "30 min – 1 hour",
    truckAccess: "Immediate dispatch from yard. All tipper sizes available (6-wheel 300 CFT, 10-wheel 600 CFT, and multi-axle bulk loads).",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "20mm Jelly Stones", "Crusher Dust"],
    faqs: [
      {
        q: "Where is your Tambaram supply yard located?",
        a: "Our loading point and washing facility is located in Tambaram, Chennai 600045. Customers and civil engineers are welcome to inspect material piles and test silt content on site."
      },
      {
        q: "What is the minimum order quantity for Tambaram delivery?",
        a: "Minimum order is 1 tipper lorry (300 CFT / ~9-10 tons). We also fulfill 600 CFT 10-wheel loads and multi-tipper bulk supply for continuous casting."
      },
      {
        q: "Do you supply IS 383 certified M-Sand in Tambaram?",
        a: "Yes, all M-Sand is double-washed to IS 383 Zone II grading for structural concrete and RCC columns, beams, and slabs."
      }
    ]
  },
  {
    key: "velachery",
    name: "Velachery",
    intro: "Daily route from Tambaram into Velachery, Medavakkam, Pallikaranai, and the entire OMR belt. Same-day tipper loading for orders placed before 4 PM.",
    landmarks: ["Velachery Main Road", "Pallikaranai", "Medavakkam", "Thoraipakkam", "Perungudi", "Sholinganallur", "Karapakkam", "Injambakkam"],
    deliveryTime: "1.5 – 2 hours",
    truckAccess: "6-wheeler tippers easily enter residential lanes off Velachery Main Road and bypass narrow junctions.",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "20mm Blue Metal", "12mm Chips"],
    faqs: [
      {
        q: "How fast can you deliver M-Sand to Velachery?",
        a: "Delivery to Velachery typically takes 1.5 to 2 hours from our Tambaram facility. Orders booked by 4 PM qualify for same-day delivery."
      },
      {
        q: "Can tipper trucks enter narrow residential streets in Velachery?",
        a: "Yes, we operate compact 6-wheeler tipper lorries (300 CFT / ~9 ton) specifically sized for residential colonies with overhead cables and 20-foot roads."
      }
    ]
  },
  {
    key: "porur",
    name: "Porur",
    intro: "Porur and the Mount-Poonamallee corridor is one of Chennai's most active residential building hubs. We provide dependable daily delivery of double-washed M-Sand, 20mm blue metal, and P-Sand.",
    landmarks: ["Mount-Poonamallee Road", "Ramachandra Hospital", "Porur Roundtana", "Iyyappanthangal", "Mugalivakkam", "Kundrathur Road", "Kattupakkam"],
    deliveryTime: "1 – 1.5 hours",
    truckAccess: "Both 6-wheel (300 CFT) and 10-wheel (600 CFT) tippers available. 6-wheelers ideal for residential colonies off Mount-Poonamallee road.",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "20mm Jelly Stones", "25mm Aggregate"],
    faqs: [
      {
        q: "What are the delivery charges for M-Sand to Porur?",
        a: "Transport charges are quoted transparently based on your exact layout in Porur or Mugalivakkam. Call +91 99943 33918 for an instant all-inclusive quote."
      },
      {
        q: "Do you supply computerized weighbridge slips in Porur?",
        a: "Yes, every single load is weighed on our digital weighbridge before departure and comes with a signed weighbridge slip."
      }
    ]
  },
  {
    key: "medavakkam",
    name: "Medavakkam",
    intro: "Connecting Tambaram, Velachery, and OMR, Medavakkam is a prime independent villa and apartment construction corridor. Quick dispatch directly from our Tambaram yard in under 45 minutes.",
    landmarks: ["Medavakkam Junction", "Perumbakkam Road", "Jalladianpet", "Sithalapakkam", "Kovilambakkam", "Nanmangalam", "Mambakkam Main Road"],
    deliveryTime: "30 – 45 min",
    truckAccess: "Direct route from Tambaram yard without highway toll delays. Fast turnarounds for both 6-wheel and 10-wheel tippers.",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "20mm Jelly Stones", "Crusher Dust"],
    faqs: [
      {
        q: "How fast is delivery to Medavakkam?",
        a: "Because our supply yard is in Tambaram, Medavakkam orders can often be loaded and delivered within 30 to 45 minutes."
      },
      {
        q: "Which sand is best for plastering in Medavakkam?",
        a: "We recommend our IS 1542 graded, double-washed P-Sand (Plastering Sand) for internal and external wall finishing with zero crack risk."
      }
    ]
  },
  {
    key: "guduvanchery",
    name: "Guduvanchery",
    intro: "Rapidly expanding township and residential layout belt on GST Road. Located right next to our primary supply corridor for fast, low-cost delivery of aggregates and sand.",
    landmarks: ["GST Road", "Nellikuppam Road", "Urapakkam", "Thiruporur Road", "Maraimalai Nagar", "Kayarambedu", "Potheri"],
    deliveryTime: "30 – 45 min",
    truckAccess: "Wide arterial access allows heavy 10-wheel and multi-axle tippers for large site pours, foundation gravel, and road bases.",
    popularMaterials: ["M-Sand (Double Washed)", "20mm Jelly Stones", "40mm Gravel (HBG)", "WMM"],
    faqs: [
      {
        q: "Can you supply bulk WMM for road construction in Guduvanchery?",
        a: "Yes, we supply pre-mixed Wet Mix Macadam (WMM) conforming to MoRTH specifications for compound roads and layout paving."
      },
      {
        q: "Can I get early morning tipper delivery in Guduvanchery?",
        a: "Yes, our first tippers hit the road by 7:00 AM so your concreting or masonry crew can start work on schedule."
      }
    ]
  },
  {
    key: "omr",
    name: "OMR",
    intro: "Old Mahabalipuram Road is a daily route — IT corridor and apartment construction, with high demand for 20mm jelly, double-washed M-Sand, and Grade A blue metal.",
    landmarks: ["Sholinganallur", "Perungudi", "Thoraipakkam", "Karapakkam", "Siruseri", "Padur", "Kelambakkam", "Tiruporur"],
    deliveryTime: "2 – 3 hours",
    truckAccess: "Daily fleet runs along the expressway. Multi-axle trucks for high-rise slabs, 6-wheelers for interior IT layouts.",
    popularMaterials: ["20mm Blue Metal (Grade A)", "M-Sand (Double Washed)", "25mm Aggregate", "P-Sand"],
    faqs: [
      {
        q: "Do you supply Grade A Blue Metal along OMR?",
        a: "Yes, our Grade A 20mm Blue Metal is washed with minimal fines, ideal for high-strength M25 to M40 commercial and residential concrete."
      },
      {
        q: "Do you supply test certificates for OMR projects?",
        a: "Yes, batch sieve analysis and IS 383 test certificates are provided upon request for civil engineering consultants and architects."
      }
    ]
  },
  {
    key: "sholinganallur",
    name: "Sholinganallur",
    intro: "The hub of the Chennai IT expressway connecting OMR and ECR. Continuous supply for multi-story residential towers, commercial parks, and individual luxury villas.",
    landmarks: ["Sholinganallur Junction", "OMR Toll Plaza", "ELCOT SEZ", "Dollar Bus Stop", "Classic Farms Road", "Model School Road"],
    deliveryTime: "1.5 – 2 hours",
    truckAccess: "Excellent connectivity via Medavakkam-Sholinganallur road. 6-wheelers and 10-wheelers dispatched throughout the day.",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "20mm Jelly Stones", "12mm Chips"],
    faqs: [
      {
        q: "How do you quote delivery to Sholinganallur?",
        a: "We quote a combined per-ton or per-unit price plus transport before loading. No hidden toll fees or driver unbalance charges."
      },
      {
        q: "Can I book a weekend delivery in Sholinganallur?",
        a: "We operate Monday through Saturday 7:00 AM to 8:00 PM, and Sunday by prior appointment for slab casting schedules."
      }
    ]
  },
  {
    key: "ecr",
    name: "ECR",
    intro: "East Coast Road villa and farmhouse construction — large tipper loads, 40mm jelly for foundations, and WMM for driveways and landscaping.",
    landmarks: ["Thiruvanmiyur", "Palavakkam", "Neelankarai", "Injambakkam", "Uthandi", "Kovalam", "Mahabalipuram approach"],
    deliveryTime: "2 – 3 hours",
    truckAccess: "6-wheeler tippers access beachside roads and private villa lanes without damaging paved driveways.",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "40mm Gravel (HBG)", "WMM"],
    faqs: [
      {
        q: "Why is M-Sand preferred over beach sand in ECR?",
        a: "Beach sand contains high chloride/salt which corrodes steel reinforcement and causes spalling. Our double-washed granite M-Sand is 100% salt-free and IS 383 certified."
      },
      {
        q: "Can you supply gravel for foundation backfilling on ECR?",
        a: "Yes, our 40mm HBG gravel is specifically graded for foundation drainage and retaining wall backfill along coastal soil belts."
      }
    ]
  },
  {
    key: "ambattur",
    name: "Ambattur",
    intro: "Industrial and residential construction on the western belt. We run tipper loads to Ambattur, Padi, Mogappair, and the entire Ayanambakkam–Avadi corridor.",
    landmarks: ["Ambattur Industrial Estate", "Padi", "Mogappair", "Korattur", "Ayappakkam", "Thirumullaivoyal", "Pattabiram"],
    deliveryTime: "2 – 3 hours",
    truckAccess: "Dedicated routes via Chennai bypass. Heavy commercial access suited for industrial floor slabs and warehouse sub-bases.",
    popularMaterials: ["Crusher Dust", "WMM", "M-Sand (Double Washed)", "20mm Jelly Stones"],
    faqs: [
      {
        q: "Do you supply crusher dust in bulk to Ambattur Industrial Estate?",
        a: "Yes, crusher dust for industrial floor sub-bases, paver blocks, and warehouse backfilling is supplied in 10-wheel and multi-axle tippers."
      },
      {
        q: "What is the lead time for Ambattur delivery?",
        a: "Typical delivery time is 2 to 3 hours. For morning slab pours, order the previous evening to secure the first dispatch slot."
      }
    ]
  },
  {
    key: "avadi",
    name: "Avadi",
    intro: "North-west Chennai demand for M-Sand and 20mm jelly is steady year-round. Daily route covers Avadi, Pattabiram, and Tiruvallur-adjacent areas.",
    landmarks: ["Avadi Camp", "Pattabiram", "Thiruvallur", "Tiruninravur", "Sevvapet", "Nemam", "Kuthambakkam"],
    deliveryTime: "3 – 4 hours",
    truckAccess: "Direct access along Poonamallee-Avadi road and outer ring road. 6-wheelers and 10-wheelers available.",
    popularMaterials: ["M-Sand (Double Washed)", "20mm Jelly Stones", "P-Sand", "Crusher Dust"],
    faqs: [
      {
        q: "Do you deliver to Pattabiram and Thiruninravur near Avadi?",
        a: "Yes, our daily Avadi run extends to Pattabiram, Tiruninravur, and surrounding residential layouts."
      }
    ]
  },
  {
    key: "anna-nagar",
    name: "Anna Nagar",
    intro: "Central Chennai renovation and rebuilding is a major demand driver. Compact tipper access for narrow streets, fair price for any quantity.",
    landmarks: ["Anna Nagar Tower Park", "Shenoy Nagar", "Kilpauk", "Mogappair East", "Aminjikarai", "Purasawalkam", "Egmore", "Nungambakkam"],
    deliveryTime: "1.5 – 2 hours",
    truckAccess: "Compact 6-wheeler tippers designed to navigate central Chennai residential avenues and avoid peak-hour restrictions.",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "12mm Chips", "20mm Blue Metal"],
    faqs: [
      {
        q: "How do you deliver in crowded areas of Anna Nagar?",
        a: "We schedule deliveries during non-peak traffic windows (early morning or early afternoon) using nimble 6-wheeler lorries."
      }
    ]
  },
  {
    key: "poonamallee",
    name: "Poonamallee",
    intro: "Arterial West Chennai hub for commercial warehouses, educational institutions, and residential plots. Daily supply of high-grade aggregates and washed M-Sand.",
    landmarks: ["Poonamallee Bypass", "Bangalore Highway", "Nazarathpet", "Kumananchavadi", "Mangadu Road", "Senneerkuppam", "Karayanchavadi"],
    deliveryTime: "1.5 – 2 hours",
    truckAccess: "Broad bypass connectivity allows rapid transit for both 10-wheelers (600 CFT) and compact 6-wheelers (300 CFT).",
    popularMaterials: ["M-Sand (Double Washed)", "20mm Jelly Stones", "WMM", "40mm Gravel (HBG)"],
    faqs: [
      {
        q: "Can you supply M-Sand to Mangadu and Kumananchavadi?",
        a: "Yes, our Poonamallee route covers Mangadu, Kumananchavadi, and Karayanchavadi with same-day delivery."
      }
    ]
  },
  {
    key: "madipakkam",
    name: "Madipakkam",
    intro: "High-density residential redevelopment and multi-story home building zone between Velachery and Keelkattalai. We deploy maneuverable 6-wheelers suited for interior lanes.",
    landmarks: ["Madipakkam Koot Road", "Keelkattalai", "Puzhuthivakkam", "Moovarasampettai", "Kuberan Nagar", "Balaiah Garden", "Karthikeyapuram"],
    deliveryTime: "1 – 1.5 hours",
    truckAccess: "6-wheeler tipper lorries (300 CFT) recommended for interior streets and tight plot boundaries.",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "20mm Jelly Stones", "12mm Chips"],
    faqs: [
      {
        q: "Can tippers enter interior streets around Madipakkam Koot Road?",
        a: "Yes, our drivers are experienced with Madipakkam lanes. We use 6-wheeler tippers that fit comfortably within 20-foot residential roads."
      }
    ]
  },
  {
    key: "perambur",
    name: "Perambur",
    intro: "Central North Chennai residential redevelopment zone. We supply double-washed M-Sand and plaster sand with scheduled morning slots before arterial traffic peaks.",
    landmarks: ["Perambur Railway Station", "Paper Mills Road", "Kolathur", "Vyasarpadi", "Sembium", "Agaram", "GKM Colony"],
    deliveryTime: "2 – 2.5 hours",
    truckAccess: "Early morning scheduled delivery (6:00 AM – 8:30 AM) recommended for smooth access through Paper Mills Road and Kolathur.",
    popularMaterials: ["M-Sand (Double Washed)", "P-Sand", "20mm Blue Metal", "12mm Chips"],
    faqs: [
      {
        q: "Do you supply Kolathur and Vyasarpadi from the same route?",
        a: "Yes, the North Chennai dispatch covers Perambur, Kolathur, Sembium, and Vyasarpadi on the same daily cycle."
      }
    ]
  },
];

export const areaByKey = Object.fromEntries(areas.map((a) => [a.key, a]));
