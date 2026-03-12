import { notFound } from "next/navigation";
import serviceData from "../../../../components/data/serviceData";
import Script from "next/script";
import ServiceContent from "../ServiceContent";
import {
  PRIMARY_PHONE,
  SERVICE_CITIES,
  parseServiceInCitySlug,
  getServiceInCityPath,
  getServiceInAreaPath,
} from "@/data/contact";
import { locations } from "@/data/locations";

const validCitySlugs = SERVICE_CITIES.map((c) => c.slug);
const cityNameBySlug = Object.fromEntries(
  SERVICE_CITIES.map((c) => [c.slug, c.name]),
);

function resolveLocation(mainCitySlug, locationSlug) {
  if (validCitySlugs.includes(locationSlug)) {
    if (mainCitySlug !== locationSlug) return null;
    return {
      type: "city",
      name: cityNameBySlug[locationSlug],
      path: getServiceInCityPath,
    };
  }
  const cityAreas = locations[mainCitySlug];
  const area = cityAreas && cityAreas[locationSlug];
  if (area) {
    const areaName = area.name || locationSlug.replace(/-/g, " ");
    return {
      type: "area",
      name: `${areaName}, ${cityNameBySlug[mainCitySlug]}`,
      path: getServiceInAreaPath,
    };
  }
  return null;
}

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(serviceData);
  const cityOnly = serviceSlugs.flatMap((serviceSlug) =>
    validCitySlugs.map((citySlug) => ({
      slug: citySlug,
      serviceCitySlug: `${serviceSlug}-service-in-${citySlug}`,
    })),
  );
  const areaPages = [];
  for (const citySlug of validCitySlugs) {
    const areas = locations[citySlug] ? Object.keys(locations[citySlug]) : [];
    for (const serviceSlug of serviceSlugs) {
      for (const areaSlug of areas) {
        areaPages.push({
          slug: citySlug,
          serviceCitySlug: `${serviceSlug}-service-in-${areaSlug}`,
        });
      }
    }
  }
  return [...cityOnly, ...areaPages];
}

export async function generateMetadata({ params }) {
  const { slug: mainCitySlug, serviceCitySlug } = await params;
  const parsed = parseServiceInCitySlug(serviceCitySlug);
  if (!parsed) return { title: "Service Not Found" };
  const { serviceSlug, citySlug: locationSlug } = parsed;
  const resolved = resolveLocation(mainCitySlug, locationSlug);
  if (!resolved) return { title: "Service Not Found" };
  const service = serviceData[serviceSlug];
  if (!service) return { title: "Service Not Found" };

  const url =
    resolved.type === "city"
      ? `https://www.Frost Masters.com${getServiceInCityPath(serviceSlug, mainCitySlug)}`
      : `https://www.Frost Masters.com${getServiceInAreaPath(serviceSlug, mainCitySlug, locationSlug)}`;
  const title = `${service.title} Service in ${resolved.name} | Frost Masters`;
  const description = `${service.title} repair and service in ${resolved.name}. ${service.seoDescription}. Call for same-day booking.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Frost Masters",
      images: [
        {
          url: service.ogImage
            ? `https://www.Frost Masters.com${service.ogImage}`
            : "https://www.Frost Masters.com/logo.webp",
          width: 1200,
          height: 630,
          alt: `${service.title} Service in ${resolved.name} - Frost Masters`,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        service.ogImage
          ? `https://www.Frost Masters.com${service.ogImage}`
          : "https://www.Frost Masters.com/logo.webp",
      ],
    },
  };
}

export default async function ServiceCityPage({ params }) {
  const { slug: mainCitySlug, serviceCitySlug } = await params;
  const parsed = parseServiceInCitySlug(serviceCitySlug);
  if (!parsed) return notFound();
  const { serviceSlug, citySlug: locationSlug } = parsed;
  const resolved = resolveLocation(mainCitySlug, locationSlug);
  if (!resolved) return notFound();
  const service = serviceData[serviceSlug];
  if (!service) return notFound();

  const url =
    resolved.type === "city"
      ? `https://www.Frost Masters.com${getServiceInCityPath(serviceSlug, mainCitySlug)}`
      : `https://www.Frost Masters.com${getServiceInAreaPath(serviceSlug, mainCitySlug, locationSlug)}`;

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
      <Script
        id="service-city-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: `${service.title} Repair`,
            description: `${service.title} repair and service in ${resolved.name}.`,
            provider: {
              "@type": "LocalBusiness",
              name: "Frost Masters",
              url: "https://www.Frost Masters.com",
              telephone: PRIMARY_PHONE,
              address: {
                "@type": "PostalAddress",
                addressLocality: resolved.name,
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
            },
            areaServed: { "@type": "Place", name: resolved.name },
            url,
          }),
        }}
      />
      {faqSchema && (
        <Script
          id="service-city-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ServiceContent service={service} cityName={resolved.name} />
    </>
  );
}
