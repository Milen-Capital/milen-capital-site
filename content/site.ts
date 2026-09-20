// Contenido del sitio en español.
// Todos los textos visibles viven aquí como variables, para poder
// editarlos en un solo lugar (y, más adelante, reemplazar esta fuente
// por el contenido que venga del panel de administración).

export const SITE = {
  name: "Milen Capital",
  tagline: "Transformamos éxito en legado",
  legalNote:
    "Milen Capital | Edith Aguilar – Agente autorizada GNP. Este sitio es informativo y no pertenece a GNP Seguros. Los productos son ofrecidos por Edith Aguilar, agente autorizada independiente.",
  copyright: `© ${new Date().getFullYear()} Milen Capital. Todos los derechos reservados.`,
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contáctenos", href: "/contacto" },
] as const;

export const CONTACT = {
  phoneDisplay: "442 598 2821",
  phoneHref: "tel:+524425982821",
  whatsappDisplay: "442 598 2821",
  whatsappHref: "https://wa.me/524425982821",
  email: "consultoria@milencapital.com",
  regions: ["Querétaro", "Guanajuato", "San Luis Potosí", "Aguascalientes", "Michoacán"],
  regionsNote: "Asesoría presencial y en línea.",
};

// Coordenadas de referencia (centro de ciudad) para el mapa de cobertura.
// Ajusta "city" cuando se confirme la sede/oficina real en cada estado.
// Pendiente: las direcciones son ficticias (marcador de posición) —
// reemplazar por la dirección real de cada oficina cuando se confirme.
export const COVERAGE_MAP = [
  {
    id: "queretaro",
    state: "Querétaro",
    city: "Querétaro",
    lat: 20.5888,
    lon: -100.3899,
    address: "Av. Universidad 128, Centro, Querétaro, Qro. C.P. 76000",
  },
  {
    id: "guanajuato",
    state: "Guanajuato",
    city: "Guanajuato",
    lat: 21.019,
    lon: -101.2574,
    address: "Av. Juárez 45, Centro, Guanajuato, Gto. C.P. 36000",
  },
  {
    id: "slp",
    state: "San Luis Potosí",
    city: "San Luis Potosí",
    lat: 22.1565,
    lon: -100.9855,
    address: "Av. Venustiano Carranza 210, Centro, San Luis Potosí, S.L.P. C.P. 78000",
  },
  {
    id: "aguascalientes",
    state: "Aguascalientes",
    city: "Aguascalientes",
    lat: 21.8853,
    lon: -102.2916,
    address: "Av. Universidad 300, Centro, Aguascalientes, Ags. C.P. 20000",
  },
  {
    id: "michoacan",
    state: "Michoacán",
    city: "Morelia",
    lat: 19.7008,
    lon: -101.1844,
    address: "Av. Madero Poniente 150, Centro, Morelia, Mich. C.P. 58000",
  },
] as const;

export const SOCIAL_LINKS = [
  { id: "facebook", label: "Facebook", href: "#" },
  { id: "instagram", label: "Instagram", href: "#" },
  { id: "youtube", label: "YouTube", href: "#" },
  { id: "linkedin", label: "LinkedIn", href: "#" },
  { id: "whatsapp", label: "WhatsApp", href: CONTACT.whatsappHref },
] as const;

export const HERO = {
  headline: "Tu tranquilidad hoy, el legado de mañana",
  subheadline:
    "Blindaje patrimonial, seguros GNP y asesoría personalizada para proteger lo que más importa y construir un legado duradero para tu familia.",
  ctaPrimary: { label: "Cotiza tu seguro", href: "/soluciones" },
  backedBy: "Con el respaldo de GNP Seguros",
  videoUrl: "https://www.youtube.com/embed/1JBYTq5mCYY",
  videoTitle: "Conoce Milen Capital",
  badges: [
    { id: "advice", label: "Asesoría personalizada" },
    { id: "support", label: "Acompañamiento en todo el proceso" },
    { id: "trust", label: "Confianza y respaldo GNP" },
    { id: "experience", label: "29 años de experiencia en ventas" },
  ],
} as const;

