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
        'project12.title': 'Água Segura - Water Management WebGIS',
        'project12.desc': 'Interactive mapping platform for sustainable water management across microbasins, coordinating multi-agency conservation efforts in Paraná, Brazil.',
        'project12.stage1': 'Interactive thematic mapping with multi-layer visualization',
        'project12.stage2': 'Regional filtering and institutional data integration',
        'project12.stage3': 'Standardized documentation and tracking templates',
        'project12.stage4': 'Power BI dashboard integration for metrics',
        'project12.benefit': 'Coordinated watershed management enabling teams to track conservation practices from diagnosis through implementation across multiple government agencies.',

        // Project 13
        'project13.title': 'Land Prices Dashboard - Paraná',
        'project13.desc': 'Interactive dashboard for historical land price analysis in Paraná, built from public DERAL data with full ETL pipeline and geographic layer integration.',
        'project13.stage1': 'PDF parsing and data extraction pipeline',
        'project13.stage2': 'Data standardization and JSON generation',
        'project13.stage3': 'GeoJSON territorial mapping integration',
        'project13.stage4': 'Interactive React dashboard with filters',
        'project13.benefit': 'Transformed scattered PDF reports into a queryable data product with territorial filtering and historical price visualization.',

        // Project 14
        'project14.title': 'Forest Prices Dashboard - Paraná',
        'project14.desc': 'Data product for monitoring forest product prices in Paraná, transforming official public compilations into actionable visualizations.',
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
        'services.bi.f2': 'Diseño de Pipelines ETL',
        'services.bi.f3': 'Sistemas de Reportes Automatizados',
        'services.bi.f4': 'Integración de Fuentes de Datos',
        'services.routing.title': 'Optimizacion de Rutas',
        'services.routing.desc': 'Desarrollo de matrices de distancia y duracion, optimizacion de planificacion de rutas y analisis logistico para operaciones eficientes.',
        'services.routing.f1': 'Matrices de Distancia y Duración',
        'services.routing.f2': 'Planificación de Rutas Multi-parada',
        'services.routing.f3': 'Análisis de Costos Logísticos',
        'services.routing.f4': 'Optimización de Eficiencia de Flota',
        // Strategic Services
        'services.strategy.title': 'Estrategia de Datos e IA',
        'services.strategy.desc': 'Evaluación de viabilidad, arquitectura de solución, requisitos de datos y hoja de ruta por fases. De datos desordenados + restricciones a un plan para decisión.',
        'services.strategy.f1': 'Evaluación de Madurez en Datos/IA',
        'services.strategy.f2': 'Arquitectura de Solución (Cloud/On-prem)',
        'services.strategy.f3': 'Plan de Gobernanza y Monitoreo',
        'services.strategy.f4': 'Roadmap y Estimación de Esfuerzo',
        'services.reports.title': 'Evaluaciones Técnicas e Informes',
        'services.reports.desc': 'Informes técnicos para decisión, resúmenes ejecutivos y documentación metodológica. Trazabilidad completa con supuestos y limitaciones explícitas.',
        'services.reports.f1': 'Resumen Ejecutivo (1-2 páginas)',
        'services.reports.f2': 'Informe Técnico Completo',
        'services.reports.f3': 'Metodología y Supuestos',
        'services.reports.f4': 'Paquete de Evidencias (mapas/figuras/tablas)',
        'services.advisory.title': 'Asesoría Técnica Continua (Retainer)',
        'services.advisory.desc': 'Soporte continuo para revisión metodológica, validación de análisis y decisiones técnicas. Revisión senior + apoyo a decisiones bajo demanda.',
        'services.advisory.f1': 'Revisión de Análisis y Modelos',
        'services.advisory.f2': 'Validación de Diseño Experimental',
        'services.advisory.f3': 'Narrativa Lista para Stakeholders',
        'services.advisory.f4': 'Apoyo en Propuestas y Alcance',
        'services.cta': '¿No sabes por dónde empezar? Agenda una llamada de diagnóstico.',

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
        'project13.title': 'Dashboard de Precios de Tierras - Paraná',
        'project13.desc': 'Dashboard interactivo para análisis histórico de precios de tierras en Paraná, construido a partir de datos públicos del DERAL con pipeline ETL completo e integración de capa geográfica.',
        'project13.stage1': 'Parsing de PDFs y pipeline de extracción de datos',
        'project13.stage2': 'Estandarización de datos y generación de JSON',
        'project13.stage3': 'Integración de mapeo territorial con GeoJSON',
        'project13.stage4': 'Dashboard React interactivo con filtros',
        'project13.benefit': 'Transformó informes PDF dispersos en un producto de datos consultable con filtrado territorial y visualización histórica de precios.',

        // Project 14
        'project14.title': 'Dashboard de Precios Forestales - Paraná',
        'project14.desc': 'Producto de datos para monitorear precios de productos forestales en Paraná, transformando compilaciones públicas oficiales en visualizaciones accionables.',
        'project14.stage1': 'Adquisición y estandarización de datos públicos',
        'project14.stage2': 'Consistencia de unidades y curación de series temporales',
        'project14.stage3': 'Desarrollo de dashboard con comparación histórica',
        'project14.benefit': 'Consolidó datos de precios oficiales dispersos en una interfaz única para consulta rápida y análisis de tendencias históricas.',

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
        'hero.description': 'Transformando dados complexos em insights acionáveis. Especializado em Geo Data Science, Recursos Florestais, Créditos de Carbono e Analítica de Marketing Digital.',
        'hero.viewWork': 'Ver Meus Trabalhos',
        'hero.getInTouch': 'Entre em Contato',
        'hero.scroll': 'Role para Baixo',

        // About
        'about.title': 'Sobre Mim',
        'about.p1': 'Sou Engenheiro Florestal com mestrado em Ciência de Dados, combinando vasta experiência em gestão de recursos naturais com capacidades analíticas avançadas. Minha formação única me permite conectar ciência ambiental e tomada de decisão orientada por dados.',
        'about.p2': 'Com experiência em instituições governamentais, consultorias e projetos freelance internacionais, entrego soluções ponta a ponta desde a coleta de dados até visualização e insights estratégicos.',
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
        'services.subtitle': 'Soluções completas de dados adaptadas às necessidades do seu negócio',
        'services.geo.title': 'Geo Data Science',
        'services.geo.desc': 'Análise geoespacial avançada, processamento de imagens de satélite, modelagem de terreno e insights baseados em localização para tomada de decisão estratégica.',
        'services.geo.f1': 'Análise de Sensoriamento Remoto',
        'services.geo.f2': 'Desenvolvimento WebGIS',
        'services.geo.f3': 'Processamento de Dados Espaciais',
        'services.geo.f4': 'Visualização 3D de Terreno',
        'services.forest.title': 'Recursos Florestais',
        'services.forest.desc': 'Consultoria especializada em inventário florestal, planejamento de manejo, certificação FSC e práticas florestais sustentáveis.',
        'services.forest.f1': 'Inventário Florestal',
        'services.forest.f2': 'Planejamento de Manejo',
        'services.forest.f3': 'Suporte à Certificação FSC',
        'services.forest.f4': 'Análise de Plantações',
        'services.carbon.title': 'Créditos de Carbono',
        'services.carbon.desc': 'Estudos de viabilidade para projetos de restauração florestal e geração de créditos de carbono, incluindo monitoramento de desmatamento e estimativa de sequestro.',
        'services.carbon.f1': 'Estimativa de Sequestro de Carbono',
        'services.carbon.f2': 'Análise de Desmatamento',
        'services.carbon.f3': 'Viabilidade de Restauração',
        'services.carbon.f4': 'Avaliação de Viabilidade',
        'services.marketing.title': 'Analítica de Marketing Digital',
        'services.marketing.desc': 'Analítica de publicidade multicanal, análise de dados de CRM e otimização de performance nas plataformas Google, Meta e TikTok.',
        'services.marketing.f1': 'Análise de Anúncios Multiplataforma',
        'services.marketing.f2': 'Otimização de ROI e ROAS',
        'services.marketing.f3': 'Integração de Dados CRM',
        'services.marketing.f4': 'Dashboards de Performance de Vendas',
        'services.bi.title': 'Business Intelligence',
        'services.bi.desc': 'Desenvolvimento de dashboards personalizados, criação de pipelines de dados e relatórios automatizados usando Power BI, Tableau e Looker Studio.',
        'services.bi.f1': 'Desenvolvimento de Dashboards Interativos',
        'services.bi.f2': 'Design de Pipelines ETL',
        'services.bi.f3': 'Sistemas de Relatórios Automatizados',
        'services.bi.f4': 'Integração de Fontes de Dados',
        'services.routing.title': 'Otimização de Rotas',
        'services.routing.desc': 'Desenvolvimento de matrizes de distância e duração, otimização de planejamento de rotas e análise logística para operações eficientes.',
        'services.routing.f1': 'Matrizes de Distância e Duração',
        'services.routing.f2': 'Planejamento de Rotas Multi-parada',
        'services.routing.f3': 'Análise de Custos Logísticos',
        'services.routing.f4': 'Otimização de Eficiência de Frota',
        // Strategic Services
        'services.strategy.title': 'Estratégia de Dados e IA',
        'services.strategy.desc': 'Avaliação de viabilidade, arquitetura de solução, requisitos de dados e roadmap por fases. De dados bagunçados + restrições para plano de decisão.',
        'services.strategy.f1': 'Avaliação de Maturidade em Dados/IA',
        'services.strategy.f2': 'Arquitetura de Solução (Cloud/On-prem)',
        'services.strategy.f3': 'Plano de Governança e Monitoramento',
        'services.strategy.f4': 'Roadmap e Estimativa de Esforço',
        'services.reports.title': 'Avaliações Técnicas e Relatórios',
        'services.reports.desc': 'Relatórios técnicos para decisão, resumos executivos e documentação metodológica. Rastreabilidade completa com premissas e limitações explícitas.',
        'services.reports.f1': 'Resumo Executivo (1-2 páginas)',
        'services.reports.f2': 'Relatório Técnico Completo',
        'services.reports.f3': 'Metodologia e Premissas',
        'services.reports.f4': 'Pacote de Evidências (mapas/figuras/tabelas)',
        'services.advisory.title': 'Assessoria Técnica Contínua (Retainer)',
        'services.advisory.desc': 'Suporte contínuo para revisão metodológica, validação de análises e decisões técnicas. Revisão sênior + apoio a decisões sob demanda.',
        'services.advisory.f1': 'Revisão de Análises e Modelos',
        'services.advisory.f2': 'Validação de Design Experimental',
        'services.advisory.f3': 'Narrativa Pronta para Stakeholders',
        'services.advisory.f4': 'Apoio em Propostas e Escopo',
        'services.cta': 'Não sabe por onde começar? Agende uma call de diagnóstico.',

        // Projects
        'projects.title': 'Projetos em Destaque',
        'projects.subtitle': 'Uma seleção do meu trabalho recente em diferentes áreas',
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
        'project1.desc': 'Dashboard completo para análise de produção agrícola apoiando planejamento institucional e estratégias de cooperação municipal.',
        'project1.stage1': 'Web scraping e pipeline ETL',
        'project1.stage2': 'Limpeza e transformação de dados',
        'project1.stage3': 'Visualização interativa',
        'project1.benefit': 'Apoio na definição de cadeias produtivas prioritárias para Planejamento Institucional e elaboração de Termos de Cooperação com Municípios.',

        // Project 2
        'project2.title': 'DSMarket - Projeto de Conclusão de Mestrado',
        'project2.desc': 'Pipeline de ciência de dados ponta a ponta para otimizar estratégia de reabastecimento de supermercados usando clustering e previsão de séries temporais.',
        'project2.stage1': 'Análise Exploratória de Dados (EDA)',
        'project2.stage2': 'Clustering de Clientes/Produtos',
        'project2.stage3': 'Previsão de Séries Temporais',
        'project2.stage4': 'Implantação do Modelo',
        'project2.benefit': 'Auxiliou na definição de estratégia piloto de reabastecimento para supermercados com pipeline completo de dados brutos a insights acionáveis.',

        // Project 3
        'project3.title': 'Plano de Desenvolvimento Florestal',
        'project3.desc': 'Análise geoespacial multilayer para identificar áreas ótimas para implementação de plantações florestais considerando custos e acesso ao mercado.',
        'project3.stage1': 'Interseção de camadas georreferenciadas',
        'project3.stage2': 'Modelagem de custos e riscos',
        'project3.stage3': 'Análise de custos de transporte',
        'project3.benefit': 'Identificação de áreas de maior risco com base em custos de implementação e redução de preços devido aos custos de transporte.',

        // Project 4
        'project4.title': 'Avaliação de Geração de Créditos de Carbono',
        'project4.desc': 'Estudo de viabilidade para restauração florestal e geração de créditos de carbono incluindo monitoramento de desmatamento e estimativa de sequestro.',
        'project4.stage1': 'Identificação da área e coleta de dados',
        'project4.stage2': 'Aquisição de imagens temporais',
        'project4.stage3': 'Medição de desmatamento',
        'project4.stage4': 'Estimativa de sequestro de carbono',
        'project4.benefit': 'Verificação da viabilidade do projeto baseada na capacidade de armazenamento e nos custos de compra de terra e plantio de mudas.',

        // Project 5
        'project5.title': 'Dashboard de Vendas Internacionais em BI',
        'project5.desc': 'Dashboard completo de análise de vendas para mercados europeus com padrões de distribuição espacial por produto, cliente e região.',
        'project5.stage1': 'Limpeza e transformação de dados',
        'project5.stage2': 'Dashboard personalizado conforme necessidades do cliente',
        'project5.benefit': 'Padrões de distribuição espacial por produto, cliente, região e colaborador para tomada de decisão baseada em dados.',

        // Project 6
        'project6.title': 'Comparação de Market Share e Analítica de CRM',
        'project6.desc': 'Visualização de dados de contato de clientes e comparação de market share para o setor de vestuário e acessórios em mercados dos EUA.',
        'project6.stage1': 'Limpeza e visualização de dados de CRM',
        'project6.stage2': 'Comparação de market share por CBSA',
        'project6.benefit': 'Apoio à tomada de decisão para equipe de atendimento ao cliente e planejamento de marketing em diferentes regiões.',

        // Project 7
        'project7.title': 'Consultoria para Plataforma WebGIS',
        'project7.desc': 'Testes de usabilidade e sugestões de melhoria para plataforma WebGIS de visualização de imagens de satélite e geração de indicadores.',
        'project7.stage1': 'Testes de usabilidade na perspectiva do cliente',
        'project7.stage2': 'Sugestões de melhoria e novas ideias',
        'project7.benefit': 'Apoio ao desenvolvimento da plataforma com sugestões acionáveis e ideias inovadoras.',

        // Project 8
        'project8.title': 'Analítica Multicanal de Anúncios e Vendas de Ingressos',
        'project8.desc': 'Fluxo completo para analítica de anúncios em múltiplas plataformas (Google, Meta, TikTok) com análise de desempenho de vendas de ingressos por show e cidade.',
        'project8.stage1': 'Extração de dados das plataformas de anúncios',
        'project8.stage2': 'Limpeza e integração',
        'project8.stage3': 'Transformação de métricas padronizadas',
        'project8.stage4': 'Dashboard de análise de desempenho',
        'project8.benefit': 'Visão clara da eficiência do investimento em anúncios e desempenho de vendas de ingressos apoiando otimização de ROI baseada em dados.',

        // Project 9
        'project9.title': 'Matriz de Distância e Duração para Planejamento de Rotas',
        'project9.desc': 'Desenvolvimento de matrizes validadas de distância e duração a partir de coordenadas brutas para otimização logística e planejamento de rotas.',
        'project9.stage1': 'Limpeza e validação de dados',
        'project9.stage2': 'Cálculo de rotas com fallback',
        'project9.stage3': 'Tratamento de erros e relatórios',
        'project9.benefit': 'Matriz confiável de tempo de viagem e distância melhorando eficiência do planejamento de rotas e precisão nas decisões.',

        // Project 10
        'project10.title': 'Processamento Geoespacial e Visualização 3D',
        'project10.desc': 'Processamento LiDAR/DEM, análise de terreno e geração de modelos 3D (STL) para planejamento de desenvolvimento de terras.',
        'project10.stage1': 'Análise de terreno com LiDAR/DEM',
        'project10.stage2': 'Mapeamento de infraestrutura',
        'project10.stage3': 'Mapas esquemáticos e de satélite',
        'project10.stage4': 'Geração de modelo 3D de terreno',
        'project10.benefit': 'Mapas claros e modelo 3D para orientar decisões de planejamento e desenvolvimento.',

        // Project 11
        'project11.title': 'WebGIS de Avaliação de Localização para Bar de Vinhos',
        'project11.desc': 'Plataforma WebGIS interativa para due diligence de investimento, combinando análise espacial, inteligência competitiva e dados de turismo para aquisição de bar de vinhos em Lucca, Itália.',
        'project11.stage1': 'Coleta de dados turísticos e estrutura espacial',
        'project11.stage2': 'Isócronas de caminhada e mapeamento de área de influência',
        'project11.stage3': 'Posicionamento competitivo e análise de fluxo de pedestres',
        'project11.stage4': 'Desenvolvimento de dashboard WebGIS interativo',
        'project11.benefit': 'Due diligence de investimento baseada em dados com inteligência de localização, análise do cenário competitivo e modelagem de demanda para decisões de aquisição de negócios.',

        // Project 12
        'project12.title': 'Água Segura - WebGIS de Gestão Hídrica',
        'project12.desc': 'Plataforma de mapeamento interativo para gestão sustentável da água em microbacias, coordenando esforços de conservação multi-agência no Paraná, Brasil.',
        'project12.stage1': 'Mapeamento temático interativo com visualização multicamada',
        'project12.stage2': 'Filtragem regional e integração de dados institucionais',
        'project12.stage3': 'Templates padronizados de documentação e acompanhamento',
        'project12.stage4': 'Integração de dashboard Power BI para métricas',
        'project12.benefit': 'Gestão coordenada de bacias hidrográficas permitindo às equipes acompanhar práticas de conservação desde o diagnóstico até a implementação entre múltiplas agências governamentais.',

        // Project 13
        'project13.title': 'Dashboard de Preços de Terras - Paraná',
        'project13.desc': 'Dashboard interativo para análise histórica de preços de terras no Paraná, construído a partir de dados públicos do DERAL com pipeline ETL completo e integração de camada geográfica.',
        'project13.stage1': 'Parsing de PDFs e pipeline de extração de dados',
        'project13.stage2': 'Padronização de dados e geração de JSON',
        'project13.stage3': 'Integração de mapeamento territorial com GeoJSON',
        'project13.stage4': 'Dashboard React interativo com filtros',
        'project13.benefit': 'Transformou relatórios PDF dispersos em um produto de dados consultável com filtro territorial e visualização histórica de preços.',

        // Project 14
        'project14.title': 'Dashboard de Preços Florestais - Paraná',
        'project14.desc': 'Produto de dados para monitorar preços de produtos florestais no Paraná, transformando compilações públicas oficiais em visualizações acionáveis.',
        'project14.stage1': 'Aquisição e padronização de dados públicos',
        'project14.stage2': 'Consistência de unidades e curadoria de séries temporais',
        'project14.stage3': 'Desenvolvimento de dashboard com comparação histórica',
        'project14.benefit': 'Consolidou dados de preços oficiais dispersos em uma interface única para consulta rápida e análise de tendências históricas.',

        // Clients
        'clients.title': 'Empresas que Confiam',
        'clients.subtitle': 'Empresas e organizações com as quais tive o prazer de trabalhar',

        // Contact
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Pronto para transformar seus dados em insights? Vamos falar sobre seu projeto.',
        'contact.email': 'Email',
        'contact.cta.title': 'Vamos Trabalhar Juntos',
        'contact.cta.desc': 'Seja para análise geoespacial, visualização de dados, avaliação de créditos de carbono ou analítica de marketing, estou aqui para ajudar a transformar seus dados em insights acionáveis.',
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
