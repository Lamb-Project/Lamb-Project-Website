---
title: "LAMB — The Application Layer for AI Sovereignty in Education"
description: "Open-source hub that fits AI — sovereign inference included — into the governance strategy of the educational institution"
date: 2026-07-19
draft: false
---

<div style="text-align: center; margin: 2rem 0;">
  <img src="../images/lamb_1.png" alt="LAMB Logo" style="max-width: 300px; height: auto;">
</div>

# The application layer for AI sovereignty in education

<div style="text-align: center; margin: 1.5rem 0;">
  <a href="LICENSE" style="text-decoration: none; margin: 0.25rem;"><img src="https://img.shields.io/badge/license-GPL%20v3-blue.svg" alt="License"></a>
  <a href="https://manifesto.safeaieducation.org" style="text-decoration: none; margin: 0.25rem;"><img src="https://img.shields.io/badge/Safe_AI_Education-Manifesto-green" alt="Safe AI in Education"></a>
  <a href="https://github.com/Lamb-Project/lamb" style="text-decoration: none; margin: 0.25rem;"><img src="https://img.shields.io/badge/GitHub-Lamb--Project-black" alt="GitHub"></a>
</div>

Universities across Europe are securing sovereign AI infrastructure: local open-weight models, GDPR-compliant inference providers, institutional clouds. That infrastructure decides where the computation runs and where the data rests. It leaves the harder questions open: who gets access, in which course, on what schedule, under whose rules, with what oversight. Those are governance questions — and they are the questions teaching actually runs on.

**LAMB is the missing layer.** The LMS does not govern AI access, and chat frontends serve conversations, not governance. LAMB fits AI — sovereign inference included — into the governance strategy of the educational institution.

<div style="text-align: center; margin: 2rem 0;">
  {{< button href="/tutorial" style="primary" >}}📚 Quick Tutorial (15 min){{< /button >}}
  {{< button href="/en/manual" style="primary" >}}📖 User Manual{{< /button >}}
  {{< button href="https://github.com/Lamb-Project/lamb" style="secondary" >}}View on GitHub{{< /button >}}
  {{< button href="/en/roadmap" style="secondary" >}}📋 Roadmap{{< /button >}}
</div>

## From learning assistants to the institution's AI hub

LAMB started as a **Learning Assistants Manager and Builder**: the platform where educators design, build and publish AI learning assistants into their LMS, grounded in their own course materials. That platform is in production today, inside the institutional Moodles of the Universitat Politècnica de Catalunya and the Universidad del País Vasco / EHU.

It has grown into something larger: **the hub that provides the application services Smart Learning Applications need to integrate into the ecosystem of the learning institution.** Identity flows from course enrollment. Knowledge flows from course materials. Model access — commercial APIs or the university's own inference — is provisioned, quota-bound and auditable. Assessment flows back to the gradebook. Insight flows back to the educator.

## What LAMB provides

### 1. A secure, modular, provider-independent AI access layer

LAMB manages the institution's connections to AI — commercial APIs or the university's own local inference — behind one modular, provider-independent connection manager. Secure here means **governed**: access to LLM inference is granted at the granularity teaching actually runs on — per **course**, per **role**, per **activity**, per **time frame**, per **token budget** — and monitored, with usage attributed and auditable. Switch providers without touching the teaching.

### 2. An easy-to-use infrastructure for teachers to create their own smart learning activities

Everything a teacher needs to build AI into their course, without writing code: **knowledge bases** from their own materials; **learning assistants**; **rubrics** and **LLM-as-judge task delivery** — group delivery and group grading included, with the teacher always holding the final grade; **agentic pipelines** for advanced grading and feedback processes; and **data analytics** on how students actually work. Plus **AAC**, the teacher's own agent: it reads the analytics of both Moodle and LAMB, and helps the teacher design, improve and understand their smart learning activities.

### 3. A simple framework for innovators to build experimental smart learning applications

A smart learning application should not require a platform team. The **[lamb-tool-template](https://github.com/Lamb-Project/lamb-tool-template)** is a minimal, well-built LTI tool wired to LAMB's services: launched from the LMS, powered by a LAMB assistant over the OpenAI-compatible API, grades passed back to the gradebook. Clone it, change the parts you care about, deploy it — GPL-3.0, and tools built on it can fold back into the LAMB ecosystem.

### 4. One governance console for all of it

Providers, models, access grants, quotas, users, activities: managed from the same place, the **LAMB organization admin console**. One governance surface for the institution's whole AI layer.

## Built on a philosophy

Moodle grew from a pedagogy — social constructionism — before it grew a plugin ecosystem. LAMB grows from the **[Safe AI in Education Manifesto](https://manifesto.safeaieducation.org)**: seven principles for AI in education — human oversight, confidentiality, alignment with educational strategy, accuracy, transparency — signed by one hundred academics and operationalizing the EU's directives for the classroom. LAMB is the Manifesto turned into software.

## Research & academic foundation

LAMB is peer-reviewed research in production. If you use LAMB in your research, please cite:

**"LAMB: An open-source software framework to create artificial intelligence assistants deployed and integrated into learning management systems"**

- **Authors:** Marc Alier, Juanan Pereira, Francisco José García-Peñalvo, Maria Jose Casañ, Jose Cabré
- **Journal:** Computer Standards & Interfaces, Volume 92, March 2025
- **DOI:** [10.1016/j.csi.2024.103940](https://doi.org/10.1016/j.csi.2024.103940)

The concept LAMB implements — **Smart Learning Applications** — was introduced at TEEM 2023 (Alier, Casañ & Amo, Springer LNET, DOI [10.1007/978-981-97-1814-6_18](https://doi.org/10.1007/978-981-97-1814-6_18)).

### Academic partners

- **Universitat Politècnica de Catalunya (UPC)** — Barcelona School of Informatics · Institut de Ciències de l'Educació (ICE) · Department of Service and Information System Engineering (ESSI)
- **Universidad del País Vasco (UPV/EHU)**

### Acknowledgments

Special thanks to the **Open WebUI Project**, the **Tsugi Project** (Dr. Chuck Severance), the **TEEM Conference** community, and **Tknika** Basque VET Applied Research Centre.

<div style="text-align: center; margin: 2rem 0;">
  {{< button href="/tutorial" style="primary" >}}📚 Quick Tutorial (15 min){{< /button >}}
  {{< button href="/en/manual" style="primary" >}}📖 User Manual{{< /button >}}
  {{< button href="developers" style="secondary" >}}👨‍💻 For Developers{{< /button >}}
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/deployLocal.md" style="secondary" >}}🖥️ Deploy Locally{{< /button >}}
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/deployNext.md" style="secondary" >}}☁️ Deploy in Production{{< /button >}}
  {{< button href="blog" style="secondary" >}}📝 Blog{{< /button >}}
</div>
