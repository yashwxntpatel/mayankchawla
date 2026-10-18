import { Link } from "@tanstack/react-router";
import horseWhite from "@/assets/horse-white.png";
import { links, store } from "@/config/assets";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-lux pb-10 pt-24">
        <div className="grid gap-16 border-b border-ink-line pb-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={horseWhite} alt="" className="h-20 w-auto" />
            <p className="mt-8 max-w-sm font-display text-3xl uppercase leading-[1.05]">
              Dressed for the moments that outlive the evening.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <div>
              <p className="eyebrow text-ink-muted">Explore</p>
              <ul className="mt-6 space-y-3 text-[0.95rem]">
                <li><Link to="/collections" className="link-line">Collections</Link></li>
                <li><Link to="/shop" className="link-line">Shop</Link></li>
                <li><Link to="/the-house" className="link-line">The House</Link></li>
                <li><Link to="/journal" className="link-line">Journal</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-ink-muted">Follow</p>
              <ul className="mt-6 space-y-3 text-[0.95rem]">
                <li><a href={links.instagram} target="_blank" rel="noreferrer" className="link-line">Instagram</a></li>
                <li><a href={links.pernia} target="_blank" rel="noreferrer" className="link-line">Pernia's Pop Up Shop</a></li>
                <li><Link to="/connect" className="link-line">Book an Appointment</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="eyebrow text-ink-muted">The House</p>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-ink-muted">{store.address}</p>
              <a href={store.maps} target="_blank" rel="noreferrer" className="link-line mt-4 inline-block text-[0.95rem]">Get Directions</a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pt-10">
          <p className="select-none whitespace-nowrap font-display text-[15.5vw] leading-[0.8] tracking-[0.01em] text-ink-line md:text-[13.5vw] xl:text-[12.4rem]">
            MAYANKCHAWLA
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 text-[0.8rem] text-ink-muted md:flex-row">
          <p>© {new Date().getFullYear()} MAYANKCHAWLA Menswear. All rights reserved.</p>
          <p>Couture menswear from New Delhi</p>
        </div>
      </div>
    </footer>
  );
}
