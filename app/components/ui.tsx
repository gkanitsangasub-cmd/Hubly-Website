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

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-mocha/20 bg-mocha/5 px-3.5 py-1 text-xs font-semibold tracking-wide text-mocha">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
