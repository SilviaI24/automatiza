"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1b3a6b] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-[#1b3a6b] text-lg leading-tight">
            automatiza<span className="text-[#2563eb]">tuempresa</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-[#1b3a6b] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contacto"
            className="px-5 py-2 text-sm font-semibold bg-[#1b3a6b] text-white rounded-lg hover:bg-[#152d54] transition-colors"
          >
            Auditoría gratuita
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#1b3a6b]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 text-sm font-semibold bg-[#1b3a6b] text-white rounded-lg text-center"
          >
            Auditoría gratuita
          </a>
        </div>
      )}
    </header>
  );
}
