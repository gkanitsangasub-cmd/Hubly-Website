"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { TOURISM_SCREENS } from "../lib/tourism-crm";

export default function TourismScreens() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const screen = TOURISM_SCREENS[selected];
  return (
    <div className="mt-10">
      <div
        className="mb-6 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="เลือกหน้าจอ CRM"
      >
        {TOURISM_SCREENS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
            className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors ${selected === i ? "border-mocha bg-mocha text-white" : "border-ink/15 bg-card text-muted hover:bg-beige"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-hero border border-ink/10 bg-card shadow-warm">
        <div className="flex items-center justify-between gap-3 border-b border-ink/8 px-5 py-4">
          <span className="text-sm font-medium">
            Hubly Tourism <span className="text-muted">/ {screen.label}</span>
          </span>
          <button
            type="button"
            onClick={() => dialog.current?.showModal()}
            className="shrink-0 rounded-btn border border-ink/15 px-3 py-2 text-xs font-medium text-mocha hover:bg-beige"
          >
            ขยายภาพ <span aria-hidden>↗</span>
          </button>
        </div>
        <figure>
          <div className="flex min-h-44 items-center bg-[#faf5ee] md:min-h-[430px]">
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              sizes="(max-width: 1152px) 100vw, 1104px"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="border-t border-ink/8 px-5 py-3 text-xs leading-relaxed text-muted">
            {screen.note}
          </figcaption>
        </figure>
        <div
          aria-live="polite"
          className="grid gap-6 border-t border-ink/8 p-6 md:grid-cols-[1.3fr_1fr] md:p-8"
        >
          <div>
            <h3 className="text-xl font-semibold">{screen.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {screen.description}
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            {screen.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span aria-hidden className="text-sage">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <dialog
        ref={dialog}
        aria-label={`ภาพขยาย ${screen.label}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[96vw] max-w-[1500px] overflow-auto rounded-card border border-ink/15 bg-card p-0 text-ink shadow-warm-lg backdrop:bg-ink/70"
      >
        <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-ink/10 bg-card px-5 py-4">
          <p className="font-medium">{screen.label}</p>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="rounded-btn border border-ink/15 px-4 py-2 text-sm hover:bg-beige"
            autoFocus
          >
            ปิดภาพ ✕
          </button>
        </div>
        <div className="overflow-x-auto">
          <Image
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            sizes="96vw"
            className="h-auto w-full min-w-[900px]"
          />
        </div>
        <p className="px-5 py-4 text-xs leading-relaxed text-muted">
          {screen.note}
          <span className="mt-2 block md:hidden">
            เลื่อนภาพในแนวนอนเพื่อดูรายละเอียด
          </span>
        </p>
      </dialog>
    </div>
  );
}
