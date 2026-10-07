"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/**
 * Mide los clics de conversión mediante un único listener delegado en el
 * documento, en lugar de añadir un onClick a cada CTA repartido por el sitio.
 *
 * De este modo cualquier enlace nuevo queda medido automáticamente y no hay que
 * tocar los componentes que ya funcionan.
 */
export default function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    function alHacerClic(e: MouseEvent) {
      const destino = e.target as Element | null;
      const enlace = destino?.closest?.("a");
      if (!enlace) return;

      const href = enlace.getAttribute("href") ?? "";
      const etiqueta = (enlace.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 60);

      if (href.includes("wa.me")) {
        track("whatsapp_click", { origen: pathname });
      } else if (href === "/contacto" || href.startsWith("/contacto?") || href.startsWith("/contacto#")) {
        track("cta_contacto", { origen: pathname, etiqueta });
      } else if (href.startsWith("tel:")) {
        track("telefono_click", { origen: pathname });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { origen: pathname });
      }
    }

    document.addEventListener("click", alHacerClic);
    return () => document.removeEventListener("click", alHacerClic);
  }, [pathname]);

  return null;
}
