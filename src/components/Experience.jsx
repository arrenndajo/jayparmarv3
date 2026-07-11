import { useEffect, useState } from "react";
import { XP } from "../data.js";

function XpModal({ x, onClose }) {
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
      <div className="relative w-full max-w-md rounded-lg border border-line bg-paper p-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/15 text-ink hover:bg-ink/25"
        >
          ✕
        </button>
        <div className="mb-1 font-mono text-[11px] text-faint">{x.when}</div>
        <h3 className="font-serif text-2xl font-medium leading-tight">{x.role}</h3>
        <div className="mt-0.5 text-[15px] text-muted">{x.org}</div>
        {x.details?.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {x.details.map((d, k) => (
              <li key={k} className="flex gap-2.5 text-sm text-ink/85">
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-terracotta" />
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="border-b border-line py-[74px]">
      <div className="mx-auto max-w-content px-7">
        <div className="reveal mb-[26px] font-mono text-[12.5px] text-terracotta">// experience</div>
        <div className="flex flex-col">
          {XP.map((x, i) => (
            <button
              key={i}
              onClick={() => setActive(x)}
              style={{ transitionDelay: i * 70 + "ms" }}
              className="reveal group grid grid-cols-1 items-baseline gap-2 border-t border-line py-[22px] text-left transition-[padding] first:border-t-0 hover:pl-2 md:grid-cols-[155px_1fr_auto] md:items-center md:gap-11"
            >
              <span className="order-first font-mono text-[12.5px] text-faint md:order-none">{x.when}</span>
              <span>
                <div className="font-serif text-[21px] font-medium">{x.role}</div>
                <div className="mt-0.5 text-[14.5px] text-muted">{x.org}</div>
              </span>
              <span className="flex items-center gap-2 justify-self-start">
                <span className="whitespace-nowrap rounded-[3px] bg-codebg px-2.5 py-1 font-mono text-[11px] text-terracotta">
                  {x.tag}
                </span>
                <span className="text-terracotta opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                  ↗
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && <XpModal x={active} onClose={() => setActive(null)} />}
    </section>
  );
}
