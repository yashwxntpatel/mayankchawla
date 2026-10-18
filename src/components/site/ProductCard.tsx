import { Link } from "@tanstack/react-router";
import type { Product } from "@/config/assets";
import horseGold from "@/assets/horse-gold.png";

export function ProductCard({ p, signature = false }: { p: Product; signature?: boolean }) {
  return (
    <Link to="/shop/$slug" params={{ slug: p.slug }} className="group block">
      <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
        <img
          src={p.images[0]}
          alt={p.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-[1400ms] ease-[var(--ease-lux)] group-hover:scale-[1.04] group-hover:opacity-0"
        />
        <img
          src={p.images[2] ?? p.images[1]}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-top opacity-0 transition-all duration-[1400ms] ease-[var(--ease-lux)] group-hover:scale-100 group-hover:opacity-100"
        />
        {signature && <img src={horseGold} alt="" className="absolute bottom-4 right-4 h-8 w-auto opacity-90" />}
        <span className="absolute left-4 top-4 eyebrow text-[0.62rem] text-foreground/70">{p.category}</span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[1.25rem] tracking-wide">{p.name}</h3>
          <p className="mt-1 text-[0.88rem] text-muted-foreground">{p.fabric}</p>
        </div>
        <span
          className="mt-1.5 h-4 w-4 shrink-0 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background"
          style={{ background: p.colour.swatch }}
          title={p.colour.name}
        />
      </div>
    </Link>
  );
}
