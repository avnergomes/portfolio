# SEO/GEO Audit — avnergomes.github.io/portfolio

Data da auditoria: 2026-05-13
Auditor: Claude (Opus 4.7)
Fonte de verdade comparada: `Avner Paes Gomes_Resume_2026.md` (PT e EN, modificados em 2026-05-10) + perfil LinkedIn aberto no Chrome.

---

## 0. Correção de premissa do prompt

O prompt assumiu **React 18 + Vite + Tailwind**. O repositório atual é **HTML/CSS/JS estático puro**, single-page com 14 case-study pages internas em `projects/*.html`. Isso é uma **vantagem para GEO/SEO**: todo o conteúdo está no SSR (HTML servido pelo GitHub Pages), sem hidratação JS necessária para crawlers verem o texto. Não há problema de prerender.

A única parte injetada por JS é a **tradução PT/ES** via `data-i18n` (texto default em EN está no HTML, traduções vêm de `js/translations.js`). Crawlers verão só o EN. Isso afeta a fase 2 (hreflang).

---

## A. Estado atual

### A.1 Meta tags
| Item | Estado | Observação |
|---|---|---|
| `<title>` | Presente, 71 chars | Acima do ideal (60). Atual: "Avner Gomes — Forest Engineer & Data Scientist \| GIS, Remote Sensing & BI" |
| `meta description` | Presente, 178 chars | Acima do ideal (155). Boa densidade de fatos. |
| `meta keywords` | Presente, MUITO inchado (45+ termos PT/EN/ES) | Tag ignorada por Google há anos, pode parecer spammy. Manter ou enxugar. |
| `meta author` | Presente | OK |
| `meta robots` | `index,follow` | OK |
| `meta geo.region/placename` | `BR-PR`, "Paraná, Brasil" | OK |
| `canonical` | `https://avnergomes.github.io/portfolio/` | OK |
| OpenGraph | type/title/description/url/locale/locale:alternate(en_US,es_ES)/site_name/image(1200x630) | Completo. `og:locale` está pt_BR mas o conteúdo padrão é EN — divergência. |
| Twitter card | summary_large_image, title, description, image | Completo. Falta `twitter:site`/`twitter:creator`. |
| `hreflang` | **AUSENTE** | Crítico: site multilíngue (EN/ES/PT) sem alternates. |
| Verificação Bing | Ausente | Pendente do usuário colar code. |
| Verificação Google | Há `googlee657782a02fc2a50.html` (arquivo). | Já verificado no Search Console. |

### A.2 Schema.org / JSON-LD existente

Apenas **um** bloco JSON-LD: `ProfessionalService` com `aggregateRating 5.0 (14 reviews)`, `areaServed: Paraná`, `knowsAbout` (20 termos), `serviceType` (16 termos), `founder.Person: Avner Gomes`.

Faltam:
- `Person` (você como entidade autônoma, com `sameAs` para LinkedIn/GitHub/Upwork, `alumniOf` UFPR + Nuclio, `worksFor` IDR-Paraná, `jobTitle` atualizado, `knowsAbout` técnico).
- `WebSite` com `SearchAction` (não há busca interna, mas a entidade serve para o Google Knowledge Graph).
- `BreadcrumbList` nas 14 páginas de projeto.
- `CreativeWork` ou `Article` por projeto destacado (DataGeo, IOF, Capital Certainty, LiDAR Building Heights).
- `Organization` para IDR-Paraná como entidade citável (opcional, mas reforça mapeamento).

### A.3 robots.txt

Conteúdo atual (3 linhas):
```
User-agent: *
Allow: /

Sitemap: https://avnergomes.github.io/portfolio/sitemap.xml
```

**Gap**: nenhum allow explícito para crawlers de LLMs. Não é estritamente necessário (User-agent `*` cobre tudo), mas declarar explicitamente sinaliza intenção e protege contra mudanças futuras de default em alguns crawlers (PerplexityBot já mudou política duas vezes em 2024-2025). Recomendado adicionar blocos nomeados.

