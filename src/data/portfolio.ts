// Contenido conservado de la versión CV/portfolio.

export const projects = [
  {
  id: "proj-0",
  title: "Fidus OS: plataforma de gestión y automatización comercial",
  category: "desarrollo",
  client: "Proyecto Personal",
  summary: "Creación de una plataforma comercial con gestión de clientes y oportunidades, análisis del pipeline y automatización de tareas mediante IA.",
  details: `Diseño y desarrollo de Fidus OS, una plataforma que reúne la operativa comercial y la priorización de acciones en un mismo producto.

  - Desarrollo de módulos para leads, clientes, oportunidades, tareas e historial de actividad.
  - Diseño de una arquitectura multiempresa, con autenticación y separación de datos por cliente.
  - Implementación de un motor de señales y puntuación para priorizar las acciones comerciales.
  - Automatización del análisis nocturno del pipeline, con detección de riesgos y oportunidades y preparación de resúmenes para la jornada.
  - Integración con servicios de IA, correo, llamadas, calendario y pagos.

  Tecnologías: FastAPI, SQLModel, PostgreSQL/Supabase, React, Redis y Celery.`,
  year: "2026",
  url: "https://fidusos.com"
},
  {
  id: "proj-1",
  title: "The Match Pulse: valoración de partidos sin spoilers",
  category: "desarrollo",
  client: "Proyecto Personal",
  summary: "Creación de una plataforma que puntúa partidos de La Liga de 0 a 5 para ayudar a elegir qué ver sin conocer el resultado.",
  details: `Diseño y desarrollo de The Match Pulse, con un algoritmo propio para valorar el interés de los partidos a partir de su desarrollo y sus estadísticas.

  - Construcción de un pipeline de datos en Python, con extracción asíncrona de fuentes como Understat y StatsBomb.
  - Diseño de un algoritmo que combina goles esperados (xG), volatilidad de victoria (WPA) e índices de caos.
  - Creación del Índice de Amenaza Ofensiva (IAO), con normalización frente a datos históricos.
  - Desarrollo de un backend en FastAPI y una interfaz en React con modo sin spoilers.
  - Preparación del procesamiento de temporadas históricas y de recomendaciones automatizadas.`,
  year: "2026",
  url: "https://thematchpulse.com"
}, {
  id: "proj-2",
  title: "relucio.es: desarrollo de web personal y portfolio",
  category: "desarrollo",
  client: "Proyecto Personal",
  summary: "Rediseño y desarrollo de una web estática con Astro y Tailwind CSS, con blog, portfolio y fotografía integrada desde Flickr.",
  details: `Migración de un CMS a una web basada en componentes para presentar trayectoria profesional, proyectos y artículos.

  - Desarrollo con Astro para reducir el JavaScript enviado al navegador.
  - Diseño adaptable a móvil y escritorio, con modo claro y oscuro.
  - Implementación del blog mediante colecciones de contenido Markdown/MDX.
  - Configuración de metadatos SEO, datos estructurados y sitemap.
  - Integración de fotografía con el feed público de Flickr, selección aleatoria al cargar y navegación entre imágenes.
  - Despliegue continuo en Vercel desde el repositorio de GitHub.`,
  year: "2026",
  url: "/"
},
  {
  id: "proj-3",
  title: "Gobierno del dato y prevención de fugas (DLP)",
  category: "consultoria",
  client: "Entidad Bancaria Tier-1",
  summary: "Proyecto de clasificación y protección de información, con contrato de 350.000 € y reducción del 85% de falsos positivos.",
  details: `Implantación de clasificación automática y políticas DLP unificadas en endpoints y cloud, dentro de un proyecto de protección del dato y adecuación a requisitos de DORA y GDPR.

  - Cierre de un contrato de 350.000 € en licencias y servicios, con validación del CISO y el DPO.
  - Reducción del 85% de falsos positivos mediante la revisión del modelo de clasificación y las políticas de protección.
  - Trazabilidad del 100% de la documentación confidencial.
  - Superación de la auditoría regulatoria sin hallazgos.`,
  year: "2025"
},
  {
  id: "proj-4",
  title: "Protección del correo y concienciación frente al phishing",
  category: "consultoria",
  client: "Empresa Sector Energía",
  summary: "Proyecto de seguridad del correo para 2.500 licencias, con contrato de tres años y reducción de la tasa de clics en phishing del 32% al 4%.",
  details: `Diseño de una estrategia frente al phishing y al fraude por correo empresarial (BEC), combinando protección del correo con IA y concienciación de usuarios.

  - Cierre de un contrato SaaS de tres años para 2.500 licencias.
  - Reducción de la tasa de clics en phishing del 32% al 4% en 12 meses.
  - Bloqueo del 99,9% de las amenazas antes de su llegada al buzón mediante una pasarela de seguridad de correo (SEG).
  - Reportes de usuarios como origen del 80% de las alertas al SOC.`,
  year: "2025"
},
  {
  id: "proj-5",
  title: "Estrategia de ciberseguridad y servicio vCISO",
  category: "consultoria",
  client: "Grupo Industrial Textil",
  summary: "Definición del gobierno de seguridad y del SGSI para un grupo industrial, con certificación ISO 27001 y ahorro del 15% en costes operativos.",
  details: `Servicio de CISO virtual (vCISO) para un grupo industrial en expansión mediante adquisiciones, con centralización de la gestión de riesgos y definición de un plan director de seguridad a tres años.

  - Diseño del Sistema de Gestión de Seguridad de la Información (SGSI) y obtención de la certificación ISO 27001, con acceso a nuevas licitaciones.
  - Ahorro del 15% en costes operativos mediante la consolidación de proveedores duplicados.
  - Definición de prioridades e inversiones tecnológicas dentro del plan director.
  - Contrato de asesoramiento de tres años para dar continuidad al gobierno de seguridad.`,
  year: "2025"
}
];

