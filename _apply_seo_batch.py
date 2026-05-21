#!/usr/bin/env python3
"""Batch-apply SEO/GEO assets across DataGeo dashboards and tier-2 sites.

For each site listed in MANIFEST:
  1. Writes <public>/llms.txt
  2. Replaces <public>/robots.txt with LLM-allowlist version
  3. Replaces <public>/sitemap.xml with single-URL entry + lastmod today
  4. Injects Person JSON-LD <script> block into index.html <head>
     (right after the existing first <script type="application/ld+json"> block)
  5. git add + commit + push per repo

Run once; rerunnable (overwrites generated files, idempotent JSON-LD via marker).
"""
from __future__ import annotations
import datetime
import re
import subprocess
import sys
from pathlib import Path

GITHUB = Path(r"C:\Users\avner\OneDrive\Documentos\GitHub")
TODAY = datetime.date.today().isoformat()

PORTFOLIO_PERSON_ID = "https://avnergomes.github.io/portfolio/#person"
PORTFOLIO_URL = "https://avnergomes.github.io/portfolio/"
PORTFOLIO_LLMS_FULL = "https://avnergomes.github.io/portfolio/llms-full.txt"

JSONLD_MARKER = "<!-- JSON-LD: Person canonical reference (batch SEO) -->"

PERSON_JSONLD = f"""    {JSONLD_MARKER}
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "{PORTFOLIO_PERSON_ID}",
      "name": "Avner Paes Gomes",
      "alternateName": ["Avner Gomes"],
      "url": "{PORTFOLIO_URL}",
      "sameAs": [
        "https://www.linkedin.com/in/avnergomes/",
        "https://github.com/avnergomes",
        "https://www.upwork.com/freelancers/avnergomes"
      ]
    }}
    </script>"""

ROBOTS_TEMPLATE = """# {name} - robots.txt
# Last updated: {today}

User-agent: *
Allow: /

User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: DuckDuckBot
Allow: /
User-agent: Applebot
Allow: /
User-agent: YandexBot
Allow: /

# LLM crawlers
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: Bytespider
Allow: /
User-agent: Amazonbot
Allow: /
User-agent: cohere-ai
Allow: /
User-agent: Meta-ExternalAgent
Allow: /
User-agent: MistralAI-User
Allow: /

Sitemap: {site_url}sitemap.xml
"""

