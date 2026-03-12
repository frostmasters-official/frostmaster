import { notFound } from "next/navigation";
import serviceData from "../../../components/data/serviceData";
import Script from "next/script";
import ServiceContent from "./ServiceContent";
import { PRIMARY_PHONE } from "@/data/contact";

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return { title: "Service Not Found" };

  const url = `https://www.Frost Masters.com/services/${slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url,
      siteName: "Frost Masters",
      images: [
        {
          url: service.ogImage
            ? `https://www.Frost Masters.com${service.ogImage}`
            : "https://www.Frost Masters.com/logo.webp",
          width: 1200,
          height: 630,
          alt: `${service.title} Repair - Frost Masters`,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [
        service.ogImage
          ? `https://www.Frost Masters.com${service.ogImage}`
          : "https://www.Frost Masters.com/logo.webp",
      ],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return notFound();

  const url = `https://www.Frost Masters.com/services/${slug}`;

  const faqSchema =
    Array.isArray(service.faq) && service.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.title,
            description: service.seoDescription,
            provider: {
              "@type": "LocalBusiness",
              name: "Frost Masters",
              url: "https://www.Frost Masters.com",
              telephone: PRIMARY_PHONE,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600119",
                addressCountry: "IN",
              },
            },
            areaServed: [
              { "@type": "Place", name: "Chennai" },
              { "@type": "Place", name: "Coimbatore" },
            ],
            url,
          }),
        }}
      />
      {faqSchema && (
        <Script
          id="service-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ServiceContent service={service} />
    </>
  );
}
