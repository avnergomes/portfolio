"""Generate the 2026 case study pages, their index cards and their EN/ES/PT strings.

Writes:
  projects/<slug>.html          one page per entry in CASES
  js/translations-cs2026.js     every string (pages + cards), merged into `translations`
  index.html                    cards between the CS2026 markers (idempotent)

Each text field is a dict {en, es, pt}. The HTML carries the English text plus a
data-i18n key, so the page reads fine with JS off and main.js swaps the language.
"""
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).parent
LANGS = ("en", "es", "pt")

UI = {
    "cs.ui.back": {"en": "Back to Projects", "es": "Volver a Proyectos", "pt": "Voltar aos Projetos"},
    "cs.ui.badge": {"en": "Case Study", "es": "Caso de Estudio", "pt": "Estudo de Caso"},
    "cs.ui.overview": {"en": "Project Overview", "es": "Descripción del Proyecto", "pt": "Visão Geral do Projeto"},
    "cs.ui.outcome": {"en": "Outcome", "es": "Resultado", "pt": "Resultado"},
    "cs.ui.metrics": {"en": "Key Metrics", "es": "Métricas Clave", "pt": "Métricas-Chave"},
    "cs.ui.method": {"en": "Methodology", "es": "Metodología", "pt": "Metodologia"},
    "cs.ui.figures": {"en": "Results", "es": "Resultados", "pt": "Resultados"},
    "cs.ui.tech": {"en": "Technologies", "es": "Tecnologías", "pt": "Tecnologias"},
    "cs.ui.deliverables": {"en": "Deliverables", "es": "Entregables", "pt": "Entregas"},
    "cs.ui.limits": {"en": "Known Limits", "es": "Limitaciones Conocidas", "pt": "Limitações Conhecidas"},
    "cs.ui.live": {"en": "Open the live atlas", "es": "Abrir el atlas en vivo", "pt": "Abrir o atlas ao vivo"},
    "cs.ui.stages": {"en": "Development Stages", "es": "Etapas de Desarrollo", "pt": "Etapas de Desenvolvimento"},
    "cs.ui.benefit": {"en": "Main Benefit", "es": "Beneficio Principal", "pt": "Principal Benefício"},
}

