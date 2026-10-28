import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import SelectionBox from "./SelectionBox";

// A selection frame the visitor can drag (mouse, touch or arrow keys).
// It can only move inside the closest ancestor marked with [data-drag-bounds],
// so it never goes lower than the top of the big name.
export default function DraggableBox({
  children, style, rotate = 0, className = "", label,
}: { children: ReactNode; style?: CSSProperties; rotate?: number; className?: string; label: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef({ px: 0, py: 0, x: 0, y: 0, minX: -Infinity, maxX: Infinity, minY: -Infinity, maxY: Infinity });

  // How far (in px) the visible frame can still move in each direction.
  const room = () => {
    const frame = root.current?.firstElementChild as HTMLElement | null;
    const bounds = root.current?.closest("[data-drag-bounds]") as HTMLElement | null;
    if (!frame || !bounds) return { minX: -Infinity, maxX: Infinity, minY: -Infinity, maxY: Infinity };
    const r = frame.getBoundingClientRect();
    const b = bounds.getBoundingClientRect();
    return { minX: b.left - r.left, maxX: b.right - r.right, minY: b.top - r.top, maxY: b.bottom - r.bottom };
  };
  const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

  const down = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, x: pos.x, y: pos.y, ...room() };
    setDragging(true);
  };
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const s = start.current;
    setPos({
      x: s.x + clamp(e.clientX - s.px, s.minX, s.maxX),
      y: s.y + clamp(e.clientY - s.py, s.minY, s.maxY),
    });
  };
  const up = () => setDragging(false);
  const key = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 30 : 10;
    const d: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (!d[e.key]) return;
    e.preventDefault();
    const r = room();
    setPos((p) => ({ x: p.x + clamp(d[e.key][0], r.minX, r.maxX), y: p.y + clamp(d[e.key][1], r.minY, r.maxY) }));
  };

  return (
    <div
      ref={root}
      className={`drag ${dragging ? "is-dragging" : ""}`}
      style={{ ...style, transform: `translate(${pos.x}px, ${pos.y}px)` }}
      role="button" tabIndex={0} aria-label={`${label} (drag or use arrow keys to move)`}
      onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onKeyDown={key}
    >
      <SelectionBox as="div" rotate={rotate} className={className}>
        {children}
      </SelectionBox>
      {label === "Engineer" && <span className="drag-hint" aria-hidden="true">Drag me!</span>}
    </div>
  );
}
