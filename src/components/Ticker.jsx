export default function Ticker() {
  return (
    <div className="border-b border-line bg-paper">
      <div className="mx-auto max-w-content px-7 py-3 font-mono text-[12.5px] text-muted">
        <span className="text-faint">currently: </span>
        Building{" "}
        <a href="#projects" className="border-b border-terracotta/40 text-terracotta">
          LeftoverLab
        </a>{" "}
        — a kitchen assistant
        <span className="hidden md:inline"> · Targeting Spring & Summer 2027 internships</span>
      </div>
    </div>
  );
}
