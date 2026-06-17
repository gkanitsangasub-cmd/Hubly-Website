import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row">
        <p className="text-xs text-muted">© 2026 HublyCompany</p>
        <nav className="flex items-center gap-5 text-xs font-medium text-muted">
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-ink">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
