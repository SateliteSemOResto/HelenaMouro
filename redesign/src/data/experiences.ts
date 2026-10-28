// ─────────────────────────────────────────────────────────────
// EXPERIENCE DATA — this is the only file you need to edit to
// add, remove or reorder experiences. Each entry becomes one
// expandable card in the Experience section.
//
//   title        → big serif heading (underlined in cyan)
//   description  → paragraph shown when the card is open
//   image        → optional. Import a file and pass { src, alt }.
//                  Without it, a grey placeholder block is shown.
//   meta         → optional small line (company · period)
//   bullets      → optional list shown under the description
//   defaultOpen  → optional, opens the card on first load (all closed by default)
// ─────────────────────────────────────────────────────────────
import transactionsImage from "../assets/last/uiux-transactions.png";
import inboxImage from "../assets/last/uiux-email-inbox.png";

export type ExperienceMedia = { src: string; alt: string };

export type Experience = {
  id: string;
  title: string;
  description: string;
  meta?: string;
  bullets?: string[];
  image?: ExperienceMedia;
  defaultOpen?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "experience-1",
    title: "Full-Stack Intern",
    meta: "OnlyHighIQ · Feb 2026 — Jun 2026",
    description:
      "Developed the administration interface for the OnlyJustCause platform, supporting content and information management.",
    bullets: [
      "Designed intuitive interfaces with a focus on information hierarchy, usability, and efficient workflows.",
    ],
    image: {
      src: transactionsImage,
      alt: "OnlyJustCause administration interface screenshot",
    },
  },
];
