import { forwardRef } from "react";
import type { Experience } from "../data/experiences";

type Props = {
  item: Experience;
  index: number;
  open: boolean;
  visible: boolean;
  onToggle: (id: string) => void;
};

// One self-contained, reusable experience card.
const ExperienceItem = forwardRef<HTMLLIElement, Props>(function ExperienceItem({ item, index, open, visible, onToggle }, ref) {
  const panelId = `${item.id}-panel`;
  return (
    <li ref={ref} data-id={item.id} className={`exp-item${open ? " is-open" : ""}${visible ? " is-visible" : ""}`}>
      <button
        type="button"
        className="exp-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onToggle(item.id)}
      >
        <span className="exp-num">{index + 1}.</span>
        <span className="exp-title">{item.title}</span>
        <svg className="exp-chevron" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="exp-panel" id={panelId} role="region" aria-label={item.title}>
        <div className="exp-panel-inner">
          <div className="exp-body">
            <div className="exp-text">
              {item.meta && <p className="exp-meta">{item.meta}</p>}
              <p>{item.description}</p>
              {item.bullets && (
                <div className="exp-bullets">
                  {item.bullets.map((b, i) => <p key={i}>{b}</p>)}
                </div>
              )}
            </div>
            {item.image && (
              <div className="exp-media">
                <img src={item.image.src} alt={item.image.alt} />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
});

export default ExperienceItem;
