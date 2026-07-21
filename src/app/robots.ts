import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      // Rastreadores de IA — permitidos explícitamente para GEO/citación
      { userAgent: "GPTBot",          allow: "/" },
      { userAgent: "OAI-SearchBot",   allow: "/" },
      { userAgent: "PerplexityBot",   allow: "/" },
      { userAgent: "ClaudeBot",       allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot",           allow: "/" },
    ],
    sitemap: "https://www.automatizatuempresa.com/sitemap.xml",
  };
}
