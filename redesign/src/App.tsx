import { useEffect, useRef, useState } from "react";
import "./index.css";
import cvPdf from "./imports/Currículo_Helena_Mouro_2026 (2).pdf";
import SelectionBox from "./components/SelectionBox";
import DraggableBox from "./components/DraggableBox";
import FitTitle from "./components/FitTitle";
import OutlineText from "./components/OutlineText";
import ExperienceSection from "./components/ExperienceSection";
import TakeMeToTop from "./components/TakeMeToTop";
import { toolGroups } from "./data/tools";

const navItems = [
  { id: "about-me", label: "About me", rotate: -2 },
  { id: "experience", label: "Experience", rotate: 3 },
  { id: "tools", label: "Tools", rotate: -3 },
  { id: "contact", label: "Contact me", rotate: 4 },
];

const CV_URL = cvPdf;

export default function App() {
  const [active, setActive] = useState("about-me");
  const toolRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v) setActive(v.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const cards = toolRefs.current.filter(Boolean) as HTMLElement[];
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site">
      <div className="shell">
        <header className="nav">
          <nav aria-label="Main navigation">
            {navItems.map((n) => (
              <SelectionBox key={n.id} rotate={n.rotate} className={`nav-box ${active === n.id ? "on" : ""}`}>
                <a href={`#${n.id}`}>{n.label}</a>
              </SelectionBox>
            ))}
          </nav>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-roles" data-drag-bounds>
            <div className="role-pair">
              <DraggableBox label="Software" rotate={-2.5} className="role"><span>Software</span></DraggableBox>
              <DraggableBox label="Engineer" rotate={9} className="role" style={{ marginLeft: "0.8vw", marginTop: "3.2vw" }}><span>Engineer</span></DraggableBox>
            </div>
          </div>
          <FitTitle id="hero-title" />
        </section>

        <section id="about-me" className="about">
          <h2 className="outline-title"><OutlineText text="About me" /></h2>
          <div className="about-copy">
            <p>I'm a Software Engineering graduate passionate about building reliable, user-focused software.</p>
            <p>I enjoy solving problems, exploring new technologies, and creating intuitive user experiences. My interest lie in UI/UX design and application security, with a focus on developing software that is both functional and secure.</p>
          </div>
        </section>

        <ExperienceSection />
      </div>

      <section id="tools" className="tools">
        <div className="tools-bg" aria-hidden="true" />
        <div className="tools-inner">
          <h2 className="tools-title"><span>Tools</span></h2>
          <div className="tools-groups">
            {toolGroups.map((g, i) => (
              <article
                key={g.title}
                ref={(el) => { toolRefs.current[i] = el; }}
                className={`tool ${i % 2 === 0 ? "left" : "right"}`}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                <h3>{g.title}</h3>
                <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="contact">
        <div className="contact-bg" aria-hidden="true" />
        <div className="contact-inner">
          <h2 className="thanks">Thank you!</h2>
          <p>Contact me through <a href="mailto:hmourods@gmail.com">hmourods@gmail.com</a></p>
          <p>Check me out on <a href="https://www.linkedin.com/in/helenamouro/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p><a href={CV_URL} download>Download</a> my CV</p>
        </div>
      </footer>
      <TakeMeToTop after="about-me" />
    </main>
  );
}
