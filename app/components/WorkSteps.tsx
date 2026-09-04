import { WORK_STEPS } from "../lib/services";
import { SectionHeading } from "./ui";
import ContentSection from "./ContentSection";
import MotionReveal from "./MotionReveal";

export default function WorkSteps() {
  return (
    <ContentSection id="how-we-work" tone="beige">
      <SectionHeading
        eyebrow="How We Work"
        title="เริ่มจากเป้าหมาย แล้วเติบโตไปด้วยกัน"
        subtitle="เข้าใจธุรกิจ วางแผน ลงมือทำ และพัฒนาจากผลลัพธ์จริง"
      />
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WORK_STEPS.map((step, i) => (
          <li key={step.no}>
            <MotionReveal delay={i * 0.08} className="h-full">
              <div className="h-full rounded-card border border-ink/8 bg-card p-6 shadow-warm">
                <span className="text-4xl font-bold text-mocha/25">
                  {step.no}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            </MotionReveal>
          </li>
        ))}
      </ol>
    </ContentSection>
  );
}
