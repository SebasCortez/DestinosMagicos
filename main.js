'use strict';

/* ─── DATOS ESTÁTICOS DE TOURS ─── */
window.ALL_TOURS_DATA = [
  {
    ID: 1,
    Titulo: "Machu Picchu Clásico",
    Descripcion: "Visita la ciudadela inca más famosa del mundo. Incluye tren de ida y vuelta, bus panorámico y entrada al sitio arqueológico con guía certificado.",
    Detalle: "Salida desde Cusco en tren Expedition. Llegada a Aguas Calientes, subida en bus panorámico hasta la ciudadela. Recorrido de 2 horas con guía. Tiempo libre para fotos. Regreso por la tarde.",
    Duracion: "Día completo (12h)",
    TamañoGrupo: "Grupos de 2-12",
    NivelDificultad: "Moderado",
    PrecioDesde: 180,
    Badge: "Más Popular",
    Alimentacion: "Almuerzo incluido",
    Incluye: "Tren ida y vuelta,Bus panorámico,Entrada sitio arqueológico,Guía certificado",
    ImagenURL: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop",
    data_duration: "fullday"
  },
  {
    ID: 2,
    Titulo: "Montaña Arcoíris (Vinicunca)",
    Descripcion: "Trek a la impresionante Montaña de los 7 Colores a 5,200 msnm. Una experiencia única entre paisajes andinos de colores vibrantes.",
    Detalle: "Traslado desde Cusco a las 4:30am. Desayuno en ruta. Trek de 7 km ida y vuelta a Vinicunca. Llegada a la cima con vistas 360°. Almuerzo típico andino. Regreso a Cusco.",
    Duracion: "Día completo (14h)",
    TamañoGrupo: "Grupos de 4-16",
    NivelDificultad: "Difícil",
    PrecioDesde: 55,
    Badge: "Tendencia",
    Alimentacion: "Almuerzo incluido",
    Incluye: "Transporte,Desayuno,Almuerzo,Guía,Caballos opcionales",
    ImagenURL: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e9/1a/cb.jpg",
    data_duration: "fullday"
  },
  {
    ID: 3,
    Titulo: "Valle Sagrado Completo",
    Descripcion: "Recorre Pisac, Ollantaytambo y Chinchero en un día épico por el Valle de los Incas. Mercado artesanal, ruinas y paisajes de ensueño.",
    Detalle: "Visita al mercado artesanal de Pisac. Ruinas de Pisac con vistas panorámicas. Almuerzo en restaurante local. Fortaleza de Ollantaytambo. Telares y hornos coloniales en Chinchero.",
    Duracion: "Día completo (10h)",
    TamañoGrupo: "Grupos de 2-14",
    NivelDificultad: "Fácil",
    PrecioDesde: 45,
    Badge: null,
    Alimentacion: "Almuerzo incluido",
    Incluye: "Transporte,Almuerzo,Guía,Entradas a ruinas",
    ImagenURL: "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2018/03/valle-sagrado-tips-viaje.jpg",
    data_duration: "fullday"
  },
  {
    ID: 4,
    Titulo: "City Tour Cusco + 4 Ruinas",
    Descripcion: "Descubre el corazón del Imperio Inca: Sacsayhuamán, Qenqo, Puca Pucara, Tambomachay y el centro histórico colonial de Cusco.",
    Detalle: "Recorrido por la Plaza de Armas, Catedral y Qorikancha. Visita a las 4 ruinas del entorno de Cusco con guía bilingüe. Incluye transporte en bus turístico.",
    Duracion: "Medio día (4 horas)",
    TamañoGrupo: "Grupos de 2-20",
    NivelDificultad: "Fácil",
    PrecioDesde: 30,
    Badge: null,
    Alimentacion: null,
    Incluye: "Bus turístico,Guía bilingüe,Entradas a ruinas",
    ImagenURL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/60/32/e0/20171102-080128-largejpg.jpg?w=900&h=500&s=1",
    data_duration: "halfday"
  },
  {
    ID: 5,
    Titulo: "Laguna Humantay",
    Descripcion: "Trek a la laguna turquesa a los pies del nevado Humantay a 4,200 msnm. Agua cristalina de color esmeralda rodeada de montañas nevadas.",
    Detalle: "Salida a las 4:00am desde Cusco. Desayuno en Soraypampa. Trek de 4 km hasta la laguna (2h aprox). Ritual de ofrenda a la Pachamama. Almuerzo buffet. Regreso.",
    Duracion: "Día completo (12h)",
    TamañoGrupo: "Grupos de 4-14",
    NivelDificultad: "Moderado",
    PrecioDesde: 50,
    Badge: "Imperdible",
    Alimentacion: "Almuerzo incluido",
    Incluye: "Transporte,Desayuno,Almuerzo buffet,Guía,Entrada al santuario",
    ImagenURL: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/ac/07/7b.jpg",
    data_duration: "fullday"
  },
  {
    ID: 6,
    Titulo: "Camino Inca Corto 2 Días",
    Descripcion: "La versión corta del legendario Camino Inca. Camina los últimos 12 km de la ruta ancestral y llega a Machu Picchu al amanecer por la Puerta del Sol.",
    Detalle: "Día 1: Traslado al km 104, inicio del trek, campamento. Día 2: Madrugada hacia la Puerta del Sol, entrada al sol a Machu Picchu, recorrido guiado, regreso en tren.",
    Duracion: "2 días / 1 noche",
    TamañoGrupo: "Grupos de 2-12",
    NivelDificultad: "Difícil",
    PrecioDesde: 350,
    Badge: "Experiencia Única",
    Alimentacion: "Todas las comidas incluidas",
    Incluye: "Tren,Carpa y sleeping,Comidas,Guía,Cocinero,Porteadores,Entrada Machu Picchu",
    ImagenURL: "https://www.peru.travel/Contenido/General/Imagen/es/317/1.1/Qhapaq.jpg",
    data_duration: "multiday"
  },
  {
    ID: 7,
    Titulo: "Maras, Moray y Salineras",
    Descripcion: "Visita los círculos agrícolas circulares de Moray, las terrazas de sal de Maras y el pueblo colonial de Chinchero en un tour fuera de lo común.",
    Detalle: "Salida matutina hacia Chinchero. Visita a las salineras de Maras (más de 3,000 pozas). Circular de Moray — laboratorio agrícola inca. Regreso por rutas panorámicas.",
    Duracion: "Medio día (4 horas)",
    TamañoGrupo: "Grupos de 2-16",
    NivelDificultad: "Fácil",
    PrecioDesde: 35,
    Badge: null,
    Alimentacion: null,
    Incluye: "Transporte,Guía,Entradas a Moray y Salineras",
    ImagenURL: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=600&fit=crop",
    data_duration: "halfday"
  },
  {
    ID: 8,
    Titulo: "Tour Lago Titicaca 3 Días",
    Descripcion: "Viaja al lago navegable más alto del mundo. Visita las islas flotantes de los Uros, Taquile y Amantaní con estadía en familia local.",
    Detalle: "Día 1: Viaje Cusco-Puno en tren panorámico, llegada. Día 2: Navegación a islas flotantes Uros y Taquile, noche en Amantaní. Día 3: Regreso a Puno, traslado a Cusco o aeropuerto.",
    Duracion: "3 días / 2 noches",
    TamañoGrupo: "Grupos de 4-16",
    NivelDificultad: "Fácil",
    PrecioDesde: 280,
    Badge: "Multi-destino",
    Alimentacion: "Desayunos y almuerzos incluidos",
    Incluye: "Tren panorámico,Alojamiento,Barco en lago,Guía,Entradas,Desayunos y almuerzos",
    ImagenURL: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&h=600&fit=crop",
    data_duration: "multiday"
  },
  {
    ID: 9,
    Titulo: "Aventura Palccoyo (Arcoíris Alternativa)",
    Descripcion: "La montaña de colores sin multitudes. Palccoyo ofrece 3 montañas de colores, bosque de piedras y llamas en libertad. Trek corto y accesible.",
    Detalle: "Salida a las 6:00am. Trek fácil de 3 km. Vistas de 3 montañas de colores distintos. Bosque de piedras Qaqayoc. Abundante vida silvestre andina. Almuerzo típico cusqueño.",
    Duracion: "Día completo (10h)",
    TamañoGrupo: "Grupos de 2-16",
    NivelDificultad: "Moderado",
    PrecioDesde: 40,
    Badge: null,
    Alimentacion: "Almuerzo incluido",
    Incluye: "Transporte,Almuerzo,Guía,Entrada al sitio",
    ImagenURL: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
    data_duration: "fullday"
  }
];

