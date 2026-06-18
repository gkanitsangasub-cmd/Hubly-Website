"use client";

import { useState, useCallback, useMemo } from "react";
import {
  MARKETING_SERVICES,
  AUTO_SELECT_MAP,
  allServiceItems,
} from "../../lib/marketing-services";
import { COMPANY } from "../../lib/site";
import { CheckIcon, ArrowRightIcon } from "../../components/icons";

/* ── Types ── */
type ItemState = { selected: boolean; qty: number; auto: boolean };
type Selections = Record<string, ItemState>;

function initSelections(): Selections {
  const s: Selections = {};
  for (const item of allServiceItems) {
    s[item.id] = { selected: false, qty: item.min ?? 1, auto: false };
  }
  return s;
}

const fmt = (n: number) => `฿${n.toLocaleString("en-US")}`;

/* ── Presets ── */
const PRESETS = [
  {
    id: "starter",
    label: "Starter",
    desc: "Social พื้นฐาน",
    items: [
      { id: "content-calendar", qty: 1 },
      { id: "artwork-caption", qty: 8 },
    ],
  },
  {
    id: "social-pro",
    label: "Social Pro",
    desc: "Content + Ads",
    items: [
      { id: "content-calendar", qty: 1 },
      { id: "artwork-caption", qty: 12 },
      { id: "short-video", qty: 2 },
      { id: "fb-ig-ads", qty: 1 },
    ],
  },
  {
    id: "full-digital",
    label: "Full Digital",
    desc: "ทุก Channel หลัก",
    items: [
      { id: "content-calendar", qty: 1 },
      { id: "artwork-caption", qty: 16 },
      { id: "short-video", qty: 4 },
      { id: "fb-ig-ads", qty: 1 },
      { id: "google-ads", qty: 1 },
      { id: "monthly-strategy", qty: 1 },
    ],
  },
] as const;

