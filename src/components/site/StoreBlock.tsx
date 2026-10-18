import { store } from "@/config/assets";

export function StoreBlock() {
  return (
    <section className="section-pad border-t bg-paper">
      <div className="container-lux grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p data-reveal className="eyebrow text-muted-foreground">Visit The House</p>
          <h2 data-reveal className="display-lg mt-6 text-maroon">Golf Course Road, Gurugram</h2>
          <p data-reveal className="lede mt-8 text-muted-foreground">
            Feel the weight of the velvet. See the embroidery under real light. Be measured, styled and fitted by the
            people who made it.
          </p>
          <dl data-reveal className="mt-10 space-y-6 border-t pt-8 text-[0.98rem]">
            <div><dt className="eyebrow text-muted-foreground">Address</dt><dd className="mt-2">{store.address}</dd></div>
            <div><dt className="eyebrow text-muted-foreground">Hours</dt><dd className="mt-2">{store.hours}</dd></div>
          </dl>
          <a data-reveal href={store.maps} target="_blank" rel="noreferrer" className="btn-solid mt-10">Get Directions</a>
        </div>
        <div data-reveal className="md:col-span-6 md:col-start-7">
          {store.image ? (
            <img src={store.image} alt={store.name} className="aspect-[4/5] w-full object-cover" />
          ) : (
            <iframe
              title="MAYANKCHAWLA store location"
              src="https://www.google.com/maps?q=28.475854,77.094302&z=16&output=embed"
              className="aspect-[4/5] w-full border grayscale contrast-125 md:aspect-auto md:h-full md:min-h-[560px]"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}
