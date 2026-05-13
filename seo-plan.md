# SEO/GEO Plan — Proposed Changes

Branch alvo: `seo/geo-optimization-2026-05`
Pré-requisito: aprovação do `seo-audit.md`.
Restrição: NÃO fazer `git push`. Commits agrupados por tipo (`feat(seo):`, `chore(geo):`, `docs:`).
Restrição: o portfolio é HTML estático, não React/Vite. Plano adaptado para isso.

---

## 1. Conteúdo — atualizar com base no CV/LinkedIn

### 1.1 Hero (`index.html` ~L141–L153)
- **Manter**: `<h1>Avner Gomes</h1>` (sinal forte de nome).
- **Reescrever subtitle**: "Senior Data Scientist & Forest Engineer" (priorizar "Senior Data Scientist" — termo que ChatGPT retorna em queries).
- **Reescrever hero description** com fato âncora:
  > "Engenheiro Florestal e Cientista de Dados Sênior, baseado em Curitiba (PR, Brasil), com 11+ anos transformando dados geoespaciais em decisões para clientes em 8+ países. MSc em Data Science (Nuclio Digital School, Barcelona), Top Rated 100% Job Success no Upwork."
- **Versão EN** (default no HTML):
  > "Senior Data Scientist and Forest Engineer based in Curitiba, Brazil, with 11+ years turning geospatial data into decisions for clients in 8+ countries. MSc Data Science (Nuclio Digital School, Barcelona), Top Rated 100% Job Success on Upwork."

### 1.2 About (`index.html` ~L173–L213)
- **Inserir parágrafo bio canônico ANTES** dos p1/p2 atuais, com sujeito explícito:
  > "Avner Paes Gomes é Engenheiro Florestal (UFPR, 2012) e Cientista de Dados Sênior (MSc, Nuclio Digital School, Barcelona, 2023). Atua como Assessor Técnico de Geoprocessamento no IDR-Paraná (IAPAR/EMATER) desde 2018, coordenando dados de 399 municípios e 23 regionais. Em paralelo, atende clientes internacionais no Upwork (Top Rated, 100% Job Success, 8+ países: EUA, Reino Unido, Alemanha, Panamá, Equador, Camboja, França, Brasil)."
- **Manter** p1/p2 atuais como segundo bloco.
- **Atualizar** "Forest Engineering, UFPR, 2013" → "2012" no `data-i18n="about.edu3.school"`.
- **Adicionar** linha sobre English C1 + Spanish B1 no bloco de Education ou Skills.

### 1.3 About stats (`index.html` ~L215–L232)
- `7+ Countries Served` → `8+ Countries Served` (e atualizar tradução PT/ES).
- Considerar trocar "11+ Years Experience" por "Since 2013" para ter data verificável.

### 1.4 Services subtitle (`index.html` ~L290)
- Substituir "Comprehensive data solutions tailored to your business needs" por:
  > "Geospatial data pipelines, MRV for carbon and biodiversity, BI dashboards and digital marketing analytics. Decision-grade deliverables with full methodology traceability."

### 1.5 Projects subtitle (`index.html` ~L459)
- Substituir "A selection of my recent work across different domains" por:
  > "Case studies from 50+ projects delivered to clients in 8+ countries — including 100,000+ hectares verified for EUDR compliance, 27,338 buildings extracted from LiDAR, and 1.3M+ OSM route pairs."

### 1.6 Project cards — densidade
Adicionar 1 frase-fato âncora em cada `data-i18n="*.desc"` quando falta. Exemplos:
- **IoF Technology**: "200+ satellite layers, 29 environmental KPIs across 6 thematic groups, 100,000+ hectares verified for EUDR compliance."
- **Capital Certainty**: "Vector sanitation methodology applied to 1.3 million-hectare federal extractive reserve (RESEX Verde Para Sempre, Pará, Brazil), supporting CDRU land regularization."
- **Cityview**: "100,000+ addresses processed with multi-provider fallback, 98%+ match accuracy across Dallas–Fort Worth."
- **LiDAR Building Heights**: já tem "27,338 buildings / 25 km²". OK.
- **BI International (KOBE)**: "1,000+ postal areas across UK and Germany, daily refresh, adopted in weekly executive reviews."
- **Route Planning**: "1.3M+ OSM route pairs with OSMnx + OpenRouteService fallback."
- **DataGeo Paraná**: "9 dashboards React, 50k+ visualizações, ETL automatizado, ecosystem agrícola público do Paraná."

### 1.7 Contact (`index.html` ~L1636)
- Adicionar **endereço estruturado** mínimo (Curitiba, PR, Brazil) em texto, para reforçar `geo.placename`.
- Manter os 4 links (email, LinkedIn, Upwork, GitHub) — já alimentam `sameAs`.

