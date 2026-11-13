import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { MaskLine, Reveal } from "../components/Reveal";
import { BHIWANDI_MAP, HUBS } from "../data/site";

const CHIPS = ["Warehousing", "Distribution", "Last Mile", "Customs", "Freight Forwarding"];

export default function Warehouses() {
  useEffect(() => {
    document.title = "Warehouses — CoverEdge Marketing Pvt. Ltd";
  }, []);
  return (
    <>
      <PageHeader
        eyebrow="Warehouse network"
        lines={["Four cities.", <>one <span className="text-ember">network.</span></>]}
        meta={[["Bhiwandi", "West"], ["Nagpur", "Central"], ["New Delhi", "North"], ["Siliguri", "East"]]}
      />

      {HUBS.map((h, i) => (
        <section key={h.city} data-testid={`warehouse-hub-${h.city.toLowerCase()}`} className="border-t border-line">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="group relative overflow-hidden rounded-2xl border border-line">
                <img
                  src={h.photo}
                  alt={`${h.city} — ${h.role}`}
                  className="h-72 sm:h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] bg-ink/85 border border-line rounded-full px-3 py-1.5 text-bone">
                  {h.code} · 0{i + 1}
                </span>
              </div>
            </Reveal>

            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <Reveal y={16}>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">{h.role}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display uppercase text-5xl sm:text-6xl leading-[0.95]">{h.city}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  <MapPin className="h-4 w-4 text-ember shrink-0" /> {h.region}
                </p>
                {h.address && (
                  <p className="mt-3 text-sm text-bone leading-relaxed">{h.address}</p>
                )}
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-7 flex flex-wrap gap-2">
                  {CHIPS.map((c) => (
                    <span key={c} className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel border border-line rounded-full px-3 py-1.5">
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-7 text-sm text-steel leading-relaxed">
                  Dock slots, storage plans and the exact address for {h.city} — request them through the
                  enquiry form and the hub team gets back to you.
                </p>
              </Reveal>
              <Reveal delay={0.25} className="mt-8">
                <Link
                  to="/contact"
                  data-testid={`warehouse-hub-${h.city.toLowerCase()}-cta`}
                  className="inline-flex items-center gap-2 border border-line text-bone font-semibold text-sm px-6 py-3 rounded-full hover:border-ember hover:text-ember transition-colors duration-300"
                >
                  Enquire about {h.city} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-coal/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line" data-testid="head-office-map-card">
              <iframe
                src={BHIWANDI_MAP.embed}
                title="CoverEdge Marketing — Head Office, Bhiwandi"
                data-testid="head-office-map"
                className="w-full h-72 sm:h-96 grayscale-[0.4] invert-[0.92] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <div>
            <Reveal y={16}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">Visit us</p>
            </Reveal>
            <h2 className="mt-4 font-display uppercase leading-[0.95] text-4xl sm:text-6xl">
              <MaskLine>Find the</MaskLine>
              <MaskLine delay={0.12}>
                <span className="text-steel">
                  head <span className="text-ember">office.</span>
                </span>
              </MaskLine>
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 flex items-start gap-3 text-bone leading-relaxed">
                <MapPin className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold">CoverEdge Marketing Pvt. Ltd</strong>
                  <br />
                  Warehouse No. 7 &amp; 8, Building No. B11, Parasnath Complex,
                  <br />
                  Dapoda Road, Bhiwandi - 421302, Maharashtra, India
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={BHIWANDI_MAP.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="head-office-directions-link"
                className="mt-7 inline-flex items-center gap-2 border border-line text-bone font-semibold text-sm px-6 py-3 rounded-full hover:border-ember hover:text-ember transition-colors duration-300"
              >
                Get directions <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line relative overflow-hidden">
        <div aria-hidden className="absolute bottom-[-40%] left-[-10%] h-[420px] w-[620px] rounded-full bg-ember/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <h2 className="font-display uppercase leading-[0.95] text-4xl sm:text-6xl">
            <MaskLine>Your lane ends at</MaskLine>
            <MaskLine delay={0.12}>
              <span className="text-steel">
                one of <span className="text-ember">these four.</span>
              </span>
            </MaskLine>
          </h2>
          <Reveal delay={0.25} className="mt-10">
            <Link
              to="/contact"
              data-testid="warehouses-cta-quote-button"
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
