---
title: "LAMB Project Roadmap"
description: "Development roadmap for the LAMB Learning Assistants Manager and Builder project"
date: 2025-01-08
draft: false
---

# LAMB PROJECT ROADMAP

**Last updated:** September 10, 2025

---

## 🎯 LAMB Main Project 

The main LAMB project implements the Learning Assistant Manager and Builder. It combines the LAMB frontend (Svelte 5) and backend (FastAPI) into a single application. It requires a slightly modified version of Open WebUI forked from the main project and can be connected to the LAMB Knowledge Base Server.

### 📊 Current Status

- ✅ **Project fully open sourced** at [lamb-project.org](https://lamb-project.org)  
- ✅ **Installation documentation** complete with Docker and manual setup options
- ✅ **Core functionality** tested and stable

---

### 🚀 Milestone: Release 0.1 

**🎯 Objective:** Full stable multi-tenant codebase  
**👥 Owner:** @granludo and @juananpe

#### 📋 Tasks
- [ ] **Multi-tenant features** and admin → organizations
- [ ] **KB-Server enhancements:** JSON ingestion + YouTube transcriptions importer
- [ ] **Enhanced PDF import** for ingestion 
- [ ] **Playwright full feature testing suite**

---

### 📈 Milestone: Analytics and Evaluations
*(Major Feature)*

**🎯 Objective:** Integrate experimental developments for analytics and LLM evaluations into LAMB  
**👥 Owner:** TBD

#### 📋 Scope
Integration of advanced analytics and evaluation frameworks for learning assistant performance assessment.

---

### 🎓 Milestone: LTI Task Activity 

**🎯 Objective:** Create a new kind of LTI frontend for LAMB assistants  
**👥 Owner:** @MJCasañ 

#### 📋 Workflow
1. **Instructor setup:** Task and instructions for students
2. **Student delivery:** Document(s) with peer names, roles, and contributions
3. **LAMB assessment:** Rubric-based assessment and feedback
4. **Instructor review:** Assessment review and action decisions
5. **Grade integration:** LMS gradebook integration via LTI

> 🔗 **Note:** Can be integrated with EvaluAItor agents

---

## 🗃️ LAMB Knowledge Base Server

**🎯 Objective:** Add experimental features and dynamic LAMB integration  
**👥 Owner:** @granludo + Noa

### 📋 Feature Development

#### 🔄 Document Processing
- [ ] **Dockling-based multimodal PDF** parsing, chunking, and ingestion
- [ ] **Dockling document parsing** and extraction (raw MD + image files)
- [ ] **Video ingestion plugin** (based on LLMPrimer workflows)

#### 💾 Knowledge Base Management
- [ ] **Import/Export** of full knowledge bases
- [ ] **KB rebuilding:** Change embeddings functions, chunking strategy, metadata
- [ ] **Ontology-driven domain enhancement** for ingestion, query, and fine-tuning

---

## 🤖 Future Projects

### EvaluAItor Agents 
**Status:** Major project in planning phase  
**Roadmap:** Pending detailed specification

### LAMB Jarvis 
**Status:** Major project in planning phase  
**Roadmap:** Pending detailed specification

---

## 📞 Contact & Contributions

For questions about the roadmap or to contribute to development:

- **GitHub Issues:** [github.com/Lamb-Project/lamb/issues](https://github.com/Lamb-Project/lamb/issues)
- **Project Leaders:** Marc Alier (UPC), Juanan Pereira (UPV/EHU)
- **Website:** [lamb-project.org](http://www.lamb-project.org)


