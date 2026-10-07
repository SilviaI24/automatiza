type ParametrosEvento = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (comando: "event", nombre: string, parametros?: ParametrosEvento) => void;
  }
}

/**
 * Envía un evento a GA4.
 *
 * No hace nada si gtag todavía no ha cargado o si el navegador lo bloquea, así
 * que es seguro llamarla desde cualquier sitio sin comprobaciones previas.
 *
 * No se registran datos personales: solo el tipo de acción y la página desde la
 * que se produjo.
 */
export function track(nombre: string, parametros: ParametrosEvento = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", nombre, parametros);
}
