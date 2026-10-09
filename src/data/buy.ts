export type BuyItem = {
  slug: string;
  name: string;
  price: string | null;
  reason: string;
  href: string;
  image: string;
  image2x: string;
  alt: string;
};

export const buyIntro = {
  title: "things you could buy",
  lead: "stuff i actually use in bangalore. no affiliate links. prices in usd, approx.",
} as const;

/** 15 items in research order. MacBook Air swapped for 14-inch MacBook Pro. Fitbit Air, not Inspire 3. */
export const buyItems: BuyItem[] = [
  {
    slug: "behovd-flask",
    name: "IKEA BEHÖVD vacuum flask",
    price: "$7",
    reason:
      "keeps chai hot through a long Cursor session. looks nicer than it has any right to.",
    href: "https://www.ikea.com/us/en/p/behoevd-vacuum-flask-light-green-beige-70353890/",
    image: "/buy/behovd-flask.webp",
    image2x: "/buy/behovd-flask@2x.webp",
    alt: "IKEA BEHÖVD light green and beige vacuum flask",
  },
  {
    slug: "laptop-stand",
    name: "amazon basics foldable laptop stand",
    price: "$3",
    reason:
      "raises the screen to eye level for a few dollars. neck pain is not a personality trait.",
    href: "https://www.amazon.in/dp/B0BSXDGL49",
    image: "/buy/laptop-stand.webp",
    image2x: "/buy/laptop-stand@2x.webp",
    alt: "Amazon Basics foldable laptop stand",
  },
  {
    slug: "blackout-curtains",
    name: "Solimo blackout curtains",
    price: "$6",
    reason:
      "bangalore streetlights are not a sleep schedule. these make naps actually work.",
    href: "https://www.amazon.in/Amazon-Brand-Polyester-Blackout-Curtains/dp/B0C656ZR1P",
    image: "/buy/blackout-curtains.webp",
    image2x: "/buy/blackout-curtains@2x.webp",
    alt: "Solimo blackout curtain set of two panels",
  },
  {
    slug: "router-ups",
    name: "amazon basics mini UPS for wifi router",
    price: "$9",
    reason:
      "when BESCOM blinks, the call stays up. plug it between the wall and the router.",
    href: "https://www.amazon.in/Devices-Supports-Routers-Discharge-Protection/dp/B0CTXCX22D",
    image: "/buy/router-ups.webp",
    image2x: "/buy/router-ups@2x.webp",
    alt: "Amazon Basics black mini UPS for a 12V Wi-Fi router",
  },
  {
    slug: "loop-quiet-2",
    name: "Loop Quiet 2 earplugs",
    price: "$25",
    reason:
      "dulls traffic and neighbors without ANC batteries. not silence. quiet enough.",
    href: "https://us.loopearplugs.com/products/quiet",
    image: "/buy/loop-quiet-2.webp",
    image2x: "/buy/loop-quiet-2@2x.webp",
    alt: "Loop Quiet 2 white silicone earplugs in case",
  },
  {
    slug: "gym-rings",
    name: "Decathlon wooden cross-training rings",
    price: "$21",
    reason:
      "a full gym that hangs from a door frame. rings beat memberships i never use.",
    href: "https://www.decathlon.in/p/8751180/cross-training-rings-adjustable-with-ergonomic-grip-wooden-ring-black",
    image: "/buy/gym-rings.webp",
    image2x: "/buy/gym-rings@2x.webp",
    alt: "Decathlon wooden gymnastic rings with black straps",
  },
  {
    slug: "ddia-book",
    name: "Designing Data-Intensive Applications, 2nd ed",
    price: "$57",
    reason:
      "the one systems book i keep lending and buying again. tradeoffs, not buzzwords.",
    href: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1098119061",
    image: "/buy/ddia-book.webp",
    image2x: "/buy/ddia-book@2x.webp",
    alt: "Cover of Designing Data-Intensive Applications second edition",
  },
  {
    slug: "krux-lamp",
    name: "IKEA KRUX LED work lamp",
    price: "$26",
    reason:
      "a desk lamp shaped like a dog. warm light, and strangers always ask about it.",
    href: "https://www.ikea.com/in/en/p/krux-led-work-lamp-white-90325472/",
    image: "/buy/krux-lamp.webp",
    image2x: "/buy/krux-lamp@2x.webp",
    alt: "IKEA KRUX white dog-shaped LED desk lamp",
  },
  {
    slug: "spigen-charger",
    name: "Spigen 70W GaN dual USB-C charger",
    price: "$19",
    reason:
      "one brick for the mac and the phone. leave the stock chargers in the drawer.",
    href: "https://www.amazon.com/Spigen-ArcStation-Pro-GaN-Charger/dp/B08PS5B2H8",
    image: "/buy/spigen-charger.webp",
    image2x: "/buy/spigen-charger@2x.webp",
    alt: "Spigen ArcStation Pro 70W dual USB-C GaN wall charger",
  },
  {
    slug: "oracura-flosser",
    name: "ORACURA OC150 water flosser",
    price: "$25",
    reason:
      "flossing i will actually do. dentists keep recommending this brand for a reason.",
    href: "https://www.amazon.in/ORACURA-Smart-Water-Flosser-OC001/dp/B013GU4EHU",
    image: "/buy/oracura-flosser.webp",
    image2x: "/buy/oracura-flosser@2x.webp",
    alt: "ORACURA OC150 portable water flosser",
  },
  {
    slug: "raycast",
    name: "Raycast",
    price: "free",
    reason:
      "spotlight, but it ships macros and window stuff. free tier is enough to start.",
    href: "https://www.raycast.com/",
    image: "/buy/raycast.webp",
    image2x: "/buy/raycast@2x.webp",
    alt: "Raycast app icon",
  },
  {
    slug: "cursor",
    name: "Cursor Pro",
    price: "$20/mo",
    reason: "how i ship. the editor that stopped feeling like an editor.",
    href: "https://cursor.com/pricing",
    image: "/buy/cursor.webp",
    image2x: "/buy/cursor@2x.webp",
    alt: "Cursor editor app icon",
  },
  {
    slug: "fitbit-air",
    name: "Fitbit Air",
    price: "$100",
    reason:
      "sleep and steps without a watch the size of a phone. i already wear one.",
    href: "https://store.google.com/product/google_fitbit_air?hl=en-US",
    image: "/buy/fitbit-air.webp",
    image2x: "/buy/fitbit-air@2x.webp",
    alt: "Google Fitbit Air fitness tracker band",
  },
  {
    slug: "kindle-paperwhite",
    name: "Kindle Paperwhite 16 GB",
    price: "$200",
    reason:
      "no tabs, no replies. just the book. weeks of battery if you leave wifi off.",
    href: "https://www.amazon.com/All-new-Amazon-Kindle-Paperwhite-glare-free/dp/B0CFPJYX7P",
    image: "/buy/kindle-paperwhite.webp",
    image2x: "/buy/kindle-paperwhite@2x.webp",
    alt: "Amazon Kindle Paperwhite e-reader",
  },
  {
    slug: "macbook-pro",
    name: "14-inch MacBook Pro",
    price: "from $1,999",
    reason:
      "the fans stay quiet and the battery outlasts the meeting.",
    href: "https://www.apple.com/macbook-pro/",
    image: "/buy/macbook-pro.webp",
    image2x: "/buy/macbook-pro@2x.webp",
    alt: "14-inch MacBook Pro laptop",
  },
];

