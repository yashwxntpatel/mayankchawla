import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { products, type Category } from "@/config/assets";
import { ProductCard } from "@/components/site/ProductCard";
import { useScrollMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop | MAYANKCHAWLA Menswear" },
      { name: "description", content: "The MAYANKCHAWLA showroom. Couture tuxedos, bandhgalas and indowesterns, each available on enquiry." },
      { property: "og:title", content: "The Showroom | MAYANKCHAWLA" },
      { property: "og:description", content: "Couture tuxedos, bandhgalas and indowesterns from New Delhi." },
    ],
  }),
  component: Shop,
});

const cats: ("All" | Category)[] = ["All", "Tuxedos", "Bandhgala", "Indowestern"];
const colours = Array.from(new Map(products.map((p) => [p.colour.name, p.colour.swatch])).entries());

function Shop() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [colour, setColour] = useState<string | null>(null);
  const list = useMemo(
    () => products.filter((p) => (cat === "All" || p.category === cat) && (!colour || p.colour.name === colour)),
    [cat, colour],
  );
  const scope = useRef<HTMLDivElement>(null);
  useScrollMotion(scope, [cat, colour]);

  return (
    <div ref={scope} className="bg-paper">
      <section className="container-lux pb-14 pt-40 md:pt-48">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p data-reveal className="eyebrow text-muted-foreground">The Showroom</p>
            <h1 data-reveal className="display-xl mt-6 text-maroon">Choose Your Entrance</h1>
          </div>
          <p data-reveal className="lede text-muted-foreground md:col-span-4 md:col-start-9">
            Every piece is made to order in our Delhi atelier and fitted to you. Select a piece to begin a private
            conversation with the house.
          </p>
        </div>
      </section>

      <div className="sticky top-[84px] z-30 border-y bg-paper/90 backdrop-blur-md">
        <div className="container-lux flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="-mx-1 flex gap-1 overflow-x-auto">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "shrink-0 px-4 py-2 text-[0.74rem] uppercase tracking-[0.24em] transition-colors",
                  cat === c ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-[0.66rem] text-muted-foreground">Colour</span>
            {colours.map(([name, sw]) => (
              <button
                key={name}
                onClick={() => setColour(colour === name ? null : name)}
                aria-label={name}
                title={name}
                className={cn(
                  "h-6 w-6 rounded-full ring-1 ring-offset-2 ring-offset-paper transition-all",
                  colour === name ? "ring-maroon ring-2" : "ring-border hover:ring-foreground",
                )}
                style={{ background: sw }}
              />
            ))}
            <span className="ml-2 text-[0.85rem] text-muted-foreground">{list.length} pieces</span>
          </div>
        </div>
      </div>

      <section className="container-lux section-pad !pt-14">
        {list.length === 0 ? (
          <p className="py-24 text-center text-muted-foreground">No pieces match this selection.</p>
        ) : (
          <div key={cat + colour} data-stagger className="grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-3 md:gap-x-8 md:gap-y-20">
            {list.map((p, i) => (
              <div key={p.slug} className={cn(i % 3 === 1 && "md:translate-y-16")}>
                <ProductCard p={p} signature={i === 0} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
