/**
 * Lógica del autodiagnóstico de automatización.
 *
 * Separada de la interfaz a propósito: los supuestos son discutibles y quien
 * los lea debe poder auditarlos sin atravesar JSX.
 *
 * El criterio es el que ya publicamos en /servicios/automatizacion-de-procesos:
 * cruzar frecuencia y tiempo. Un proceso solo merece automatizarse cuando lo
 * que recupera al año justifica construirlo; si no, la respuesta honesta es
 * documentarlo o dejarlo en paz.
 */

export type Proceso = {
  id: string;
  nombre: string;
  descripcion: string;
  /**
   * Porcentaje del tiempo que puede dejar de hacerse a mano. Varía mucho:
   * un informe mensual es puro automatismo, mientras que redactar una
   * propuesta requiere criterio y la IA solo acelera parte del trabajo.
   */
  automatizable: number;
  /** A qué servicio corresponde, para enlazar el resultado con algo concreto. */
  servicio: { etiqueta: string; href: string };
};

export const PROCESOS: Proceso[] = [
  {
    id: "telefono",
    nombre: "Atención telefónica y consultas repetidas",
    descripcion: "Llamadas y mensajes que preguntan lo mismo una y otra vez: horarios, estado de un pedido, disponibilidad, precios.",
    automatizable: 0.7,
    servicio: { etiqueta: "Agentes de voz", href: "/servicios/agentes-de-voz" },
  },
  {
    id: "seguimiento",
    nombre: "Seguimiento comercial",
    descripcion: "Perseguir presupuestos enviados, recordar quién quedó pendiente, actualizar fichas después de cada conversación.",
    automatizable: 0.7,
    servicio: { etiqueta: "CRM inteligente", href: "/servicios/crm-inteligente" },
  },
  {
    id: "informes",
    nombre: "Informes y reportes periódicos",
    descripcion: "Recopilar datos de varias herramientas cada semana o cada mes para montar siempre el mismo documento.",
    automatizable: 0.9,
    servicio: { etiqueta: "Automatización de procesos", href: "/servicios/automatizacion-de-procesos" },
  },
  {
    id: "facturacion",
    nombre: "Facturación y cobros",
    descripcion: "Emitir facturas, conciliar pagos, reclamar impagos y pasar datos de una herramienta a otra.",
    automatizable: 0.8,
    servicio: { etiqueta: "Automatización de procesos", href: "/servicios/automatizacion-de-procesos" },
  },
  {
    id: "clasificar",
    nombre: "Clasificar correo e incidencias",
    descripcion: "Leer lo que entra, decidir de qué va, asignarlo a quien corresponde y avisar al cliente de que se ha recibido.",
    automatizable: 0.65,
    servicio: { etiqueta: "Automatización de procesos", href: "/servicios/automatizacion-de-procesos" },
  },
  {
    id: "documentos",
    nombre: "Documentos y propuestas",
    descripcion: "Redactar presupuestos, informes y propuestas partiendo de notas sueltas o de plantillas que hay que rellenar.",
    automatizable: 0.5,
    servicio: { etiqueta: "Formación en IA", href: "/servicios/formacion-ia-empresas" },
  },
];

/** Semanas laborables al año, descontando vacaciones y festivos. */
export const SEMANAS = 46;

/**
 * Coste laboral por hora de un perfil administrativo o comercial en España:
 * unos 24.000 € brutos más cotización, repartidos en unas 1.760 horas.
 * Es un punto de partida editable, no una verdad.
 */
export const COSTE_HORA_DEFECTO = 18;

export type Veredicto = "automatizar" | "documentar" | "dejarlo";

export type ResultadoProceso = {
  proceso: Proceso;
  horasSemana: number;
  horasAno: number;
  euros: number;
  veredicto: Veredicto;
};

export type Resultado = {
  procesos: ResultadoProceso[];
  horasAno: number;
  euros: number;
  /** Equivalencia en jornadas completas, más fácil de visualizar que las horas. */
  jornadas: number;
  prioritario: ResultadoProceso | null;
  descartados: number;
};

/**
 * Umbrales en horas recuperables al año.
 *
 * Por debajo de 30 h/año (unos 40 minutos a la semana) construir una
 * automatización no se paga: cuesta más mantenerla que el tiempo que ahorra.
 * Entre 30 y 100 el margen es estrecho y casi siempre conviene documentar y
 * ordenar el proceso antes de automatizar nada.
 */
const UMBRAL_AUTOMATIZAR = 100;
const UMBRAL_DOCUMENTAR = 30;

function veredictoPara(horasAno: number): Veredicto {
  if (horasAno >= UMBRAL_AUTOMATIZAR) return "automatizar";
  if (horasAno >= UMBRAL_DOCUMENTAR) return "documentar";
  return "dejarlo";
}

export function calcular(horasPorProceso: Record<string, number>, costeHora: number): Resultado {
  const procesos = PROCESOS.map((proceso) => {
    const horasSemana = Math.max(0, Number(horasPorProceso[proceso.id]) || 0);
    const horasAno = Math.round(horasSemana * SEMANAS * proceso.automatizable);
    return {
      proceso,
      horasSemana,
      horasAno,
      euros: Math.round(horasAno * costeHora),
      veredicto: veredictoPara(horasAno),
    };
  })
    .filter((r) => r.horasSemana > 0)
    .sort((a, b) => b.horasAno - a.horasAno);

  const aprovechables = procesos.filter((r) => r.veredicto !== "dejarlo");
  const horasAno = aprovechables.reduce((t, r) => t + r.horasAno, 0);

  return {
    procesos,
    horasAno,
    euros: aprovechables.reduce((t, r) => t + r.euros, 0),
    jornadas: Math.round(horasAno / 8),
    prioritario: aprovechables[0] ?? null,
    descartados: procesos.filter((r) => r.veredicto === "dejarlo").length,
  };
}

export const TEXTO_VEREDICTO: Record<Veredicto, { etiqueta: string; explicacion: string }> = {
  automatizar: {
    etiqueta: "Merece automatizarse",
    explicacion: "El volumen justifica construir algo. Es de los primeros por los que empezaríamos.",
  },
  documentar: {
    etiqueta: "Documentar primero",
    explicacion: "Está en el margen. Antes de automatizar conviene escribir cómo se hace hoy: muchas veces ahí aparecen pasos redundantes y el ahorro llega sin tocar ninguna herramienta.",
  },
  dejarlo: {
    etiqueta: "No compensa",
    explicacion: "Consume poco tiempo. Automatizarlo costaría más de mantener que lo que ahorra, así que no lo contamos en el total.",
  },
};
