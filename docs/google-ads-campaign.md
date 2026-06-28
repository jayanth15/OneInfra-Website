# Google Ads Campaign — OneInfra Chennai

> Target: Chennai, Tamil Nadu only | Budget: ₹5,000–₹15,000/month | Goal: Phone calls

---

## Account Setup

### Pre-Launch Checklist
- [ ] Create Google Ads account at ads.google.com
- [ ] Set up **Call conversion tracking**: Tools → Conversions → Call → "Calls from ads using call extensions". Use number `+919994333918`
- [ ] Set up **Website call conversion**: Install the Google tag on the site (add to `BaseLayout.astro`) so visits that lead to calls are tracked
- [ ] Verify account (₹350 one-time charge)
- [ ] Link Google Search Console for search term data
- [ ] Set ad schedule: **Mon–Sat, 7 AM – 8 PM** (matches business hours)
- [ ] Set location targeting: **Chennai + 30 km radius** (exclude outside Tamil Nadu)
- [ ] Set language: **English**

### Landing Pages to Use

| Ad Group | Landing Page | Why |
|----------|-------------|-----|
| Products | `/products` | Catalogue of all 9 grades |
| Suppliers | `/landing` | Full marketing page |
| Pricing | `/price` | Weekly price band |

---

## Campaign Structure

One Search campaign with 3 ad groups (keeps budget focused):

```
OneInfra Chennai — Search [Phone Calls]
├── AG1: Products (high intent)
│   ├── RSA1
│   └── Call extension
├── AG2: Suppliers (purchase intent)
│   ├── RSA2
│   └── Call extension
└── AG3: Pricing (comparison shoppers)
    ├── RSA3
    └── Call extension
```

### Budget Allocation (₹10,000/mo example)

| Phase | Budget | Ad Groups | Bidding |
|-------|--------|-----------|---------|
| Weeks 1–2 (learning) | ₹5,000/mo | AG1 only | Maximize clicks |
| Weeks 3–4 | ₹10,000/mo | AG1 + AG2 | Maximize clicks |
| Month 2+ | ₹10,000–₹15,000/mo | All 3 AGs | Target CPA ₹200–₹500/call |

---

## Keywords

### AG1 — Products (high intent)

| Keyword | Match Type |
|---------|-----------|
| m sand chennai | Phrase |
| m sand price chennai | Phrase |
| buy m sand chennai | Phrase |
| washed m sand chennai | Phrase |
| p sand chennai | Phrase |
| plastering sand chennai | Phrase |
| construction sand chennai | Phrase |
| blue metal 20mm chennai | Phrase |
| blue metal price chennai | Phrase |
| 20mm jelly chennai | Phrase |
| crusher dust chennai | Phrase |
| m sand suppliers tambaram | Phrase |
| construction aggregates chennai | Phrase |
| m sand rate today chennai | Exact |
| m sand delivery chennai | Phrase |
| tipper sand delivery chennai | Phrase |

### AG2 — Suppliers (purchase intent)

| Keyword | Match Type |
|---------|-----------|
| sand supplier chennai | Phrase |
| m sand supplier near me | Phrase |
| construction material supplier chennai | Phrase |
| building material chennai | Phrase |
| sand suppliers tambaram | Phrase |
| best sand supplier chennai | Phrase |
| construction sand delivery chennai | Phrase |
| m sand supplier tambaram | Phrase |
| aggregate suppliers chennai | Phrase |
| building sand delivery chennai | Phrase |
| tipper sand supplier | Phrase |
| sand supplier omr chennai | Phrase |
| construction material near me | Phrase |
| cheap m sand chennai | Phrase |

### AG3 — Pricing (comparison shoppers)

| Keyword | Match Type |
|---------|-----------|
| m sand price per ton chennai | Exact |
| sand price chennai today | Phrase |
| construction material price list chennai | Phrase |
| m sand rate chennai | Phrase |
| blue metal rate chennai | Phrase |
| p sand price chennai | Phrase |
| building material cost chennai | Phrase |
| sand rate per ton chennai | Exact |
| aggregate price chennai | Phrase |
| m sand cost chennai | Phrase |
| construction sand rate chennai | Phrase |
| plaster sand price chennai | Phrase |