export const buyBackups = [
  { item: "usb-c chargers and cables", shelf: "forever" },
  {
    item: "a charged 20,000 mAh power bank before monsoon week",
    shelf: "charge weekly",
  },
  {
    item: "distilled water for the RO / inverter battery if you have one",
    shelf: "buy as needed",
  },
  { item: "soft foam earplugs, one unopened pack", shelf: "2-3 years" },
  { item: "blackout curtain clips / spare curtain rings", shelf: "forever" },
  { item: "toothbrush heads or a spare brush", shelf: "forever" },
  {
    item: "a second pair of cheap spectacles if you wear them",
    shelf: "forever",
  },
  { item: "umbrellas. bangalore rain laughs at one", shelf: "1-2 seasons each" },
  {
    item: "a secondary UPI / bank account with a small float",
    shelf: "forever",
  },
  {
    item: "offline copies of aadhaar, pan, and passport scans on an encrypted drive",
    shelf: "forever",
  },
] as const;

export function buildBuyMarkdown(siteUrl: string): string {
  const lines = buyItems
    .map((item) => {
      const price = item.price ? ` · ${item.price}` : "";
      return `- [${item.name}](${item.href})${price}: ${item.reason}`;
    })
    .join("\n");

  const backups = buyBackups
    .map((b) => `- ${b.item} (${b.shelf})`)
    .join("\n");

  return `# ${buyIntro.title}

> ${buyIntro.lead}

Author: [Sohom Pal](${siteUrl}/)

## Items

${lines}

## Keep a couple backups

It also does not hurt to keep at least a couple backups of:

${backups}

[html page](${siteUrl}/buy/) · [home](${siteUrl}/) · [llms.txt](${siteUrl}/llms.txt)
`;
}
