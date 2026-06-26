import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos y condiciones de uso de la web de Automatiza tu Empresa.",
  robots: { index: false, follow: false },
};

export default function Terminos() {
  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Legal</span>
            <h1>Términos <span className="serif">de uso</span>.</h1>
            <p className="lede">Última actualización: junio de 2026</p>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="legal-body">

              <div className="legal-section">
                <h2>1. Objeto y titularidad</h2>
                <p>El presente documento regula las condiciones de uso del sitio web <strong>www.automatizatuempresa.com</strong> (en adelante, "la web"), cuyo titular es <strong>Automatiza tu Empresa</strong>, con domicilio en Gijón, Asturias, España, y email de contacto <a href="mailto:hablemos@automatizatuempresa.com">hablemos@automatizatuempresa.com</a>.</p>
                <p>El acceso y uso de esta web implica la aceptación plena de estos términos. Si no estás de acuerdo, te rogamos que no utilices el sitio.</p>
              </div>

              <div className="legal-section">
                <h2>2. Uso del sitio web</h2>
                <p>Esta web tiene carácter informativo y comercial. Su finalidad es presentar los servicios de automatización con inteligencia artificial que ofrece Automatiza tu Empresa y facilitar el contacto con clientes potenciales.</p>
                <p>El usuario se compromete a:</p>
                <ul>
                  <li>Utilizar la web de forma lícita, ética y de conformidad con el presente aviso.</li>
                  <li>No realizar acciones que dañen, inutilicen, sobrecarguen o deterioren la web o impidan su normal utilización por otros usuarios.</li>
                  <li>No intentar acceder a áreas restringidas del sistema mediante técnicas no autorizadas.</li>
                  <li>Facilitar información veraz al cumplimentar cualquier formulario de contacto.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>3. Propiedad intelectual e industrial</h2>
                <p>Todos los contenidos de esta web — incluyendo textos, imágenes, logotipos, diseño, código fuente y cualquier otro elemento — son propiedad de Automatiza tu Empresa o de sus licenciantes, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.</p>
                <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier parte de esta web sin autorización previa y por escrito de Automatiza tu Empresa, salvo para uso personal y no comercial.</p>
              </div>

              <div className="legal-section">
                <h2>4. Limitación de responsabilidad</h2>
                <p>Automatiza tu Empresa no garantiza la disponibilidad continua e ininterrumpida de la web, ni la ausencia de errores en su contenido. Nos reservamos el derecho a modificar, suspender o interrumpir el acceso a la web en cualquier momento y sin previo aviso.</p>
                <p>No nos hacemos responsables de:</p>
                <ul>
                  <li>Daños producidos por virus u otros elementos dañinos que puedan afectar a tu equipo como consecuencia del acceso a la web.</li>
                  <li>Contenidos de sitios web de terceros enlazados desde esta web.</li>
                  <li>El mal uso de la información contenida en la web por parte de terceros.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>5. Servicios profesionales</h2>
                <p>La información publicada en esta web tiene carácter orientativo y divulgativo. No constituye en ningún caso asesoramiento técnico, legal o de negocio vinculante. Cualquier relación contractual derivada de la contratación de nuestros servicios se regulará por los contratos específicos firmados entre las partes.</p>
              </div>

              <div className="legal-section">
                <h2>6. Política de privacidad y cookies</h2>
                <p>El tratamiento de los datos personales que nos facilites a través de esta web se rige por nuestra <Link href="/politica-de-privacidad">Política de Privacidad</Link>. El uso de cookies se regula en nuestra <Link href="/cookies">Política de Cookies</Link>. Te recomendamos que las consultes.</p>
              </div>

              <div className="legal-section">
                <h2>7. Modificación de los términos</h2>
                <p>Automatiza tu Empresa se reserva el derecho de modificar estos términos en cualquier momento. Los cambios se publicarán en esta página con indicación de la fecha de actualización. El uso continuado de la web tras la publicación de cambios implica la aceptación de los términos modificados.</p>
              </div>

              <div className="legal-section">
                <h2>8. Ley aplicable y jurisdicción</h2>
                <p>Estos términos se rigen por la <strong>legislación española</strong>. Para la resolución de cualquier controversia derivada del uso de esta web, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los <strong>Juzgados y Tribunales de Gijón</strong>, salvo que la normativa aplicable establezca otro fuero imperativo.</p>
              </div>

              <div className="legal-nav">
                <Link href="/politica-de-privacidad" className="btn btn-secondary">Política de privacidad</Link>
                <Link href="/cookies" className="btn btn-secondary">Política de cookies</Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
