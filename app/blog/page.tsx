import type { Metadata } from "next";
import { BLOG_POSTS } from "../lib/content";
import { Eyebrow } from "../components/ui";
import { ArrowRightIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "บทความและความรู้จาก HublyCompany — การตลาด เทคโนโลยี AI และการบริหารธุรกิจ SME ไทย",
};

const GRADIENTS = [
  "from-amber-500/30 to-clay/30",
  "from-rose-400/30 to-clay/30",
  "from-lime-700/25 to-sage/30",
  "from-orange-400/30 to-mocha/20",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            ความรู้สำหรับธุรกิจ SME ไทย
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            เคล็ดลับการตลาด เทคโนโลยี และการบริหารธุรกิจ จากทีม HublyCompany
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-card border border-ink/8 bg-cream shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Placeholder cover */}
                <div
                  className={`relative flex aspect-[16/10] items-end bg-gradient-to-br p-4 ${
                    GRADIENTS[i % GRADIENTS.length]
                  }`}
                >
                  <span className="rounded-full bg-card/80 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs text-muted">{post.date}</div>
                  <h2 className="mt-2 text-lg font-bold leading-snug text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mocha transition-colors hover:text-mocha-dark"
                  >
                    อ่านเพิ่ม
                    <ArrowRightIcon width={16} height={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            บทความเพิ่มเติมกำลังทยอยมา — ติดตามเราได้เร็วๆ นี้
          </p>
        </div>
      </section>
    </>
  );
}
