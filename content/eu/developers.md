---
title: "Garatzaileentzat"
description: "LAMB proiektuari ekarpenak egiteko dokumentazioa eta baliabideak"
date: 2025-05-29
draft: false
weight: 200
---

# Garatzaileentzat

## LAMB kode irekiko proiektu bat da

**LAMB** GPL v3 lizentziapean garatutako **kode irekiko** proiektu bat da. GitHub-en gaude eta komunitateak egiten dituen lankidetza eta ekarpenak eskertu egiten ditugu.

<div style="text-align: center; margin: 2rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb" style="primary" >}}🔗 Ikusi GitHub-en{{< /button >}}
</div>

## 🤝 Ekarpenak

Mota guztietako ekarpenak estimatzen ditugu:

- **Pull Requests** funtzionalitate berriekin edo hobekuntzarekin
- **Bug-en konponketa** eta arazo jakinarazpenak
- **Dokumentazioa** eta itzulpenak
- **Testing** eta issue jakinarazpenak
- **Ideiak** eta hobekuntza proposamenak

## 📚 Dokumentazio Teknikoa

Garatzaileentzat dokumentazio osoa eta eguneratua mantentzen dugu:

### Sistemaren Arkitektura

LAMBen arkitekturari buruzko dokumentu osoa, hau barne:
- Sistemaren osagaiak
- Datuen arkitektura
- Completions pipeline-a
- Plugin arkitektura
- Frontend eta backend arkitektura

<div style="margin: 1rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/lamb_architecture.md" style="secondary" >}}📖 Ikusi Arkitektura Dokumentazioa{{< /button >}}
</div>

### Produktuaren Eskakizunen Dokumentua (PRD)

Produktuaren eskakizunen dokumentua honekin:
- Funtzionaltasun zehaztapenak
- Erabilera kasuak
- Lan fluxuak
- Baldintza teknikoak

<div style="margin: 1rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/prd.md" style="secondary" >}}📋 Ikusi Product Requirements Document (PRD){{< /button >}}
</div>

## 🛠️ Stack Teknologikoa

- **Backend**: FastAPI (Python 3.11+)
- **Frontend**: Svelte 5, SvelteKit
- **Datu-basea**: SQLite
- **Vector Store**: ChromaDB
- **Containerizazioa**: Docker, Docker Compose

## 🚀 Garapenarekin Hastea

1. **Klonatu biltegia**:
   ```bash
   git clone https://github.com/Lamb-Project/lamb.git
   cd lamb
   ```

2. **Konfiguratu ingurunea**:
   ```bash
   export LAMB_PROJECT_PATH=$(pwd)
   docker-compose up -d
   ```

3. **Sartu zerbitzuetara**:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:9099
   - Open WebUI: http://localhost:8080

## 💬 Komunitatea

- **GitHub Issues**: Bug-ak jakinarazteko edo funtzionalitateak eskatzeko
- **GitHub Discussions**: Galdera eta eztabaidetarako
- **Pull Requests**: Ongi etorriak hobekuntza eta ezaugarri berriekin

## 📖 Argitalpen Akademikoa

LAMB zure ikerketetan erabiltzen baduzu, mesedez aipatu gure lana:

**"LAMB: An open-source software framework to create artificial intelligence assistants deployed and integrated into learning management systems"**

- **Egileak:** Marc Alier, Juanan Pereira, Francisco José García-Peñalvo, Maria Jose Casañ, Jose Cabré
- **Aldizkaria:** Computer Standards & Interfaces, 92. bolumena, 2025ko martxoa
- **DOI:** [10.1016/j.csi.2024.103940](https://doi.org/10.1016/j.csi.2024.103940)

---

<div style="text-align: center; margin: 2rem 0;">
  <p><strong>Batu zaitez gurekin GitHub-en eta lagundu LAMB hezkuntzarako plataforma hobea izaten!</strong></p>
  {{< button href="https://github.com/Lamb-Project/lamb" style="primary" >}}🌟 Star GitHub-en{{< /button >}}
</div>

