// Translations for English, Spanish, and Portuguese
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.clients': 'Clients',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': "Hello, I'm",
        'hero.role1': 'Forest Engineer',
        'hero.role2': 'Data Scientist',
        'hero.description': 'I work at the intersection of environmental science and data — building tools, dashboards, and spatial analyses that help teams make better decisions about land, forests, and markets.',
        'hero.viewWork': 'View My Work',
        'hero.getInTouch': 'Get In Touch',
        'hero.scroll': 'Scroll Down',

        // About
        'about.title': 'About Me',
        'about.p1': 'I started in the forest — literally. My background is in forestry, where I learned to think in layers: soil, terrain, canopy, climate. When I discovered data science, it felt like the same work with sharper tools. Today I build the pipelines, dashboards, and spatial models that turn raw data into something a team can actually act on.',
        'about.p2': 'I\'ve worked with government agencies in Brazil, consulted for European startups, and taken on freelance projects across seven countries. What ties it all together is the same thing: someone has messy data and needs a clear answer.',
        'about.education': 'Education',
        'about.edu1.title': 'Master in Data Science',
        'about.edu1.school': 'Nuclio Digital School, 2023',
        'about.edu2.title': 'MBA | Forest Precision Management',
        'about.edu2.school': 'UFPR, 2018',
        'about.edu3.title': 'Forest Engineering',
        'about.edu3.school': 'UFPR, 2013',
        'about.stats.years': 'Years Experience',
        'about.stats.projects': 'Projects Delivered',
        'about.stats.countries': 'Countries Served',
        'about.stats.satisfaction': 'Client Satisfaction',
        'about.skills': 'Technical Skills',

        // Skills
        'skills.data': 'Data Science',
        'skills.geo': 'Geospatial',
        'skills.bi': 'Business Intelligence',
        'skills.marketing': 'Digital Marketing',

        // Services
        'services.title': 'Services',
        'services.subtitle': 'Every project starts with a question. Here\'s where I usually come in.',
        'services.geo.title': 'Geo Data Science',
        'services.geo.desc': 'Turning satellite imagery, terrain data, and coordinates into maps and spatial insights that actually inform decisions — not just look good on a wall.',
        'services.geo.f1': 'Remote Sensing Analysis',
        'services.geo.f2': 'WebGIS Development',
        'services.geo.f3': 'Spatial Data Processing',
        'services.geo.f4': '3D Terrain Visualization',
        'services.forest.title': 'Forest Resources',
        'services.forest.desc': 'From inventory design to management plans and FSC audits — I help landowners and companies understand what they have and what to do with it.',
        'services.forest.f1': 'Forest Inventory',
        'services.forest.f2': 'Management Planning',
        'services.forest.f3': 'FSC Certification Support',
        'services.forest.f4': 'Plantation Analysis',
        'services.carbon.title': 'Carbon Credits',
        'services.carbon.desc': 'Is the restoration project worth it? I run the numbers — deforestation baselines, sequestration potential, and cost-benefit — so you know before you plant.',
        'services.carbon.f1': 'Carbon Sequestration Estimation',
        'services.carbon.f2': 'Deforestation Analysis',
        'services.carbon.f3': 'Restoration Feasibility',
        'services.carbon.f4': 'Project Viability Assessment',
        'services.marketing.title': 'Digital Marketing Analytics',
        'services.marketing.desc': 'You\'re spending on Google, Meta, and TikTok — but what\'s actually working? I connect ad data, CRM, and sales to show you where the ROI is.',
        'services.marketing.f1': 'Multi-Platform Ad Analysis',
        'services.marketing.f2': 'ROI & ROAS Optimization',
        'services.marketing.f3': 'CRM Data Integration',
        'services.marketing.f4': 'Sales Performance Dashboards',
        'services.bi.title': 'Business Intelligence',
        'services.bi.desc': 'If your team is still copying numbers into spreadsheets, let\'s fix that. I build dashboards and pipelines that keep your data fresh and your reports automatic.',
        'services.bi.f1': 'Interactive Dashboard Development',
        'services.bi.f2': 'ETL Pipeline Design',
        'services.bi.f3': 'Automated Reporting Systems',
        'services.bi.f4': 'Data Source Integration',
        'services.routing.title': 'Route Optimization',
        'services.routing.desc': 'When your fleet burns money on bad routes, the fix is in the data. I build distance matrices and optimize multi-stop planning to cut costs.',
        'services.routing.f1': 'Distance & Duration Matrices',
        'services.routing.f2': 'Multi-stop Route Planning',
        'services.routing.f3': 'Logistics Cost Analysis',
        'services.routing.f4': 'Fleet Efficiency Optimization',
        // Strategic Services
        'services.strategy.title': 'Data & AI Strategy',
        'services.strategy.desc': 'Not sure if AI fits your problem? I start there — assessing what you have, what you need, and mapping a realistic path from messy data to a working solution.',
        'services.strategy.f1': 'AI/Data Readiness Assessment',
        'services.strategy.f2': 'Solution Architecture (Cloud/On-prem)',
        'services.strategy.f3': 'Data Governance & Monitoring Plan',
        'services.strategy.f4': 'Delivery Roadmap & Effort Estimation',
        'services.reports.title': 'Technical Assessments & Reports',
        'services.reports.desc': 'When the deliverable is a document — not a dashboard — I write technical reports that hold up to scrutiny, with clear methodology and no hand-waving.',
        'services.reports.f1': 'Executive Brief (1-2 pages)',
        'services.reports.f2': 'Full Technical Report',
        'services.reports.f3': 'Methodology & Assumptions',
        'services.reports.f4': 'Evidence Pack (maps/figures/tables)',
        'services.advisory.title': 'Technical Advisory (Retainer)',
        'services.advisory.desc': 'Sometimes you don\'t need a project — you need someone to check your team\'s work, challenge assumptions, and help frame the story for stakeholders.',
        'services.advisory.f1': 'Analysis & Model Review',
        'services.advisory.f2': 'Experiment Design Validation',
        'services.advisory.f3': 'Stakeholder-ready Storytelling',
        'services.advisory.f4': 'Proposal & Scope Support',
        'services.cta': 'Not sure where to start? Book a quick assessment call.',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Real problems, real data, real deliverables. Here are some I can talk about.',
        'projects.filter.all': 'All',
        'projects.filter.geo': 'Geospatial',
        'projects.filter.bi': 'Business Intelligence',
        'projects.filter.marketing': 'Marketing',
        'projects.filter.forest': 'Forest/Carbon',
        'projects.cat.bi': 'Business Intelligence',
        'projects.cat.ds': 'Data Science',
        'projects.cat.geo': 'Geospatial',
        'projects.cat.carbon': 'Carbon Credits',
        'projects.cat.marketing': 'Marketing Analytics',
        'project.stages': 'Development Stages',
        'project.benefit': 'Main Benefit',

        // Project 1
        'project1.title': 'Gross Production Value Dashboard - Parana',
        'project1.desc': 'A government agency needed to understand which crops matter most across hundreds of municipalities — but the data was scattered. I built the pipeline and the dashboard.',
        'project1.stage1': 'Web scraping and ETL pipeline',
        'project1.stage2': 'Data cleaning and transformation',
        'project1.stage3': 'Interactive visualization',
        'project1.benefit': 'Now used internally to define priority production chains and draft cooperation terms with municipalities.',

        // Project 2
        'project2.title': 'DSMarket - Master\'s Capstone Project',
        'project2.desc': 'My master\'s capstone: a full data science pipeline for a supermarket chain, from clustering customers and products to forecasting demand and deploying the model.',
        'project2.stage1': 'Exploratory Data Analysis (EDA)',
        'project2.stage2': 'Customer/Product Clustering',
        'project2.stage3': 'Time Series Forecasting',
        'project2.stage4': 'Model Deployment',
        'project2.benefit': 'Delivered a pilot re-supply strategy the chain could actually test — not just a model, but a decision framework.',

        // Project 3
        'project3.title': 'Forest Development Plan',
        'project3.desc': 'Where should you plant? I overlaid soil, logistics, and market data to map the best — and riskiest — areas for new forest plantations.',
        'project3.stage1': 'Intersection of georeferenced layers',
        'project3.stage2': 'Cost and risk modeling',
        'project3.stage3': 'Transportation cost analysis',
        'project3.benefit': 'The client could see exactly where transport costs erode margins — and avoided planting in the wrong places.',

        // Project 4
        'project4.title': 'Carbon Credit Generation Assessment',
        'project4.desc': 'A landowner wanted to know: can I restore this area and sell carbon credits? I ran the satellite analysis, estimated sequestration, and modeled the economics.',
        'project4.stage1': 'Area identification and data collection',
        'project4.stage2': 'Temporal image acquisition',
        'project4.stage3': 'Deforestation measurement',
        'project4.stage4': 'Carbon sequestration estimation',
        'project4.benefit': 'Clear go/no-go answer backed by storage capacity, land costs, and planting economics.',

        // Project 5
        'project5.title': 'International Sales BI Dashboard',
        'project5.desc': 'A European fabric company needed to see where their sales were actually happening — by product, customer, and region. I built the dashboard they check every Monday.',
        'project5.stage1': 'Data cleaning and transformation',
        'project5.stage2': 'Custom dashboard based on client needs',
        'project5.benefit': 'Sales patterns became visible for the first time — by geography, rep, and product line.',

        // Project 6
        'project6.title': 'Market Share Comparison & CRM Analytics',
        'project6.desc': 'An apparel brand wanted to understand its position across US metro areas. I mapped their CRM data against market share benchmarks to find the gaps.',
        'project6.stage1': 'CRM data cleaning and visualization',
        'project6.stage2': 'Market share comparison by CBSA',
        'project6.benefit': 'The sales team finally saw which regions were underserved — and marketing could plan accordingly.',

        // Project 7
        'project7.title': 'WebGIS Platform Consulting',
        'project7.desc': 'A satellite imagery startup asked me to use their platform as a real user would — then tell them what was broken and what was missing.',
        'project7.stage1': 'Customer perspective usability testing',
        'project7.stage2': 'Improvement suggestions and new ideas',
        'project7.benefit': 'Delivered a prioritized list of UX fixes and feature ideas — several made it into the next release.',

        // Project 8
        'project8.title': 'Multi-Channel Ads & Ticket Sales Analytics',
        'project8.desc': 'An events company was spending across Google, Meta, and TikTok but couldn\'t tell what was driving ticket sales. I unified the data and built the answer.',
        'project8.stage1': 'Data extraction across ad platforms',
        'project8.stage2': 'Cleaning and integration',
        'project8.stage3': 'Standardized metrics transformation',
        'project8.stage4': 'Performance analysis dashboard',
        'project8.benefit': 'For the first time, the team could see which platform and which city drove the best ROI per ticket sold.',

        // Project 9
        'project9.title': 'Distance & Duration Matrix for Route Planning',
        'project9.desc': 'Raw GPS coordinates, hundreds of stops, and no reliable travel time estimates. I built validated distance and duration matrices the logistics team could trust.',
        'project9.stage1': 'Data cleaning and validation',
        'project9.stage2': 'Route calculation with fallback',
        'project9.stage3': 'Error handling and reporting',
        'project9.benefit': 'Route planning went from guesswork to data — cutting wasted mileage and improving delivery windows.',

        // Project 10
        'project10.title': 'Geospatial Processing & 3D Visualization',
        'project10.desc': 'A land development project needed to see the terrain before breaking ground. I processed LiDAR data into maps, cross-sections, and a 3D printable model.',
        'project10.stage1': 'LiDAR/DEM terrain analysis',
        'project10.stage2': 'Infrastructure mapping',
        'project10.stage3': 'Schematic and satellite maps',
        'project10.stage4': '3D terrain model generation',
        'project10.benefit': 'The team walked into the planning meeting with a physical 3D terrain model and print-ready maps.',

        // Project 11
        'project11.title': 'Wine Bar Location Assessment WebGIS',
        'project11.desc': 'Should you buy a wine bar in Lucca? I built a WebGIS that mapped foot traffic, competitors, and tourist flows to answer that question with data, not gut feeling.',
        'project11.stage1': 'Tourism data collection and spatial framework',
        'project11.stage2': 'Walking isochrones and catchment mapping',
        'project11.stage3': 'Competitor positioning and footfall analysis',
        'project11.stage4': 'Interactive WebGIS dashboard development',
        'project11.benefit': 'The investor had a spatial due diligence report — competitive landscape, catchment area, and demand model — before signing anything.',

        // Project 12
        'project12.title': 'Água Segura - Water Management WebGIS',
        'project12.desc': 'Multiple government agencies working on the same watersheds but using different spreadsheets. I built the shared map and tracking system that connected them.',
        'project12.stage1': 'Interactive thematic mapping with multi-layer visualization',
        'project12.stage2': 'Regional filtering and institutional data integration',
        'project12.stage3': 'Standardized documentation and tracking templates',
        'project12.stage4': 'Power BI dashboard integration for metrics',
        'project12.benefit': 'Teams across agencies can now track conservation from diagnosis to implementation — on the same map, in real time.',

        // Project 13
        'project13.title': 'Land Prices Dashboard - Paraná',
        'project13.desc': 'Land price data in Parana was buried in PDFs. I extracted it, standardized decades of records, and built an open dashboard with territorial filtering and historical trends.',
        'project13.stage1': 'PDF parsing and data extraction pipeline',
        'project13.stage2': 'Data standardization and JSON generation',
        'project13.stage3': 'GeoJSON territorial mapping integration',
        'project13.stage4': 'Interactive React dashboard with filters',
        'project13.benefit': 'Scattered PDFs became a queryable data product — anyone can now check historical land prices by municipality and class.',

        // Project 14
        'project14.title': 'Forest Prices Dashboard - Paraná',
        'project14.desc': 'Forest product prices were published in hard-to-use official compilations. I turned them into a live dashboard with daily scraping, time series, and price forecasting.',
        'project14.stage1': 'Public data acquisition and standardization',
        'project14.stage2': 'Unit consistency and time series curation',
        'project14.stage3': 'Dashboard development with historical comparison',
        'project14.benefit': 'One place to check today\'s prices, compare trends, and see where the market is heading — updated daily.',

        // Clients
        'clients.title': 'Trusted By',
        'clients.subtitle': 'From startups to government agencies — a few of the teams I\'ve worked with',

        // Contact
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Have a dataset that needs sense made of it? Let\'s talk.',
        'contact.email': 'Email',
        'contact.cta.title': 'Let\'s Work Together',
        'contact.cta.desc': 'I usually start with a quick call to understand the problem. No pitch, no slides — just figuring out if I can help and how.',
        'contact.cta.button': 'Send Message',

        // Footer
        'footer.tagline': 'Forest Engineer & Data Scientist',
        'footer.rights': 'All rights reserved.',
        'footer.visitors': 'Visitors:'
    },

    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mi',
        'nav.services': 'Servicios',
        'nav.projects': 'Proyectos',
        'nav.clients': 'Clientes',
        'nav.contact': 'Contacto',

        // Hero
        'hero.greeting': 'Hola, soy',
        'hero.role1': 'Ingeniero Forestal',
        'hero.role2': 'Cientifico de Datos',
        'hero.description': 'Trabajo en la interseccion entre ciencia ambiental y datos — construyendo herramientas, dashboards y analisis espaciales que ayudan a equipos a tomar mejores decisiones sobre tierra, bosques y mercados.',
        'hero.viewWork': 'Ver Mi Trabajo',
        'hero.getInTouch': 'Contactame',
        'hero.scroll': 'Desplazar',

        // About
        'about.title': 'Sobre Mi',
        'about.p1': 'Empece en el bosque — literalmente. Mi formacion es en ingenieria forestal, donde aprendi a pensar en capas: suelo, terreno, dosel, clima. Cuando descubri la ciencia de datos, fue el mismo trabajo con herramientas mas afiladas. Hoy construyo los pipelines, dashboards y modelos espaciales que convierten datos brutos en algo que un equipo puede usar.',
        'about.p2': 'He trabajado con agencias gubernamentales en Brasil, consultado para startups europeas y tomado proyectos freelance en siete paises. El hilo comun siempre es el mismo: alguien tiene datos desordenados y necesita una respuesta clara.',
        'about.education': 'Educacion',
        'about.edu1.title': 'Maestria en Ciencia de Datos',
        'about.edu1.school': 'Nuclio Digital School, 2023',
        'about.edu2.title': 'MBA | Gestion Forestal de Precision',
        'about.edu2.school': 'UFPR, 2018',
        'about.edu3.title': 'Ingenieria Forestal',
        'about.edu3.school': 'UFPR, 2013',
        'about.stats.years': 'Anos de Experiencia',
        'about.stats.projects': 'Proyectos Entregados',
        'about.stats.countries': 'Paises Atendidos',
        'about.stats.satisfaction': 'Satisfaccion del Cliente',
        'about.skills': 'Habilidades Tecnicas',

        // Skills
        'skills.data': 'Ciencia de Datos',
        'skills.geo': 'Geoespacial',
        'skills.bi': 'Inteligencia de Negocios',
        'skills.marketing': 'Marketing Digital',

        // Services
        'services.title': 'Servicios',
        'services.subtitle': 'Todo proyecto empieza con una pregunta. Aqui es donde suelo entrar.',
        'services.geo.title': 'Geo Data Science',
        'services.geo.desc': 'Convierto imagenes satelitales, datos de terreno y coordenadas en mapas e insights espaciales que realmente informan decisiones — no solo decoran una pared.',
        'services.geo.f1': 'Analisis de Teledeteccion',
        'services.geo.f2': 'Desarrollo WebGIS',
        'services.geo.f3': 'Procesamiento de Datos Espaciales',
        'services.geo.f4': 'Visualizacion 3D de Terreno',
        'services.forest.title': 'Recursos Forestales',
        'services.forest.desc': 'Desde el diseno de inventario hasta planes de manejo y auditorias FSC — ayudo a propietarios y empresas a entender lo que tienen y que hacer con ello.',
        'services.forest.f1': 'Inventario Forestal',
        'services.forest.f2': 'Planificacion de Manejo',
        'services.forest.f3': 'Soporte Certificacion FSC',
        'services.forest.f4': 'Analisis de Plantaciones',
        'services.carbon.title': 'Creditos de Carbono',
        'services.carbon.desc': 'Vale la pena el proyecto de restauracion? Hago los numeros — lineas base de deforestacion, potencial de secuestro y costo-beneficio — para que sepas antes de plantar.',
        'services.carbon.f1': 'Estimacion de Secuestro de Carbono',
        'services.carbon.f2': 'Analisis de Deforestacion',
        'services.carbon.f3': 'Factibilidad de Restauracion',
        'services.carbon.f4': 'Evaluacion de Viabilidad',
        'services.marketing.title': 'Analitica de Marketing Digital',
        'services.marketing.desc': 'Gastas en Google, Meta y TikTok — pero que esta funcionando realmente? Conecto datos de anuncios, CRM y ventas para mostrarte donde esta el ROI.',
        'services.marketing.f1': 'Analisis de Anuncios Multiplataforma',
        'services.marketing.f2': 'Optimizacion ROI y ROAS',
        'services.marketing.f3': 'Integracion de Datos CRM',
        'services.marketing.f4': 'Dashboards de Rendimiento de Ventas',
        'services.bi.title': 'Inteligencia de Negocios',
        'services.bi.desc': 'Si tu equipo todavia copia numeros a planillas, arreglemos eso. Construyo dashboards y pipelines que mantienen tus datos frescos y tus reportes automaticos.',
        'services.bi.f1': 'Desarrollo de Dashboards Interactivos',
        'services.bi.f2': 'Diseño de Pipelines ETL',
        'services.bi.f3': 'Sistemas de Reportes Automatizados',
        'services.bi.f4': 'Integración de Fuentes de Datos',
        'services.routing.title': 'Optimizacion de Rutas',
        'services.routing.desc': 'Cuando tu flota quema dinero en malas rutas, la solucion esta en los datos. Construyo matrices de distancia y optimizo planificacion multi-parada para reducir costos.',
        'services.routing.f1': 'Matrices de Distancia y Duración',
        'services.routing.f2': 'Planificación de Rutas Multi-parada',
        'services.routing.f3': 'Análisis de Costos Logísticos',
        'services.routing.f4': 'Optimización de Eficiencia de Flota',
        // Strategic Services
        'services.strategy.title': 'Estrategia de Datos e IA',
        'services.strategy.desc': 'No estas seguro si la IA encaja en tu problema? Empiezo por ahi — evaluando lo que tienes, lo que necesitas, y trazando un camino realista de datos desordenados a solucion funcional.',
        'services.strategy.f1': 'Evaluación de Madurez en Datos/IA',
        'services.strategy.f2': 'Arquitectura de Solución (Cloud/On-prem)',
        'services.strategy.f3': 'Plan de Gobernanza y Monitoreo',
        'services.strategy.f4': 'Roadmap y Estimación de Esfuerzo',
        'services.reports.title': 'Evaluaciones Técnicas e Informes',
        'services.reports.desc': 'Cuando el entregable es un documento — no un dashboard — escribo informes tecnicos que resisten el escrutinio, con metodologia clara y sin ambiguedades.',
        'services.reports.f1': 'Resumen Ejecutivo (1-2 páginas)',
        'services.reports.f2': 'Informe Técnico Completo',
        'services.reports.f3': 'Metodología y Supuestos',
        'services.reports.f4': 'Paquete de Evidencias (mapas/figuras/tablas)',
        'services.advisory.title': 'Asesoría Técnica Continua (Retainer)',
        'services.advisory.desc': 'A veces no necesitas un proyecto — necesitas a alguien que revise el trabajo de tu equipo, cuestione supuestos y ayude a armar la historia para los stakeholders.',
        'services.advisory.f1': 'Revisión de Análisis y Modelos',
        'services.advisory.f2': 'Validación de Diseño Experimental',
        'services.advisory.f3': 'Narrativa Lista para Stakeholders',
        'services.advisory.f4': 'Apoyo en Propuestas y Alcance',
        'services.cta': '¿No sabes por dónde empezar? Agenda una llamada de diagnóstico.',

        // Projects
        'projects.title': 'Proyectos Destacados',
        'projects.subtitle': 'Problemas reales, datos reales, entregables reales. Estos son algunos de los que puedo hablar.',
        'projects.filter.all': 'Todos',
        'projects.filter.geo': 'Geoespacial',
        'projects.filter.bi': 'Inteligencia de Negocios',
        'projects.filter.marketing': 'Marketing',
        'projects.filter.forest': 'Forestal/Carbono',
        'projects.cat.bi': 'Inteligencia de Negocios',
        'projects.cat.ds': 'Ciencia de Datos',
        'projects.cat.geo': 'Geoespacial',
        'projects.cat.carbon': 'Creditos de Carbono',
        'projects.cat.marketing': 'Analitica de Marketing',
        'project.stages': 'Etapas de Desarrollo',
        'project.benefit': 'Beneficio Principal',

        // Project 1
        'project1.title': 'Dashboard de Valor Bruto de Produccion - Parana',
        'project1.desc': 'Una agencia gubernamental necesitaba entender que cultivos importan mas en cientos de municipios — pero los datos estaban dispersos. Construi el pipeline y el dashboard.',
        'project1.stage1': 'Web scraping y pipeline ETL',
        'project1.stage2': 'Limpieza y transformacion de datos',
        'project1.stage3': 'Visualizacion interactiva',
        'project1.benefit': 'Ahora se usa internamente para definir cadenas productivas prioritarias y elaborar terminos de cooperacion con municipios.',

        // Project 2
        'project2.title': 'DSMarket - Proyecto Final de Maestria',
        'project2.desc': 'Mi proyecto final de maestria: un pipeline completo de ciencia de datos para una cadena de supermercados, desde clustering de clientes y productos hasta pronostico de demanda.',
        'project2.stage1': 'Analisis Exploratorio de Datos (EDA)',
        'project2.stage2': 'Clustering de Clientes/Productos',
        'project2.stage3': 'Pronostico de Series Temporales',
        'project2.stage4': 'Despliegue del Modelo',
        'project2.benefit': 'Entregue una estrategia piloto de reabastecimiento que la cadena pudo probar — no solo un modelo, sino un marco de decision.',

        // Project 3
        'project3.title': 'Plan de Desarrollo Forestal',
        'project3.desc': 'Donde plantar? Superpuse datos de suelo, logistica y mercado para mapear las mejores — y mas riesgosas — areas para nuevas plantaciones forestales.',
        'project3.stage1': 'Interseccion de capas georreferenciadas',
        'project3.stage2': 'Modelado de costos y riesgos',
        'project3.stage3': 'Analisis de costos de transporte',
        'project3.benefit': 'El cliente pudo ver exactamente donde los costos de transporte erosionan margenes — y evito plantar en los lugares equivocados.',

        // Project 4
        'project4.title': 'Evaluacion de Generacion de Creditos de Carbono',
        'project4.desc': 'Un propietario queria saber: puedo restaurar esta area y vender creditos de carbono? Hice el analisis satelital, estime el secuestro y modele la economia.',
        'project4.stage1': 'Identificacion del area y recoleccion de datos',
        'project4.stage2': 'Adquisicion de imagenes temporales',
        'project4.stage3': 'Medicion de deforestacion',
        'project4.stage4': 'Estimacion de secuestro de carbono',
        'project4.benefit': 'Respuesta clara de viable/no viable respaldada por capacidad de almacenamiento, costos de tierra y economia de plantacion.',

        // Project 5
        'project5.title': 'Dashboard BI de Ventas Internacionales',
        'project5.desc': 'Una empresa europea de telas necesitaba ver donde estaban realmente sus ventas — por producto, cliente y region. Construi el dashboard que revisan cada lunes.',
        'project5.stage1': 'Limpieza y transformacion de datos',
        'project5.stage2': 'Dashboard personalizado segun necesidades del cliente',
        'project5.benefit': 'Los patrones de venta se hicieron visibles por primera vez — por geografia, vendedor y linea de producto.',

        // Project 6
        'project6.title': 'Comparacion de Cuota de Mercado y Analitica CRM',
        'project6.desc': 'Una marca de ropa queria entender su posicion en areas metropolitanas de EE.UU. Mapee sus datos CRM contra benchmarks de cuota de mercado para encontrar las brechas.',
        'project6.stage1': 'Limpieza y visualizacion de datos CRM',
        'project6.stage2': 'Comparacion de cuota de mercado por CBSA',
        'project6.benefit': 'El equipo de ventas finalmente vio que regiones estaban desatendidas — y marketing pudo planificar en consecuencia.',

        // Project 7
        'project7.title': 'Consultoria de Plataforma WebGIS',
        'project7.desc': 'Una startup de imagenes satelitales me pidio usar su plataforma como usuario real — y luego decirles que estaba roto y que faltaba.',
        'project7.stage1': 'Pruebas de usabilidad desde perspectiva del cliente',
        'project7.stage2': 'Sugerencias de mejora e ideas nuevas',
        'project7.benefit': 'Entregue una lista priorizada de mejoras UX e ideas de funcionalidades — varias llegaron al siguiente release.',

        // Project 8
        'project8.title': 'Analitica de Anuncios Multicanal y Ventas de Tickets',
        'project8.desc': 'Una empresa de eventos gastaba en Google, Meta y TikTok pero no podia saber que impulsaba las ventas de tickets. Unifique los datos y construi la respuesta.',
        'project8.stage1': 'Extraccion de datos de plataformas de anuncios',
        'project8.stage2': 'Limpieza e integracion',
        'project8.stage3': 'Transformacion de metricas estandarizadas',
        'project8.stage4': 'Dashboard de analisis de rendimiento',
        'project8.benefit': 'Por primera vez, el equipo pudo ver que plataforma y ciudad generaba el mejor ROI por ticket vendido.',

        // Project 9
        'project9.title': 'Matriz de Distancia y Duracion para Planificacion de Rutas',
        'project9.desc': 'Coordenadas GPS brutas, cientos de paradas, y ninguna estimacion confiable de tiempo de viaje. Construi matrices validadas de distancia y duracion en las que el equipo logistico podia confiar.',
        'project9.stage1': 'Limpieza y validacion de datos',
        'project9.stage2': 'Calculo de rutas con fallback',
        'project9.stage3': 'Manejo de errores y reportes',
        'project9.benefit': 'La planificacion de rutas paso de la intuicion a los datos — reduciendo kilometraje desperdiciado y mejorando ventanas de entrega.',

        // Project 10
        'project10.title': 'Procesamiento Geoespacial y Visualizacion 3D',
        'project10.desc': 'Un proyecto de desarrollo de tierras necesitaba ver el terreno antes de empezar obras. Procese datos LiDAR en mapas, cortes transversales y un modelo 3D imprimible.',
        'project10.stage1': 'Analisis de terreno LiDAR/DEM',
        'project10.stage2': 'Mapeo de infraestructura',
        'project10.stage3': 'Mapas esquematicos y satelitales',
        'project10.stage4': 'Generacion de modelo de terreno 3D',
        'project10.benefit': 'El equipo llego a la reunion de planificacion con un modelo fisico 3D del terreno y mapas listos para imprimir.',

        // Project 11
        'project11.title': 'WebGIS de Evaluacion de Ubicacion para Bar de Vinos',
        'project11.desc': 'Deberias comprar un bar de vinos en Lucca? Construi un WebGIS que mapeo trafico peatonal, competidores y flujos turisticos para responder esa pregunta con datos, no intuicion.',
        'project11.stage1': 'Recoleccion de datos turisticos y marco espacial',
        'project11.stage2': 'Isocronas peatonales y mapeo de areas de influencia',
        'project11.stage3': 'Posicionamiento competitivo y analisis de afluencia',
        'project11.stage4': 'Desarrollo de dashboard WebGIS interactivo',
        'project11.benefit': 'El inversor tuvo un informe de due diligence espacial — paisaje competitivo, area de influencia y modelo de demanda — antes de firmar nada.',

        // Project 12
        'project12.title': 'Agua Segura - WebGIS de Gestion del Agua',
        'project12.desc': 'Multiples agencias gubernamentales trabajando en las mismas cuencas pero usando diferentes planillas. Construi el mapa compartido y el sistema de seguimiento que las conecto.',
        'project12.stage1': 'Mapeo tematico interactivo con visualizacion multicapa',
        'project12.stage2': 'Filtrado regional e integracion de datos institucionales',
        'project12.stage3': 'Plantillas estandarizadas de documentacion y seguimiento',
        'project12.stage4': 'Integracion de dashboard Power BI para metricas',
        'project12.benefit': 'Los equipos de diferentes agencias ahora pueden rastrear la conservacion desde el diagnostico hasta la implementacion — en el mismo mapa, en tiempo real.',

        // Project 13
        'project13.title': 'Dashboard de Precios de Tierras - Paraná',
        'project13.desc': 'Los datos de precios de tierras en Parana estaban enterrados en PDFs. Los extrai, estandarice decadas de registros y construi un dashboard abierto con filtros territoriales y tendencias historicas.',
        'project13.stage1': 'Parsing de PDFs y pipeline de extracción de datos',
        'project13.stage2': 'Estandarización de datos y generación de JSON',
        'project13.stage3': 'Integración de mapeo territorial con GeoJSON',
        'project13.stage4': 'Dashboard React interactivo con filtros',
        'project13.benefit': 'PDFs dispersos se convirtieron en un producto de datos consultable — cualquiera puede verificar precios historicos de tierras por municipio y clase.',

        // Project 14
        'project14.title': 'Dashboard de Precios Forestales - Paraná',
        'project14.desc': 'Los precios de productos forestales se publicaban en compilaciones oficiales dificiles de usar. Los converti en un dashboard en vivo con scraping diario, series temporales y prevision de precios.',
        'project14.stage1': 'Adquisición y estandarización de datos públicos',
        'project14.stage2': 'Consistencia de unidades y curación de series temporales',
        'project14.stage3': 'Desarrollo de dashboard con comparación histórica',
        'project14.benefit': 'Un solo lugar para consultar precios del dia, comparar tendencias y ver hacia donde va el mercado — actualizado diariamente.',

        // Clients
        'clients.title': 'Confian en Mi',
        'clients.subtitle': 'De startups a agencias gubernamentales — algunos de los equipos con los que he trabajado',

        // Contact
        'contact.title': 'Contactame',
        'contact.subtitle': 'Tienes un dataset que necesita orden? Hablemos.',
        'contact.email': 'Correo',
        'contact.cta.title': 'Trabajemos Juntos',
        'contact.cta.desc': 'Normalmente empiezo con una llamada rapida para entender el problema. Sin pitch, sin slides — solo entender si puedo ayudar y como.',
        'contact.cta.button': 'Enviar Mensaje',

        // Footer
        'footer.tagline': 'Ingeniero Forestal y Cientifico de Datos',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.visitors': 'Visitantes:'
    },

    pt: {
        // Navigation
        'nav.home': 'Início',
        'nav.about': 'Sobre Mim',
        'nav.services': 'Serviços',
        'nav.projects': 'Projetos',
        'nav.clients': 'Clientes',
        'nav.contact': 'Contato',

        // Hero
        'hero.greeting': 'Olá, sou',
        'hero.role1': 'Engenheiro Florestal',
        'hero.role2': 'Cientista de Dados',
        'hero.description': 'Trabalho na intersecção entre ciência ambiental e dados — construindo ferramentas, dashboards e análises espaciais que ajudam equipes a tomar melhores decisões sobre terra, florestas e mercados.',
        'hero.viewWork': 'Ver Meus Trabalhos',
        'hero.getInTouch': 'Entre em Contato',
        'hero.scroll': 'Role para Baixo',

        // About
        'about.title': 'Sobre Mim',
        'about.p1': 'Comecei na floresta — literalmente. Minha formação é em engenharia florestal, onde aprendi a pensar em camadas: solo, terreno, dossel, clima. Quando descobri ciência de dados, pareceu o mesmo trabalho com ferramentas mais afiadas. Hoje construo os pipelines, dashboards e modelos espaciais que transformam dados brutos em algo que uma equipe consegue usar.',
        'about.p2': 'Já trabalhei com órgãos de governo no Brasil, consultei para startups europeias e peguei projetos freelance em sete países. O que conecta tudo é sempre a mesma coisa: alguém tem dados bagunçados e precisa de uma resposta clara.',
        'about.education': 'Educação',
        'about.edu1.title': 'Mestrado em Ciência de Dados',
        'about.edu1.school': 'Nuclio Digital School, 2023',
        'about.edu2.title': 'MBA | Gestão Florestal de Precisão',
        'about.edu2.school': 'UFPR, 2018',
        'about.edu3.title': 'Engenharia Florestal',
        'about.edu3.school': 'UFPR, 2013',
        'about.stats.years': 'Anos de Experiência',
        'about.stats.projects': 'Projetos Entregues',
        'about.stats.countries': 'Países Atendidos',
        'about.stats.satisfaction': 'Satisfação do Cliente',
        'about.skills': 'Habilidades Técnicas',

        // Skills
        'skills.data': 'Ciência de Dados',
        'skills.geo': 'Geoespacial',
        'skills.bi': 'Business Intelligence',
        'skills.marketing': 'Marketing Digital',

        // Services
        'services.title': 'Serviços',
        'services.subtitle': 'Todo projeto começa com uma pergunta. É aqui que eu costumo entrar.',
        'services.geo.title': 'Geo Data Science',
        'services.geo.desc': 'Transformo imagens de satélite, dados de terreno e coordenadas em mapas e insights espaciais que realmente informam decisões — não só decoram uma parede.',
        'services.geo.f1': 'Análise de Sensoriamento Remoto',
        'services.geo.f2': 'Desenvolvimento WebGIS',
        'services.geo.f3': 'Processamento de Dados Espaciais',
        'services.geo.f4': 'Visualização 3D de Terreno',
        'services.forest.title': 'Recursos Florestais',
        'services.forest.desc': 'Do desenho do inventário ao plano de manejo e auditorias FSC — ajudo proprietários e empresas a entender o que têm e o que fazer com isso.',
        'services.forest.f1': 'Inventário Florestal',
        'services.forest.f2': 'Planejamento de Manejo',
        'services.forest.f3': 'Suporte à Certificação FSC',
        'services.forest.f4': 'Análise de Plantações',
        'services.carbon.title': 'Créditos de Carbono',
        'services.carbon.desc': 'O projeto de restauração vale a pena? Eu faço as contas — baseline de desmatamento, potencial de sequestro e custo-benefício — pra você saber antes de plantar.',
        'services.carbon.f1': 'Estimativa de Sequestro de Carbono',
        'services.carbon.f2': 'Análise de Desmatamento',
        'services.carbon.f3': 'Viabilidade de Restauração',
        'services.carbon.f4': 'Avaliação de Viabilidade',
        'services.marketing.title': 'Analítica de Marketing Digital',
        'services.marketing.desc': 'Você gasta em Google, Meta e TikTok — mas o que está funcionando de verdade? Conecto dados de anúncios, CRM e vendas pra mostrar onde está o ROI.',
        'services.marketing.f1': 'Análise de Anúncios Multiplataforma',
        'services.marketing.f2': 'Otimização de ROI e ROAS',
        'services.marketing.f3': 'Integração de Dados CRM',
        'services.marketing.f4': 'Dashboards de Performance de Vendas',
        'services.bi.title': 'Business Intelligence',
        'services.bi.desc': 'Se sua equipe ainda copia números pra planilha, vamos resolver isso. Construo dashboards e pipelines que mantêm seus dados atualizados e seus relatórios automáticos.',
        'services.bi.f1': 'Desenvolvimento de Dashboards Interativos',
        'services.bi.f2': 'Design de Pipelines ETL',
        'services.bi.f3': 'Sistemas de Relatórios Automatizados',
        'services.bi.f4': 'Integração de Fontes de Dados',
        'services.routing.title': 'Otimização de Rotas',
        'services.routing.desc': 'Quando sua frota queima dinheiro em rotas ruins, a solução está nos dados. Construo matrizes de distância e otimizo planejamento multi-parada pra cortar custos.',
        'services.routing.f1': 'Matrizes de Distância e Duração',
        'services.routing.f2': 'Planejamento de Rotas Multi-parada',
        'services.routing.f3': 'Análise de Custos Logísticos',
        'services.routing.f4': 'Otimização de Eficiência de Frota',
        // Strategic Services
        'services.strategy.title': 'Estratégia de Dados e IA',
        'services.strategy.desc': 'Não sabe se IA resolve seu problema? Começo por aí — avaliando o que você tem, o que precisa, e traçando um caminho realista de dados bagunçados a solução funcional.',
        'services.strategy.f1': 'Avaliação de Maturidade em Dados/IA',
        'services.strategy.f2': 'Arquitetura de Solução (Cloud/On-prem)',
        'services.strategy.f3': 'Plano de Governança e Monitoramento',
        'services.strategy.f4': 'Roadmap e Estimativa de Esforço',
        'services.reports.title': 'Avaliações Técnicas e Relatórios',
        'services.reports.desc': 'Quando o entregável é um documento — não um dashboard — escrevo relatórios técnicos que aguentam escrutínio, com metodologia clara e sem enrolação.',
        'services.reports.f1': 'Resumo Executivo (1-2 páginas)',
        'services.reports.f2': 'Relatório Técnico Completo',
        'services.reports.f3': 'Metodologia e Premissas',
        'services.reports.f4': 'Pacote de Evidências (mapas/figuras/tabelas)',
        'services.advisory.title': 'Assessoria Técnica Contínua (Retainer)',
        'services.advisory.desc': 'Às vezes você não precisa de um projeto — precisa de alguém que revise o trabalho da equipe, questione premissas e ajude a montar a narrativa pros stakeholders.',
        'services.advisory.f1': 'Revisão de Análises e Modelos',
        'services.advisory.f2': 'Validação de Design Experimental',
        'services.advisory.f3': 'Narrativa Pronta para Stakeholders',
        'services.advisory.f4': 'Apoio em Propostas e Escopo',
        'services.cta': 'Não sabe por onde começar? Agende uma call de diagnóstico.',

        // Projects
        'projects.title': 'Projetos em Destaque',
        'projects.subtitle': 'Problemas reais, dados reais, entregas reais. Aqui estão alguns de que posso falar.',
        'projects.filter.all': 'Todos',
        'projects.filter.geo': 'Geoespacial',
        'projects.filter.bi': 'Business Intelligence',
        'projects.filter.marketing': 'Marketing',
        'projects.filter.forest': 'Florestal/Carbono',
        'projects.cat.bi': 'Business Intelligence',
        'projects.cat.ds': 'Ciência de Dados',
        'projects.cat.geo': 'Geoespacial',
        'projects.cat.carbon': 'Créditos de Carbono',
        'projects.cat.marketing': 'Analítica de Marketing',
        'project.stages': 'Etapas de Desenvolvimento',
        'project.benefit': 'Benefício Principal',

        // Project 1
        'project1.title': 'Dashboard de Valor Bruto de Produção - Paraná',
        'project1.desc': 'Um órgão de governo precisava entender quais culturas importam mais em centenas de municípios — mas os dados estavam espalhados. Construí o pipeline e o dashboard.',
        'project1.stage1': 'Web scraping e pipeline ETL',
        'project1.stage2': 'Limpeza e transformação de dados',
        'project1.stage3': 'Visualização interativa',
        'project1.benefit': 'Agora é usado internamente para definir cadeias produtivas prioritárias e elaborar termos de cooperação com municípios.',

        // Project 2
        'project2.title': 'DSMarket - Projeto de Conclusão de Mestrado',
        'project2.desc': 'Meu projeto final de mestrado: um pipeline completo de ciência de dados para uma rede de supermercados, do clustering de clientes e produtos à previsão de demanda e deploy do modelo.',
        'project2.stage1': 'Análise Exploratória de Dados (EDA)',
        'project2.stage2': 'Clustering de Clientes/Produtos',
        'project2.stage3': 'Previsão de Séries Temporais',
        'project2.stage4': 'Implantação do Modelo',
        'project2.benefit': 'Entreguei uma estratégia piloto de reabastecimento que a rede pôde testar — não só um modelo, mas um framework de decisão.',

        // Project 3
        'project3.title': 'Plano de Desenvolvimento Florestal',
        'project3.desc': 'Onde plantar? Sobreponho dados de solo, logística e mercado para mapear as melhores — e mais arriscadas — áreas para novas plantações florestais.',
        'project3.stage1': 'Interseção de camadas georreferenciadas',
        'project3.stage2': 'Modelagem de custos e riscos',
        'project3.stage3': 'Análise de custos de transporte',
        'project3.benefit': 'O cliente viu exatamente onde os custos de transporte corroem as margens — e evitou plantar nos lugares errados.',

        // Project 4
        'project4.title': 'Avaliação de Geração de Créditos de Carbono',
        'project4.desc': 'Um proprietário queria saber: consigo restaurar essa área e vender créditos de carbono? Fiz a análise satelital, estimei o sequestro e modelei a economia.',
        'project4.stage1': 'Identificação da área e coleta de dados',
        'project4.stage2': 'Aquisição de imagens temporais',
        'project4.stage3': 'Medição de desmatamento',
        'project4.stage4': 'Estimativa de sequestro de carbono',
        'project4.benefit': 'Verificação da viabilidade do projeto baseada na capacidade de armazenamento e nos custos de compra de terra e plantio de mudas.',

        // Project 5
        'project5.title': 'Dashboard de Vendas Internacionais em BI',
        'project5.desc': 'Uma empresa europeia de tecidos precisava enxergar onde as vendas estavam realmente acontecendo — por produto, cliente e região. Construí o dashboard que eles conferem toda segunda-feira.',
        'project5.stage1': 'Limpeza e transformação de dados',
        'project5.stage2': 'Dashboard personalizado conforme necessidades do cliente',
        'project5.benefit': 'Padrões de venda ficaram visíveis pela primeira vez — por geografia, vendedor e linha de produto.',

        // Project 6
        'project6.title': 'Comparação de Market Share e Analítica de CRM',
        'project6.desc': 'Uma marca de vestuário queria entender sua posição em áreas metropolitanas dos EUA. Mapeei os dados de CRM contra benchmarks de market share pra encontrar as lacunas.',
        'project6.stage1': 'Limpeza e visualização de dados de CRM',
        'project6.stage2': 'Comparação de market share por CBSA',
        'project6.benefit': 'A equipe de vendas finalmente viu quais regiões estavam mal atendidas — e o marketing pôde planejar em cima disso.',

        // Project 7
        'project7.title': 'Consultoria para Plataforma WebGIS',
        'project7.desc': 'Uma startup de imagens de satélite me pediu pra usar a plataforma como um usuário real usaria — e depois dizer o que estava quebrado e o que faltava.',
        'project7.stage1': 'Testes de usabilidade na perspectiva do cliente',
        'project7.stage2': 'Sugestões de melhoria e novas ideias',
        'project7.benefit': 'Entreguei uma lista priorizada de melhorias de UX e ideias de funcionalidade — várias entraram na release seguinte.',

        // Project 8
        'project8.title': 'Analítica Multicanal de Anúncios e Vendas de Ingressos',
        'project8.desc': 'Uma empresa de eventos gastava em Google, Meta e TikTok mas não conseguia saber o que estava gerando venda de ingressos. Unifiquei os dados e construí a resposta.',
        'project8.stage1': 'Extração de dados das plataformas de anúncios',
        'project8.stage2': 'Limpeza e integração',
        'project8.stage3': 'Transformação de métricas padronizadas',
        'project8.stage4': 'Dashboard de análise de desempenho',
        'project8.benefit': 'Pela primeira vez, a equipe conseguiu ver qual plataforma e qual cidade gerava o melhor ROI por ingresso vendido.',

        // Project 9
        'project9.title': 'Matriz de Distância e Duração para Planejamento de Rotas',
        'project9.desc': 'Coordenadas GPS brutas, centenas de paradas e nenhuma estimativa confiável de tempo de viagem. Construí matrizes validadas de distância e duração nas quais a equipe de logística podia confiar.',
        'project9.stage1': 'Limpeza e validação de dados',
        'project9.stage2': 'Cálculo de rotas com fallback',
        'project9.stage3': 'Tratamento de erros e relatórios',
        'project9.benefit': 'O planejamento de rotas saiu do achismo pro dado — reduzindo quilometragem desperdiçada e melhorando janelas de entrega.',

        // Project 10
        'project10.title': 'Processamento Geoespacial e Visualização 3D',
        'project10.desc': 'Um projeto de loteamento precisava enxergar o terreno antes de começar a obra. Processei dados LiDAR em mapas, cortes transversais e um modelo 3D imprimível.',
        'project10.stage1': 'Análise de terreno com LiDAR/DEM',
        'project10.stage2': 'Mapeamento de infraestrutura',
        'project10.stage3': 'Mapas esquemáticos e de satélite',
        'project10.stage4': 'Geração de modelo 3D de terreno',
        'project10.benefit': 'A equipe entrou na reunião de planejamento com um modelo 3D físico do terreno e mapas prontos pra impressão.',

        // Project 11
        'project11.title': 'WebGIS de Avaliação de Localização para Bar de Vinhos',
        'project11.desc': 'Vale a pena comprar um bar de vinhos em Lucca? Construí um WebGIS que mapeou fluxo de pedestres, concorrentes e turismo pra responder com dados, não intuição.',
        'project11.stage1': 'Coleta de dados turísticos e estrutura espacial',
        'project11.stage2': 'Isócronas de caminhada e mapeamento de área de influência',
        'project11.stage3': 'Posicionamento competitivo e análise de fluxo de pedestres',
        'project11.stage4': 'Desenvolvimento de dashboard WebGIS interativo',
        'project11.benefit': 'O investidor teve um relatório de due diligence espacial — cenário competitivo, área de influência e modelo de demanda — antes de assinar qualquer coisa.',

        // Project 12
        'project12.title': 'Água Segura - WebGIS de Gestão Hídrica',
        'project12.desc': 'Vários órgãos de governo trabalhando nas mesmas bacias mas usando planilhas diferentes. Construí o mapa compartilhado e o sistema de acompanhamento que conectou todos.',
        'project12.stage1': 'Mapeamento temático interativo com visualização multicamada',
        'project12.stage2': 'Filtragem regional e integração de dados institucionais',
        'project12.stage3': 'Templates padronizados de documentação e acompanhamento',
        'project12.stage4': 'Integração de dashboard Power BI para métricas',
        'project12.benefit': 'Equipes de diferentes órgãos agora acompanham a conservação do diagnóstico à implementação — no mesmo mapa, em tempo real.',

        // Project 13
        'project13.title': 'Dashboard de Preços de Terras - Paraná',
        'project13.desc': 'Dados de preços de terras no Paraná estavam enterrados em PDFs. Extraí, padronizei décadas de registros e construí um dashboard aberto com filtro territorial e tendências históricas.',
        'project13.stage1': 'Parsing de PDFs e pipeline de extração de dados',
        'project13.stage2': 'Padronização de dados e geração de JSON',
        'project13.stage3': 'Integração de mapeamento territorial com GeoJSON',
        'project13.stage4': 'Dashboard React interativo com filtros',
        'project13.benefit': 'PDFs espalhados viraram um produto de dados consultável — qualquer um pode checar preços históricos de terra por município e classe.',

        // Project 14
        'project14.title': 'Dashboard de Preços Florestais - Paraná',
        'project14.desc': 'Preços de produtos florestais eram publicados em compilações oficiais difíceis de usar. Transformei tudo em um dashboard ao vivo com scraping diário, séries temporais e previsão de preços.',
        'project14.stage1': 'Aquisição e padronização de dados públicos',
        'project14.stage2': 'Consistência de unidades e curadoria de séries temporais',
        'project14.stage3': 'Desenvolvimento de dashboard com comparação histórica',
        'project14.benefit': 'Um lugar só pra checar preços do dia, comparar tendências e ver pra onde o mercado aponta — atualizado diariamente.',

        // Clients
        'clients.title': 'Empresas que Confiam',
        'clients.subtitle': 'De startups a órgãos de governo — algumas das equipes com quem já trabalhei',

        // Contact
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Tem um dataset que precisa fazer sentido? Vamos conversar.',
        'contact.email': 'Email',
        'contact.cta.title': 'Vamos Trabalhar Juntos',
        'contact.cta.desc': 'Costumo começar com uma call rápida pra entender o problema. Sem pitch, sem slides — só entender se posso ajudar e como.',
        'contact.cta.button': 'Enviar Mensagem',

        // Footer
        'footer.tagline': 'Engenheiro Florestal e Cientista de Dados',
        'footer.rights': 'Todos os direitos reservados.',
        'footer.visitors': 'Visitantes:'
    }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
