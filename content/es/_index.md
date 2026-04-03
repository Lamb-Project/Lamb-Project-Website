---
title: "LAMB - Learning Assistants Manager and Builder"
description: "Plataforma web para diseñar, entrenar y publicar asistentes de aprendizaje basados en IA sin escribir código"
date: 2025-05-29
draft: false
type: "homepage"
layout: "home"
---

<div style="text-align: center; margin: 2rem 0;">
  <img src="images/lamb_1.png" alt="LAMB Logo" style="max-width: 300px; height: auto;">
</div>

# Crea asistentes de IA para educación integrados en tu Sistema de Gestión del Aprendizaje

<div style="text-align: center; margin: 1.5rem 0;">
  <a href="http://www.lamb-project.org" style="text-decoration: none; margin: 0.25rem;"><img src="https://img.shields.io/badge/Website-lamb--project.org-blue" alt="Website"></a>
  <a href="LICENSE" style="text-decoration: none; margin: 0.25rem;"><img src="https://img.shields.io/badge/license-GPL%20v3-blue.svg" alt="Licencia"></a>
  <a href="https://manifesto.safeaieducation.org" style="text-decoration: none; margin: 0.25rem;"><img src="https://img.shields.io/badge/Safe_AI_Education-Manifesto-green" alt="IA Segura en Educación"></a>
  <a href="https://github.com/Lamb-Project/lamb" style="text-decoration: none; margin: 0.25rem;"><img src="https://img.shields.io/badge/GitHub-Lamb--Project-black" alt="GitHub"></a>
</div>

**Crea asistentes de IA para educación integrados en tu Sistema de Gestión del Aprendizaje**

<div style="text-align: center; margin: 2rem 0;">
  {{< button href="tutorial" style="primary" >}}📚 Tutorial rápido (15 min){{< /button >}}
  {{< button href="/es/manual" style="primary" >}}📖 Manual de Usuario{{< /button >}}
  {{< button href="blog" style="secondary" >}}📝 Blog{{< /button >}}
  {{< button href="developers" style="secondary" >}}👨‍💻 Para Desarrolladores{{< /button >}}
  {{< button href="https://github.com/Lamb-Project/lamb" style="secondary" >}}Ver en GitHub{{< /button >}}
  {{< button href="/en/roadmap" style="secondary" >}}📋 Roadmap (English){{< /button >}}
  {{< button href="/features" >}}Ver todas las características{{< /button >}}
</div>

**LAMB** es una plataforma web que te permite **diseñar, entrenar y publicar asistentes de aprendizaje basados en IA** de forma visual e intuitiva. Funciona como un "constructor de chatbots docentes" que combina modelos de lenguaje (GPT-4, Mistral, modelos locales) con tus propios materiales educativos.

**LAMB** es un proyecto opensource desarrollado por Marc Alier y Juanan  Pereira, profesores e investigadores de la Universitat Politècnica de Catalunya (UPC) y Universidad del Pais Vasco (UPV/EHU)
 

## ¿Qué hace LAMB por ti?

### 🎓 Tutores Temáticos Especializados
Diseña asistentes que solo responden sobre la materia que elijas, manteniéndose siempre en el contexto educativo apropiado.

### 📚 Ingesta Inteligente de Conocimiento
Sube documentos (PDF, Word, Markdown) y LAMB los procesa automáticamente con un **modelo de datos flexible** que:
- Extrae y estructura el contenido preservando contexto y relaciones
- Crea embeddings semánticos optimizados para búsqueda educativa
- Permite metadatos personalizados para cada documento
- Se adapta a diferentes formatos y estructuras de contenido
- Alimenta al modelo mediante RAG (Retrieval Augmented Generation)

### 🔍 Pruebas y Depuración Avanzadas
Modo "debug" que muestra el prompt completo para entender exactamente qué se envía al modelo, facilitando la optimización de respuestas.

### 🎯 Integración LTI con Moodle
Publica el asistente como herramienta externa LTI e incrústalo en tu Moodle en un par de clics.

### 🔒 Privacidad Garantizada
Los estudiantes interactúan dentro de LAMB; sus datos no se comparten con proveedores externos de modelos de IA.

## ¿Para quién es LAMB?

