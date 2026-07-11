import { useEffect, useState } from "react";
import { PROJECTS } from "../data.js";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 014 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ProjectModal({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/60 p-5 backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-line bg-paper">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink/40 text-white hover:bg-ink/60"
        >
          ✕
        </button>

        {p.image ? (
          <img src={p.image} alt={p.title} className="aspect-video w-full object-cover" />
        ) : (
          <div className="flex aspect-video w-full items-end p-3" style={{ backgroundImage: p.gradient }}>
            <span className="rounded-sm bg-black/20 px-2 py-1 font-mono text-[11px] text-white">add a screenshot</span>
          </div>
        )}

        <div className="p-6">
          <div className="mb-2 flex items-center gap-2 font-mono text-[11px] text-muted">
            <span>{p.badge}</span>
            {p.type && <span className="text-terracotta">· {p.type}</span>}
          </div>
          <h3 className="mb-2.5 font-serif text-2xl font-medium">{p.title}</h3>
          <p className="mb-4 text-sm text-muted">{p.long || p.desc}</p>
          <div className="mb-5 flex flex-wrap gap-2">
            {p.stack.map((s, j) => (
              <code key={j} className="rounded-[3px] bg-codebg px-2 py-[3px] font-mono text-[11px] text-terracotta">
                {s}
              </code>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[12.5px] text-ink hover:border-terracotta hover:text-terracotta"
            >
              <GitHubIcon />
              GitHub
            </a>
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-terracotta bg-terracotta px-4 py-2 font-mono text-[12.5px] text-white hover:opacity-85"
              >
                Live demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="border-b border-line py-[74px]">
      <div className="mx-auto max-w-content px-7">
        <div className="reveal mb-[26px] font-mono text-[12.5px] text-terracotta">// projects</div>
        <div className="grid gap-[22px] md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              style={{ transitionDelay: (i % 2) * 90 + "ms", "--c": p.color }}
              className="project-card reveal relative flex flex-col overflow-hidden rounded border border-line bg-paper"
            >
              <button onClick={() => setActive(p)} className="group relative flex flex-1 flex-col text-left">
                <div className="h-[5px] w-full" style={{ backgroundImage: p.gradient }} />
                <div className="flex flex-1 flex-col p-[18px]">
                  <div className="mb-2.5 flex items-center justify-between gap-2">
                    <span className="font-mono text-[10.5px] text-muted">{p.badge}</span>
                    {p.type && (
                      <span className="whitespace-nowrap rounded-full border border-terracotta/35 px-2 py-[3px] font-mono text-[10px] uppercase tracking-wide text-terracotta">
                        {p.type}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 font-serif text-[23px] font-medium">{p.title}</h3>
                  <p className="mb-3.5 text-[14.5px] text-muted">{p.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {p.stack.map((s, j) => (
                      <code key={j} className="rounded-[3px] bg-codebg px-2 py-[3px] font-mono text-[11px] text-terracotta">
                        {s}
                      </code>
                    ))}
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-cream/0 font-mono text-[13px] uppercase tracking-wider text-terracotta opacity-0 transition-all duration-200 group-hover:bg-cream/85 group-hover:opacity-100">
                  View project →
                </span>
              </button>

              <div className="flex items-center gap-4 border-t border-line px-[18px] py-3">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted hover:text-terracotta"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted hover:text-terracotta"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
    </section>
  );
}
