---
title: "Hoja de Ruta del Proyecto LAMB"
description: "Hoja de ruta de desarrollo del proyecto LAMB Learning Assistants Manager and Builder"
date: 2025-01-08
draft: false
---

# HOJA DE RUTA DEL PROYECTO LAMB

**Última actualización:** 10 de septiembre de 2025

---

## 🎯 Proyecto Principal LAMB

El proyecto principal LAMB implementa el Learning Assistant Manager and Builder. Combina el frontend de LAMB (Svelte 5) y el backend (FastAPI) en una única aplicación. Requiere una versión ligeramente modificada de Open WebUI, forkeada del proyecto original, y puede conectarse al LAMB Knowledge Base Server.

### 📊 Estado Actual

- ✅ **Proyecto totalmente open source** en [lamb-project.org](https://lamb-project.org)
- ✅ **Documentación de instalación** completa, con opciones de Docker e instalación manual
- ✅ **Funcionalidad principal** probada y estable

---

### 🚀 Hito: Versión 0.1

**🎯 Objetivo:** Base de código multi-tenant completamente estable
**👥 Responsables:** @granludo y @juananpe

#### 📋 Tareas
- [ ] **Funcionalidades multi-tenant** y administración → organizaciones
- [ ] **Mejoras del KB-Server:** ingesta JSON + importador de transcripciones de YouTube
- [ ] **Importación de PDF mejorada** para la ingesta
- [ ] **Suite completa de pruebas con Playwright**

---

### 📈 Hito: Analítica y Evaluaciones
*(Funcionalidad Mayor)*

**🎯 Objetivo:** Integrar desarrollos experimentales de analítica y evaluación de LLM en LAMB
**👥 Responsable:** Por determinar

#### 📋 Alcance
Integración de marcos avanzados de analítica y evaluación para la valoración del rendimiento de los asistentes de aprendizaje.

---

### 🎓 Hito: Actividad LTI de Tareas

**🎯 Objetivo:** Crear un nuevo tipo de frontend LTI para los asistentes de LAMB
**👥 Responsable:** @MJCasañ

#### 📋 Flujo de trabajo
1. **Configuración del docente:** tarea e instrucciones para el alumnado
2. **Entrega del estudiante:** documento(s) con nombres, roles y contribuciones de cada miembro del grupo
3. **Evaluación de LAMB:** evaluación y retroalimentación basada en rúbrica
4. **Revisión del docente:** revisión de la evaluación y decisiones de acción
5. **Integración de notas:** integración con el libro de calificaciones del LMS vía LTI

> 🔗 **Nota:** puede integrarse con los agentes de EvaluAItor

---

## 🗃️ LAMB Knowledge Base Server

**🎯 Objetivo:** Añadir funcionalidades experimentales e integración dinámica con LAMB
**👥 Responsables:** @granludo + Noa

### 📋 Desarrollo de Funcionalidades

#### 🔄 Procesamiento de Documentos
- [ ] **Análisis multimodal de PDF con Dockling**, chunking e ingesta
- [ ] **Análisis y extracción de documentos con Dockling** (MD en bruto + archivos de imagen)
- [ ] **Plugin de ingesta de vídeo** (basado en los flujos de trabajo de LLMPrimer)

#### 💾 Gestión de Bases de Conocimiento
- [ ] **Importación/Exportación** de bases de conocimiento completas
- [ ] **Reconstrucción de KB:** cambiar funciones de embeddings, estrategia de chunking, metadatos
- [ ] **Mejora del dominio guiada por ontologías** para la ingesta, consulta y ajuste fino

---

## 🤖 Proyectos Futuros

### Agentes EvaluAItor
**Estado:** Proyecto mayor en fase de planificación
**Hoja de ruta:** Pendiente de especificación detallada

### LAMB Jarvis
**Estado:** Proyecto mayor en fase de planificación
**Hoja de ruta:** Pendiente de especificación detallada

---

## 📞 Contacto y Contribuciones

Para preguntas sobre la hoja de ruta o para contribuir al desarrollo:

- **GitHub Issues:** [github.com/Lamb-Project/lamb/issues](https://github.com/Lamb-Project/lamb/issues)
- **Responsables del proyecto:** Marc Alier (UPC), Juanan Pereira (UPV/EHU)
- **Web:** [lamb-project.org](http://www.lamb-project.org)
