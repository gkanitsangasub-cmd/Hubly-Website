# HublyCompany Website

**Company:** HublyCompany — Agency ดิจิทัล (Marketing) + Tech & AI Solutions + Hubly SaaS for Thai SMEs.

**Contact:** Kanit Sangasub · 094-632-6916 · gkanit.sangasub@gmail.com

**Project type:** Static marketing site (Next.js SSG) — no backend, auth, database, or real API.

**Stack:** Next.js 16 App Router · Tailwind CSS v4 · TypeScript · Font: Prompt (Google Fonts, Thai + Latin, weights 300/400/500/600/700)

**App (SaaS) URL:** all "ทดลองฟรี / เข้าสู่ระบบ" CTAs link out to `https://app.hublycompany.com`.

**Brand:** Follow the Brand CI below — do NOT deviate on colors / font / radius.

---

## Sitemap
| Page | Path |
| --- | --- |
| Home | `/` |
| Services (Marketing + Tech & AI) | `/services` |
| Products (Hubly SaaS) | `/products` |
| Pricing | `/pricing` |
| Blog | `/blog` |
| Contact | `/contact` |
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |

Nav: Services · Products · Pricing · Blog · Contact + [เข้าสู่ระบบ] + [ทดลองฟรี].

---

## Brand CI (always use — do not deviate)

### Colors (Mood: "Latte" — warm, premium SME, not cold tech blue)
| Token | Hex | Tailwind |
| --- | --- | --- |
| Background (Warm Cream) | `#F9F3EB` | `cream` |
| Card (Warm White) | `#FFFCF9` | `card` |
| Primary (Mocha) | `#8A6A4E` | `mocha` |
| Primary hover | `#7A5A3E` | `mocha-dark` |
| Primary fg (on Mocha) | `#FDFBF9` | `[#FDFBF9]` |
| Foreground (Warm Dark Brown) | `#3C3027` | `ink` |
| Muted fg | `#73665C` | `muted` |
| Accent (Clay) | `#D7A587` | `clay` |
| Success (Sage) | `#6B9A6C` | `sage` |
| Secondary (Beige) | `#F3EBE1` | `beige` |

### Module / pillar accents
- HubDeal: `bg-amber-500/12 text-amber-700`
- HubChat: `bg-rose-400/12 text-rose-700`
- HubStore: `bg-lime-700/12 text-lime-800`
- Tech & AI: `bg-orange-400/25 text-orange-700`

### Radius — soft, rounded everything (base 0.9rem)
`rounded-btn` 0.72rem · `rounded-card` ~1.1rem · `rounded-hero` 1.62rem

---

## Pricing (single source: `app/lib/content.ts`)
- HubDeal ฿2,490/เดือน · HubChat ฿1,990/เดือน · HubStore ฿1,990/เดือน
- Bundle: 2 SaaS = −15% · ครบ 3 SaaS = −20% (computed in `bundleRows()`, rendered by `<BundleTable />` on `/products` + `/pricing`)

## Working agreements
1. Responsive at 375 / 768 / 1280.
2. Brand CI colors only.
3. SSG only — no backend/DB/API; contact form is static (mailto).
4. Sections alternate bg: `cream` ↔ `card`. Section padding `py-20 md:py-28`, container `max-w-6xl mx-auto px-6`.
5. Keep `vercel.json` (`framework: nextjs`) — required for Vercel deploys.
6. Accessible: `aria-label` on icon buttons, semantic HTML.
