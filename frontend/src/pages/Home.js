import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowLeftRight,
  ArrowRightLeft,
  ArrowUpRight,
  Banknote,
  Cpu,
  FileCheck,
  MapPin,
  Package,
  Route,
  Ship,
  Stamp,
  Store,
  Warehouse,
} from "lucide-react";
import Marquee from "../components/Marquee";
import { Mark } from "../components/Logo";
import { EASE, MaskLine, Reveal } from "../components/Reveal";
import { CONTACT, HUBS, PHOTOS, SERVICES } from "../data/site";

const ICONS = {
  Warehouse,
  Route,
  ArrowLeftRight,
  MapPin,
  Package,
  Banknote,
  FileCheck,
  Store,
  Stamp,
  Ship,
  ArrowRightLeft,
  Cpu,
};
const MARQUEE = [...SERVICES.map((s) => s.short), "Cool & Cold Storage"];

const STATS = [
  ["Established", "2012"],
  ["Warehouse hubs", "04"],
  ["Service lines", "12"],
  ["Gateway cities", "BHI·NAG·DEL·SIG"],
];

function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 55, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 55, damping: 15 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section onMouseMove={onMove} className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(#1E222D_1px,transparent_1px),linear-gradient(90deg,#1E222D_1px,transparent_1px)] [background-size:72px_72px] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
      />
      <div aria-hidden className="absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full bg-ember/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        <div className="lg:col-span-7">
          <Reveal y={16}>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              Third-party logistics · Est. 2012
            </p>
          </Reveal>
          <h1 className="mt-6 font-display uppercase leading-[0.92] text-6xl sm:text-8xl xl:text-9xl">
            <MaskLine delay={0.05}>Your goods.</MaskLine>
            <MaskLine delay={0.18}>
              <span className="text-steel">
                Our <span className="text-ember">edge.</span>
              </span>
            </MaskLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-8 max-w-xl font-display text-lg sm:text-2xl text-steel leading-snug tracking-wide">
              CoverEdge Marketing runs the warehouse floor so you can run your business — storage,
              fulfilment, transport and inventory across four hubs: Bhiwandi, Nagpur, New Delhi and
              Siliguri.
            </p>
          </Reveal>
          <Reveal delay={0.45} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              data-testid="hero-cta-quote"
              className="group inline-flex items-center gap-2 bg-ember text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-bone transition-colors duration-300"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/warehouses"
              data-testid="hero-cta-network"
              className="inline-flex items-center gap-2 border border-line text-bone px-7 py-3.5 rounded-full font-semibold hover:border-ember hover:text-ember transition-colors duration-300"
            >
              See the network
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative h-[380px] sm:h-[480px]">
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
            className="relative h-full w-full"
            data-testid="hero-mark-3d"
          >
            <div aria-hidden className="absolute inset-8 rounded-full bg-ember/25 blur-[90px]" />
            <div aria-hidden className="spin-slow absolute inset-2 rounded-full border border-dashed border-steel/30" />
            <img
              src="/brand/logo-square.webp"
              alt="CoverEdge diamond mark"
              data-testid="hero-logo-mark"
              className="logo-blend relative z-10 h-full w-full object-contain [filter:brightness(0.75)_contrast(1.4)_saturate(1.1)_drop-shadow(0_0_60px_rgba(255,87,34,0.35))] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_76%)]"
            />
            {HUBS.map((h, i) => (
              <span
                key={h.city}
                style={{ top: `${[6, 30, 60, 84][i]}%`, left: i % 2 ? "76%" : "-2%" }}
                className="absolute z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-steel bg-ink/85 border border-line rounded-full px-3 py-1.5"
              >
                {h.city}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="border-y border-line bg-coal/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map(([label, value], i) => (
          <Reveal key={label} delay={0.06 * i} className={`py-8 sm:py-10 ${i % 2 ? "pl-6 sm:pl-10" : ""} ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">{label}</p>
            <p className="mt-2 font-display uppercase text-3xl sm:text-4xl text-bone" data-testid={`stat-${i}`}>
              {value}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PhotoBand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section ref={ref} className="relative h-[46vh] sm:h-[60vh] overflow-hidden border-b border-line" data-testid="home-photo-band">
      <motion.img
        src={PHOTOS.band}
        alt="CoverEdge warehouse aisle"
        style={{ y, scale: 1.22 }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-8 flex flex-wrap items-end justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone/90">
            Bhiwandi · Nagpur · New Delhi · Siliguri
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">Four hubs, one standard</p>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, i }) {
  const Icon = ICONS[s.icon];
  return (
    <Link
      to={`/services#${s.slug}`}
      data-testid={`service-card-${s.slug}`}
      className="group flex flex-col justify-between min-h-56 rounded-2xl border border-line bg-coal p-5 sm:p-6 hover:border-ember/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-steel">{String(i + 1).padStart(2, "0")}</span>
        <Icon className="h-5 w-5 text-ember" />
      </div>
      <div className="mt-6">
        <h3 className="font-display uppercase text-xl text-bone leading-tight">{s.title}</h3>
        <p className="mt-2 text-xs text-steel leading-relaxed line-clamp-3">{s.desc}</p>
      </div>
    </Link>
  );
}

function FeatureCard({ s, photo = true, className = "" }) {
  const Icon = ICONS[s.icon];
  return (
    <Link
      to={`/services#${s.slug}`}
      data-testid={`service-feature-${s.slug}`}
      className="group relative block h-64 sm:h-80 overflow-hidden rounded-2xl border border-line bg-coal hover:border-ember/60 transition-colors duration-300"
    >
      {photo ? (
        <>
          <img
            src={s.photo}
            alt={s.title}
            className="absolute inset-0 h-full w-full object-cover opacity-45 transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </>
      ) : (
        <span aria-hidden className="text-stroke-steel absolute -bottom-10 right-0 font-display text-[12rem] leading-none opacity-25">
          01
        </span>
      )}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-steel">01</span>
          <Icon className="h-6 w-6 text-ember" />
        </div>
        <div>
          <h3 className="font-display uppercase text-3xl sm:text-4xl text-bone">{s.title}</h3>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ember">{s.tag}</p>
          <p className="mt-3 max-w-md text-sm text-steel leading-relaxed line-clamp-2">{s.desc}</p>
        </div>
      </div>
    </Link>
  );
}

function Bento() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal y={16}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">What we do</p>
            </Reveal>
            <h2 className="mt-4 font-display uppercase leading-[0.95] text-4xl sm:text-6xl">
              <MaskLine>Twelve capabilities.</MaskLine>
              <MaskLine delay={0.12}>
                <span className="text-steel">
                  One <span className="text-ember">partner.</span>
                </span>
              </MaskLine>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/services"
              data-testid="bento-all-services-link"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-steel hover:text-ember transition-colors"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <FeatureCard s={SERVICES[0]} photo className="h-full" />
          </Reveal>
          <Reveal className="sm:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2">
              {SERVICES.slice(1).map((s, i) => (
                <Reveal key={s.slug} delay={0.05 * i}>
                  <ServiceCard s={s} i={i + 1} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Network() {
  const [active, setActive] = useState(0);
  const hub = HUBS[active];
  return (
    <section className="py-20 sm:py-28 border-t border-line bg-coal/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal y={16}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">The network</p>
        </Reveal>
        <h2 className="mt-4 font-display uppercase leading-[0.95] text-4xl sm:text-6xl">
          <MaskLine>Four hubs.</MaskLine>
          <MaskLine delay={0.12}>
            <span className="text-steel">
              One <span className="text-ember">corridor map.</span>
            </span>
          </MaskLine>
        </h2>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-3">
            {HUBS.map((h, i) => (
              <button
                key={h.city}
                onClick={() => setActive(i)}
                data-testid={`warehouse-hub-${h.city.toLowerCase()}-tab`}
                className={`flex items-center justify-between rounded-xl border p-5 text-left transition-all duration-300 ${
                  active === i ? "border-ember bg-coal" : "border-line bg-transparent hover:border-steel"
                }`}
              >
                <span className="flex items-baseline gap-4">
                  <span className={`font-mono text-xs ${active === i ? "text-ember" : "text-steel"}`}>0{i + 1}</span>
                  <span className="font-display uppercase text-2xl text-bone">{h.city}</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel hidden sm:block">{h.role}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={hub.city}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: EASE }}
                data-testid={`warehouse-hub-${hub.city.toLowerCase()}-panel`}
              >
                <div className="overflow-hidden rounded-2xl border border-line">
                  <img src={hub.photo} alt={`${hub.city} corridor`} className="h-64 sm:h-80 w-full object-cover" />
                </div>
                <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display uppercase text-3xl sm:text-4xl text-bone">{hub.city}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{hub.region}</p>
                  </div>
                  <Link
                    to="/contact"
                    data-testid={`warehouse-hub-${hub.city.toLowerCase()}-contact-link`}
                    className="inline-flex items-center gap-2 bg-ember text-ink font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-bone transition-colors duration-300"
                  >
                    Talk to this hub <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {SERVICES.slice(0, 5).map((s) => s.short).map((c) => (
                    <span key={c} className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel border border-line rounded-full px-3 py-1.5">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  ["Years, not quarters", "In business since 2012 — client relationships here are measured in years, not procurement cycles."],
  ["One partner", "Twelve capabilities under one roof. One call covers storage, dispatch, customs, cash and systems."],
  ["Four hubs", "West, Central, North and East — positioned where India's freight corridors already cross."],
  ["Systems first", "WMS-driven stock visibility from dock to doorstep, with exceptions flagged before they cost you."],
];

const TRANSPORTS = [
  { label: "Surface", title: "Modern Trucking", photo: PHOTOS.modernTruck, note: "Owned corridors, vetted fleets" },
  { label: "Ocean", title: "Sea Freight", photo: PHOTOS.ship, note: "FCL & LCL, port to door" },
  { label: "Air", title: "Air Cargo", photo: PHOTOS.plane, note: "When the clock wins" },
];

function TransportShowcase() {
  return (
    <section className="py-20 sm:py-28 border-t border-line bg-coal/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal y={16}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">How we move it</p>
        </Reveal>
        <h2 className="mt-4 font-display uppercase leading-[0.95] text-4xl sm:text-6xl">
          <MaskLine>Road. Sea.</MaskLine>
          <MaskLine delay={0.12}>
            <span className="text-steel">
              And <span className="text-ember">air.</span>
            </span>
          </MaskLine>
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TRANSPORTS.map((t, i) => (
            <Reveal key={t.title} delay={0.08 * i}>
              <div
                data-testid={`transport-panel-${t.label.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl border border-line h-80 sm:h-96 hover:border-ember/60 transition-colors duration-300"
              >
                <img
                  src={t.photo}
                  alt={`${t.title} — CoverEdge Marketing`}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-90 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2.5 bg-ink/80 border border-line rounded-full pl-2 pr-4 py-1.5">
                  <Mark className="h-5 w-5" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">{t.label}</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 z-10 p-6">
                  <p className="font-display uppercase text-2xl sm:text-3xl text-bone">{t.title}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ember">{t.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal y={16}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">Trusted since 2012</p>
        </Reveal>
        <h2 className="mt-4 font-display uppercase leading-[0.95] text-4xl sm:text-6xl">
          <MaskLine>Our esteemed</MaskLine>
          <MaskLine delay={0.12}>
            <span className="text-steel">clients.</span>
          </MaskLine>
        </h2>
        <Reveal delay={0.2}>
          <div data-testid="clients-panel" className="mt-12 rounded-2xl border border-line bg-black p-6 sm:p-12">
            <img
              src="/brand/clients.png"
              alt="CoverEdge esteemed clients — VetEdge, LikEdge, Cosmic Nutracos, Gaia, Vestige, Skinella, TI Medical, Proathlix, Lotus, WellGo Farms"
              data-testid="clients-image"
              className="w-full"
            />
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 text-sm text-steel">
            Brands across nutraceuticals, cosmetics, wellness and agri — served from our four hubs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal y={16}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">Why CoverEdge</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([title, body], i) => (
            <Reveal key={title} delay={0.07 * i}>
              <div className="h-full rounded-2xl border border-line bg-coal p-6 hover:border-ember/60 transition-colors duration-300" data-testid={`why-card-${i}`}>
                <span className="font-mono text-[11px] text-ember">0{i + 1}</span>
                <h3 className="mt-4 font-display uppercase text-xl text-bone">{title}</h3>
                <p className="mt-3 text-sm text-steel leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-line relative overflow-hidden">
      <div aria-hidden className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-ember/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <Reveal y={16}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">Ready when you are</p>
        </Reveal>
        <h2 className="mt-6 font-display uppercase leading-[0.92] text-5xl sm:text-7xl lg:text-8xl">
          <MaskLine>Put your supply chain</MaskLine>
          <MaskLine delay={0.12}>
            on <span className="text-ember">edge.</span>
          </MaskLine>
        </h2>
        <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            data-testid="home-cta-quote-button"
            className="group inline-flex items-center gap-2 bg-ember text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-bone transition-colors duration-300"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            data-testid="home-cta-phone-link"
            className="font-mono text-sm tracking-[0.1em] text-steel hover:text-bone transition-colors"
          >
            {CONTACT.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "CoverEdge Marketing Pvt. Ltd — 3PL, Warehousing & Distribution";
  }, []);
  return (
    <>
      <Hero />
      <StatsBand />
      <PhotoBand />
      <Bento />
      <Marquee items={MARQUEE} />
      <Network />
      <TransportShowcase />
      <Clients />
      <Why />
      <CTA />
    </>
  );
}
