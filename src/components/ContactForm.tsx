"use client";

import { useState } from "react";
import { Send, CalendarCheck, CheckCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");

    // TODO: replace with your actual form endpoint (e.g. Resend, Formspree, Make webhook)
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-emerald-500" />
          </div>
          <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
            ¡Mensaje recibido!
          </h3>
          <p className="text-slate-500">
            Nos pondremos en contacto contigo en menos de 24 horas para
            coordinar tu auditoría gratuita.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-3">
              Contáctanos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-5">
              Empieza hoy.
              <br />
              La auditoría es gratuita.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Cuéntanos brevemente tu situación y en menos de 24 horas te
              contactamos para agendar una sesión de diagnóstico sin coste.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Sin permanencia ni compromisos",
                "Diagnóstico personalizado a tu negocio",
                "Equipo especializado en IA y automatización",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                  </div>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm font-semibold text-[#0f172a] mb-1">
                ¿Prefieres agendar directamente?
              </p>
              <p className="text-xs text-slate-500 mb-3">
                Reserva 30 minutos en nuestro calendario.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1b3a6b] text-white text-sm font-semibold rounded-lg hover:bg-[#152d54] transition-colors"
              >
                <CalendarCheck size={16} />
                Reservar reunión en Calendly
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide"
                >
                  Nombre *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3a6b]/20 focus:border-[#1b3a6b] transition-colors bg-slate-50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@empresa.com"
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3a6b]/20 focus:border-[#1b3a6b] transition-colors bg-slate-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide"
              >
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3a6b]/20 focus:border-[#1b3a6b] transition-colors bg-slate-50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide"
              >
                ¿Qué quieres automatizar? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntanos brevemente tus procesos actuales y qué te gustaría mejorar..."
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3a6b]/20 focus:border-[#1b3a6b] transition-colors bg-slate-50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={state === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1b3a6b] text-white font-semibold rounded-lg hover:bg-[#152d54] transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {state === "loading" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Solicitar auditoría gratuita
                </>
              )}
            </button>

            <p className="text-xs text-center text-slate-400">
              Al enviar este formulario, aceptas nuestra política de privacidad.
              Tus datos no serán compartidos con terceros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
