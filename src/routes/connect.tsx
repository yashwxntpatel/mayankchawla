import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { links, store } from "@/config/assets";
import { StoreBlock } from "@/components/site/StoreBlock";
import { useScrollMotion } from "@/lib/motion";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect | MAYANKCHAWLA Menswear" },
      { name: "description", content: "Book a private appointment, enquire about a piece or visit the MAYANKCHAWLA store in Gurugram." },
      { property: "og:title", content: "Connect | MAYANKCHAWLA" },
      { property: "og:description", content: "Book a private appointment with the house." },
    ],
  }),
  component: Connect,
});

const ways = [
  { k: "Private Enquiry", t: "Message the House", d: "Ask about a piece, a fitting or a wedding wardrobe.", href: "https://ig.me/m/mayankchawla_menswear", cta: "Send a Message" },
  { k: "Follow", t: "Instagram", d: "New collections and evenings in MAYANKCHAWLA, first.", href: links.instagram, cta: "Follow the House" },
  { k: "Visit", t: "The Experience Store", d: store.hours, href: store.maps, cta: "Get Directions" },
];

function Connect() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollMotion(scope);
  return (
    <div ref={scope} className="bg-paper">
      <section className="container-lux pb-20 pt-40 md:pt-48">
        <p data-reveal className="eyebrow text-muted-foreground">Connect</p>
        <h1 data-reveal className="display-xl mt-6 max-w-4xl text-maroon">Your Appointment Awaits</h1>
        <div data-stagger className="mt-20 grid gap-px border bg-border md:grid-cols-3">
          {ways.map((w) => (
            <a key={w.t} href={w.href} target="_blank" rel="noreferrer" className="group flex flex-col bg-paper p-10 transition-colors duration-700 hover:bg-ink hover:text-ink-foreground">
              <p className="eyebrow text-muted-foreground group-hover:text-gold">{w.k}</p>
              <h2 className="display-md mt-6">{w.t}</h2>
              <p className="mt-4 flex-1 text-muted-foreground group-hover:text-ink-muted">{w.d}</p>
              <span className="link-line mt-10 self-start text-[0.78rem] uppercase tracking-[0.28em]">{w.cta}</span>
            </a>
          ))}
        </div>
      </section>
      <StoreBlock />
    </div>
  );
}
