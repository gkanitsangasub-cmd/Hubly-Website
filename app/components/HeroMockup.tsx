const COLUMNS = [
  {
    title: "Lead ใหม่",
    dot: "bg-amber-500",
    cards: [
      { name: "บริษัท สยามเทรด", value: "฿120,000", tag: "LINE" },
      { name: "ร้านกาแฟ ดอยคำ", value: "฿45,000", tag: "Facebook" },
    ],
  },
  {
    title: "กำลังเจรจา",
    dot: "bg-clay",
    cards: [
      { name: "คุณวีรพล อินทรา", value: "฿88,000", tag: "โทรนัด" },
      { name: "หจก. ภูธรพานิช", value: "฿210,000", tag: "ส่งใบเสนอ" },
    ],
  },
  {
    title: "ปิดดีลสำเร็จ",
    dot: "bg-sage",
    cards: [{ name: "บจก. กรีนฟาร์ม", value: "฿305,000", tag: "Won" }],
  },
];

export default function HeroMockup() {
  return (
    <div className="mx-auto max-w-5xl rounded-hero border border-ink/10 bg-card shadow-[0_24px_70px_-30px_rgba(60,48,39,0.45)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-ink/8 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#E5A8A0]" />
        <span className="h-3 w-3 rounded-full bg-[#E8CE9A]" />
        <span className="h-3 w-3 rounded-full bg-[#A9C8A4]" />
        <div className="mx-auto hidden items-center gap-2 rounded-btn bg-beige px-4 py-1.5 text-xs text-muted sm:flex">
          <span className="h-2 w-2 rounded-full bg-sage" />
          app.hublycompany.com
        </div>
      </div>

      {/* App body */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-ink/8 bg-cream/60 p-4 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-1">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-mocha text-sm font-bold text-[#FDFBF9]">
              H
            </span>
            <span className="text-sm font-bold text-ink">HubDeal</span>
          </div>
          {[
            { label: "Pipeline", active: true },
            { label: "Inbox", active: false },
            { label: "Contacts", active: false },
            { label: "Reports", active: false },
            { label: "Store", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-lg px-3 py-2 text-xs font-medium ${
                item.active
                  ? "bg-mocha text-[#FDFBF9]"
                  : "text-muted"
              }`}
            >
              {item.label}
            </div>
          ))}
        </aside>

        {/* Board */}
        <div className="flex-1 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-ink">Sales Pipeline</div>
              <div className="text-xs text-muted">มูลค่ารวม ฿768,000</div>
            </div>
            <span className="rounded-btn bg-mocha px-3 py-1.5 text-xs font-semibold text-[#FDFBF9]">
              + เพิ่ม Lead
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {COLUMNS.map((col) => (
              <div key={col.title} className="min-w-0">
                <div className="mb-2 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                  <span className="truncate text-xs font-semibold text-ink">
                    {col.title}
                  </span>
                  <span className="ml-auto text-[10px] text-muted">
                    {col.cards.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {col.cards.map((card) => (
                    <div
                      key={card.name}
                      className="rounded-xl border border-ink/8 bg-cream p-3 shadow-sm"
                    >
                      <div className="truncate text-xs font-semibold text-ink">
                        {card.name}
                      </div>
                      <div className="mt-1 text-sm font-bold text-mocha">
                        {card.value}
                      </div>
                      <span className="mt-2 inline-block rounded-full bg-beige px-2 py-0.5 text-[10px] font-medium text-muted">
                        {card.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
