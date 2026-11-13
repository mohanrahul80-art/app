export default function Marquee({ items, className = "" }) {
  const Row = ({ hidden }) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={`${it}-${i}`} className="flex items-center">
          <span className="font-display text-2xl sm:text-4xl uppercase tracking-wide text-steel/70 whitespace-nowrap">
            {it}
          </span>
          <span className="mx-8 sm:mx-12 h-2.5 w-2.5 rotate-45 bg-ember shrink-0" />
        </span>
      ))}
    </div>
  );
  return (
    <div data-testid="brand-marquee" className={`marquee overflow-hidden border-y border-line bg-coal/30 py-6 ${className}`}>
      <div className="marquee-track">
        <Row hidden={false} />
        <Row hidden={true} />
      </div>
    </div>
  );
}
