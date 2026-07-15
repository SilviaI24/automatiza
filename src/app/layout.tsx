import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});


const BASE_URL = "https://www.automatizatuempresa.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Automatización con IA para empresas | Automatiza tu Empresa",
    template: "%s | Automatiza tu Empresa",
  },
  description:
    "Agentes IA, automatización low code y CRM inteligente a medida para empresas. Reserva 30 min y descubre qué automatizaríamos en tu operación.",
  keywords: [
    "automatización empresarial con IA",
    "agentes IA para empresas",
    "automatizar procesos empresariales",
    "automatización low code",
    "CRM inteligente España",
    "agentes de voz empresarial",
    "automatización de procesos Asturias",
  ],
  authors: [{ name: "Automatiza tu Empresa" }],
  creator: "Automatiza tu Empresa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Automatización con IA para empresas | Automatiza tu Empresa",
    description:
      "Agentes IA, automatización low code y CRM inteligente a medida para empresas. Reserva 30 min y descubre qué automatizaríamos en tu operación.",
    url: BASE_URL,
    siteName: "Automatiza tu Empresa",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Automatiza tu Empresa — Agentes IA y Automatización de Procesos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización con IA para empresas | Automatiza tu Empresa",
    description:
      "Agentes IA, automatización low code y CRM inteligente. Reserva 30 min y descubre qué automatizaríamos en tu empresa.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Automatiza tu Empresa",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/assets/logo.svg`,
      },
      email: "hablemos@automatizatuempresa.com",
      areaServed: "ES",
      description:
        "Automatización empresarial con IA: agentes de voz, agentes conversacionales, automatización low code y CRM inteligente para empresas en España.",
      knowsAbout: [
        "Automatización de procesos empresariales",
        "Agentes de inteligencia artificial",
        "CRM inteligente",
        "Low code",
        "Customer journey",
      ],
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${BASE_URL}/#business`,
      name: "Automatiza tu Empresa",
      url: BASE_URL,
      image: `${BASE_URL}/og.png`,
      telephone: "+34653134705",
      email: "hablemos@automatizatuempresa.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gijón",
        addressRegion: "Asturias",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.5453,
        longitude: -5.6615,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      priceRange: "€€€",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de automatización con IA",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auditoría de procesos" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatización low code" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agentes conversacionales y de voz" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM inteligente" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software a medida" } },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
