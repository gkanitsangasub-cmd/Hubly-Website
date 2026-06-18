"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  MARKETING_SERVICES,
  AUTO_SELECT_MAP,
  allServiceItems,
} from "../../lib/marketing-services";
import { CheckIcon, ArrowRightIcon } from "../../components/icons";

type ItemState = { selected: boolean; qty: number; auto: boolean };
type Selections = Record<string, ItemState>;

function initSelections(): Selections {
  const s: Selections = {};
  for (const item of allServiceItems) {
    s[item.id] = { selected: false, qty: item.min ?? 1, auto: false };
  }
  return s;
}

const baht = (n: number) => `฿${n.toLocaleString("en-US")}`;

export default function MarketingBuilderContent() {
  const [sel, setSel] = useState<Selections>(initSelections);

  const toggle = useCallback((id: string) => {
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

  const setQty = useCallback((id: string, qty: number) => {
    setSel((prev) => ({ ...prev, [id]: { ...prev[id], qty } }));
  }, []);

  const lines = allServiceItems
    .filter((item) => sel[item.id]?.selected)
    .map((item) => ({
      item,
      qty: sel[item.id].qty,
      subtotal: item.price * sel[item.id].qty,
    }));

  const total = lines.reduce((s, l) => s + l.subtotal, 0);

  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

          {/* Left — service categories */}
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
                        <div className="flex-1 min-w-0">
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
                          {item.note && (
                            <p className="mt-0.5 text-xs text-muted">{item.note}</p>
                          )}
                          {item.priceNote && (
                            <p className="mt-0.5 text-xs text-clay">
                              *{item.priceNote}
                            </p>
                          )}
                          {item.isOneTime && (
                            <span className="mt-1 inline-block rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-medium text-sage">
                              one-time
                            </span>
                          )}
                        </div>

                        {/* Price + qty */}
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <span className="text-sm font-bold text-mocha whitespace-nowrap">
                            {baht(item.price)}{" "}
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
                              = {baht(item.price * state.qty)}
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

          {/* Right — summary sidebar */}
          <div className="lg:w-72 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-card border border-ink/8 bg-card shadow-warm">
              <div className="border-b border-ink/8 bg-beige/60 px-6 py-3.5">
                <h3 className="text-sm font-bold tracking-wide text-ink">
                  สรุปรายการที่เลือก
                </h3>
              </div>

              {lines.length === 0 ? (
                <div className="px-6 py-10 text-center">
                  <p className="text-sm text-muted">
                    เลือกบริการที่ต้องการ
                    <br />
                    ราคาจะคำนวณที่นี่
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-ink/6">
                  {lines.map(({ item, qty, subtotal }) => (
                    <div key={item.id} className="px-6 py-3">
                      <div className="flex items-start justify-between gap-3">
                        <span className="flex-1 text-xs leading-snug text-ink">
                          {item.name}
                        </span>
                        <span className="shrink-0 text-xs font-bold text-ink">
                          {baht(subtotal)}
                        </span>
                      </div>
                      {!item.isFlat && (
                        <p className="mt-0.5 text-[11px] text-muted">
                          {baht(item.price)} × {qty} {item.unit}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-ink/8 px-6 py-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-ink">รวม</span>
                  <span className="text-xl font-bold text-mocha">
                    {baht(total)}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-muted">
                  ราคาเริ่มต้น · ไม่รวม Ad Spend
                </p>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-btn bg-mocha px-5 py-3 text-sm font-semibold text-[#FDFBF9] shadow transition-all hover:-translate-y-0.5 hover:bg-mocha-dark"
                >
                  ขอใบเสนอราคา
                  <ArrowRightIcon width={15} height={15} />
                </Link>
                <p className="mt-3 text-center text-[11px] text-muted">
                  ทีมจะ confirm ราคาจริงอีกครั้ง
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
