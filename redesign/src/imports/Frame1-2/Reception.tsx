// Receção ao caloiro collage + the connector lines. Data lives in reception.data.ts.
import { receptionItems, physicalItems, connectorPaths } from "./reception.data";

const urls = import.meta.glob("../../assets/reception/*.webp", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const CYAN = "#15b3e3";
const LINE = "#584d4a";

export default function Reception() {
  return (
    <div data-name="reception" style={{ position: "absolute", left: 0, top: 0, width: 1440, height: 0 }}>
      {/* connector lines, all the same colour/weight (drawn behind the cards) */}
      <svg aria-hidden="true" width="1" height="1" style={{ position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }}>
        {connectorPaths.map((d, i) => (
          <path key={i} d={d} fill={LINE} />
        ))}
      </svg>
      {[...receptionItems, ...physicalItems].map((it, i) =>
        it.kind === "img" ? (
          <img
            key={i}
            alt=""
            draggable={false}
            src={urls[`../../assets/reception/${it.file}`]}
            style={{ position: "absolute", left: 0, top: 0, width: it.w, height: it.h, maxWidth: "none", transformOrigin: "0 0", transform: `matrix(${it.m.join(",")})`, clipPath: it.clip ? `polygon(${it.clip.map((p) => `${p[0]}px ${p[1]}px`).join(",")})` : undefined }}
          />
        ) : (
          <svg key={i} aria-hidden="true" width="1" height="1" style={{ position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }}>
            <path d={it.d} fill={CYAN} fillRule={it.rule ?? "evenodd"} />
          </svg>
        ),
      )}
    </div>
  );
}
