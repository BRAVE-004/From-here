import { siteDescription, siteUrl, ticketUrl } from "@/lib/site";

const description = siteDescription;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "FROM HERE",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/icon.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "FROM HERE Conference",
      description,
      inLanguage: "en-NG",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      name: "FROM HERE Conference 2026",
      alternateName: [
        "From Here Africa",
        "From Here Nigeria",
        "From Here Uli Anambra",
      ],
      url: `${siteUrl}/`,
      description,
      startDate: "2026-12-05T09:00:00+01:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: [`${siteUrl}/og-image.jpg`, `${siteUrl}/images/hero.webp`],
      location: {
        "@type": "Place",
        name: "COOU Uli Campus",
        address: {
          "@type": "PostalAddress",
          streetAddress: "COOU Uli Campus",
          addressLocality: "Uli",
          addressRegion: "Anambra",
          addressCountry: "NG",
        },
      },
      organizer: { "@id": `${siteUrl}/#organization` },
      offers: {
        "@type": "Offer",
        url: ticketUrl,
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
