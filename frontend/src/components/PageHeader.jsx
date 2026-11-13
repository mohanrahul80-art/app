import { MaskLine, Reveal } from "./Reveal";

export default function PageHeader({ eyebrow, lines, meta = [] }) {
  return (
    <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-line relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-ember/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal y={16}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">{eyebrow}</p>
        </Reveal>
        <h1 className="mt-6 font-display uppercase leading-[0.95] text-5xl sm:text-7xl lg:text-8xl">
          {lines.map((line, i) => (
            <MaskLine key={i} delay={0.08 * i}>
              {line}
            </MaskLine>
          ))}
        </h1>
        {meta.length > 0 && (
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
            {meta.map(([k, v]) => (
              <p key={k} className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                <span className="text-ember">{k}</span> · {v}
              </p>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
