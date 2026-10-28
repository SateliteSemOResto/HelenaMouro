import { useLayoutEffect, useRef } from "react";

// Desktop: one line, scaled slightly wider than the screen (edges cropped).
// Mobile (≤700px): two lines — "Helena" left, "Mouro" right — like the phone design.
export default function FitTitle({ id }: { id?: string }) {
  const text = useRef<HTMLSpanElement>(null);
  const first = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const fit = () => {
      const s = text.current, a = first.current;
      if (!s || !a) return;
      const vw = document.documentElement.clientWidth;
      const mobile = vw <= 700;
      s.style.fontSize = "950px";
      const natural = (mobile ? a : s).getBoundingClientRect().width;
      if (!natural) return;
      const target = mobile ? vw * 6.0 : vw * 7.9;
      s.style.fontSize = `${(100 * target) / natural}px`;
      s.style.marginLeft = mobile ? "0px" : `${-0.05 * vw}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <h1 id={id} className="hero-title">
      <span className="sr-only">Helena Mouro, Software Engineer</span>
      <span ref={text} aria-hidden="true" className="hero-title-text">
        <span ref={first} className="ht-a">Helena</span> <span className="ht-b">Mouro</span>
      </span>
    </h1>
  );
}
