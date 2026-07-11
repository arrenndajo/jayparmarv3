import { LINKS, LAST_UPDATED } from "../data.js";

export default function Footer({ onBuild }) {
  return (
    <footer className="pb-20 pt-[54px]">
      <div className="mx-auto max-w-content px-7">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="font-mono text-[12.5px] text-muted">
            © 2026 Jay Parmar.
            <span className="mt-1 block text-faint">last updated {LAST_UPDATED}</span>
          </div>
          <div className="flex items-center gap-[18px] font-mono text-[13px]">
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-terracotta">
              GitHub
            </a>
            <a href={`mailto:${LINKS.email}`} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-terracotta">
              Email
            </a>
            <button onClick={onBuild} className="border-b border-terracotta/40 text-terracotta">
              Build notes
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