export const SOLUTIONS = {
  title: "Soluciones para cada etapa de tu vida",
  subtitle: "Seguros GNP con la asesoría de Milen Capital.",
  ctaLabel: "Conoce más",
  href: "/soluciones",
  items: [
    {
      id: "vida",
      icon: "life",
      image: "/soluciones/vida.jpg",
      name: "Vida",
      description: "Hoy los proteges, siempre los acompañas.",
      detail:
        "El seguro de vida te brinda tranquilidad hoy y en el futuro, protegiendo a quienes más quieres ante cualquier imprevisto.",
    },
    {
      id: "gastos-medicos",
      icon: "health",
      image: "/soluciones/medicos.jpg",
      name: "Gastos Médicos",
      description: "Tu salud y la de tu familia en las mejores manos.",
      detail:
        "Un respaldo médico integral para que tú y tu familia reciban la mejor atención, sin que un imprevisto de salud afecte tu economía.",
    },
    {
      id: "auto",
      icon: "auto",
      image: "/soluciones/automoviles.jpg",
      name: "Auto",
      description: "Conduce con la tranquilidad de estar siempre protegido.",
      detail:
        "Protección completa para tu vehículo, con asistencia y respaldo GNP para que conduzcas siempre con tranquilidad.",
    },
    {
      id: "universidad",
      icon: "graduation",
      image: "/soluciones/universidad.jpg",
      name: "Universidad",
      description: "Asegura el futuro académico de quienes más quieres.",
      detail:
        "Garantiza los estudios superiores de quienes más quieres, sin que el costo de la educación sea una preocupación futura.",
    },
    {
      id: "hogar",
      icon: "home",
      image: "/soluciones/hogar.jpg",
      name: "Hogar",
      description: "Tu patrimonio también merece seguridad.",
      detail:
        "Blindaje patrimonial para tu casa y lo que hay en ella, ante daños, robos o imprevistos que puedan afectarla.",
    },
    {
      id: "ahorro-retiro",
      icon: "savings",
      image: "/soluciones/ahorro.jpg",
      name: "Ahorro",
      description: "Construye hoy el futuro que sueñas.",
      detail:
        "Un plan a tu medida para construir el patrimonio y el retiro que imaginas, con crecimiento constante y seguro.",
    },
    {
      id: "mascotas",
      icon: "pet",
      image: "/soluciones/mascotas.jpg",
      name: "Mascotas",
      description: "Cuida a quien te acompaña de forma incondicional.",
      detail:
        "Cobertura veterinaria y de emergencias para que tu mascota reciba la atención que merece, cuando más lo necesite.",
    },
    {
      id: "empleados",
      icon: "team",
      image: "/soluciones/empleados.jpg",
      name: "Empleados",
      description: "Beneficios y protección para tu equipo de trabajo.",
      detail:
        "Beneficios de gastos médicos y protección que fortalecen a tu equipo y ayudan a retener el mejor talento.",
    },
    {
      id: "negocios",
      icon: "business",
      image: "/soluciones/negocios.jpg",
      name: "Negocios",
      description: "Protege el patrimonio y la continuidad de tu empresa.",
      detail:
        "Protección integral para tu empresa, su patrimonio y su continuidad, ante los riesgos propios de operar un negocio.",
    },
  ],
} as const;

// Contenido de la página /soluciones (sidebar + panel de detalle).
export const SOLUTIONS_PAGE = {
  sidebarTitle: "Seguros personales",
  helpBox: {
    title: "¿Tiene alguna duda?",
    text: "Estamos para atenderle.",
    ctaLabel: "Contáctanos",
  },
  detailEyebrowByType: {
    quePrefix: "¿Qué es un",
    porQuePrefix: "¿Por qué contratar un",
  },
  coverageLabel: "Cobertura",
  formSubmitLabel: "Continuar por WhatsApp",
  whatsappIntro: (solutionName: string) => `Hola, me interesa cotizar un seguro de ${solutionName}.`,
} as const;

// Campos de los mini-formularios por seguro (alimentan el mensaje de
// WhatsApp prellenado). Basados en los formularios de referencia que
// compartió el cliente.
export type SolutionFieldType = "text" | "email" | "tel" | "number" | "select" | "radio" | "textarea";

export type SolutionField = {
  id: string;
  label: string;
  type: SolutionFieldType;
  options?: readonly string[];
  required?: boolean;
};

const ESTADOS = COVERAGE_MAP.map((point) => point.state);

