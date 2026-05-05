/* ═══════════════════════════════════════════════════════════════════════════
   ALLPAMAGIC — main.js
   Archivo JavaScript principal separado del HTML
   ═══════════════════════════════════════════════════════════════════════════ */

'use strict';

/* ─── VARIABLES GLOBALES ─── */
let cart = [];
let currentLang = 'es';

/* ══════════════════════════════════════════════════════════════════
   SISTEMA I18N
   ══════════════════════════════════════════════════════════════════ */
const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Nosotros",
        "nav.packages": "Paquetes",
        "nav.accommodation": "Alojamiento",
        "nav.gallery": "Galería de fotos",
        "nav.blog": "Blogs de viajes",
        "nav.contact": "Contacto",
        "hero.badge": "Tu próxima gran historia comienza aquí",
        "hero.title": "Cusco como Nunca <br> lo Imaginaste",
        "hero.subtitle": "Desde la majestuosidad de Machu Picchu hasta los secretos del Valle Sagrado. Creamos aventuras a tu medida con el toque mágico que mereces.",
        "hero.btn1": "Reservar mi Aventura",
        "hero.btn2": "Ver Tours y Precios <span>⟶</span>",
        "hero.scroll": "Explorar",
        "about.mission.badge": "Nuestro Propósito",
        "about.mission.title": "Misión",
        "about.mission.text": "Diseñar experiencias personalizadas que conecten el alma del viajero con la energía viva de los Andes.",
        "about.vision.badge": "Nuestro Futuro",
        "about.vision.title": "Visión",
        "about.vision.text": "Buscamos consolidarnos como una agencia de viajes confiable reconocida por nuestra calidad humana.",
        "about.founder.badge": "Nuestra Esencia",
        "about.founder.title": "Elena: Experiencia y Pasión",
        "about.founder.text": "Originaria de <strong>Chimbote</strong>, Elena adoptó a <strong>Cusco</strong> como su hogar hace 30 años. Con <strong>25 años de trayectoria</strong>, su excelencia es nuestro pilar.",
        "features.guides.title": "Guías Certificados",
        "features.guides.desc": "Profesionales expertos",
        "features.guides.btn": "Conocer a nuestros guías",
        "features.transport.title": "Transporte Premium",
        "features.transport.desc": "Vehículos modernos y seguros",
        "features.support.title": "Atención 24/7",
        "features.support.desc": "Soporte personalizado en todo momento",
        "features.authentic.title": "Experiencias Auténticas",
        "features.authentic.desc": "Vive Cusco desde su esencia cultural y espiritual",
        "packages.badge": "Nuestros Tours",
        "packages.title": "Paquetes Turísticos",
        "packages.subtitle": "Experiencias cuidadosamente diseñadas para tu aventura perfecta",
        "package.from": "Desde",
        "package.perPerson": "por persona",
        "package.details": "VER DETALLES",
        "package.add": "Agregar",
        "filters.sort": "Ordenar por precio:",
        "filters.select": "Seleccionar",
        "filters.lowToHigh": "Menor a Mayor",
        "filters.highToLow": "Mayor a Menor",
        "filters.duration": "Duración:",
        "filters.allDurations": "Todas las duraciones",
        "filters.halfDay": "Medio día (4 horas)",
        "filters.fullDay": "Día completo",
        "filters.multiDay": "Más de un día",
        "filters.reset": "Limpiar filtros",
        "filters.apply": "Aplicar",
        "activities.badge": "Más que un Tour",
        "activities.title": "Vive Cusco con Todos los Sentidos",
        "activities.subtitle": "De la tierra a tu alma — experiencias únicas que van mucho más allá del circuito clásico",
        "activities.cooking": "Clases de Cocina",
        "activities.pachamama": "Pago a la Tierra",
        "activities.coca": "Lectura de Coca",
        "activities.toros": "Pintado de Toritos de Pucara",
        "activities.choco": "ChocoMuseo",
        "activities.community": "Visita a una Comunidad Agrícola",
        "activities.bakery": "Visitar una Panadería",
        "activities.chicha": "Visitar una Chichería",
        "activities.crafts": "Talleres de Artesanía (San Blas)",
        "activities.rafting": "River Rafting",
        "activities.quads": "Cuatrimotos",
        "activities.biking": "Biking",
        "activities.ayahuasca": "Ayahuasca",
        "activities.horses": "Horseback Riding",
        "activities.llama": "Llama Trek",
        "activities.morada": "Morada de los Dioses",
        "activities.cemetery": "Visitar Cementerios",
        "activities.festivals": "Fiestas Patronales",
        "activities.waterfalls": "Trekking (Cataratas)",
        "activities.whatsapp": "Consultar disponibilidad por WhatsApp",
        "gallery.badge": "Momentos Mágicos",
        "gallery.title": "Galería de Fotos",
        "gallery.subtitle": "Descubre los increíbles momentos de nuestros viajeros",
        "gallery.machupicchu": "La ciudadela inca",
        "gallery.rainbow.title": "Montaña Arcoíris",
        "gallery.valley.title": "Valle Sagrado",
        "gallery.valley.desc": "Paisajes ancestrales",
        "gallery.cusco.title": "Cusco Colonial",
        "gallery.cusco.desc": "Centro histórico",
        "gallery.sacsay": "Fortaleza inca",
        "gallery.humantay": "Agua turquesa",
        "cart.title": "Mi Carrito",
        "cart.empty": "Tu carrito está vacío",
        "cart.emptyHint": "Agrega paquetes para comenzar tu aventura",
        "cart.total": "Total:",
        "cart.confirm": "Confirmar Compra",
        "checkout.title": "Finalizar Compra",
        "checkout.contactTitle": "Información de Contacto",
        "checkout.name": "Nombre completo *",
        "checkout.email": "Email *",
        "checkout.phone": "Teléfono / WhatsApp *",
        "checkout.notes": "Comentarios o solicitudes especiales (opcional)",
        "checkout.totalLabel": "Total a pagar:",
        "checkout.whatsapp": "Confirmar por WhatsApp",
        "contact.badge": "Estamos Aquí",
        "contact.title": "Contáctanos",
        "contact.subtitle": "Estamos listos para ayudarte a planear tu viaje soñado",
        "contact.phone": "Teléfono",
        "contact.callNow": "Llamar ahora",
        "contact.chat": "Chatear",
        "contact.sendEmail": "Enviar correo",
        "support.modal.desc": "Estamos disponibles en todo momento para ayudarte.<br>Contáctanos por cualquiera de estos canales:",
        "support.line1": "Línea principal",
        "support.line2": "Línea alternativa",
        "support.hours": "Disponible los 7 días de la semana, las 24 horas",
        "authentic.title": "Experiencias Auténticas en Cusco",
        "authentic.activities": "Nuestras Actividades",
        "authentic.fleet": "Nuestra Flota de Transporte",
        "authentic.cta": "¿Listo para vivir una experiencia auténtica?",
        "authentic.cta.btn": "Reservar ahora por WhatsApp",
        "footer.desc": "Creando experiencias inolvidables en el corazón del Imperio Inca desde 2008.",
        "footer.quickLinks": "Enlaces Rápidos",
        "footer.about": "Sobre Nosotros",
        "footer.info": "Información",
        "footer.terms": "Términos y Condiciones",
        "footer.privacy": "Política de Privacidad",
        "footer.faq": "Preguntas Frecuentes",
        "footer.hours": "Horario de Atención",
        "footer.weekdays": "Lunes - Viernes: 8:00 AM - 8:00 PM",
        "footer.saturday": "Sábados: 9:00 AM - 6:00 PM",
        "footer.sunday": "Domingos: 10:00 AM - 4:00 PM",
        "footer.payment": "Metodos de pago aceptados",
        "footer.rights": "© 2025 ALLPAMAGIC. Todos los derechos reservados.",
        "footer.madeIn": "Diseñado con ❤️ en Cusco, Perú"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.packages": "Packages",
        "nav.accommodation": "Accommodation",
        "nav.gallery": "Photo Gallery",
        "nav.blog": "Travel Blog",
        "nav.contact": "Contact",
        "hero.badge": "Your next great story starts here",
        "hero.title": "Cusco Like You Never <br> Imagined",
        "hero.subtitle": "From the majesty of Machu Picchu to the secrets of the Sacred Valley. We create tailor-made adventures with the magical touch you deserve.",
        "hero.btn1": "Book My Adventure",
        "hero.btn2": "View Tours & Prices <span>⟶</span>",
        "hero.scroll": "Explore",
        "about.mission.badge": "Our Purpose",
        "about.mission.title": "Mission",
        "about.mission.text": "Designing personalized experiences that connect the traveler's soul with the living energy of the Andes.",
        "about.vision.badge": "Our Future",
        "about.vision.title": "Vision",
        "about.vision.text": "We aim to establish ourselves as a reliable travel agency recognized for our human quality.",
        "about.founder.badge": "Our Essence",
        "about.founder.title": "Elena: Experience & Passion",
        "about.founder.text": "Originally from <strong>Chimbote</strong>, Elena adopted <strong>Cusco</strong> as her home 30 years ago. With <strong>25 years of career</strong>, her excellence is our pillar.",
        "features.guides.title": "Certified Guides",
        "features.guides.desc": "Expert professionals",
        "features.guides.btn": "Meet our guides",
        "features.transport.title": "Premium Transport",
        "features.transport.desc": "Modern and safe vehicles",
        "features.support.title": "24/7 Support",
        "features.support.desc": "Personalised support at all times",
        "features.authentic.title": "Authentic Experiences",
        "features.authentic.desc": "Live Cusco through its cultural and spiritual essence",
        "packages.badge": "Our Tours",
        "packages.title": "Tour Packages",
        "packages.subtitle": "Carefully designed experiences for your perfect adventure",
        "package.from": "From",
        "package.perPerson": "per person",
        "package.details": "SEE DETAILS",
        "package.add": "Add",
        "filters.sort": "Sort by price:",
        "filters.select": "Select",
        "filters.lowToHigh": "Low to High",
        "filters.highToLow": "High to Low",
        "filters.duration": "Duration:",
        "filters.allDurations": "All durations",
        "filters.halfDay": "Half day (4 hours)",
        "filters.fullDay": "Full day",
        "filters.multiDay": "More than one day",
        "filters.reset": "Clear filters",
        "filters.apply": "Apply",
        "activities.badge": "More than a Tour",
        "activities.title": "Live Cusco with All Your Senses",
        "activities.subtitle": "From the earth to your soul — unique experiences that go far beyond the classic circuit",
        "activities.cooking": "Cooking Classes",
        "activities.pachamama": "Pachamama Ceremony",
        "activities.coca": "Coca Leaf Reading",
        "activities.toros": "Pucara Bull Painting",
        "activities.choco": "ChocoMuseum",
        "activities.community": "Farming Community Visit",
        "activities.bakery": "Bakery Visit",
        "activities.chicha": "Chicha Brewery Visit",
        "activities.crafts": "Craft Workshops (San Blas)",
        "activities.rafting": "River Rafting",
        "activities.quads": "Quad Bikes",
        "activities.biking": "Biking",
        "activities.ayahuasca": "Ayahuasca",
        "activities.horses": "Horseback Riding",
        "activities.llama": "Llama Trek",
        "activities.morada": "Abode of the Gods",
        "activities.cemetery": "Cemetery Visit",
        "activities.festivals": "Patron Festivals",
        "activities.waterfalls": "Trekking (Waterfalls)",
        "activities.whatsapp": "Check availability via WhatsApp",
        "gallery.badge": "Magical Moments",
        "gallery.title": "Photo Gallery",
        "gallery.subtitle": "Discover the incredible moments of our travellers",
        "gallery.machupicchu": "The Inca citadel",
        "gallery.rainbow.title": "Rainbow Mountain",
        "gallery.valley.title": "Sacred Valley",
        "gallery.valley.desc": "Ancestral landscapes",
        "gallery.cusco.title": "Colonial Cusco",
        "gallery.cusco.desc": "Historic centre",
        "gallery.sacsay": "Inca fortress",
        "gallery.humantay": "Turquoise water",
        "cart.title": "My Cart",
        "cart.empty": "Your cart is empty",
        "cart.emptyHint": "Add packages to start your adventure",
        "cart.total": "Total:",
        "cart.confirm": "Confirm Purchase",
        "checkout.title": "Checkout",
        "checkout.contactTitle": "Contact Information",
        "checkout.name": "Full name *",
        "checkout.email": "Email *",
        "checkout.phone": "Phone / WhatsApp *",
        "checkout.notes": "Comments or special requests (optional)",
        "checkout.totalLabel": "Total to pay:",
        "checkout.whatsapp": "Confirm via WhatsApp",
        "contact.badge": "We Are Here",
        "contact.title": "Contact Us",
        "contact.subtitle": "We are ready to help you plan your dream trip",
        "contact.phone": "Phone",
        "contact.callNow": "Call now",
        "contact.chat": "Chat",
        "contact.sendEmail": "Send email",
        "support.modal.desc": "We are available at all times to help you.<br>Contact us through any of these channels:",
        "support.line1": "Main line",
        "support.line2": "Alternative line",
        "support.hours": "Available 7 days a week, 24 hours",
        "authentic.title": "Authentic Experiences in Cusco",
        "authentic.activities": "Our Activities",
        "authentic.fleet": "Our Transport Fleet",
        "authentic.cta": "Ready to live an authentic experience?",
        "authentic.cta.btn": "Book now via WhatsApp",
        "footer.desc": "Creating unforgettable experiences in the heart of the Inca Empire since 2008.",
        "footer.quickLinks": "Quick Links",
        "footer.about": "About Us",
        "footer.info": "Information",
        "footer.terms": "Terms & Conditions",
        "footer.privacy": "Privacy Policy",
        "footer.faq": "FAQ",
        "footer.hours": "Opening Hours",
        "footer.weekdays": "Monday - Friday: 8:00 AM - 8:00 PM",
        "footer.saturday": "Saturday: 9:00 AM - 6:00 PM",
        "footer.sunday": "Sunday: 10:00 AM - 4:00 PM",
        "footer.payment": "Accepted payment methods",
        "footer.rights": "© 2025 ALLPAMAGIC. All rights reserved.",
        "footer.madeIn": "Designed with ❤️ in Cusco, Peru"
    },
    pt: {
        "nav.home": "Início",
        "nav.about": "Sobre Nós",
        "nav.packages": "Pacotes",
        "nav.accommodation": "Acomodação",
        "nav.gallery": "Galeria de Fotos",
        "nav.blog": "Blog de Viagens",
        "nav.contact": "Contato",
        "hero.badge": "Sua próxima grande história começa aquí",
        "hero.title": "Cusco como Você Nunca <br> Imaginou",
        "hero.subtitle": "Desde a majestade de Machu Picchu até os segredos do Vale Sagrado. Criamos aventuras sob medida com o toque mágico que você merece.",
        "hero.btn1": "Reservar minha Aventura",
        "hero.btn2": "Ver Tours e Preços <span>⟶</span>",
        "hero.scroll": "Explorar",
        "about.mission.badge": "Nosso Propósito",
        "about.mission.title": "Missão",
        "about.mission.text": "Projetar experiências personalizadas que conectem a alma do viajante com a energia viva dos Andes.",
        "about.vision.badge": "Nosso Futuro",
        "about.vision.title": "Visão",
        "about.vision.text": "Buscamos nos consolidar como uma agência de viagens confiável e reconhecida pela nossa qualidade humana.",
        "about.founder.badge": "Nossa Essência",
        "about.founder.title": "Elena: Experiência e Paixão",
        "about.founder.text": "Natural de <strong>Chimbote</strong>, Elena adotou <strong>Cusco</strong> como seu lar há 30 anos. Com <strong>25 anos de trajetória</strong>, sua excelência é o nosso pilar.",
        "features.guides.title": "Guias Certificados",
        "features.guides.desc": "Profissionais especialistas",
        "features.guides.btn": "Conhecer nossos guias",
        "features.transport.title": "Transporte Premium",
        "features.transport.desc": "Veículos modernos e seguros",
        "features.support.title": "Atendimento 24/7",
        "features.support.desc": "Suporte personalizado a qualquer momento",
        "features.authentic.title": "Experiências Auténticas",
        "features.authentic.desc": "Viva Cusco a partir de sua essência cultural e espiritual",
        "packages.badge": "Nossos Tours",
        "packages.title": "Pacotes Turísticos",
        "packages.subtitle": "Experiências cuidadosamente desenvolvidas para sua aventura perfeita",
        "package.from": "A partir de",
        "package.perPerson": "por pessoa",
        "package.details": "VER DETALHES",
        "package.add": "Adicionar",
        "filters.sort": "Ordenar por preço:",
        "filters.select": "Selecionar",
        "filters.lowToHigh": "Menor para Maior",
        "filters.highToLow": "Mayor para Menor",
        "filters.duration": "Duração:",
        "filters.allDurations": "Todas as durações",
        "filters.halfDay": "Meio dia (4 horas)",
        "filters.fullDay": "Dia completo",
        "filters.multiDay": "Mais de um dia",
        "filters.reset": "Limpar filtros",
        "filters.apply": "Aplicar",
        "activities.badge": "Mais que um Tour",
        "activities.title": "Viva Cusco com Todos os Sentidos",
        "activities.subtitle": "Da terra à sua alma — experiências únicas que vão muito além do circuito clássico",
        "activities.cooking": "Aulas de Culinária",
        "activities.pachamama": "Pagamento à Terra",
        "activities.coca": "Leitura de Coca",
        "activities.toros": "Pintura de Touros de Pucara",
        "activities.choco": "ChocoMuseu",
        "activities.community": "Visita a uma Comunidade Agrícola",
        "activities.bakery": "Visitar uma Padaria",
        "activities.chicha": "Visitar uma Chicheria",
        "activities.crafts": "Oficinas de Artesanato (San Blas)",
        "activities.rafting": "River Rafting",
        "activities.quads": "Quadriciclos",
        "activities.biking": "Biking",
        "activities.ayahuasca": "Ayahuasca",
        "activities.horses": "Passeio a Cavalo",
        "activities.llama": "Llama Trek",
        "activities.morada": "Morada dos Deuses",
        "activities.cemetery": "Visitar Cemitérios",
        "activities.festivals": "Festas Patronais",
        "activities.waterfalls": "Trekking (Cachoeiras)",
        "activities.whatsapp": "Consultar disponibilidade pelo WhatsApp",
        "gallery.badge": "Momentos Mágicos",
        "gallery.title": "Galeria de Fotos",
        "gallery.subtitle": "Descubra os incríveis momentos dos nossos viajantes",
        "gallery.machupicchu": "A cidadela inca",
        "gallery.rainbow.title": "Montanha Arco-Íris",
        "gallery.valley.title": "Vale Sagrado",
        "gallery.valley.desc": "Paisagens ancestrais",
        "gallery.cusco.title": "Cusco Colonial",
        "gallery.cusco.desc": "Centro histórico",
        "gallery.sacsay": "Fortaleza inca",
        "gallery.humantay": "Água turquesa",
        "cart.title": "Meu Carrinho",
        "cart.empty": "Seu carrinho está vazio",
        "cart.emptyHint": "Adicione pacotes para começar sua aventura",
        "cart.total": "Total:",
        "cart.confirm": "Confirmar Compra",
        "checkout.title": "Finalizar Compra",
        "checkout.contactTitle": "Informações de Contato",
        "checkout.name": "Nome completo *",
        "checkout.email": "Email *",
        "checkout.phone": "Telefone / WhatsApp *",
        "checkout.notes": "Comentários ou pedidos especiais (opcional)",
        "checkout.totalLabel": "Total a pagar:",
        "checkout.whatsapp": "Confirmar pelo WhatsApp",
        "contact.badge": "Estamos Aquí",
        "contact.title": "Entre em Contato",
        "contact.subtitle": "Estamos prontos para ajudá-lo a planejar sua viagem dos sonhos",
        "contact.phone": "Telefone",
        "contact.callNow": "Ligar agora",
        "contact.chat": "Conversar",
        "contact.sendEmail": "Enviar email",
        "support.modal.desc": "Estamos disponíveis a qualquer momento para ajudá-lo.<br>Entre em contato por qualquer um destes canais:",
        "support.line1": "Linha principal",
        "support.line2": "Linha alternativa",
        "support.hours": "Disponível 7 dias por semana, 24 horas",
        "authentic.title": "Experiências Autênticas em Cusco",
        "authentic.activities": "Nossas Atividades",
        "authentic.fleet": "Nossa Frota de Transporte",
        "authentic.cta": "Pronto para viver uma experiência autêntica?",
        "authentic.cta.btn": "Reservar agora pelo WhatsApp",
        "footer.desc": "Criando experiências inesquecíveis no coração do Império Inca desde 2008.",
        "footer.quickLinks": "Links Rápidos",
        "footer.about": "Sobre Nós",
        "footer.info": "Informações",
        "footer.terms": "Termos e Condições",
        "footer.privacy": "Política de Privacidade",
        "footer.faq": "Perguntas Frequentes",
        "footer.hours": "Horário de Atendimento",
        "footer.weekdays": "Segunda - Sexta: 8:00 - 20:00",
        "footer.saturday": "Sábado: 9:00 - 18:00",
        "footer.sunday": "Domingo: 10:00 - 16:00",
        "footer.payment": "Métodos de pagamento aceitos",
        "footer.rights": "© 2025 ALLPAMAGIC. Todos os direitos reservados.",
        "footer.madeIn": "Desenvolvido com ❤️ em Cusco, Peru"
    }
};

