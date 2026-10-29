import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/experiences";
import ExperienceItem from "./ExperienceItem";
import SelectionBox from "./SelectionBox";

export default function ExperienceSection() {
  const [openIds, setOpenIds] = useState<string[]>(experiences.filter((e) => e.defaultOpen).map((e) => e.id));
  const [visibleIds, setVisibleIds] = useState<string[]>([]);
  const [grown, setGrown] = useState(false);
  const section = useRef<HTMLElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  const toggle = (id: string) =>
    setOpenIds((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  // First time the section scrolls into view, the heading "grows" to the left,
  // as if dragged by the double arrow at its bottom-left corner.
  useEffect(() => {
    const el = section.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setGrown(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setGrown(true); io.disconnect(); } },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const cards = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!cards.length || window.matchMedia("(min-width: 701px)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.id;
            if (id) setVisibleIds((cur) => (cur.includes(id) ? cur : [...cur, id]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience" ref={section}>
      <div className={`exp-stage ${grown ? "is-grown" : ""}`}>
        <SelectionBox as="div" soft rotate={2} className="exp-heading-frame">
          <h2 className="exp-heading" data-text="Experience">Experience</h2>
        </SelectionBox>
        <svg className="resize-icon" viewBox="0 0 40 40" width="46" height="46" aria-hidden="true">
          <path d="M6 34L34 6M34 6H21M34 6V19M6 34H19M6 34V21" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <ol className="exp-list">
        {experiences.map((item, i) => (
          <ExperienceItem
            key={item.id}
            ref={(el) => { itemRefs.current[i] = el; }}
            item={item}
            index={i}
            open={openIds.includes(item.id)}
            visible={visibleIds.includes(item.id)}
            onToggle={toggle}
          />
        ))}
      </ol>
    </section>
  );
}