### A.4 sitemap.xml

**Apenas 1 URL** (root). Faltam:
- 14 páginas em `projects/*.html`
- `lastmod` realista (atual é 2026-01-30 fixo)
- Versões linguísticas (não há rotas separadas, mas `xhtml:link rel="alternate" hreflang"` em sitemap pode ajudar quando hreflang for adicionado)

### A.5 llms.txt

**AUSENTE**. Não existe `public/llms.txt` nem `llms-full.txt`. Esta é a maior alavanca de GEO atualmente, dado o tráfego já vindo do ChatGPT.

### A.6 Estrutura semântica HTML

- Único `<h1>`: "Avner Gomes" no hero. OK (1 h1 por página).
- `<h2 class="section-title">` em cada seção principal (About, Services, Projects, Clients, Testimonials, Contact). OK.
- `<h3>` em cards de skill/service/project. OK.
- Uso correto de `<nav>`, `<section>`, `<footer>`, `<aside>` (em algumas partes).
- Skip-to-content link presente (acessibilidade).
- `alt` em imagens principais.

**Gap GEO**: as **primeiras frases** de cada seção não são answer-first. Exemplo:
- About p1 começa: "I am a Forest Engineer with a Master's degree in Data Science..." — boa abertura, mas não responde "quem é Avner Gomes?" de forma autônoma e citável (sem nome no sujeito).
- Hero description: "Transforming complex data into actionable insights." — slogan, não fato citável.
- Services subtitle: "Comprehensive data solutions tailored to your business needs." — slogan, zero fatos.

LLMs preferem extrair frases do tipo: "Avner Gomes é Engenheiro Florestal e Cientista de Dados Sênior, baseado em Curitiba (PR, Brasil), com 11+ anos de experiência..."

### A.7 Densidade de fatos

Stat cards têm 4 números (`11+ anos`, `50+ projetos`, `7+ países`, `100% satisfação`) — bom, mas "anos" e "projetos" são vagos. CV diz **"Top Rated, 100% Job Success, 8+ países"** — 7+ está desatualizado.

Faltam fatos verificáveis citados em prosa:
- 200+ camadas satélite no IoF
- 100.000+ hectares verificados
- 29 KPIs ambientais
- 1,3 milhão de hectares na RESEX Verde Para Sempre
- 27.338 prédios em 25 km² (LiDAR Central London)
- 100.000+ endereços com 98%+ match (Cityview)
- 1.000+ áreas postais (KOBE)
- 9 dashboards React no DataGeo Paraná
- 50k+ visualizações no DataGeo
- 399 municípios atendidos pelo IDR-Paraná
- 23 regionais
- 1,3M+ pares de rotas OSM
- 8+ países (US, UK, DE, PA, EC, KH, FR, BR)

Estes números estão **dentro** das páginas de cada projeto e nos cards, mas raramente como **primeira frase** de uma seção.

### A.8 Idiomas

- HTML serve EN por padrão (`<html lang="en">`).
- PT e ES injetados via `js/translations.js` (cliente).
- Crawlers veem só EN. **Bing e Perplexity costumam executar JS, Googlebot também, mas LLMs em retrieval-time normalmente NÃO executam JS.**
- Não há `hreflang` para indicar que PT e ES existem.

### A.9 Acessibilidade para crawlers

| Item | Estado |
|---|---|
| Conteúdo no SSR | ✅ Sim, tudo em EN no HTML inicial |
| JS necessário para ver projetos | ❌ Não, tudo é HTML estático |
| Imagens com `alt` | ✅ Sim nas principais |
| `loading="lazy"` em imagens secundárias | Parcial |
| `aria-label` em ícones sociais | ✅ Sim |
| Skip link | ✅ Sim |
| Estrutura de URLs limpas | ✅ Sim (`/projects/lidar-building-heights.html` etc.) |

### A.10 Páginas de projeto (`projects/*.html`)

14 case studies HTML estáticos. **Não foram individualmente auditados meta-tag por meta-tag** nesta passada — uma checagem rápida via grep no plano vai mapear quais estão sem JSON-LD/canonical.

