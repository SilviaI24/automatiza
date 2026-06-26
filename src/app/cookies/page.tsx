import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Automatiza tu Empresa. Qué cookies usamos y cómo puedes gestionarlas.",
  robots: { index: false, follow: false },
};

export default function Cookies() {
  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Legal</span>
            <h1>Política de <span className="serif">cookies</span>.</h1>
            <p className="lede">Última actualización: junio de 2026</p>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="legal-body">

              <div className="legal-section">
                <h2>1. ¿Qué son las cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una página web. Permiten que el sitio recuerde información sobre tu visita, lo que facilita la navegación y hace que la web funcione correctamente.</p>
                <p>Esta web es propiedad de <strong>Automatiza tu Empresa</strong> (en adelante, "nosotros"). Esta política explica qué cookies utilizamos, para qué y cómo puedes controlarlas.</p>
              </div>

              <div className="legal-section">
                <h2>2. Cookies que utilizamos</h2>
                <p>Esta web utiliza únicamente cookies <strong>técnicas o estrictamente necesarias</strong>. No utilizamos cookies de seguimiento, publicidad ni análisis de terceros.</p>

                <div className="legal-table-wrap">
                  <table className="legal-table">
                    <thead>
                      <tr>
                        <th>Cookie</th>
                        <th>Tipo</th>
                        <th>Duración</th>
                        <th>Finalidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>__Host-next-auth</code></td>
                        <td>Técnica</td>
                        <td>Sesión</td>
                        <td>Gestión de la sesión de navegación del framework Next.js</td>
                      </tr>
                      <tr>
                        <td><code>_vercel_no_cache</code></td>
                        <td>Técnica</td>
                        <td>Sesión</td>
                        <td>Control de caché del servidor de la aplicación web</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>Estas cookies son necesarias para el funcionamiento básico de la web y no requieren tu consentimiento previo, según lo establecido en el art. 22.2 de la LSSI.</p>
              </div>

              <div className="legal-section">
                <h2>3. Cookies de terceros</h2>
                <p>Actualmente esta web <strong>no carga cookies de terceros</strong> (Google Analytics, Meta Pixel, herramientas de chat externas, etc.).</p>
                <p>Si en el futuro incorporamos servicios de terceros que impliquen el uso de cookies, actualizaremos esta política y te solicitaremos tu consentimiento cuando sea necesario.</p>
              </div>

              <div className="legal-section">
                <h2>4. Cómo gestionar las cookies</h2>
                <p>Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Ten en cuenta que algunas funciones básicas de la web pueden dejar de funcionar correctamente si las deshabilitas todas.</p>
                <p>Instrucciones para los principales navegadores:</p>
                <ul>
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                  <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos del sitio web</li>
                  <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>5. Más información</h2>
                <p>Para cualquier duda sobre el uso de cookies en esta web, puedes contactarnos en <a href="mailto:hablemos@automatizatuempresa.com">hablemos@automatizatuempresa.com</a>.</p>
                <p>Para información general sobre cookies y privacidad en internet, puedes consultar la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos (AEPD)</a>.</p>
              </div>

              <div className="legal-nav">
                <Link href="/politica-de-privacidad" className="btn btn-secondary">Política de privacidad</Link>
                <Link href="/terminos" className="btn btn-secondary">Términos de uso</Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
