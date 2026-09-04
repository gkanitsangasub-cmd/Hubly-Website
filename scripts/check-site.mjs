import assert from "node:assert/strict";
const origin = process.argv[2] || "http://127.0.0.1:3000";
const canonicalBase = "https://hublycompany.com";
const routes = [
  "/",
  "/services",
  "/services/digital-growth",
  "/services/website",
  "/solutions",
  "/solutions/tourism-crm",
  "/pricing",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/blog/scale-sme-with-crm",
  "/blog/facebook-ads-budget",
  "/blog/unified-inbox-line-fb",
  "/blog/ai-website-codebase",
];
const redirects = {
  "/products": "/solutions",
  "/services/marketing": "/services/digital-growth",
  "/services/ai-solution": "/solutions",
  "/pricing/marketing": "/pricing",
  "/pricing/ai-solution": "/solutions#project",
  "/pricing/saas": "/solutions",
};
const pages = new Map();
const titles = new Set();
const descriptions = new Set();
const get = (path, options) =>
  fetch(new URL(path, origin), {
    signal: AbortSignal.timeout(30000),
    ...options,
  });
const attrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]),
  );
for (const path of routes) {
  const response = await get(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)]
    .map((m) => attrs(m[0]))
    .find((a) => a.rel === "canonical")?.href;
  const expectedCanonical =
    path === "/" ? canonicalBase + "/" : canonicalBase + path;
  assert.equal(
    canonical?.replace(/\/$/, ""),
    expectedCanonical.replace(/\/$/, ""),
    "Canonical: " + path,
  );
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "One H1: " + path);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), "Unique title: " + path);
  titles.add(title);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => attrs(m[0]));
  const description = metas.find((m) => m.name === "description")?.content;
  assert.ok(
    description && !descriptions.has(description),
    "Unique description: " + path,
  );
  descriptions.add(description);
  if (!["/privacy", "/terms"].includes(path)) {
    assert.ok(
      !metas.some((m) => m.name === "robots" && /noindex/.test(m.content)),
      "Indexable: " + path,
    );
    assert.ok(
      metas.some((m) => m.property === "og:image"),
      "OG image: " + path,
    );
    assert.ok(
      metas.some((m) => m.name === "twitter:card"),
      "Twitter card: " + path,
    );
  }
  assert.ok(
    !/Hubly SaaS|HubChat|HubDeal|HubStore|app\.hublycompany\.com/.test(html),
    "Retired offers: " + path,
  );
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ))
    JSON.parse(match[1]);
  pages.set(path, html);
}
let links = 0;
for (const [path, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(
      match[1].replaceAll("&amp;", "&"),
      new URL(path, origin),
    );
    if (url.origin !== new URL(origin).origin) continue;
    assert.ok(
      pages.has(url.pathname),
      "Internal link " + path + " -> " + url.pathname,
    );
    if (url.hash)
      assert.ok(
        pages
          .get(url.pathname)
          .includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'),
        "Anchor: " + url.pathname + url.hash,
      );
    links++;
  }
}
for (const [from, to] of Object.entries(redirects)) {
  const response = await get(from, { redirect: "manual" });
  assert.equal(response.status, 308, "Redirect: " + from);
  const target = new URL(response.headers.get("location"), origin);
  assert.equal(target.pathname + target.hash, to, "Destination: " + from);
}
const sitemap = await (await get("/sitemap.xml")).text();
for (const path of routes.filter((p) => !["/privacy", "/terms"].includes(p)))
  assert.ok(
    sitemap.includes(canonicalBase + (path === "/" ? "" : path)),
    "Sitemap: " + path,
  );
for (const path of Object.keys(redirects))
  assert.ok(
    !sitemap.includes(canonicalBase + path + "<"),
    "Retired URL in sitemap: " + path,
  );
assert.ok(
  (await (await get("/robots.txt")).text()).includes(
    canonicalBase + "/sitemap.xml",
  ),
);
const media = [
  ...new Set(
    [...pages.values()].flatMap((html) =>
      [...html.matchAll(/(?:src|poster)="(\/hero\/[^"]+)"/g)].map((m) => m[1]),
    ),
  ),
];
for (const path of media)
  assert.equal(
    (await get(path, { method: "HEAD" })).status,
    200,
    "Media: " + path,
  );
assert.equal(
  media.filter((p) => p.endsWith(".mp4")).length,
  6,
  "All six original videos used",
);
for (const name of ["products", "pipeline", "dashboard"]) {
  const screenshot = await get("/work/tourism-crm/" + name + ".jpg");
  assert.equal(screenshot.status, 200, "CRM screenshot: " + name);
  assert.ok(screenshot.headers.get("content-type")?.includes("image/jpeg"));
}
assert.ok(pages.get("/solutions/tourism-crm").includes("SoftwareApplication"));
assert.equal(
  (await get("/blog/nonexistent-article")).status,
  404,
  "Unknown blog article",
);
console.log(
  "PASS: " +
    routes.length +
    " pages, " +
    links +
    " internal links/anchors, 6 redirects, " +
    media.length +
    " media files, metadata, JSON-LD, sitemap and 404.",
);
