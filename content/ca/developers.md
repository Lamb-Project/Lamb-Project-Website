---
title: "Per a Desenvolupadors"
description: "Documentació i recursos per contribuir al projecte LAMB"
date: 2025-05-29
draft: false
weight: 200
---

# Per a Desenvolupadors

## LAMB és un projecte Open Source

**LAMB** és un projecte de **codi obert** desenvolupat sota llicència GPL v3. Som a GitHub i agraïm enormement les col·laboracions i contribucions de la comunitat.

<div style="text-align: center; margin: 2rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb" style="primary" >}}🔗 Veure a GitHub{{< /button >}}
</div>

## 🤝 Contribucions

Apreciem tot tipus de contribucions:

- **Pull Requests** amb noves funcionalitats o millores
- **Correcció de bugs** i problemes reportats
- **Documentació** i traduccions
- **Testing** i report d'issues
- **Idees** i suggeriments de millora

## 📚 Documentació Tècnica

Mantenim documentació completa i actualitzada per a desenvolupadors:

### Arquitectura del Sistema

Document complet sobre l'arquitectura de LAMB, incloent:
- Components del sistema
- Arquitectura de dades
- Pipeline de completions
- Arquitectura de plugins
- Arquitectura de frontend i backend

<div style="margin: 1rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/lamb_architecture.md" style="secondary" >}}📖 Veure Documentació d'Arquitectura{{< /button >}}
</div>

### Especificacions del Producte (PRD)

Document de requeriments del producte amb:
- Especificacions funcionals
- Casos d'ús
- Fluxos de treball
- Requisits tècnics

<div style="margin: 1rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/prd.md" style="secondary" >}}📋 Veure Product Requirements Document (PRD){{< /button >}}
</div>

## 🛠️ Stack Tecnològic

- **Backend**: FastAPI (Python 3.11+)
- **Frontend**: Svelte 5, SvelteKit
- **Base de Dades**: SQLite
- **Vector Store**: ChromaDB
- **Containerització**: Docker, Docker Compose

## 🚀 Començar a Desenvolupar

1. **Clonar el repositori**:
   ```bash
   git clone https://github.com/Lamb-Project/lamb.git
   cd lamb
   ```

2. **Configurar l'entorn**:
   ```bash
   export LAMB_PROJECT_PATH=$(pwd)
   docker-compose up -d
   ```

3. **Accedir als serveis**:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:9099
   - Open WebUI: http://localhost:8080

## 💬 Comunitat

- **GitHub Issues**: Per reportar bugs o sol·licitar funcionalitats
- **GitHub Discussions**: Per a preguntes i discussions
- **Pull Requests**: Benvinguts amb millores i noves característiques

## 📖 Publicació Acadèmica

Si fas servir LAMB en la teva recerca, si us plau cita el nostre treball:

**"LAMB: An open-source software framework to create artificial intelligence assistants deployed and integrated into learning management systems"**

- **Autors:** Marc Alier, Juanan Pereira, Francisco José García-Peñalvo, Maria Jose Casañ, Jose Cabré
- **Revista:** Computer Standards & Interfaces, Volum 92, Març 2025
- **DOI:** [10.1016/j.csi.2024.103940](https://doi.org/10.1016/j.csi.2024.103940)

---

<div style="text-align: center; margin: 2rem 0;">
  <p><strong>Uneix-te a nosaltres a GitHub i ajuda a fer de LAMB una millor plataforma per a l'educació!</strong></p>
  {{< button href="https://github.com/Lamb-Project/lamb" style="primary" >}}🌟 Star a GitHub{{< /button >}}
</div>

