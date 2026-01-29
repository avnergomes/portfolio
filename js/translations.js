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
        'hero.description': 'Transforming complex data into actionable insights. Specialized in Geo Data Science, Forest Resources, Carbon Credits, and Digital Marketing Analytics.',
        'hero.viewWork': 'View My Work',
        'hero.getInTouch': 'Get In Touch',
        'hero.scroll': 'Scroll Down',

        // About
        'about.title': 'About Me',
        'about.p1': 'I am a Forest Engineer with a Master\'s degree in Data Science, combining deep expertise in natural resource management with advanced analytical capabilities. My unique background allows me to bridge the gap between environmental science and data-driven decision making.',
        'about.p2': 'With experience spanning government institutions, consulting firms, and international freelance projects, I deliver end-to-end solutions from data collection to visualization and strategic insights.',
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
        'services.subtitle': 'Comprehensive data solutions tailored to your business needs',
        'services.geo.title': 'Geo Data Science',
        'services.geo.desc': 'Advanced geospatial analysis, satellite imagery processing, terrain modeling, and location-based insights for strategic decision-making.',
        'services.geo.f1': 'Remote Sensing Analysis',
        'services.geo.f2': 'WebGIS Development',
        'services.geo.f3': 'Spatial Data Processing',
        'services.geo.f4': '3D Terrain Visualization',
        'services.forest.title': 'Forest Resources',
        'services.forest.desc': 'Expert consulting in forest inventory, management planning, FSC certification, and sustainable forestry practices.',
        'services.forest.f1': 'Forest Inventory',
        'services.forest.f2': 'Management Planning',
        'services.forest.f3': 'FSC Certification Support',
        'services.forest.f4': 'Plantation Analysis',
        'services.carbon.title': 'Carbon Credits',
        'services.carbon.desc': 'Feasibility studies for forest restoration and carbon credit generation projects, including deforestation monitoring and sequestration estimation.',
        'services.carbon.f1': 'Carbon Sequestration Estimation',
        'services.carbon.f2': 'Deforestation Analysis',
        'services.carbon.f3': 'Restoration Feasibility',
        'services.carbon.f4': 'Project Viability Assessment',
        'services.marketing.title': 'Digital Marketing Analytics',
        'services.marketing.desc': 'Multi-channel advertising analytics, CRM data analysis, and performance optimization across Google, Meta, and TikTok platforms.',
        'services.marketing.f1': 'Multi-Platform Ad Analysis',
        'services.marketing.f2': 'ROI & ROAS Optimization',
        'services.marketing.f3': 'CRM Data Integration',
        'services.marketing.f4': 'Sales Performance Dashboards',
        'services.bi.title': 'Business Intelligence',
        'services.bi.desc': 'Custom dashboard development, data pipeline creation, and automated reporting solutions using Power BI, Tableau, and Looker Studio.',
        'services.bi.f1': 'Interactive Dashboard Development',
        'services.bi.f2': 'ETL Pipeline Design',
        'services.bi.f3': 'Automated Reporting Systems',
        'services.bi.f4': 'Data Source Integration',
        'services.routing.title': 'Route Optimization',
        'services.routing.desc': 'Distance and duration matrix development, route planning optimization, and logistics analysis for efficient operations.',
        'services.routing.f1': 'Distance & Duration Matrices',
        'services.routing.f2': 'Multi-stop Route Planning',
        'services.routing.f3': 'Logistics Cost Analysis',
        'services.routing.f4': 'Fleet Efficiency Optimization',
        // Strategic Services
        'services.strategy.title': 'Data & AI Strategy',
        'services.strategy.desc': 'Feasibility assessment, solution architecture, data requirements, and phased delivery roadmap. From messy data + constraints to decision-grade plan.',
        'services.strategy.f1': 'AI/Data Readiness Assessment',
        'services.strategy.f2': 'Solution Architecture (Cloud/On-prem)',
        'services.strategy.f3': 'Data Governance & Monitoring Plan',
        'services.strategy.f4': 'Delivery Roadmap & Effort Estimation',
        'services.reports.title': 'Technical Assessments & Reports',
        'services.reports.desc': 'Decision-grade technical reports, executive summaries, and methodology documentation. Full traceability with assumptions and limitations stated.',
        'services.reports.f1': 'Executive Brief (1-2 pages)',
        'services.reports.f2': 'Full Technical Report',
        'services.reports.f3': 'Methodology & Assumptions',
        'services.reports.f4': 'Evidence Pack (maps/figures/tables)',
        'services.advisory.title': 'Technical Advisory (Retainer)',
        'services.advisory.desc': 'Ongoing support for methodology review, analysis validation, and technical decision-making. Senior review + decision support on demand.',
        'services.advisory.f1': 'Analysis & Model Review',
        'services.advisory.f2': 'Experiment Design Validation',
        'services.advisory.f3': 'Stakeholder-ready Storytelling',
        'services.advisory.f4': 'Proposal & Scope Support',
        'services.cta': 'Not sure where to start? Book a quick assessment call.',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'A selection of my recent work across different domains',
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
        'project1.desc': 'Comprehensive dashboard for agricultural production analysis supporting institutional planning and municipal cooperation strategies.',
        'project1.stage1': 'Web scraping and ETL pipeline',
        'project1.stage2': 'Data cleaning and transformation',
        'project1.stage3': 'Interactive visualization',
        'project1.benefit': 'Support in defining priority production chains for Institutional Planning and drafting Cooperation Terms with Municipalities.',

        // Project 2
        'project2.title': 'DSMarket - Master\'s Capstone Project',
        'project2.desc': 'End-to-end data science pipeline for supermarket re-supply strategy optimization using clustering and time series forecasting.',
        'project2.stage1': 'Exploratory Data Analysis (EDA)',
        'project2.stage2': 'Customer/Product Clustering',
        'project2.stage3': 'Time Series Forecasting',
        'project2.stage4': 'Model Deployment',
        'project2.benefit': 'Helped design a pilot re-supply strategy for supermarkets with a full end-to-end pipeline from raw data to actionable insights.',

        // Project 3
        'project3.title': 'Forest Development Plan',
        'project3.desc': 'Multi-layer geospatial analysis to identify optimal areas for forest plantation implementation considering costs and market access.',
        'project3.stage1': 'Intersection of georeferenced layers',
        'project3.stage2': 'Cost and risk modeling',
        'project3.stage3': 'Transportation cost analysis',
        'project3.benefit': 'Identification of higher-risk areas based on implementation costs and price decline due to transportation costs.',

        // Project 4
        'project4.title': 'Carbon Credit Generation Assessment',
        'project4.desc': 'Feasibility study for forest restoration and carbon credit generation including deforestation monitoring and sequestration estimation.',
        'project4.stage1': 'Area identification and data collection',
        'project4.stage2': 'Temporal image acquisition',
        'project4.stage3': 'Deforestation measurement',
        'project4.stage4': 'Carbon sequestration estimation',
        'project4.benefit': 'Project feasibility verification based on storage capacity and costs of land purchase and seedling planting.',

        // Project 5
        'project5.title': 'International Sales BI Dashboard',
        'project5.desc': 'Comprehensive sales analytics dashboard for European markets with spatial distribution patterns by product, customer, and region.',
        'project5.stage1': 'Data cleaning and transformation',
        'project5.stage2': 'Custom dashboard based on client needs',
        'project5.benefit': 'Spatial distribution patterns by product, customer, region, and employee for data-driven decision making.',

        // Project 6
        'project6.title': 'Market Share Comparison & CRM Analytics',
        'project6.desc': 'Customer contact data visualization and market share comparison for apparel and accessories sector across US markets.',
        'project6.stage1': 'CRM data cleaning and visualization',
        'project6.stage2': 'Market share comparison by CBSA',
        'project6.benefit': 'Support in decision-making for customer service team and marketing planning across different regions.',

        // Project 7
        'project7.title': 'WebGIS Platform Consulting',
        'project7.desc': 'Usability testing and improvement suggestions for a WebGIS platform for satellite imagery visualization and indicator generation.',
        'project7.stage1': 'Customer perspective usability testing',
        'project7.stage2': 'Improvement suggestions and new ideas',
        'project7.benefit': 'Platform development support with actionable suggestions and innovative ideas.',

        // Project 8
        'project8.title': 'Multi-Channel Ads & Ticket Sales Analytics',
        'project8.desc': 'End-to-end workflow for multi-platform ad analytics (Google, Meta, TikTok) with ticket sales performance analysis by show and city.',
        'project8.stage1': 'Data extraction across ad platforms',
        'project8.stage2': 'Cleaning and integration',
        'project8.stage3': 'Standardized metrics transformation',
        'project8.stage4': 'Performance analysis dashboard',
        'project8.benefit': 'Clear visibility of ad spend efficiency and ticket sales performance supporting data-driven ROI optimization.',

        // Project 9
        'project9.title': 'Distance & Duration Matrix for Route Planning',
        'project9.desc': 'Development of validated distance and duration matrices from raw coordinates for logistics and route planning optimization.',
        'project9.stage1': 'Data cleaning and validation',
        'project9.stage2': 'Route calculation with fallback',
        'project9.stage3': 'Error handling and reporting',
        'project9.benefit': 'Reliable travel time and distance matrix improving route planning efficiency and decision-making accuracy.',

        // Project 10
        'project10.title': 'Geospatial Processing & 3D Visualization',
        'project10.desc': 'LiDAR/DEM processing, terrain analysis, and 3D model generation (STL) for land development planning.',
        'project10.stage1': 'LiDAR/DEM terrain analysis',
        'project10.stage2': 'Infrastructure mapping',
        'project10.stage3': 'Schematic and satellite maps',
        'project10.stage4': '3D terrain model generation',
        'project10.benefit': 'Clear maps and 3D model to guide planning and development decisions.',

        // Project 11
        'project11.title': 'Wine Bar Location Assessment WebGIS',
        'project11.desc': 'Interactive WebGIS platform for investment due diligence, combining spatial analysis, competitive intelligence, and tourism data for wine bar acquisition in Lucca, Italy.',
        'project11.stage1': 'Tourism data collection and spatial framework',
        'project11.stage2': 'Walking isochrones and catchment mapping',
        'project11.stage3': 'Competitor positioning and footfall analysis',
        'project11.stage4': 'Interactive WebGIS dashboard development',
        'project11.benefit': 'Data-driven investment due diligence with location intelligence, competitive landscape analysis, and demand modeling for business acquisition decisions.',

        // Project 12
        'project12.title': '├ügua Segura - Water Management WebGIS',
        'project12.desc': 'Interactive mapping platform for sustainable water management across microbasins, coordinating multi-agency conservation efforts in Paran├í, Brazil.',
        'project12.stage1': 'Interactive thematic mapping with multi-layer visualization',
        'project12.stage2': 'Regional filtering and institutional data integration',
        'project12.stage3': 'Standardized documentation and tracking templates',
        'project12.stage4': 'Power BI dashboard integration for metrics',
        'project12.benefit': 'Coordinated watershed management enabling teams to track conservation practices from diagnosis through implementation across multiple government agencies.',

        // Project 13
        'project13.title': 'Land Prices Dashboard - Paran├í',
        'project13.desc': 'Interactive dashboard for historical land price analysis in Paran├í, built from public DERAL data with full ETL pipeline and geographic layer integration.',
        'project13.stage1': 'PDF parsing and data extraction pipeline',
        'project13.stage2': 'Data standardization and JSON generation',
        'project13.stage3': 'GeoJSON territorial mapping integration',
        'project13.stage4': 'Interactive React dashboard with filters',
        'project13.benefit': 'Transformed scattered PDF reports into a queryable data product with territorial filtering and historical price visualization.',

        // Project 14
        'project14.title': 'Forest Prices Dashboard - Paran├í',
        'project14.desc': 'Data product for monitoring forest product prices in Paran├í, transforming official public compilations into actionable visualizations.',
        'project14.stage1': 'Public data acquisition and standardization',
        'project14.stage2': 'Unit consistency and time series curation',
        'project14.stage3': 'Dashboard development with historical comparison',
        'project14.benefit': 'Consolidated scattered official price data into a single interface for quick consultation and historical trend analysis.',

        // Clients
        'clients.title': 'Trusted By',
        'clients.subtitle': 'Companies and organizations I\'ve had the pleasure to work with',

        // Contact
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Ready to transform your data into insights? Let\'s discuss your project.',
        'contact.email': 'Email',
        'contact.cta.title': 'Let\'s Work Together',
        'contact.cta.desc': 'Whether you need geospatial analysis, data visualization, carbon credit assessment, or marketing analytics, I\'m here to help turn your data into actionable insights.',
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
        'hero.description': 'Transformando datos complejos en informacion accionable. Especializado en Geo Data Science, Recursos Forestales, Creditos de Carbono y Analitica de Marketing Digital.',
        'hero.viewWork': 'Ver Mi Trabajo',
        'hero.getInTouch': 'Contactame',
        'hero.scroll': 'Desplazar',

        // About
        'about.title': 'Sobre Mi',
        'about.p1': 'Soy Ingeniero Forestal con Maestria en Ciencia de Datos, combinando profunda experiencia en gestion de recursos naturales con capacidades analiticas avanzadas. Mi formacion unica me permite cerrar la brecha entre la ciencia ambiental y la toma de decisiones basada en datos.',
        'about.p2': 'Con experiencia en instituciones gubernamentales, empresas de consultoria y proyectos freelance internacionales, entrego soluciones integrales desde la recoleccion de datos hasta la visualizacion y los insights estrategicos.',
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
        'services.subtitle': 'Soluciones de datos integrales adaptadas a las necesidades de su negocio',
        'services.geo.title': 'Geo Data Science',
        'services.geo.desc': 'Analisis geoespacial avanzado, procesamiento de imagenes satelitales, modelado de terreno e insights basados en ubicacion para toma de decisiones estrategicas.',
        'services.geo.f1': 'Analisis de Teledeteccion',
        'services.geo.f2': 'Desarrollo WebGIS',
        'services.geo.f3': 'Procesamiento de Datos Espaciales',
        'services.geo.f4': 'Visualizacion 3D de Terreno',
        'services.forest.title': 'Recursos Forestales',
        'services.forest.desc': 'Consultoria experta en inventario forestal, planificacion de manejo, certificacion FSC y practicas forestales sostenibles.',
        'services.forest.f1': 'Inventario Forestal',
        'services.forest.f2': 'Planificacion de Manejo',
        'services.forest.f3': 'Soporte Certificacion FSC',
        'services.forest.f4': 'Analisis de Plantaciones',
        'services.carbon.title': 'Creditos de Carbono',
        'services.carbon.desc': 'Estudios de factibilidad para proyectos de restauracion forestal y generacion de creditos de carbono, incluyendo monitoreo de deforestacion y estimacion de secuestro.',
        'services.carbon.f1': 'Estimacion de Secuestro de Carbono',
        'services.carbon.f2': 'Analisis de Deforestacion',
        'services.carbon.f3': 'Factibilidad de Restauracion',
        'services.carbon.f4': 'Evaluacion de Viabilidad',
        'services.marketing.title': 'Analitica de Marketing Digital',
        'services.marketing.desc': 'Analitica publicitaria multicanal, analisis de datos CRM y optimizacion de rendimiento en plataformas Google, Meta y TikTok.',
        'services.marketing.f1': 'Analisis de Anuncios Multiplataforma',
        'services.marketing.f2': 'Optimizacion ROI y ROAS',
        'services.marketing.f3': 'Integracion de Datos CRM',
        'services.marketing.f4': 'Dashboards de Rendimiento de Ventas',
        'services.bi.title': 'Inteligencia de Negocios',
        'services.bi.desc': 'Desarrollo de dashboards personalizados, creacion de pipelines de datos y soluciones de reportes automatizados usando Power BI, Tableau y Looker Studio.',
        'services.bi.f1': 'Desarrollo de Dashboards Interactivos',
        'services.bi.f2': 'Dise├▒o de Pipelines ETL',
        'services.bi.f3': 'Sistemas de Reportes Automatizados',
        'services.bi.f4': 'Integraci├│n de Fuentes de Datos',
        'services.routing.title': 'Optimizacion de Rutas',
        'services.routing.desc': 'Desarrollo de matrices de distancia y duracion, optimizacion de planificacion de rutas y analisis logistico para operaciones eficientes.',
        'services.routing.f1': 'Matrices de Distancia y Duraci├│n',
        'services.routing.f2': 'Planificaci├│n de Rutas Multi-parada',
        'services.routing.f3': 'An├ílisis de Costos Log├¡sticos',
        'services.routing.f4': 'Optimizaci├│n de Eficiencia de Flota',
        // Strategic Services
        'services.strategy.title': 'Estrategia de Datos e IA',
        'services.strategy.desc': 'Evaluaci├│n de viabilidad, arquitectura de soluci├│n, requisitos de datos y hoja de ruta por fases. De datos desordenados + restricciones a un plan para decisi├│n.',
        'services.strategy.f1': 'Evaluaci├│n de Madurez en Datos/IA',
        'services.strategy.f2': 'Arquitectura de Soluci├│n (Cloud/On-prem)',
        'services.strategy.f3': 'Plan de Gobernanza y Monitoreo',
        'services.strategy.f4': 'Roadmap y Estimaci├│n de Esfuerzo',
        'services.reports.title': 'Evaluaciones T├®cnicas e Informes',
        'services.reports.desc': 'Informes t├®cnicos para decisi├│n, res├║menes ejecutivos y documentaci├│n metodol├│gica. Trazabilidad completa con supuestos y limitaciones expl├¡citas.',
        'services.reports.f1': 'Resumen Ejecutivo (1-2 p├íginas)',
        'services.reports.f2': 'Informe T├®cnico Completo',
        'services.reports.f3': 'Metodolog├¡a y Supuestos',
        'services.reports.f4': 'Paquete de Evidencias (mapas/figuras/tablas)',
        'services.advisory.title': 'Asesor├¡a T├®cnica Continua (Retainer)',
        'services.advisory.desc': 'Soporte continuo para revisi├│n metodol├│gica, validaci├│n de an├ílisis y decisiones t├®cnicas. Revisi├│n senior + apoyo a decisiones bajo demanda.',
        'services.advisory.f1': 'Revisi├│n de An├ílisis y Modelos',
        'services.advisory.f2': 'Validaci├│n de Dise├▒o Experimental',
        'services.advisory.f3': 'Narrativa Lista para Stakeholders',
        'services.advisory.f4': 'Apoyo en Propuestas y Alcance',
        'services.cta': '┬┐No sabes por d├│nde empezar? Agenda una llamada de diagn├│stico.',

        // Projects
        'projects.title': 'Proyectos Destacados',
        'projects.subtitle': 'Una seleccion de mi trabajo reciente en diferentes dominios',
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
        'project1.desc': 'Dashboard integral para analisis de produccion agricola apoyando la planificacion institucional y estrategias de cooperacion municipal.',
        'project1.stage1': 'Web scraping y pipeline ETL',
        'project1.stage2': 'Limpieza y transformacion de datos',
        'project1.stage3': 'Visualizacion interactiva',
        'project1.benefit': 'Apoyo en la definicion de cadenas productivas prioritarias para Planificacion Institucional y elaboracion de Terminos de Cooperacion con Municipios.',

        // Project 2
        'project2.title': 'DSMarket - Proyecto Final de Maestria',
        'project2.desc': 'Pipeline de ciencia de datos de extremo a extremo para optimizacion de estrategia de reabastecimiento de supermercados usando clustering y pronostico de series temporales.',
        'project2.stage1': 'Analisis Exploratorio de Datos (EDA)',
        'project2.stage2': 'Clustering de Clientes/Productos',
        'project2.stage3': 'Pronostico de Series Temporales',
        'project2.stage4': 'Despliegue del Modelo',
        'project2.benefit': 'Ayudo a disenar una estrategia piloto de reabastecimiento para supermercados con un pipeline completo desde datos brutos hasta insights accionables.',

        // Project 3
        'project3.title': 'Plan de Desarrollo Forestal',
        'project3.desc': 'Analisis geoespacial multicapa para identificar areas optimas para implementacion de plantaciones forestales considerando costos y acceso al mercado.',
        'project3.stage1': 'Interseccion de capas georreferenciadas',
        'project3.stage2': 'Modelado de costos y riesgos',
        'project3.stage3': 'Analisis de costos de transporte',
        'project3.benefit': 'Identificacion de areas de mayor riesgo basado en costos de implementacion y disminucion de precios debido a costos de transporte.',

        // Project 4
        'project4.title': 'Evaluacion de Generacion de Creditos de Carbono',
        'project4.desc': 'Estudio de factibilidad para restauracion forestal y generacion de creditos de carbono incluyendo monitoreo de deforestacion y estimacion de secuestro.',
        'project4.stage1': 'Identificacion del area y recoleccion de datos',
        'project4.stage2': 'Adquisicion de imagenes temporales',
        'project4.stage3': 'Medicion de deforestacion',
        'project4.stage4': 'Estimacion de secuestro de carbono',
        'project4.benefit': 'Verificacion de factibilidad del proyecto basado en capacidad de almacenamiento y costos de compra de tierra y plantacion de plantulas.',

        // Project 5
        'project5.title': 'Dashboard BI de Ventas Internacionales',
        'project5.desc': 'Dashboard integral de analitica de ventas para mercados europeos con patrones de distribucion espacial por producto, cliente y region.',
        'project5.stage1': 'Limpieza y transformacion de datos',
        'project5.stage2': 'Dashboard personalizado segun necesidades del cliente',
        'project5.benefit': 'Patrones de distribucion espacial por producto, cliente, region y empleado para toma de decisiones basada en datos.',

        // Project 6
        'project6.title': 'Comparacion de Cuota de Mercado y Analitica CRM',
        'project6.desc': 'Visualizacion de datos de contacto de clientes y comparacion de cuota de mercado para sector de ropa y accesorios en mercados de EE.UU.',
        'project6.stage1': 'Limpieza y visualizacion de datos CRM',
        'project6.stage2': 'Comparacion de cuota de mercado por CBSA',
        'project6.benefit': 'Apoyo en la toma de decisiones para el equipo de servicio al cliente y planificacion de marketing en diferentes regiones.',

        // Project 7
        'project7.title': 'Consultoria de Plataforma WebGIS',
        'project7.desc': 'Pruebas de usabilidad y sugerencias de mejora para plataforma WebGIS de visualizacion de imagenes satelitales y generacion de indicadores.',
        'project7.stage1': 'Pruebas de usabilidad desde perspectiva del cliente',
        'project7.stage2': 'Sugerencias de mejora e ideas nuevas',
        'project7.benefit': 'Apoyo al desarrollo de plataforma con sugerencias accionables e ideas innovadoras.',

        // Project 8
        'project8.title': 'Analitica de Anuncios Multicanal y Ventas de Tickets',
        'project8.desc': 'Flujo de trabajo de extremo a extremo para analitica de anuncios multiplataforma (Google, Meta, TikTok) con analisis de rendimiento de ventas de tickets por show y ciudad.',
        'project8.stage1': 'Extraccion de datos de plataformas de anuncios',
        'project8.stage2': 'Limpieza e integracion',
        'project8.stage3': 'Transformacion de metricas estandarizadas',
        'project8.stage4': 'Dashboard de analisis de rendimiento',
        'project8.benefit': 'Visibilidad clara de eficiencia de gasto en anuncios y rendimiento de ventas de tickets apoyando optimizacion de ROI basada en datos.',

        // Project 9
        'project9.title': 'Matriz de Distancia y Duracion para Planificacion de Rutas',
        'project9.desc': 'Desarrollo de matrices validadas de distancia y duracion desde coordenadas brutas para optimizacion de logistica y planificacion de rutas.',
        'project9.stage1': 'Limpieza y validacion de datos',
        'project9.stage2': 'Calculo de rutas con fallback',
        'project9.stage3': 'Manejo de errores y reportes',
        'project9.benefit': 'Matriz confiable de tiempo de viaje y distancia mejorando eficiencia de planificacion de rutas y precision en toma de decisiones.',

        // Project 10
        'project10.title': 'Procesamiento Geoespacial y Visualizacion 3D',
        'project10.desc': 'Procesamiento LiDAR/DEM, analisis de terreno y generacion de modelos 3D (STL) para planificacion de desarrollo de tierras.',
        'project10.stage1': 'Analisis de terreno LiDAR/DEM',
        'project10.stage2': 'Mapeo de infraestructura',
        'project10.stage3': 'Mapas esquematicos y satelitales',
        'project10.stage4': 'Generacion de modelo de terreno 3D',
        'project10.benefit': 'Mapas claros y modelo 3D para guiar decisiones de planificacion y desarrollo.',

        // Project 11
        'project11.title': 'WebGIS de Evaluacion de Ubicacion para Bar de Vinos',
        'project11.desc': 'Plataforma WebGIS interactiva para due diligence de inversion, combinando analisis espacial, inteligencia competitiva y datos de turismo para adquisicion de bar de vinos en Lucca, Italia.',
        'project11.stage1': 'Recoleccion de datos turisticos y marco espacial',
        'project11.stage2': 'Isocronas peatonales y mapeo de areas de influencia',
        'project11.stage3': 'Posicionamiento competitivo y analisis de afluencia',
        'project11.stage4': 'Desarrollo de dashboard WebGIS interactivo',
        'project11.benefit': 'Due diligence de inversion basada en datos con inteligencia de ubicacion, analisis del panorama competitivo y modelado de demanda para decisiones de adquisicion de negocios.',

        // Project 12
        'project12.title': 'Agua Segura - WebGIS de Gestion del Agua',
        'project12.desc': 'Plataforma de mapeo interactivo para gestion sostenible del agua en microcuencas, coordinando esfuerzos de conservacion multi-agencia en Parana, Brasil.',
        'project12.stage1': 'Mapeo tematico interactivo con visualizacion multicapa',
        'project12.stage2': 'Filtrado regional e integracion de datos institucionales',
        'project12.stage3': 'Plantillas estandarizadas de documentacion y seguimiento',
        'project12.stage4': 'Integracion de dashboard Power BI para metricas',
        'project12.benefit': 'Gestion coordinada de cuencas hidrograficas permitiendo a los equipos rastrear practicas de conservacion desde el diagnostico hasta la implementacion entre multiples agencias gubernamentales.',

        // Project 13
        'project13.title': 'Dashboard de Precios de Tierras - Paran├í',
        'project13.desc': 'Dashboard interactivo para an├ílisis hist├│rico de precios de tierras en Paran├í, construido a partir de datos p├║blicos del DERAL con pipeline ETL completo e integraci├│n de capa geogr├ífica.',
        'project13.stage1': 'Parsing de PDFs y pipeline de extracci├│n de datos',
        'project13.stage2': 'Estandarizaci├│n de datos y generaci├│n de JSON',
        'project13.stage3': 'Integraci├│n de mapeo territorial con GeoJSON',
        'project13.stage4': 'Dashboard React interactivo con filtros',
        'project13.benefit': 'Transform├│ informes PDF dispersos en un producto de datos consultable con filtrado territorial y visualizaci├│n hist├│rica de precios.',

        // Project 14
        'project14.title': 'Dashboard de Precios Forestales - Paran├í',
        'project14.desc': 'Producto de datos para monitorear precios de productos forestales en Paran├í, transformando compilaciones p├║blicas oficiales en visualizaciones accionables.',
        'project14.stage1': 'Adquisici├│n y estandarizaci├│n de datos p├║blicos',
        'project14.stage2': 'Consistencia de unidades y curaci├│n de series temporales',
        'project14.stage3': 'Desarrollo de dashboard con comparaci├│n hist├│rica',
        'project14.benefit': 'Consolid├│ datos de precios oficiales dispersos en una interfaz ├║nica para consulta r├ípida y an├ílisis de tendencias hist├│ricas.',

        // Clients
        'clients.title': 'Confian en Mi',
        'clients.subtitle': 'Empresas y organizaciones con las que he tenido el placer de trabajar',

        // Contact
        'contact.title': 'Contactame',
        'contact.subtitle': 'Listo para transformar tus datos en insights? Hablemos de tu proyecto.',
        'contact.email': 'Correo',
        'contact.cta.title': 'Trabajemos Juntos',
        'contact.cta.desc': 'Ya sea que necesites analisis geoespacial, visualizacion de datos, evaluacion de creditos de carbono o analitica de marketing, estoy aqui para ayudar a convertir tus datos en insights accionables.',
        'contact.cta.button': 'Enviar Mensaje',

        // Footer
        'footer.tagline': 'Ingeniero Forestal y Cientifico de Datos',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.visitors': 'Visitantes:'
    },

    pt: {
        // Navigation
        'nav.home': 'In├¡cio',
        'nav.about': 'Sobre Mim',
        'nav.services': 'Servi├ºos',
        'nav.projects': 'Projetos',
        'nav.clients': 'Clientes',
        'nav.contact': 'Contato',

        // Hero
        'hero.greeting': 'Ol├í, sou',
        'hero.role1': 'Engenheiro Florestal',
        'hero.role2': 'Cientista de Dados',
        'hero.description': 'Transformando dados complexos em insights acion├íveis. Especializado em Geo Data Science, Recursos Florestais, Cr├®ditos de Carbono e Anal├¡tica de Marketing Digital.',
        'hero.viewWork': 'Ver Meus Trabalhos',
        'hero.getInTouch': 'Entre em Contato',
        'hero.scroll': 'Role para Baixo',

        // About
        'about.title': 'Sobre Mim',
        'about.p1': 'Sou Engenheiro Florestal com mestrado em Ci├¬ncia de Dados, combinando vasta experi├¬ncia em gest├úo de recursos naturais com capacidades anal├¡ticas avan├ºadas. Minha forma├º├úo ├║nica me permite conectar ci├¬ncia ambiental e tomada de decis├úo orientada por dados.',
        'about.p2': 'Com experi├¬ncia em institui├º├Áes governamentais, consultorias e projetos freelance internacionais, entrego solu├º├Áes ponta a ponta desde a coleta de dados at├® visualiza├º├úo e insights estrat├®gicos.',
        'about.education': 'Educa├º├úo',
        'about.edu1.title': 'Mestrado em Ci├¬ncia de Dados',
        'about.edu1.school': 'Nuclio Digital School, 2023',
        'about.edu2.title': 'MBA | Gest├úo Florestal de Precis├úo',
        'about.edu2.school': 'UFPR, 2018',
        'about.edu3.title': 'Engenharia Florestal',
        'about.edu3.school': 'UFPR, 2013',
        'about.stats.years': 'Anos de Experi├¬ncia',
        'about.stats.projects': 'Projetos Entregues',
        'about.stats.countries': 'Pa├¡ses Atendidos',
        'about.stats.satisfaction': 'Satisfa├º├úo do Cliente',
        'about.skills': 'Habilidades T├®cnicas',

        // Skills
        'skills.data': 'Ci├¬ncia de Dados',
        'skills.geo': 'Geoespacial',
        'skills.bi': 'Business Intelligence',
        'skills.marketing': 'Marketing Digital',

        // Services
        'services.title': 'Servi├ºos',
        'services.subtitle': 'Solu├º├Áes completas de dados adaptadas ├ás necessidades do seu neg├│cio',
        'services.geo.title': 'Geo Data Science',
        'services.geo.desc': 'An├ílise geoespacial avan├ºada, processamento de imagens de sat├®lite, modelagem de terreno e insights baseados em localiza├º├úo para tomada de decis├úo estrat├®gica.',
        'services.geo.f1': 'An├ílise de Sensoriamento Remoto',
        'services.geo.f2': 'Desenvolvimento WebGIS',
        'services.geo.f3': 'Processamento de Dados Espaciais',
        'services.geo.f4': 'Visualiza├º├úo 3D de Terreno',
        'services.forest.title': 'Recursos Florestais',
        'services.forest.desc': 'Consultoria especializada em invent├írio florestal, planejamento de manejo, certifica├º├úo FSC e pr├íticas florestais sustent├íveis.',
        'services.forest.f1': 'Invent├írio Florestal',
        'services.forest.f2': 'Planejamento de Manejo',
        'services.forest.f3': 'Suporte ├á Certifica├º├úo FSC',
        'services.forest.f4': 'An├ílise de Planta├º├Áes',
        'services.carbon.title': 'Cr├®ditos de Carbono',
        'services.carbon.desc': 'Estudos de viabilidade para projetos de restaura├º├úo florestal e gera├º├úo de cr├®ditos de carbono, incluindo monitoramento de desmatamento e estimativa de sequestro.',
        'services.carbon.f1': 'Estimativa de Sequestro de Carbono',
        'services.carbon.f2': 'An├ílise de Desmatamento',
        'services.carbon.f3': 'Viabilidade de Restaura├º├úo',
        'services.carbon.f4': 'Avalia├º├úo de Viabilidade',
        'services.marketing.title': 'Anal├¡tica de Marketing Digital',
        'services.marketing.desc': 'Anal├¡tica de publicidade multicanal, an├ílise de dados de CRM e otimiza├º├úo de performance nas plataformas Google, Meta e TikTok.',
        'services.marketing.f1': 'An├ílise de An├║ncios Multiplataforma',
        'services.marketing.f2': 'Otimiza├º├úo de ROI e ROAS',
        'services.marketing.f3': 'Integra├º├úo de Dados CRM',
        'services.marketing.f4': 'Dashboards de Performance de Vendas',
        'services.bi.title': 'Business Intelligence',
        'services.bi.desc': 'Desenvolvimento de dashboards personalizados, cria├º├úo de pipelines de dados e relat├│rios automatizados usando Power BI, Tableau e Looker Studio.',
        'services.bi.f1': 'Desenvolvimento de Dashboards Interativos',
        'services.bi.f2': 'Design de Pipelines ETL',
        'services.bi.f3': 'Sistemas de Relat├│rios Automatizados',
        'services.bi.f4': 'Integra├º├úo de Fontes de Dados',
        'services.routing.title': 'Otimiza├º├úo de Rotas',
        'services.routing.desc': 'Desenvolvimento de matrizes de dist├óncia e dura├º├úo, otimiza├º├úo de planejamento de rotas e an├ílise log├¡stica para opera├º├Áes eficientes.',
        'services.routing.f1': 'Matrizes de Dist├óncia e Dura├º├úo',
        'services.routing.f2': 'Planejamento de Rotas Multi-parada',
        'services.routing.f3': 'An├ílise de Custos Log├¡sticos',
        'services.routing.f4': 'Otimiza├º├úo de Efici├¬ncia de Frota',
        // Strategic Services
        'services.strategy.title': 'Estrat├®gia de Dados e IA',
        'services.strategy.desc': 'Avalia├º├úo de viabilidade, arquitetura de solu├º├úo, requisitos de dados e roadmap por fases. De dados bagun├ºados + restri├º├Áes para plano de decis├úo.',
        'services.strategy.f1': 'Avalia├º├úo de Maturidade em Dados/IA',
        'services.strategy.f2': 'Arquitetura de Solu├º├úo (Cloud/On-prem)',
        'services.strategy.f3': 'Plano de Governan├ºa e Monitoramento',
        'services.strategy.f4': 'Roadmap e Estimativa de Esfor├ºo',
        'services.reports.title': 'Avalia├º├Áes T├®cnicas e Relat├│rios',
        'services.reports.desc': 'Relat├│rios t├®cnicos para decis├úo, resumos executivos e documenta├º├úo metodol├│gica. Rastreabilidade completa com premissas e limita├º├Áes expl├¡citas.',
        'services.reports.f1': 'Resumo Executivo (1-2 p├íginas)',
        'services.reports.f2': 'Relat├│rio T├®cnico Completo',
        'services.reports.f3': 'Metodologia e Premissas',
        'services.reports.f4': 'Pacote de Evid├¬ncias (mapas/figuras/tabelas)',
        'services.advisory.title': 'Assessoria T├®cnica Cont├¡nua (Retainer)',
        'services.advisory.desc': 'Suporte cont├¡nuo para revis├úo metodol├│gica, valida├º├úo de an├ílises e decis├Áes t├®cnicas. Revis├úo s├¬nior + apoio a decis├Áes sob demanda.',
        'services.advisory.f1': 'Revis├úo de An├ílises e Modelos',
        'services.advisory.f2': 'Valida├º├úo de Design Experimental',
        'services.advisory.f3': 'Narrativa Pronta para Stakeholders',
        'services.advisory.f4': 'Apoio em Propostas e Escopo',
        'services.cta': 'N├úo sabe por onde come├ºar? Agende uma call de diagn├│stico.',

        // Projects
        'projects.title': 'Projetos em Destaque',
        'projects.subtitle': 'Uma sele├º├úo do meu trabalho recente em diferentes ├íreas',
        'projects.filter.all': 'Todos',
        'projects.filter.geo': 'Geoespacial',
        'projects.filter.bi': 'Business Intelligence',
        'projects.filter.marketing': 'Marketing',
        'projects.filter.forest': 'Florestal/Carbono',
        'projects.cat.bi': 'Business Intelligence',
        'projects.cat.ds': 'Ci├¬ncia de Dados',
        'projects.cat.geo': 'Geoespacial',
        'projects.cat.carbon': 'Cr├®ditos de Carbono',
        'projects.cat.marketing': 'Anal├¡tica de Marketing',
        'project.stages': 'Etapas de Desenvolvimento',
        'project.benefit': 'Benef├¡cio Principal',

        // Project 1
        'project1.title': 'Dashboard de Valor Bruto de Produ├º├úo - Paran├í',
        'project1.desc': 'Dashboard completo para an├ílise de produ├º├úo agr├¡cola apoiando planejamento institucional e estrat├®gias de coopera├º├úo municipal.',
        'project1.stage1': 'Web scraping e pipeline ETL',
        'project1.stage2': 'Limpeza e transforma├º├úo de dados',
        'project1.stage3': 'Visualiza├º├úo interativa',
        'project1.benefit': 'Apoio na defini├º├úo de cadeias produtivas priorit├írias para Planejamento Institucional e elabora├º├úo de Termos de Coopera├º├úo com Munic├¡pios.',

        // Project 2
        'project2.title': 'DSMarket - Projeto de Conclus├úo de Mestrado',
        'project2.desc': 'Pipeline de ci├¬ncia de dados ponta a ponta para otimizar estrat├®gia de reabastecimento de supermercados usando clustering e previs├úo de s├®ries temporais.',
        'project2.stage1': 'An├ílise Explorat├│ria de Dados (EDA)',
        'project2.stage2': 'Clustering de Clientes/Produtos',
        'project2.stage3': 'Previs├úo de S├®ries Temporais',
        'project2.stage4': 'Implanta├º├úo do Modelo',
        'project2.benefit': 'Auxiliou na defini├º├úo de estrat├®gia piloto de reabastecimento para supermercados com pipeline completo de dados brutos a insights acion├íveis.',

        // Project 3
        'project3.title': 'Plano de Desenvolvimento Florestal',
        'project3.desc': 'An├ílise geoespacial multilayer para identificar ├íreas ├│timas para implementa├º├úo de planta├º├Áes florestais considerando custos e acesso ao mercado.',
        'project3.stage1': 'Interse├º├úo de camadas georreferenciadas',
        'project3.stage2': 'Modelagem de custos e riscos',
        'project3.stage3': 'An├ílise de custos de transporte',
        'project3.benefit': 'Identifica├º├úo de ├íreas de maior risco com base em custos de implementa├º├úo e redu├º├úo de pre├ºos devido aos custos de transporte.',

        // Project 4
        'project4.title': 'Avalia├º├úo de Gera├º├úo de Cr├®ditos de Carbono',
        'project4.desc': 'Estudo de viabilidade para restaura├º├úo florestal e gera├º├úo de cr├®ditos de carbono incluindo monitoramento de desmatamento e estimativa de sequestro.',
        'project4.stage1': 'Identifica├º├úo da ├írea e coleta de dados',
        'project4.stage2': 'Aquisi├º├úo de imagens temporais',
        'project4.stage3': 'Medi├º├úo de desmatamento',
        'project4.stage4': 'Estimativa de sequestro de carbono',
        'project4.benefit': 'Verifica├º├úo da viabilidade do projeto baseada na capacidade de armazenamento e nos custos de compra de terra e plantio de mudas.',

        // Project 5
        'project5.title': 'Dashboard de Vendas Internacionais em BI',
        'project5.desc': 'Dashboard completo de an├ílise de vendas para mercados europeus com padr├Áes de distribui├º├úo espacial por produto, cliente e regi├úo.',
        'project5.stage1': 'Limpeza e transforma├º├úo de dados',
        'project5.stage2': 'Dashboard personalizado conforme necessidades do cliente',
        'project5.benefit': 'Padr├Áes de distribui├º├úo espacial por produto, cliente, regi├úo e colaborador para tomada de decis├úo baseada em dados.',

        // Project 6
        'project6.title': 'Compara├º├úo de Market Share e Anal├¡tica de CRM',
        'project6.desc': 'Visualiza├º├úo de dados de contato de clientes e compara├º├úo de market share para o setor de vestu├írio e acess├│rios em mercados dos EUA.',
        'project6.stage1': 'Limpeza e visualiza├º├úo de dados de CRM',
        'project6.stage2': 'Compara├º├úo de market share por CBSA',
        'project6.benefit': 'Apoio ├á tomada de decis├úo para equipe de atendimento ao cliente e planejamento de marketing em diferentes regi├Áes.',

        // Project 7
        'project7.title': 'Consultoria para Plataforma WebGIS',
        'project7.desc': 'Testes de usabilidade e sugest├Áes de melhoria para plataforma WebGIS de visualiza├º├úo de imagens de sat├®lite e gera├º├úo de indicadores.',
        'project7.stage1': 'Testes de usabilidade na perspectiva do cliente',
        'project7.stage2': 'Sugest├Áes de melhoria e novas ideias',
        'project7.benefit': 'Apoio ao desenvolvimento da plataforma com sugest├Áes acion├íveis e ideias inovadoras.',

        // Project 8
        'project8.title': 'Anal├¡tica Multicanal de An├║ncios e Vendas de Ingressos',
        'project8.desc': 'Fluxo completo para anal├¡tica de an├║ncios em m├║ltiplas plataformas (Google, Meta, TikTok) com an├ílise de desempenho de vendas de ingressos por show e cidade.',
        'project8.stage1': 'Extra├º├úo de dados das plataformas de an├║ncios',
        'project8.stage2': 'Limpeza e integra├º├úo',
        'project8.stage3': 'Transforma├º├úo de m├®tricas padronizadas',
        'project8.stage4': 'Dashboard de an├ílise de desempenho',
        'project8.benefit': 'Vis├úo clara da efici├¬ncia do investimento em an├║ncios e desempenho de vendas de ingressos apoiando otimiza├º├úo de ROI baseada em dados.',

        // Project 9
        'project9.title': 'Matriz de Dist├óncia e Dura├º├úo para Planejamento de Rotas',
        'project9.desc': 'Desenvolvimento de matrizes validadas de dist├óncia e dura├º├úo a partir de coordenadas brutas para otimiza├º├úo log├¡stica e planejamento de rotas.',
        'project9.stage1': 'Limpeza e valida├º├úo de dados',
        'project9.stage2': 'C├ílculo de rotas com fallback',
        'project9.stage3': 'Tratamento de erros e relat├│rios',
        'project9.benefit': 'Matriz confi├ível de tempo de viagem e dist├óncia melhorando efici├¬ncia do planejamento de rotas e precis├úo nas decis├Áes.',

        // Project 10
        'project10.title': 'Processamento Geoespacial e Visualiza├º├úo 3D',
        'project10.desc': 'Processamento LiDAR/DEM, an├ílise de terreno e gera├º├úo de modelos 3D (STL) para planejamento de desenvolvimento de terras.',
        'project10.stage1': 'An├ílise de terreno com LiDAR/DEM',
        'project10.stage2': 'Mapeamento de infraestrutura',
        'project10.stage3': 'Mapas esquem├íticos e de sat├®lite',
        'project10.stage4': 'Gera├º├úo de modelo 3D de terreno',
        'project10.benefit': 'Mapas claros e modelo 3D para orientar decis├Áes de planejamento e desenvolvimento.',

        // Project 11
        'project11.title': 'WebGIS de Avalia├º├úo de Localiza├º├úo para Bar de Vinhos',
        'project11.desc': 'Plataforma WebGIS interativa para due diligence de investimento, combinando an├ílise espacial, intelig├¬ncia competitiva e dados de turismo para aquisi├º├úo de bar de vinhos em Lucca, It├ília.',
        'project11.stage1': 'Coleta de dados tur├¡sticos e estrutura espacial',
        'project11.stage2': 'Is├│cronas de caminhada e mapeamento de ├írea de influ├¬ncia',
        'project11.stage3': 'Posicionamento competitivo e an├ílise de fluxo de pedestres',
        'project11.stage4': 'Desenvolvimento de dashboard WebGIS interativo',
        'project11.benefit': 'Due diligence de investimento baseada em dados com intelig├¬ncia de localiza├º├úo, an├ílise do cen├írio competitivo e modelagem de demanda para decis├Áes de aquisi├º├úo de neg├│cios.',

        // Project 12
        'project12.title': '├ügua Segura - WebGIS de Gest├úo H├¡drica',
        'project12.desc': 'Plataforma de mapeamento interativo para gest├úo sustent├ível da ├ígua em microbacias, coordenando esfor├ºos de conserva├º├úo multi-ag├¬ncia no Paran├í, Brasil.',
        'project12.stage1': 'Mapeamento tem├ítico interativo com visualiza├º├úo multicamada',
        'project12.stage2': 'Filtragem regional e integra├º├úo de dados institucionais',
        'project12.stage3': 'Templates padronizados de documenta├º├úo e acompanhamento',
        'project12.stage4': 'Integra├º├úo de dashboard Power BI para m├®tricas',
        'project12.benefit': 'Gest├úo coordenada de bacias hidrogr├íficas permitindo ├ás equipes acompanhar pr├íticas de conserva├º├úo desde o diagn├│stico at├® a implementa├º├úo entre m├║ltiplas ag├¬ncias governamentais.',

        // Project 13
        'project13.title': 'Dashboard de Pre├ºos de Terras - Paran├í',
        'project13.desc': 'Dashboard interativo para an├ílise hist├│rica de pre├ºos de terras no Paran├í, constru├¡do a partir de dados p├║blicos do DERAL com pipeline ETL completo e integra├º├úo de camada geogr├ífica.',
        'project13.stage1': 'Parsing de PDFs e pipeline de extra├º├úo de dados',
        'project13.stage2': 'Padroniza├º├úo de dados e gera├º├úo de JSON',
        'project13.stage3': 'Integra├º├úo de mapeamento territorial com GeoJSON',
        'project13.stage4': 'Dashboard React interativo com filtros',
        'project13.benefit': 'Transformou relat├│rios PDF dispersos em um produto de dados consult├ível com filtro territorial e visualiza├º├úo hist├│rica de pre├ºos.',

        // Project 14
        'project14.title': 'Dashboard de Pre├ºos Florestais - Paran├í',
        'project14.desc': 'Produto de dados para monitorar pre├ºos de produtos florestais no Paran├í, transformando compila├º├Áes p├║blicas oficiais em visualiza├º├Áes acion├íveis.',
        'project14.stage1': 'Aquisi├º├úo e padroniza├º├úo de dados p├║blicos',
        'project14.stage2': 'Consist├¬ncia de unidades e curadoria de s├®ries temporais',
        'project14.stage3': 'Desenvolvimento de dashboard com compara├º├úo hist├│rica',
        'project14.benefit': 'Consolidou dados de pre├ºos oficiais dispersos em uma interface ├║nica para consulta r├ípida e an├ílise de tend├¬ncias hist├│ricas.',

        // Clients
        'clients.title': 'Empresas que Confiam',
        'clients.subtitle': 'Empresas e organiza├º├Áes com as quais tive o prazer de trabalhar',

        // Contact
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Pronto para transformar seus dados em insights? Vamos falar sobre seu projeto.',
        'contact.email': 'Email',
        'contact.cta.title': 'Vamos Trabalhar Juntos',
        'contact.cta.desc': 'Seja para an├ílise geoespacial, visualiza├º├úo de dados, avalia├º├úo de cr├®ditos de carbono ou anal├¡tica de marketing, estou aqui para ajudar a transformar seus dados em insights acion├íveis.',
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