- **📖 Docentes y formadores** que necesitan un ayudante virtual centrado en su temario específico
- **🏫 Centros educativos** que usan Moodle u otros LMS y requieren integrar IA sin exponer datos estudiantiles
- **💡 Equipos de innovación** que experimentan con diferentes LLM y necesitan un panel unificado de gestión

## Características Principales

### Asistentes Ilimitados
Cada uno con sus propias instrucciones, tono y límites personalizados.

### Bases de Conocimiento Flexibles
- **Modelo de datos adaptable**: arquitectura flexible que permite diferentes tipos de contenido y estructuras
- Soporte para PDF, DOCX, Markdown (más formatos próximamente)
- Bases públicas o privadas según necesidades
- Sistema de embeddings vectoriales para búsqueda semántica
- Conectores en desarrollo para fuentes externas (Google Drive, YouTube, APIs)

### Múltiples Modelos de IA
- OpenAI GPT-4o
- Mistral
- Modelos locales
- Cambio de modelo en un clic

### Citas Automáticas
El asistente proporciona respuestas con referencias a los documentos fuente utilizados.

### Portabilidad Total
- Exportar/importar asistentes en formato JSON
- Fácil versionado y compartición

### Interfaz Multilingüe
Catalán, castellano, inglés y euskera incluidos de serie.

### Control de Acceso Robusto
- Claves secretas para registro
- Bases privadas para evitar usos no autorizados

### Ecosistema en Crecimiento
- **Arquitectura modular y extensible**: diseñada para incorporar nuevas funcionalidades sin afectar el núcleo
- Plugins de ingestión personalizables para diferentes fuentes de datos
- API abierta para integraciones con terceros
- Actualización continua sin dependencia de un solo proveedor de IA
- Modelo de datos flexible que evoluciona con las necesidades educativas

---

## En pocas palabras

**LAMB te da el control total para construir un "ChatGPT especializado" en tu asignatura, conectarlo a tu Moodle y mantener los datos de tu alumnado completamente seguros.**

<div style="text-align: center; margin: 2rem 0;">
  {{< button href="tutorial" style="primary" >}}📚 Tutorial rápido (15 min){{< /button >}}
  {{< button href="/es/manual" style="primary" >}}📖 Manual de Usuario{{< /button >}}
  {{< button href="blog" style="secondary" >}}📝 Blog{{< /button >}}
  {{< button href="developers" style="secondary" >}}👨‍💻 Para Desarrolladores{{< /button >}}
  {{< button href="https://github.com/Lamb-Project/lamb" style="secondary" >}}Ver en GitHub{{< /button >}}
  {{< button href="/en/roadmap" style="secondary" >}}📋 Roadmap (English){{< /button >}}
  {{< button href="/features" >}}Ver todas las características{{< /button >}}
</div>

---

## 🎓 Investigación y Fundación Académica

**LAMB** está construido sobre investigación académica sólida y se adhiere al **[Manifiesto de IA Segura en Educación](https://manifesto.safeaieducation.org)** - un marco integral para el despliegue ético, seguro y educativamente alineado de la IA.

### 📚 Publicación Académica

Si usas LAMB en tu investigación, por favor cita nuestro trabajo:

**"LAMB: An open-source software framework to create artificial intelligence assistants deployed and integrated into learning management systems"**

- **Autores:** Marc Alier, Juanan Pereira, Francisco José García-Peñalvo, Maria Jose Casañ, Jose Cabré
- **Revista:** Computer Standards & Interfaces, Volumen 92, Marzo 2025
- **DOI:** [10.1016/j.csi.2024.103940](https://doi.org/10.1016/j.csi.2024.103940)

### 🏛️ Socios Académicos

- **Universidad del País Vasco (UPV/EHU)** - Institución de investigación y socio de desarrollo
- **Universitat Politècnica de Catalunya (UPC)** - Institución de investigación y socio de desarrollo
  - Facultat d'Informàtica de Barcelona
  - Institut de Ciències de l'Educació - ICE
  - Departamento de Ingeniería de Servicios y Sistemas de Información (ESSI)

### 🙏 Agradecimientos

Agradecimientos especiales al **Proyecto Open WebUI**, **Proyecto Tsugi** (Dr. Chuck Severance), la comunidad de **Conferencia TEEM**, y **Tknika** Centro de Investigación Aplicada de FP Vasca por su apoyo y colaboración.

