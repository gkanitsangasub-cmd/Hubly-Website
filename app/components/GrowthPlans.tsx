import { GROWTH_PACKAGES, RATE_CARD, baht } from "../lib/marketing-services";
import { quoteHref } from "../lib/site";
import { CheckIcon } from "./icons";
import { ButtonLink } from "./ui";
import MotionReveal from "./MotionReveal";

export default function GrowthPlans() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {GROWTH_PACKAGES.map((plan, i) => (
        <MotionReveal key={plan.id} delay={i * 0.08} className="h-full">
          <article
            id={plan.id}
            className={`flex h-full scroll-mt-24 flex-col rounded-card border bg-card p-6 shadow-warm transition-shadow hover:shadow-warm-lg md:p-7 ${i === 1 ? "border-mocha/40 ring-1 ring-mocha/20" : "border-ink/8"}`}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-mocha">
              Monthly Growth / 0{i + 1}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
            <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted">
              {plan.description}
            </p>
            <p className="mt-6 text-xs text-muted">เริ่มต้น</p>
            <p className="mt-1">
              <span className="text-3xl font-bold text-mocha">
                {baht(plan.price)}+
              </span>
              <span className="ml-1 text-sm text-muted">/เดือน</span>
            </p>
            <div className="mt-6 flex-1 border-t border-ink/8 pt-5">
              <p className="text-xs font-semibold text-mocha">
                {plan.includesLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm">
                    <CheckIcon
                      width={16}
                      height={16}
                      className="mt-0.5 shrink-0 text-sage"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 rounded-lg bg-beige px-3 py-2 text-xs leading-relaxed text-muted">
              ไม่รวม: {plan.excludes}
            </p>
            <ButtonLink
              href={quoteHref("สนใจแพ็กเกจ " + plan.name, [
                "สนใจแพ็กเกจ " + plan.name,
                "ราคาเริ่มต้น " + baht(plan.price) + "+/เดือน",
                ...plan.scope.map((item) => "- " + item),
                "ไม่รวม: " + plan.excludes,
              ])}
              className="mt-5 w-full"
              variant={i === 1 ? "primary" : "outline"}
            >
              ปรึกษาแพ็กเกจ {plan.name}
            </ButtonLink>
          </article>
        </MotionReveal>
      ))}
    </div>
  );
}

export function PackageComparison() {
  return (
    <div
      className="mt-10 overflow-x-auto rounded-card border border-ink/10 bg-card shadow-warm"
      role="region"
      aria-label="ตารางเปรียบเทียบแพ็กเกจ เลื่อนแนวนอนเพื่อดูทั้งหมด"
      tabIndex={0}
    >
      <table className="w-full min-w-[700px] text-left text-sm">
        <caption className="sr-only">
          ขอบเขตบริการที่รวมในแต่ละแพ็กเกจ Growth
        </caption>
        <thead className="bg-mocha text-cream">
          <tr>
            <th scope="col" className="p-5">
              ขอบเขตบริการ
            </th>
            {GROWTH_PACKAGES.map((plan) => (
              <th scope="col" key={plan.id} className="p-5 text-center">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RATE_CARD.map((item) => (
            <tr
              key={item.id}
              className="border-b border-ink/8 even:bg-beige/40"
            >
              <th scope="row" className="p-5 font-medium">
                {item.name}
                {item.id === "graphic" && (
                  <span className="block text-xs text-muted">8 ชิ้น/เดือน</span>
                )}
                {item.id === "video" && (
                  <span className="block text-xs text-muted">2 ชิ้น/เดือน</span>
                )}
              </th>
              {GROWTH_PACKAGES.map((plan) => (
                <td key={plan.id} className="p-5 text-center">
                  {(plan.included as readonly string[]).includes(item.id) ? (
                    <span className="inline-flex rounded-full bg-sage/15 p-1 text-sage">
                      <CheckIcon width={18} height={18} aria-hidden="true" />
                      <span className="sr-only">รวมในแพ็กเกจ</span>
                    </span>
                  ) : (
                    <span className="text-muted">
                      <span aria-hidden>—</span>
                      <span className="sr-only">ไม่รวม</span>
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row" className="p-5 font-medium">
              ไม่รวม
            </th>
            {GROWTH_PACKAGES.map((plan) => (
              <td
                key={plan.id}
                className="p-5 text-center text-xs leading-relaxed text-muted"
              >
                {plan.excludes}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