/* ══════════════════════════════════════════════════════════════════
   DATOS DE GUÍAS
   ══════════════════════════════════════════════════════════════════ */
const guidesData = [
    {
        name: "Luis Edgar Yanque Mendrano",
        title: { es: "Guía de Turismo", en: "Tourism Guide", pt: "Guia de Turismo" },
        photo: "https://i.imgur.com/BbR0JOz.png",
        bio: {
            es: "Profesional con experiencia en agencias de viajes, desempeñándose como tour manager y guía de turismo. Se especializa en coordinar y liderar recorridos culturales, brindando acompañamiento constante a los viajeros y asegurando experiencias organizadas, seguras y memorables.",
            en: "A seasoned professional in the travel industry, working as a tour manager and tourism guide. He specialises in coordinating and leading cultural tours, providing constant support to travellers and ensuring organised, safe and memorable experiences.",
            pt: "Profissional experiente em agências de viagens, atuando como tour manager e guia de turismo. Especializa-se em coordenar e liderar roteiros culturais, acompanhando constantemente os viajantes e garantindo experiências organizadas, seguras e memoráveis."
        },
        languages: ["Español", "English"],
        license: "Guía Profesional Licenciado"
    },
    {
        name: "James Miguel Masias Coragua",
        title: { es: "Guía de Turismo", en: "Tourism Guide", pt: "Guia de Turismo" },
        photo: "https://i.imgur.com/y1N8RaN.png",
        bio: {
            es: "Guía profesional licenciado por la Universidad San Antonio Abad del Cusco. Su interés por el turismo nació en la adolescencia al descubrir la historia y cultura del Perú. Participó en un programa Work and Travel en EE.UU. y trabajó con Norwegian Cruise Line recorriendo el Báltico, el Caribe y Norteamérica.",
            en: "Licensed professional guide from San Antonio Abad University in Cusco. His passion for tourism was sparked in his teens when he discovered Peru's history and culture. He joined a Work and Travel programme in the US and worked with Norwegian Cruise Line, sailing through the Baltic, the Caribbean and North America.",
            pt: "Guia profissional licenciado pela Universidade San Antonio Abad do Cusco. Seu interesse pelo turismo surgiu na adolescência ao descobrir a história e a cultura do Peru. Participou de um programa Work and Travel nos EUA e trabalhou com a Norwegian Cruise Line pelo Báltico, Caribe e América do Norte."
        },
        languages: ["Español", "English"],
        license: "Guía Profesional Licenciado"
    },
    {
        name: "Jorge Luis Cáceres Calderon",
        title: { es: "Guía de Turismo", en: "Tourism Guide", pt: "Guia de Turismo" },
        photo: "https://i.imgur.com/tFpxgW9.png",
        bio: {
            es: "Profesional en Turismo y Hotelería con más de 15 años de trayectoria. Actualmente trabaja como guía y tour leader con diversos grupos de viajeros, priorizando siempre que los turistas se sientan bienvenidos, en buenas manos y atendidos de forma profesional y empática.",
            en: "Tourism and Hospitality professional with over 15 years of experience. Currently works as a guide and tour leader for diverse groups of travellers, always ensuring that guests feel welcome, well taken care of, and attended to in a professional and empathetic way.",
            pt: "Profissional de Turismo e Hotelaria com mais de 15 anos de trajetória. Atualmente trabalha como guia e tour leader com diversos grupos de viajantes, sempre priorizando que os turistas se sintam bem-vindos, em boas mãos e atendidos de forma profissional e empática."
        },
        languages: ["Español", "English"],
        license: "Guía Profesional Licenciado"
    }
];

