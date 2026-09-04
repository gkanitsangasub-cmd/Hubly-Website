import Link from "next/link";
import { SERVICE_AREAS } from "../lib/services";
import { ArrowRightIcon, CheckIcon } from "./icons";
import MotionReveal from "./MotionReveal";

export default function ServiceAreas({
  withVideo = false,
}: {
  withVideo?: boolean;
}) {
  return (
    <div
      className={`mt-12 grid gap-5 ${withVideo ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}
    >
      {withVideo && (
        <MotionReveal className="h-full">
          <div
            className="relative h-full min-h-80 overflow-hidden rounded-card border border-ink/8 bg-ink bg-cover bg-center lg:min-h-[440px]"
            style={{ backgroundImage: "url(/hero/pillar-poster.jpg)" }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              poster="/hero/pillar-poster.jpg"
              aria-hidden="true"
            >
              <source src="/hero/pillar.mp4" type="video/mp4" />
            </video>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold tracking-widest text-cream/70">
                HUBLY COMPANY
              </p>
              <p className="mt-2 text-xl font-bold leading-snug text-cream">
                พาร์ตเนอร์ดิจิทัล
                <br />
                ที่โตไปกับธุรกิจคุณ
              </p>
            </div>
          </div>
        </MotionReveal>
      )}
      {SERVICE_AREAS.map((area, i) => {
        const Icon = area.icon;
        return (
          <MotionReveal key={area.no} delay={i * 0.08} className="h-full">
            <Link
              href={area.href}
              className="group flex h-full flex-col rounded-card border border-ink/8 bg-card p-6 shadow-warm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm-lg"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-card ${area.accent}`}
                >
                  <Icon />
                </span>
                <span aria-hidden className="text-4xl font-bold text-ink/10">
                  {area.no}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold leading-snug">
                {area.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {area.desc}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {area.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-ink/80">
                    <CheckIcon
                      width={16}
                      height={16}
                      className="mt-0.5 shrink-0 text-sage"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mocha">
                ดูรายละเอียด
                <ArrowRightIcon width={16} height={16} />
              </span>
            </Link>
          </MotionReveal>
        );
      })}
    </div>
  );
}
