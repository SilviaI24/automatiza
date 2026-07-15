import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos reales de automatización con IA en empresas",
  description: "Administración de fincas, inmobiliaria y bufetes: casos reales de automatización con IA que liberan a los equipos de la gestión operativa.",
  openGraph: {
    title: "Casos reales de automatización con IA | Automatiza tu Empresa",
    description: "Administración de fincas, inmobiliaria y bufetes: casos reales de automatización con IA que liberan a los equipos de la gestión operativa.",
    url: "https://www.automatizatuempresa.com/casos",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos reales de automatización con IA | Automatiza tu Empresa",
    description: "Fincas, inmobiliaria, bufetes: casos reales de IA que liberan al equipo de la gestión operativa.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.automatizatuempresa.com/casos",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.automatizatuempresa.com" },
    { "@type": "ListItem", position: 2, name: "Casos reales", item: "https://www.automatizatuempresa.com/casos" },
  ],
};

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
