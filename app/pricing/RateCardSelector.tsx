"use client";
import { useState } from "react";
import {
  RATE_CARD,
  baht,
  monthlyEstimate,
  selectedRates,
  type RateId,
} from "../lib/marketing-services";
import { quoteHref } from "../lib/site";
import { ArrowRightIcon } from "../components/icons";

export default function RateCardSelector() {
  const [selected, setSelected] = useState<RateId[]>([]);
  const lines = selectedRates(selected);
  const total = monthlyEstimate(selected);
  const href = quoteHref("ขอใบเสนอราคา Digital Growth Services", [
    "สนใจบริการรายเดือนแบบเลือกเฉพาะด้าน:",
    ...lines.map(
      (item) =>
        "- " +
        item.name +
        ": " +
        baht(item.price) +
        "/เดือน (" +
        item.scope +
        ")",
    ),
    "ยอดประมาณ " + baht(total) + "/เดือน",
    "ไม่รวมงบโฆษณา • ขอประเมินขอบเขตและยืนยันราคาก่อนเริ่มงาน",
  ]);
  return (
    <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_320px]">
      <fieldset className="grid min-w-0 gap-4 sm:grid-cols-2">
        <legend className="sr-only">เลือกบริการรายเดือนที่ต้องการ</legend>
        {RATE_CARD.map((item) => {
          const checked = selected.includes(item.id);
          return (
            <label
              key={item.id}
              className={`flex cursor-pointer flex-col rounded-card border bg-card p-5 shadow-warm transition-colors ${checked ? "border-mocha ring-1 ring-mocha/30" : "border-ink/10 hover:border-mocha/40"}`}
            >
              <span className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 accent-mocha"
                  checked={checked}
                  onChange={() =>
                    setSelected((prev) =>
                      checked
                        ? prev.filter((id) => id !== item.id)
                        : [...prev, item.id],
                    )
                  }
                />
                <span className="text-base font-semibold">{item.name}</span>
              </span>
              <span className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </span>
              <span className="mt-4 text-xl font-bold text-mocha">
                {baht(item.price)}
                <span className="ml-1 text-xs font-normal text-muted">
                  /เดือน
                </span>
              </span>
              <span className="mt-2 text-xs leading-relaxed text-muted">
                {item.scope}
              </span>
            </label>
          );
        })}
      </fieldset>
      <aside className="rounded-card border border-ink/10 bg-card p-6 shadow-warm lg:sticky lg:top-24">
        <h3 className="text-lg font-bold">บริการที่คุณเลือก</h3>
        {lines.length ? (
          <ul className="mt-5 space-y-3">
            {lines.map((item) => (
              <li
                key={item.id}
                className="flex justify-between gap-4 text-xs leading-relaxed"
              >
                <span>{item.name}</span>
                <span className="shrink-0 font-semibold">
                  {baht(item.price)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-muted">
            เลือกบริการที่เหมาะกับธุรกิจของคุณ
            เพื่อดูค่าใช้จ่ายรายเดือนโดยประมาณ
          </p>
        )}
        <div
          className="mt-5 border-t border-ink/10 pt-5"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-xs text-muted">ยอดประมาณ / เดือน</p>
          <p className="mt-1 text-3xl font-bold text-mocha">{baht(total)}</p>
          <p className="mt-2 text-xs text-muted">
            {lines.length} บริการ · ไม่รวมงบโฆษณา
          </p>
        </div>
        {lines.length > 0 ? (
          <>
            <a
              href={href}
              className="mt-5 flex items-center justify-center gap-2 rounded-btn bg-mocha px-4 py-3 text-sm font-semibold text-cream transition-colors hover:bg-mocha-dark"
            >
              ขอใบเสนอราคาทางอีเมล
              <ArrowRightIcon width={16} height={16} />
            </a>
            <button
              type="button"
              onClick={() => setSelected([])}
              className="mt-3 w-full rounded-btn py-2 text-sm text-muted hover:text-ink"
            >
              ล้างรายการที่เลือก
            </button>
          </>
        ) : (
          <a
            href="/contact"
            className="mt-5 block rounded-btn border border-ink/15 px-4 py-3 text-center text-sm font-semibold hover:bg-beige"
          >
            ให้ทีมช่วยเลือกบริการ
          </a>
        )}
        <p className="mt-4 text-xs leading-relaxed text-muted">
          ยอดนี้รวมราคาบริการรายด้าน ไม่ใช่ราคาแพ็กเกจ Growth
          ทีมจะประเมินขอบเขตและยืนยันราคาอีกครั้ง
        </p>
      </aside>
    </div>
  );
}