const F_NOMBRE: SolutionField = { id: "nombre", label: "Nombre completo del solicitante", type: "text", required: true };
const F_GENERO: SolutionField = { id: "genero", label: "Género", type: "select", options: ["Femenino", "Masculino"], required: true };
const F_EDAD: SolutionField = { id: "edad", label: "Edad", type: "number", required: true };
const F_TELEFONO: SolutionField = { id: "telefono", label: "Teléfono", type: "tel", required: true };
const F_CORREO: SolutionField = { id: "correo", label: "Correo electrónico", type: "email", required: true };
const F_ESTADO: SolutionField = { id: "estado", label: "Estado", type: "select", options: ESTADOS, required: true };
const F_MUNICIPIO: SolutionField = { id: "municipio", label: "Municipio / Delegación", type: "text", required: true };
const F_CP: SolutionField = { id: "cp", label: "Código postal", type: "text", required: true };
const F_FUMADOR: SolutionField = { id: "fumador", label: "¿Es fumador?", type: "radio", options: ["Sí", "No"], required: true };

export const SOLUTION_FORMS: Record<string, SolutionField[]> = {
  vida: [
    F_NOMBRE,
    F_GENERO,
    F_EDAD,
    F_CORREO,
    F_TELEFONO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    F_FUMADOR,
    { id: "motivo", label: "Plática nos ¿por qué desea este seguro?", type: "textarea" },
  ],
  "gastos-medicos": [
    F_NOMBRE,
    F_TELEFONO,
    F_EDAD,
    F_CORREO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    F_FUMADOR,
    {
      id: "info_extra",
      label: "Información extra (datos de otros familiares, hospitales a los que desea asistir, si actualmente tiene seguro)",
      type: "textarea",
    },
  ],
  auto: [
    F_NOMBRE,
    F_TELEFONO,
    F_EDAD,
    F_CORREO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    F_GENERO,
    { id: "marca", label: "Marca del automóvil", type: "text", required: true },
    { id: "version", label: "Versión", type: "text", required: true },
    { id: "anio", label: "Año modelo", type: "text", required: true },
    { id: "descripcion_valor", label: "Descripción del vehículo y valor de la factura", type: "textarea" },
  ],
  universidad: [
    F_NOMBRE,
    F_EDAD,
    F_GENERO,
    F_FUMADOR,
    { id: "nombre_menor", label: "Nombre del menor de edad", type: "text", required: true },
    { id: "edad_menor", label: "Edad del menor", type: "number", required: true },
    F_TELEFONO,
    F_CORREO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    { id: "motivo", label: "Plática nos ¿por qué desea este seguro?", type: "textarea" },
  ],
  hogar: [
    F_NOMBRE,
    F_GENERO,
    F_TELEFONO,
    F_CORREO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    { id: "valor_vivienda", label: "Valor aproximado de la vivienda", type: "text", required: true },
    {
      id: "info_adicional",
      label: "Información adicional relevante (como valor de contenidos, electrodomésticos, etc.)",
      type: "textarea",
    },
  ],
  "ahorro-retiro": [
    F_NOMBRE,
    F_GENERO,
    F_EDAD,
    F_CORREO,
    F_TELEFONO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    F_FUMADOR,
    { id: "motivo", label: "Plática nos ¿por qué desea este seguro?", type: "textarea" },
  ],
  mascotas: [
    F_NOMBRE,
    F_EDAD,
    F_GENERO,
    F_TELEFONO,
    F_CORREO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    { id: "motivo", label: "Plática nos ¿por qué desea este seguro?", type: "textarea" },
  ],
  empleados: [
    F_NOMBRE,
    F_EDAD,
    F_GENERO,
    F_TELEFONO,
    F_CORREO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    { id: "motivo", label: "Plática nos ¿qué desea lograr al asegurar a sus empleados?", type: "textarea" },
  ],
  negocios: [
    F_NOMBRE,
    F_TELEFONO,
    F_CORREO,
    F_ESTADO,
    F_MUNICIPIO,
    F_CP,
    { id: "giro_negocio", label: "Giro del negocio", type: "text", required: true },
    { id: "motivo", label: "Plática nos ¿por qué desea este seguro y qué desea asegurar?", type: "textarea" },
  ],
};

