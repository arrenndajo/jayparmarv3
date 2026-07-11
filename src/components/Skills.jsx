import { SKILLS } from "../data.js";
import { ICONS } from "../icons.js";

function DbIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#6c6256" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}

function RestIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#6c6256" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4C7 4 7 6 7 8s0 3-2 3c2 0 2 2 2 4s0 3 2 3" />
      <path d="M15 4c2 0 2 2 2 4s0 3 2 3c-2 0-2 2-2 4s0 3-2 3" />
    </svg>
  );
}

function CicdIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#6c6256" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 11a8 8 0 10-1 5" />
      <path d="M20 4v4h-4" />
    </svg>
  );
}

function Chip({ name, icon, custom }) {
  const ic = icon && ICONS[icon];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1.5 text-[13px] text-ink">
      {custom === "db" && <DbIcon />}
      {custom === "rest" && <RestIcon />}
      {custom === "cicd" && <CicdIcon />}
      {ic && (
        <svg viewBox="0 0 24 24" width="15" height="15" fill={ic.color} className="flex-none">
          {ic.paths.map((d, k) => (
            <path key={k} d={d} />
          ))}
        </svg>
      )}
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-[74px]">
      <div className="mx-auto max-w-content px-7">
        <div className="reveal mb-[26px] font-mono text-[12.5px] text-terracotta">// skills</div>
        <div className="grid gap-[18px] md:grid-cols-2">
          {SKILLS.map((g, i) => (
            <div
              key={i}
              style={{ transitionDelay: (i % 2) * 80 + "ms" }}
              className="reveal rounded-lg border border-line bg-paper p-[22px] transition duration-[250ms] hover:border-terracotta hover:shadow-[0_14px_30px_-18px_rgba(74,59,42,0.45)]"
            >
              <h3 className="mb-3.5 font-serif text-[19px] font-medium text-terracotta">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, j) => (
                  <Chip key={j} name={s.name} icon={s.icon} custom={s.custom} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
