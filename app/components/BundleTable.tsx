import { bundleRows, baht } from "../lib/content";

export default function BundleTable() {
  const monthly = bundleRows(false);
  const annual = bundleRows(true);

  return (
    <div className="overflow-hidden rounded-card border border-ink/8 bg-card shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 border-b border-ink/8 bg-beige/60 px-5 py-3 sm:grid-cols-[2fr_1fr_1fr] sm:px-6 sm:py-4">
        <span className="text-xs font-semibold text-muted">แพ็คเกจ</span>
        <span className="text-right text-xs font-semibold text-muted">รายเดือน</span>
        <div className="flex items-center justify-end gap-1.5">
          <span className="text-right text-xs font-semibold text-muted">รายปี</span>
          <span className="rounded-full bg-sage/20 px-2 py-0.5 text-[10px] font-bold text-sage">
            ประหยัด 10%
          </span>
        </div>
      </div>

      <ul>
        {monthly.map((r, i) => {
          const ann = annual[i];
          const isBest = ann.discountPct === 20;
          return (
            <li
              key={r.label}
              className={`grid grid-cols-[1fr_auto_auto] items-center gap-x-3 px-5 py-4 sm:grid-cols-[2fr_1fr_1fr] sm:px-6 ${
                i > 0 ? "border-t border-ink/8" : ""
              } ${isBest ? "bg-mocha/[0.04]" : ""}`}
            >
              {/* Package name */}
              <span className="text-sm font-semibold text-ink">
                {r.label}
                {isBest && (
                  <span className="ml-2 rounded-full bg-mocha px-2 py-0.5 text-[10px] font-semibold text-[#FDFBF9]">
                    คุ้มสุด
                  </span>
                )}
              </span>

              {/* Monthly price */}
              <div className="text-right">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="rounded-full bg-ink/8 px-2 py-0.5 text-[10px] font-semibold text-muted">
                    −{r.discountPct}%
                  </span>
                </div>
                <div className="mt-0.5 text-sm font-bold text-ink">
                  {baht(r.special)}
                  <span className="text-[10px] font-normal text-muted">/เดือน</span>
                </div>
              </div>

              {/* Annual price — highlighted */}
              <div className="text-right">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="rounded-full bg-sage/20 px-2 py-0.5 text-[10px] font-semibold text-sage">
                    −{ann.discountPct}%
                  </span>
                </div>
                <div className="mt-0.5 text-sm font-bold text-mocha">
                  {baht(ann.special)}
                  <span className="text-[10px] font-normal text-muted">/เดือน</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Footer note */}
      <div className="border-t border-ink/8 bg-beige/40 px-5 py-3 sm:px-6">
        <p className="text-[11px] text-muted">
          * ราคารายปีเรียกเก็บล่วงหน้าเป็นรายปี · ราคาปกติต่อ SaaS = ฿2,990/เดือน
        </p>
      </div>
    </div>
  );
}
