import { useEffect, useState } from "react";

// Fixed to the bottom-right corner of the screen. Appears once the visitor
// has scrolled past the section with id `after` (About me).
export default function TakeMeToTop({ after = "about-me" }: { after?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = document.getElementById(after);
      setShow(el ? el.getBoundingClientRect().bottom <= 0 : window.scrollY > 600);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [after]);

  return (
    <button
      type="button"
      className={`top-badge ${show ? "is-visible" : ""}`}
      aria-label="Take me to the top"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 200 108" width="100%" height="100%" aria-hidden="true">
        <defs>
          <path id="badge-arc" d="M34 92 A66 66 0 0 1 166 92" />
        </defs>
        <text fill="#fff" fontSize="12.5" fontFamily="Outfit, sans-serif" fontWeight="400">
          <textPath href="#badge-arc" startOffset="50%" textAnchor="middle">Take me to the top now !!!</textPath>
        </text>
        {/* the two eyes */}
        <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
          <path d="M60 53 Q67 47.5 74 52" />
          <path d="M122 52 Q129 47.5 136 53" />
        </g>
        {/* the mouth */}
        <path d="M58 68 C58 62 72 59 98 59 C122 59 136 61 137 67 C137 72 131 73 120 72 C110 71 104 67 98 67 C90 67 82 72 72 73 C62 74 58 72 58 68 Z"
          fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