CASES = [
    {
        "slug": "eudr-deforestation-verification",
        "icon": "fa-tree",
        "gradient": "linear-gradient(135deg, #14532d 0%, #15803d 100%)",
        "accent": "#15803d",
        "data_category": "geo forest",
        "period": "2026",
        "tech": ["Python", "GeoPandas", "rasterio (COG / vsicurl)", "PRODES / DETER (TerraBrasilis WFS)", "JRC TMF v1_2025", "Hansen GFC v1.13", "MapBiomas", "Sentinel-2", "CAR / SICAR", "ReportLab"],
        "card_tech": ["Python", "PRODES/DETER", "JRC TMF", "Hansen GFC", "MapBiomas", "Sentinel-2"],
        "title": {
            "en": "EUDR Deforestation Verification Pilot",
            "es": "Piloto de Verificación de Deforestación EUDR",
            "pt": "Piloto de Verificação de Desmatamento EUDR",
        },
        "subtitle": {
            "en": "Plot-level deforestation-free verification for a Belgian tropical timber importer: four supply origins in Peru, Bolivia and Brazil, one due-diligence report per origin, delivered in 2 of the 5 agreed working days.",
            "es": "Verificación de libre de deforestación por parcela para un importador belga de madera tropical: cuatro orígenes de suministro en Perú, Bolivia y Brasil, un informe de debida diligencia por origen, entregados en 2 de los 5 días hábiles acordados.",
            "pt": "Verificação de livre de desmatamento por talhão para um importador belga de madeira tropical: quatro origens de fornecimento no Peru, na Bolívia e no Brasil, um relatório de due diligence por origem, entregues em 2 dos 5 dias úteis combinados.",
        },
        "category": {"en": "Geospatial / EUDR Compliance", "es": "Geoespacial / Cumplimiento EUDR", "pt": "Geoespacial / Conformidade EUDR"},
        "location": {"en": "Peru · Bolivia · Brazil", "es": "Perú · Bolivia · Brasil", "pt": "Peru · Bolívia · Brasil"},
        "scale": {"en": "27,817 ha verified", "es": "27.817 ha verificadas", "pt": "27.817 ha verificados"},
        "overview": [
            {
                "en": "Under the EU Deforestation Regulation (EUDR), an importer must show that every plot behind a shipment had no deforestation after 31 December 2020. A Belgian importer of South American tropical timber asked for a four-origin pilot to compare against the verification it was already buying: a natural forest concession in Peru, one in Bolivia, a managed forest unit in the Brazilian Amazon and a pine plantation estate in southern Brazil.",
                "es": "Según el Reglamento Europeo de Deforestación (EUDR), un importador debe demostrar que ninguna parcela detrás de un embarque tuvo deforestación después del 31 de diciembre de 2020. Un importador belga de madera tropical sudamericana pidió un piloto de cuatro orígenes para compararlo con la verificación que ya contrataba: una concesión de bosque natural en Perú, otra en Bolivia, una unidad de manejo forestal en la Amazonía brasileña y una plantación de pino en el sur de Brasil.",
                "pt": "Pelo Regulamento Europeu de Desmatamento (EUDR), o importador precisa demonstrar que nenhum talhão por trás de um embarque teve desmatamento depois de 31 de dezembro de 2020. Um importador belga de madeira tropical sul-americana pediu um piloto de quatro origens para comparar com a verificação que já comprava: uma concessão de floresta natural no Peru, outra na Bolívia, uma unidade de manejo florestal na Amazônia brasileira e uma fazenda de pinus no Sul do Brasil.",
            },
            {
                "en": "Each origin got its own evidence chain. In Brazil the verdict comes from the official INPE records (PRODES and DETER), checked against the federal rural registry (CAR/SICAR). In Peru and Bolivia two independent global datasets, JRC Tropical Moist Forest and Hansen Global Forest Change, were read straight from public cloud-optimized archives, with no Earth Engine dependency, on a stable 1-hectare grid.",
                "es": "Cada origen tuvo su propia cadena de evidencia. En Brasil el veredicto sale de los registros oficiales del INPE (PRODES y DETER), contrastados con el registro rural federal (CAR/SICAR). En Perú y Bolivia se leyeron dos bases globales independientes, JRC Tropical Moist Forest y Hansen Global Forest Change, directamente desde archivos públicos optimizados para la nube, sin depender de Earth Engine, en una grilla estable de 1 hectárea.",
                "pt": "Cada origem teve sua própria cadeia de evidência. No Brasil o veredito vem dos registros oficiais do INPE (PRODES e DETER), conferidos com o cadastro rural federal (CAR/SICAR). No Peru e na Bolívia, duas bases globais independentes, JRC Tropical Moist Forest e Hansen Global Forest Change, foram lidas direto de arquivos públicos otimizados para nuvem, sem depender do Earth Engine, numa grade estável de 1 hectare.",
            },
            {
                "en": "The hard part was not finding loss pixels but deciding which loss counts. Selective logging under an approved management plan and the clear-cut harvest of a planted pine stand both appear as tree-cover loss in global data, yet neither is deforestation under the EUDR. The pipeline separates them, so the report flags conversion, not forestry.",
                "es": "Lo difícil no fue encontrar píxeles de pérdida, sino decidir qué pérdida cuenta. La tala selectiva bajo un plan de manejo aprobado y la cosecha a tala rasa de un rodal de pino plantado aparecen como pérdida de cobertura arbórea en los datos globales, pero ninguna es deforestación según el EUDR. El pipeline las separa, así el informe señala conversión y no actividad forestal.",
                "pt": "O difícil não foi achar pixels de perda, e sim decidir qual perda conta. O corte seletivo de um plano de manejo aprovado e a colheita a corte raso de um talhão de pinus plantado aparecem como perda de cobertura arbórea nas bases globais, mas nenhum dos dois é desmatamento para a EUDR. O pipeline separa os casos, e o relatório aponta conversão, não silvicultura.",
            },
        ],
        "outcome": {
            "en": "On the pine estate, global data alone would have reported 1,405.6 ha of deforestation. The official Atlantic Forest record confirmed 25.34 ha of native vegetation removal after 2020, in 7 polygons; 1,167.9 ha of the global loss sat in plantation cells, which is harvest, not conversion.",
            "es": "En la plantación de pino, los datos globales por sí solos habrían reportado 1.405,6 ha de deforestación. El registro oficial de la Mata Atlántica confirmó 25,34 ha de supresión de vegetación nativa después de 2020, en 7 polígonos; 1.167,9 ha de la pérdida global estaban en celdas de plantación, es decir, cosecha y no conversión.",
            "pt": "Na fazenda de pinus, a base global sozinha teria apontado 1.405,6 ha de desmatamento. O registro oficial da Mata Atlântica confirmou 25,34 ha de supressão de vegetação nativa depois de 2020, em 7 polígonos; 1.167,9 ha da perda global estavam em células de silvicultura, ou seja, colheita e não conversão.",
        },
        "kpis": [
            ("4", {"en": "Supply origins", "es": "Orígenes de suministro", "pt": "Origens de fornecimento"}),
            ("27,817 ha", {"en": "Area verified", "es": "Área verificada", "pt": "Área verificada"}),
            ("1 ha", {"en": "Analysis grid", "es": "Grilla de análisis", "pt": "Grade de análise"}),
            ("3", {"en": "Independent sources", "es": "Fuentes independientes", "pt": "Fontes independentes"}),
            ("2 / 5", {"en": "Working days used / agreed", "es": "Días hábiles usados / acordados", "pt": "Dias úteis usados / combinados"}),
            ("25.34 ha", {"en": "Flagged on the pine estate (vs 1,405.6 ha raw)", "es": "Señaladas en el pinar (vs 1.405,6 ha brutas)", "pt": "Sinalizados no pinus (vs 1.405,6 ha brutos)"}),
        ],
        "method": [
            {
                "en": "Validate geometries and CRS (WGS 84 and SIRGAS 2000), match each plot to its CAR receipt and remove duplicated features before any area is counted.",
                "es": "Validar geometrías y CRS (WGS 84 y SIRGAS 2000), vincular cada parcela con su recibo de CAR y eliminar entidades duplicadas antes de contar cualquier área.",
                "pt": "Validar geometrias e CRS (WGS 84 e SIRGAS 2000), casar cada talhão com o recibo do CAR e eliminar feições duplicadas antes de contar qualquer área.",
            },
            {
                "en": "Brazil: PRODES clear-cut and DETER deforestation from the TerraBrasilis WFS decide the verdict, with coverage proven against the biome mask; DETER degradation, Hansen and TMF stay as context.",
                "es": "Brasil: la tala rasa de PRODES y la deforestación de DETER, desde el WFS de TerraBrasilis, deciden el veredicto, con la cobertura comprobada contra la máscara del bioma; la degradación de DETER, Hansen y TMF quedan como contexto.",
                "pt": "Brasil: o corte raso do PRODES e o desmatamento do DETER, via WFS do TerraBrasilis, decidem o veredito, com a cobertura provada contra a máscara do bioma; degradação do DETER, Hansen e TMF ficam como contexto.",
            },
            {
                "en": "Peru and Bolivia: JRC TMF v1_2025 (deforestation and degradation year) and Hansen GFC v1.13 read by window from public buckets, cut-off after 2020, summarised on a 1 ha grid anchored to the CRS origin.",
                "es": "Perú y Bolivia: JRC TMF v1_2025 (año de deforestación y de degradación) y Hansen GFC v1.13 leídos por ventana desde buckets públicos, con corte después de 2020, resumidos en una grilla de 1 ha anclada al origen del CRS.",
                "pt": "Peru e Bolívia: JRC TMF v1_2025 (ano de desmatamento e de degradação) e Hansen GFC v1.13 lidos por janela de buckets públicos, com corte após 2020, resumidos numa grade de 1 ha ancorada na origem do CRS.",
            },
            {
                "en": "Plantation rule: the MapBiomas silviculture class for 2020 is joined to Hansen loss per cell, so harvest and replanting of planted forest is classified as clean.",
                "es": "Regla de plantaciones: la clase de silvicultura de MapBiomas de 2020 se cruza con la pérdida de Hansen por celda, así la cosecha y el replante de bosque plantado se clasifican como limpios.",
                "pt": "Regra da silvicultura: a classe de silvicultura do MapBiomas de 2020 é cruzada com a perda do Hansen por célula, e a colheita e o replantio de floresta plantada saem como limpos.",
            },
            {
                "en": "Every flagged area checked against dated Sentinel-2 imagery; a revision round moved the Peru and Bolivia flags to review after the imagery showed no conversion.",
                "es": "Cada área señalada se revisó con imágenes Sentinel-2 fechadas; una ronda de revisión pasó las alertas de Perú y Bolivia a revisión después de que las imágenes no mostraran conversión.",
                "pt": "Cada área sinalizada foi conferida com imagens Sentinel-2 datadas; uma rodada de revisão passou os alertas do Peru e da Bolívia para revisão depois que as imagens não mostraram conversão.",
            },
            {
                "en": "One three-page PDF per origin (verdict per plot, satellite evidence panels, methodology), cross-checked against the JSON outputs before delivery.",
                "es": "Un PDF de tres páginas por origen (veredicto por parcela, paneles de evidencia satelital, metodología), contrastado con las salidas JSON antes de la entrega.",
                "pt": "Um PDF de três páginas por origem (veredito por talhão, painéis de evidência de satélite, metodologia), conferido contra as saídas em JSON antes da entrega.",
            },
        ],
        "deliverables": [
            {
                "en": "Four PDF reports, one per origin, ready to attach to the EUDR Due Diligence Statement.",
                "es": "Cuatro informes PDF, uno por origen, listos para adjuntar a la Declaración de Debida Diligencia del EUDR.",
                "pt": "Quatro relatórios em PDF, um por origem, prontos para anexar à Declaração de Due Diligence da EUDR.",
            },
            {
                "en": "Per-cell GeoJSON and CSV results for audit.",
                "es": "Resultados por celda en GeoJSON y CSV para auditoría.",
                "pt": "Resultados por célula em GeoJSON e CSV para auditoria.",
            },
            {
                "en": "Reproducible Python pipeline that reruns on every PRODES, DETER and JRC update.",
                "es": "Pipeline reproducible en Python que se vuelve a ejecutar con cada actualización de PRODES, DETER y JRC.",
                "pt": "Pipeline reprodutível em Python que roda de novo a cada atualização do PRODES, do DETER e do JRC.",
            },
        ],
        "note": {
            "en": "Client and supplier names are withheld. Figures come from the delivered reports.",
            "es": "Los nombres del cliente y de los proveedores se omiten. Las cifras vienen de los informes entregados.",
            "pt": "Os nomes do cliente e dos fornecedores foram omitidos. Os números vêm dos relatórios entregues.",
        },
        "card_desc": {
            "en": "Plot-level EUDR verification for a Belgian timber importer across Peru, Bolivia and Brazil: 27,817 ha checked against PRODES/DETER, JRC TMF and Hansen, with plantation harvest separated from deforestation.",
            "es": "Verificación EUDR por parcela para un importador belga de madera en Perú, Bolivia y Brasil: 27.817 ha contrastadas con PRODES/DETER, JRC TMF y Hansen, separando la cosecha de plantaciones de la deforestación.",
            "pt": "Verificação EUDR por talhão para um importador belga de madeira no Peru, na Bolívia e no Brasil: 27.817 ha conferidos com PRODES/DETER, JRC TMF e Hansen, separando colheita de silvicultura de desmatamento.",
        },
        "card_benefit": {
            "en": "On one estate the official record cut 1,405.6 ha of raw global loss to 25.34 ha of real native vegetation removal.",
            "es": "En una propiedad el registro oficial redujo 1.405,6 ha de pérdida global bruta a 25,34 ha de supresión real de vegetación nativa.",
            "pt": "Em uma fazenda o registro oficial reduziu 1.405,6 ha de perda global bruta para 25,34 ha de supressão real de vegetação nativa.",
        },
    },
    {
        "slug": "car-retification-atlantic-forest",
        "icon": "fa-file-signature",
        "gradient": "linear-gradient(135deg, #134e4a 0%, #0f766e 100%)",
        "accent": "#0f766e",
        "data_category": "geo forest",
        "period": "2026",
        "tech": ["Python", "GeoPandas", "PyQGIS", "QGIS", "Google Earth Engine", "MapBiomas", "Dynamic World", "Copernicus DEM", "Landsat 5 / 7", "Hansen GFC", "JAXA PALSAR", "pytest"],
        "card_tech": ["Python", "PyQGIS", "SIGEF", "CAR/SICAR", "MapBiomas", "Landsat"],
        "title": {
            "en": "Rural Environmental Registry (CAR) Retification, 4,537 ha",
            "es": "Rectificación del Registro Ambiental Rural (CAR), 4.537 ha",
            "pt": "Retificação de CAR, 4.537 ha",
        },
        "subtitle": {
            "en": "Environmental compliance diagnosis and CAR retification for a 4,537 ha Atlantic Forest property inside a state environmental protection area on the coast of Paraná, reconciled with the land title (SIGEF), the ADA and the rural land tax (ITR).",
            "es": "Diagnóstico de cumplimiento ambiental y rectificación del CAR de una propiedad de 4.537 ha de Mata Atlántica dentro de un área de protección ambiental estatal en la costa de Paraná, conciliado con el título de la tierra (SIGEF), el ADA y el impuesto territorial rural (ITR).",
            "pt": "Diagnóstico de conformidade ambiental e retificação do CAR de um imóvel de 4.537 ha de Mata Atlântica dentro de uma APA estadual no litoral do Paraná, conciliado com o georreferenciamento (SIGEF), o ADA e o ITR.",
        },
        "category": {"en": "Geospatial / Environmental Compliance", "es": "Geoespacial / Cumplimiento Ambiental", "pt": "Geoespacial / Conformidade Ambiental"},
        "location": {"en": "Coastal Paraná, Brazil", "es": "Litoral de Paraná, Brasil", "pt": "Litoral do Paraná"},
        "scale": {"en": "4,537 ha, in progress", "es": "4.537 ha, en curso", "pt": "4.537 ha, em andamento"},
        "overview": [
            {
                "en": "The owners needed their CAR, Brazil's federal rural environmental registry, to reflect the property as it really is, with the same numbers carried into the ADA (environmental declaratory act) and the ITR rural land tax return. The registered CAR declared no consolidated area at all, 344 ha of permanent preservation areas (APP) and a proposed legal reserve of 980.6 ha, on a property that lies entirely inside a state environmental protection area.",
                "es": "Los propietarios necesitaban que su CAR, el registro ambiental rural federal de Brasil, reflejara la propiedad tal como es, con los mismos números trasladados al ADA (acto declaratorio ambiental) y a la declaración del impuesto territorial rural (ITR). El CAR registrado no declaraba ningún área consolidada, 344 ha de áreas de preservación permanente (APP) y una reserva legal propuesta de 980,6 ha, en una propiedad situada por completo dentro de un área de protección ambiental estatal.",
                "pt": "Os proprietários precisavam que o CAR refletisse o imóvel como ele é, com os mesmos números levados ao ADA e à declaração do ITR. O CAR inscrito não declarava nenhuma área consolidada, 344 ha de APP e uma Reserva Legal proposta de 980,6 ha, num imóvel que fica inteiro dentro de uma APA estadual.",
            },
            {
                "en": "The diagnosis rebuilt every layer from independent sources: the certified INCRA/SIGEF perimeter, hydrography-based APP, land use, slope from the Copernicus DEM and every CAR that overlaps the property. It found 68 third-party CAR records overlapping the estate, and an APP of 1,029 ha when computed from the FBDS hydrography, three times the declared figure.",
                "es": "El diagnóstico reconstruyó cada capa a partir de fuentes independientes: el perímetro certificado INCRA/SIGEF, las APP derivadas de la hidrografía, el uso del suelo, la pendiente del Copernicus DEM y cada CAR que se superpone a la propiedad. Encontró 68 registros CAR de terceros superpuestos y una APP de 1.029 ha calculada con la hidrografía de la FBDS, tres veces la cifra declarada.",
                "pt": "O diagnóstico refez cada camada a partir de fontes independentes: o perímetro certificado no SIGEF/INCRA, a APP pela hidrografia, o uso do solo, a declividade do Copernicus DEM e todo CAR que sobrepõe o imóvel. Encontrou 68 CAR de terceiros sobrepostos e uma APP de 1.029 ha calculada pela hidrografia da FBDS, três vezes o valor declarado.",
            },
            {
                "en": "Because the Forest Code (Law 12,651/2012) treats land opened before 22 July 2008 as consolidated, the key question was which cleared areas existed on that date. Instead of a field survey over occupied land, the evidence came from the 2008 record itself: a Landsat 7 scene taken six days before the legal cut-off, Landsat 5, NDVI, Hansen loss year, the MapBiomas 1985-2024 series and JAXA PALSAR forest maps, compiled per polygon. Registry deeds back to 1971 were traced to recover the original legal reserve commitments.",
                "es": "Como el Código Forestal (Ley 12.651/2012) considera consolidada la tierra abierta antes del 22 de julio de 2008, la pregunta clave era qué áreas abiertas existían en esa fecha. En lugar de un relevamiento de campo sobre tierra ocupada, la evidencia vino del propio registro de 2008: una escena Landsat 7 tomada seis días antes del marco legal, Landsat 5, NDVI, año de pérdida de Hansen, la serie MapBiomas 1985-2024 y los mapas forestales JAXA PALSAR, compilados por polígono. Se rastrearon escrituras desde 1971 para recuperar los compromisos originales de reserva legal.",
                "pt": "Como o Código Florestal (Lei 12.651/2012) considera consolidada a área aberta antes de 22 de julho de 2008, a pergunta central era quais aberturas existiam nessa data. Em vez de campo sobre uma área com posseiros, a evidência veio do próprio registro de 2008: uma cena Landsat 7 de seis dias antes do marco legal, Landsat 5, NDVI, ano de perda do Hansen, a série MapBiomas 1985-2024 e os mapas florestais JAXA PALSAR, compilados por polígono. Matrículas e averbações desde 1971 foram rastreadas para recuperar os termos originais de Reserva Legal.",
            },
        ],
        "outcome": {
            "en": "97.4 ha in 46 polygons proven open in 2008 (consolidated), 15.5 ha identified as opened after 2008, and the CAR perimeter matched to the certified SIGEF perimeter within 0.76 m. The owners get a defensible retification instead of a registry whose APP differs by 685 ha from the hydrography reference.",
            "es": "97,4 ha en 46 polígonos comprobados como abiertos en 2008 (consolidados), 15,5 ha identificadas como abiertas después de 2008 y el perímetro del CAR ajustado al perímetro certificado del SIGEF con una diferencia máxima de 0,76 m. Los propietarios obtienen una rectificación defendible en lugar de un registro cuya APP difiere en 685 ha de la referencia hidrográfica.",
            "pt": "97,4 ha em 46 polígonos comprovados como abertos em 2008 (consolidados), 15,5 ha identificados como abertos depois de 2008 e o perímetro do CAR casado com o do SIGEF com deslocamento máximo de 0,76 m. Os proprietários ficam com uma retificação defensável no lugar de um cadastro cuja APP difere em 685 ha da referência hidrográfica.",
        },
        "kpis": [
            ("4,537 ha", {"en": "Property area", "es": "Área de la propiedad", "pt": "Área do imóvel"}),
            ("0.76 m", {"en": "Max offset to SIGEF perimeter", "es": "Desvío máximo al perímetro SIGEF", "pt": "Deslocamento máximo ao SIGEF"}),
            ("68", {"en": "Overlapping third-party CARs", "es": "CAR de terceros superpuestos", "pt": "CAR de terceiros sobrepostos"}),
            ("344 vs 1,029 ha", {"en": "APP declared vs hydrography", "es": "APP declarada vs hidrografía", "pt": "APP declarada vs hidrografia"}),
            ("97.4 ha", {"en": "Consolidated in 2008 (46 polygons)", "es": "Consolidadas en 2008 (46 polígonos)", "pt": "Consolidados em 2008 (46 polígonos)"}),
            ("9", {"en": "Automated invariant tests", "es": "Pruebas automáticas de invariantes", "pt": "Testes automáticos de invariantes"}),
        ],
        "method": [
            {
                "en": "Reconcile the certified SIGEF perimeter with the declared CAR geometry and lock the reference area.",
                "es": "Conciliar el perímetro certificado del SIGEF con la geometría declarada en el CAR y fijar el área de referencia.",
                "pt": "Conciliar o perímetro certificado no SIGEF com a geometria declarada no CAR e travar a área de referência.",
            },
            {
                "en": "Rebuild APP from the FBDS hydrography and compare it with the declared layer; map native vegetation, land use and slope (MapBiomas, Dynamic World, Copernicus DEM).",
                "es": "Reconstruir las APP con la hidrografía de la FBDS y compararlas con la capa declarada; mapear vegetación nativa, uso del suelo y pendiente (MapBiomas, Dynamic World, Copernicus DEM).",
                "pt": "Refazer a APP pela hidrografia da FBDS e comparar com a camada declarada; mapear vegetação nativa, uso do solo e declividade (MapBiomas, Dynamic World, Copernicus DEM).",
            },
            {
                "en": "Pull every overlapping CAR from SICAR and document the overlaps for an official cancellation request.",
                "es": "Obtener del SICAR cada CAR superpuesto y documentar las superposiciones para un pedido oficial de cancelación.",
                "pt": "Levantar no SICAR todo CAR sobreposto e documentar as sobreposições para o pedido oficial de cancelamento.",
            },
            {
                "en": "Build the 22 July 2008 evidence per polygon from Landsat 5 and 7, NDVI, Hansen, MapBiomas and JAXA PALSAR.",
                "es": "Armar la evidencia del 22 de julio de 2008 por polígono con Landsat 5 y 7, NDVI, Hansen, MapBiomas y JAXA PALSAR.",
                "pt": "Montar a evidência de 22 de julho de 2008 por polígono com Landsat 5 e 7, NDVI, Hansen, MapBiomas e JAXA PALSAR.",
            },
            {
                "en": "Encode the area invariants as 9 automated tests that rerun on every revision.",
                "es": "Codificar los invariantes de área como 9 pruebas automáticas que se ejecutan en cada revisión.",
                "pt": "Codificar os invariantes de área em 9 testes automáticos que rodam a cada revisão.",
            },
            {
                "en": "Carry the retified numbers into the ADA and the ITR so all three declarations agree.",
                "es": "Trasladar los números rectificados al ADA y al ITR para que las tres declaraciones coincidan.",
                "pt": "Levar os números retificados ao ADA e ao ITR para que as três declarações batam.",
            },
        ],
        "deliverables": [
            {
                "en": "Compliance diagnosis with thematic maps and area tables.",
                "es": "Diagnóstico de cumplimiento con mapas temáticos y tablas de áreas.",
                "pt": "Diagnóstico de conformidade com mapas temáticos e quadros de áreas.",
            },
            {
                "en": "Per-polygon 2008 evidence tables and imagery panels.",
                "es": "Tablas de evidencia de 2008 por polígono y paneles de imágenes.",
                "pt": "Quadros de evidência de 2008 por polígono e painéis de imagens.",
            },
            {
                "en": "QGIS project and retification layers ready for SICAR.",
                "es": "Proyecto QGIS y capas de rectificación listas para el SICAR.",
                "pt": "Projeto QGIS e camadas de retificação prontas para o SICAR.",
            },
        ],
        "note": {
            "en": "Owner and property identity are withheld. Engagement in progress (2026).",
            "es": "Se omite la identidad de los propietarios y de la propiedad. Trabajo en curso (2026).",
            "pt": "A identidade dos proprietários e do imóvel foi omitida. Trabalho em andamento (2026).",
        },
        "card_desc": {
            "en": "CAR retification of a 4,537 ha Atlantic Forest property on the Paraná coast, reconciled with SIGEF, ADA and ITR: 68 overlapping CARs found and the 2008 legal cut-off proven per polygon from Landsat archives.",
            "es": "Rectificación del CAR de una propiedad de 4.537 ha de Mata Atlántica en la costa de Paraná, conciliada con SIGEF, ADA e ITR: 68 CAR superpuestos y el marco legal de 2008 comprobado por polígono con archivos Landsat.",
            "pt": "Retificação do CAR de um imóvel de 4.537 ha de Mata Atlântica no litoral do Paraná, conciliada com SIGEF, ADA e ITR: 68 CAR sobrepostos e o marco de 2008 comprovado por polígono com o acervo Landsat.",
        },
        "card_benefit": {
            "en": "A defensible registry: perimeter within 0.76 m of SIGEF and 97.4 ha of consolidated use proven without a field visit.",
            "es": "Un registro defendible: perímetro a 0,76 m del SIGEF y 97,4 ha de uso consolidado comprobadas sin visita de campo.",
            "pt": "Um cadastro defensável: perímetro a 0,76 m do SIGEF e 97,4 ha de uso consolidado comprovados sem ida a campo.",
        },
    },
    {
        "slug": "drone-farm-environmental-assessment",
        "icon": "fa-helicopter",
        "gradient": "linear-gradient(135deg, #3f6212 0%, #65a30d 100%)",
        "accent": "#4d7c0f",
        "data_category": "geo forest",
        "period": "2022 - 2023",
        "tech": ["Drone photogrammetry", "QGIS", "PyQGIS", "GeoPackage / Shapefile", "KML", "Excel"],
        "card_tech": ["Drone", "Photogrammetry", "QGIS", "PyQGIS", "KML"],
        "title": {
            "en": "Drone Survey and Environmental Assessment of a 4,132 ha Farm",
            "es": "Levantamiento con Dron y Evaluación Ambiental de una Finca de 4.132 ha",
            "pt": "Levantamento com Drone e Avaliação Ambiental de uma Fazenda de 4.132 ha",
        },
        "subtitle": {
            "en": "UAV photogrammetry over a 4,132 ha agricultural estate in the Campos Gerais region of Paraná: orthomosaics, elevation model, 11-class land-use map, Forest Code regularity of APP and legal reserve, and a field-ready erosion inventory.",
            "es": "Fotogrametría con dron sobre una finca agrícola de 4.132 ha en la región de Campos Gerais, Paraná: ortomosaicos, modelo de elevación, mapa de uso del suelo en 11 clases, regularidad de APP y reserva legal según el Código Forestal, e inventario de erosión listo para campo.",
            "pt": "Fotogrametria com drone em uma fazenda de 4.132 ha nos Campos Gerais do Paraná: ortomosaicos, modelo de elevação, mapa de uso do solo em 11 classes, regularidade de APP e Reserva Legal pelo Código Florestal e inventário de erosão pronto para o campo.",
        },
        "category": {"en": "Geospatial / Drone Survey", "es": "Geoespacial / Levantamiento con Dron", "pt": "Geoespacial / Levantamento com Drone"},
        "location": {"en": "Campos Gerais, Paraná, Brazil", "es": "Campos Gerais, Paraná, Brasil", "pt": "Campos Gerais, Paraná"},
        "scale": {"en": "18,780 aerial photos", "es": "18.780 fotos aéreas", "pt": "18.780 fotos aéreas"},
        "overview": [
            {
                "en": "A farm group needed two answers about one of its estates: whether its permanent preservation areas (APP) and legal reserve were in order under the Forest Code, and where soil erosion was eating into productive land. Satellite imagery is too coarse for rills and gullies, so the whole property was flown with a drone.",
                "es": "Un grupo agrícola necesitaba dos respuestas sobre una de sus fincas: si sus áreas de preservación permanente (APP) y su reserva legal estaban en regla según el Código Forestal, y dónde la erosión del suelo estaba comiendo tierra productiva. Las imágenes satelitales son demasiado gruesas para surcos y cárcavas, así que toda la propiedad se voló con dron.",
                "pt": "Um grupo agrícola precisava de duas respostas sobre uma de suas fazendas: se as APP e a Reserva Legal estavam regulares pelo Código Florestal, e onde a erosão estava comendo área produtiva. Imagem de satélite é grosseira demais para sulcos e voçorocas, então o imóvel inteiro foi voado com drone.",
            },
            {
                "en": "18,780 aerial photos taken over 14 field days were processed into orthomosaics and an elevation model, and every hectare was mapped into 11 land-use classes. APP along watercourses, native vegetation and consolidated areas were delineated and tested against the 22 July 2008 cut-off of the Forest Code; erosion features were digitised by type (sheet, rill and gully) and cross-tabulated with land use.",
                "es": "Las 18.780 fotos aéreas tomadas en 14 días de campo se procesaron en ortomosaicos y un modelo de elevación, y cada hectárea se mapeó en 11 clases de uso del suelo. Se delimitaron las APP a lo largo de los cursos de agua, la vegetación nativa y las áreas consolidadas, contrastadas con el marco del 22 de julio de 2008 del Código Forestal; los procesos erosivos se digitalizaron por tipo (laminar, surcos y cárcavas) y se cruzaron con el uso del suelo.",
                "pt": "As 18.780 fotos aéreas de 14 dias de campo viraram ortomosaicos e modelo de elevação, e cada hectare foi mapeado em 11 classes de uso. APP de cursos d'água, vegetação nativa e áreas consolidadas foram delimitadas e testadas contra o marco de 22 de julho de 2008 do Código Florestal; as erosões foram digitalizadas por tipo (laminar, sulcos e voçoroca) e cruzadas com o uso do solo.",
            },
        ],
        "outcome": {
            "en": "The estate was confirmed in regularity: 1,511.5 ha of native vegetation, of which 493.2 ha are riparian APP, with only 56.7 ha of consolidated use inside APP, all opened before 2008. The erosion inventory located 19.8 ha of active erosion and showed pasture as the most affected use (3.3% of its area), giving the farm a prioritised list for soil conservation work.",
            "es": "Se confirmó la regularidad de la finca: 1.511,5 ha de vegetación nativa, de las cuales 493,2 ha son APP ribereñas, con solo 56,7 ha de uso consolidado dentro de las APP, todo abierto antes de 2008. El inventario de erosión ubicó 19,8 ha de erosión activa y mostró que la pastura es el uso más afectado (3,3% de su área), dando a la finca una lista priorizada para obras de conservación de suelos.",
            "pt": "A fazenda foi confirmada como regular: 1.511,5 ha de vegetação nativa, dos quais 493,2 ha são APP de cursos d'água, com só 56,7 ha de uso consolidado dentro da APP, tudo aberto antes de 2008. O inventário localizou 19,8 ha de erosão ativa e mostrou a pastagem como o uso mais afetado (3,3% da área), dando à fazenda uma lista priorizada para conservação de solo.",
        },
        "kpis": [
            ("4,132 ha", {"en": "Area flown", "es": "Área volada", "pt": "Área voada"}),
            ("18,780", {"en": "Aerial photos", "es": "Fotos aéreas", "pt": "Fotos aéreas"}),
            ("14", {"en": "Field days", "es": "Días de campo", "pt": "Dias de campo"}),
            ("11", {"en": "Land-use classes", "es": "Clases de uso del suelo", "pt": "Classes de uso do solo"}),
            ("493.2 ha", {"en": "Riparian APP", "es": "APP ribereña", "pt": "APP de cursos d'água"}),
            ("19.8 ha", {"en": "Erosion mapped", "es": "Erosión mapeada", "pt": "Erosão mapeada"}),
        ],
        "method": [
            {
                "en": "Flight planning over the property boundary and 14 days of drone flights (18,780 photos).",
                "es": "Planificación de vuelos sobre el límite de la propiedad y 14 días de vuelos con dron (18.780 fotos).",
                "pt": "Planejamento de voo sobre o perímetro do imóvel e 14 dias de voos com drone (18.780 fotos).",
            },
            {
                "en": "Photogrammetric processing into orthomosaics and an elevation model, with slope and contours.",
                "es": "Procesamiento fotogramétrico en ortomosaicos y un modelo de elevación, con pendiente y curvas de nivel.",
                "pt": "Processamento fotogramétrico em ortomosaicos e modelo de elevação, com declividade e curvas de nível.",
            },
            {
                "en": "Land-use mapping in 11 classes: agriculture 40.8%, native vegetation 36.4%, planted forest 13.7%, pasture 7.8%, plus roads, buildings, ponds and fallow.",
                "es": "Mapeo de uso del suelo en 11 clases: agricultura 40,8%, vegetación nativa 36,4%, bosque plantado 13,7%, pastura 7,8%, además de caminos, construcciones, represas y barbecho.",
                "pt": "Mapeamento de uso do solo em 11 classes: agricultura 40,8%, vegetação nativa 36,4%, plantios florestais 13,7%, pastagem 7,8%, além de estradas, construções, açudes e pousio.",
            },
            {
                "en": "APP delineation along watercourses and comparison of native vegetation and consolidated areas against the 2008 cut-off, cross-checked with the CAR.",
                "es": "Delimitación de APP a lo largo de los cursos de agua y comparación de la vegetación nativa y las áreas consolidadas con el marco de 2008, contrastada con el CAR.",
                "pt": "Delimitação de APP de cursos d'água e comparação de vegetação nativa e áreas consolidadas com o marco de 2008, conferida com o CAR.",
            },
            {
                "en": "Erosion inventory by type (sheet, rill, gully) cross-tabulated with land use, with management recommendations per class.",
                "es": "Inventario de erosión por tipo (laminar, surcos, cárcavas) cruzado con el uso del suelo, con recomendaciones de manejo por clase.",
                "pt": "Inventário de erosão por tipo (laminar, sulcos, voçoroca) cruzado com o uso do solo, com recomendações de manejo por classe.",
            },
        ],
        "deliverables": [
            {
                "en": "Environmental assessment report with land-use, APP and erosion tables.",
                "es": "Informe de evaluación ambiental con tablas de uso del suelo, APP y erosión.",
                "pt": "Relatório de avaliação ambiental com quadros de uso do solo, APP e erosão.",
            },
            {
                "en": "A3 thematic map atlas (overview, agriculture, pasture, planted forest, native vegetation, erosion).",
                "es": "Atlas de mapas temáticos en A3 (general, agricultura, pastura, bosque plantado, vegetación nativa, erosión).",
                "pt": "Atlas de mapas temáticos em A3 (geral, agricultura, pastagem, plantios florestais, vegetação nativa, erosão).",
            },
            {
                "en": "Orthomosaics, elevation model, shapefiles and KML for field teams.",
                "es": "Ortomosaicos, modelo de elevación, shapefiles y KML para los equipos de campo.",
                "pt": "Ortomosaicos, modelo de elevação, shapefiles e KML para as equipes de campo.",
            },
        ],
        "note": {
            "en": "Farm and owner identity are withheld.",
            "es": "Se omite la identidad de la finca y de sus propietarios.",
            "pt": "A identidade da fazenda e dos proprietários foi omitida.",
        },
        "card_desc": {
            "en": "18,780 drone photos over a 4,132 ha estate in Campos Gerais, Paraná, turned into orthomosaics, an 11-class land-use map, Forest Code APP and legal reserve regularity, and an erosion inventory.",
            "es": "18.780 fotos con dron sobre una finca de 4.132 ha en Campos Gerais, Paraná, convertidas en ortomosaicos, un mapa de uso del suelo en 11 clases, regularidad de APP y reserva legal, e inventario de erosión.",
            "pt": "18.780 fotos de drone sobre uma fazenda de 4.132 ha nos Campos Gerais, convertidas em ortomosaicos, mapa de uso do solo em 11 classes, regularidade de APP e Reserva Legal e inventário de erosão.",
        },
        "card_benefit": {
            "en": "Regularity confirmed and 19.8 ha of active erosion located, ranked by land use for soil conservation work.",
            "es": "Regularidad confirmada y 19,8 ha de erosión activa ubicadas, priorizadas por uso del suelo para conservación.",
            "pt": "Regularidade confirmada e 19,8 ha de erosão ativa localizados, priorizados por uso do solo para conservação.",
        },
    },
    {
        "slug": "landsat-timelapse-parana",
        "icon": "fa-satellite",
        "gradient": "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
        "accent": "#2563eb",
        "data_category": "geo",
        "period": "2026",
        "tech": ["Python", "Google Earth Engine", "Landsat Collection 2 (L5, L7, L8, L9)", "NumPy", "Pillow", "ffmpeg", "IBGE API", "JRC Global Surface Water"],
        "card_tech": ["Google Earth Engine", "Landsat", "Python", "NumPy", "ffmpeg"],
        "title": {
            "en": "25 Years of Landsat for All 399 Municipalities of Paraná",
            "es": "25 Años de Landsat para los 399 Municipios de Paraná",
            "pt": "25 Anos de Landsat para os 399 Municípios do Paraná",
        },
        "subtitle": {
            "en": "A vertical Landsat timelapse (2000-2025) for every municipality in Paraná, plus a change ranking that shows where the landscape actually moved.",
            "es": "Un timelapse vertical de Landsat (2000-2025) para cada municipio de Paraná, más un ranking de cambio que muestra dónde se movió realmente el paisaje.",
            "pt": "Um timelapse vertical de Landsat (2000-2025) para cada município do Paraná, mais um ranking de mudança que mostra onde a paisagem de fato mudou.",
        },
        "category": {"en": "Remote Sensing / Data Visualization", "es": "Teledetección / Visualización de Datos", "pt": "Sensoriamento Remoto / Visualização de Dados"},
        "location": {"en": "Paraná, Brazil", "es": "Paraná, Brasil", "pt": "Paraná"},
        "scale": {"en": "399 videos", "es": "399 videos", "pt": "399 vídeos"},
        "overview": [
            {
                "en": "Google Earth Timelapse shows the planet; this project does the same at the scale people care about, their own municipality. For each of Paraná's 399 municipalities the pipeline builds 26 annual cloud-free Landsat composites (2000-2025) and renders a 1080x1920 video for phones, ready for social media and local news.",
                "es": "Google Earth Timelapse muestra el planeta; este proyecto hace lo mismo a la escala que le importa a la gente, su propio municipio. Para cada uno de los 399 municipios de Paraná el pipeline construye 26 composiciones anuales de Landsat sin nubes (2000-2025) y genera un video de 1080x1920 para celulares, listo para redes sociales y medios locales.",
                "pt": "O Google Earth Timelapse mostra o planeta; este projeto faz o mesmo na escala que importa para as pessoas, o próprio município. Para cada um dos 399 municípios do Paraná o pipeline monta 26 composições anuais de Landsat sem nuvem (2000-2025) e gera um vídeo 1080x1920 para celular, pronto para redes sociais e imprensa local.",
            },
            {
                "en": "Making 26 years of Landsat look continuous is mostly about defects: Landsat 7 stripes after 2003, the 2012 gap between Landsat 5 and 8, detector striping, haze and seasonal flicker. Each one is handled by an explicit, documented and tested rule.",
                "es": "Hacer que 26 años de Landsat se vean continuos es sobre todo tratar defectos: las franjas de Landsat 7 después de 2003, el hueco de 2012 entre Landsat 5 y 8, el bandeado del detector, la bruma y el parpadeo estacional. Cada uno se resuelve con una regla explícita, documentada y probada.",
                "pt": "Fazer 26 anos de Landsat parecerem contínuos é, na maior parte, tratar defeitos: as listras do Landsat 7 depois de 2003, o buraco de 2012 entre o Landsat 5 e o 8, o listrado do detector, a bruma e o pisca-pisca sazonal. Cada um é resolvido por uma regra explícita, documentada e testada.",
            },
            {
                "en": "The same frames feed a change analysis: the 2000-2002 median against 2023-2025, pixel by pixel, inside each municipal boundary, ignoring crop rotation and pre-existing water. Without the water mask, the colour change of the Itaipu reservoir put Foz do Iguaçu first at 20%; the real figure is 0.8%.",
                "es": "Los mismos cuadros alimentan un análisis de cambio: la mediana de 2000-2002 contra la de 2023-2025, píxel a píxel, dentro de cada límite municipal, ignorando la rotación de cultivos y el agua preexistente. Sin la máscara de agua, el cambio de color del embalse de Itaipú ponía a Foz do Iguaçu primero con 20%; el valor real es 0,8%.",
                "pt": "Os mesmos quadros alimentam uma análise de mudança: a mediana de 2000-2002 contra a de 2023-2025, pixel a pixel, dentro de cada limite municipal, ignorando rotação de culturas e água que já existia. Sem a máscara de água, a mudança de cor do lago de Itaipu punha Foz do Iguaçu em 1º lugar com 20%; o valor real é 0,8%.",
            },
        ],
        "outcome": {
            "en": "399 of 399 videos generated and validated (14.2 s and 354 frames each, 5.7 GB in total), and a ranking of every municipality by visible change: Ortigueira leads in absolute area (170 km²) and Miraselva in share of territory (13.5%).",
            "es": "399 de 399 videos generados y validados (14,2 s y 354 cuadros cada uno, 5,7 GB en total), y un ranking de todos los municipios por cambio visible: Ortigueira lidera en área absoluta (170 km²) y Miraselva en proporción del territorio (13,5%).",
            "pt": "399 de 399 vídeos gerados e validados (14,2 s e 354 quadros cada, 5,7 GB no total) e um ranking de todos os municípios por mudança visível: Ortigueira lidera em área absoluta (170 km²) e Miraselva em proporção do território (13,5%).",
        },
        "kpis": [
            ("399", {"en": "Municipalities", "es": "Municipios", "pt": "Municípios"}),
            ("26", {"en": "Annual composites", "es": "Composiciones anuales", "pt": "Composições anuais"}),
            ("30 m", {"en": "Landsat resolution", "es": "Resolución Landsat", "pt": "Resolução Landsat"}),
            ("399 / 399", {"en": "Videos validated", "es": "Videos validados", "pt": "Vídeos validados"}),
            ("5.7 GB", {"en": "Rendered output", "es": "Salida generada", "pt": "Saída gerada"}),
            ("170 km²", {"en": "Largest change (Ortigueira)", "es": "Mayor cambio (Ortigueira)", "pt": "Maior mudança (Ortigueira)"}),
        ],
        "method": [
            {
                "en": "IBGE municipal mesh to a 9:16 bounding box per municipality with a 10% margin (EPSG:3857).",
                "es": "Malla municipal del IBGE a un recuadro 9:16 por municipio con 10% de margen (EPSG:3857).",
                "pt": "Malha municipal do IBGE convertida em um recorte 9:16 por município, com 10% de folga (EPSG:3857).",
            },
            {
                "en": "Dry-season (15 April to 15 October) median of Landsat Collection 2 Level 2 scenes under 50% cloud, masked with QA_PIXEL and QA_RADSAT.",
                "es": "Mediana de la estación seca (15 de abril a 15 de octubre) de escenas Landsat Collection 2 Nivel 2 con menos de 50% de nubes, enmascaradas con QA_PIXEL y QA_RADSAT.",
                "pt": "Mediana da estação seca (15 de abril a 15 de outubro) das cenas Landsat Collection 2 nível 2 com menos de 50% de nuvem, mascaradas com QA_PIXEL e QA_RADSAT.",
            },
            {
                "en": "Sensor schedule: Landsat 5 until 2011, Landsat 7 only until 2002, Landsat 8 and 9 from 2013; 2012 interpolated from 2011 and 2013.",
                "es": "Calendario de sensores: Landsat 5 hasta 2011, Landsat 7 solo hasta 2002, Landsat 8 y 9 desde 2013; 2012 interpolado entre 2011 y 2013.",
                "pt": "Calendário de sensores: Landsat 5 até 2011, Landsat 7 só até 2002, Landsat 8 e 9 a partir de 2013; 2012 interpolado entre 2011 e 2013.",
            },
            {
                "en": "Stripe removal, gaps filled from the nearest valid year and brightness harmonised to the series median to remove flicker.",
                "es": "Eliminación de franjas, huecos completados con el año válido más cercano y brillo armonizado con la mediana de la serie para quitar el parpadeo.",
                "pt": "Remoção de listras, buracos preenchidos com o ano válido mais próximo e brilho harmonizado pela mediana da série para tirar o pisca-pisca.",
            },
            {
                "en": "Resumable batch rendering at 25 fps in H.264, every file validated with ffprobe.",
                "es": "Renderizado por lotes reanudable a 25 fps en H.264, cada archivo validado con ffprobe.",
                "pt": "Renderização em lote retomável a 25 fps em H.264, cada arquivo validado com ffprobe.",
            },
            {
                "en": "Change ranking: stable colour change above a threshold, a 3x3 noise filter, and water handled with JRC Global Surface Water.",
                "es": "Ranking de cambio: cambio de color estable por encima de un umbral, filtro de ruido 3x3 y agua tratada con JRC Global Surface Water.",
                "pt": "Ranking de mudança: mudança de cor estável acima de um limiar, filtro de ruído 3x3 e água tratada com o JRC Global Surface Water.",
            },
        ],
        "figures": [
            {
                "src": "../assets/projects/landsat-timelapse/quedas-do-iguacu.jpg",
                "alt": {"en": "Quedas do Iguaçu, 2000-2002 against 2023-2025, with change map", "es": "Quedas do Iguaçu, 2000-2002 frente a 2023-2025, con mapa de cambio", "pt": "Quedas do Iguaçu, 2000-2002 contra 2023-2025, com mapa de mudança"},
                "caption": {
                    "en": "Quedas do Iguaçu: 2000-2002, 2023-2025 and the change map (red: brighter, such as clearing or exposed soil; green: darker, such as planted forest; blue: new water).",
                    "es": "Quedas do Iguaçu: 2000-2002, 2023-2025 y el mapa de cambio (rojo: más claro, como desmonte o suelo expuesto; verde: más oscuro, como bosque plantado; azul: agua nueva).",
                    "pt": "Quedas do Iguaçu: 2000-2002, 2023-2025 e o mapa de mudança (vermelho: clareou, como desmate ou solo exposto; verde: escureceu, como plantio florestal; azul: água nova).",
                },
            },
            {
                "src": "../assets/projects/landsat-timelapse/ortigueira.jpg",
                "alt": {"en": "Ortigueira, 2000-2002 against 2023-2025, with change map", "es": "Ortigueira, 2000-2002 frente a 2023-2025, con mapa de cambio", "pt": "Ortigueira, 2000-2002 contra 2023-2025, com mapa de mudança"},
                "caption": {
                    "en": "Ortigueira, the largest absolute change in the state (170 km²), including new reservoir water in blue.",
                    "es": "Ortigueira, el mayor cambio absoluto del estado (170 km²), incluida el agua nueva de un embalse en azul.",
                    "pt": "Ortigueira, a maior mudança absoluta do estado (170 km²), incluindo a água nova de represa em azul.",
                },
            },
        ],
        "limits": [
            {
                "en": "2000-2012 frames are sparser than 2013-2025: late Landsat 5 had few passes, so some patches come from neighbouring years.",
                "es": "Los cuadros de 2000-2012 son más pobres que los de 2013-2025: el Landsat 5 tuvo pocas pasadas al final de su misión, así que algunos parches vienen de años vecinos.",
                "pt": "Os quadros de 2000-2012 são mais pobres que os de 2013-2025: o Landsat 5 passava pouco no fim da missão, então alguns remendos vêm de anos vizinhos.",
            },
            {
                "en": "2012 is interpolated, not observed.",
                "es": "2012 es interpolado, no observado.",
                "pt": "2012 é interpolado, não observado.",
            },
            {
                "en": "The change classes are a brightness proxy on RGB frames, not a land-cover classification.",
                "es": "Las clases de cambio son un indicador de brillo sobre cuadros RGB, no una clasificación de cobertura del suelo.",
                "pt": "As classes de mudança são um indicador de brilho sobre quadros RGB, não uma classificação de cobertura do solo.",
            },
        ],
        "card_desc": {
            "en": "A 1080x1920 Landsat timelapse (2000-2025) for each of Paraná's 399 municipalities, with sensor gaps, stripes and flicker handled by explicit rules, plus a ranking of visible landscape change.",
            "es": "Un timelapse Landsat de 1080x1920 (2000-2025) para cada uno de los 399 municipios de Paraná, con huecos de sensor, franjas y parpadeo resueltos por reglas explícitas, más un ranking de cambio visible del paisaje.",
            "pt": "Um timelapse Landsat 1080x1920 (2000-2025) para cada um dos 399 municípios do Paraná, com buracos de sensor, listras e pisca-pisca tratados por regras explícitas, mais um ranking de mudança visível da paisagem.",
        },
        "card_benefit": {
            "en": "399 of 399 videos validated and every municipality ranked by how much its landscape changed in 25 years.",
            "es": "399 de 399 videos validados y cada municipio clasificado según cuánto cambió su paisaje en 25 años.",
            "pt": "399 de 399 vídeos validados e cada município ranqueado por quanto sua paisagem mudou em 25 anos.",
        },
    },
    {
        "slug": "serra-do-mar-atlas",
        "icon": "fa-mountain",
        "gradient": "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)",
        "accent": "#4f46e5",
        "data_category": "geo",
        "period": "2026",
        "live_url": "https://avnergomes.github.io/serra-do-mar-webgis/",
        "live_label": "avnergomes.github.io/serra-do-mar-webgis",
        "tech": ["HTML / JavaScript", "Leaflet 1.9", "CesiumJS", "OpenStreetMap (Overpass)", "Wikidata", "SRTM 30 m (OpenTopoData)", "Python", "Google Apps Script", "GitHub Pages"],
        "card_tech": ["Leaflet", "CesiumJS", "OpenStreetMap", "Python", "GitHub Pages"],
        "title": {
            "en": "Serra do Mar Mountaineering Atlas",
            "es": "Atlas del Montañismo de la Serra do Mar",
            "pt": "Atlas do Montanhismo Paranaense",
        },
        "subtitle": {
            "en": "Interactive web GIS of the Serra do Mar mountains of Paraná: 273 summits, 127 trails, 440 climbing routes and 35 protected areas in a single self-contained HTML file, fast 2D by default and real 3D terrain on demand.",
            "es": "Web GIS interactivo de las montañas de la Serra do Mar de Paraná: 273 cumbres, 127 senderos, 440 vías de escalada y 35 áreas protegidas en un único archivo HTML autocontenido, 2D rápido por defecto y terreno 3D real a pedido.",
            "pt": "Web GIS interativo das montanhas da Serra do Mar paranaense: 273 cumes, 127 trilhas, 440 vias de escalada e 35 unidades de conservação em um único arquivo HTML autocontido, 2D rápido por padrão e terreno 3D real sob demanda.",
        },
        "category": {"en": "Web GIS / Interactive Mapping", "es": "Web GIS / Mapeo Interactivo", "pt": "Web GIS / Mapeamento Interativo"},
        "location": {"en": "Serra do Mar, Paraná, Brazil", "es": "Serra do Mar, Paraná, Brasil", "pt": "Serra do Mar, Paraná"},
        "scale": {"en": "Live, no API key", "es": "En vivo, sin clave de API", "pt": "No ar, sem chave de API"},
        "overview": [
            {
                "en": "Mountaineering information about Paraná's Serra do Mar is scattered across OpenStreetMap, park management plans, community spreadsheets and old blogs. The atlas puts it on one map that loads on any phone, with no API key and no server.",
                "es": "La información de montañismo de la Serra do Mar de Paraná está dispersa entre OpenStreetMap, planes de manejo de parques, planillas de la comunidad y blogs antiguos. El atlas la reúne en un solo mapa que carga en cualquier celular, sin clave de API y sin servidor.",
                "pt": "A informação de montanhismo da Serra do Mar paranaense está espalhada entre OpenStreetMap, planos de manejo de parques, planilhas da comunidade e blogs antigos. O atlas junta tudo em um mapa que abre em qualquer celular, sem chave de API e sem servidor.",
            },
            {
                "en": "The 2D map (Leaflet) is the default because it renders reliably on any graphics card; a 3D button loads Cesium only when asked, with real terrain and satellite imagery. Clicking a trail opens its elevation profile (maximum, minimum, ascent and descent) with a marker that follows the cursor on the map.",
                "es": "El mapa 2D (Leaflet) es el predeterminado porque funciona bien en cualquier tarjeta gráfica; un botón 3D carga Cesium solo cuando se pide, con terreno real e imágenes satelitales. Al hacer clic en un sendero se abre su perfil de elevación (máxima, mínima, ascenso y descenso) con un marcador que sigue al cursor en el mapa.",
                "pt": "O mapa 2D (Leaflet) é o padrão porque roda bem em qualquer placa de vídeo; um botão 3D carrega o Cesium só quando pedido, com terreno real e imagem de satélite. Clicar numa trilha abre o perfil de elevação (máxima, mínima, D+ e D-) com um marcador que acompanha o cursor no mapa.",
            },
            {
                "en": "Each protected area carries its legal visiting rules under the SNUC law, and trails are marked official only where they match a trail recognised in the park plan; everything else is labelled unverified. A 13-chapter interactive story flies the camera through each massif, and visitors can drop their own GPX tracks onto the map.",
                "es": "Cada área protegida muestra sus reglas legales de visita según la ley del SNUC, y los senderos se marcan como oficiales solo donde coinciden con uno reconocido en el plan del parque; el resto se etiqueta como no verificado. Una historia interactiva de 13 capítulos lleva la cámara por cada macizo, y los visitantes pueden soltar sus propias trazas GPX en el mapa.",
                "pt": "Cada unidade de conservação traz as regras legais de visitação pelo SNUC, e as trilhas só aparecem como oficiais onde batem com uma trilha reconhecida no plano do parque; o resto fica marcado como não verificado. Uma história interativa em 13 capítulos voa a câmera por cada maciço, e o visitante pode soltar seus próprios arquivos GPX no mapa.",
            },
        ],
        "outcome": {
            "en": "A free public atlas that consolidates 273 named summits (validated against PeakVisor: 273 vs 275), 127 named trails, 462 points of interest and 440 climbing routes, with attribution and licensing for every source.",
            "es": "Un atlas público y gratuito que reúne 273 cumbres con nombre (validadas contra PeakVisor: 273 vs 275), 127 senderos con nombre, 462 puntos de interés y 440 vías de escalada, con atribución y licencia para cada fuente.",
            "pt": "Um atlas público e gratuito que reúne 273 cumes nomeados (validados contra o PeakVisor: 273 vs 275), 127 trilhas nomeadas, 462 pontos de interesse e 440 vias de escalada, com atribuição e licença de cada fonte.",
        },
        "kpis": [
            ("273", {"en": "Named summits", "es": "Cumbres con nombre", "pt": "Cumes nomeados"}),
            ("127", {"en": "Named trails", "es": "Senderos con nombre", "pt": "Trilhas nomeadas"}),
            ("440", {"en": "Climbing routes and boulders", "es": "Vías de escalada y boulders", "pt": "Vias de escalada e boulders"}),
            ("462", {"en": "Points of interest", "es": "Puntos de interés", "pt": "Pontos de interesse"}),
            ("35", {"en": "Protected areas", "es": "Áreas protegidas", "pt": "Unidades de conservação"}),
            ("0", {"en": "API keys needed", "es": "Claves de API necesarias", "pt": "Chaves de API necessárias"}),
        ],
        "method": [
            {
                "en": "Summits, trails, points of interest, parks and cliffs fetched from OpenStreetMap (Overpass) and enriched with Wikidata.",
                "es": "Cumbres, senderos, puntos de interés, parques y paredones obtenidos de OpenStreetMap (Overpass) y enriquecidos con Wikidata.",
                "pt": "Cumes, trilhas, pontos de interesse, parques e paredões baixados do OpenStreetMap (Overpass) e enriquecidos com o Wikidata.",
            },
            {
                "en": "Trail elevation profiles from SRTM 30 m via OpenTopoData.",
                "es": "Perfiles de elevación de los senderos con SRTM 30 m vía OpenTopoData.",
                "pt": "Perfis de elevação das trilhas com SRTM 30 m via OpenTopoData.",
            },
            {
                "en": "Climbing routes compiled from a community spreadsheet: 322 routes and 118 boulders on 11 mountains.",
                "es": "Vías de escalada compiladas de una planilla de la comunidad: 322 vías y 118 boulders en 11 montañas.",
                "pt": "Vias de escalada compiladas de uma planilha da comunidade: 322 vias e 118 boulders em 11 montanhas.",
            },
            {
                "en": "Visiting rules per protected area from the SNUC law and the park plans, with official and unverified trails kept apart.",
                "es": "Reglas de visita por área protegida según la ley del SNUC y los planes de los parques, separando senderos oficiales y no verificados.",
                "pt": "Regras de visitação por unidade de conservação a partir do SNUC e dos planos dos parques, separando trilhas oficiais e não verificadas.",
            },
            {
                "en": "Everything embedded in one HTML file: Leaflet 2D, Cesium 3D on demand and a responsive bottom drawer on mobile.",
                "es": "Todo embebido en un único archivo HTML: Leaflet 2D, Cesium 3D a pedido y un panel inferior adaptable en el celular.",
                "pt": "Tudo embutido em um único arquivo HTML: Leaflet 2D, Cesium 3D sob demanda e gaveta inferior responsiva no celular.",
            },
            {
                "en": "Optional Google Apps Script backend for community GPX uploads with moderation.",
                "es": "Backend opcional en Google Apps Script para que la comunidad suba GPX con moderación.",
                "pt": "Backend opcional em Google Apps Script para envio de GPX pela comunidade, com moderação.",
            },
        ],
        "card_desc": {
            "en": "Single-file web GIS of Paraná's Serra do Mar: 273 summits, 127 trails, 440 climbing routes and 35 protected areas with legal visiting rules, Leaflet 2D by default and Cesium 3D terrain on demand.",
            "es": "Web GIS en un solo archivo de la Serra do Mar de Paraná: 273 cumbres, 127 senderos, 440 vías de escalada y 35 áreas protegidas con sus reglas de visita, Leaflet 2D por defecto y terreno 3D con Cesium a pedido.",
            "pt": "Web GIS em arquivo único da Serra do Mar paranaense: 273 cumes, 127 trilhas, 440 vias de escalada e 35 unidades de conservação com regras de visitação, Leaflet 2D por padrão e terreno 3D com Cesium sob demanda.",
        },
        "card_benefit": {
            "en": "A free public atlas that opens on any phone, with no API key, no server and every source attributed.",
            "es": "Un atlas público y gratuito que abre en cualquier celular, sin clave de API, sin servidor y con cada fuente atribuida.",
            "pt": "Um atlas público e gratuito que abre em qualquer celular, sem chave de API, sem servidor e com cada fonte atribuída.",
        },
    },
]