---

## B. Gaps vs. CV / LinkedIn

### B.1 Projetos no CV faltando no portfolio
Cruzando CV (EN) com `projects/*.html`:

| Projeto no CV | No portfolio? |
|---|---|
| IOF — Internet of Forests (Panama / Amazon Basin) | ✅ `iof-technology.html` |
| Capital Certainty — RESEX Verde Para Sempre | ✅ `capital-certainty.html` |
| Cityview — Urban Geocoding (Dallas-Fort Worth) | ✅ `cityview.html` |
| International Sales BI (UK/DE — KOBE) | ✅ `bi-international.html` |
| LiDAR Building Heights (Central London) | ✅ `lidar-building-heights.html` |
| Deep Grain — Agricultural Assessment (Ecuador) | ✅ `deep-grain.html` |
| Carbon Credit Generation Assessment | ✅ `carbon-credit.html` |
| Flai Data — Multi-Channel Ads + Ticket Sales | ✅ `flai-data.html` + `ads-analytics.html` |
| WebGIS Consulting — Orbify | ✅ `webgis-consulting.html` |
| Distance & Duration Matrix (1.3M+ OSM pairs) | ✅ `route-planning.html` |
| DataGeo Paraná | ✅ card no index (externo) |
| DSMarket Capstone (MSc) | ✅ card no index (externo) |
| 3D Land-Development Visualization | ✅ `land-development.html` |
| **JW Hulme Co. — Market Share & CRM** | ✅ `market-share.html` |
| **Forest Development Plan** | ✅ `forest-development.html` (não está no CV explicitamente, mas é trabalho IDR) |

**Cobertura: 14/14 + 2.** Não há projetos do CV ausentes.

### B.2 Métricas/datas do CV que enriqueceriam o portfolio

Estas frases-fato do CV ainda não aparecem em prosa SEO-friendly no `index.html`:

1. **"Senior Data Scientist with 11+ years bridging Forest Engineering and advanced analytics"** — o portfolio diz "Forest Engineer & Data Scientist", subutiliza "Senior Data Scientist".
2. **"verifying carbon credits across 100,000+ hectares and 29 KPIs"** — número específico do IoF.
3. **"Top Rated · 100% Job Success · Clients in 8+ countries"** — portfolio diz 7+.
4. **"399 municipalities and 23 regionais"** (IDR-Paraná) — ausente do portfolio.
5. **"Lidero a Área 4 de Gestão da Informação no IDR-Paraná desde 2024"** (do CV PT) — cargo atual não está explicitado.
6. **"MSc Data Science (Nuclio Digital School, Barcelona)"** — Barcelona está ausente do portfolio.
7. **"English C1 Advanced (Oxford-certified)"** — útil para sinalizar disponibilidade para projetos EN.
8. **Stack técnico expandido**: pandas, NumPy, PyTorch, LightGBM, Prophet, BigQuery, Earth Engine, Cloud Run, Supabase, Airflow, dbt, Prefect, PostGIS, GeoPandas, Sentinel-2, Landsat, PDAL — apenas parte aparece em skill tags.

### B.3 Skills/certificações desatualizadas

- Portfolio mostra "11+ anos" — consistente com CV.
- "Forest Engineering, UFPR, 2013" no portfolio. CV diz "2012". **Divergência** — checar qual é certo. CV PT também diz 2012. Atualizar portfolio para 2012.
- Certificações em preparação (Google Cloud PDE, AWS Data Analytics, Azure DP-100) ausentes do portfolio.

### B.4 Cargos / datas

- Portfolio é vago sobre cargo atual. CV especifica "State Program Coordinator" no IDR-Paraná desde 2018, e PT especifica "Assessor Técnico de Geoprocessamento, Área 4 de Gestão da Informação desde 2024".

---

## C. Análise GEO (Generative Engine Optimization)

