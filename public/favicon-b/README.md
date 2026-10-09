# Favicon option B (leaf)

Muted single-leaf mark on the same paper + ink palette as the live site.

**Live default is option A** (lowercase `s` monogram) in:

- `src/app/favicon.ico` — 16 / 32 / 48
- `src/app/icon.svg`
- `src/app/apple-icon.png` — 180×180

## Swap B in as the site icon

From the repo root:

```bash
cp public/favicon-b/favicon.ico src/app/favicon.ico
cp public/favicon-b/icon.svg src/app/icon.svg
cp public/favicon-b/apple-icon.png src/app/apple-icon.png
```

Then commit. Next.js file conventions pick these up automatically (no `layout.tsx` icon metadata needed).

## Palette

| Token | Hex |
| --- | --- |
| Paper | `#f7f7f8` |
| Ink (A) | `#1a1a1a` |
| Leaf (B) | `#3f4f3a` |
| Soft edge | `#c8c8cc` |

The soft edge keeps the light paper tile readable on light browser chrome; paper fill keeps it readable on dark chrome.
