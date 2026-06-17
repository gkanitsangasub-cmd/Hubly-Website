import type { Metadata } from "next";
import { COMPANY } from "../lib/site";
import { PhoneIcon, MailIcon, UsersIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description:
    "ติดต่อ HublyCompany — Kanit Sangasub โทร 094-632-6916 อีเมล gkanit.sangasub@gmail.com ปรึกษาบริการ Marketing Agency, AI Solution และ Hubly SaaS",
};

const PILL =
  "inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/10 px-4 py-2 text-sm font-medium text-cream backdrop-blur-sm transition-colors hover:bg-white/20";

export default function ContactPage() {
  return (
    <section
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-ink bg-cover bg-center"
      style={{ backgroundImage: "url(/hero/contact-hero-poster.jpg)" }}
    >
      {/* Full-screen video background (warm-controlled) */}
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero/contact-hero-poster.jpg"
        aria-hidden="true"
        style={{
          filter:
            "sepia(0.4) saturate(1.2) hue-rotate(-12deg) brightness(0.92) contrast(1.02)",
        }}
      >
        <source src="/hero/contact-hero.mp4" type="video/mp4" />
      </video>
      <div aria-hidden className="absolute inset-0 bg-mocha/20 mix-blend-multiply" />
      {/* Top-heavy scrim — darker behind the text, lighter over the phone */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/25 to-ink/45"
      />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
      />

      {/* Content (top-aligned, phone shows below in the video) */}
      <div className="relative z-10 px-6 pt-24 text-center md:pt-32">
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-cream/30 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-cream backdrop-blur-sm">
            ติดต่อเรา
          </span>
        </div>
        <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#FDFBF9] drop-shadow-sm md:text-6xl">
          คุยกับเราได้เลย
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          ทีม HublyCompany พร้อมให้คำปรึกษาฟรี ตอบกลับทุกข้อความ
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className={PILL}>
            <UsersIcon width={16} height={16} />
            {COMPANY.contactName}
          </span>
          <a href={COMPANY.phoneHref} className={PILL}>
            <PhoneIcon width={16} height={16} />
            {COMPANY.phone}
          </a>
          <a href={`mailto:${COMPANY.email}`} className={PILL}>
            <MailIcon width={16} height={16} />
            <span className="break-all">{COMPANY.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
