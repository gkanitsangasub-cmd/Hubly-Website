import type { Metadata } from "next";
import { COMPANY } from "../lib/site";
import { Eyebrow } from "../components/ui";
import { PhoneIcon, MailIcon, UsersIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description:
    "ติดต่อ HublyCompany — Kanit Sangasub โทร 094-632-6916 อีเมล gkanit.sangasub@gmail.com ปรึกษาบริการ Marketing Agency, AI Solution และ Hubly SaaS",
};

export default function ContactPage() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Eyebrow>ติดต่อเรา</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            อยากเริ่มโปรเจกต์? คุยกับเราได้เลย
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            ทีม HublyCompany พร้อมให้คำปรึกษาฟรี ตอบกลับทุกข้อความ
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-card border border-ink/8 bg-card p-6 shadow-sm">
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
              className="flex items-start gap-4 rounded-card border border-ink/8 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
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
              className="flex items-start gap-4 rounded-card border border-ink/8 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
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
            className="rounded-card border border-ink/8 bg-card p-7 shadow-sm md:p-8"
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
              className="mt-6 w-full rounded-btn bg-mocha px-5 py-3 text-sm font-semibold text-[#FDFBF9] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
            >
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </section>
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