/* ─── VARIABLES GLOBALES ─── */
let cart = [];
let currentLang = 'es';

/* ══════════════════════════════════════════════════════
   TRADUCCIONES
══════════════════════════════════════════════════════ */
const translations = {
  es: {
    "nav.home": "Inicio", "nav.about": "Nosotros", "nav.packages": "Paquetes",
    "nav.gallery": "Galería", "nav.contact": "Contacto",
    "hero.badge": "Tu próxima gran historia comienza aquí",
    "hero.title": "Cusco como Nunca <br>lo Imaginaste",
    "hero.subtitle": "Desde la majestuosidad de Machu Picchu hasta los secretos del Valle Sagrado. Creamos aventuras a tu medida con el toque mágico que mereces.",
    "hero.btn1": "Reservar mi Aventura", "hero.btn2": "Ver Tours y Precios <span>⟶</span>",
    "about.mission.badge": "Nuestro Propósito", "about.mission.title": "Misión",
    "about.mission.text": "Diseñar experiencias personalizadas que conecten el alma del viajero con la energía viva de los Andes.",
    "about.vision.badge": "Nuestro Futuro", "about.vision.title": "Visión",
    "about.vision.text": "Buscamos consolidarnos como una agencia de viajes confiable reconocida por nuestra calidad humana.",
    "about.founder.badge": "Nuestra Esencia", "about.founder.title": "Elena: Experiencia y Pasión",
    "about.founder.text": "Originaria de <strong>Chimbote</strong>, Elena adoptó a <strong>Cusco</strong> como su hogar hace 30 años. Con <strong>25 años de trayectoria</strong>, su excelencia es nuestro pilar.",
    "packages.badge": "Nuestros Tours", "packages.title": "Paquetes Turísticos",
    "packages.subtitle": "Experiencias cuidadosamente diseñadas para tu aventura perfecta",
    "package.from": "Desde", "package.perPerson": "por persona",
    "package.details": "VER DETALLES", "package.add": "Agregar",
    "filters.sort": "Ordenar por precio:", "filters.select": "Seleccionar",
    "filters.lowToHigh": "Menor a Mayor", "filters.highToLow": "Mayor a Menor",
    "filters.duration": "Duración:", "filters.allDurations": "Todas las duraciones",
    "filters.halfDay": "Medio día (4 horas)", "filters.fullDay": "Día completo",
    "filters.multiDay": "Más de un día", "filters.reset": "Limpiar filtros", "filters.apply": "Aplicar",
    "activities.badge": "Más que un Tour", "activities.title": "Vive Cusco con Todos los Sentidos",
    "activities.subtitle": "De la tierra a tu alma — experiencias únicas que van mucho más allá del circuito clásico",
    "gallery.badge": "Momentos Mágicos", "gallery.title": "Galería de Fotos",
    "gallery.subtitle": "Descubre los increíbles momentos de nuestros viajeros",
    "gallery.machupicchu": "La ciudadela inca", "gallery.rainbow.title": "Montaña Arcoíris",
    "gallery.valley.title": "Valle Sagrado", "gallery.valley.desc": "Paisajes ancestrales",
    "gallery.cusco.title": "Cusco Colonial", "gallery.cusco.desc": "Centro histórico",
    "gallery.sacsay": "Fortaleza inca", "gallery.humantay": "Agua turquesa",
    "cart.title": "Mi Carrito", "cart.empty": "Tu carrito está vacío",
    "cart.emptyHint": "Agrega paquetes para comenzar tu aventura",
    "cart.total": "Total:", "cart.confirm": "Confirmar Compra",
    "checkout.title": "Finalizar Compra", "checkout.contactTitle": "Información de Contacto",
    "checkout.name": "Nombre completo *", "checkout.email": "Email *",
    "checkout.phone": "Teléfono / WhatsApp *",
    "checkout.notes": "Comentarios o solicitudes especiales (opcional)",
    "checkout.totalLabel": "Total a pagar:", "checkout.whatsapp": "Confirmar por WhatsApp",
    "contact.badge": "Estamos Aquí", "contact.title": "Contáctanos",
    "contact.subtitle": "Estamos listos para ayudarte a planear tu viaje soñado",
    "contact.phone": "Teléfono", "contact.callNow": "Llamar ahora",
    "contact.chat": "Chatear", "contact.sendEmail": "Enviar correo",
    "footer.desc": "Creando experiencias inolvidables en el corazón del Imperio Inca desde 2008.",
    "footer.quickLinks": "Enlaces Rápidos", "footer.about": "Sobre Nosotros",
    "footer.info": "Información", "footer.terms": "Términos y Condiciones",
    "footer.privacy": "Política de Privacidad", "footer.faq": "Preguntas Frecuentes",
    "footer.hours": "Horario de Atención", "footer.weekdays": "Lunes - Domingo: 7:00 am - 11:00 pm",
    "footer.saturday": "Sábados: 9:00 AM - 6:00 PM", "footer.sunday": "Domingos: 10:00 AM - 4:00 PM",
    "footer.payment": "Métodos de pago aceptados",
    "footer.rights": "© 2026 Destinos Mágicos. Todos los derechos reservados.",
    "footer.madeIn": "Diseñado con ❤️ en Cusco, Perú",
    "activities.cooking": "Clases de Cocina", "activities.pachamama": "Pago a la Tierra",
    "activities.coca": "Lectura de Coca", "activities.toros": "Pintado de Toritos de Pucara",
    "activities.choco": "ChocoMuseo", "activities.community": "Visita a una Comunidad Agrícola",
    "activities.bakery": "Visitar una Panadería", "activities.chicha": "Visitar una Chichería",
    "activities.crafts": "Talleres de Artesanía (San Blas)", "activities.rafting": "River Rafting",
    "activities.quads": "Cuatrimotos", "activities.biking": "Biking",
    "activities.ayahuasca": "Ayahuasca", "activities.horses": "Horseback Riding",
    "activities.llama": "Llama Trek", "activities.morada": "Morada de los Dioses",
    "activities.cemetery": "Visitar Cementerios", "activities.festivals": "Fiestas Patronales",
    "activities.waterfalls": "Trekking (Cataratas)",
    "activities.whatsapp": "Consultar disponibilidad por WhatsApp"
  },
  en: {
    "nav.home": "Home", "nav.about": "About Us", "nav.packages": "Packages",
    "nav.gallery": "Gallery", "nav.contact": "Contact",
    "hero.badge": "Your next great story starts here",
    "hero.title": "Cusco Like You Never <br>Imagined",
    "hero.subtitle": "From the majesty of Machu Picchu to the secrets of the Sacred Valley. We create tailor-made adventures with the magical touch you deserve.",
    "hero.btn1": "Book My Adventure", "hero.btn2": "View Tours & Prices <span>⟶</span>",
    "about.mission.badge": "Our Purpose", "about.mission.title": "Mission",
    "about.mission.text": "Designing personalized experiences that connect the traveler's soul with the living energy of the Andes.",
    "about.vision.badge": "Our Future", "about.vision.title": "Vision",
    "about.vision.text": "We aim to establish ourselves as a reliable travel agency recognised for our human quality.",
    "about.founder.badge": "Our Essence", "about.founder.title": "Elena: Experience & Passion",
    "about.founder.text": "Originally from <strong>Chimbote</strong>, Elena adopted <strong>Cusco</strong> as her home 30 years ago. With <strong>25 years of experience</strong>, her excellence is our pillar.",
    "packages.badge": "Our Tours", "packages.title": "Tour Packages",
    "packages.subtitle": "Carefully designed experiences for your perfect adventure",
    "package.from": "From", "package.perPerson": "per person",
    "package.details": "SEE DETAILS", "package.add": "Add",
    "filters.sort": "Sort by price:", "filters.select": "Select",
    "filters.lowToHigh": "Low to High", "filters.highToLow": "High to Low",
    "filters.duration": "Duration:", "filters.allDurations": "All durations",
    "filters.halfDay": "Half day (4 hours)", "filters.fullDay": "Full day",
    "filters.multiDay": "More than one day", "filters.reset": "Clear filters", "filters.apply": "Apply",
    "activities.badge": "More than a Tour", "activities.title": "Live Cusco with All Your Senses",
    "activities.subtitle": "From the earth to your soul — unique experiences that go far beyond the classic circuit",
    "gallery.badge": "Magical Moments", "gallery.title": "Photo Gallery",
    "gallery.subtitle": "Discover the incredible moments of our travellers",
    "gallery.machupicchu": "The Inca citadel", "gallery.rainbow.title": "Rainbow Mountain",
    "gallery.valley.title": "Sacred Valley", "gallery.valley.desc": "Ancestral landscapes",
    "gallery.cusco.title": "Colonial Cusco", "gallery.cusco.desc": "Historic centre",
    "gallery.sacsay": "Inca fortress", "gallery.humantay": "Turquoise water",
    "cart.title": "My Cart", "cart.empty": "Your cart is empty",
    "cart.emptyHint": "Add packages to start your adventure",
    "cart.total": "Total:", "cart.confirm": "Confirm Purchase",
    "checkout.title": "Checkout", "checkout.contactTitle": "Contact Information",
    "checkout.name": "Full name *", "checkout.email": "Email *",
    "checkout.phone": "Phone / WhatsApp *",
    "checkout.notes": "Comments or special requests (optional)",
    "checkout.totalLabel": "Total to pay:", "checkout.whatsapp": "Confirm via WhatsApp",
    "contact.badge": "We Are Here", "contact.title": "Contact Us",
    "contact.subtitle": "We are ready to help you plan your dream trip",
    "contact.phone": "Phone", "contact.callNow": "Call now",
    "contact.chat": "Chat", "contact.sendEmail": "Send email",
    "footer.desc": "Creating unforgettable experiences in the heart of the Inca Empire since 2008.",
    "footer.quickLinks": "Quick Links", "footer.about": "About Us",
    "footer.info": "Information", "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy", "footer.faq": "FAQ",
    "footer.hours": "Opening Hours", "footer.weekdays": "Monday - Friday: 8:00 AM - 8:00 PM",
    "footer.saturday": "Saturday: 9:00 AM - 6:00 PM", "footer.sunday": "Sunday: 10:00 AM - 4:00 PM",
    "footer.payment": "Accepted payment methods",
    "footer.rights": "© 2026 Destinos Mágicos. All rights reserved.",
    "footer.madeIn": "Designed with ❤️ in Cusco, Peru",
    "activities.cooking": "Cooking Classes", "activities.pachamama": "Pachamama Ceremony",
    "activities.coca": "Coca Leaf Reading", "activities.toros": "Pucara Bull Painting",
    "activities.choco": "ChocoMuseum", "activities.community": "Farming Community Visit",
    "activities.bakery": "Bakery Visit", "activities.chicha": "Chicha Brewery Visit",
    "activities.crafts": "Craft Workshops (San Blas)", "activities.rafting": "River Rafting",
    "activities.quads": "Quad Bikes", "activities.biking": "Biking",
    "activities.ayahuasca": "Ayahuasca", "activities.horses": "Horseback Riding",
    "activities.llama": "Llama Trek", "activities.morada": "Abode of the Gods",
    "activities.cemetery": "Cemetery Visit", "activities.festivals": "Patron Festivals",
    "activities.waterfalls": "Trekking (Waterfalls)",
    "activities.whatsapp": "Check availability via WhatsApp"
  },
  pt: {
    "nav.home": "Início", "nav.about": "Sobre Nós", "nav.packages": "Pacotes",
    "nav.gallery": "Galeria", "nav.contact": "Contato",
    "hero.badge": "Sua próxima grande história começa aqui",
    "hero.title": "Cusco como Você Nunca <br>Imaginou",
    "hero.subtitle": "Desde a majestade de Machu Picchu até os segredos do Vale Sagrado. Criamos aventuras sob medida com o toque mágico que você merece.",
    "hero.btn1": "Reservar minha Aventura", "hero.btn2": "Ver Tours e Preços <span>⟶</span>",
    "about.mission.badge": "Nosso Propósito", "about.mission.title": "Missão",
    "about.mission.text": "Projetar experiências personalizadas que conectem a alma do viajante com a energia viva dos Andes.",
    "about.vision.badge": "Nosso Futuro", "about.vision.title": "Visão",
    "about.vision.text": "Buscamos nos consolidar como uma agência de viagens confiável e reconhecida pela nossa qualidade humana.",
    "about.founder.badge": "Nossa Essência", "about.founder.title": "Elena: Experiência e Paixão",
    "about.founder.text": "Natural de <strong>Chimbote</strong>, Elena adotou <strong>Cusco</strong> como seu lar há 30 anos. Com <strong>25 anos de trajetória</strong>, sua excelência é o nosso pilar.",
    "packages.badge": "Nossos Tours", "packages.title": "Pacotes Turísticos",
    "packages.subtitle": "Experiências cuidadosamente desenvolvidas para sua aventura perfeita",
    "package.from": "A partir de", "package.perPerson": "por pessoa",
    "package.details": "VER DETALHES", "package.add": "Adicionar",
    "filters.sort": "Ordenar por preço:", "filters.select": "Selecionar",
    "filters.lowToHigh": "Menor para Maior", "filters.highToLow": "Maior para Menor",
    "filters.duration": "Duração:", "filters.allDurations": "Todas as durações",
    "filters.halfDay": "Meio dia (4 horas)", "filters.fullDay": "Dia completo",
    "filters.multiDay": "Mais de um dia", "filters.reset": "Limpar filtros", "filters.apply": "Aplicar",
    "activities.badge": "Mais que um Tour", "activities.title": "Viva Cusco com Todos os Sentidos",
    "activities.subtitle": "Da terra à sua alma — experiências únicas que vão muito além do circuito clássico",
    "gallery.badge": "Momentos Mágicos", "gallery.title": "Galeria de Fotos",
    "gallery.subtitle": "Descubra os incríveis momentos dos nossos viajantes",
    "gallery.machupicchu": "A cidadela inca", "gallery.rainbow.title": "Montanha Arco-Íris",
    "gallery.valley.title": "Vale Sagrado", "gallery.valley.desc": "Paisagens ancestrais",
    "gallery.cusco.title": "Cusco Colonial", "gallery.cusco.desc": "Centro histórico",
    "gallery.sacsay": "Fortaleza inca", "gallery.humantay": "Água turquesa",
    "cart.title": "Meu Carrinho", "cart.empty": "Seu carrinho está vazio",
    "cart.emptyHint": "Adicione pacotes para começar sua aventura",
    "cart.total": "Total:", "cart.confirm": "Confirmar Compra",
    "checkout.title": "Finalizar Compra", "checkout.contactTitle": "Informações de Contato",
    "checkout.name": "Nome completo *", "checkout.email": "Email *",
    "checkout.phone": "Telefone / WhatsApp *",
    "checkout.notes": "Comentários ou pedidos especiais (opcional)",
    "checkout.totalLabel": "Total a pagar:", "checkout.whatsapp": "Confirmar pelo WhatsApp",
    "contact.badge": "Estamos Aqui", "contact.title": "Entre em Contato",
    "contact.subtitle": "Estamos prontos para ajudá-lo a planejar sua viagem dos sonhos",
    "contact.phone": "Telefone", "contact.callNow": "Ligar agora",
    "contact.chat": "Conversar", "contact.sendEmail": "Enviar email",
    "footer.desc": "Criando experiências inesquecíveis no coração do Império Inca desde 2008.",
    "footer.quickLinks": "Links Rápidos", "footer.about": "Sobre Nós",
    "footer.info": "Informações", "footer.terms": "Termos e Condições",
    "footer.privacy": "Política de Privacidade", "footer.faq": "Perguntas Frequentes",
    "footer.hours": "Horário de Atendimento", "footer.weekdays": "Segunda - Sexta: 8:00 - 20:00",
    "footer.saturday": "Sábado: 9:00 - 18:00", "footer.sunday": "Domingo: 10:00 - 16:00",
    "footer.payment": "Métodos de pagamento aceitos",
    "footer.rights": "© 2026 Destinos Mágicos. Todos os direitos reservados.",
    "footer.madeIn": "Desenvolvido com ❤️ em Cusco, Peru",
    "activities.cooking": "Aulas de Culinária", "activities.pachamama": "Pagamento à Terra",
    "activities.coca": "Leitura de Coca", "activities.toros": "Pintura de Touros de Pucara",
    "activities.choco": "ChocoMuseu", "activities.community": "Visita a uma Comunidade Agrícola",
    "activities.bakery": "Visitar uma Padaria", "activities.chicha": "Visitar uma Chicheria",
    "activities.crafts": "Oficinas de Artesanato (San Blas)", "activities.rafting": "River Rafting",
    "activities.quads": "Quadriciclos", "activities.biking": "Biking",
    "activities.ayahuasca": "Ayahuasca", "activities.horses": "Passeio a Cavalo",
    "activities.llama": "Llama Trek", "activities.morada": "Morada dos Deuses",
    "activities.cemetery": "Visitar Cemitérios", "activities.festivals": "Festas Patronais",
    "activities.waterfalls": "Trekking (Cachoeiras)",
    "activities.whatsapp": "Consultar disponibilidade pelo WhatsApp"
  }
};

