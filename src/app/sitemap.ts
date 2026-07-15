import { MetadataRoute } from "next";

const base = "https://www.automatizatuempresa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicios/agentes-de-voz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/servicios/crm-inteligente`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/servicios/automatizacion-low-code`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/casos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
