import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { getProduct, links, products } from "@/config/assets";
import { ProductCard } from "@/components/site/ProductCard";
import { useScrollMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | MAYANKCHAWLA` },
          { name: "description", content: loaderData.story },
          { property: "og:title", content: `${loaderData.name} | MAYANKCHAWLA` },
          { property: "og:description", content: loaderData.story },
          { property: "og:image", content: loaderData.images[0] },
          { name: "twitter:image", content: loaderData.images[0] },
        ]
      : [{ title: "Unavailable | MAYANKCHAWLA" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="container-lux py-48 text-center">
      <h1 className="display-lg text-maroon">Piece Not Found</h1>
      <Link to="/shop" className="btn-lux mt-10">Back to the Showroom</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const scope = useRef<HTMLDivElement>(null);
  useScrollMotion(scope, [p.slug]);
  const related = products.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 4);

  return (
    <div ref={scope} className="bg-paper">
      <section className="container-lux grid gap-10 pb-24 pt-32 md:grid-cols-12 md:pt-40">
        <div className="flex flex-col-reverse gap-4 md:col-span-7 md:flex-row">
          <div className="flex gap-3 overflow-x-auto md:w-20 md:flex-col">
            {p.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                className={cn("aspect-[2/3] w-16 shrink-0 overflow-hidden border transition-opacity md:w-full", active === i ? "border-foreground" : "opacity-50 hover:opacity-100")}
              >
                <img src={src} alt="" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
          <div className="relative aspect-[2/3] flex-1 overflow-hidden bg-secondary">
            {p.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${p.name} view ${i + 1}`}
                className={cn("absolute inset-0 h-full w-full object-cover object-top transition-all duration-[1100ms] ease-[var(--ease-lux)]", active === i ? "scale-100 opacity-100" : "scale-105 opacity-0")}
              />
            ))}
          </div>
        </div>

        <div className="md:sticky md:top-32 md:col-span-4 md:col-start-9 md:self-start">
          <Link to="/shop" className="eyebrow link-line text-muted-foreground">Showroom / {p.category}</Link>
          <h1 data-reveal className="display-lg mt-6 text-maroon">{p.name}</h1>
          <p data-reveal className="lede mt-6 text-muted-foreground">{p.story}</p>

          <div className="mt-10 space-y-8 border-t pt-8">
            <div>
              <p className="eyebrow text-muted-foreground">Colour</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-7 w-7 rounded-full ring-2 ring-maroon ring-offset-2 ring-offset-paper" style={{ background: p.colour.swatch }} />
                <span className="text-[0.95rem]">{p.colour.name}</span>
              </div>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Fit</p>
              <p className="mt-3 text-[0.95rem]">Made to measure in our Delhi atelier. Your stylist will take you through sizing.</p>
            </div>
            <dl className="grid grid-cols-2 gap-6 text-[0.95rem]">
              <div><dt className="eyebrow text-muted-foreground">Fabric</dt><dd className="mt-2">{p.fabric}</dd></div>
              <div><dt className="eyebrow text-muted-foreground">Craft</dt><dd className="mt-2">{p.craft}</dd></div>
            </dl>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <a href={`https://ig.me/m/mayankchawla_menswear`} target="_blank" rel="noreferrer" className="btn-solid">Enquire About This Piece</a>
            <a href={p.source} target="_blank" rel="noreferrer" className="btn-lux justify-center">View at Pernia's Pop Up Shop</a>
            <Link to="/connect" className="link-line mt-2 self-center text-[0.78rem] uppercase tracking-[0.24em] text-muted-foreground">Or visit the house</Link>
          </div>
          <p className="mt-6 text-[0.8rem] text-muted-foreground">Ref. MYCW{p.sku} · <a className="link-line" href={links.instagram} target="_blank" rel="noreferrer">Instagram</a></p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t">
          <div className="container-lux section-pad">
            <h2 data-reveal className="display-md text-maroon">Complete the Wardrobe</h2>
            <div data-stagger className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4">
              {related.map((r) => <ProductCard key={r.slug} p={r} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