def collect_strings():
    """Flatten every translatable field into {lang: {key: text}}."""
    out = {lang: {} for lang in LANGS}

    def put(key, tri):
        for lang in LANGS:
            out[lang][key] = tri[lang]

    for key, tri in UI.items():
        put(key, tri)
    for c in CASES:
        k = f"cs.{c['slug']}"
        for field in ("title", "subtitle", "category", "location", "scale", "outcome", "note", "card_desc", "card_benefit"):
            if field in c:
                put(f"{k}.{field}", c[field])
        for name in ("overview", "method", "deliverables", "limits"):
            for i, tri in enumerate(c.get(name, []), 1):
                put(f"{k}.{name}{i}", tri)
        for i, (_, label) in enumerate(c["kpis"], 1):
            put(f"{k}.kpi{i}", label)
        for i, fig in enumerate(c.get("figures", []), 1):
            put(f"{k}.fig{i}", fig["caption"])
    return out


def t(key, tri, tag="span", attrs=""):
    return f'<{tag}{attrs} data-i18n="{key}">{escape(tri["en"])}</{tag}>'


def section_list(c, name, ui_key, ordered=False):
    items = c.get(name, [])
    if not items:
        return ""
    k = f"cs.{c['slug']}"
    tag = "ol" if ordered else "ul"
    lis = "\n".join(f"                    {t(f'{k}.{name}{i}', tri, 'li')}" for i, tri in enumerate(items, 1))
    return f"""
            <div class="content-section">
                <h2 data-i18n="{ui_key}">{escape(UI[ui_key]['en'])}</h2>
                <{tag}>
{lis}
                </{tag}>
            </div>
"""


