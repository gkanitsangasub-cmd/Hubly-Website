import type { Metadata } from "next";
import { COMPANY } from "../lib/site";
import { PhoneIcon, MailIcon, UsersIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description:
    "ติดต่อ HublyCompany — Kanit Sangasub โทร 094-632-6916 อีเมล gkanit.sangasub@gmail.com ปรึกษาบริการ Marketing Agency, AI Solution และ Hubly SaaS",
};

const CARD_SHADOW = "shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)]";

export default function ContactPage() {
  return (
    <div
      className="relative isolate overflow-hidden bg-ink bg-cover bg-center"
      style={{ backgroundImage: "url(/hero/contact-hero-poster.jpg)" }}
    >
      {/* Full-page video background (warm-controlled) */}
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
            "sepia(0.4) saturate(1.2) hue-rotate(-12deg) brightness(0.9) contrast(1.02)",
        }}
      >
        <source src="/hero/contact-hero.mp4" type="video/mp4" />
      </video>
      <div aria-hidden className="absolute inset-0 bg-mocha/25 mix-blend-multiply" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/80"
      />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero text */}
        <section className="px-6 pb-10 pt-20 text-center md:pb-12 md:pt-28">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-cream/30 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-cream backdrop-blur-sm">
              ติดต่อเรา
            </span>
          </div>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#FDFBF9] md:text-5xl">
            อยากเริ่มโปรเจกต์? คุยกับเราได้เลย
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
            ทีม HublyCompany พร้อมให้คำปรึกษาฟรี ตอบกลับทุกข้อความ
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-btn bg-mocha px-6 py-3.5 text-sm font-semibold text-[#FDFBF9] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
            >
              <PhoneIcon width={18} height={18} />
              โทร {COMPANY.phone}
            </a>
          </div>
        </section>

        {/* Info + form */}
        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Contact info */}
            <div className="space-y-4">
              <div
                className={`flex items-start gap-4 rounded-card border border-white/10 bg-card/95 p-6 backdrop-blur-sm ${CARD_SHADOW}`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.8rem] bg-mocha/10 text-mocha">
                  <UsersIcon width={22} height={22} />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted">ผู้ติดต่อ</div>
                  <div className="mt-0.5 text-base font-semibold text-ink">
                    {COMPANY.contactName}
                  </div>
                </div>
              </div>

              <a
                href={COMPANY.phoneHref}
                className={`flex items-start gap-4 rounded-card border border-white/10 bg-card/95 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${CARD_SHADOW}`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.8rem] bg-sage/15 text-sage">
                  <PhoneIcon width={22} height={22} />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted">โทรศัพท์</div>
                  <div className="mt-0.5 text-base font-semibold text-ink">
                    {COMPANY.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className={`flex items-start gap-4 rounded-card border border-white/10 bg-card/95 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${CARD_SHADOW}`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.8rem] bg-clay/20 text-mocha">
                  <MailIcon width={22} height={22} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-muted">อีเมล</div>
                  <div className="mt-0.5 break-all text-base font-semibold text-ink">
                    {COMPANY.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Form (static — opens mail client) */}
            <form
              action={`mailto:${COMPANY.email}`}
              method="post"
              encType="text/plain"
              className={`rounded-card border border-white/10 bg-card/95 p-7 backdrop-blur-sm md:p-8 ${CARD_SHADOW}`}
            >
              <h2 className="text-lg font-bold text-ink">ส่งข้อความถึงเรา</h2>
              <p className="mt-1 text-sm text-muted">
                กรอกข้อมูลด้านล่าง ระบบจะเปิดโปรแกรมอีเมลของคุณเพื่อส่งถึงเรา
              </p>

              <div className="mt-6 space-y-4">
                <Field label="ชื่อ" name="name" placeholder="ชื่อ-นามสกุล" />
                <Field
                  label="เบอร์โทร"
                  name="phone"
                  type="tel"
                  placeholder="08x-xxx-xxxx"
                />
                <Field
                  label="อีเมล"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-ink"
                  >
                    ข้อความ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="เล่าเกี่ยวกับธุรกิจหรือสิ่งที่ต้องการให้เราช่วย"
                    className="mt-1.5 w-full rounded-btn border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-mocha focus:ring-1 focus:ring-mocha/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-btn bg-mocha px-5 py-3 text-sm font-semibold text-[#FDFBF9] transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-btn border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-mocha focus:ring-1 focus:ring-mocha/30"
      />
    </div>
  );
}