SITEMAP_TEMPLATE = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>{site_url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
"""

LLMS_TEMPLATE = """# {full_title}

> {summary}

## Author and identity
- Author: Avner Paes Gomes (Senior Data Scientist & Forest Engineer at IDR-Paraná, Curitiba, Brazil)
- Canonical author URL: {portfolio_url}
- Author bio (for LLMs): {portfolio_llms_full}
- LinkedIn: https://www.linkedin.com/in/avnergomes/
- GitHub: https://github.com/avnergomes

## About this dashboard
- Topic: {topic}
- Data source: {data_source}
- Coverage: {coverage}
- Stack: React, Vite, D3.js, Recharts, Python ETL, GitHub Actions
- Free public access. Part of the DataGeo Paraná ecosystem.
- Parent hub: https://datageoparana.github.io/ (lists all 10 dashboards)
- All dashboards: https://datageoparana.github.io/llms.txt

## Frequently asked entities
- {short_name} dashboard — built and maintained by Avner Paes Gomes at IDR-Paraná
- {short_name} open data Paraná — part of DataGeo Paraná ecosystem
- {data_source} Paraná dashboard — {short_name}

## Optional
- [Sitemap]({site_url}sitemap.xml)
- [Parent hub: DataGeo Paraná](https://datageoparana.github.io/)
- [Author portfolio]({portfolio_url})
"""

LLMS_LIGHT_TEMPLATE = """# {full_title}

> {summary}

## Author and identity
- Author: Avner Paes Gomes (Senior Data Scientist & Forest Engineer at IDR-Paraná, Curitiba, Brazil)
- Canonical author URL: {portfolio_url}
- Author bio (for LLMs): {portfolio_llms_full}
- LinkedIn: https://www.linkedin.com/in/avnergomes/
- GitHub: https://github.com/avnergomes

## About this site
- Topic: {topic}
- Institution: {institution}
- {extra}

## Optional
- [Sitemap]({site_url}sitemap.xml)
- [Author portfolio]({portfolio_url})
"""

# Manifest of all sites to process
DASHBOARDS = [
    {
        "repo": "vbp-parana",
        "short_name": "VBP Paraná",
        "full_title": "VBP Paraná — Valor Bruto da Produção Agropecuária",
        "summary": "VBP Paraná is a public interactive dashboard of the Gross Production Value (Valor Bruto da Produção) of Paraná agriculture, broken down by municipality, productive chain and year (SEAB/DERAL, 2012-2024). Built at IDR-Paraná by Avner Paes Gomes as part of the DataGeo Paraná ecosystem.",
        "topic": "Gross Production Value of Paraná agriculture (Valor Bruto da Produção, VBP)",
        "data_source": "SEAB/DERAL (Secretaria de Estado da Agricultura e do Abastecimento — Departamento de Economia Rural)",
        "coverage": "2012-2024, all 399 Paraná municipalities, all productive chains",
    },
    {
        "repo": "comexstat-parana",
        "short_name": "ComexStat Paraná",
        "full_title": "ComexStat Paraná — Comércio Exterior Agrícola do Paraná",
        "summary": "ComexStat Paraná is a public interactive dashboard of Paraná's agricultural foreign trade (exports and imports), built from ComexStat/MDIC open data. Part of the DataGeo Paraná ecosystem.",
        "topic": "Agricultural foreign trade (exports and imports) for Paraná, Brazil",
        "data_source": "ComexStat/MDIC (Ministério do Desenvolvimento, Indústria, Comércio e Serviços)",
        "coverage": "Multiple years, NCM product codes, by destination/origin country",
    },
    {
        "repo": "censo-parana",
        "short_name": "Censo Paraná",
        "full_title": "Censo Paraná — Evolução Demográfica Municipal",
        "summary": "Censo Paraná is a public interactive dashboard tracking the demographic evolution of Paraná municipalities using IBGE Censo data. Part of the DataGeo Paraná ecosystem.",
        "topic": "Municipal demographic evolution in Paraná, Brazil",
        "data_source": "IBGE Censo Demográfico",
        "coverage": "All 399 Paraná municipalities across multiple census years",
    },
    {
        "repo": "credito-rural-parana",
        "short_name": "Crédito Rural Paraná",
        "full_title": "Crédito Rural Paraná — Financiamentos BCB/SICOR",
        "summary": "Crédito Rural Paraná is a public interactive dashboard of rural credit and financing operations in Paraná since 2013, built from BCB/SICOR open data. Part of the DataGeo Paraná ecosystem.",
        "topic": "Rural credit and agricultural financing in Paraná, Brazil",
        "data_source": "BCB/SICOR (Banco Central do Brasil — Sistema de Operações do Crédito Rural)",
        "coverage": "Since 2013, all Paraná municipalities, all credit modalities",
    },
    {
        "repo": "emprego-agro-parana",
        "short_name": "Emprego Agro Paraná",
        "full_title": "Emprego Agro Paraná — Vínculos formais desde 2002",
        "summary": "Emprego Agro Paraná is a public interactive dashboard of formal employment in Paraná agribusiness since 2002, built from RAIS/MTE open data. Part of the DataGeo Paraná ecosystem.",
        "topic": "Formal employment in agribusiness and agriculture, Paraná, Brazil",
        "data_source": "RAIS/MTE (Relação Anual de Informações Sociais — Ministério do Trabalho e Emprego)",
        "coverage": "Since 2002, all Paraná municipalities, CNAE 2.0 agricultural classes",
    },
    {
        "repo": "precos-de-terras",
        "short_name": "Preços de Terras",
        "full_title": "Preços de Terras Paraná — Série desde 1998",
        "summary": "Preços de Terras Paraná is a public interactive dashboard of rural land prices in Paraná, with time series since 1998 from SEAB/DERAL. Part of the DataGeo Paraná ecosystem.",
        "topic": "Rural land prices in Paraná, Brazil",
        "data_source": "SEAB/DERAL (Secretaria de Estado da Agricultura e do Abastecimento — Departamento de Economia Rural)",
        "coverage": "Since 1998, multiple land categories (arable, pasture, forest, etc.) across Paraná regional offices",
    },
    {
        "repo": "precos-diarios",
        "short_name": "Preços Diários",
        "full_title": "Preços Diários Paraná — Cotações desde 2003",
        "summary": "Preços Diários is a public interactive dashboard of daily commodity price quotes in Paraná markets since 2003, built from SEAB/DERAL open data. Part of the DataGeo Paraná ecosystem.",
        "topic": "Daily commodity price quotes for Paraná markets",
        "data_source": "SEAB/DERAL (Secretaria de Estado da Agricultura e do Abastecimento — Departamento de Economia Rural)",
        "coverage": "Daily quotes since 2003, multiple agricultural commodities, Paraná state markets",
    },
    {
        "repo": "precos-florestais",
        "short_name": "Preços Florestais",
        "full_title": "Preços Florestais Paraná — Série desde 1997",
        "summary": "Preços Florestais is a public interactive dashboard of forestry product prices in Paraná with time series since 1997, built from SEAB/DERAL open data. Part of the DataGeo Paraná ecosystem.",
        "topic": "Forestry product prices in Paraná, Brazil (timber, pulpwood, charcoal)",
        "data_source": "SEAB/DERAL (Secretaria de Estado da Agricultura e do Abastecimento — Departamento de Economia Rural)",
        "coverage": "Since 1997, multiple forest products and species across Paraná",
    },
    {
        "repo": "saude-parana",
        "short_name": "Saúde Paraná",
        "full_title": "Saúde Paraná — Indicadores DATASUS",
        "summary": "Saúde Paraná is a public interactive dashboard of public-health indicators for Paraná, built from DATASUS/MS open data. Part of the DataGeo Paraná ecosystem.",
        "topic": "Public health indicators (mortality, morbidity, hospitalizations) for Paraná, Brazil",
        "data_source": "DATASUS/MS (Departamento de Informática do Sistema Único de Saúde — Ministério da Saúde)",
        "coverage": "All Paraná municipalities, multiple health indicators and time ranges",
    },
    {
        "repo": "seguranca-parana",
        "short_name": "Segurança Paraná",
        "full_title": "Segurança Paraná — Indicadores SESP-PR",
        "summary": "Segurança Paraná is a public interactive dashboard of public safety indicators for Paraná, built from SESP-PR (Secretaria de Estado da Segurança Pública) open data. Part of the DataGeo Paraná ecosystem.",
        "topic": "Public safety indicators for Paraná, Brazil",
        "data_source": "SESP-PR (Secretaria de Estado da Segurança Pública do Paraná)",
        "coverage": "Paraná state, multiple crime categories and time ranges",
    },
]

LIGHT_SITES = [
    {
        "repo": "aguasegura",
        "short_name": "Água Segura",
        "full_title": "Programa Água Segura — IDR-Paraná / SANEPAR",
        "summary": "Programa Água Segura is the institutional site of the Água Segura program — a partnership between IDR-Paraná and SANEPAR — informing citizens about water-security initiatives in Paraná, Brazil. Maintained by Avner Paes Gomes at IDR-Paraná.",
        "topic": "Water-security program in Paraná, Brazil",
        "institution": "IDR-Paraná in partnership with SANEPAR",
        "extra": "Free public access. Government-affiliated program informational site.",
    },
    {
        "repo": "psh",
        "short_name": "PSH",
        "full_title": "Programa de Segurança Hídrica — Paraná",
        "summary": "Programa de Segurança Hídrica (PSH) is the institutional site of the Water Security Program of the Government of Paraná, supported by the World Bank. Maintained by Avner Paes Gomes at IDR-Paraná.",
        "topic": "Water security program in Paraná, Brazil",
        "institution": "Governo do Paraná, with World Bank support",
        "extra": "Free public access. Government program informational site.",
    },
    {
        "repo": "carne_madeira",
        "short_name": "Carne e Madeira",
        "full_title": "Carne e Madeira Paraná",
        "summary": "Carne e Madeira is a public dashboard tracking integrated indicators for the meat and timber production chains in Paraná, Brazil. Maintained by Avner Paes Gomes at IDR-Paraná.",
        "topic": "Meat and timber production chains in Paraná, Brazil",
        "institution": "IDR-Paraná",
        "extra": "Free public access. Cross-chain agribusiness indicators.",
    },
]


def detect_paths(repo_name: str) -> tuple[Path, Path, str]:
    """Return (public_dir, index_path, site_url)."""
    base = GITHUB / repo_name
    if (base / "dashboard" / "public").is_dir():
        return base / "dashboard" / "public", base / "dashboard" / "index.html", f"https://avnergomes.github.io/{repo_name}/"
    if (base / "public").is_dir():
        return base / "public", base / "index.html", f"https://avnergomes.github.io/{repo_name}/"
    return base, base / "index.html", f"https://avnergomes.github.io/{repo_name}/"


def write_files(site: dict, light: bool = False) -> Path:
    repo = site["repo"]
    base = GITHUB / repo
    public_dir, index_path, site_url = detect_paths(repo)

    # llms.txt
    if light:
        llms = LLMS_LIGHT_TEMPLATE.format(
            full_title=site["full_title"],
            summary=site["summary"],
            topic=site["topic"],
            institution=site["institution"],
            extra=site["extra"],
            site_url=site_url,
            portfolio_url=PORTFOLIO_URL,
            portfolio_llms_full=PORTFOLIO_LLMS_FULL,
        )
    else:
        llms = LLMS_TEMPLATE.format(
            full_title=site["full_title"],
            short_name=site["short_name"],
            summary=site["summary"],
            topic=site["topic"],
            data_source=site["data_source"],
            coverage=site["coverage"],
            site_url=site_url,
            portfolio_url=PORTFOLIO_URL,
            portfolio_llms_full=PORTFOLIO_LLMS_FULL,
        )
    (public_dir / "llms.txt").write_text(llms, encoding="utf-8")

    # robots.txt
    robots = ROBOTS_TEMPLATE.format(name=site["short_name"], today=TODAY, site_url=site_url)
    (public_dir / "robots.txt").write_text(robots, encoding="utf-8")

    # sitemap.xml
    sm = SITEMAP_TEMPLATE.format(site_url=site_url, today=TODAY)
    (public_dir / "sitemap.xml").write_text(sm, encoding="utf-8")

    # Patch index.html: inject Person JSON-LD after <meta charset>
    if index_path.is_file():
        html = index_path.read_text(encoding="utf-8")
        if JSONLD_MARKER not in html:
            # Insert right after the first existing </script> in the JSON-LD that exists,
            # or after <meta charset>.
            m = re.search(r'(<script type="application/ld\+json">.*?</script>)',
                          html, flags=re.DOTALL)
            if m:
                insertion_point = m.end()
                new_html = html[:insertion_point] + "\n" + PERSON_JSONLD + html[insertion_point:]
            else:
                m2 = re.search(r'(<meta charset[^>]*>)', html, flags=re.IGNORECASE)
                if m2:
                    insertion_point = m2.end()
                    new_html = html[:insertion_point] + "\n" + PERSON_JSONLD + html[insertion_point:]
                else:
                    new_html = html  # bail, no clear anchor
            if new_html != html:
                index_path.write_text(new_html, encoding="utf-8")

    return base


def git_commit_push(repo_dir: Path, message: str) -> str:
    def run(*args):
        return subprocess.run(args, cwd=repo_dir, check=False, capture_output=True, text=True)
    run("git", "add", "-A")
    status = run("git", "status", "--short")
    if not status.stdout.strip():
        return f"{repo_dir.name}: no changes"
    r = run("git", "commit", "-m", message)
    if r.returncode != 0:
        return f"{repo_dir.name}: commit FAILED — {r.stderr.strip()[:200]}"
    push = run("git", "push", "origin", "HEAD")
    if push.returncode != 0:
        return f"{repo_dir.name}: pushed locally only — {push.stderr.strip()[:200]}"
    return f"{repo_dir.name}: committed and pushed"


def main():
    commit_msg = (
        "feat(seo): add llms.txt, expand robots/sitemap, link Person to portfolio\n\n"
        "- llms.txt (spec llmstxt.org) describing the dashboard with data source\n"
        "  and explicit Person identity URL pointing to portfolio canonical.\n"
        "- robots.txt allowlists named LLM crawlers (GPTBot, ClaudeBot, etc).\n"
        "- sitemap.xml gets lastmod refreshed.\n"
        "- index.html JSON-LD: added Person block with @id linking this site's\n"
        "  authorship to the canonical Person entity at portfolio/#person.\n"
        "  Consolidates author identity across the entire DataGeo Paraná ecosystem."
    )

    results = []
    for site in DASHBOARDS:
        base = write_files(site, light=False)
        results.append(git_commit_push(base, commit_msg))

    for site in LIGHT_SITES:
        base = write_files(site, light=True)
        results.append(git_commit_push(base, commit_msg))

    print("\n=== RESULTS ===")
    for r in results:
        print(r)


if __name__ == "__main__":
    main()
