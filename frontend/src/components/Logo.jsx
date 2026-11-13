export const Mark = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(45 32 32)">
      <path d="M15 49 V15 H47" stroke="#FF5722" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M49 15 V49 H17" stroke="#7A7F85" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 7 L57 15 L44 23 Z" fill="#FF5722" />
      <path d="M20 41 L7 49 L20 57 Z" fill="#7A7F85" />
      <circle cx="32" cy="32" r="7.5" fill="#7A7F85" />
    </g>
  </svg>
);

export const Wordmark = ({ className = "" }) => (
  <span className={`font-display uppercase leading-none tracking-[0.06em] ${className}`}>
    <span className="text-steel">Cover</span>
    <span className="text-ember">Edge</span>
  </span>
);

export default function Logo({ markClass = "h-8 w-8", textClass = "text-xl", sub = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark className={markClass} />
      <span className="flex flex-col">
        <Wordmark className={textClass} />
        {sub && (
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-steel mt-1">
            Marketing Pvt. Ltd
          </span>
        )}
      </span>
    </span>
  );
}