/* ── Component ── */
export default function MarketingBuilderContent() {
  const [sel, setSel] = useState<Selections>(initSelections);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  /* Toggle single item */
  const toggle = useCallback((id: string) => {
    setActivePreset(null);
    setSel((prev) => {
      const next = { ...prev };
      const newSelected = !prev[id].selected;
      next[id] = { ...prev[id], selected: newSelected, auto: false };

      const autoId = AUTO_SELECT_MAP[id];
      if (autoId) {
        if (newSelected && !prev[autoId].selected) {
          next[autoId] = { ...prev[autoId], selected: true, auto: true };
        } else if (!newSelected && prev[autoId].auto) {
          next[autoId] = { ...prev[autoId], selected: false, auto: false };
        }
      }
      return next;
    });
  }, []);

  /* Set quantity */
  const setQty = useCallback((id: string, qty: number) => {
    setSel((prev) => ({ ...prev, [id]: { ...prev[id], qty } }));
  }, []);

  /* Apply preset */
  const applyPreset = useCallback(
    (preset: (typeof PRESETS)[number]) => {
      const next = initSelections();
      for (const { id, qty } of preset.items) {
        next[id] = { selected: true, qty, auto: false };
      }
      // Handle auto-selects within preset
      for (const { id } of preset.items) {
        const autoId = AUTO_SELECT_MAP[id];
        if (autoId && !next[autoId].selected) {
          next[autoId] = { ...next[autoId], selected: true, auto: true };
        }
      }
      setSel(next);
      setActivePreset(preset.id);
    },
    []
  );

  /* Reset */
  const reset = useCallback(() => {
    setSel(initSelections());
    setActivePreset(null);
  }, []);

  /* Derived lines */
  const lines = allServiceItems
    .filter((item) => sel[item.id]?.selected)
    .map((item) => ({
      item,
      qty: sel[item.id].qty,
      subtotal: item.price * sel[item.id].qty,
    }));

  const monthlyLines = lines.filter((l) => !l.item.isOneTime);
  const oneTimeLines = lines.filter((l) => l.item.isOneTime);
  const monthlyTotal = monthlyLines.reduce((s, l) => s + l.subtotal, 0);
  const oneTimeTotal = oneTimeLines.reduce((s, l) => s + l.subtotal, 0);
  const total = monthlyTotal + oneTimeTotal;
  const hasSelection = lines.length > 0;

  /* Mailto link with summary */
  const mailtoHref = useMemo(() => {
    if (!hasSelection) return `mailto:${COMPANY.email}`;
    const summaryLines = lines
      .map(({ item, qty, subtotal }) =>
        item.isFlat
          ? `- ${item.name}: ${fmt(subtotal)}`
          : `- ${item.name} ×${qty} ${item.unit}: ${fmt(subtotal)}`
      )
      .join("\n");
    const body = [
      "สวัสดีครับ/ค่ะ",
      "",
      "ขอใบเสนอราคาสำหรับบริการ Marketing Agency ต่อไปนี้:",
      "",
      summaryLines,
      "",
      monthlyTotal > 0 ? `รายเดือน: ${fmt(monthlyTotal)}/เดือน` : "",
      oneTimeTotal > 0 ? `One-time: ${fmt(oneTimeTotal)}` : "",
      `ยอดรวมประมาณ: ${fmt(total)}`,
      "",
      "(ราคาข้างต้นไม่รวม Ad Spend)",
      "",
      "กรุณาติดต่อกลับเพื่อ confirm ราคาจริงครับ/ค่ะ",
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      "ขอใบเสนอราคา Marketing Agency — HublyCompany"
    )}&body=${encodeURIComponent(body)}`;
  }, [lines, monthlyTotal, oneTimeTotal, total, hasSelection]);

  return (
    <section className="relative bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Ad Spend callout */}
        <div className="mb-8 flex items-start gap-3 rounded-card border border-amber-500/25 bg-amber-500/[0.06] px-5 py-4">
          <span className="mt-0.5 text-base">⚡</span>
          <p className="text-sm leading-relaxed text-amber-800">
            <span className="font-semibold">ราคาทั้งหมดเป็นค่าบริหารจัดการเท่านั้น</span>{" "}
            — ไม่รวมค่า Ad Spend ที่ต้องชำระให้ platform โดยตรง
            (Facebook, Google, TikTok, LINE)
          </p>
        </div>

        {/* Preset buttons */}
        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
            Popular Picks
          </p>
          <div className="flex flex-wrap gap-2.5">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => applyPreset(p)}
                className={`rounded-btn border px-4 py-2 text-sm font-semibold transition-all ${
                  activePreset === p.id
                    ? "border-mocha bg-mocha text-[#FDFBF9]"
                    : "border-ink/15 bg-card text-ink hover:border-mocha/40 hover:bg-mocha/5"
                }`}
              >
                {p.label}
                <span
                  className={`ml-2 text-xs font-normal ${
                    activePreset === p.id ? "text-[#FDFBF9]/70" : "text-muted"
                  }`}
                >
                  {p.desc}
                </span>
              </button>
            ))}
            {hasSelection && (
              <button
                onClick={reset}
                className="rounded-btn border border-ink/10 bg-card px-4 py-2 text-sm text-muted transition-colors hover:border-ink/25 hover:text-ink"
              >
                ล้างทั้งหมด
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

          {/* ── Left: categories ── */}
          <div className="flex-1 space-y-4">
            {MARKETING_SERVICES.map((cat) => (
              <div
                key={cat.id}
                className="overflow-hidden rounded-card border border-ink/8 bg-card shadow-warm"
              >
                <div className="border-b border-ink/8 bg-beige/60 px-6 py-3.5">
                  <h3 className="text-sm font-bold tracking-wide text-ink">
                    {cat.name}
                  </h3>
                </div>

                <div className="divide-y divide-ink/6">
                  {cat.items.map((item) => {
                    const state = sel[item.id];
                    const isSelected = state.selected;

                    return (
                      <div
                        key={item.id}
                        className={`flex items-start gap-4 px-6 py-4 transition-colors duration-150 ${
                          isSelected ? "bg-mocha/[0.03]" : ""
                        }`}
                      >
                        {/* Checkbox */}
                        <button
                          onClick={() => toggle(item.id)}
                          aria-label={`เลือก ${item.name}`}
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                            isSelected
                              ? "border-mocha bg-mocha text-[#FDFBF9]"
                              : "border-ink/20 hover:border-mocha/50"
                          }`}
                        >
                          {isSelected && <CheckIcon width={11} height={11} />}
                        </button>

                        {/* Name + notes */}
                        <div className="min-w-0 flex-1">
                          <button
                            onClick={() => toggle(item.id)}
                            className="text-left text-sm font-semibold text-ink transition-colors hover:text-mocha"
                          >
                            {item.name}
                          </button>
                          {state.auto && (
                            <span className="ml-2 inline-block rounded-full bg-mocha/10 px-2 py-0.5 text-[10px] font-medium text-mocha">
                              auto
                            </span>
                          )}
                          {item.isOneTime && (
                            <span className="ml-2 inline-block rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-medium text-sage">
                              one-time
                            </span>
                          )}
                          {item.note && (
                            <p className="mt-0.5 text-xs text-muted">
                              {item.note}
                            </p>
                          )}
                          {item.priceNote && (
                            <p className="mt-0.5 text-xs text-clay">
                              *{item.priceNote}
                            </p>
                          )}
                        </div>

                        {/* Price + qty */}
                        <div className="flex shrink-0 flex-col items-end gap-2">
                          <span className="whitespace-nowrap text-sm font-bold text-mocha">
                            {fmt(item.price)}{" "}
                            <span className="text-xs font-normal text-muted">
                              /{item.unit}
                            </span>
                          </span>

                          {isSelected && !item.isFlat && (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  setQty(
                                    item.id,
                                    Math.max(item.min ?? 1, state.qty - 1)
                                  )
                                }
                                aria-label="ลด"
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 text-sm text-ink transition-colors hover:bg-beige"
                              >
                                −
                              </button>
                              <span className="w-8 text-center text-sm font-semibold text-ink">
                                {state.qty}
                              </span>
                              <button
                                onClick={() => setQty(item.id, state.qty + 1)}
                                aria-label="เพิ่ม"
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 text-sm text-ink transition-colors hover:bg-beige"
                              >
                                +
                              </button>
                            </div>
                          )}

                          {isSelected && (
                            <span className="text-xs text-muted">
                              = {fmt(item.price * state.qty)}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: summary sidebar ── */}
          <div className="lg:sticky lg:top-24 lg:w-72">
            <div className="overflow-hidden rounded-card border border-ink/8 bg-card shadow-warm">
              <div className="border-b border-ink/8 bg-beige/60 px-6 py-3.5">
                <h3 className="text-sm font-bold tracking-wide text-ink">
                  สรุปรายการที่เลือก
                </h3>
              </div>

              {!hasSelection ? (
                <div className="px-6 py-10 text-center">
                  <p className="text-sm text-muted">
                    เลือกบริการที่ต้องการ
                    <br />
                    ราคาจะคำนวณที่นี่
                  </p>
                </div>
              ) : (
                <>
                  {/* Monthly items */}
                  {monthlyLines.length > 0 && (
                    <div>
                      <p className="bg-beige/40 px-6 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted">
                        รายเดือน
                      </p>
                      <div className="divide-y divide-ink/6">
                        {monthlyLines.map(({ item, qty, subtotal }) => (
                          <div key={item.id} className="px-6 py-2.5">
                            <div className="flex items-start justify-between gap-2">
                              <span className="flex-1 text-xs leading-snug text-ink">
                                {item.name}
                              </span>
                              <span className="shrink-0 text-xs font-bold text-ink">
                                {fmt(subtotal)}
                              </span>
                            </div>
                            {!item.isFlat && (
                              <p className="mt-0.5 text-[11px] text-muted">
                                {fmt(item.price)} × {qty} {item.unit}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between border-t border-ink/8 px-6 py-2.5">
                        <span className="text-xs font-semibold text-muted">
                          รวมรายเดือน
                        </span>
                        <span className="text-sm font-bold text-mocha">
                          {fmt(monthlyTotal)}/เดือน
                        </span>
                      </div>
                    </div>
                  )}

                  {/* One-time items */}
                  {oneTimeLines.length > 0 && (
                    <div className="border-t border-ink/8">
                      <p className="bg-beige/40 px-6 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted">
                        One-time
                      </p>
                      <div className="divide-y divide-ink/6">
                        {oneTimeLines.map(({ item, qty, subtotal }) => (
                          <div key={item.id} className="px-6 py-2.5">
                            <div className="flex items-start justify-between gap-2">
                              <span className="flex-1 text-xs leading-snug text-ink">
                                {item.name}
                              </span>
                              <span className="shrink-0 text-xs font-bold text-ink">
                                {fmt(subtotal)}
                              </span>
                            </div>
                            {!item.isFlat && (
                              <p className="mt-0.5 text-[11px] text-muted">
                                {fmt(item.price)} × {qty} {item.unit}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between border-t border-ink/8 px-6 py-2.5">
                        <span className="text-xs font-semibold text-muted">
                          รวม one-time
                        </span>
                        <span className="text-sm font-bold text-sage">
                          {fmt(oneTimeTotal)}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="border-t border-ink/8 px-6 py-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-ink">รวมทั้งหมด</span>
                  <span className="text-xl font-bold text-mocha">
                    {fmt(total)}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-muted">
                  ราคาเริ่มต้น · ไม่รวม Ad Spend
                </p>
              </div>

              <div className="px-6 pb-6">
                <a
                  href={mailtoHref}
                  className="flex w-full items-center justify-center gap-2 rounded-btn bg-mocha px-5 py-3 text-sm font-semibold text-[#FDFBF9] shadow transition-all hover:-translate-y-0.5 hover:bg-mocha-dark"
                >
                  ขอใบเสนอราคา
                  <ArrowRightIcon width={15} height={15} />
                </a>
                <p className="mt-3 text-center text-[11px] text-muted">
                  ทีมจะ confirm ราคาจริงอีกครั้ง
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for mobile sticky bar */}
        {hasSelection && <div className="h-20 lg:hidden" />}
      </div>

      {/* Mobile sticky bottom bar */}
      {hasSelection && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-card/95 px-6 py-4 backdrop-blur-sm lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted">ยอดประมาณ</p>
              <p className="text-lg font-bold text-mocha">{fmt(total)}</p>
            </div>
            <a
              href={mailtoHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-btn bg-mocha px-5 py-3 text-sm font-semibold text-[#FDFBF9] shadow hover:bg-mocha-dark"
            >
              ขอใบเสนอราคา
              <ArrowRightIcon width={14} height={14} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