---

## Negative Keywords

### Campaign-level (applies to all ad groups)

| Negative Keyword | Reason |
|-----------------|--------|
| river sand | They sell M-Sand, not river sand |
| free | Attracts low-quality traffic |
| cheap | Low-intent, bargain hunters |
| discounted | Mispriced expectations |
| jobs | Job seekers, not buyers |
| vacancy | Not relevant |
| careers | Not relevant |
| recruitment | Not relevant |
| pune | Wrong city |
| mumbai | Wrong city |
| delhi | Wrong city |
| bangalore | Wrong city |
| hyderabad | Wrong city |
| kolkata | Wrong city |
| coimbatore | Wrong city |
| madurai | Wrong city |
| second hand | Not applicable |
| used | Not applicable |
| olx | Marketplace, not supplier |
| rental | Equipment rental, not material |
| hire | Equipment hire, not material |
| export | Not for local supply |
| import | Not for local supply |

### Ad-group level

| Ad Group | Negative Keywords |
|----------|------------------|
| AG1 (Products) | price, rate, cost, quote *(reserve for AG3)* |
| AG2 (Suppliers) | *(none — keep broad to capture all)* |
| AG3 (Pricing) | delivery, order, buy, purchase *(reserve for AG1)* |

---

## Sitelinks (≥4)

| Title (≤25) | Description 1 (≤35) | Description 2 (≤35) | URL |
|-------------|---------------------|---------------------|-----|
| All 9 Products | Browse M-Sand, P-Sand & aggregates | Real photos with IS 383 grading | https://oneinfra.in/products |
| This Week's Price | Current per-ton & per-unit rates | Updated weekly for Chennai | https://oneinfra.in/price |
| Quantity Calculator | Get tonnage for your home | Type area for live estimate | https://oneinfra.in/calculator |
| Contact OneInfra | Call +91 99943 33918 | WhatsApp or visit Tambaram yard | https://oneinfra.in/contact |

## Callouts (≥4, each ≤25 chars)

- IS 383 Graded
- Same-Day Delivery
- Double Washed Sand
- Call for Quote
- Chennai Supply Yard

## Call Extensions

| Setting | Value |
|---------|-------|
| Phone number | +91 99943 33918 |
| Call tracking | Google forwarding number (on) |
| Call reporting | Track calls from ads |
| Ad schedule | Mon–Sat 7 AM – 8 PM |

---

## Responsive Search Ads

### RSA1 — Products (AG1)

- Final URL: https://oneinfra.in/products
- Path1: products Path2: msand

**Headlines (15, each ≤30 chars):**
1. M-Sand in Chennai (16)
2. Buy M-Sand Online (16)
3. Washed M Sand Price (19)
4. P-Sand for Plastering (21)
5. Blue Metal Aggregate (20)
6. Construction Sand India (22)
7. IS 383 Graded Sand (19)
8. Building Materials (18)
9. Aggregates Supplier (19)
10. Tipper Load Delivery (20)
11. Same Day Sand Supply (21)
12. Order Online Chennai (21)
13. M-Sand Double Washed (20)
14. Trusted Sand Dealer (20)
15. Sand for Construction (23)

**Descriptions (4, each ≤90 chars):**
1. IS 383 washed M-Sand, P-Sand & blue metal aggregate. Same-day tipper delivery across Chennai. Call for a quote. (87)
2. Nine grades of construction sand and aggregate. Double washed, graded and ready to load. Call +91 99943 33918. (89)
3. Need M-Sand for your Chennai site? We supply IS 383 graded material with same-day tipper delivery. Call us. (89)
4. Quality construction sand delivered to your site. M-Sand, P-Sand and aggregates from a trusted Chennai supplier. (90)

### RSA2 — Suppliers (AG2)

- Final URL: https://oneinfra.in/landing
- Path1: suppliers Path2: chennai

