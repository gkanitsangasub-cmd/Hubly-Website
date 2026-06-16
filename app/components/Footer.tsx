import Link from "next/link";
import { APP, COMPANY } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[0.7rem] bg-mocha text-[#FDFBF9] text-lg font-bold">
              H
            </span>
            <span className="text-xl font-bold">HublyCompany</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Agency ดิจิทัล + เทคโนโลยี AI + Hubly SaaS รวมไว้ในที่เดียว
            เพื่อให้ธุรกิจ SME ไทยเติบโตได้จริง
          </p>
          <p className="mt-6 text-xs text-cream/50">© 2026 HublyCompany</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold text-cream">บริการ</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <Link href="/services" className="transition-colors hover:text-cream">
                Marketing Agency
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-cream">
                AI Solution
              </Link>
            </li>
            <li>
              <Link href="/products" className="transition-colors hover:text-cream">
                Hubly SaaS
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="transition-colors hover:text-cream">
                ราคา
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-cream">บริษัท</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <Link href="/blog" className="transition-colors hover:text-cream">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-cream">
                ติดต่อเรา
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition-colors hover:text-cream">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-cream">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-cream">ติดต่อ</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>{COMPANY.contactName}</li>
            <li>
              <a
                href={COMPANY.phoneHref}
                className="transition-colors hover:text-cream"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="break-all transition-colors hover:text-cream"
              >
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a href={APP.login} className="transition-colors hover:text-cream">
                เข้าสู่ระบบ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