def render_page(c):
    k = f"cs.{c['slug']}"
    title_en = c["title"]["en"]
    desc_attr = escape(c["subtitle"]["en"], quote=True)
    overview = "\n".join(f"                {t(f'{k}.overview{i}', tri, 'p')}" for i, tri in enumerate(c["overview"], 1))
    kpis = "\n".join(
        f'                    <div class="kpi-card"><div class="number">{escape(num)}</div><div class="label" data-i18n="{k}.kpi{i}">{escape(label["en"])}</div></div>'
        for i, (num, label) in enumerate(c["kpis"], 1)
    )
    tech = "\n".join(f'                    <span class="tech-tag">{escape(x)}</span>' for x in c["tech"])
    figures = ""
    if c.get("figures"):
        figs = "\n".join(
            f"""                <figure class="figure">
                    <img src="{f['src']}" alt="{escape(f['alt']['en'], quote=True)}" loading="lazy">
                    <figcaption data-i18n="{k}.fig{i}">{escape(f['caption']['en'])}</figcaption>
                </figure>"""
            for i, f in enumerate(c["figures"], 1)
        )
        figures = f"""
            <div class="content-section">
                <h2 data-i18n="cs.ui.figures">{UI['cs.ui.figures']['en']}</h2>
{figs}
            </div>
"""
    live = ""
    if c.get("live_url"):
        live = f"""
            <div class="content-section" style="text-align: center;">
                <a href="{c['live_url']}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> <span data-i18n="cs.ui.live">{UI['cs.ui.live']['en']}</span></a>
                <p style="margin-top: 0.75rem; font-size: 0.875rem;">{c['live_label']}</p>
            </div>
"""
    note = ""
    if c.get("note"):
        note = f'\n            <p class="cs-note">{t(f"{k}.note", c["note"], "span")}</p>\n'
    accent = c["accent"]
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="../favicon.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{desc_attr}">
    <meta name="robots" content="index,follow">
    <link rel="canonical" href="https://avnergomes.github.io/portfolio/projects/{c['slug']}.html">
    <meta property="og:type" content="article">
    <meta property="og:title" content="{escape(title_en, quote=True)} | Avner Gomes">
    <meta property="og:description" content="{desc_attr}">
    <meta property="og:url" content="https://avnergomes.github.io/portfolio/projects/{c['slug']}.html">
    <meta property="og:image" content="https://avnergomes.github.io/portfolio/assets/og-image.png">
    <title>{escape(title_en)} | Avner Gomes</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../css/styles.css">
    <style>
        .project-hero {{ background: {c['gradient']}; color: white; padding: 6rem 0 4rem; margin-top: 80px; }}
        .project-hero .container {{ max-width: 1080px; }}
        .project-hero h1 {{ font-family: var(--font-display); font-size: 2.75rem; margin-bottom: 1rem; }}
        .project-hero .subtitle {{ font-size: 1.25rem; opacity: 0.9; margin-bottom: 2rem; }}
        .project-meta {{ display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 2rem; }}
        .meta-item {{ display: flex; align-items: center; gap: 0.5rem; }}
        .meta-item i {{ opacity: 0.8; }}
        .project-content {{ padding: 4rem 0; }}
        .project-content .container {{ max-width: 1080px; }}
        .content-section {{ margin-bottom: 3rem; }}
        .content-section h2 {{ font-family: var(--font-display); font-size: 1.75rem; color: var(--color-primary); margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--color-border); }}
        .content-section p {{ color: var(--color-text-light); line-height: 1.8; margin-bottom: 1rem; }}
        .content-section ul {{ list-style: none; padding: 0; }}
        .content-section li {{ padding: 0.5rem 0; padding-left: 1.5rem; position: relative; color: var(--color-text-light); }}
        .content-section li::before {{ content: "\\f00c"; font-family: "Font Awesome 6 Free"; font-weight: 900; position: absolute; left: 0; color: {accent}; }}
        .content-section ol {{ padding-left: 1.25rem; }}
        .content-section ol li {{ padding-left: 0; color: var(--color-text-light); list-style: decimal; }}
        .content-section ol li::before {{ content: ""; }}
        .tech-stack {{ display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1rem; }}
        .tech-tag {{ background: var(--color-bg-alt); color: var(--color-text); padding: 0.5rem 1rem; border-radius: var(--radius-full); font-size: 0.875rem; font-weight: 500; }}
        .highlight-box {{ background: var(--color-bg-alt); border-left: 4px solid {accent}; padding: 1.5rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin: 1.5rem 0; }}
        .highlight-box p {{ margin: 0; color: var(--color-text); }}
        .back-link {{ display: inline-flex; align-items: center; gap: 0.5rem; color: white; opacity: 0.9; margin-bottom: 1rem; font-size: 0.875rem; }}
        .back-link:hover {{ opacity: 1; color: white; }}
        .kpi-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-top: 1rem; }}
        .kpi-card {{ background: var(--color-bg-alt); padding: 1.25rem; border-radius: var(--radius-md); text-align: center; }}
        .kpi-card .number {{ font-size: 1.75rem; font-weight: 700; color: {accent}; }}
        .kpi-card .label {{ font-size: 0.875rem; color: var(--color-text-light); margin-top: 0.25rem; }}
        .figure {{ margin: 1.5rem 0; }}
        .figure img {{ width: 100%; height: auto; border: 1px solid var(--color-border); border-radius: var(--radius-md); display: block; }}
        .figure figcaption {{ font-size: 0.875rem; color: var(--color-text-light); margin-top: 0.5rem; text-align: center; font-style: italic; }}
        .badge {{ display: inline-block; padding: 0.25rem 0.6rem; background: rgba(255,255,255,0.2); color: white; border-radius: 999px; font-size: 0.75rem; font-weight: 600; margin-left: 0.5rem; vertical-align: middle; }}
        .cs-note {{ font-size: 0.875rem; color: var(--color-text-light); font-style: italic; text-align: center; margin-top: 2rem; }}
        @media (max-width: 768px) {{ .project-hero {{ padding: 4rem 0 3rem; }} .project-hero h1 {{ font-size: 2rem; }} }}
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
            <button class="nav-toggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
            <div class="nav-menu">
                <ul class="nav-list">
                    <li><a href="../index.html#projects" data-i18n="nav.projects">Projects</a></li>
                    <li><a href="../index.html#services" data-i18n="nav.services">Services</a></li>
                    <li><a href="../index.html#contact" data-i18n="nav.contact">Contact</a></li>
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
            <a href="../index.html#projects" class="back-link"><i class="fas fa-arrow-left"></i><span data-i18n="cs.ui.back">Back to Projects</span></a>
            <h1><span data-i18n="{k}.title">{escape(title_en)}</span><span class="badge" data-i18n="cs.ui.badge">Case Study</span></h1>
            {t(f'{k}.subtitle', c['subtitle'], 'p', ' class="subtitle"')}
            <div class="project-meta">
                <div class="meta-item"><i class="fas fa-folder"></i>{t(f'{k}.category', c['category'])}</div>
                <div class="meta-item"><i class="fas fa-calendar"></i><span>{c['period']}</span></div>
                <div class="meta-item"><i class="fas fa-map-marker-alt"></i>{t(f'{k}.location', c['location'])}</div>
                <div class="meta-item"><i class="fas fa-database"></i>{t(f'{k}.scale', c['scale'])}</div>
            </div>
        </div>
    </section>

    <section class="project-content">
        <div class="container">
{live}
            <div class="content-section">
                <h2 data-i18n="cs.ui.overview">Project Overview</h2>
{overview}
                <div class="highlight-box">{t(f'{k}.outcome', c['outcome'], 'p')}</div>
            </div>

            <div class="content-section">
                <h2 data-i18n="cs.ui.metrics">Key Metrics</h2>
                <div class="kpi-grid">
{kpis}
                </div>
            </div>
{section_list(c, 'method', 'cs.ui.method', ordered=True)}{figures}
            <div class="content-section">
                <h2 data-i18n="cs.ui.tech">Technologies</h2>
                <div class="tech-stack">
{tech}
                </div>
            </div>
{section_list(c, 'deliverables', 'cs.ui.deliverables')}{section_list(c, 'limits', 'cs.ui.limits')}{note}
            <div style="text-align: center; margin-top: 3rem;">
                <a href="../index.html#projects" class="btn btn-primary"><i class="fas fa-arrow-left"></i><span data-i18n="cs.ui.back">Back to Projects</span></a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="logo-mark">
                        <picture>
                            <source srcset="../assets/logo2.webp" type="image/webp" />
                            <img src="../assets/logo2.png" alt="Avner Gomes" class="logo-img" width="32" height="32" />
                        </picture>
                        Avner Gomes
                    </div>
                    <p>Forest Engineer & Data Scientist</p>
                </div>
                <div class="footer-social">
                    <a href="https://github.com/avnergomes" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/avnergomes" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="mailto:avnergomes@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="footer-bottom"><p>&copy; 2026 Avner Gomes. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../js/translations.js"></script>
    <script src="../js/translations-cs2026.js"></script>
    <script src="../js/main.js"></script>
