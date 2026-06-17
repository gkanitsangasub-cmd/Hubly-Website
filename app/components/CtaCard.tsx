import { APP } from "../lib/site";
import { ButtonLink } from "./ui";
import { ArrowRightIcon } from "./icons";

/** Cinematic warm framed CTA — shared across pages to match the Home mood. */
export default function CtaCard({
  title,
  subtitle,
  primaryHref = "/contact",
  primaryLabel = "ปรึกษาเรา",
  secondaryHref = APP.url,
  secondaryLabel = "ทดลอง Hubly ฟรี",
}: {
  title: string;
  subtitle: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-cream px-4 py-10 md:px-6 md:py-16">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-hero bg-gradient-to-br from-mocha via-[#7a5a3e] to-[#574029] px-6 py-12 text-center shadow-[0_30px_80px_-32px_rgba(60,48,39,0.6)] sm:py-16 md:py-24">
        <div
          aria-hidden
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-clay/25 blur-3xl"
        />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold leading-tight text-[#FDFBF9] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream/85">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={primaryHref}
              variant="light"
              className="w-full px-5 py-3.5 text-base sm:w-auto sm:px-7"
            >
              {primaryLabel}
            </ButtonLink>
            <a
              href={secondaryHref}
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-btn border border-cream/40 px-5 py-3.5 text-base font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto sm:px-7"
            >
              {secondaryLabel}
              <ArrowRightIcon width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
