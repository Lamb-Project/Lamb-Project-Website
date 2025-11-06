---
title: "Para Desarrolladores"
description: "Documentación y recursos para contribuir al proyecto LAMB"
date: 2025-05-29
draft: false
weight: 200
---

# Para Desarrolladores

## LAMB es un proyecto Open Source

**LAMB** es un proyecto de **código abierto** desarrollado bajo licencia GPL v3. Estamos en GitHub y agradecemos enormemente las colaboraciones y contribuciones de la comunidad.

<div style="text-align: center; margin: 2rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb" style="primary" >}}🔗 Ver en GitHub{{< /button >}}
</div>

## 🤝 Contribuciones

Apreciamos todo tipo de contribuciones:

- **Pull Requests** con nuevas funcionalidades o mejoras
- **Corrección de bugs** y problemas reportados
- **Documentación** y traducciones
- **Testing** y reporte de issues
- **Ideas** y sugerencias de mejora

## 📚 Documentación Técnica

Mantenemos documentación completa y actualizada para desarrolladores:

### Arquitectura del Sistema

Documento completo sobre la arquitectura de LAMB, incluyendo:
- Componentes del sistema
- Arquitectura de datos
- Pipeline de completions
- Arquitectura de plugins
- Arquitectura de frontend y backend

<div style="margin: 1rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/lamb_architecture.md" style="secondary" >}}📖 Ver Documentación de Arquitectura{{< /button >}}
</div>

### Especificaciones del Producto (PRD)

Documento de requerimientos del producto con:
- Especificaciones funcionales
- Casos de uso
- Flujos de trabajo
- Requisitos técnicos

<div style="margin: 1rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/prd.md" style="secondary" >}}📋 Ver Product Requirements Document (PRD){{< /button >}}
</div>

## 🛠️ Stack Tecnológico

- **Backend**: FastAPI (Python 3.11+)
- **Frontend**: Svelte 5, SvelteKit
- **Base de Datos**: SQLite
- **Vector Store**: ChromaDB
- **Containerización**: Docker, Docker Compose

## 🚀 Empezar a Desarrollar

1. **Clone el repositorio**:
   ```bash
   git clone https://github.com/Lamb-Project/lamb.git
   cd lamb
   ```

2. **Configurar el entorno**:
   ```bash
   export LAMB_PROJECT_PATH=$(pwd)
   docker-compose up -d
   ```

3. **Acceder a los servicios**:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:9099
   - Open WebUI: http://localhost:8080

## 💬 Comunidad

- **GitHub Issues**: Para reportar bugs o solicitar funcionalidades
- **GitHub Discussions**: Para preguntas y discusiones
- **Pull Requests**: Bienvenidos con mejoras y nuevas características

## 📖 Publicación Académica

Si usas LAMB en tu investigación, por favor cita nuestro trabajo:

**"LAMB: An open-source software framework to create artificial intelligence assistants deployed and integrated into learning management systems"**

- **Autores:** Marc Alier, Juanan Pereira, Francisco José García-Peñalvo, Maria Jose Casañ, Jose Cabré
- **Revista:** Computer Standards & Interfaces, Volumen 92, Marzo 2025
- **DOI:** [10.1016/j.csi.2024.103940](https://doi.org/10.1016/j.csi.2024.103940)

---

<div style="text-align: center; margin: 2rem 0;">
  <p><strong>¡Únete a nosotros en GitHub y ayuda a hacer de LAMB una mejor plataforma para la educación!</strong></p>
  {{< button href="https://github.com/Lamb-Project/lamb" style="primary" >}}🌟 Star en GitHub{{< /button >}}
</div>