**Headlines (15, each ≤30 chars):**
1. Sand Supplier Chennai (20)
2. M Sand Supplier Near Me (22)
3. Best Sand Supplier (18)
4. Construction Material Supply (27)
5. Chennai Sand Delivery (21)
6. Local Sand Supplier (19)
7. Tipper Sand Delivery (20)
8. Building Sand Supplier (22)
9. Aggregate Supplier Near Me (25)
10. Reliable Sand Dealer (20)
11. Construction Sand Chennai (25)
12. Sand Supply Tambaram (21)
13. Same Day Sand Delivery (22)
14. M Sand in Tambaram (19)
15. Plaster Sand Supplier (21)

**Descriptions (4, each ≤90 chars):**
1. One call gets you a price, delivery slot and IS 383 graded material. Same-day supply across Chennai. Call now. (87)
2. Trusted by Chennai homeowners, masons and builders. Double washed M-Sand and aggregates. Call for a quote today. (90)
3. No forms, no waiting. Call us, tell us what you need, and we load the tipper. Chennai same-day delivery. (88)
4. We wash, grade and deliver M-Sand, P-Sand and blue metal. Own fleet, fair pricing. Call +91 99943 33918. (86)

### RSA3 — Pricing (AG3)

- Final URL: https://oneinfra.in/price
- Path1: price Path2: m-sand

**Headlines (15, each ≤30 chars):**
1. M Sand Price Today (17)
2. Sand Price per Ton (19)
3. M-Sand Rate Chennai (20)
4. Best Price for Sand (20)
5. Construction Sand Price (23)
6. Blue Metal Rate Today (22)
7. P-Sand Price Chennai (21)
8. Compare Sand Prices (19)
9. This Week's Sand Rate (22)
10. Aggregate Price List (21)
11. Per Ton Sand Price (20)
12. No Hidden Charges (19)
13. Fair Sand Pricing (18)
14. Transparent Sand Rates (22)
15. Get a Sand Quote (17)

**Descriptions (4, each ≤90 chars):**
1. Current M-Sand, P-Sand and aggregate prices in Chennai. Updated weekly. Call to lock today's rate and delivery. (89)
2. Per-ton and per-unit rates for all 9 grades. Prices published weekly. Transport quoted on the call based on your area. (90)
3. See this week's price band for washed M-Sand, P-Sand and blue metal. One call locks the rate for your order. (89)
4. No surprises. The price we quote on the phone is what you pay. Check the published band and call to confirm. (90)

---

## Optimization Guide

### Weekly Review Checklist

- [ ] Spend vs. budget pacing (don't blow budget before month-end)
- [ ] Top 10 search terms — add relevant ones as keywords, irrelevant ones as negatives
- [ ] Call volume vs. cost per call — is CPA within target?
- [ ] CTR below 3%? → Test new headlines
- [ ] Impression share dropping? → Check budget or bid strategy
- [ ] Any new negative keywords needed from search terms report?

### If Cost Per Call is Too High

1. Check that ad schedule is set to Mon–Sat 7AM–8PM only (don't waste budget on non-business hours)
2. Tighten location targeting — exclude areas outside Chennai you don't deliver to
3. Pause low-performing keywords (high cost, no calls)
4. Check search terms — add irrelevant ones as negatives
5. Try Target CPA bidding after 30+ calls of conversion data

### If CTR is Low

- Headlines not matching search intent → refresh with stronger offers
- AG1 should mention product names, AG2 should mention "supplier" or "delivery"
- Use the call extension — ads with phone numbers get higher CTR from mobile users (~70% of traffic)

### Seasonality Notes

- **Peak season**: Mar–Jun (summer construction), Oct–Dec (post-monsoon) — budget up 20%
- **Off-peak**: Jul–Sep (heavy monsoon), Jan–Feb — budget down 20%
- Prices climb 5–10% in peak season — update `.env` to match

---

## Monitoring

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| CTR | >3% | Refresh headlines |
| Cost per call | ₹200–₹500 | Pause expensive keywords |
| Impression share | >70% | Increase budget or bids |
| Call length | >60 sec | Check if calls are qualified |
| Conversion rate | >2% | Review landing page match |

---

## Useful Links

- Google Ads: https://ads.google.com
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev
- Google Rich Results Test: https://search.google.com/test/rich-results
