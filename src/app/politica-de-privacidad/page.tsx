import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Automatiza tu Empresa. Cómo recogemos, usamos y protegemos tus datos personales conforme al RGPD.",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Legal</span>
            <h1>Política de <span className="serif">privacidad</span>.</h1>
            <p className="lede">Última actualización: junio de 2026</p>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="legal-body">

              <div className="legal-section">
                <h2>1. Responsable del tratamiento</h2>
                <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y de la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD), te informamos de que el responsable del tratamiento de tus datos es:</p>
                <div className="legal-card">
                  <p><strong>Responsable:</strong> Danna Andrade Mera</p>
                  <p><strong>NIF:</strong> 51011371Q</p>
                  <p><strong>Nombre comercial:</strong> Automatiza tu Empresa</p>
                  <p><strong>Dirección:</strong> Gijón, Asturias, España</p>
                  <p><strong>Email:</strong> <a href="mailto:hablemos@automatizatuempresa.com">hablemos@automatizatuempresa.com</a></p>
                  <p><strong>Teléfono:</strong> <a href="tel:+34653134705">+34 653 134 705</a></p>
                  <p><strong>Web:</strong> www.automatizatuempresa.com</p>
                </div>
              </div>

              <div className="legal-section">
                <h2>2. Datos que recogemos</h2>
                <p>Recogemos los datos que tú mismo nos proporcionas a través del formulario de contacto de esta web:</p>
                <ul>
                  <li>Nombre y apellidos</li>
                  <li>Nombre de la empresa</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Tamaño del equipo y sector de actividad</li>
                  <li>Descripción del proceso o consulta que nos trasladas</li>
                  <li>Preferencia horaria para la llamada (opcional)</li>
                </ul>
                <p>No recogemos datos especialmente sensibles, ni datos de menores de 14 años. No utilizamos formularios de registro ni cuentas de usuario.</p>
              </div>

              <div className="legal-section">
                <h2>3. Finalidad del tratamiento</h2>
                <p>Tratamos tus datos exclusivamente para:</p>
                <ul>
                  <li><strong>Atender tu consulta comercial</strong> y darte respuesta sobre nuestros servicios de automatización e inteligencia artificial.</li>
                  <li><strong>Gestionar la relación comercial</strong> que pueda derivarse del contacto inicial, incluyendo el envío de propuestas o presupuestos.</li>
                  <li><strong>Comunicaciones de seguimiento</strong> relacionadas con tu solicitud, nunca con fines publicitarios no solicitados.</li>
                </ul>
                <p>No utilizamos tus datos para elaborar perfiles automatizados ni para tomar decisiones automáticas que te afecten.</p>
              </div>

              <div className="legal-section">
                <h2>4. Base jurídica del tratamiento</h2>
                <p>La base jurídica que legitima el tratamiento es el <strong>consentimiento expreso</strong> que otorgas al marcar la casilla de aceptación del formulario de contacto (art. 6.1.a RGPD).</p>
                <p>Para la gestión de la relación comercial precontractual, la base es la <strong>ejecución de medidas precontractuales</strong> a petición del interesado (art. 6.1.b RGPD).</p>
              </div>

              <div className="legal-section">
                <h2>5. Conservación de los datos</h2>
                <p>Conservaremos tus datos durante el tiempo necesario para gestionar tu solicitud y mantener la relación comercial. Una vez finalizada esta relación, los datos se bloquearán y conservarán durante los plazos legalmente establecidos para atender posibles responsabilidades, tras lo cual serán eliminados definitivamente.</p>
                <p>Si no existe relación comercial activa, los datos de contacto se eliminarán pasados <strong>2 años</strong> desde el último contacto.</p>
              </div>

              <div className="legal-section">
                <h2>6. Destinatarios y transferencias</h2>
                <p>Tus datos no se ceden a terceros salvo:</p>
                <ul>
                  <li>Proveedores de servicios tecnológicos necesarios para el funcionamiento de la web (hosting, envío de emails), que actúan como encargados del tratamiento bajo contrato y con las garantías adecuadas.</li>
                  <li>Obligación legal o requerimiento de autoridades competentes.</li>
                </ul>
                <p>La infraestructura utilizada se encuentra en la <strong>Unión Europea</strong>. No realizamos transferencias internacionales de datos a países sin nivel de protección adecuado.</p>
              </div>

              <div className="legal-section">
                <h2>7. Tus derechos</h2>
                <p>Puedes ejercer en cualquier momento los siguientes derechos sobre tus datos personales:</p>
                <ul>
                  <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos.</li>
                  <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                  <li><strong>Supresión:</strong> solicitar que eliminemos tus datos ("derecho al olvido").</li>
                  <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento en determinadas circunstancias.</li>
                  <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y de uso común.</li>
                  <li><strong>Oposición:</strong> oponerte al tratamiento en las circunstancias previstas por la ley.</li>
                  <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
                </ul>
                <p>Para ejercer estos derechos, escríbenos a <a href="mailto:hablemos@automatizatuempresa.com">hablemos@automatizatuempresa.com</a> indicando tu solicitud y adjuntando una copia de tu DNI o documento identificativo equivalente. Responderemos en el plazo máximo de un mes.</p>
              </div>

              <div className="legal-section">
                <h2>8. Reclamación ante la AEPD</h2>
                <p>Si consideras que el tratamiento de tus datos no se ajusta a la normativa vigente, tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>, autoridad de control competente en España:</p>
                <p><a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a> · C/ Jorge Juan, 6 · 28001 Madrid</p>
              </div>

              <div className="legal-section">
                <h2>9. Seguridad</h2>
                <p>Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a acceso no autorizado, pérdida, alteración o divulgación. La web utiliza conexión cifrada HTTPS en todo momento.</p>
              </div>

              <div className="legal-section">
                <h2>10. Cambios en esta política</h2>
                <p>Podemos actualizar esta política de privacidad para adaptarla a cambios legislativos o en nuestros servicios. La fecha de "última actualización" indica cuándo se realizó la última revisión. Te recomendamos consultar esta página periódicamente.</p>
              </div>

              <div className="legal-nav">
                <Link href="/cookies" className="btn btn-secondary">Política de cookies</Link>
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
