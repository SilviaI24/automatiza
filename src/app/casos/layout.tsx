import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de automatización con IA en empresas",
  description: "Administración de fincas, inmobiliaria y bufetes: casos reales de automatización con IA que liberan a los equipos de la gestión operativa.",
  openGraph: {
    title: "Casos de automatización con IA en empresas | Automatiza tu Empresa",
    description: "Administración de fincas, inmobiliaria y bufetes: casos reales de automatización con IA que liberan a los equipos de la gestión operativa.",
    url: "https://www.automatizatuempresa.com/casos",
  },
  alternates: {
    canonical: "https://www.automatizatuempresa.com/casos",
  },
};

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
