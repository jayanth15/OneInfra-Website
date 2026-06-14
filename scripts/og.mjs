import sharp from "sharp";
const src = await sharp("public/images/hero-chennai-site.jpg").resize(1200, 630, { fit: "cover" }).toBuffer();
const svg = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="rgba(0,0,0,0.45)"/>
  <text x="60" y="280" font-family="Inter,Arial,sans-serif" font-size="80" font-weight="700" fill="white">OneInfra</text>
  <text x="60" y="360" font-family="Inter,Arial,sans-serif" font-size="36" font-weight="500" fill="#2f6feb">M-Sand · P-Sand · Aggregate</text>
  <text x="60" y="420" font-family="Inter,Arial,sans-serif" font-size="28" font-weight="400" fill="#ddd">Chennai · Same-day delivery · Call +91 99943 33918</text>
</svg>`);
await sharp(src).composite([{ input: svg, top: 0, left: 0 }]).jpeg({ quality: 85 }).toFile("public/og-image.jpg");
console.log("og ok");
