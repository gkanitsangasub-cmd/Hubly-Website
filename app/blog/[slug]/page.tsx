import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "../../lib/content";
import { Eyebrow } from "../../components/ui";
import { ArrowRightIcon } from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const GRADIENTS = [
  "from-amber-500/30 to-clay/30",
  "from-rose-400/30 to-clay/30",
  "from-lime-700/25 to-sage/30",
  "from-orange-400/30 to-mocha/20",
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const idx = BLOG_POSTS.indexOf(post);
  const gradient = GRADIENTS[idx % GRADIENTS.length];
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className={`relative isolate overflow-hidden bg-gradient-to-br ${gradient} py-16 md:py-24`}
      >
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <Eyebrow>{post.category}</Eyebrow>
          <h1 className="mx-auto mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {post.date} · โดย HublyCompany
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <article>
            {post.content.map((section, i) => (
              <MotionReveal key={i} delay={i * 0.05}>
                {section.h && (
                  <h2 className="mb-3 mt-8 text-xl font-bold text-ink first:mt-0">
                    {section.h}
                  </h2>
                )}
                <p className="leading-relaxed text-muted">{section.p}</p>
              </MotionReveal>
            ))}
          </article>

          <div className="mt-12 border-t border-ink/8 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-mocha transition-colors hover:text-mocha-dark"
            >
              ← กลับไปหน้าบทความ
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-beige py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-xl font-bold text-ink">
              บทความที่เกี่ยวข้อง
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((p, i) => (
                <MotionReveal key={p.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-card border border-ink/8 bg-card p-5 shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-lg"
                  >
                    <span className="self-start rounded-full border border-ink/10 bg-card/80 px-3 py-1 text-xs font-semibold text-ink">
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-sm font-bold leading-snug text-ink transition-colors group-hover:text-mocha">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 flex-1 line-clamp-2 text-xs leading-relaxed text-muted">
                      {p.excerpt}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-mocha">
                      อ่านเพิ่ม{" "}
                      <ArrowRightIcon width={13} height={13} />
                    </span>
                  </Link>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaCard
        title="อยากให้ธุรกิจโตเร็วกว่าอ่านบทความ?"
        subtitle="ปรึกษาทีม HublyCompany ฟรี หรือเริ่มทดลองใช้ Hubly SaaS ได้ทันที"
      />
    </>
  );
}