export const ABOUT_TEASER = {
  title: "Tu asesora",
  name: "Edith Aguilar",
  initials: "EA",
  // Foto de cuerpo/medio cuerpo con fondo transparente (PNG), para el
  // panel grande de la sección. La foto de perfil normal vive en
  // TEAM.members (edith.photo).
  photoCutout: "/team/edith-cutout.png",
  role: "Agente autorizada GNP",
  text: "Soy Edith Aguilar, agente autorizada GNP, y mi compromiso es brindarte asesoría cercana, clara y personalizada.",
  quote:
    "Cada persona y familia tiene una historia. Mi misión es ayudarte a proteger la tuya.",
  quoteAuthor: "Edith Aguilar",
  points: [
    "Asesoría profesional y ética",
    "Atención personalizada",
    "Respaldo con GNP",
    "Relaciones a largo plazo",
  ],
  ctaLabel: "Conoce más",
  href: "/sobre-nosotros",
} as const;

// Pendiente: confirmar el cargo de cada integrante.
export const TEAM = {
  title: "Junto a un equipo cercano",
  subtitle: "Detrás de cada póliza hay un equipo listo para acompañarte.",
  members: [
    {
      id: "edith",
      name: ABOUT_TEASER.name,
      role: ABOUT_TEASER.role,
      initials: ABOUT_TEASER.initials,
      lead: true,
      roleConfirmed: true,
      photo: "/team/Edith.jpeg",
      photoCutout: ABOUT_TEASER.photoCutout,
    },
    {
      id: "miguel-iriarte",
      name: "Miguel Iriarte",
      role: "Cargo por confirmar",
      initials: "MI",
      lead: false,
      roleConfirmed: false,
      photo: "/team/Miguel-iriarte.jpeg",
      photoCutout: "/team/miguel-cutout.png",
    },
    {
      id: "estefania-iriarte",
      name: "Estefania Iriarte",
      role: "Cargo por confirmar",
      initials: "EI",
      lead: false,
      roleConfirmed: false,
      photo: "/team/Estefania.jpeg",
      photoCutout: "/team/estefania-cutout.png",
    },
    {
      // Nota: se asume que "Mike.jpeg" es de Luis Miguel (apodo "Mike").
      // Confirmar y renombrar el archivo si no es así.
      id: "luis-miguel",
      name: "Luis Miguel",
      role: "Cargo por confirmar",
      initials: "LM",
      lead: false,
      roleConfirmed: false,
      photo: "/team/Mike.jpeg",
      photoCutout: "/team/luis-miguel-cutout.png",
    },
  ],
} as const;

// Contenido de la página "Sobre Nosotros" (/sobre-nosotros).
// Pendiente: revisar la redacción de misión/visión/valores con el cliente.
export const ABOUT_PAGE = {
  hero: {
    eyebrow: "Sobre nosotros",
    title: "Protegemos hoy, construimos el legado de mañana",
  },
  story: {
    photo: "/team/edith-cutout.png",
    eyebrow: "Quiénes somos",
    title: "Asesoría cercana, con el respaldo de GNP",
    paragraphs: [
      "En Milen Capital acompañamos a familias y negocios a proteger lo que más importa: su salud, su patrimonio y el futuro de quienes más quieren.",
      "Creemos que la tranquilidad se construye con decisiones claras e informadas. Por eso ofrecemos una asesoría personalizada en cada etapa, desde la primera consulta hasta el seguimiento de cada póliza.",
    ],
  },
  mission: {
    title: "Misión",
    text: "Brindar asesoría personalizada en seguros y protección patrimonial, ayudando a cada familia y negocio a proteger lo que más importa con decisiones claras e informadas.",
    image: "/about/mision.jpg",
  },
  vision: {
    title: "Visión",
    text: "Ser el despacho de referencia en asesoría patrimonial de la región, reconocido por la confianza, la cercanía y el respaldo que brindamos a quienes nos eligen.",
    image: "/about/valores.jpg",
  },
  values: {
    title: "Valores",
    items: [
      {
        id: "confianza",
        icon: "trust",
        name: "Confianza",
        description: "Relaciones honestas y transparentes en cada conversación.",
      },
      {
        id: "cercania",
        icon: "advice",
        name: "Cercanía",
        description: "Acompañamiento real, no solo una póliza firmada.",
      },
      {
        id: "profesionalismo",
        icon: "shield",
        name: "Profesionalismo",
        description: "Asesoría ética e informada, con el respaldo de GNP.",
      },
      {
        id: "compromiso",
        icon: "experience",
        name: "Compromiso",
        description: "Relaciones a largo plazo, no solo una venta.",
      },
    ],
  },
  team: {
    eyebrow: "Nuestro equipo",
    title: "Las personas detrás de cada póliza",
    subtitle: "Un equipo cercano, listo para acompañarte en cada etapa.",
  },
} as const;

