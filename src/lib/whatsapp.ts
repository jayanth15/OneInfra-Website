import { site } from "~/config/site";

const productLabel: Record<string, string> = {
  m_sand: "M-Sand",
  p_sand: "P-Sand",
  crusher_dust: "Crusher Dust",
  aggregate_12mm: "12mm Chips",
  aggregate_20mm_jelly: "20mm Jelly",
  aggregate_20mm_blue: "20mm Blue Metal",
  aggregate_25mm: "25mm Blue Metal",
  aggregate_40mm: "40mm Blue Metal",
  wmm: "WMM",
};

export function whatsappUrl(productKey?: string, area?: string): string {
  let msg = site.whatsappMessage;
  if (productKey) msg += productLabel[productKey] ?? productKey;
  if (area) msg += `, delivery to ${area}`;
  const text = encodeURIComponent(msg);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
