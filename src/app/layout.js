import ClientLayout from "./ClientLayout";
import "./globals.css";
import { ContextProvider } from "@/context/myContext";

export const metadata = {
  title:
    "FrostMasters - Washing Machine, AC & Fridge Repair | Eranakulam 6282450300",
  description:
    "Expert washing machine, AC and fridge repair in Eranakulam (6282450300). Genuine parts, skilled technicians. www.frostmasters.com",
  keywords:
    "washing machine service center in Eranakulam, washing machine service in Eranakulam, washing machine repair in Eranakulam, washing machine service near me, washing machine service in Eranakulam, fridge service center in Eranakulam, ac service in Eranakulam, ac repair in Eranakulam, service center in Eranakulam, FrostMasters, Eranakulam 6282450300, Eranakulam 6282450300, same day appliance repair",
  authors: [{ name: "FrostMasters Team", url: "https://www.FrostMasters.com" }],
  creator: "FrostMasters",
  publisher: "FrostMasters",
  metadataBase: new URL("https://www.frostmasters.com"),
  alternates: {
    canonical: "https://www.frostmasters.com/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title:
      "FrostMasters - Washing Machine, AC & Fridge Repair | Eranakulam 6282450300",
    description:
      "Expert washing machine, AC and fridge repair in Eranakulam (6282450300). Same-day doorstep service. www.FrostMasters.com",
    url: "https://www.FrostMasters.com",
    siteName: "FrostMasters - Home Appliance Repair",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.FrostMasters.com/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "FrostMasters - Washing Machine, AC, Fridge Repair in Eranakulam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FrostMasters - Washing Machine, AC & Fridge Repair | Eranakulam",
    description:
      "Same-day washing machine, AC and fridge repair in Eranakulam. Expert technicians, genuine parts. www.FrostMasters.com",
    creator: "@FrostMasters",
    images: ["https://www.FrostMasters.com/logo1.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="https://www.FrostMasters.com/favicon.ico" />
        <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Julius+Sans+One&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.FrostMasters.com/#business",
              name: "FrostMasters - Washing Machine, AC & Fridge Repair",
              image: "https://www.FrostMasters.com/logo1.webp",
              url: "https://www.FrostMasters.com",
              description:
                "Expert washing machine service, AC repair and fridge repair in Eranakulam (6282450300).",
              telephone: "+916282450300",
              priceRange: "₹400 to ₹500",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Eranakulam ",
                addressLocality: "Eranakulam",
                addressRegion: "Kerala",
                postalCode: "682011",
                addressCountry: "IN",
              },
              areaServed: [
                { "@type": "City", name: "Eranakulam" },
                { "@type": "City", name: "Kochi" },
                { "@type": "Place", name: "Kakkanad" },
                { "@type": "Place", name: "Edappally" },
                { "@type": "Place", name: "Vyttila" },
                { "@type": "Place", name: "Palarivattom" },
                { "@type": "Place", name: "Kaloor" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "21:00",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61579389825163",
                "https://www.instagram.com/FrostMasters/",
                "https://www.youtube.com/channel/UCwRXCFhCSGczfE7tA5mos5g",
                "https://www.linkedin.com/in/FrostMasters-FrostMasters-751672380/",
              ],
            }),
          }}
        ></script>
      </head>
      <body suppressHydrationWarning>
        <ContextProvider>
          <ClientLayout>{children}</ClientLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
