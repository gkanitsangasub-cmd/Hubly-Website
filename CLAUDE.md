# Hubly Marketing Website

**Project type:** Static marketing site (Next.js SSG) — no backend, auth, or database.

**Stack:** Next.js 16 App Router · Tailwind CSS v4 · TypeScript · Font: Prompt (Google Fonts, Thai + Latin, weights 300/400/500/600/700)

**Domain:** hublycompany.com → links out to app.hublycompany.com for login/signup.

**Brand:** Follow the Brand CI below — do NOT deviate on colors / font / radius.

**Pages:** `/` · `/pricing` · `/features`

---

## Brand CI (always use — do not deviate)

### Colors
| Token | Hex | Tailwind |
| --- | --- | --- |
| Primary (Mocha) | `#8A6A4E` | `mocha` |
| Primary hover | `#7A5A3E` | `mocha-dark` |
| Background (Cream) | `#F9F3EB` | `cream` |
| Card (Warm White) | `#FFFCF9` | `card` |
| Text primary | `#3C3027` | `ink` |
| Text muted | `#73665C` | `muted` |
| Accent (Clay) | `#D7A587` | `clay` |
| Success (Sage) | `#6B9A6C` | `sage` |
| Secondary (Beige) | `#F3EBE1` | `beige` |

### Module accent colors
- HubDeal: `bg-amber-500/12 text-amber-700`
- HubChat: `bg-rose-400/12 text-rose-700`
- HubStore: `bg-lime-700/12 text-lime-800`
- Automation: `bg-stone-500/12 text-stone-700`
- AI: `bg-orange-400/25`

### Border radius (soft, "premium coffee shop")
- Button / input: `0.72rem` (`rounded-btn`)
- Card: `0.9rem–1.26rem` (`rounded-card`)
- Hero card: `1.62rem+` (`rounded-hero`)

### Mood
"Latte" — inspired by Linear.app & Vercel.com: clean, modern, but warmer.

---

## Working agreements
1. Every page responsive at 375px / 768px / 1280px.
2. Use Brand CI colors only — never colors outside the palette.
3. Every external (app) link points to `https://app.hublycompany.com`.
4. SSG only — no auth, database, API calls, real forms, blog, or dark mode.
5. Sections alternate bg: `#F9F3EB` (cream) and `#FFFCF9` (card).
6. Card: `border border-ink/8` + subtle shadow.
7. Primary button: `bg-mocha text-[#FDFBF9] rounded-btn hover:bg-mocha-dark`.
8. Section padding: `py-20 md:py-28`. Max content width: `max-w-6xl mx-auto px-6`.
9. Accessible: `aria-label` on icon buttons, semantic HTML.

## App links
- Sign up / trial: `https://app.hublycompany.com/signup`
- Login: `https://app.hublycompany.com/login`