Para cada seção, avalio:
- **AF (Answer-First)**: a primeira frase responde uma pergunta implícita citável?
- **Fatos**: há data + número (não "X anos" mas "desde 2013")?
- **Nomes por extenso**: programas/projetos escritos por inteiro pelo menos uma vez?
- **Contexto institucional**: âncoras de entidade para LLM mapear?

| Seção | AF | Fatos | Nomes extenso | Contexto institucional |
|---|---|---|---|---|
| Hero | ❌ "Transforming complex data..." | ❌ | ❌ "Avner Gomes" só no h1 | ❌ |
| About p1 | ⚠️ Boa narrativa, falta sujeito nome | ⚠️ Genérico | ❌ | ❌ IDR-Paraná não citado |
| About p2 | ❌ Genérico | ❌ | ❌ | ❌ |
| Services | ❌ Slogan | ❌ | ❌ | ❌ |
| Projects subtitle | ❌ Slogan | ❌ | ❌ | ❌ |
| Project cards | ⚠️ Variado | ✅ Geralmente bons (LiDAR cita 27.338 / 25 km²) | ⚠️ DataGeo escrito por extenso uma vez | ⚠️ Falta IDR-Paraná, IDR (IAPAR/EMATER), UFPR, Nuclio |
| Testimonials | ✅ Tem texto extraível | ⚠️ Star ratings, sem stats | ❌ Quem é o cliente? | ⚠️ Só categoria de projeto |
| Contact | ⚠️ OK | ❌ | ❌ | ❌ |

**Diagnóstico GEO geral**: o conteúdo está rico em fatos (especialmente nas páginas de projeto), mas a **estruturação answer-first está fraca**. LLMs em retrieval extraem as primeiras 40–60 palavras de cada seção e cards — se essas palavras são slogans, o LLM cita slogans. Reescrever 6–8 frases-âncora resolve 80% do gap.

**Falta um parágrafo bio canônico** que reúna nome completo + cargo atual + instituição + base geográfica + área de expertise + métrica âncora numa frase de 30–50 palavras. Esse parágrafo deveria aparecer no About (como primeiro elemento) E ser exportado em `llms.txt` e `llms-full.txt` para garantir extração.

---

## D. Resumo executivo

**O que está bom:**
- Site é HTML estático com SSR completo, ótimo para crawlers e LLMs.
- 14 case-study pages individuais existem.
- Meta tags básicas, OG e Twitter cards presentes.
- 1 JSON-LD presente (ProfessionalService com aggregateRating).
- Verificação Google Search Console feita.

**O que está faltando (prioridade alta):**
1. `llms.txt` e `llms-full.txt` (formato spec llmstxt.org).
2. `Person` schema com `sameAs` (LinkedIn, GitHub, Upwork) e `worksFor` IDR-Paraná.
3. `WebSite` schema.
4. JSON-LD `Article`/`CreativeWork` em cada case study principal.
5. sitemap.xml expandido com as 14 páginas de projeto.
6. `hreflang` para EN/PT/ES.
7. Parágrafo bio canônico answer-first no topo do About.
8. Reescrita das primeiras frases de Hero, About, Services com fatos verificáveis.
9. Atualização "7+ países" → "8+ países", "Forest Engineering 2013" → "2012".
10. Citação explícita de IDR-Paraná, UFPR, Nuclio Digital School (Barcelona) em prosa.

**O que está faltando (prioridade média):**
11. Verificação Bing Webmaster Tools.
12. `Organization` schema para IDR-Paraná.
13. `BreadcrumbList` nas páginas de projeto.
14. `.well-known/security.txt`.
15. Robots.txt expandido com bots de LLM nomeados.

**O que está faltando (prioridade baixa, opcional):**
16. Renderização PT/ES no SSR via duplicação de rotas (`/pt/`, `/es/`) — investigar custo-benefício, pode não valer.
17. Meta `twitter:creator` (precisa de handle).
18. `meta description` por página de projeto.

---

Próximo arquivo: `seo-plan.md` com as mudanças propostas. Aguardando "aprovado" antes de aplicar.
