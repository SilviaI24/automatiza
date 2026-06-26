"use client";
import { useEffect, useRef } from "react";

type ScriptItem = { type: "bot" | "user" | "tag"; text: string; delay: number };

const script: ScriptItem[] = [
  { type: "bot", text: "Hola, soy Ana del equipo de atención. ¿En qué puedo ayudarte?", delay: 600 },
  { type: "user", text: "Hola, quería información para implementarlo en mi negocio", delay: 1400 },
  { type: "bot", text: "Claro. ¿Qué tipo de negocio es y cuántas personas sois en el equipo?", delay: 1200 },
  { type: "user", text: "Administradora de fincas. Somos 6 personas y 80 comunidades.", delay: 1500 },
  { type: "tag", text: "Caso identificado · prioridad alta", delay: 900 },
  { type: "bot", text: "Tenemos un caso muy parecido implementado. ¿Te agendo una llamada con Luis mañana a las 10:30?", delay: 1400 },
  { type: "user", text: "Sí, perfecto.", delay: 1200 },
  { type: "tag", text: "Cita confirmada · mañana 10:30", delay: 600 },
];

export default function ChatMock() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idxRef = useRef(0);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    function addBubble(item: ScriptItem) {
      const el = document.createElement("div");
      el.className = item.type === "tag" ? "bubble tag" : `bubble ${item.type}`;
      el.textContent = item.text;
      body!.appendChild(el);
      body!.scrollTop = body!.scrollHeight;
    }

    function addTyping() {
      const t = document.createElement("div");
      t.className = "typing";
      t.innerHTML = "<i></i><i></i><i></i>";
      body!.appendChild(t);
      body!.scrollTop = body!.scrollHeight;
      return t;
    }

    function step() {
      if (idxRef.current >= script.length) {
        timerRef.current = setTimeout(() => {
          body!.innerHTML = "";
          idxRef.current = 0;
          step();
        }, 3500);
        return;
      }
      const item = script[idxRef.current];
      if (item.type === "bot") {
        const t = addTyping();
        timerRef.current = setTimeout(() => {
          t.remove();
          addBubble(item);
          idxRef.current++;
          step();
        }, item.delay);
      } else {
        timerRef.current = setTimeout(() => {
          addBubble(item);
          idxRef.current++;
          step();
        }, item.delay);
      }
    }

    step();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="chat-mock">
        <div className="chat-head">
          <div className="chat-avatar">A</div>
          <div>
            <div className="chat-name">Ana · Asistente IA</div>
            <div className="chat-status">En línea · responde en &lt;2s</div>
          </div>
          <div className="chat-tools"><span></span><span></span><span></span></div>
        </div>
        <div className="chat-body" ref={bodyRef}></div>
        <div className="chat-input">
          <div className="field">Escribe un mensaje…</div>
          <div className="send">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 14l12-6L2 2l2 6-2 6z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