/* ══════════════════════════════════════════════════════════════════
   ESTILOS GLOBALES INYECTADOS
   ══════════════════════════════════════════════════════════════════ */
(function injectStyles() {
    const s = document.createElement('style');
    s.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0);     opacity: 1; }
            to   { transform: translateX(400px); opacity: 0; }
        }
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: #C1440E;
            color: #fff;
            padding: 8px 16px;
            border-radius: 0 0 8px 0;
            font-weight: 700;
            z-index: 10000;
            transition: top .2s;
            text-decoration: none;
        }
        .skip-link:focus { top: 0; }
        :focus-visible {
            outline: 3px solid #E2AD48;
            outline-offset: 3px;
            border-radius: 4px;
        }
        .img-loading {
            background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    `;
    document.head.appendChild(s);
})();

/* ══════════════════════════════════════════════════════════════════
   ACCESIBILIDAD — Skip Link
   ══════════════════════════════════════════════════════════════════ */
function insertSkipLink() {
    if (document.querySelector('.skip-link')) return;
    const link = document.createElement('a');
    link.href = '#paquetes';
    link.className = 'skip-link';
    link.textContent = 'Saltar al contenido principal';
    document.body.insertBefore(link, document.body.firstChild);
}

/* ══════════════════════════════════════════════════════════════════
   SISTEMA I18N
   ══════════════════════════════════════════════════════════════════ */
function applyTranslations(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive);
    });
    document.documentElement.lang = lang;
}

function initLanguageSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
        btn.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                applyTranslations(btn.dataset.lang);
            }
        });
    });
    applyTranslations('es');
}

/* ══════════════════════════════════════════════════════════════════
   NAVBAR
   ══════════════════════════════════════════════════════════════════ */
function initNavbar() {
    const toggler = document.getElementById('navbarToggler');
    const menu    = document.getElementById('navbarMenu');
    const links   = document.querySelectorAll('.nav-link');

    toggler?.addEventListener('click', () => {
        const expanded = toggler.classList.toggle('active');
        menu.classList.toggle('active');
        toggler.setAttribute('aria-expanded', expanded);
    });

    links.forEach(link => {
        link.addEventListener('click', function () {
            if (this.getAttribute('href').startsWith('#')) {
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                if (menu?.classList.contains('active')) {
                    menu.classList.remove('active');
                    toggler?.classList.remove('active');
                    toggler?.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Scroll spy con IntersectionObserver (más eficiente que listener de scroll)
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => {
                    l.classList.remove('active');
                    if (l.getAttribute('href') === '#' + entry.target.id) l.classList.add('active');
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => observer.observe(s));
}

/* ══════════════════════════════════════════════════════════════════
   CARRUSEL NOSOTROS
   ══════════════════════════════════════════════════════════════════ */
function initAboutCarousel() {
    const slides   = document.querySelectorAll('.story-slide');
    const dots     = document.querySelectorAll('.about-story-rotation .dot');
    const btnPrev  = document.getElementById('aboutPrev');
    const btnNext  = document.getElementById('aboutNext');
    let aboutIndex = 0;
    let aboutInterval;

    if (!slides.length) return;

    function showAboutSlide(n) {
        slides.forEach(s => { s.classList.remove('active'); s.setAttribute('aria-hidden', 'true'); });
        dots.forEach(d => d.classList.remove('active'));
        aboutIndex = (n + slides.length) % slides.length;
        slides[aboutIndex].classList.add('active');
        slides[aboutIndex].removeAttribute('aria-hidden');
        dots[aboutIndex].classList.add('active');
    }

    function startAboutAutoPlay() {
        clearInterval(aboutInterval);
        aboutInterval = setInterval(() => showAboutSlide(aboutIndex + 1), 7000);
    }

    btnNext?.addEventListener('click', () => { showAboutSlide(aboutIndex + 1); startAboutAutoPlay(); });
    btnPrev?.addEventListener('click', () => { showAboutSlide(aboutIndex - 1); startAboutAutoPlay(); });

    dots.forEach((dot, i) => {
        dot.setAttribute('role', 'button');
        dot.setAttribute('tabindex', '0');
        dot.addEventListener('click', () => { showAboutSlide(i); startAboutAutoPlay(); });
        dot.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showAboutSlide(i); startAboutAutoPlay(); }
        });
    });

    // Soporte táctil / swipe
    let touchStartX = 0;
    const wrapper = document.querySelector('.story-carousel-wrapper');
    wrapper?.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    wrapper?.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) { showAboutSlide(diff > 0 ? aboutIndex + 1 : aboutIndex - 1); startAboutAutoPlay(); }
    });

    wrapper?.addEventListener('mouseenter', () => clearInterval(aboutInterval));
    wrapper?.addEventListener('mouseleave', () => startAboutAutoPlay());

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        startAboutAutoPlay();
    }
    showAboutSlide(0);
}

/* ══════════════════════════════════════════════════════════════════
   FILTROS DE PAQUETES
   ══════════════════════════════════════════════════════════════════ */
function initFilters() {
    document.getElementById('applyFiltersBtn')?.addEventListener('click', applyFilters);
    document.getElementById('resetFilters')?.addEventListener('click', () => {
        document.getElementById('sortPrice').value      = '';
        document.getElementById('filterDuration').value = '';
        resetFiltersUI();
    });
}

function resetFiltersUI() {
    const grid = document.getElementById('packagesGrid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.package-card'));
    cards.forEach(c => { c.style.display = ''; });
    cards.sort((a, b) => parseInt(a.dataset.originalIndex || 0) - parseInt(b.dataset.originalIndex || 0));
    cards.forEach(c => grid.appendChild(c));
}

function applyFilters() {
    const grid = document.getElementById('packagesGrid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.package-card'));
    cards.forEach((c, i) => { if (!c.dataset.originalIndex) c.dataset.originalIndex = i; });
    cards.forEach(c => { c.style.display = ''; });

    const dur = document.getElementById('filterDuration')?.value || '';
    if (dur) {
        cards.forEach(c => {
            const d = (c.dataset.duration || '').toLowerCase();
            let ok = false;
            if (dur === 'halfday') ok = d.includes('4 hora') || d.includes('medio');
            if (dur === 'fullday') ok = (d.includes('día') || d.includes('dia')) && !d.includes('días') && !d.includes('dias');
            if (dur === 'multiday') ok = d.includes('días') || d.includes('dias') || d.includes('noches');
            if (!ok) c.style.display = 'none';
        });
    }

    const sort = document.getElementById('sortPrice')?.value || '';
    if (sort) {
        const vis = cards.filter(c => c.style.display !== 'none');
        const hid = cards.filter(c => c.style.display === 'none');
        if (sort === 'asc') vis.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        if (sort === 'desc') vis.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        [...vis, ...hid].forEach(c => grid.appendChild(c));
    }
}

/* ══════════════════════════════════════════════════════════════════
   CARRITO DE COMPRAS
   ══════════════════════════════════════════════════════════════════ */
function initCart() {
    document.getElementById('cartFloatBtn')?.addEventListener('click', e => { e.preventDefault(); openCart(); });
    document.getElementById('cartClose')?.addEventListener('click',    e => { e.preventDefault(); closeCart(); });
    document.getElementById('cartOverlay')?.addEventListener('click',  e => { e.preventDefault(); closeCart(); });
    document.getElementById('checkoutBtn')?.addEventListener('click',  e => { e.preventDefault(); openCheckoutModal(); });

    document.addEventListener('click', e => {
        const btn = e.target.closest('.btn-add-to-cart');
        if (btn) { e.preventDefault(); addToCart(btn.dataset.packageId); }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const sidebar = document.getElementById('cartSidebar');
            if (sidebar?.classList.contains('active')) closeCart();
        }
    });
}

function openCart() {
    document.getElementById('cartSidebar')?.classList.add('active');
    document.getElementById('cartOverlay')?.classList.add('active');
    document.body.classList.add('cart-open');
    setTimeout(() => document.getElementById('cartClose')?.focus(), 100);
}

function closeCart() {
    document.getElementById('cartSidebar')?.classList.remove('active');
    document.getElementById('cartOverlay')?.classList.remove('active');
    document.body.classList.remove('cart-open');
    document.getElementById('cartFloatBtn')?.focus();
}

function addToCart(packageId) {
    if (!window.ALL_TOURS_DATA?.length) { showToast('Error cargando tours'); return; }
    const t = window.ALL_TOURS_DATA.find(x => String(x.ID) === String(packageId));
    if (!t) { showToast('Paquete no encontrado'); return; }
    if (cart.find(i => String(i.id) === String(packageId))) {
        showToast('Este paquete ya está en tu carrito');
        openCart();
        return;
    }
    cart.push({
        id:        String(packageId),
        title:     t.Titulo,
        price:     parseFloat(t.PrecioDesde) || 0,
        adults:    1,
        children:  0,
        image:     t.ImagenURL || '',
        duration:  t.Duracion || '',
        groupSize: t.TamañoGrupo || ''
    });
    saveCartToStorage();
    updateCartUI();
    showToast('✓ Paquete agregado al carrito');
    setTimeout(openCart, 500);
}

function removeFromCart(id) {
    cart = cart.filter(i => String(i.id) !== String(id));
    saveCartToStorage();
    updateCartUI();
    showToast('Paquete eliminado del carrito');
}
window.removeFromCart = removeFromCart;

function updatePassengerCount(id, type, delta) {
    const item = cart.find(i => String(i.id) === String(id));
    if (!item) return;
    if (type === 'adults')   item.adults   = Math.max(1, item.adults + delta);
    if (type === 'children') item.children = Math.max(0, item.children + delta);
    saveCartToStorage();
    updateCartUI();
}
window.updatePassengerCount = updatePassengerCount;

function updateCartUI() {
    const badge   = document.getElementById('cartBadge');
    const empty   = document.getElementById('cartEmpty');
    const items   = document.getElementById('cartItems');
    const footer  = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotalAmount');

    if (badge) {
        badge.textContent = cart.length;
        badge.style.display = cart.length ? 'flex' : 'none';
    }

    if (!cart.length) {
        if (empty)  empty.style.display  = 'block';
        if (items)  items.style.display  = 'none';
        if (footer) footer.style.display = 'none';
        return;
    }

    if (empty)  empty.style.display  = 'none';
    if (items)  items.style.display  = 'flex';
    if (footer) footer.style.display = 'block';

    if (items) {
        items.innerHTML = cart.map(item => {
            const tp = item.adults + item.children;
            return `
            <div class="cart-item" role="article" aria-label="${item.title}">
                <div class="cart-item-header">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <button class="cart-item-remove"
                            onclick="removeFromCart('${item.id}')"
                            aria-label="Eliminar ${item.title}">
                        <i class="fas fa-trash-alt" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="cart-item-passengers">
                    <div class="passenger-counter">
                        <label>Adultos</label>
                        <div class="counter-controls">
                            <button class="counter-btn"
                                    onclick="updatePassengerCount('${item.id}','adults',-1)"
                                    aria-label="Reducir adultos"
                                    ${item.adults <= 1 ? 'disabled' : ''}>
                                <i class="fas fa-minus" aria-hidden="true"></i>
                            </button>
                            <span class="counter-value" aria-live="polite">${item.adults}</span>
                            <button class="counter-btn"
                                    onclick="updatePassengerCount('${item.id}','adults',1)"
                                    aria-label="Aumentar adultos">
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div class="passenger-counter">
                        <label>Niños</label>
                        <div class="counter-controls">
                            <button class="counter-btn"
                                    onclick="updatePassengerCount('${item.id}','children',-1)"
                                    aria-label="Reducir niños"
                                    ${item.children <= 0 ? 'disabled' : ''}>
                                <i class="fas fa-minus" aria-hidden="true"></i>
                            </button>
                            <span class="counter-value" aria-live="polite">${item.children}</span>
                            <button class="counter-btn"
                                    onclick="updatePassengerCount('${item.id}','children',1)"
                                    aria-label="Aumentar niños">
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="cart-item-price">
                    $${(item.price * tp).toFixed(2)}
                    <span class="cart-item-price-per">${tp} persona${tp > 1 ? 's' : ''} × $${item.price.toFixed(2)}</span>
                </div>
            </div>`;
        }).join('');
    }
    if (totalEl) totalEl.textContent = '$' + calculateCartTotal().toFixed(2);
}

function calculateCartTotal() {
    return cart.reduce((s, i) => s + i.price * (i.adults + i.children), 0);
}

function saveCartToStorage() {
    try { localStorage.setItem('allpamagic_cart', JSON.stringify(cart)); } catch (e) {}
}

function loadCartFromStorage() {
    try {
        const s = localStorage.getItem('allpamagic_cart');
        if (s) { cart = JSON.parse(s); updateCartUI(); }
    } catch (e) { cart = []; }
}

/* ══════════════════════════════════════════════════════════════════
   MODALES
   ══════════════════════════════════════════════════════════════════ */
function initModals() {
    document.addEventListener('click', e => {
        const btn = e.target.closest('.btn-more-info, .btn-more-info-large');
        if (btn) { e.preventDefault(); openPackageDetailModal(btn.dataset.packageId); }
    });

    document.getElementById('packageDetailClose')?.addEventListener('click', () => closeModal('packageDetailModal'));
    document.getElementById('checkoutClose')?.addEventListener('click',      () => closeModal('checkoutModal'));
    document.getElementById('infoModalClose')?.addEventListener('click',     () => closeModal('infoModal'));
    document.getElementById('confirmWhatsApp')?.addEventListener('click', sendWhatsAppMessage);

    document.addEventListener('click', e => {
        if (e.target.classList.contains('modal')) closeModal(e.target.id);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const m = document.querySelector('.modal.active');
            if (m) closeModal(m.id);
        }
    });
}

function openModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.add('active');
    document.body.classList.add('modal-open');
    m.setAttribute('aria-hidden', 'false');
    const focusable = m.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    setTimeout(() => focusable?.focus(), 100);
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.remove('active');
    document.body.classList.remove('modal-open');
    m.setAttribute('aria-hidden', 'true');
}

function openPackageDetailModal(packageId) {
    const t = window.ALL_TOURS_DATA?.find(x => String(x.ID) === String(packageId));
    if (!t) { console.warn('Tour no encontrado:', packageId); return; }
    const content = document.getElementById('packageDetailContent');
    if (!content) return;

    const langSuffix  = currentLang === 'es' ? '' : '_' + currentLang.toUpperCase();
    const titulo      = (langSuffix && t['Titulo' + langSuffix]) || t.Titulo || '';
    const descripcion = (langSuffix && t['Descripcion' + langSuffix]) || t.Descripcion || t.Detalle || 'Explora este increíble destino con nosotros.';
    const detalle     = (langSuffix && t['Detalle' + langSuffix]) || t.Detalle || '';
    const incluye     = t.Incluye ? t.Incluye.toString().split(',').map(i => i.trim()).filter(Boolean) : [];
    const extras      = [t.Alimentacion, t.Alojamiento].filter(Boolean);
    const allExtras   = [...extras, ...incluye];

    const extrasList = allExtras.length ? `
        <div class="detail-extras">
            <h4 class="detail-extras-title"><i class="fas fa-check-circle" aria-hidden="true"></i> Incluye:</h4>
            ${allExtras.map(ex => `<div class="detail-extra-item"><i class="fas fa-check" aria-hidden="true"></i> ${ex}</div>`).join('')}
        </div>` : '';

    const detalleSection = detalle ? `
        <div class="detail-extras">
            <h4 class="detail-extras-title"><i class="fas fa-info-circle" aria-hidden="true"></i> Detalles:</h4>
            <p style="color:var(--gray);line-height:1.8;">${detalle}</p>
        </div>` : '';

    content.innerHTML = `
        <div class="detail-image-wrap">
            <img src="${t.ImagenURL || ''}" alt="${titulo}" loading="lazy">
            ${t.Badge ? `<div class="package-badge detail-badge"><i class="fas fa-star" aria-hidden="true"></i><span>${t.Badge}</span></div>` : ''}
        </div>
        <div class="detail-body">
            <h2 class="detail-title">${titulo}</h2>
            <div class="detail-price-row">
                <span class="detail-price-label">${translations[currentLang]?.['package.from'] || 'Desde'}</span>
                <span class="detail-price-amount">$${t.PrecioDesde}</span>
                <span class="detail-price-person">${translations[currentLang]?.['package.perPerson'] || 'por persona'}</span>
            </div>
            <p class="detail-description">${descripcion}</p>
            <div class="detail-meta-grid">
                ${t.Duracion        ? `<div class="detail-meta-item"><i class="fas fa-clock" aria-hidden="true"></i><div><span class="detail-meta-label">Duración</span><span class="detail-meta-value">${t.Duracion}</span></div></div>` : ''}
                ${t.TamañoGrupo    ? `<div class="detail-meta-item"><i class="fas fa-users" aria-hidden="true"></i><div><span class="detail-meta-label">Grupo</span><span class="detail-meta-value">${t.TamañoGrupo}</span></div></div>` : ''}
                ${t.NivelDificultad ? `<div class="detail-meta-item"><i class="fas fa-hiking" aria-hidden="true"></i><div><span class="detail-meta-label">Dificultad</span><span class="detail-meta-value">${t.NivelDificultad}</span></div></div>` : ''}
            </div>
            ${extrasList}
            ${detalleSection}
            <div class="detail-actions">
                <button class="btn btn-primary btn-block detail-add-btn"
                        onclick="addToCartFromModal('${t.ID}')"
                        aria-label="Agregar ${titulo} al carrito">
                    <i class="fas fa-cart-plus" aria-hidden="true"></i>
                    <span>${translations[currentLang]?.['package.add'] || 'Agregar'} al Carrito</span>
                </button>
            </div>
        </div>`;

    openModal('packageDetailModal');
}

function addToCartFromModal(id) { addToCart(id); closeModal('packageDetailModal'); }
window.addToCartFromModal = addToCartFromModal;

function openCheckoutModal() {
    if (!cart.length) { showToast('Tu carrito está vacío'); return; }
    const summary = document.getElementById('checkoutSummary');
    const totalEl = document.getElementById('checkoutTotalAmount');
    if (!summary || !totalEl) return;

    summary.innerHTML = cart.map(item => {
        const tp = item.adults + item.children;
        return `
        <div class="checkout-item">
            <div class="checkout-item-header">
                <h4 class="checkout-item-title">${item.title}</h4>
                <span class="checkout-item-price">$${(item.price * tp).toFixed(2)}</span>
            </div>
            <div class="checkout-item-details">
                <span><i class="fas fa-users" aria-hidden="true"></i> ${item.adults} adulto${item.adults > 1 ? 's' : ''}</span>
                ${item.children ? `<span><i class="fas fa-child" aria-hidden="true"></i> ${item.children} niño${item.children > 1 ? 's' : ''}</span>` : ''}
                ${item.duration ? `<span><i class="fas fa-clock" aria-hidden="true"></i> ${item.duration}</span>` : ''}
            </div>
        </div>`;
    }).join('');
    totalEl.textContent = '$' + calculateCartTotal().toFixed(2);
    closeCart();
    openModal('checkoutModal');
}

function sendWhatsAppMessage() {
    const name  = document.getElementById('checkoutName')?.value.trim();
    const email = document.getElementById('checkoutEmail')?.value.trim();
    const phone = document.getElementById('checkoutPhone')?.value.trim();
    const notes = document.getElementById('checkoutNotes')?.value.trim();

    if (!name || !email || !phone) { showToast('Por favor completa todos los campos requeridos'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Email inválido'); return; }

    let msg = `¡Hola! Soy ${name} y me interesa reservar:\n\n`;
    cart.forEach(item => {
        const tp = item.adults + item.children;
        msg += `📦 *${item.title}*\n   👥 ${item.adults} adulto${item.adults > 1 ? 's' : ''}`;
        if (item.children) msg += `, ${item.children} niño${item.children > 1 ? 's' : ''}`;
        msg += `\n   💰 $${(item.price * tp).toFixed(2)}\n\n`;
    });
    msg += `💵 *Total: $${calculateCartTotal().toFixed(2)}*\n📧 ${email}\n📱 ${phone}`;
    if (notes) msg += `\n📝 ${notes}`;

    window.open('https://wa.me/51943595253?text=' + encodeURIComponent(msg), '_blank');
    cart = [];
    saveCartToStorage();
    updateCartUI();
    closeModal('checkoutModal');
    showToast('Redirigiendo a WhatsApp...');
}

/* ══════════════════════════════════════════════════════════════════
   GUÍAS
   ══════════════════════════════════════════════════════════════════ */
function openGuidesModal() {
    const content = document.getElementById('infoModalContent');
    if (!content) return;

    const guidesI18n = {
        es: { heading: "Nuestros Guías Certificados", subtext: "Profesionales apasionados por compartir la magia del Perú, con formación certificada y amplia experiencia.", ctaText: "¿Quieres solicitar un guía específico?", ctaBtn: "Contactar por WhatsApp" },
        en: { heading: "Our Certified Guides", subtext: "Passionate professionals dedicated to sharing the magic of Peru, with certified training and extensive experience.", ctaText: "Would you like to request a specific guide?", ctaBtn: "Contact via WhatsApp" },
        pt: { heading: "Nossos Guias Certificados", subtext: "Profissionais apaixonados por compartilhar a magia do Peru, com formação certificada e ampla experiência.", ctaText: "Deseja solicitar um guia específico?", ctaBtn: "Contatar pelo WhatsApp" }
    };
    const ui = guidesI18n[currentLang] || guidesI18n.es;

    const guidesHTML = guidesData.map(g => {
        const title = typeof g.title === 'object' ? (g.title[currentLang] || g.title.es) : g.title;
        const bio   = typeof g.bio   === 'object' ? (g.bio[currentLang]   || g.bio.es)   : g.bio;
        return `
        <div style="background:#FAF7F2;border-radius:15px;padding:2rem;text-align:center;box-shadow:0 4px 16px rgba(139,37,0,.12);transition:transform .3s ease;"
             onmouseover="this.style.transform='translateY(-5px)'"
             onmouseout="this.style.transform='translateY(0)'">
            <img src="${g.photo}" alt="Foto de ${g.name}" loading="lazy"
                 style="width:130px;height:130px;border-radius:50%;object-fit:cover;margin:0 auto 1rem;display:block;border:5px solid #D4A574;">
            <h3 style="font-size:1.2rem;color:#1F1612;margin-bottom:.4rem;">${g.name}</h3>
            <p style="color:#C1440E;font-weight:700;font-size:.82rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:1rem;">${title}</p>
            <p style="color:#6B5E57;font-size:.92rem;line-height:1.75;margin-bottom:1rem;">${bio}</p>
            <div style="display:flex;justify-content:center;gap:.5rem;flex-wrap:wrap;margin-bottom:.75rem;">
                ${g.languages.map(l => `<span style="background:#C1440E;color:#fff;padding:.3rem .8rem;border-radius:50px;font-size:.78rem;font-weight:600;">${l}</span>`).join('')}
            </div>
            <p style="color:#B8AFA8;font-size:.78rem;font-style:italic;">${g.license}</p>
        </div>`;
    }).join('');

    content.innerHTML = `
        <h2 style="display:flex;align-items:center;gap:.75rem;color:#1F1612;border-bottom:3px solid #C1440E;padding-bottom:1rem;margin-bottom:2rem;">
            <i class="fas fa-users" style="color:#C1440E;" aria-hidden="true"></i> ${ui.heading}
        </h2>
        <p style="color:#6B5E57;margin-bottom:2rem;line-height:1.8;">${ui.subtext}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;">
            ${guidesHTML}
        </div>
        <div style="background:linear-gradient(135deg,#C1440E,#E86A33);color:#fff;border-radius:15px;padding:1.5rem;margin-top:2rem;text-align:center;">
            <i class="fab fa-whatsapp" style="font-size:1.5rem;margin-bottom:.5rem;display:block;" aria-hidden="true"></i>
            <p style="margin:0;font-size:1rem;">${ui.ctaText}</p>
            <a href="https://wa.me/51943595253" target="_blank" rel="noopener noreferrer"
               style="display:inline-block;margin-top:.75rem;background:#fff;color:#C1440E;padding:.6rem 1.5rem;border-radius:50px;font-weight:700;text-decoration:none;">
                ${ui.ctaBtn}
            </a>
        </div>`;
    openModal('infoModal');
}

function initGuidesButton() {
    document.getElementById('showGuidesBtn')?.addEventListener('click', e => {
        e.preventDefault();
        openGuidesModal();
    });
}

/* ══════════════════════════════════════════════════════════════════
   INFO LINKS (footer)
   ══════════════════════════════════════════════════════════════════ */
function initInfoLinks() {
    document.addEventListener('click', e => {
        const link = e.target.closest('.info-link');
        if (link) { e.preventDefault(); openInfoModal(link.dataset.info); }
    });
}

function openInfoModal(type) {
    const content = document.getElementById('infoModalContent');
    if (!content) return;
    const map = {
        terms: `<h2><i class="fas fa-file-contract" aria-hidden="true"></i> Términos y Condiciones</h2>
            <h3>1. Aceptación de Términos</h3><p>Al utilizar los servicios de ALLPAMAGIC, aceptas estos términos en su totalidad.</p>
            <h3>2. Reservas y Pagos</h3><p>Todas las reservas deben confirmarse con un depósito del 50%.</p>
            <h3>3. Cancelaciones</h3><p>Más de 15 días: reembolso del 80%. Menos de 15 días: sin reembolso.</p>`,
        privacy: `<h2><i class="fas fa-shield-alt" aria-hidden="true"></i> Política de Privacidad</h2>
            <h3>Recopilación de Información</h3><p>ALLPAMAGIC recopila nombre, email y teléfono para procesar reservas únicamente.</p>
            <h3>Uso de la Información</h3><p>No compartimos tus datos con terceros sin tu consentimiento expreso.</p>`,
        faq: `<h2><i class="fas fa-question-circle" aria-hidden="true"></i> Preguntas Frecuentes</h2>
            <h3>¿Qué incluyen los paquetes?</h3><p>Transporte, guía certificado y entradas indicadas.</p>
            <h3>¿Cómo confirmo mi reserva?</h3><p>Por WhatsApp con un depósito del 50%.</p>
            <h3>¿Qué pasa si llueve?</h3><p>Operamos con lluvia moderada. En condiciones extremas reprogramamos sin costo.</p>`,
        blog: `<h2><i class="fas fa-blog" aria-hidden="true"></i> Blog de Viajes</h2>
            <div class="blog-post"><h3>Los Mejores Meses para Visitar Machu Picchu</h3><p class="blog-date">Enero 15, 2025</p>
            <p>La temporada seca (mayo–octubre) ofrece cielos despejados. La húmeda tiene menos turistas.</p></div>
            <div class="blog-post"><h3>Aclimatación en Cusco</h3><p class="blog-date">Enero 10, 2025</p>
            <p>Descansa el primer día, bebe agua, toma mate de coca y evita el alcohol.</p></div>`
    };
    content.innerHTML = map[type] || '<h2>Contenido no disponible</h2>';
    openModal('infoModal');
}

/* ══════════════════════════════════════════════════════════════════
   SCROLL SUAVE
   ══════════════════════════════════════════════════════════════════ */
function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ══════════════════════════════════════════════════════════════════
   TOAST / NOTIFICACIONES
   ══════════════════════════════════════════════════════════════════ */
function showToast(msg) {
    document.querySelectorAll('.allpa-toast').forEach(t => t.remove());
    const t = document.createElement('div');
    t.className = 'allpa-toast';
    t.setAttribute('role', 'alert');
    t.setAttribute('aria-live', 'assertive');
    t.style.cssText = `
        position:fixed;bottom:100px;right:30px;
        background:linear-gradient(135deg,var(--primary),var(--warm));
        color:#fff;padding:1rem 1.5rem;border-radius:50px;
        box-shadow:0 10px 40px rgba(139,37,0,.2);
        z-index:9999;animation:slideInRight .3s ease;
        font-weight:600;font-family:'Outfit',sans-serif;
        max-width:320px;word-break:break-word;
    `;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
        t.style.animation = 'slideOutRight .3s ease';
        setTimeout(() => t.remove(), 300);
    }, 3000);
}

/* ══════════════════════════════════════════════════════════════════
   LAZY LOADING DE IMÁGENES
   ══════════════════════════════════════════════════════════════════ */
function initLazyImages() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.remove('img-loading');
                obs.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.classList.add('img-loading');
        observer.observe(img);
    });
}

/* ══════════════════════════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════════════════════════ */
function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const style = document.createElement('style');
    style.textContent = `
        .reveal { opacity:0; transform:translateY(30px); transition:opacity .6s ease, transform .6s ease; }
        .reveal.visible { opacity:1; transform:translateY(0); }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.package-card, .activity-card, .gallery-item, .contact-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

/* ══════════════════════════════════════════════════════════════════
   DOM READY — Punto de entrada
   ══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    insertSkipLink();
    initNavbar();
    initAboutCarousel();
    initFilters();
    initCart();
    initModals();
    initInfoLinks();
    initGuidesButton();
    initLanguageSelector();
    loadCartFromStorage();
    smoothScrolling();
    initLazyImages();
    initScrollReveal();

    document.getElementById('supportFeatureItem')?.addEventListener('click', () => openModal('supportModal'));
    document.getElementById('supportModalClose')?.addEventListener('click',  () => closeModal('supportModal'));
    document.getElementById('authenticFeatureItem')?.addEventListener('click', () => openModal('authenticModal'));
    document.getElementById('authenticModalClose')?.addEventListener('click',  () => closeModal('authenticModal'));

    ['packageDetailModal', 'checkoutModal', 'infoModal', 'supportModal', 'authenticModal'].forEach(id => {
        document.getElementById(id)?.setAttribute('aria-hidden', 'true');
    });
});