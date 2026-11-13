import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Scale, Lock, TrendingUp } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Marquee from "../components/Marquee";
import { MaskLine, Reveal } from "../components/Reveal";
import { HUBS, PHOTOS } from "../data/site";

const VALUES = [
  [Scale, "Integrity", "Your stock is treated like our own — counted, secured and reported without dressing."],
  [ShieldCheck, "Speed", "Dispatch discipline and short cut-offs, because shelf life and sales windows don't wait."],
  [Lock, "Security", "Access-controlled floors and monitored operations across every hub."],
  [TrendingUp, "Scalability", "Space, fleets and crews that flex with your season instead of capping it."],
];

export default function About() {
  useEffect(() => {
    document.title = "About Us — CoverEdge Marketing Pvt. Ltd";
  }, []);
  return (
    <>
      <PageHeader
        eyebrow="About CoverEdge"
        lines={["Built to", <>carry <span className="text-ember">more.</span></>]}
        meta={[["Established", "2012"], ["Warehouse hubs", "04"], ["Service lines", "12"]]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="relative rounded-2xl border border-line bg-coal p-8 sm:p-12" data-testid="about-logo-card">
              <span aria-hidden className="absolute top-3 left-3 h-4 w-4 border-t border-l border-ember" />
              <span aria-hidden className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-ember" />
              <img
                src="/brand/logo-full.webp"
                alt="CoverEdge Marketing Pvt. Ltd — full logo"
                data-testid="about-full-logo"
                className="logo-blend w-full"
              />
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-steel text-center">
                The mark — a diamond in motion, goods flowing edge to edge
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal y={16}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">Our story</p>
            </Reveal>
            <h2 className="mt-4 font-display uppercase leading-[0.95] text-4xl sm:text-5xl">
              <MaskLine>Six lanes of</MaskLine>
              <MaskLine delay={0.1}>
                <span className="text-steel">highway behind us.</span>
              </MaskLine>
            </h2>
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-6 text-steel leading-relaxed">
                <p>
                  CoverEdge Marketing Pvt. Ltd began in 2012 with a simple conviction — a logistics
                  partner should behave like an operating team, not a vendor. Not a call centre that
                  quotes and disappears, but people who walk the racking every day.
                </p>
                <p>
                  We started in Bhiwandi, at the western edge of India's freight economy. Step by step
                  the network grew — Nagpur for the centre of the country, New Delhi for the northern
                  corridor, Siliguri as the gateway to the North-East. Four hubs, each chosen where the
                  roads already do the work.
                </p>
                <p>
                  Today the same team runs warehousing, order fulfilment, transportation, inventory
                  management and value-added services under one roof — so our clients make one phone
                  call, not five.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-bone">
                — Team CoverEdge, est. 2012
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-coal/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal y={16}>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">What we stand on</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(([Icon, title, body], i) => (
              <Reveal key={title} delay={0.07 * i}>
                <div className="h-full rounded-2xl border border-line bg-coal p-6 hover:border-ember/60 transition-colors duration-300" data-testid={`about-value-card-${i}`}>
                  <Icon className="h-6 w-6 text-ember" />
                  <h3 className="mt-5 font-display uppercase text-xl text-bone">{title}</h3>
                  <p className="mt-3 text-sm text-steel leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line">
              <img src={PHOTOS.racks} alt="Warehouse racking" className="h-64 sm:h-80 w-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-ink/60" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img
                  src="/brand/logo-horizontal.webp"
                  alt="CoverEdge Marketing Pvt. Ltd"
                  data-testid="about-horizontal-logo"
                  className="logo-blend w-full max-w-2xl"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={HUBS.map((h) => h.city)} />

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24 flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display uppercase text-3xl sm:text-5xl">
            The story continues <span className="text-ember">on the floor.</span>
          </h2>
          <Link
            to="/services"
            data-testid="about-services-cta"
            className="group inline-flex items-center gap-2 bg-ember text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-bone transition-colors duration-300"
          >
            Explore our services
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
