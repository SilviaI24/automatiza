import { MetadataRoute } from "next";

const base = "https://www.automatizatuempresa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                                     lastModified: "2026-07-21", changeFrequency: "weekly",  priority: 1    },
    { url: `${base}/automatizacion-empresas-con-ia`,                 lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/servicios`,                                      lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/servicios/agentes-de-voz`,                       lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/servicios/crm-inteligente`,                      lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/servicios/automatizacion-de-procesos`,           lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/casos`,                                          lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/contacto`,                                       lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.7  },
    { url: `${base}/nosotros`,                                       lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.6  },
  ];
}
