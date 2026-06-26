"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <div className="nav-inner">
          <Link href="/" className="logo">
            <Image src="/assets/logo.svg" alt="Automatiza" width={30} height={30} />
            Automatiza<span className="dot">.</span>
          </Link>

          <div className="nav-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <Link href="/contacto" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: "14px" }}>
              Reservar 30 min
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </div>

          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        <div className={`nav-mobile${open ? " open" : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="nav-mobile-ctas">
            <Link href="/contacto" className="btn btn-primary" onClick={() => setOpen(false)} style={{ justifyContent: "center" }}>
              Reservar 30 min
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
