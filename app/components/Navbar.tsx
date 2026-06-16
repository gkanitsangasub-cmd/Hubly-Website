"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { APP, NAV_LINKS } from "../lib/site";
import { MenuIcon, CloseIcon, ChevronDownIcon } from "./icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) =>
            l.children ? (
              <div key={l.href} className="group relative">
                <Link
                  href={l.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-ink group-hover:text-ink"
                >
                  {l.label}
                  <ChevronDownIcon
                    width={14}
                    height={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </Link>
                {/* Dropdown (pt-3 acts as a hover bridge) */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="w-64 rounded-card border border-ink/8 bg-card p-2 shadow-[0_16px_44px_-24px_rgba(60,48,39,0.35)]">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-beige"
                      >
                        <div className="text-sm font-semibold text-ink">
                          {c.label}
                        </div>
                        {c.sublabel && (
                          <div className="mt-0.5 text-xs text-muted">
                            {c.sublabel}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={APP.login}
            className="rounded-btn border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-beige"
          >
            เข้าสู่ระบบ
          </a>
          <a
            href={APP.url}
            className="rounded-btn bg-mocha px-4 py-2 text-sm font-semibold text-[#FDFBF9] shadow-sm transition-colors hover:bg-mocha-dark"
          >
            ทดลองฟรี
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-btn border border-ink/10 text-ink md:hidden"
        >
          {open ? (
            <CloseIcon width={22} height={22} />
          ) : (
            <MenuIcon width={22} height={22} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/8 bg-cream px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <div key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/6 py-3 text-base font-medium text-ink"
                >
                  {l.label}
                </Link>
                {l.children && (
                  <div className="flex flex-col">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="border-b border-ink/6 py-2.5 pl-4 text-sm text-muted"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={APP.login}
              className="rounded-btn border border-ink/15 px-4 py-2.5 text-center text-sm font-medium text-ink"
            >
              เข้าสู่ระบบ
            </a>
            <a
              href={APP.url}
              className="rounded-btn bg-mocha px-4 py-2.5 text-center text-sm font-semibold text-[#FDFBF9]"
            >
              ทดลองฟรี
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
