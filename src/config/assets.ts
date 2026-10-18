/**
 * Central asset + content configuration.
 * Every image URL on the site lives here so it can be swapped in one place.
 * Fashion imagery: genuine Mayank Chawla Menswear product photography (Pernia's Pop-Up Shop listing).
 */
const P = (sku: string, n: number) =>
  `https://img.perniaspopupshop.com/catalog/product/m/y/MYCW${sku}_${n}.jpg`;

export type Category = "Tuxedos" | "Bandhgala" | "Indowestern";
export type Product = {
  slug: string;
  sku: string;
  name: string;
  category: Category;
  colour: { name: string; swatch: string };
  fabric: string;
  craft: string;
  story: string;
  images: string[];
  /** CSS object-position for the primary crop */
  focus?: string;
  source: string;
};

const src = (slug: string) => `https://www.perniaspopupshop.com/mayank-chawla-${slug}.html`;

export const products: Product[] = [
  {
    slug: "wine-velvet-bandhgala",
    sku: "032501",
    name: "The Wine Stallion Bandhgala",
    category: "Bandhgala",
    colour: { name: "Wine", swatch: "oklch(0.33 0.11 15)" },
    fabric: "Italian fabric",
    craft: "Hand embroidered stallion motif across the chest",
    story:
      "Our horse, rendered in thread. A wine bandhgala with a stand collar and a stallion crest that announces the man before he speaks.",
    images: [P("032501", 1), P("032501", 2), P("032501", 3), P("032501", 4)],
    source: src("wine-italian-fabric-embroidered-bandhgala-set-mycw032501"),
  },
  {
    slug: "black-velvet-tuxedo-noir",
    sku: "032601",
    name: "Noir Velvet Tuxedo",
    category: "Tuxedos",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Micro velvet",
    craft: "Silver thread embroidery tracing lapel, sleeve and back",
    story:
      "Velvet that drinks the light, silver that returns it. Embroidery flows over the shoulder and down the back like a slow river.",
    images: [P("032601", 1), P("032601", 2), P("032601", 3), P("032601", 4), P("032601", 5)],
    source: src("black-micro-velvet-embroidered-tuxedo-set-mycw032601"),
  },
  {
    slug: "black-cutdana-tuxedo",
    sku: "032511",
    name: "Cutdana Midnight Tuxedo",
    category: "Tuxedos",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Italian fabric",
    craft: "Cutdana hand embroidery",
    story: "Cutdana placed bead by bead until the jacket catches every chandelier in the room.",
    images: [P("032511", 1), P("032511", 2), P("032511", 3), P("032511", 4), P("032511", 5)],
    source: src("black-italian-fabric-cutdana-hand-embroidered-tuxedo-set-mycw032511"),
  },
  {
    slug: "black-indowestern-crest",
    sku: "032505",
    name: "Crest Indowestern",
    category: "Indowestern",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Italian fabric",
    craft: "Tonal embroidery on a long line silhouette",
    story: "Long, lean and unhurried. A silhouette built for the moment the baraat stops and every eye turns.",
    images: [P("032505", 1), P("032505", 2), P("032505", 3), P("032505", 4), P("032505", 5)],
    source: src("black-italian-fabric-embroidered-indowestern-set-mycw032505"),
  },
  {
    slug: "navy-indowestern",
    sku: "032502",
    name: "Admiral Navy Indowestern",
    category: "Indowestern",
    colour: { name: "Navy", swatch: "oklch(0.27 0.06 260)" },
    fabric: "Italian fabric",
    craft: "Embroidered placket and collar",
    story: "Navy deep enough to read as night. Cut close, finished with embroidery that rewards a second look.",
    images: [P("032502", 1), P("032502", 2), P("032502", 3), P("032502", 4)],
    source: src("navy-blue-italian-fabric-embroidered-indowestern-set-mycw032502"),
  },
  {
    slug: "black-velvet-hand-embroidered",
    sku: "032513",
    name: "Velvet Sovereign Tuxedo",
    category: "Tuxedos",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Micro velvet",
    craft: "Hand embroidery",
    story: "For the reception, the after party and the photograph that hangs in the hallway for decades.",
    images: [P("032513", 1), P("032513", 2), P("032513", 3), P("032513", 4), P("032513", 5)],
    source: src("black-micro-velvet-hand-embroidered-tuxedo-set-mycw032513"),
  },
  {
    slug: "white-tuxedo",
    sku: "032508",
    name: "Ivory Command Tuxedo",
    category: "Tuxedos",
    colour: { name: "White", swatch: "oklch(0.96 0.01 85)" },
    fabric: "Italian fabric",
    craft: "Embroidered detailing",
    story: "White worn with intent. A tuxedo for the man confident enough to be the brightest thing in the frame.",
    images: [P("032508", 1), P("032508", 2), P("032508", 3)],
    source: src("white-italian-fabric-embroidered-tuxedo-set-mycw032508"),
  },
  {
    slug: "black-embroidered-tuxedo",
    sku: "032507",
    name: "Obsidian Tuxedo",
    category: "Tuxedos",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Italian fabric",
    craft: "Embroidered detailing",
    story: "Sharp shoulders, quiet embroidery, a line that holds from dusk until the last song.",
    images: [P("032507", 1), P("032507", 2), P("032507", 3), P("032507", 4)],
    source: src("black-italian-fabric-embroidered-tuxedo-set-mycw032507"),
  },
  {
    slug: "black-cutdana-tuxedo-ii",
    sku: "032506",
    name: "Constellation Tuxedo",
    category: "Tuxedos",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Italian fabric",
    craft: "Cutdana hand embroidery",
    story: "A night sky, stitched. Hand placed cutdana scattered with the discipline of a jeweller.",
    images: [P("032506", 1), P("032506", 2), P("032506", 3), P("032506", 4), P("032506", 5)],
    source: src("black-italian-fabric-cutdana-hand-embroidered-tuxedo-set-mycw032506"),
  },
  {
    slug: "black-velvet-tuxedo-ii",
    sku: "032510",
    name: "Velvet Regent Tuxedo",
    category: "Tuxedos",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Micro velvet",
    craft: "Hand embroidery",
    story: "Rich velvet, sculpted lapels and embroidery that moves when you do.",
    images: [P("032510", 1), P("032510", 2), P("032510", 3), P("032510", 4)],
    source: src("black-micro-velvet-hand-embroidered-tuxedo-set-mycw032510"),
  },
  {
    slug: "black-tuxedo-ii",
    sku: "032509",
    name: "Onyx Tuxedo",
    category: "Tuxedos",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Italian fabric",
    craft: "Embroidered detailing",
    story: "The black tuxedo, reconsidered. Embroidery placed where tradition never thought to look.",
    images: [P("032509", 1), P("032509", 2), P("032509", 3)],
    source: src("black-italian-fabric-embroidered-tuxedo-set-mycw032509"),
  },
  {
    slug: "black-tuxedo-iii",
    sku: "032512",
    name: "Eclipse Tuxedo",
    category: "Tuxedos",
    colour: { name: "Black", swatch: "oklch(0.16 0 0)" },
    fabric: "Italian fabric",
    craft: "Embroidered detailing",
    story: "Restraint as a statement. Clean lines, a precise fit and one perfectly judged flourish.",
    images: [P("032512", 1), P("032512", 2), P("032512", 3)],
    source: src("black-italian-fabric-embroidered-tuxedo-set-mycw032512"),
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
const bySku = (s: string) => products.find((p) => p.sku === s)!;

/** Collection names are taken from the official mayankchawla.co.in homepage. */
export const collections = [
  {
    slug: "midnight-majesty",
    name: "Midnight Majesty",
    line: "Deep hues. Luxe fabrics. A collection that keeps its secrets.",
    image: P("032601", 1),
    pieces: ["032601", "032513", "032510", "032511"],
  },
  {
    slug: "eternal-heritage",
    name: "Eternal Heritage",
    line: "Groom couture where lineage meets the cut of today.",
    image: P("032501", 1),
    pieces: ["032501", "032505", "032502"],
  },
  {
    slug: "regal-reflections",
    name: "Regal Reflections",
    line: "Royal bearing, reshaped for the contemporary man.",
    image: P("032508", 1),
    pieces: ["032508", "032507", "032506", "032509", "032512"],
  },
].map((c) => ({ ...c, products: c.pieces.map(bySku) }));

export const images = {
  hero: P("032601", 1),
  heroAlt: P("032511", 1),
  house: P("032505", 1),
  occasion: P("032501", 1),
  occasionSide: P("032502", 1),
  craft: [P("032601", 4), P("032506", 4), P("032511", 4), P("032501", 3)],
  founderMood: P("032513", 1),
  finale: P("032505", 4),
  journal: [P("032601", 2), P("032511", 3), P("032502", 2)],
};

/** Verified from Justdial / Google listing for the brand's Gurugram store. */
export const store = {
  name: "The MAYANKCHAWLA Experience Store",
  address: "A Block, DLF Phase 1, Sector 28, Golf Course Road, Gurugram, Haryana 122002",
  hours: "Open daily, 11 AM to 8:30 PM",
  maps: "https://www.google.com/maps/search/?api=1&query=Mayank+Chawla+Menswear+A+Block+DLF+Phase+1+Golf+Course+Road+Gurugram",
  registered: "4/20, East Punjabi Bagh, New Delhi 110026",
  /** Add a genuine showroom photograph URL here when available. */
  image: "" as string,
};

/**
 * Celebrity closet. Add entries only with verified, genuine photographs
 * of the celebrity wearing MAYANKCHAWLA.
 */
export const celebrities: { name: string; image: string }[] = [];

/** Add a genuine portrait of Mayank Chawla here when available. */
export const founder = { name: "Mayank Chawla", portrait: "" as string };

export const links = {
  instagram: "https://www.instagram.com/mayankchawla_menswear/",
  site: "https://mayankchawla.co.in/",
  pernia: "https://www.perniaspopupshop.com/designers/mayank-chawla",
};

export const journal = [
  {
    slug: "midnight-majesty",
    kicker: "Campaign",
    title: "Midnight Majesty",
    excerpt: "Velvet, silver thread and the long hour after sunset. Inside the collection built for the reception.",
    image: P("032601", 2),
  },
  {
    slug: "cutdana",
    kicker: "Atelier",
    title: "Bead by Bead",
    excerpt: "Cutdana is patience made visible. A look at the hands that place every glint by hand.",
    image: P("032511", 3),
  },
  {
    slug: "the-indowestern",
    kicker: "Style",
    title: "The New Long Line",
    excerpt: "Why the indowestern has become the most commanding silhouette a groom can choose.",
    image: P("032502", 2),
  },
];
