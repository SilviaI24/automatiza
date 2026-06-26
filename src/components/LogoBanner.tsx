const tools = [
  "Make (Integromat)",
  "n8n",
  "HubSpot",
  "OpenAI / GPT-4",
  "Anthropic Claude",
  "Zapier",
  "Airtable",
  "Notion",
];

export default function LogoBanner() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Herramientas con las que trabajamos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
