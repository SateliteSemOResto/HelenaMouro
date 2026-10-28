import { useLayoutEffect, useRef, useState } from "react";

// Dashed outline heading (SVG text, so the stroke can be dashed).
// Renders a one-line version (desktop) and a stacked version (mobile);
// CSS shows the right one.
function OutlineSvg({ className, lines }: { className: string; lines: string[] }) {
  const group = useRef<SVGGElement>(null);
  const [vb, setVb] = useState("0 0 520 140");
  const key = lines.join("|");

  useLayoutEffect(() => {
    const measure = () => {
      try {
        const b = group.current?.getBBox();
        if (b && b.width) setVb(`${b.x - 4} ${b.y - 4} ${b.width + 8} ${b.height + 8}`);
      } catch { /* hidden SVGs can't be measured; re-measured on resize */ }
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [key]);

  return (
    <svg className={`outline-svg ${className}`} viewBox={vb} aria-hidden="true">
      <g ref={group}>
        {lines.map((l, i) => (
          <text key={i} x="0" y={120 + i * 112} fontSize="140" letterSpacing="-9" fontFamily="'Instrument Serif', serif"
            fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeDasharray="15 4" strokeLinejoin="round">{l}</text>
        ))}
      </g>
    </svg>
  );
}

export default function OutlineText({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <OutlineSvg className="only-desk" lines={[text]} />
      <OutlineSvg className="only-mob" lines={text.split(" ")} />
    </>
  );
}
