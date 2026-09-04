import type { ReactNode } from "react";
export default function ContentSection({
  children,
  id,
  tone = "cream",
}: {
  children: ReactNode;
  id?: string;
  tone?: "cream" | "beige";
}) {
  return (
    <section
      id={id}
      className={`relative isolate scroll-mt-24 overflow-hidden py-20 md:py-28 ${tone === "beige" ? "bg-beige" : "bg-cream"}`}
    >
      <div
        aria-hidden
        className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