// Pendiente: reemplazar los "Cliente N" con testimonios reales
// (nombre, foto opcional y cita) cuando se recopilen.
export const TESTIMONIALS = {
  title: "Lo que dicen nuestros clientes",
  subtitle: "Historias reales de quienes ya confían en nuestro trabajo y construyen un futuro más seguro.",
  items: [
    {
      id: "cliente-1",
      name: "Cliente 1",
      initials: "C1",
      quote:
        "La atención fue clara y cercana en todo momento. Me sentí acompañado en cada paso del proceso.",
    },
    {
      id: "cliente-2",
      name: "Cliente 2",
      initials: "C2",
      quote:
        "Profesionalismo y respaldo desde el primer día. Recomiendo ampliamente el trabajo de Milen Capital.",
    },
    {
      id: "cliente-3",
      name: "Cliente 3",
      initials: "C3",
      quote:
        "Conseguí organizar mis finanzas y hoy tengo más tranquilidad para planear mi futuro.",
    },
  ],
} as const;

export const SPONSORS = {
  title: "Orgullosamente patrocinadores de",
  comingSoonBadge: "Logotipo próximamente",
  messageTitle: "Juntos hacemos la diferencia",
  items: [
    {
      id: "celaya-fc",
      name: "Celaya Fútbol Club",
      logo: "/sponsors/Celaya_FC.png",
      description: "El compromiso con nuestra comunidad también se vive en la cancha.",
    },
  ],
} as const;

export const BLOG_TEASER = {
  title: "Aprende a proteger lo que más importa",
  subtitle:
    "Artículos y consejos sobre seguros, patrimonio y planeación financiera.",
  comingSoonBadge: "Próximamente",
  topics: [
    {
      id: "seguros",
      icon: "shield",
      name: "Seguros",
      description: "Consejos y guías para elegir la protección adecuada.",
    },
    {
      id: "patrimonio",
      icon: "building",
      name: "Patrimonio",
      description: "Estrategias para proteger y hacer crecer lo que construyes.",
    },
    {
      id: "planeacion-financiera",
      icon: "chart",
      name: "Planeación financiera",
      description: "Ideas prácticas para tu tranquilidad financiera.",
    },
  ],
  ctaLabel: "Ir al blog",
  href: "/blog",
} as const;

