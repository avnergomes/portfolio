"""Generate Midnight-themed case study pages for the 12 external projects.

Writes projects/<slug>.html for each. Each page leans on ../css/styles.css
for the Midnight aesthetic; the only inline style is the per-project hero
gradient (visual identity) — everything else is theme-driven.
"""
from pathlib import Path
from textwrap import dedent

ROOT = Path(__file__).parent
OUT = ROOT / "projects"

PROJECTS = [
    {
        "slug": "datageo-parana",
        "title": "DataGeo Paraná",
        "subtitle": "Ecosystem of nine React dashboards on Paraná agriculture, built at IDR-Paraná with automated Python ETL pipelines and Google Apps Script analytics.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2024 — 2026",
        "live_url": "https://datageoparana.github.io",
        "live_label": "datageoparana.github.io",
        "gradient": "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        "overview": [
            "DataGeo Paraná is a public ecosystem of nine interactive dashboards covering agriculture, rural credit, foreign trade, employment, prices, and census data for the state of Paraná, Brazil. It was built inside IDR-Paraná with the brief of consolidating institutional data scattered across PDF reports, ad-hoc spreadsheets, and federal APIs into one coherent, citable surface.",
            "Each dashboard is a self-contained React app with its own ETL pipeline; together they share a common visual system, automated daily refresh, and a custom analytics layer that records anonymous usage and surfaces it back to the institutional team. The ecosystem has crossed 50,000+ page views and is referenced by state-level planning teams.",
        ],
        "stages": [
            "Data architecture and automated ETL pipelines (Python + GitHub Actions)",
            "Development of nine React dashboards with D3.js / Recharts / Leaflet",
            "Custom analytics system using Google Apps Script and Sheets",
            "SEO and architecture documentation across all sub-sites",
        ],
        "tech": ["React", "Vite", "D3.js", "Recharts", "Leaflet", "Python", "Google Apps Script", "GitHub Actions"],
        "outcome": "Public ecosystem of Paraná agricultural data with 50k+ views, referenced in institutional planning and cooperation terms.",
    },
    {
        "slug": "vbp-parana",
        "title": "Gross Production Value Dashboard — Paraná",
        "subtitle": "Power BI dashboard for agricultural production analysis supporting institutional planning and municipal cooperation strategies.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2024",
        "live_url": "https://avnergomes.github.io/vbp-parana/",
        "live_label": "avnergomes.github.io/vbp-parana",
        "gradient": "linear-gradient(135deg, #2d5a27 0%, #4a7c43 100%)",
        "overview": [
            "VBP — Valor Bruto da Produção — is Paraná's official measure of the gross value of every commodity grown or raised in the state, broken down by 399 municipalities and 23 regional offices. The annual release was a static PDF that took planning teams hours to query; this dashboard makes it queryable in seconds.",
            "I built the web scraper that ingests each year's release, a small ETL that resolves municipal identifier drift across years, and a Power BI front-end that lets the planning team filter by chain, region, and year. It now backs the early-stage feasibility step for cooperation terms with municipalities.",
        ],
        "stages": [
            "Web scraping and ETL pipeline (Python + requests)",
            "Data cleaning, identifier reconciliation, and historical normalisation",
            "Interactive Power BI dashboard with drill-down by region and chain",
        ],
        "tech": ["Power BI", "Web Scraping", "Python", "ETL"],
        "outcome": "Decision support for priority production chains in Institutional Planning and Cooperation Terms with municipalities.",
    },
    {
        "slug": "dsmarket",
        "title": "DSMarket — Master's Capstone",
        "subtitle": "End-to-end data science pipeline for supermarket re-supply strategy optimisation using clustering and time series forecasting.",
        "category": "Data Science",
        "location": "Nuclio Digital School, Barcelona",
        "period": "2023",
        "live_url": "https://avnergomes.github.io/dsmarket-dashboard/",
        "live_label": "avnergomes.github.io/dsmarket-dashboard",
        "gradient": "linear-gradient(135deg, #1a365d 0%, #2c5282 100%)",
        "overview": [
            "DSMarket was my capstone project for the MSc Data Science at Nuclio Digital School (Barcelona). The brief: take three years of transactional retail data and design a re-supply strategy that beats the supermarket's existing rule of thumb on a held-out test period.",
            "The pipeline runs EDA, customer and product clustering, demand forecasting per cluster (LSTM and Random Forest baselines), and ships a small dashboard that lets a category manager pick a store + cluster and see the recommended re-supply curve against the actual sell-through.",
        ],
        "stages": [
            "Exploratory Data Analysis on three years of transactional history",
            "Customer and product clustering (k-means, hierarchical)",
            "Time series forecasting per cluster — LSTM and Random Forest",
            "Model deployment and lightweight dashboard for category managers",
        ],
        "tech": ["Python", "LSTM", "Random Forest", "Clustering", "Time Series", "Streamlit"],
        "outcome": "Pilot re-supply strategy with full end-to-end pipeline from raw transactional data to actionable per-store recommendations.",
    },
    {
        "slug": "des-arts-webgis",
        "title": "Des Arts WebGIS — Wine Bar Location",
        "subtitle": "Interactive WebGIS platform for investor due diligence on a wine bar acquisition in Lucca, Italy — spatial analysis, competitive intelligence, and tourism demand modelling.",
        "category": "Geospatial",
        "location": "Lucca, Italy",
        "period": "2025",
        "live_url": "https://avnergomes.github.io/DesArts-webGIS/",
        "live_label": "avnergomes.github.io/DesArts-webGIS",
        "gradient": "linear-gradient(135deg, #722f37 0%, #9b4d54 100%)",
        "overview": [
            "An investor was evaluating the acquisition of a wine bar in Lucca, a tourist-heavy walled town in Tuscany. They wanted a single artefact that combined the location's catchment, the competitive landscape, and the tourist footfall that drives demand — something they could open on a phone in a meeting, not a 60-page PDF.",
            "I built an interactive Mapbox WebGIS that overlays walking isochrones around the candidate location, competitor positions with their menu segment, hotel cluster density (proxy for tourist arrivals), and a small spatial demand model. The deliverable is the page itself — open in any browser, no login.",
        ],
        "stages": [
            "Tourism data collection and spatial framework",
            "Walking isochrones and catchment mapping",
            "Competitor positioning and footfall analysis",
            "Interactive WebGIS dashboard with layered storytelling",
        ],
        "tech": ["Mapbox GL JS", "GeoJSON", "JavaScript", "Spatial Analysis"],
        "outcome": "Investor-ready due diligence artefact with location intelligence, competitive landscape, and demand modelling in a single browser-native deliverable.",
    },
    {
        "slug": "agua-segura",
        "title": "Água Segura — Water Management WebGIS",
        "subtitle": "Interactive mapping platform for sustainable water management across microbasins, coordinating multi-agency conservation efforts in Paraná, Brazil.",
        "category": "Geospatial",
        "location": "Paraná, Brazil",
        "period": "2024 — 2026",
        "live_url": "https://aguasegura.github.io/mapainterativo/index.html",
        "live_label": "aguasegura.github.io/mapainterativo",
        "gradient": "linear-gradient(135deg, #1e6091 0%, #48a9c5 100%)",
        "overview": [
            "Água Segura is a multi-agency programme coordinating conservation practices across hundreds of microbasins in Paraná. Field teams from different agencies were tracking the same interventions in incompatible spreadsheets; the diagnosis-to-implementation timeline was opaque even to the programme leadership.",
            "This WebGIS gives every microbasin its own page: diagnosis status, practices in flight, intervention timeline, and links to the Power BI dashboard that summarises programme-wide metrics. It is the day-to-day tool field teams use, and the artefact the leadership opens in meetings.",
        ],
        "stages": [
            "Interactive thematic mapping with multi-layer visualisation",
            "Regional filtering and institutional data integration",
            "Standardised documentation and intervention tracking templates",
            "Power BI dashboard integration for programme-wide metrics",
        ],
        "tech": ["WebGIS", "Thematic Mapping", "Power BI", "GeoJSON", "Leaflet"],
        "outcome": "Coordinated watershed management surface tracking conservation practices from diagnosis through implementation across multiple state agencies.",
    },
    {
        "slug": "precos-de-terras",
        "title": "Land Prices Dashboard — Paraná",
        "subtitle": "Interactive dashboard for historical land price analysis in Paraná, built from public DERAL data with a full ETL pipeline and geographic layer integration.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2025",
        "live_url": "https://avnergomes.github.io/precos-de-terras",
        "live_label": "avnergomes.github.io/precos-de-terras",
        "gradient": "linear-gradient(135deg, #7c5e3c 0%, #a67c52 100%)",
        "overview": [
            "DERAL (Paraná's department of rural economy) publishes a monthly land price report as a series of PDFs. Anyone trying to look at the historical series has to parse the PDFs by hand. This dashboard reverses that — it ingests every release, normalises the categories, joins them to territorial polygons, and surfaces the time series with regional filters.",
            "The dashboard is fully open-source on GitHub; the data product is the PDF pipeline plus the React dashboard on top of it.",
        ],
        "stages": [
            "PDF parsing and data extraction pipeline (Python + pdfplumber)",
            "Data standardisation and JSON generation",
            "GeoJSON territorial mapping integration",
            "Interactive React dashboard with regional and temporal filters",
        ],
        "tech": ["Python", "React", "Vite", "GeoJSON", "ETL Pipeline"],
        "outcome": "Scattered PDF reports transformed into a queryable data product with territorial filtering and historical price visualisation.",
    },
    {
        "slug": "precos-florestais",
        "title": "Forest Prices Dashboard — Paraná",
        "subtitle": "Data product monitoring forest product prices in Paraná — transforming official public compilations into actionable visualisations.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2025",
        "live_url": "https://avnergomes.github.io/precos-florestais",
        "live_label": "avnergomes.github.io/precos-florestais",
        "gradient": "linear-gradient(135deg, #2d5a27 0%, #4a7c43 100%)",
        "overview": [
            "Paraná's official forest product prices are published as a sequence of compilations with shifting units and category names. Anyone tracking the historical series of, say, pine sawlog prices, has to reconcile the units by hand each year. This dashboard ingests those compilations, standardises the units, and gives the historical series a single home with regional comparison.",
            "Open-source on GitHub. Used by forestry consultants and timber buyers to anchor negotiations.",
        ],
        "stages": [
            "Public data acquisition and standardisation",
            "Unit consistency and time series curation",
            "Dashboard development with historical comparison",
        ],
        "tech": ["Python", "Data Wrangling", "Time Series", "JavaScript", "Dashboard"],
        "outcome": "Scattered official forest price data consolidated into a single interface for quick consultation and historical trend analysis.",
    },
    {
        "slug": "credito-rural-parana",
        "title": "Crédito Rural Paraná",
        "subtitle": "Dashboard of agricultural financing in Paraná from BCB/SICOR data since 2013 — first integrated public visualisation of state-level rural credit flows.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2025",
        "live_url": "https://avnergomes.github.io/credito-rural-parana/",
        "live_label": "avnergomes.github.io/credito-rural-parana",
        "gradient": "linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)",
        "overview": [
            "SICOR — the Brazilian Central Bank's rural credit system — publishes a granular feed of every operation: program, purpose, region, value, term. It is the most complete picture of where rural credit actually lands. But the data ships as a wide CSV with cryptic codes; very few people outside the central bank have ever rolled it up to the state level.",
            "This dashboard does that for Paraná. It joins SICOR to Paraná's regional and municipal boundaries, lets you see flows by program (PRONAF, PRONAMP, etc.), by purpose (custeio, investimento, comercialização), and by chain. Sankey diagrams trace where the money goes.",
        ],
        "stages": [
            "Integration with Central Bank Olinda API",
            "Data pipeline and aggregations by program and purpose",
            "Interactive visualisations with D3.js and Recharts (Sankey, Treemap, time series)",
        ],
        "tech": ["React", "BCB API", "D3.js", "Sankey", "Treemap", "Python"],
        "outcome": "First integrated public visualisation of SICOR rural credit data at Paraná state level, supporting policy and lending decisions.",
    },
    {
        "slug": "comexstat-parana",
        "title": "ComexStat Paraná",
        "subtitle": "Dashboard of Paraná exports and imports from MDIC/ComexStat data — consolidated view of state foreign trade by production chain.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2025",
        "live_url": "https://avnergomes.github.io/comexstat-parana/",
        "live_label": "avnergomes.github.io/comexstat-parana",
        "gradient": "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
        "overview": [
            "MDIC's ComexStat is the official source of Brazilian foreign trade data. At the state level it's underused because the NCM (commodity code) granularity hides the production-chain story — soybean exports, for instance, are split across dozens of NCM codes that need to be rolled up to be useful.",
            "This dashboard maps every NCM code to a production chain, joins exports and imports to Paraná's chain taxonomy, and surfaces the flows with sankey diagrams and time series. It is the first place in Paraná government you can open one tab and see the state's trade balance by chain.",
        ],
        "stages": [
            "ComexStat/MDIC data pipeline (Python + ETL)",
            "NCM to production chain mapping (curated taxonomy)",
            "Trade flow visualisations and country-level maps",
        ],
        "tech": ["React", "ComexStat API", "D3.js", "Sankey", "Python"],
        "outcome": "Consolidated view of Paraná foreign trade by production chain — used by the state's commercial promotion team for trade missions.",
    },
    {
        "slug": "emprego-agro-parana",
        "title": "Emprego Agro Paraná",
        "subtitle": "Dashboard of formal employment in Paraná agribusiness from CAGED data — seasonality, trends, and labour-market monitoring.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2025",
        "live_url": "https://avnergomes.github.io/emprego-agro-parana/",
        "live_label": "avnergomes.github.io/emprego-agro-parana",
        "gradient": "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
        "overview": [
            "CAGED is Brazil's monthly formal employment register: every hire and every dismissal. For agribusiness in Paraná, the headline number hides a strong seasonal signal — harvest peaks, off-season troughs, and the structural drift of the sector over years. This dashboard makes that signal legible.",
            "It ingests every monthly release, classifies CNAE codes into the relevant agribusiness chains, and exposes the seasonality with lollipop, bump, and time-series charts that work for both the harvest-cycle story and the year-on-year drift.",
        ],
        "stages": [
            "CAGED data extraction and chain classification",
            "Seasonality and trend analysis",
            "Lollipop, Bump and time series visualisations",
        ],
        "tech": ["React", "CAGED", "D3.js", "Lollipop", "Python"],
        "outcome": "Monitoring surface for Paraná's agricultural labour market — seasonality and trends visible at a glance for planning and policy work.",
    },
    {
        "slug": "censo-parana",
        "title": "Censo Paraná",
        "subtitle": "Dashboard of IBGE census data for Paraná's 399 municipalities — demographic indicators, choropleth maps, and comparative analysis.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2025",
        "live_url": "https://avnergomes.github.io/censo-parana/",
        "live_label": "avnergomes.github.io/censo-parana",
        "gradient": "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
        "overview": [
            "Brazil's IBGE census is the most detailed picture of the country's demographics, but the bulk delivery is technical and the user-facing tools at municipal level are sparse. This dashboard takes the Paraná slice — all 399 municipalities — and gives each one a comparable card across the indicators institutional planning teams actually use.",
            "Built with the same dashboard stack as the rest of the ecosystem, with choropleth maps for the spatial story and comparative bars for the ranking story.",
        ],
        "stages": [
            "IBGE census data processing and indicator selection",
            "Demographic indicators calculation and normalisation",
            "Choropleth maps and comparative charts",
        ],
        "tech": ["React", "IBGE API", "D3.js", "Leaflet", "Python"],
        "outcome": "Demographic analysis of 399 Paraná municipalities in a single comparable surface for planning and policy use.",
    },
    {
        "slug": "precos-diarios",
        "title": "Preços Diários",
        "subtitle": "Dashboard of daily agricultural product prices from SEAB/DERAL — seasonality, regional spread, and automated update pipeline.",
        "category": "Business Intelligence",
        "location": "Paraná, Brazil",
        "period": "2025 — 2026",
        "live_url": "https://avnergomes.github.io/precos-diarios/",
        "live_label": "avnergomes.github.io/precos-diarios",
        "gradient": "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
        "overview": [
            "Paraná's SEAB/DERAL publishes daily price quotes for a long list of agricultural products across the state's regions. Until this dashboard, anyone tracking historical movements had to compile the daily releases by hand. The dashboard ingests each release on publication, builds the historical series, and exposes seasonality and regional spread.",
            "Refresh is fully automated via GitHub Actions; the dashboard is open-source and updated daily without manual intervention.",
        ],
        "stages": [
            "Web scraping and ETL from DERAL daily publications",
            "Seasonality and regional spread analysis",
            "Interactive time series with filters and product comparison",
        ],
        "tech": ["React", "DERAL", "D3.js", "Time Series", "Python", "GitHub Actions"],
        "outcome": "Daily agricultural price tracking with automatic updates — the historical series available without manual compilation.",
    },
]


TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="../favicon.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{subtitle_attr}">
    <meta name="robots" content="index,follow">
    <title>{title} | Avner Gomes</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:opsz,wght,SOFT@9..144,300;9..144,400;9..144,500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../css/styles.css">
    <style>
        .project-hero {{ background: {gradient}; color: white; padding: 6rem 0 4rem; margin-top: 80px; }}
        .project-hero .container {{ max-width: 960px; }}
        .live-cta {{
            display: inline-flex; align-items: center; gap: 0.75rem;
            font-family: var(--font-display); font-style: italic; font-weight: 400;
            font-size: 1.1rem;
            color: var(--color-ink); text-decoration: none;
            padding: 0.9rem 1.5rem;
            border: 1px solid var(--color-accent); border-radius: 999px;
            background: var(--color-accent-soft);
            transition: background var(--transition-base), color var(--transition-base);
        }}
        .live-cta:hover {{ background: var(--color-accent); color: oklch(18% 0.04 60); }}
        .live-cta i {{ font-size: 0.9rem; }}
        .live-cta-row {{ display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin: 1.5rem 0 2rem; }}
        .live-cta-row .live-url {{ font-family: var(--font-mono); font-size: 0.78rem; color: var(--color-mute); letter-spacing: 0.04em; }}
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="../index.html" class="nav-logo">
                <picture>
                    <source srcset="../assets/logo1.webp" type="image/webp" />
                    <img src="../assets/logo1.png" alt="Avner Gomes" class="logo-img" width="32" height="32" />
                </picture>
                <span class="logo-text">Avner Gomes</span>
            </a>
            <div class="nav-menu">
                <ul class="nav-list">
                    <li><a href="../index.html#projects">Projects</a></li>
                    <li><a href="../index.html#services">Services</a></li>
                    <li><a href="../index.html#contact">Contact</a></li>
                </ul>
                <div class="nav-actions">
                    <div class="language-selector">
                        <button class="lang-btn active" data-lang="en">EN</button>
                        <button class="lang-btn" data-lang="es">ES</button>
                        <button class="lang-btn" data-lang="pt">PT</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <section class="project-hero">
        <div class="container">
            <a href="../index.html#projects" class="back-link"><i class="fas fa-arrow-left"></i><span>Back to Projects</span></a>
            <h1>{title}<span class="badge">Case Study</span></h1>
            <p class="subtitle">{subtitle}</p>
            <div class="project-meta">
                <div class="meta-item"><i class="fas fa-folder"></i><span>{category}</span></div>
                <div class="meta-item"><i class="fas fa-calendar"></i><span>{period}</span></div>
                <div class="meta-item"><i class="fas fa-map-marker-alt"></i><span>{location}</span></div>
            </div>
        </div>
    </section>

    <section class="project-content">
        <div class="container">
            <div class="live-cta-row">
                <a href="{live_url}" target="_blank" rel="noopener" class="live-cta">
                    <i class="fas fa-external-link-alt"></i>
                    <span>View live site</span>
                </a>
                <span class="live-url">{live_label}</span>
            </div>

            <div class="content-section">
                <h2>Project Overview</h2>
{overview_paragraphs}
            </div>

            <div class="content-section">
                <h2>Development Stages</h2>
                <ul>
{stages_html}
                </ul>
            </div>

            <div class="content-section">
                <h2>Tech Stack</h2>
                <div class="tech-stack">
{tech_html}
                </div>
            </div>

            <div class="content-section">
                <h2>Outcome</h2>
                <div class="highlight-box"><p>{outcome}</p></div>
            </div>

            <div class="content-section" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-rule); text-align: center;">
                <a href="{live_url}" target="_blank" rel="noopener" class="live-cta">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Open the live dashboard</span>
                </a>
            </div>
        </div>
    </section>
</body>
</html>
"""


def render(p: dict) -> str:
    overview = "\n".join(f'                <p>{x}</p>' for x in p["overview"])
    stages = "\n".join(f'                    <li>{x}</li>' for x in p["stages"])
    tech = "\n".join(f'                    <span class="tech-tag">{x}</span>' for x in p["tech"])
    return TEMPLATE.format(
        title=p["title"],
        subtitle=p["subtitle"],
        subtitle_attr=p["subtitle"].replace('"', '&quot;'),
        category=p["category"],
        location=p["location"],
        period=p["period"],
        live_url=p["live_url"],
        live_label=p["live_label"],
        gradient=p["gradient"],
        overview_paragraphs=overview,
        stages_html=stages,
        tech_html=tech,
        outcome=p["outcome"],
    )


def main():
    OUT.mkdir(exist_ok=True)
    for p in PROJECTS:
        path = OUT / f'{p["slug"]}.html'
        path.write_text(render(p), encoding="utf-8")
        print(f"  wrote {path.name}  ({len(p['overview'])} paras, {len(p['stages'])} stages)")
    print(f"\n{len(PROJECTS)} case study pages generated in {OUT}/")


if __name__ == "__main__":
    main()
