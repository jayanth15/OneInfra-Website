# Deployment (Tasks 24-27) — Manual Steps

These tasks require accounts / VPS access not available in the dev environment. Run them when ready.

## Task 24: Deploy to Dokploy

In Dokploy UI:
1. New Application → Service → Static Site
2. Name: `oneinfra`
3. Repository: `jayanth15/oneinfra-astro` (already pushed)
4. Branch: `main`
5. Build command: `npm run build`
6. Output directory: `dist`
7. Port: 80
8. Click Deploy
9. Once deployed, paste `dokploy/nginx.conf` into "Advanced → Custom Nginx Configuration"
10. Redeploy

## Task 25: Wire Cloudflare DNS

1. Cloudflare → Add site `oneinfra.in` → Free plan
2. Note the 2 Cloudflare nameservers
3. At your domain registrar, update nameservers to Cloudflare's
4. Wait 5-30 min for propagation
5. In Cloudflare DNS:
   - A `oneinfra.in` → `<VPS IP>` (proxy: OFF / DNS only)
   - A `www.oneinfra.in` → `<VPS IP>` (proxy: OFF)
6. In Dokploy → Domains → add `oneinfra.in` + `www.oneinfra.in` → enable Let's Encrypt
7. SSL/TLS mode in Cloudflare: "Full (Strict)"

## Task 26: Submit to Google Search Console + Bing

- https://search.google.com/search-console/ → Add property `https://oneinfra.in` (URL prefix)
- Verify via DNS TXT (add to Cloudflare)
- Sitemaps → submit `https://oneinfra.in/sitemap-index.xml`
- Request indexing for `/`, `/products`, `/price`, `/calculator`
- https://www.bing.com/webmasters → Add site, verify, submit sitemap

## Task 27: UptimeRobot

- https://uptimerobot.com/ → free signup
- Add monitor: HTTPS `https://oneinfra.in` (5-min interval)
- Add monitor: HTTPS `https://oneinfra.in/price` (5-min interval)
- Add monitor: HTTPS `https://oneinfra.in/landing` (5-min interval)
- Alert contacts: email + phone
