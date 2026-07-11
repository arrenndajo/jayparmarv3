import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(document.documentElement.scrollTop > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        (show ? "pointer-events-auto translate-y-0 opacity-100 " : "pointer-events-none translate-y-3 opacity-0 ") +
        "fixed bottom-6 right-6 z-[60] flex h-[46px] w-[46px] items-center justify-center rounded-full border border-line bg-paper text-lg text-ink shadow-[0_8px_20px_-10px_rgba(74,59,42,0.4)] transition hover:border-terracotta hover:text-terracotta"
      }
    >
      ↑
    </button>
  );
}
