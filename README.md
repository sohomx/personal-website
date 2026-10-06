# sohom

Personal site for [Sohom Pal](https://github.com/sohomx) — AI engineer building the proof layer for agents.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Notes

- Site copy lives in `src/data/content.ts` (five project writeups + home teasers)
- Routes: `/`, `/projects`, `/projects/[slug]`
- SEO: `sitemap.ts`, `robots.ts`, Person/CreativeWork JSON-LD, Open Graph image
- Set `site.email` in `content.ts` when a public address is ready (Contact falls back to X/GitHub)
- Domain metadata points at `https://sohom.xyz`
