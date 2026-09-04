# HublyCompany Website

Static marketing website for HublyCompany — Digital Growth & Business Solutions Partner.

## Stack and local use

Next.js 16.2.9 App Router, React 19, TypeScript, Tailwind CSS 4, Prompt and Framer Motion.

- `npm install`
- `npm run dev` — local preview
- `npm run build` — production compilation, type checking and prerendering
- `npm start` — serve the production build
- `node scripts/check-site.mjs http://127.0.0.1:3000` — HTTP checks for pages, SEO metadata, internal links, media and legacy redirects

There is no business backend, authentication, database or payment processing. Quote CTAs open the user's email application; they do not submit or store enquiries.

## Content sources

Content follows the September 2026 Company Profile:
https://www.canva.com/design/DAHTjyJq9SI/kcIeP02Pyz1NbJcOJcO4zw/edit

- `app/lib/services.ts`: the three service areas, four Business Solutions, and four working steps.
- `app/lib/marketing-services.ts`: the eight monthly rates, Growth packages, comparison and FAQ.
- `app/lib/site.ts`: brand, contact details, navigation, canonical URLs and quote links.
- `app/lib/content.ts`: editorial articles; existing article URLs retained.
- `app/lib/tourism-crm.ts`: Hubly Tourism features, screenshot descriptions, FAQ and demo contact link, based on the production UI and its guide inspected with the owner's permission.

Growth packages start at THB 17,900 / 32,900 / 52,900 per month. All exclude ad spend. The rate selector adds standalone monthly services; it does not calculate package prices or discounts. Custom projects are scoped and quoted separately.

## Routes

- `/` — company overview
- `/services` — three service areas
- `/services/digital-growth` — monthly Digital Growth services
- `/services/website` — Website Development, Website Care and SEO
- `/solutions` — Business Automation, AI, Custom Business Systems and Website Development
- `/solutions/tourism-crm` — featured tourism CRM, real screenshot gallery with enlargement, workflow and demo contact CTA
- `/pricing` — Growth packages, comparison, rate selector and FAQ
- `/blog`, `/blog/[slug]` — four articles
- `/contact`, `/privacy`, `/terms`

Permanent redirects in `next.config.ts` preserve access from the former Products, SaaS pricing, Marketing and AI service/pricing URLs. These old URLs are excluded from the sitemap.

## Design and SEO

Keep the original warm cream/mocha palette, Prompt typeface, rounded cards, grain textures and video assets.
All six original videos remain: home, pillar, marketing, AI, products (now Website), and contact.

Indexable pages include canonical URLs, unique titles and descriptions, Open Graph/Twitter metadata and one H1. Structured data covers Organization, Service, FAQPage, BlogPosting and BreadcrumbList. Privacy and Terms retain noindex. The sitemap lists current routes only. No ranking or rich-result appearance is guaranteed by metadata.

Deploy on Vercel using the existing `vercel.json`. No additional environment variables are required.

## Tourism CRM portfolio imagery

`public/work/tourism-crm/` contains three cropped screenshots captured on September 4, 2026 from the owner's demo workspace: Products, Pipeline and Dashboard. Account controls and personal details are outside the captured regions. Pipeline and Dashboard show an empty selected date range; captions state this explicitly. The screenshots are evidence of the interface, not customer results. Do not add fabricated metrics, customer endorsements or production login links. The marketing page uses the name Hubly Tourism; the production application's UI is unchanged. Demo buttons open an email draft or telephone link, and no enquiry is sent automatically.
