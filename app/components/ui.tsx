import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-mocha text-[#FDFBF9] shadow-sm hover:bg-mocha-dark hover:-translate-y-0.5",
  outline:
    "border border-ink/15 text-ink hover:bg-beige hover:-translate-y-0.5",
  light: "bg-cream text-mocha shadow-sm hover:bg-white hover:-translate-y-0.5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonLinkProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-btn px-5 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`;
  const rel = external ? "noopener noreferrer" : undefined;
  return (
    <a href={href} rel={rel} className={cls}>
      {children}
    </a>
  );
}

type Tone = "light" | "dark";

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  const cls =
    tone === "dark"
      ? "border-clay/30 bg-clay/10 text-clay"
      : "border-mocha/20 bg-mocha/5 text-mocha";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold tracking-wide ${cls}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  tone?: Tone;
}) {
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const subColor = tone === "dark" ? "text-cream/60" : "text-muted";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