export const experience = [
  {
    id: "exp-1",
    role: "Responsable de Alcorce Ciberseguridad",
    company: "Alcorce Telecomunicaciones",
    summary: "Creación desde cero y dirección de la unidad de ciberseguridad, con responsabilidad sobre P&L. Crecimiento de facturación del +200% en 2024 y del +600% en 2025.",
    details: `Creación y puesta en marcha de Alcorce Ciberseguridad, desde la definición de la oferta y la estrategia comercial hasta la organización de las operaciones.

    - Crecimiento de facturación del +200% en 2024 y del +600% en 2025, tras el lanzamiento de la unidad en 2023.
    - Dirección de la unidad, con responsabilidad sobre la cuenta de resultados (P&L), el plan comercial y los objetivos financieros.
    - Cierre de acuerdos con fabricantes y mayoristas para ampliar la oferta de soluciones de ciberseguridad.
    - Diseño de servicios de seguridad gestionada a partir del catálogo de soluciones.
    - Coordinación de los equipos técnicos y supervisión de la prestación de los servicios.`,
    year: "2022 — Actualidad"
},
  {
  id: "exp-2",
  role: "Gerente de Ciberseguridad",
  company: "Babel",
  summary: "Gestión del negocio de ciberseguridad en Levante, con una cartera de 1 M€ y crecimiento interanual del +20% en 2021 y del +10% en 2022.",
  details: `Responsabilidad sobre el negocio de ciberseguridad en Levante y acompañamiento a clientes en sus planes de seguridad y continuidad del negocio.

  - Gestión de una cartera de clientes de 1 M€, con crecimiento interanual del negocio del +20% en 2021 y del +10% en 2022.
  - Acompañamiento en la definición y ejecución de planes estratégicos de ciberseguridad.
  - Oferta de servicios SOC, análisis de riesgos y vulnerabilidades e implantación de soluciones tecnológicas.
  - Acompañamiento en proyectos de adecuación a GDPR, ENS y la familia de normas ISO 27000.`,
  year: "2021 — 2022"
},
  {
  id: "exp-3",
  role: "Responsable de la Unidad de Negocio Telco",
  company: "ALTEN Spain",
  summary: "Creación desde cero y dirección de la unidad Telco, con una cartera de 2,5 M€ anuales, más de 35 ingenieros y responsabilidad sobre P&L.",
  details: `Creación y desarrollo de la unidad de negocio Telco para grandes operadores y fabricantes de telecomunicaciones, desde la apertura de cuentas hasta la formación del equipo y la entrega de los servicios.

  - Desarrollo de una cartera de 2,5 M€ anuales y crecimiento de facturación del +170% en 2019.
  - Dirección de un equipo de más de 35 ingenieros, con responsabilidad sobre su desarrollo y retención.
  - Gestión de la cuenta de resultados (P&L), los márgenes y la rentabilidad de los proyectos.
  - Apertura de nuevas cuentas, definición de la oferta de servicios y negociación de contratos marco.
  - Supervisión de proyectos de despliegue 5G, mejora de redes móviles y diseño de módulos para satélites de comunicaciones.`,
  year: "2018 — 2021"
},
{
  id: "exp-4",
  role: "Consultor de Comunicaciones Unificadas",
  company: "Fibratel",
  summary: "Migración de infraestructuras y diseño de soluciones de comunicaciones unificadas para más de 50 clientes corporativos.",
  details: `Dirección de proyectos de migración y modernización de infraestructuras de comunicaciones para más de 50 clientes corporativos, con integración de comunicaciones unificadas y sistemas de gestión (ERP).

  - Diseño de soluciones a medida y gestión técnica de oportunidades comerciales.
  - Realización de demostraciones y talleres técnicos con clientes.
  - Colaboración con fabricantes en el diseño de las arquitecturas propuestas.`,
  year: "2016 — 2018"
},
{
  id: "exp-5",
  role: "Ingeniero de Preventa",
  company: "British Telecom (BT)",
  summary: "Diseño de soluciones de redes, seguridad y cloud para grandes cuentas, incluidas empresas del IBEX 35.",
  details: `Diseño de propuestas técnicas para grandes empresas de banca, seguros y hotelería, con foco en redes internacionales, seguridad y servicios cloud.

  - Participación en proyectos de evolución de una red bancaria internacional, migraciones a cloud en el sector seguros e infraestructura IT global para cadenas hoteleras.
  - Diseño de soluciones WAN/LAN, recuperación ante desastres (DRP), seguridad perimetral y comunicaciones unificadas (ToIP).
  - Elaboración de propuestas de servicios gestionados en Azure, AWS y Office 365, para entornos híbridos y públicos.
  - Preparación de respuestas a RFP y defensa técnica de propuestas ante clientes.`,
  year: "2015 — 2016"
}
];