// Contenido de la página "Blog" (/blog y /blog/[slug]).
// Los artículos son de ejemplo, para definir el diseño; más adelante
// esta lista se reemplaza por el contenido que venga de Sanity.
export const BLOG_PAGE = {
  hero: {
    eyebrow: "Blog",
    title: "Aprende a proteger lo que más importa",
  },
  filterAllLabel: "Todos",
  readMoreLabel: "Leer artículo",
  backLabel: "Volver al blog",
} as const;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  categoryId: (typeof BLOG_TEASER.topics)[number]["id"];
  image: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-elegir-el-seguro-de-vida-adecuado",
    title: "Cómo elegir el seguro de vida adecuado para tu familia",
    excerpt:
      "No todos los seguros de vida son iguales. Te explicamos qué revisar antes de contratar uno, para que la protección realmente se ajuste a tu familia.",
    categoryId: "seguros",
    image: "/blog/seguro-vida.jpg",
    date: "2026-08-12",
    readTime: "5 min",
    author: "Edith Aguilar",
    content: [
      "Elegir un seguro de vida no debería sentirse como llenar un formulario más. Es una decisión que protege a las personas que más te importan, y por eso vale la pena entender qué estás contratando antes de firmar.",
      "Lo primero es definir el monto de cobertura: una buena referencia es pensar en cuánto necesitaría tu familia para mantener su nivel de vida, pagar deudas y cubrir gastos futuros como la educación de tus hijos.",
      "Después viene el tipo de póliza. Existen seguros temporales, más económicos y pensados para cubrir una etapa específica, y seguros de vida entera, que acompañan toda tu vida y pueden generar valor en efectivo con el tiempo.",
      "Por último, revisa las exclusiones y los tiempos de espera. Un buen asesor te ayudará a leer la letra pequeña y a elegir coberturas adicionales, como invalidez o enfermedades graves, que se ajusten a tu situación real.",
    ],
  },
  {
    slug: "5-formas-de-proteger-tu-patrimonio",
    title: "5 formas de proteger tu patrimonio a largo plazo",
    excerpt:
      "Construir patrimonio toma años; protegerlo requiere estrategia. Estas son cinco acciones concretas para blindar lo que has construido.",
    categoryId: "patrimonio",
    image: "/blog/patrimonio.jpg",
    date: "2026-07-28",
    readTime: "6 min",
    author: "Edith Aguilar",
    content: [
      "Proteger tu patrimonio no es solo tener seguros, es tener una estrategia. Aquí te compartimos cinco acciones que puedes empezar a aplicar desde hoy.",
      "Diversifica: no concentres todo tu patrimonio en un solo bien o inversión. Blinda tu vivienda con un seguro de hogar que cubra daños estructurales y contenidos.",
      "Revisa tus pólizas cada año: tu patrimonio cambia, y tus coberturas deben cambiar con él. Planea tu sucesión con anticipación, para que lo que construiste llegue a quien tú decidas.",
      "Por último, rodéate de asesoría profesional. Un especialista te ayuda a identificar riesgos que muchas veces pasan desapercibidos hasta que ya es tarde.",
    ],
  },
  {
    slug: "planeacion-financiera-para-el-retiro",
    title: "Planeación financiera: cómo empezar a construir tu retiro",
    excerpt:
      "Entre más pronto empieces, menos esfuerzo necesitas después. Te contamos cómo dar los primeros pasos hacia un retiro tranquilo.",
    categoryId: "planeacion-financiera",
    image: "/blog/retiro.jpg",
    date: "2026-06-15",
    readTime: "4 min",
    author: "Edith Aguilar",
    content: [
      "Hablar de retiro a los 30 o 40 años puede sentirse lejano, pero es justo el mejor momento para empezar: el tiempo es el mayor aliado del interés compuesto.",
      "El primer paso es tener claridad: ¿a qué edad quieres retirarte y con qué nivel de ingresos? A partir de ahí se puede construir un plan de ahorro realista.",
      "Un plan de ahorro para el retiro con respaldo GNP combina disciplina de ahorro con crecimiento constante, y puede complementar lo que ya construyes con el IMSS o el ISSSTE.",
      "Empezar con aportaciones pequeñas pero constantes suele generar mejores resultados que esperar a tener \"más disponible\" para empezar.",
    ],
  },
  {
    slug: "que-cubre-un-seguro-de-gastos-medicos-mayores",
    title: "¿Qué cubre realmente un seguro de gastos médicos mayores?",
    excerpt:
      "Coaseguro, deducible, red de hospitales... te explicamos en palabras simples los términos que debes entender antes de contratar.",
    categoryId: "seguros",
    image: "/blog/gastos-medicos.jpg",
    date: "2026-05-30",
    readTime: "5 min",
    author: "Edith Aguilar",
    content: [
      "Cuando hablamos de gastos médicos mayores, hay tres palabras que aparecen siempre y que vale la pena entender bien: deducible, coaseguro y red de hospitales.",
      "El deducible es el monto que pagas de tu bolsillo antes de que la aseguradora empiece a cubrir gastos. El coaseguro es el porcentaje que compartes con la aseguradora una vez superado el deducible.",
      "La red de hospitales define en qué clínicas puedes atenderte con el respaldo completo de tu póliza; atenderte fuera de la red puede significar gastos adicionales.",
      "Entender estos tres conceptos te ayuda a comparar pólizas de forma justa y a elegir una cobertura que realmente se ajuste a tu presupuesto y necesidades.",
    ],
  },
  {
    slug: "seguro-de-auto-que-cobertura-elegir",
    title: "Seguro de auto: ¿cobertura amplia, limitada o responsabilidad civil?",
    excerpt:
      "Elegir la cobertura equivocada puede salir caro. Te explicamos la diferencia entre cada tipo y cuándo conviene cada una.",
    categoryId: "seguros",
    image: "/blog/seguro-auto.jpg",
    date: "2026-05-10",
    readTime: "4 min",
    author: "Edith Aguilar",
    content: [
      "La responsabilidad civil es la cobertura mínima: cubre los daños que le causas a terceros, pero no protege tu propio vehículo.",
      "La cobertura limitada agrega protección para tu auto ante robo total o pérdida total por accidente, mientras que la amplia también cubre daños materiales parciales.",
      "Si tu auto es nuevo o todavía lo estás pagando, una cobertura amplia suele ser la opción más segura. Si es un auto de varios años, la limitada puede ser suficiente.",
      "Lo importante es revisar el valor comercial de tu auto cada año, ya que la cobertura ideal cambia conforme el vehículo se deprecia.",
    ],
  },
  {
    slug: "seguro-de-hogar-vale-la-pena",
    title: "¿Vale la pena un seguro de hogar si ya pagué mi casa?",
    excerpt:
      "Terminar de pagar tu casa no elimina los riesgos. Te contamos qué cubre un seguro de hogar y por qué seguir protegido importa.",
    categoryId: "patrimonio",
    image: "/blog/seguro-hogar.jpg",
    date: "2026-04-22",
    readTime: "4 min",
    author: "Edith Aguilar",
    content: [
      "Terminar de pagar la hipoteca es una gran noticia, pero también es el momento en el que muchas personas cancelan su seguro de hogar sin darse cuenta del riesgo.",
      "Un seguro de hogar no solo protege la estructura: también cubre el contenido (muebles, aparatos, pertenencias) ante robo, incendio o fenómenos naturales.",
      "Reconstruir una casa desde cero, o reemplazar lo perdido en un siniestro, casi siempre cuesta más de lo que se imagina, sin importar si la casa ya está pagada.",
      "Mantener la póliza activa después de liquidar la hipoteca sigue siendo una de las formas más simples de proteger tu patrimonio.",
    ],
  },
  {
    slug: "cuanto-ahorrar-para-el-retiro",
    title: "¿Cuánto deberías ahorrar cada mes pensando en tu retiro?",
    excerpt:
      "No existe una fórmula única, pero sí puntos de partida claros para calcular cuánto ahorrar según tu edad y tus metas.",
    categoryId: "planeacion-financiera",
    image: "/blog/ahorro-retiro.jpg",
    date: "2026-04-05",
    readTime: "5 min",
    author: "Edith Aguilar",
    content: [
      "Una regla general es destinar entre el 10% y el 15% de tu ingreso mensual al ahorro para el retiro, aunque el número ideal depende de a qué edad empieces.",
      "Entre más joven empieces, menor porcentaje necesitas destinar cada mes, porque el tiempo hace que el crecimiento se acumule a tu favor.",
      "Si empiezas más tarde, no significa que sea tarde: simplemente conviene ajustar el porcentaje de ahorro o buscar instrumentos con mejor rendimiento.",
      "Lo más importante es automatizar el ahorro, para que no dependa de la disciplina del día a día sino de un hábito ya establecido.",
    ],
  },
];

