import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Hablemos de tu empresa",
  description: "Cuéntanos qué hace tu equipo hoy que no debería hacer mañana. 30 minutos, sin compromiso. Te decimos qué automatizaríamos primero.",
  openGraph: {
    title: "Contacto — Reserva 30 min | Automatiza tu Empresa",
    description: "Cuéntanos qué hace tu equipo hoy que no debería hacer mañana. 30 minutos, sin compromiso. Te decimos qué automatizaríamos primero.",
    url: "https://www.automatizatuempresa.com/contacto",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto — Reserva 30 min | Automatiza tu Empresa",
    description: "30 minutos, sin compromiso. Te decimos qué automatizaríamos primero en tu empresa.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.automatizatuempresa.com/contacto",
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
