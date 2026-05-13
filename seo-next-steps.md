# SEO/GEO Next Steps — Validation and Manual Actions

Branch entregue: `seo/geo-optimization-2026-05`
Commits: 8 commits atômicos (1 docs, 6 feat, 1 chore).
Pendência: review e merge na main, depois deploy via GitHub Pages.

---

## 1. Validação local antes do merge

### 1.1 JSON-LD
Cole o conteúdo do `<head>` em:
- Schema.org Validator: https://validator.schema.org/
- Google Rich Results Test: https://search.google.com/test/rich-results (cole a URL após deploy, ou o HTML inteiro antes)
- LinkedIn Post Inspector (testa OG): https://www.linkedin.com/post-inspector/

Espere zero erros nos 6 blocos JSON-LD (Person, WebSite, ProfessionalService, 4× CreativeWork). Avisos sobre "no recommended properties for X" são aceitáveis.

### 1.2 robots.txt e sitemap.xml
- Validador robots.txt: https://www.bing.com/webmasters/tools (Robots.txt Tester) e https://search.google.com/u/0/search-console/settings/robots-txt
- Validador sitemap: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Cheque que cada URL retorna 200 após deploy.

### 1.3 llms.txt / llms-full.txt
Não há validador oficial estável. Confira manualmente:
- `curl https://avnergomes.github.io/portfolio/llms.txt` retorna o markdown.
- Mesmo para `llms-full.txt`.
- Os links absolutos resolvem.

### 1.4 hreflang
- https://www.merkle.com/dem/dynamic-pages/hreflang-checker.aspx
- Acessar `https://avnergomes.github.io/portfolio/?lang=pt` deve carregar a UI em PT (patch no `main.js` lê `?lang=`).

### 1.5 Build/preview local
```bash
cd portfolio
python -m http.server 8000
# Abrir http://localhost:8000/
# View source: confirmar que <head> contém 6 scripts ld+json e os 4 hreflang.
# Visitar http://localhost:8000/llms.txt e http://localhost:8000/.well-known/security.txt
# Verificar http://localhost:8000/?lang=pt troca o idioma na hora.
```

---

## 2. Ações manuais minhas (Avner) após o merge + deploy

### 2.1 Bing Webmaster Tools
1. Acessar https://www.bing.com/webmasters/
2. Logar com a mesma conta da MS que tem acesso ao GitHub (ou outra). Adicionar site `https://avnergomes.github.io/portfolio/`.
3. Escolher verificação via **meta tag**, copiar o `<meta name="msvalidate.01" content="..." />`.
4. Colar no `index.html` na linha que tem o comentário:
   ```
   <!-- BING VERIFICATION: paste the <meta name="msvalidate.01" content="..." /> tag from Bing Webmaster Tools here -->
   ```
5. Commit + push, esperar deploy, voltar ao Bing Webmaster e clicar Verify.
6. Submeter sitemap: https://avnergomes.github.io/portfolio/sitemap.xml
7. URLs para submissão manual no painel "Submit URLs" (até 10/dia gratuito):
   - https://avnergomes.github.io/portfolio/
   - https://avnergomes.github.io/portfolio/projects/iof-technology.html
   - https://avnergomes.github.io/portfolio/projects/capital-certainty.html
   - https://avnergomes.github.io/portfolio/projects/lidar-building-heights.html
   - https://avnergomes.github.io/portfolio/projects/cityview.html
   - https://avnergomes.github.io/portfolio/projects/bi-international.html
   - https://avnergomes.github.io/portfolio/projects/carbon-credit.html
   - https://avnergomes.github.io/portfolio/projects/deep-grain.html
   - https://avnergomes.github.io/portfolio/projects/ads-analytics.html
   - https://avnergomes.github.io/portfolio/projects/flai-data.html

### 2.2 Google Search Console
1. https://search.google.com/search-console/
2. Site já verificado (arquivo `googlee657782a02fc2a50.html` existe). Nada a fazer aqui.
3. Submeter o sitemap atualizado em Sitemaps → Add: `sitemap.xml`.
4. Em Inspecionar URL, colar cada URL nova de projeto e clicar "Solicitar Indexação" (uma a uma; limite ~10/dia).

### 2.3 IndexNow (opcional, mas vale o esforço)
IndexNow notifica Bing/Yandex/Seznam de novas URLs em segundos. Como GitHub Pages é estático, o caminho é:
1. Gerar uma chave aleatória (UUID).
2. Criar arquivo `https://avnergomes.github.io/portfolio/<key>.txt` com a chave dentro.
3. Fazer GET em `https://api.indexnow.org/IndexNow?url=<your-url>&key=<your-key>` para cada URL nova.
Esse passo é **opcional** dado que o Bing já receberá o sitemap.