export const certifications = [
  {
    name: "Experto en Endpoint Manager",
    issuer: "Applivery",
    year: "2026"
  },
  {
    name: "PSAT Professional",
    issuer: "Proofpoint",
    year: "2025"
  },
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    year: "2023"
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2023",
    url: "https://www.credly.com/badges/667f4ff9-90d9-40ba-af09-81dcc74a1b52/public_url"
  },
  {
    name: "PACSP (Professional Accredited Cloud Security)",
    issuer: "Proofpoint",
    year: "2023",
    url: "https://verify.skilljar.com/c/o2ttw37rx69w"
  },
  {
    name: "Certified Fundamentals Cybersecurity",
    issuer: "Fortinet",
    year: "2023",
    url: "https://www.credly.com/badges/c943348d-6604-490c-8e0a-931684c5ac1f/public_url"
  },
  {
    name: "NSE 1 & NSE 2 Network Security Associate",
    issuer: "Fortinet",
    year: "2022"
  },
  {
    name: "Security Architecture for Systems Engineer #500-651",
    issuer: "Cisco",
    year: "2018"
  },
  {
    name: "CCDA - Certified Design Associate",
    issuer: "Cisco",
    year: "2017"
  },
  {
    name: "CCNA - Routing & Switching",
    issuer: "Cisco",
    year: "2015"
  }
];