</body>
</html>
"""


def render_card(c):
    k = f"cs.{c['slug']}"
    tech = "\n".join(f"                            <span>{escape(x)}</span>" for x in c["card_tech"])
    stages = "\n".join(
        f"                                <li data-i18n=\"{k}.method{i}\">{escape(tri['en'])}</li>"
        for i, tri in enumerate(c["method"][:3], 1)
    )
    return f"""                <!-- Project 2026: {c['title']['en']} -->
                <div class="project-card" data-category="{c['data_category']}">
                    <div class="project-image">
                        <div class="project-placeholder" style="background: {c['gradient']};">
                            <i class="fas {c['icon']}"></i>
                        </div>
                        <div class="project-overlay">
                            <a href="projects/{c['slug']}.html" class="project-link" title="View project details"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-category" data-i18n="{k}.category">{escape(c['category']['en'])}</span>
                        <h3 data-i18n="{k}.title">{escape(c['title']['en'])}</h3>
                        <p data-i18n="{k}.card_desc">{escape(c['card_desc']['en'])}</p>
                        <div class="project-tech">
{tech}
                        </div>
                        <div class="project-details">
                            <h4 data-i18n="cs.ui.stages">Development Stages</h4>
                            <ul>
{stages}
                            </ul>
                            <h4 data-i18n="cs.ui.benefit">Main Benefit</h4>
                            <p data-i18n="{k}.card_benefit">{escape(c['card_benefit']['en'])}</p>
                        </div>
                    </div>
                </div>
