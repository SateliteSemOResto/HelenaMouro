// The three last sections of the portfolio: Santo ISEP, Video and UI/UX Design.
// Everything is positioned in design px inside the 1440px-wide frame (App.tsx scales it to the window).
//  - Images: edit lastSections.data.ts (position / crop / which file).
//  - Text: edit the strings right in this file.
import { santoPieces, videoPieces, uiuxUnderlinePath, type Piece } from "./lastSections.data";

const urls = import.meta.glob("../../assets/last/*", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (file: string) => urls[`../../assets/last/${file}`];

const CYAN = "#15b3e3";

function PieceImg({ p, alt = "" }: { p: Piece; alt?: string }) {
  return (
    <div
      data-name={p.name}
      style={{ position: "absolute", left: p.x, top: p.y, width: p.w, height: p.h, overflow: "hidden", boxShadow: p.border ? `0 0 0 2px ${CYAN}` : undefined, transform: p.rot ? `rotate(${p.rot}deg)` : undefined }}
    >
      <img
        alt={alt}
        src={asset(p.file)}
        draggable={false}
        style={{ position: "absolute", left: p.ix, top: p.iy, width: p.iw, height: p.ih, maxWidth: "none" }}
      />
    </div>
  );
}

export default function LastSections() {
  return (
    <div data-name="last-sections" style={{ position: "absolute", left: 0, top: 0, width: 1440, height: 0 }}>
      {/* ───────────── Santo ISEP ───────────── */}
      <section data-name="santo-isep">
        {/* white section background with dashed top/bottom edges */}
        <div style={{ position: "absolute", left: 0, top: 15396, width: 1440, height: 4550, background: "#fff" }} />
        <div className="ls-dashes" style={{ top: 15394 }} />
        <div className="ls-dashes" style={{ top: 19944 }} />

        {santoPieces.map((p) => (
          <PieceImg key={p.name} p={p} alt={p.name.startsWith("crest-base") ? "Santo ISEP crest" : ""} />
        ))}

        <h2 className="ls-title" style={{ left: 744, top: 15554, fontSize: 140, letterSpacing: "-0.055em", ["--rot" as string]: "-6deg", ["--sy" as string]: 1.12 }}>Santo ISEP</h2>
        <p className="ls-body" style={{ left: 1105, top: 15738, ["--rot" as string]: "52deg", transform: "translate(-50%,-50%) rotate(var(--rot))" }}>2026</p>

        <p className="ls-body" style={{ left: 124, top: 15961, width: 392, lineHeight: "26px" }}>
          Santo ISEP is part<br />of ISEP’s Cultural<br />Week and is an<br />academic festival that<br />brings together all members<br />of the ISEP community. The<br />event celebrates ISEP’s spirit,<br />traditions, and identity through music<br />and social gatherings.
        </p>
        <p className="ls-body" style={{ left: 996, top: 15939, width: 345, lineHeight: "26px", textAlign: "right" }}>
          When entrusted<br />with developing the<br />visual identity, I aimed<br />to reflect the event’s<br />traditional and festive<br />character. I drew inspiration<br />from elements of Portuguese<br />visual culture, such as Portuguese<br />pavement, azulejos, and mosaic<br />patterns.
        </p>
        <p className="ls-body ls-justify" style={{ left: 515, top: 17019, width: 405 }}>
          I developed an original tile pattern inspired by the aesthetic of traditional Portuguese azulejos. I aimed to recreate the texture and visual character of traditional tiles while simplifying the graphic motifs, allowing the pattern to function effectively as a background without competing with the other elements of the visual identity.
        </p>
        <p className="ls-body ls-justify" style={{ left: 951, top: 18653, width: 390 }}>
          Applied the Santo ISEP 2026 visual identity in large-format banners and social media content.
        </p>
      </section>

      {/* ───────────── Video ───────────── */}
      <section data-name="video">
        {videoPieces.map((p) => (
          <PieceImg key={p.name} p={p} />
        ))}

        <h2 className="ls-title ls-video-title" style={{ left: 878, top: 20152, fontSize: 150, ["--rot" as string]: "6.4deg" }}>Video</h2>
        <p className="ls-body" style={{ left: 914, top: 20093, lineHeight: "25px" }}>2024-2026</p>
        <div className="ls-body ls-justify" style={{ left: 914, top: 20236, width: 395 }}>
          <p style={{ margin: 0 }}>During my Interrail trip, I started a personal visual documentation project, capturing still shots of the places I visited and the people within them. The idea came from a desire to create “digital postcards” that conveyed the atmosphere and character of each destination.</p>
          <p style={{ margin: 0 }}>For each country, I developed a visual mark as part of a visual identity associated with the location. This was integrated into a video, serving as an introduction to each collection of visual records. The project allowed me to explore the relationship between typography and visual storytelling.</p>
        </div>
      </section>

      {/* ───────────── UI/UX Design ───────────── */}
      <section data-name="uiux">
        <svg style={{ position: "absolute", left: 0, top: 25300, overflow: "visible" }} width={1440} height={500} viewBox="0 25300 1440 500" aria-hidden="true">
          <path d={uiuxUnderlinePath} fill={CYAN} />
        </svg>
        <h2 className="ls-title" style={{ left: 299, top: 25507, fontSize: 150, lineHeight: 0.89, textAlign: "left", ["--rot" as string]: "-6.4deg" }}>
          UI/UX<br />Design
        </h2>
        {/* cursor arrow next to the title */}
        <img alt="" src={asset("cursor-dark.png")} style={{ position: "absolute", left: 434, top: 25450 }} />
        <img alt="" src={asset("cursor-light-1.png")} style={{ position: "absolute", left: 442, top: 25486 }} />
        <img alt="" src={asset("cursor-light-2.png")} style={{ position: "absolute", left: 441, top: 25490 }} />

        <img alt="Transactions screen of the internal application" src={asset("uiux-transactions.png")} style={{ position: "absolute", left: 100, top: 25699, width: 751, height: 444 }} />
        <img alt="Email inbox screen of the internal application" src={asset("uiux-email-inbox.png")} style={{ position: "absolute", left: 606, top: 26060, width: 751, height: 444 }} />

        <p className="ls-body" style={{ left: 1082, top: 26036, width: 490, lineHeight: "26px", ["--rot" as string]: "-4.6deg", transform: "translate(-50%,-50%) rotate(var(--rot))" }}>
          Internal application developed throughout my internship.
        </p>
        <p className="ls-body" style={{ left: 568, top: 26141, ["--rot" as string]: "4.6deg", transform: "translate(-50%,-50%) rotate(var(--rot))" }}>2026</p>
      </section>
    </div>
  );
}
