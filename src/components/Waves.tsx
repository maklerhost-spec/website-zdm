// Signatur der Seite: Nord- und Ostsee als bewegte Wasserkanten links und rechts, das Land dazwischen.

function wavyEdge(side: "left" | "right", amp: number) {
  // Abwechselnd nach außen und innen gewölbte Bögen, Periode 100 Einheiten.
  const base = side === "left" ? 62 : 38;
  const s = side === "left" ? 1 : -1;
  let d = side === "left" ? `M0,0 L${base},0` : `M100,0 L${base},0`;
  for (let i = 0; i < 8; i++) {
    const y = i * 50;
    const a = (i % 2 === 0 ? 1 : -1) * amp * s;
    d += ` C${base + a},${y + 15} ${base + a},${y + 35} ${base},${y + 50}`;
  }
  return d + (side === "left" ? " L0,400 Z" : " L100,400 Z");
}

export function SeaBand({ side }: { side: "left" | "right" }) {
  const left = side === "left";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-y-0 ${left ? "left-0" : "right-0"} w-6 overflow-hidden sm:w-14 lg:w-[9vw]`}>
      <svg viewBox="0 0 100 400" preserveAspectRatio="none" className={`absolute inset-x-0 top-0 h-[200%] w-full ${left ? "text-priel-400/40" : "text-ostsee/25"} animate-[driftY_26s_linear_infinite] motion-reduce:animate-none`}>
        <path d={wavyEdge(side, 22)} fill="currentColor" transform={left ? "translate(14 0)" : "translate(-14 0)"} />
      </svg>
      <svg viewBox="0 0 100 400" preserveAspectRatio="none" className={`absolute inset-x-0 top-0 h-[200%] w-full ${left ? "text-priel" : "text-ostsee"} animate-[driftY_18s_linear_infinite_reverse] motion-reduce:animate-none`}>
        <path d={wavyEdge(side, 14)} fill="currentColor" />
      </svg>
      <span className={`absolute top-1/2 hidden font-mono text-[11px] uppercase tracking-[0.4em] text-watt/90 lg:block ${left ? "left-[2.2vw] -translate-y-1/2 [writing-mode:vertical-rl] rotate-180" : "right-[2.2vw] -translate-y-1/2 [writing-mode:vertical-rl]"}`}>
        {left ? "Nordsee" : "Ostsee"}
      </span>
    </div>
  );
}

/** Waagerechte Wellenlinie als Abschluss von Seitenköpfen und Abschnitten. */
export function WaveRule({ className = "" }: { className?: string }) {
  let d = "M0,10";
  for (let i = 0; i < 24; i++) d += ` q12.5,${i % 2 ? 8 : -8} 25,0`;
  return (
    <div aria-hidden className={`overflow-hidden ${className}`}>
      <svg viewBox="0 0 600 20" preserveAspectRatio="none" className="h-4 w-[200%] animate-drift motion-reduce:animate-none">
        <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
