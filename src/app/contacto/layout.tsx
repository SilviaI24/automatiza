import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Reserva tu diagnóstico de automatización",
  description: "¿Qué proceso te consume más tiempo? 30 minutos para descubrir qué automatizaríamos primero en tu empresa. Sin compromiso.",
  openGraph: {
    title: "Contacto — Reserva 30 min | Automatiza tu Empresa",
    description: "¿Qué proceso te consume más tiempo? 30 minutos para descubrir qué automatizaríamos primero en tu empresa. Sin compromiso.",
    url: "https://www.automatizatuempresa.com/contacto",
  },
  alternates: {
    canonical: "https://www.automatizatuempresa.com/contacto",
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