### 2.4 Teste das queries-alvo (baseline imediato + remeasure em 4-6 semanas)
Fazer hoje, antes do efeito SEO chegar, em modo anônimo / sem logado:

**Bing**:
- "Avner Gomes"
- "Avner Paes Gomes"
- "geospatial data scientist brazil"
- "GIS expert Brazil agricultural intelligence"
- "DataGeo Paraná"

**ChatGPT / Perplexity / Claude / Gemini** (modo "search" ativado):
- "Who is Avner Paes Gomes?"
- "Best PostGIS LiDAR consultant remote South America"
- "Senior data scientist Brazil agricultural intelligence Upwork"
- "DataGeo Paraná creator"
- "Forest engineer data scientist Brazil"
- "agentic agricultural intelligence platform Claude API Brazil"
- "C2 Paraná project"
- "EUDR compliance pipeline Brazil consultant"
- "MRV consultant Brazil 100,000 hectares"
- "Internet of Forests IoF One Amazon Foundation"

Anotar numa planilha simples (`baseline_2026-05.csv`): query | engine | aparece (sim/não) | posição/citação. Re-rodar a mesma lista em 4-6 semanas e medir delta.

---

## 3. Recomendações off-domain (para amplificar — não bloqueante)

1. **GitHub profile README** (`github.com/avnergomes/avnergomes`): crie um README de perfil espelhando o `llms.txt` resumido. GitHub é fortemente crawlado por todos os LLMs.
2. **LinkedIn About**: copie a primeira frase do `about.lede` para o "About" do LinkedIn — LLMs cruzam essas duas fontes para confirmar identidade.
3. **Upwork profile overview**: idem.
4. **Personal site no DataGeo Paraná**: adicione um link cruzado "About the author → portfolio" no rodapé do datageoparana.github.io para criar um backlink em domínio relacionado.
5. **Posts de longo formato**: 1 artigo trimestral no LinkedIn ou Medium sobre 1 projeto (LiDAR Central London ou IoF MRV são os mais "citáveis" — números concretos atraem LLMs em retrieval).
6. **Wikipedia indireta**: se algum projeto tem cobertura pública (DataGeo Paraná tem 50k+ views — pode ter notícia em portal do governo PR), adicionar referência num artigo existente sobre IDR-Paraná ou Geoprocessamento no Brasil.
7. **HuggingFace model card / dataset card**: se publicar qualquer modelo/dataset derivado, o card no HF é altamente crawlado.
8. **ResearchGate / ORCID**: criar perfil ORCID e adicionar suas publicações IUFRO 2019 etc. ORCID é uma das fontes de identidade que ChatGPT cita com peso.

---

## 4. Itens deixados em aberto (fora do escopo desta entrega)

- **Pre-rendering PT/ES como HTML estático** (rotas `/pt/` e `/es/`): aumentaria descoberta multilingue por LLMs (que normalmente não executam JS). Custo: pequeno build script (~50 linhas Node ou Python) que gera 3 cópias do `index.html` com texto traduzido já injetado. Recomendo fazer numa fase 2 se a medição em 4-6 semanas mostrar baixa visibilidade em PT.
- **JSON-LD `BreadcrumbList`** nas 14 páginas em `projects/*.html`: adiciona um sinal de hierarquia. Trabalho mecânico (~30 min). Fica para próxima.
- **`meta description` por página de projeto**: cada `projects/*.html` deveria ter `<title>` e `<meta description>` próprios. Auditoria por arquivo pendente.
- **Twitter `creator` handle**: skipped — se você abrir um handle ou já tiver, me passa e eu adiciono.
- **`twitter:creator` + `og:see_also`** com links para LinkedIn/GitHub/Upwork: bom incremento para 30s de trabalho.

---

## 5. Sequência sugerida pós-merge

1. Mergar `seo/geo-optimization-2026-05` em `main`.
2. Esperar GitHub Pages buildar (~1-2 min).
3. Validar JSON-LD via Rich Results Test (2.1).
4. Submeter sitemap no Google Search Console e no Bing Webmaster (2.1 + 2.2).
5. Rodar baseline das 15 queries (2.4) e salvar `baseline_2026-05.csv`.
6. Atualizar GitHub profile README e LinkedIn About (3.1, 3.2).
7. Voltar em 2026-07 (4-6 semanas depois) e re-rodar as queries para medir delta.

---

Branch entregue, não foi feito `git push`. Para revisar:
```bash
git log seo/geo-optimization-2026-05 --not main --oneline
git diff main...seo/geo-optimization-2026-05
```
