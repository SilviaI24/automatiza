import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo" style={{ color: "var(--paper)" }}>
              <Image src="/assets/logo.svg" alt="Automatiza" width={30} height={30} />
              Automatiza<span className="dot">.</span>
            </Link>
            <p>Diseñamos agentes IA y sistemas de automatización a medida para empresas que quieren operar con menos fricción. Trabajamos desde Gijón con clientes de toda España.</p>
          </div>
          <div>
            <p className="foot-label">Soluciones</p>
            <ul>
              <li><Link href="/servicios/agentes-de-voz">Agentes conversacionales y de voz</Link></li>
              <li><Link href="/servicios/automatizacion-low-code">Automatización de flujos</Link></li>
              <li><Link href="/servicios/crm-inteligente">CRM inteligente</Link></li>
              <li><Link href="/servicios#agentico">Sistemas a medida</Link></li>
            </ul>
          </div>
          <div>
            <p className="foot-label">Empresa</p>
            <ul>
              <li><Link href="/casos">Casos reales</Link></li>
              <li><Link href="/nosotros">Quiénes somos</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <p className="foot-label">Contacto</p>
            <ul>
              <li><a href="mailto:hablemos@automatizatuempresa.com">hablemos@automatizatuempresa.com</a></li>
              <li><a href="tel:+34653134705">+34 653 134 705</a></li>
              <li><a href="https://www.linkedin.com/company/automatiza-tuempresa/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 Automatiza tu empresa · Todos los derechos reservados</div>
          <div className="links">
            <Link href="/politica-de-privacidad">Política de privacidad</Link>
            <Link href="/terminos">Términos</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
