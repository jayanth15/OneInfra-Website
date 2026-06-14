import { site, prices, productOrder } from "~/config/site";

const businessAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address,
  addressLocality: "Chennai",
  addressRegion: "Tamil Nadu",
  postalCode: "600045",
  addressCountry: "IN",
};

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    address: businessAddress,
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: "Mo-Sa 07:00-20:00",
    areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a + ", Chennai" })),
    priceRange: "₹₹",
    image: `${site.url}/og-image.jpg`,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function productListLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: productOrder.map((key, idx) => {
      const p = prices.products[key];
      return {
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Product",
          name: p.name,
          image: `${site.url}${p.image}`,
          description: p.description,
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: p.pricePerTon,
            priceValidUntil: prices.validUntil,
            availability: "https://schema.org/InStock",
            seller: { "@id": `${site.url}/#business` },
          },
        },
      };
    }),
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqLd(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
}
