import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="HublyCompany — หน้าแรก"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-[0.7rem] bg-mocha text-[#FDFBF9] font-bold text-lg shadow-sm">
        H
      </span>
      <span className="text-xl font-bold tracking-tight text-ink">
        Hubly<span className="text-mocha">Company</span>
      </span>
    </Link>
  );
}
