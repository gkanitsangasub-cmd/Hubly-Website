import Link from "next/link";
import { APP } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[0.7rem] bg-mocha text-[#FDFBF9] text-lg font-bold">
              H
            </span>
            <span className="text-xl font-bold">Hubly</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            ระบบจัดการธุรกิจครบวงจร สำหรับ SME ไทย — CRM, Inbox แชท และร้านค้า
            ในที่เดียว
          </p>
          <p className="mt-6 text-xs text-cream/50">© 2026 Hubly</p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-sm font-semibold text-cream">Products</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <Link href="/features" className="transition-colors hover:text-cream">
                HubDeal
              </Link>
            </li>
            <li>
              <Link href="/features" className="transition-colors hover:text-cream">
                HubChat
              </Link>
            </li>
            <li>
              <Link href="/features" className="transition-colors hover:text-cream">
                HubStore
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
          <h3 className="text-sm font-semibold text-cream">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <a href="#" className="transition-colors hover:text-cream">
                เกี่ยวกับเรา
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-cream">
                ติดต่อ
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-cream">
                Privacy Policy
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
