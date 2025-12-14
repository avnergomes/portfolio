// Translations for English and Spanish
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
        'services.routing.title': 'Route Optimization',
        'services.routing.desc': 'Distance and duration matrix development, route planning optimization, and logistics analysis for efficient operations.',

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
        'footer.rights': 'All rights reserved.'
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
        'services.routing.title': 'Optimizacion de Rutas',
        'services.routing.desc': 'Desarrollo de matrices de distancia y duracion, optimizacion de planificacion de rutas y analisis logistico para operaciones eficientes.',

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
        'footer.rights': 'Todos los derechos reservados.'
    }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
