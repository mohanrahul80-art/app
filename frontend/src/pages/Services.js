import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { MaskLine, Reveal } from "../components/Reveal";
import { SERVICES } from "../data/site";

export default function Services() {
  useEffect(() => {
    document.title = "Services — CoverEdge Marketing Pvt. Ltd";
  }, []);
  return (
    <>
      <PageHeader
        eyebrow="Services"
        lines={["Twelve capabilities,", <>one <span className="text-ember">roof.</span></>]}
        meta={[["Scope", "Warehousing to ERP integration"], ["Network", "West · Central · North · East"]]}
      />

      {SERVICES.map((s, i) => (
        <section key={s.slug} id={s.slug} data-testid={`service-section-${s.slug}`} className="border-t border-line scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <div className="group relative overflow-hidden rounded-2xl border border-line">
                <img
                  src={s.photo}
                  alt={s.title}
                  className="h-72 sm:h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 font-mono text-[11px] bg-ink/85 border border-line rounded-full px-3 py-1.5 text-ember">
                  0{i + 1}
                </span>
              </div>
            </Reveal>

            <div className={i % 2 ? "lg:order-1" : ""}>
              <Reveal y={16}>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">{s.tag}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display uppercase text-4xl sm:text-5xl leading-[0.95]">{s.title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-steel leading-relaxed">{s.desc}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-bone">
                      <span className="h-2 w-2 rotate-45 bg-ember shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section id="cool-cold-storage" data-testid="cold-storage-section" className="border-t border-line bg-coal/30 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
          <Reveal y={16}>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              Warehousing Solutions · Specialist facility
            </p>
          </Reveal>
          <h2 className="mt-4 font-display uppercase leading-[0.95] text-4xl sm:text-6xl">
            <MaskLine>Cool &amp; cold storage,</MaskLine>
            <MaskLine delay={0.12}>
              <span className="text-steel">
                held at <span className="text-ember">temperature.</span>
              </span>
            </MaskLine>
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-steel leading-relaxed">
              Dedicated cool and cold chambers inside our warehouses keep temperature-sensitive goods —
              food &amp; beverage, pharma and cosmetics — stable from dock-in to despatch, with monitored
              chambers, segregated racking and cold-chain despatch discipline.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["Cold storage", "0°C to 8°C", "Food & beverage, fresh produce, pharma"],
              ["Cool storage", "8°C to 15°C", "Chocolates, confectionery, cosmetics"],
              ["Ambient cool", "15°C to 25°C", "Packaged foods, nutraceuticals, electronics"],
            ].map(([name, range, goods], i) => (
              <Reveal key={name} delay={0.07 * i}>
                <div data-testid={`cold-storage-card-${i}`} className="h-full rounded-2xl border border-line bg-coal p-6 sm:p-8 hover:border-ember/60 transition-colors duration-300">
                  <span className="h-3 w-3 rotate-45 bg-ember inline-block" />
                  <h3 className="mt-4 font-display uppercase text-2xl text-bone">{name}</h3>
                  <p className="mt-2 font-mono text-lg text-ember tracking-[0.1em]">{range}</p>
                  <p className="mt-3 text-sm text-steel leading-relaxed">{goods}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 rounded-2xl border border-dashed border-line bg-ink/40 px-6 py-5">
            <p className="text-sm text-steel leading-relaxed">
              Chambers across the network are held within these bands with round-the-clock monitoring.
              Have a product that sits outside them — or tighter tolerances? Tell us through the enquiry
              form and the hub team will confirm the exact chamber specs available for your cargo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line relative overflow-hidden">
        <div aria-hidden className="absolute bottom-[-40%] right-[-10%] h-[420px] w-[620px] rounded-full bg-ember/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <h2 className="font-display uppercase leading-[0.95] text-4xl sm:text-6xl">
            <MaskLine>Need all twelve?</MaskLine>
            <MaskLine delay={0.12}>
              <span className="text-steel">
                That's the <span className="text-ember">point.</span>
              </span>
            </MaskLine>
          </h2>
          <Reveal delay={0.25} className="mt-10">
            <Link
              to="/contact"
              data-testid="services-cta-quote-button"
              className="group inline-flex items-center gap-2 bg-ember text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-bone transition-colors duration-300"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
