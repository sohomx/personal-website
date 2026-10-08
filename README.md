# sohom — personal website

Static personal site for [sxohom.xyz](https://sxohom.xyz).

## Stack

- Next.js (App Router) with `output: 'export'`
- React 19, Tailwind CSS v4
- Build output: `out/` (ready for Cloudflare Pages)

## Scripts

```bash
npm ci
npm run dev      # local
npm run build    # writes static files to out/
npm run lint
```

## Deploy notes

Build command: `npm run build`  
Output directory: `out`  
Canonical URL: `https://sxohom.xyz` (no `basePath`)

Hosting (Cloudflare Pages → private GitHub repo) is configured separately.
