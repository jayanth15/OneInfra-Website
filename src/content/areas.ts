export interface AreaData {
  key: string;
  name: string;
  intro: string;
  landmarks: string[];
  deliveryTime: string;
}

export const areas: AreaData[] = [
  {
    key: "tambaram",
    name: "Tambaram",
    intro: "Our Tambaram supply yard is the heart of the operation — washed and graded material loaded in under 30 minutes, with tipper on the road before 9 AM.",
    landmarks: ["Tambaram Sanatorium", "Selaiyur", "Camp Road", "Chrompet", "Pallavaram", "Medavakkam", "Vandalur", "Perungalathur"],
    deliveryTime: "30 min – 1 hour",
  },
  {
    key: "velachery",
    name: "Velachery",
    intro: "Daily route from Tambaram into Velachery, Medavakkam, Pallikaranai, and the entire OMR belt. Same-day tipper loading for orders before 4 PM.",
    landmarks: ["Velachery Main Road", "Pallikaranai", "Medavakkam", "Thoraipakkam", "Perungudi", "Sholinganallur", "Karapakkam", "Injambakkam"],
    deliveryTime: "1.5 – 2 hours",
  },
  {
    key: "omr",
    name: "OMR",
    intro: "Old Mahabalipuram Road is a daily route — IT corridor and apartment construction, with high demand for 20mm jelly and double-washed M-Sand.",
    landmarks: ["Sholinganallur", "Perungudi", "Thoraipakkam", "Karapakkam", "Siruseri", "Padur", "Kelambakkam", "Tiruporur"],
    deliveryTime: "2 – 3 hours",
  },
  {
    key: "ecr",
    name: "ECR",
    intro: "East Coast Road villa and farmhouse construction — large tipper loads, 40mm jelly for foundations, and WMM for driveways.",
    landmarks: ["Thiruvanmiyur", "Palavakkam", "Neelankarai", "Injambakkam", "Uthandi", "Kovalam", "Mahabalipuram approach"],
    deliveryTime: "2 – 3 hours",
  },
  {
    key: "ambattur",
    name: "Ambattur",
    intro: "Industrial and residential construction on the western belt. We run tipper loads to Ambattur, Padi, Mogappair, and the entire Ayanambakkam–Avadi corridor.",
    landmarks: ["Ambattur Industrial Estate", "Padi", "Mogappair", "Korattur", "Ayappakkam", "Thirumullaivoyal", "Pattabiram"],
    deliveryTime: "2 – 3 hours",
  },
  {
    key: "avadi",
    name: "Avadi",
    intro: "North-west Chennai demand for M-Sand and 20mm jelly is steady year-round. Daily route covers Avadi, Pattabiram, and Tiruvallur-adjacent areas.",
    landmarks: ["Avadi Camp", "Pattabiram", "Thiruvallur", "Tiruninravur", "Sevvapet", "Nemam", "Kuthambakkam"],
    deliveryTime: "3 – 4 hours",
  },
  {
    key: "anna-nagar",
    name: "Anna Nagar",
    intro: "Central Chennai renovation and rebuilding is a major demand driver. Compact tipper access for narrow streets, fair price for any quantity.",
    landmarks: ["Anna Nagar Tower Park", "Shenoy Nagar", "Kilpauk", "Mogappair East", "Aminjikarai", "Purasawalkam", "Egmore", "Nungambakkam"],
    deliveryTime: "1.5 – 2 hours",
  },
];

export const areaByKey = Object.fromEntries(areas.map((a) => [a.key, a]));
