import { bundleRows, baht } from "../lib/content";

export default function BundleTable({ annual = false }: { annual?: boolean }) {
  const rows = bundleRows(annual);
  return (
    <div className="overflow-hidden rounded-card border border-ink/8 bg-card shadow-sm">
      {/* header */}
      <div className="hidden grid-cols-[1.6fr_1fr_0.8fr_1.2fr] gap-2 border-b border-ink/8 bg-beige/60 px-6 py-4 text-xs font-semibold text-muted sm:grid">
        <span>แพ็คเกจ</span>
        <span className="text-right">ราคาปกติ</span>
        <span className="text-center">ส่วนลด</span>
        <span className="text-right">ราคาพิเศษ</span>
      </div>
      <ul>
        {rows.map((r, i) => {
          const featured = r.discountPct === 20;
          return (
            <li
              key={r.label}
              className={`grid grid-cols-2 items-center gap-2 px-6 py-4 sm:grid-cols-[1.6fr_1fr_0.8fr_1.2fr] ${
                i > 0 ? "border-t border-ink/8" : ""
              } ${featured ? "bg-mocha/5" : ""}`}
            >
              <span className="text-sm font-semibold text-ink">
                {r.label}
                {featured && (
                  <span className="ml-2 rounded-full bg-mocha px-2 py-0.5 text-[10px] font-semibold text-[#FDFBF9]">
                    คุ้มสุด
                  </span>
                )}
              </span>
              <span className="text-right text-sm text-muted line-through sm:no-underline">
                {baht(r.normal)}
              </span>
              <span className="hidden text-center sm:block">
                <span className="rounded-full bg-sage/15 px-2.5 py-1 text-xs font-semibold text-sage">
                  -{r.discountPct}%
                </span>
              </span>
              <span className="col-span-2 mt-1 text-right text-base font-bold text-mocha sm:col-span-1 sm:mt-0">
                {baht(r.special)}
                <span className="text-xs font-normal text-muted">/เดือน</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