/* ══════════════════════════════════════════════════════
   RENDER DE PAQUETES
══════════════════════════════════════════════════════ */
function renderPackages() {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;
  grid.innerHTML = window.ALL_TOURS_DATA.map((tour, i) => `
    <div class="package-card" data-package-id="${tour.ID}" data-price="${tour.PrecioDesde}" data-duration="${tour.data_duration}" data-original-index="${i}">
      <div class="package-image">
        <img src="${tour.ImagenURL}" alt="${tour.Titulo}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop'">
        <div class="image-overlay"></div>
        ${tour.Badge ? `<div class="package-badge"><i class="fas fa-star"></i><span>${tour.Badge}</span></div>` : ''}
        ${tour.Alimentacion && tour.Alimentacion.toLowerCase().includes('almuerzo') ? `<div class="lunch-included-badge"><i class="fas fa-utensils"></i><span>Almuerzo incluido</span></div>` : ''}
      </div>
      <div class="package-content">
        <h3 class="package-title">${tour.Titulo}</h3>
        <ul class="package-features">
          ${tour.Duracion ? `<li><i class="fas fa-clock"></i><span>${tour.Duracion}</span></li>` : ''}
          ${tour.TamañoGrupo ? `<li><i class="fas fa-users"></i><span>${tour.TamañoGrupo}</span></li>` : ''}
          ${tour.NivelDificultad ? `<li><i class="fas fa-hiking"></i><span>${tour.NivelDificultad}</span></li>` : ''}
        </ul>
        <div class="package-footer">
          <div class="package-price">
            <span class="price-label" data-i18n="package.from">Desde</span>
            <span class="price-amount-large">$${tour.PrecioDesde}</span>
            <span class="price-person" data-i18n="package.perPerson">por persona</span>
          </div>
          <div class="package-actions">
            <button class="btn btn-more-info-large" data-package-id="${tour.ID}">
              <i class="fas fa-info-circle"></i><span data-i18n="package.details">VER DETALLES</span>
            </button>
            <button class="btn btn-add-to-cart" data-package-id="${tour.ID}">
              <i class="fas fa-cart-plus"></i><span data-i18n="package.add">Agregar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════════
   I18N
══════════════════════════════════════════════════════ */
function applyTranslations(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

function initLanguageSelector() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
  });
  applyTranslations('es');
}

/* ══════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════ */
function initNavbar() {
  const toggler = document.getElementById('navbarToggler');
  const menu = document.getElementById('navbarMenu');
  const links = document.querySelectorAll('.nav-link');

  toggler?.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      menu.classList.remove('active');
      toggler?.classList.remove('active');
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
}

/* ══════════════════════════════════════════════════════
   CARRUSEL NOSOTROS
══════════════════════════════════════════════════════ */
function initAboutCarousel() {
  const slides = document.querySelectorAll('.story-slide');
  const dots = document.querySelectorAll('.dot');
  const btnPrev = document.getElementById('aboutPrev');
  const btnNext = document.getElementById('aboutNext');
  let idx = 0, interval;

  if (!slides.length) return;

  function show(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add('active');
    dots[idx]?.classList.add('active');
  }

  function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => show(idx + 1), 7000);
  }

  btnNext?.addEventListener('click', () => { show(idx + 1); startAuto(); });
  btnPrev?.addEventListener('click', () => { show(idx - 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { show(i); startAuto(); }));

  const wrapper = document.querySelector('.story-carousel-wrapper');
  let tx = 0;
  wrapper?.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; }, { passive: true });
  wrapper?.addEventListener('touchend', e => {
    const diff = tx - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) { show(diff > 0 ? idx + 1 : idx - 1); startAuto(); }
  });

  show(0);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) startAuto();
}

/* ══════════════════════════════════════════════════════
   FILTROS
══════════════════════════════════════════════════════ */
function initFilters() {
  document.getElementById('applyFiltersBtn')?.addEventListener('click', applyFilters);
  document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.getElementById('sortPrice').value = '';
    document.getElementById('filterDuration').value = '';
    resetFiltersUI();
  });
}

function resetFiltersUI() {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.package-card'));
  cards.forEach(c => c.style.display = '');
  cards.sort((a, b) => +a.dataset.originalIndex - +b.dataset.originalIndex);
  cards.forEach(c => grid.appendChild(c));
}

function applyFilters() {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.package-card'));
  cards.forEach(c => c.style.display = '');

  const dur = document.getElementById('filterDuration')?.value || '';
  if (dur) {
    cards.forEach(c => {
      const d = (c.dataset.duration || '').toLowerCase();
      const ok = (dur === 'halfday' && d === 'halfday') ||
        (dur === 'fullday' && d === 'fullday') ||
        (dur === 'multiday' && d === 'multiday');
      if (!ok) c.style.display = 'none';
    });
  }

  const sort = document.getElementById('sortPrice')?.value || '';
  if (sort) {
    const vis = cards.filter(c => c.style.display !== 'none');
    if (sort === 'asc') vis.sort((a, b) => +a.dataset.price - +b.dataset.price);
    if (sort === 'desc') vis.sort((a, b) => +b.dataset.price - +a.dataset.price);
    [...vis, ...cards.filter(c => c.style.display === 'none')].forEach(c => grid.appendChild(c));
  }
}

/* ══════════════════════════════════════════════════════
   CARRITO — LÓGICA COMPLETA
══════════════════════════════════════════════════════ */
function initCart() {
  document.getElementById('cartFloatBtn')?.addEventListener('click', e => { e.preventDefault(); openCart(); });
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.getElementById('checkoutBtn')?.addEventListener('click', openCheckoutModal);

  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-add-to-cart');
    if (btn) { e.preventDefault(); addToCart(btn.dataset.packageId); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('cartSidebar')?.classList.contains('active')) closeCart();
    }
  });
}

function openCart() {
  document.getElementById('cartSidebar')?.classList.add('active');
  document.getElementById('cartOverlay')?.classList.add('active');
  document.body.classList.add('cart-open');
}

function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('active');
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.body.classList.remove('cart-open');
}

function addToCart(packageId) {
  const t = window.ALL_TOURS_DATA.find(x => String(x.ID) === String(packageId));
  if (!t) return;
  if (cart.find(i => String(i.id) === String(packageId))) {
    showToast('Este paquete ya está en tu carrito 🛒');
    openCart();
    return;
  }
  cart.push({ id: String(packageId), title: t.Titulo, price: parseFloat(t.PrecioDesde) || 0, adults: 1, children: 0, duration: t.Duracion || '' });
  saveCart();
  updateCartUI();
  showToast('✓ ' + t.Titulo + ' agregado');
  setTimeout(openCart, 400);
}

function removeFromCart(id) {
  cart = cart.filter(i => String(i.id) !== String(id));
  saveCart();
  updateCartUI();
  showToast('Paquete eliminado del carrito');
}
window.removeFromCart = removeFromCart;

function updatePassengerCount(id, type, delta) {
  const item = cart.find(i => String(i.id) === String(id));
  if (!item) return;
  if (type === 'adults') item.adults = Math.max(1, item.adults + delta);
  if (type === 'children') item.children = Math.max(0, item.children + delta);
  saveCart();
  updateCartUI();
}
window.updatePassengerCount = updatePassengerCount;

function calcTotal() {
  return cart.reduce((s, i) => s + i.price * (i.adults + i.children), 0);
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const empty = document.getElementById('cartEmpty');
  const itemsEl = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotalAmount');

  if (badge) { badge.textContent = cart.length; badge.style.display = cart.length ? 'flex' : 'none'; }

  if (!cart.length) {
    if (empty) empty.style.display = 'block';
    if (itemsEl) itemsEl.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return;
  }

  if (empty) empty.style.display = 'none';
  if (itemsEl) itemsEl.style.display = 'flex';
  if (footer) footer.style.display = 'block';

  if (itemsEl) {
    itemsEl.innerHTML = cart.map(item => {
      const tp = item.adults + item.children;
      return `
      <div class="cart-item">
        <div class="cart-item-header">
          <h4 class="cart-item-title">${item.title}</h4>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Eliminar">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <div class="cart-item-passengers">
          <div class="passenger-counter">
            <label>Adultos</label>
            <div class="counter-controls">
              <button class="counter-btn" onclick="updatePassengerCount('${item.id}','adults',-1)" ${item.adults <= 1 ? 'disabled' : ''}>−</button>
              <span class="counter-value">${item.adults}</span>
              <button class="counter-btn" onclick="updatePassengerCount('${item.id}','adults',1)">+</button>
            </div>
          </div>
          <div class="passenger-counter">
            <label>Niños</label>
            <div class="counter-controls">
              <button class="counter-btn" onclick="updatePassengerCount('${item.id}','children',-1)" ${item.children <= 0 ? 'disabled' : ''}>−</button>
              <span class="counter-value">${item.children}</span>
              <button class="counter-btn" onclick="updatePassengerCount('${item.id}','children',1)">+</button>
            </div>
          </div>
        </div>
        <div class="cart-item-price">
          $${(item.price * tp).toFixed(2)}
          <span class="cart-item-price-per" style="font-size:.75rem;font-weight:400;color:var(--gray);display:block;">${tp} persona${tp > 1 ? 's' : ''} × $${item.price.toFixed(2)}</span>
        </div>
      </div>`;
    }).join('');
  }
  if (totalEl) totalEl.textContent = '$' + calcTotal().toFixed(2);
}

function saveCart() {
  try { localStorage.setItem('allpamagic_cart', JSON.stringify(cart)); } catch (e) { }
}

function loadCart() {
  try { const s = localStorage.getItem('allpamagic_cart'); if (s) { cart = JSON.parse(s); updateCartUI(); } } catch (e) { }
}

/* ══════════════════════════════════════════════════════
   MODALES
══════════════════════════════════════════════════════ */
function initModals() {
  // Botones ver detalles
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-more-info-large, .btn-more-info');
    if (btn) { e.preventDefault(); openPackageDetailModal(btn.dataset.packageId); }
  });

  document.getElementById('packageDetailClose')?.addEventListener('click', () => closeModal('packageDetailModal'));
  document.getElementById('checkoutClose')?.addEventListener('click', () => closeModal('checkoutModal'));
  document.getElementById('infoModalClose')?.addEventListener('click', () => closeModal('infoModal'));
  document.getElementById('supportModalClose')?.addEventListener('click', () => closeModal('supportModal'));
  document.getElementById('confirmWhatsApp')?.addEventListener('click', sendWhatsApp);

  // Cerrar al click en overlay del modal
  document.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) closeModal(e.target.id);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(m => closeModal(m.id));
    }
  });

  // Info links footer
  document.addEventListener('click', e => {
    const link = e.target.closest('.info-link');
    if (link) { e.preventDefault(); openInfoModal(link.dataset.info); }
  });

  // Soporte y auténtico
  document.getElementById('supportFeatureItem')?.addEventListener('click', () => openModal('supportModal'));
  document.getElementById('authenticFeatureItem')?.addEventListener('click', () => openModal('authenticModal'));
  document.getElementById('authenticModalClose')?.addEventListener('click', () => closeModal('authenticModal'));
}

function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove('active');
  document.body.classList.remove('modal-open');
}

function openPackageDetailModal(packageId) {
  const t = window.ALL_TOURS_DATA.find(x => String(x.ID) === String(packageId));
  if (!t) return;
  const content = document.getElementById('packageDetailContent');
  if (!content) return;

  const incluye = t.Incluye ? t.Incluye.split(',').map(i => i.trim()).filter(Boolean) : [];
  const extras = [t.Alimentacion, t.Alojamiento].filter(Boolean);
  const all = [...extras, ...incluye];

  content.innerHTML = `
    <div class="detail-image-wrap">
      <img src="${t.ImagenURL}" alt="${t.Titulo}" onerror="this.src='https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop'">
      ${t.Badge ? `<div class="package-badge detail-badge" style="position:absolute;top:15px;right:15px;"><i class="fas fa-star"></i><span>${t.Badge}</span></div>` : ''}
    </div>
    <div class="detail-body">
      <h2 class="detail-title">${t.Titulo}</h2>
      <div class="detail-price-row" style="display:flex;align-items:baseline;gap:.5rem;margin:.5rem 0 1rem;">
        <span style="font-size:.8rem;color:var(--gray);font-weight:700;text-transform:uppercase;">Desde</span>
        <span class="detail-price-amount">$${t.PrecioDesde}</span>
        <span style="font-size:.85rem;color:var(--gray);">por persona</span>
      </div>
      <p style="color:var(--gray);line-height:1.8;margin-bottom:1.5rem;">${t.Descripcion}</p>
      <div class="detail-meta-grid">
        ${t.Duracion ? `<div class="detail-meta-item"><i class="fas fa-clock"></i><div><span style="font-size:.75rem;color:var(--gray);display:block;font-weight:700;text-transform:uppercase;">Duración</span><span style="font-weight:600;">${t.Duracion}</span></div></div>` : ''}
        ${t.TamañoGrupo ? `<div class="detail-meta-item"><i class="fas fa-users"></i><div><span style="font-size:.75rem;color:var(--gray);display:block;font-weight:700;text-transform:uppercase;">Grupo</span><span style="font-weight:600;">${t.TamañoGrupo}</span></div></div>` : ''}
        ${t.NivelDificultad ? `<div class="detail-meta-item"><i class="fas fa-hiking"></i><div><span style="font-size:.75rem;color:var(--gray);display:block;font-weight:700;text-transform:uppercase;">Dificultad</span><span style="font-weight:600;">${t.NivelDificultad}</span></div></div>` : ''}
      </div>
      ${all.length ? `
      <div class="detail-extras">
        <h4 class="detail-extras-title"><i class="fas fa-check-circle"></i> Incluye:</h4>
        ${all.map(ex => `<div class="detail-extra-item"><i class="fas fa-check" style="color:var(--accent);margin-right:.5rem;"></i>${ex}</div>`).join('')}
      </div>` : ''}
      ${t.Detalle ? `
      <div class="detail-extras" style="margin-top:1rem;">
        <h4 class="detail-extras-title"><i class="fas fa-info-circle"></i> Itinerario:</h4>
        <p style="color:var(--gray);line-height:1.8;font-size:.93rem;">${t.Detalle}</p>
      </div>` : ''}
      <div class="detail-actions" style="margin-top:1.5rem;display:flex;gap:1rem;">
        <button class="btn btn-primary btn-block" onclick="addToCartFromModal('${t.ID}')" style="flex:1;">
          <i class="fas fa-cart-plus"></i> Agregar al Carrito
        </button>
        <a href="https://wa.me/51984556834?text=${encodeURIComponent('Hola! Me interesa el tour: ' + t.Titulo + ' ($' + t.PrecioDesde + ' por persona). ¿Tienen disponibilidad?')}" target="_blank" class="btn btn-primary btn-block" style="flex:1;background:var(--success,#25D366);">
          <i class="fab fa-whatsapp"></i> Consultar
        </a>
      </div>
    </div>`;

  openModal('packageDetailModal');
}

function addToCartFromModal(id) { addToCart(id); closeModal('packageDetailModal'); }
window.addToCartFromModal = addToCartFromModal;

/* ══════════════════════════════════════════════════════
   CHECKOUT MODAL
══════════════════════════════════════════════════════ */
function openCheckoutModal() {
  if (!cart.length) { showToast('Tu carrito está vacío'); return; }

  const summary = document.getElementById('checkoutSummary');
  const totalEl = document.getElementById('checkoutTotalAmount');

  if (summary) {
    summary.innerHTML = cart.map(item => {
      const tp = item.adults + item.children;
      return `
      <div class="checkout-item" style="display:flex;justify-content:space-between;align-items:center;padding:.75rem 0;border-bottom:1px solid var(--gray-light);">
        <div>
          <h4 style="font-size:1rem;color:var(--dark);margin-bottom:.2rem;">${item.title}</h4>
          <span style="font-size:.82rem;color:var(--gray);">
            <i class="fas fa-users"></i> ${item.adults} adulto${item.adults > 1 ? 's' : ''}
            ${item.children ? `, <i class="fas fa-child"></i> ${item.children} niño${item.children > 1 ? 's' : ''}` : ''}
            ${item.duration ? ` &nbsp;·&nbsp; <i class="fas fa-clock"></i> ${item.duration}` : ''}
          </span>
        </div>
        <span style="font-size:1.2rem;font-weight:700;color:var(--primary);font-family:'Cinzel',serif;">$${(item.price * tp).toFixed(2)}</span>
      </div>`;
    }).join('');
  }
  if (totalEl) totalEl.textContent = '$' + calcTotal().toFixed(2);
  closeCart();
  openModal('checkoutModal');
}

/* ══════════════════════════════════════════════════════
   ENVÍO A WHATSAPP
══════════════════════════════════════════════════════ */
function sendWhatsApp() {
  const name = document.getElementById('checkoutName')?.value.trim();
  const email = document.getElementById('checkoutEmail')?.value.trim();
  const phone = document.getElementById('checkoutPhone')?.value.trim();
  const notes = document.getElementById('checkoutNotes')?.value.trim();

  if (!name || !email || !phone) {
    showToast('⚠️ Por favor completa todos los campos requeridos');
    // Marcar campos vacíos
    ['checkoutName', 'checkoutEmail', 'checkoutPhone'].forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.value.trim()) el.style.borderColor = 'var(--danger)';
      el?.addEventListener('input', () => el.style.borderColor = '', { once: true });
    });
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Por favor ingresa un email válido');
    return;
  }

  let msg = `¡Hola! Soy *${name}* y deseo reservar los siguientes tours:\n\n`;
  cart.forEach((item, idx) => {
    const tp = item.adults + item.children;
    msg += `${idx + 1}. 📦 *${item.title}*\n`;
    msg += `   👥 ${item.adults} adulto${item.adults > 1 ? 's' : ''}`;
    if (item.children) msg += `, ${item.children} niño${item.children > 1 ? 's' : ''}`;
    msg += `\n   ⏱️ ${item.duration}\n`;
    msg += `   💵 $${(item.price * tp).toFixed(2)} (${tp} persona${tp > 1 ? 's' : ''} × $${item.price.toFixed(2)})\n\n`;
  });
  msg += `─────────────────────\n`;
  msg += `💰 *TOTAL: $${calcTotal().toFixed(2)}*\n`;
  msg += `─────────────────────\n`;
  msg += `📧 Email: ${email}\n`;
  msg += `📱 Teléfono: ${phone}`;
  if (notes) msg += `\n📝 Notas: ${notes}`;
  msg += `\n\n¡Quedo en espera de su confirmación! 🙏`;

  const url = 'https://wa.me/51984556834?text=' + encodeURIComponent(msg);
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Limpiar carrito tras envío
  cart = [];
  saveCart();
  updateCartUI();
  closeModal('checkoutModal');
  showToast('✅ Redirigiendo a WhatsApp...');
  // Limpiar form
  ['checkoutName', 'checkoutEmail', 'checkoutPhone', 'checkoutNotes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

/* ══════════════════════════════════════════════════════
   INFO MODAL (footer links)
══════════════════════════════════════════════════════ */
function openInfoModal(type) {
  const content = document.getElementById('infoModalContent');
  if (!content) return;
  const map = {
    terms: `<h2 style="font-family:'Cinzel',serif;border-bottom:3px solid var(--accent);padding-bottom:1rem;margin-bottom:1.5rem;"><i class="fas fa-file-contract" style="color:var(--primary);margin-right:.75rem;"></i>Términos y Condiciones</h2>
      <h3 style="color:var(--primary);margin-bottom:.5rem;">1. Reservas y Pagos</h3><p style="color:var(--gray);margin-bottom:1.5rem;">Todas las reservas deben confirmarse con un depósito del 50% del total. El saldo restante debe pagarse 48 horas antes del tour.</p>
      <h3 style="color:var(--primary);margin-bottom:.5rem;">2. Cancelaciones</h3><p style="color:var(--gray);margin-bottom:1.5rem;">Más de 15 días: reembolso del 80%. Entre 7 y 15 días: reembolso del 50%. Menos de 7 días: sin reembolso.</p>
      <h3 style="color:var(--primary);margin-bottom:.5rem;">3. Responsabilidad</h3><p style="color:var(--gray);">ALLPAMAGIC no se hace responsable por demoras causadas por factores climáticos, huelgas o situaciones de fuerza mayor.</p>`,
    privacy: `<h2 style="font-family:'Cinzel',serif;border-bottom:3px solid var(--accent);padding-bottom:1rem;margin-bottom:1.5rem;"><i class="fas fa-shield-alt" style="color:var(--primary);margin-right:.75rem;"></i>Política de Privacidad</h2>
      <h3 style="color:var(--primary);margin-bottom:.5rem;">Datos que recopilamos</h3><p style="color:var(--gray);margin-bottom:1.5rem;">Nombre, email y teléfono para procesar tus reservas. No compartimos tus datos con terceros sin tu consentimiento.</p>
      <h3 style="color:var(--primary);margin-bottom:.5rem;">Uso de la información</h3><p style="color:var(--gray);">Tus datos se usan exclusivamente para gestionar reservas y enviarte información relevante sobre tus tours.</p>`,
    faq: `<h2 style="font-family:'Cinzel',serif;border-bottom:3px solid var(--accent);padding-bottom:1rem;margin-bottom:1.5rem;"><i class="fas fa-question-circle" style="color:var(--primary);margin-right:.75rem;"></i>Preguntas Frecuentes</h2>
      <h3 style="color:var(--primary);margin-bottom:.5rem;">¿Qué incluyen los paquetes?</h3><p style="color:var(--gray);margin-bottom:1.5rem;">Cada paquete incluye lo detallado en la descripción: transporte, guía certificado, entradas y comidas según se indique.</p>
      <h3 style="color:var(--primary);margin-bottom:.5rem;">¿Cómo confirmo mi reserva?</h3><p style="color:var(--gray);margin-bottom:1.5rem;">Agrega tus tours al carrito, completa el formulario y confirma por WhatsApp. Un agente te contactará en máximo 2 horas.</p>
      <h3 style="color:var(--primary);margin-bottom:.5rem;">¿Hay tours privados?</h3><p style="color:var(--gray);">¡Sí! Todos nuestros tours pueden ser privados. Contáctanos por WhatsApp para cotización personalizada.</p>`
  };
  content.innerHTML = map[type] || '<h2>Contenido no disponible</h2>';
  openModal('infoModal');
}

/* ══════════════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════════════ */
function showToast(msg) {
  document.querySelectorAll('.allpa-toast').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = 'allpa-toast';
  t.setAttribute('role', 'alert');
  t.style.cssText = `
    position:fixed;bottom:110px;right:25px;
    background:linear-gradient(135deg,var(--primary),var(--warm,#E86A33));
    color:#fff;padding:.85rem 1.4rem;border-radius:50px;
    box-shadow:0 10px 40px rgba(139,37,0,.25);
    z-index:9999;
    font-weight:600;font-family:'Outfit',sans-serif;
    max-width:300px;font-size:.9rem;
    animation:toastIn .3s ease;
  `;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(20px)'; t.style.transition = 'all .3s ease'; setTimeout(() => t.remove(), 300); }, 3000);
}

/* ══════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════ */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const style = document.createElement('style');
  style.textContent = `.reveal{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease}.reveal.visible{opacity:1;transform:translateY(0)}@keyframes toastIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}`;
  document.head.appendChild(style);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.package-card, .activity-card, .gallery-item, .contact-card').forEach(el => {
    el.classList.add('reveal');
    obs.observe(el);
  });
}

/* ══════════════════════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════════════════════ */
function smoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  renderPackages();
  initNavbar();
  initAboutCarousel();
  initFilters();
  initCart();
  initModals();
  initLanguageSelector();
  loadCart();
  smoothScrolling();
  initScrollReveal();
});