export const CONTACT_TEASER = {
  eyebrow: "Dónde estamos",
  title: "Hablemos sobre tu tranquilidad",
  text: "Estoy lista para ayudarte a encontrar la mejor protección para ti y tu familia. Atención en línea y presencial en nuestras oficinas.",
  officeLabel: "Nuestra oficina",
  ctaLabel: "Contáctanos",
  href: "/contacto",
} as const;

export const FOOTER = {
  contactLabel: "Hablemos",
} as const;

// Contenido de la página "Contáctenos" (/contacto).
export const CONTACT_PAGE = {
  hero: {
    eyebrow: "Contáctenos",
    title: "Hablemos sobre tu tranquilidad",
  },
  intro:
    "Cuéntanos qué necesitas y te contactamos por WhatsApp lo antes posible, o comunícate directamente por teléfono o correo.",
  form: {
    title: "Envíanos un mensaje",
    submitLabel: "Enviar por WhatsApp",
    whatsappIntro: "Hola, me gustaría recibir más información.",
  },
  infoTitle: "Otras formas de contacto",
  locationsTitle: "Atención en línea o presencial en estas ubicaciones",
  coverageNote: "Contamos con cobertura en todo México.",
  officeLabel: "Nuestra oficina",
} as const;

export const GNP_BADGE = {
  eyebrow: "Agente autorizado",
  logo: "/brand/agenteGNP.png",
} as const;