---

## 2. Estrutura HTML — extratibilidade GEO

### 2.1 Reescrever h2 com padrão answer-first

Cada `<h2 class="section-title">` ganha um `<p class="section-lede">` imediatamente abaixo, com resposta autônoma em 40–60 palavras. Já coberto em 1.x acima. Não mexer em design — `section-lede` pode herdar do estilo de `section-subtitle` ou ser um parágrafo simples.

### 2.2 Garantir um único H1 por página
- Index: `<h1>Avner Gomes</h1>` — OK.
- Páginas de projeto: validar uma a uma (será uma sub-tarefa no commit `chore(seo): per-project h1 audit`).

### 2.3 Adicionar `<address>` no Contact
- Wrap nos contatos com `<address itemscope itemtype="https://schema.org/Person">` (microdata complementa o JSON-LD).

---

## 3. Meta tags — atualização

### 3.1 Title
Atual: "Avner Gomes — Forest Engineer & Data Scientist | GIS, Remote Sensing & BI" (71 chars).
**Proposta** (60 chars):
> "Avner Gomes — Senior Data Scientist & GIS Engineer (Brazil)"

### 3.2 Description (155 chars)
**Proposta**:
> "Senior Data Scientist & Forest Engineer. GIS, LiDAR, MRV, BI. 50+ projects, 8+ countries, Top Rated on Upwork. Based in Curitiba, Brazil."

### 3.3 OG / Twitter
- Atualizar `og:title` e `og:description` para refletir o novo title/description.
- Adicionar `og:locale` corrigido: usar `en_US` como primary (já que o HTML serve EN) e manter pt_BR/es_ES como alternates.
- Adicionar `twitter:creator` se o user fornecer handle (perguntar antes de aplicar, mas não bloquear deploy se não tiver).

### 3.4 Keywords meta tag
- Enxugar para 15–20 termos focados (remover redundância PT/EN/ES).
- Ou remover totalmente (Google ignora, e o tamanho atual parece keyword-stuffing). **Recomendação: remover.** Confirmar.

### 3.5 hreflang
Adicionar no `<head>`:
```html
<link rel="alternate" hreflang="en" href="https://avnergomes.github.io/portfolio/" />
<link rel="alternate" hreflang="pt-BR" href="https://avnergomes.github.io/portfolio/?lang=pt" />
<link rel="alternate" hreflang="es" href="https://avnergomes.github.io/portfolio/?lang=es" />
<link rel="alternate" hreflang="x-default" href="https://avnergomes.github.io/portfolio/" />
```
**Caveat**: `?lang=pt` só funciona se `js/main.js` ler `URLSearchParams` e aplicar o idioma no load. Sub-tarefa: validar/adicionar no main.js (pequena mudança).

### 3.6 Verificação
- Manter o arquivo `googlee657782a02fc2a50.html` (já verificado).
- Reservar comentário HTML no `<head>` para o user colar o `<meta name="msvalidate.01" content="..." />` do Bing.

---

## 4. JSON-LD — schemas a adicionar

Todos inline no `<head>` do `index.html`, separados por tipo, com `@type` único cada.

### 4.1 Person (você) — **principal alavanca para Knowledge Graph**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Avner Paes Gomes",
  "givenName": "Avner",
  "familyName": "Paes Gomes",
  "alternateName": ["Avner Gomes", "Avner Paes"],
  "jobTitle": "Senior Data Scientist & Forest Engineer",
  "description": "Senior Data Scientist and Forest Engineer based in Curitiba, Brazil, specializing in geospatial data pipelines, remote sensing, MRV for carbon and biodiversity, and business intelligence.",
  "url": "https://avnergomes.github.io/portfolio/",
  "image": "https://avnergomes.github.io/portfolio/assets/profile.jpg",
  "email": "mailto:avnerpaesgomes@gmail.com",
  "telephone": "+55-41-98805-5737",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "IDR-Paraná (Instituto de Desenvolvimento Rural do Paraná — IAPAR/EMATER)",
    "url": "https://www.idrparana.pr.gov.br/"
  },
  "alumniOf": [
    {"@type": "CollegeOrUniversity", "name": "Universidade Federal do Paraná (UFPR)", "url": "https://www.ufpr.br/"},
    {"@type": "CollegeOrUniversity", "name": "Nuclio Digital School (Barcelona)", "url": "https://nuclio.school/"}
  ],
  "knowsLanguage": ["pt-BR", "en", "es"],
  "knowsAbout": [
    "Geographic Information Systems (GIS)", "PostGIS", "Google Earth Engine",
    "Remote Sensing", "Sentinel-2", "Landsat", "LiDAR", "PDAL",
    "Python", "pandas", "GeoPandas", "scikit-learn", "PyTorch", "LightGBM", "Prophet",
    "SQL", "BigQuery", "Supabase", "PostgreSQL",
    "ETL", "Airflow", "dbt", "Prefect",
    "Power BI", "Tableau", "Looker Studio",
    "Machine Learning", "MLOps", "Time Series Forecasting",
    "MRV (Monitoring, Reporting, Verification)", "Carbon Credits", "EUDR Compliance",
    "Forest Engineering", "Forest Inventory", "Precision Agriculture",
    "Agricultural Intelligence", "Agentic Agricultural Intelligence",
    "Watershed Modeling", "NDVI Analysis",
    "Google Ads", "Meta Ads", "TikTok Ads", "GA4",
    "Drone Piloting"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/avnergomes/",
    "https://github.com/avnergomes",
    "https://www.upwork.com/freelancers/avnergomes"
  ]
}
```

### 4.2 WebSite
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Avner Gomes Portfolio",
  "url": "https://avnergomes.github.io/portfolio/",
  "inLanguage": ["en", "pt-BR", "es"],
  "author": {"@id": "https://avnergomes.github.io/portfolio/#person"},
  "publisher": {"@id": "https://avnergomes.github.io/portfolio/#person"}
}
```
(Person ganha `"@id": "https://avnergomes.github.io/portfolio/#person"` para permitir referência cruzada.)

