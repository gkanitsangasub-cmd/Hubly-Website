import { BASE_URL, COMPANY } from "../lib/site";
export default function ServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          description,
          url: BASE_URL + path,
          provider: {
            "@type": "Organization",
            name: COMPANY.name,
            url: BASE_URL,
          },
          areaServed: { "@type": "Country", name: "Thailand" },
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
