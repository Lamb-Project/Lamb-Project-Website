---
title: The project and its research
description: LAMB's research groups, researchers, research lines and publications.
translationKey: research
weight: 5
---

LAMB was created by **Marc Alier and Juanan Pereira**. It is software for educators and a research project: researchers from groups at four universities have written its papers and the principles that guide its design.

## Research lines

- **Software engineering for AI agents:** how agentic systems and the harnesses that run them are designed, built, tested and kept under control.
- **AI governance strategies:** how institutions decide, document and review their use of AI.
- **AI in education:** generative AI in teaching and learning, with the educator in control.
- **Assessment with AI agents:** advanced assessment designs in which AI agents support evaluation under human oversight.

The LAMB team welcomes research partners for joint projects, funding proposals and studies: see [research collaboration](/en/contact/#research-collaboration).

## Research groups

<div class="lamb-dev-tools">
<a href="https://futur.upc.edu/34275132"><strong>EduSTEAM ↗</strong><span>STEAM University Learning Research Group, Universitat Politècnica de Catalunya (UPC), Department of Services and Information Systems Engineering (ESSI). Marc Alier and María José Casañ.</span></a>
<a href="https://onekin.org"><strong>ONEKIN ↗</strong><span>Onekin Research Group, Universidad del País Vasco / Euskal Herriko Unibertsitatea (UPV/EHU), Department of Computer Languages and Systems, Faculty of Informatics. Juanan Pereira.</span></a>
<a href="https://grial.usal.es/"><strong>GRIAL ↗</strong><span>Research Group in InterAction and eLearning, Universidad de Salamanca, headed by Francisco José García-Peñalvo. Andrea Vázquez-Ingelmo and Alicia García-Holgado.</span></a>
<a href="https://observatorio-cientifico.ua.es/investigadores/359745/detalle"><strong>Smart Learning ↗</strong><span>Smart Learning Technologies Research Group, Universidad de Alicante. Faraón Llorens Largo.</span></a>
</div>

## Researchers

| Researcher | Institution | Work with LAMB |
|---|---|---|
| Marc Alier | Universitat Politècnica de Catalunya | Co-creator of LAMB; LAMB paper, retrieval and assessment studies, Smart Learning Applications concept, Safe AI in Education Manifesto |
| Juanan Pereira | UPV/EHU | Co-creator of LAMB; LAMB paper, retrieval and assessment studies, Manifesto |
| Francisco José García-Peñalvo | Universidad de Salamanca | LAMB paper, retrieval and assessment studies, Manifesto |
| María José Casañ | Universitat Politècnica de Catalunya | LAMB paper, retrieval and assessment studies, Smart Learning Applications concept, Manifesto |
| Faraón Llorens Largo | Universidad de Alicante | Safe AI in Education Manifesto |
| Daniel Amo Filvà | La Salle, Universitat Ramon Llull | Smart Learning Applications concept |
| Andrea Vázquez-Ingelmo | Universidad de Salamanca | AI-assisted assessment study |
| Alicia García-Holgado | Universidad de Salamanca | AI-assisted assessment study |
| Jose Cabré | Universitat Politècnica de Catalunya | LAMB paper |
| Arnau Granados | Universitat Politècnica de Catalunya | Retrieval study |

Research papers describe the work at their publication dates; they are not release notes for the current software.

## Cite the framework

Marc Alier, Juanan Pereira, Francisco José García-Peñalvo, Maria Jose Casañ and Jose Cabré. **LAMB: An open-source software framework to create artificial intelligence assistants deployed and integrated into learning management systems.** *Computer Standards & Interfaces*, 92, 2025, 103940.

[Read the paper via DOI](https://doi.org/10.1016/j.csi.2024.103940)

## AI-assisted assessment in Software Engineering

Francisco José García-Peñalvo, Marc Alier-Forment, Andrea Vázquez-Ingelmo, Alicia García-Holgado, María José Casañ-Guerrero and Juanan Pereira. **Generative artificial intelligence-assisted assessment in Software Engineering assignments: A proof of concept.** RIED-Revista Iberoamericana de Educación a Distancia, 29(2), 2026, 343-368.

The study compares rubric-based AI assessment with faculty grading for 14 Software Engineering assignments at the University of Salamanca. A locally deployed system processes report text and diagrams to produce scores and feedback. Its proposed grades averaged about one point below the faculty’s; the authors discuss the differences as material for teacher review and rubric refinement.

This proof of concept informs the approach to [rubric-based pre-assessment (PRE)](/en/teaching/#rubric-based-pre-assessment-pre). Its findings concern one course milestone and a small sample, rather than a validation of every LAMB activity or software version.

[Read the English paper (PDF, UPCommons)](https://upcommons.upc.edu/server/api/core/bitstreams/eb809f74-36fd-481f-91d2-ed117dad853d/content) · [DOI and publication details](https://doi.org/10.5944/ried.47173)

## Improving retrieval for educational terminology

Marc Alier, Francisco José García-Peñalvo, María José Casañ, Juanan Pereira and Arnau Granados. **Closing the acronym gap in educational retrieval with ontology-guided augmentation.** Information Sciences, 740, 2026, 123181.

Institutional acronyms can cause retrieval to miss relevant material when a question and a document use different forms of the same term. This study builds an acronym ontology and tests query expansion and document enrichment on around 10,000 Catalan university documents from the Barcelona School of Informatics. It provides research evidence for improving retrieval in educational RAG systems.

[Read the article on ScienceDirect](https://www.sciencedirect.com/science/article/pii/S002002552600112X) · [DOI](https://doi.org/10.1016/j.ins.2026.123181) · [Open-access PDF (UPCommons)](https://upcommons.upc.edu/server/api/core/bitstreams/4aa740f4-cc38-42b0-87ba-53cb16043c02/content)

**Research software and reproducibility.** The accompanying ontology builder and evaluation framework are archived in Zenodo, version 1, dated 29 January 2026. The deposit provides code and evaluation materials for experimenting with augmentation strategies.

[Archived research software (Zenodo)](https://doi.org/10.5281/zenodo.18411374) · [Source repository](https://github.com/granludo/onthology-guided-RAG-augmentation)

## The Smart Learning Applications concept

Marc Alier, Maria José Casañ and Daniel Amo Filvà. **Smart Learning Applications: Leveraging LLMs for Contextualized and Ethical Educational Technology.** TEEM 2023 proceedings, published in 2024.

[Read the concept paper via DOI](https://doi.org/10.1007/978-981-97-1814-6_18)

## Principles for the use of AI in education

The [Safe AI in Education Manifesto](https://manifesto.safeaieducation.org) provides a public reference for human oversight and responsible educational use. Read the original for its current text and version. The LAMB authors wrote it to guide LAMB's design; [LAMB and the Safe AI in Education Manifesto](/en/safe-ai/) takes each principle in turn.

These principles guide decisions; a particular deployment still needs to establish its privacy, access and operational arrangements. A publication about the framework does not establish that every possible learning activity improves outcomes.

## Software and acknowledgments

[LAMB's source code](https://github.com/Lamb-Project/lamb) is distributed under GPL v3. Academic partners are UPV/EHU and UPC, through the Barcelona School of Informatics (FIB), the Institute of Educational Sciences (ICE) and the ESSI department. Tknika, the Basque vocational-training applied research centre, uses and supports LAMB. The project acknowledges the Open WebUI and Tsugi communities and the TEEM community. When reporting research using LAMB, record the software revision and the activity design alongside the paper citation.