### 4.3 ProfessionalService — manter, ajustar
- Manter `aggregateRating`.
- Atualizar `founder` para usar `@id` do Person acima.
- Trocar `description` para versão atualizada (já no item 3.2).

### 4.4 CreativeWork por projeto destacado
Adicionar JSON-LD para 4 projetos âncora no `<head>` do index (não em cada projects/*.html nesta fase, para limitar escopo):
- DataGeo Paraná
- IoF — Internet of Forests
- Capital Certainty — RESEX
- LiDAR Building Heights

Cada um com `@type: CreativeWork`, `creator: @id Person`, `about`, `keywords`, `url` para a página interna.

### 4.5 BreadcrumbList nas 14 páginas de projeto
Plan: gerar um snippet template e aplicar via sed/loop. Sub-tarefa marcada para fase 3.

---

## 5. Arquivos novos a criar

### 5.1 `robots.txt` (sobrescrever)
Adicionar allows explícitos por bot (não estritamente necessários pois `*` cobre, mas é sinal de intenção):
```
# Avner Gomes Portfolio - robots.txt
# Última atualização: 2026-05-13

User-agent: *
Allow: /

# Search engines
User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: DuckDuckBot
Allow: /
User-agent: Applebot
Allow: /

# LLM crawlers - allowed for citation and retrieval
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

Sitemap: https://avnergomes.github.io/portfolio/sitemap.xml
```

### 5.2 `llms.txt` (novo, spec llmstxt.org)
Arquivo curto, parseável, no formato markdown estruturado. Local: raiz do site (`/llms.txt`, não `/public/llms.txt` porque o site é estático).

Estrutura prevista (~80 linhas):
```
# Avner Paes Gomes

> Senior Data Scientist & Forest Engineer based in Curitiba, Brazil.
> 11+ years bridging Forest Engineering and advanced analytics.
> Top Rated 100% Job Success on Upwork, clients in 8+ countries.
> MSc Data Science (Nuclio Digital School, Barcelona, 2023).
> B.Sc. Forest Engineering (UFPR, 2012), MBA Precision Forest Management (UFPR, 2018).
> Works at IDR-Paraná (IAPAR/EMATER) since 2018.

## Identity
- linkedin.com/in/avnergomes
- github.com/avnergomes
- upwork.com/freelancers/avnergomes
- avnerpaesgomes@gmail.com

## Featured Projects
- [IoF — Internet of Forests](https://avnergomes.github.io/portfolio/projects/iof-technology.html): MRV framework with 200+ satellite layers, 29 KPIs, 100,000+ hectares verified for EUDR.
- [Capital Certainty — RESEX Verde Para Sempre](https://avnergomes.github.io/portfolio/projects/capital-certainty.html): vector sanitation on 1.3M ha federal reserve, Pará, Brazil.
- [DataGeo Paraná](https://datageoparana.github.io): 9 React dashboards, 50k+ views, public Paraná agricultural data ecosystem.
- [LiDAR Building Heights, Central London](https://avnergomes.github.io/portfolio/projects/lidar-building-heights.html): 27,338 buildings extracted from 25 km² of LAS point cloud.
- [Cityview — Urban Geocoding (Dallas-Fort Worth)](https://avnergomes.github.io/portfolio/projects/cityview.html): 100k+ addresses, 98%+ match accuracy.

## Services
- Geo Data Science / Remote Sensing / WebGIS
- Forest Resources / Carbon Credits / MRV / EUDR Compliance
- Business Intelligence / Power BI / Tableau / Looker Studio
- Digital Marketing Analytics / Google Ads / Meta Ads / TikTok Ads
- Route Optimization / Distance Matrices
- Data & AI Strategy (entry-level consulting)
- Technical Advisory (retainer)

## Optional
- [Full portfolio EN PDF](https://avnergomes.github.io/portfolio/Avner Gomes_Portfolio_EN.pdf)
- [Sitemap](https://avnergomes.github.io/portfolio/sitemap.xml)
```

### 5.3 `llms-full.txt` (novo)
Versão expandida com markdown de bio + projetos descritos com 1 parágrafo cada (~300 linhas). Cobre toda a infra de retrieval. Será gerado a partir do CV EN e dos arquivos `projects/*.html`.

### 5.4 `sitemap.xml` (sobrescrever)
- Adicionar todas as 14 páginas de `projects/`.
- `lastmod` realista (data de última modificação do arquivo).
- `priority` decrescente (1.0 root, 0.8 projetos âncora, 0.6 demais).

### 5.5 `.well-known/security.txt`
Conteúdo mínimo (sinal de profissionalismo, expira em 1 ano):
```
Contact: mailto:avnerpaesgomes@gmail.com
Expires: 2027-05-13T00:00:00Z
Preferred-Languages: en, pt-BR
```
**Caveat GitHub Pages**: GitHub Pages serve `.well-known/` normalmente. Confirmado pela documentação atual.

---

## 6. Versão em inglês / multilíngue

**Realidade da stack**: o site já serve EN como default no HTML, com PT/ES injetados por JS. Não há rotas separadas.

**Opções avaliadas**:

| Opção | Custo | Benefício | Recomendação |
|---|---|---|---|
| Manter status quo + hreflang com `?lang=pt` query string | Baixo (1 commit) | LLMs continuam vendo só EN, mas search engines passam a entender que PT/ES existem | ✅ Fazer agora |
| Pre-render PT/ES em HTML estático (`/pt/index.html`, `/es/index.html`) | Médio (precisa build script) | LLMs e crawlers veem conteúdo nos 3 idiomas | ⏸️ Considerar fase 2, fora deste escopo |
| Migrar para Astro/11ty com i18n nativo | Alto | Solução robusta | ❌ Fora de escopo (mudança de stack) |

**Decisão**: implementar opção 1 nesta rodada. Anotar opção 2 em `seo-next-steps.md`.

---

## 7. Verificação Bing / Google — onde colar

Reservar comentários no `<head>` do `index.html` (após canonical, antes de OG):
```html
<!-- BING VERIFICATION: paste tag from https://www.bing.com/webmasters here -->
<!-- GOOGLE VERIFICATION: file googlee657782a02fc2a50.html already present -->
```

Lista de URLs para submissão manual no Bing após deploy (fica em `seo-next-steps.md`):
- https://avnergomes.github.io/portfolio/
- https://avnergomes.github.io/portfolio/sitemap.xml
- Cada um dos 14 projects/*.html

---

## 8. Plano de commits (branch `seo/geo-optimization-2026-05`)

Estimativa: 6 commits atômicos.

1. `docs: add seo-audit.md and seo-plan.md`
2. `feat(seo): add llms.txt and llms-full.txt for LLM retrieval`
3. `feat(seo): expand robots.txt with LLM crawler allowlist`
4. `feat(seo): expand sitemap.xml with all project pages and accurate lastmod`
5. `feat(seo): add Person, WebSite, and CreativeWork JSON-LD; update ProfessionalService`
6. `feat(seo): answer-first copy in hero/about/services, fact-dense project cards, hreflang`
7. `chore(geo): add .well-known/security.txt and Bing verification placeholder`

(Opcional commit 8 se o user quiser PT/ES pre-renderizado depois.)

---

## 9. Itens a confirmar antes da fase 3

1. **Remover `meta keywords` ou enxugar?** (Recomendado: remover.)
2. **Twitter handle?** (Para `twitter:creator`.)
3. **Telefone público?** O CV traz +55 41 98805-5737. Aplicar no Person JSON-LD ou manter privado?
4. **URL canônica IDR-Paraná no Person.worksFor.** Confirmar `https://www.idrparana.pr.gov.br/` (atual oficial).
5. **Forest Engineering UFPR**: 2012 (CV) ou 2013 (portfolio)? Qual está correto?
6. **`?lang=pt` funciona hoje no `main.js`?** Se não, incluir patch mínimo no commit de hreflang.

---

Aguardando aprovação. Quando disser "aprovado" (ou listar ajustes), eu crio a branch `seo/geo-optimization-2026-05` e executo na ordem acima, com `git add` + `git commit` em cada passo (sem `git push`).
