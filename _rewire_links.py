"""Rewire the 12 external project-card links in index.html to local case studies.

Each external link becomes the LOCAL case study page; the external URL is
preserved inside the case study as the 'View live site' CTA.
"""
from pathlib import Path

ROOT = Path(__file__).parent
INDEX = ROOT / "index.html"

# external URL  ->  local case study path
MAP = [
    ("https://datageoparana.github.io",                      "projects/datageo-parana.html"),
    ("https://avnergomes.github.io/vbp-parana/",             "projects/vbp-parana.html"),
    ("https://avnergomes.github.io/dsmarket-dashboard/",     "projects/dsmarket.html"),
    ("https://avnergomes.github.io/DesArts-webGIS/",         "projects/des-arts-webgis.html"),
    ("https://aguasegura.github.io/mapainterativo/index.html","projects/agua-segura.html"),
    ("https://avnergomes.github.io/precos-de-terras",        "projects/precos-de-terras.html"),
    ("https://avnergomes.github.io/precos-florestais",       "projects/precos-florestais.html"),
    ("https://avnergomes.github.io/credito-rural-parana/",   "projects/credito-rural-parana.html"),
    ("https://avnergomes.github.io/comexstat-parana/",       "projects/comexstat-parana.html"),
    ("https://avnergomes.github.io/emprego-agro-parana/",    "projects/emprego-agro-parana.html"),
    ("https://avnergomes.github.io/censo-parana/",           "projects/censo-parana.html"),
    ("https://avnergomes.github.io/precos-diarios/",         "projects/precos-diarios.html"),
]

html = INDEX.read_text(encoding="utf-8")

# We only touch <a ... class="project-link" ...> elements (the card overlay icon).
# Strategy: for each external URL, rewrite the FIRST occurrence as href="<local>"
# and drop target/rel since it's same-origin now.

import re

def rewire(html: str, ext: str, local: str) -> tuple[str, int]:
    # Match: <a href="EXT" class="project-link" [target=..] [rel=..]>
    pattern = re.compile(
        r'<a href="' + re.escape(ext) + r'"([^>]*)class="project-link"([^>]*)>',
    )
    count = 0
    def repl(m: re.Match) -> str:
        nonlocal count
        count += 1
        # Strip target=_blank and rel=noopener; keep title= if present.
        attrs_before = m.group(1)
        attrs_after = m.group(2)
        combined = (attrs_before + " " + attrs_after).strip()
        # remove target / rel attributes
        combined = re.sub(r'\s*target="[^"]*"', '', combined)
        combined = re.sub(r"\s*rel='[^']*'|\s*rel=\"[^\"]*\"", '', combined)
        combined = combined.strip()
        return f'<a href="{local}"{" " + combined if combined else ""} class="project-link">'
    new = pattern.sub(repl, html, count=1)
    return new, count

total = 0
for ext, local in MAP:
    html, n = rewire(html, ext, local)
    print(f"  {n}x  {ext}  ->  {local}")
    total += n

INDEX.write_text(html, encoding="utf-8")
print(f"\nRewired {total} of {len(MAP)} expected links in index.html")
