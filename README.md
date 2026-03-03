# Portfolio — Avner Gomes

Site pessoal e portfólio profissional de Avner Gomes, Engenheiro Florestal e Cientista de Dados. Desenvolvido com HTML5, CSS3 e JavaScript puro — sem frameworks ou etapas de build.

**🔗 [Acessar](https://avnergomes.github.io/portfolio/)**

---

## Sobre

O site reúne apresentação profissional, habilidades, serviços, projetos e formas de contato em uma página multilíngue (Português, Inglês e Espanhol). Todo o conteúdo é servido estaticamente via GitHub Pages, com foco em performance, acessibilidade e boas práticas de SEO.

---

## Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| Marcação | HTML5 |
| Estilização | CSS3 |
| Interatividade | JavaScript puro (vanilla) |
| Hospedagem | GitHub Pages |
| CI/CD | GitHub Actions |
| SEO | Meta tags, Open Graph, JSON-LD, sitemap.xml, robots.txt |

Não utiliza npm, Node.js, frameworks JS ou etapa de build. Basta abrir o `index.html` em qualquer navegador.

---

## Estrutura do Projeto

```
portfolio/
├── index.html                  # Página principal
├── 404.html                    # Página de erro personalizada
├── sitemap.xml                 # Sitemap para SEO
├── robots.txt                  # Diretrizes para crawlers
├── config.local.js.example     # Exemplo de configuração local (tracking)
├── css/
│   └── styles.css              # Estilos globais
├── js/
│   ├── main.js                 # Lógica principal (filtros, UI, tracking)
│   └── translations.js         # Sistema de tradução PT/EN/ES
├── images/
│   ├── profile.jpg             # Foto de perfil
│   ├── logo.*                  # Arquivos de logo
│   ├── clients/                # Logos de clientes
│   └── projects/               # Screenshots dos projetos
├── TRACKING_DATA.md            # Documentação do sistema de analytics
├── SEO_REPORT.md               # Relatório de otimização SEO
└── .github/
    └── workflows/
        ├── deploy.yml          # Deploy no GitHub Pages
        ├── lighthouse.yml      # Auditoria de performance (Lighthouse)
        ├── link-check.yml      # Verificação de links quebrados
        └── seo-check.yml       # Checagem automatizada de SEO
```

---

## Funcionalidades

- **Multilíngue** — alternância dinâmica entre Português (PT), Inglês (EN) e Espanhol (ES) sem recarregar a página
- **Seções completas** — About, Skills, Services, Projects, Clients e Contact
- **Filtros de projetos** — filtragem de project cards por categoria
- **SEO otimizado** — meta tags completas, Open Graph para redes sociais, dados estruturados JSON-LD e sitemap XML
- **Rastreamento LGPD-compliant** — analytics respeitando a legislação brasileira de proteção de dados
- **Página 404 personalizada** — mantém identidade visual em acessos inválidos
- **CI/CD automatizado** — deploy, auditoria Lighthouse, verificação de links e checagem de SEO via GitHub Actions

---

## Desenvolvimento Local

Por ser um site estático puro, não é necessária nenhuma instalação.

### Opção 1 — Abrir diretamente

```bash
# Clonar o repositório
git clone https://github.com/avnergomes/portfolio.git
cd portfolio

# Abrir no navegador
open index.html
# ou simplesmente arraste index.html para o navegador
```

### Opção 2 — Servidor local (recomendado para evitar restrições de CORS)

```bash
# Com Python (já vem instalado na maioria dos sistemas)
python -m http.server 8000
# Acesse: http://localhost:8000

# Com Node.js (se disponível)
npx serve .
# Acesse: http://localhost:3000
```

### Configuração de tracking local (opcional)

```bash
# Copiar o arquivo de exemplo
cp config.local.js.example config.local.js

# Editar com suas configurações
# O arquivo config.local.js é ignorado pelo .gitignore
```

---

## Licença

MIT License — consulte o arquivo `LICENSE` no repositório para detalhes.