"""


def write_translations(strings):
    body = json.dumps(strings, ensure_ascii=False, indent=2)
    js = (
        "// Generated by _generate_case_studies_2026.py. Do not edit by hand.\n"
        f"(function (extra) {{\n"
        "    Object.keys(extra).forEach(function (lang) {\n"
        "        if (translations[lang]) Object.assign(translations[lang], extra[lang]);\n"
        "    });\n"
        f"}})({body});\n"
    )
    (ROOT / "js" / "translations-cs2026.js").write_text(js, encoding="utf-8")


START, END = "<!-- CS2026:START -->", "<!-- CS2026:END -->"
ANCHOR = "                <!-- Project 1: VBP Dashboard -->"
TR_TAG = '    <script src="js/translations-cs2026.js"></script>\n'


def update_index():
    path = ROOT / "index.html"
    html = path.read_text(encoding="utf-8")
    block = f"                {START}\n" + "\n".join(render_card(c) for c in CASES) + f"                {END}\n\n"
    if START in html:
        pre, rest = html.split(f"                {START}\n", 1)
        _, post = rest.split(f"                {END}\n\n", 1)
        html = pre + block + post
    else:
        assert ANCHOR in html, "card anchor not found in index.html"
        html = html.replace(ANCHOR, block + ANCHOR, 1)
    if TR_TAG not in html:
        main_tag = '<script src="js/translations.js"></script>\n'
        assert main_tag in html, "translations.js tag not found in index.html"
        html = html.replace(main_tag, main_tag + TR_TAG, 1)
    path.write_text(html, encoding="utf-8")


def self_check(strings):
    """Every key used in HTML must exist in all three languages, with no em dashes."""
    for lang in LANGS:
        assert strings[lang].keys() == strings["en"].keys(), f"missing keys in {lang}"
        for key, text in strings[lang].items():
            assert "—" not in text, f"em dash in {lang}:{key}"
    used = set()
    for c in CASES:
        import re
        used |= set(re.findall(r'data-i18n="(cs\.[^"]+)"', render_page(c) + render_card(c)))
    missing = used - strings["en"].keys()
    assert not missing, f"keys used but not defined: {sorted(missing)}"


def main():
    strings = collect_strings()
    self_check(strings)
    for c in CASES:
        (ROOT / "projects" / f"{c['slug']}.html").write_text(render_page(c), encoding="utf-8")
        print(f"  wrote projects/{c['slug']}.html")
    write_translations(strings)
    update_index()
    print(f"  {len(strings['en'])} keys x {len(LANGS)} languages, {len(CASES)} cards in index.html")


if __name__ == "__main__":
    main()
