---
title: "Full de Ruta del Projecte LAMB"
description: "Full de ruta de desenvolupament del projecte LAMB Learning Assistants Manager and Builder"
date: 2025-01-08
draft: false
---

# FULL DE RUTA DEL PROJECTE LAMB

**Darrera actualització:** 10 de setembre de 2025

---

## 🎯 Projecte Principal LAMB

El projecte principal LAMB implementa el Learning Assistant Manager and Builder. Combina el frontend de LAMB (Svelte 5) i el backend (FastAPI) en una única aplicació. Requereix una versió lleugerament modificada d'Open WebUI, bifurcada del projecte original, i es pot connectar al LAMB Knowledge Base Server.

### 📊 Estat Actual

- ✅ **Projecte totalment open source** a [lamb-project.org](https://lamb-project.org)
- ✅ **Documentació d'instal·lació** completa, amb opcions de Docker i instal·lació manual
- ✅ **Funcionalitat principal** provada i estable

---

### 🚀 Fita: Versió 0.1

**🎯 Objectiu:** Base de codi multi-tenant completament estable
**👥 Responsables:** @granludo i @juananpe

#### 📋 Tasques
- [ ] **Funcionalitats multi-tenant** i administració → organitzacions
- [ ] **Millores del KB-Server:** ingesta JSON + importador de transcripcions de YouTube
- [ ] **Importació de PDF millorada** per a la ingesta
- [ ] **Suite completa de proves amb Playwright**

---

### 📈 Fita: Analítica i Avaluacions
*(Funcionalitat Important)*

**🎯 Objectiu:** Integrar desenvolupaments experimentals d'analítica i avaluació de LLM a LAMB
**👥 Responsable:** Per determinar

#### 📋 Abast
Integració de marcs avançats d'analítica i avaluació per a la valoració del rendiment dels assistents d'aprenentatge.

---

### 🎓 Fita: Activitat LTI de Tasques

**🎯 Objectiu:** Crear un nou tipus de frontend LTI per als assistents de LAMB
**👥 Responsable:** @MJCasañ

#### 📋 Flux de treball
1. **Configuració del docent:** tasca i instruccions per a l'alumnat
2. **Lliurament de l'estudiant:** document(s) amb noms, rols i contribucions de cada membre del grup
3. **Avaluació de LAMB:** avaluació i retroalimentació basada en rúbrica
4. **Revisió del docent:** revisió de l'avaluació i decisions d'acció
5. **Integració de notes:** integració amb el llibre de qualificacions del LMS via LTI

> 🔗 **Nota:** es pot integrar amb els agents d'EvaluAItor

---

## 🗃️ LAMB Knowledge Base Server

**🎯 Objectiu:** Afegir funcionalitats experimentals i integració dinàmica amb LAMB
**👥 Responsables:** @granludo + Noa

### 📋 Desenvolupament de Funcionalitats

#### 🔄 Processament de Documents
- [ ] **Anàlisi multimodal de PDF amb Dockling**, chunking i ingesta
- [ ] **Anàlisi i extracció de documents amb Dockling** (MD en brut + fitxers d'imatge)
- [ ] **Plugin d'ingesta de vídeo** (basat en els fluxos de treball de LLMPrimer)

#### 💾 Gestió de Bases de Coneixement
- [ ] **Importació/Exportació** de bases de coneixement completes
- [ ] **Reconstrucció de KB:** canviar funcions d'embeddings, estratègia de chunking, metadades
- [ ] **Millora del domini guiada per ontologies** per a la ingesta, consulta i ajust fi

---

## 🤖 Projectes Futurs

### Agents EvaluAItor
**Estat:** Projecte important en fase de planificació
**Full de ruta:** Pendent d'especificació detallada

### LAMB Jarvis
**Estat:** Projecte important en fase de planificació
**Full de ruta:** Pendent d'especificació detallada

---

## 📞 Contacte i Contribucions

Per a preguntes sobre el full de ruta o per contribuir al desenvolupament:

- **GitHub Issues:** [github.com/Lamb-Project/lamb/issues](https://github.com/Lamb-Project/lamb/issues)
- **Responsables del projecte:** Marc Alier (UPC), Juanan Pereira (UPV/EHU)
- **Web:** [lamb-project.org](http://www.lamb-project.org)
