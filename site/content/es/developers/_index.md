---
title: Construye una aplicación de aprendizaje con LAMB
description: Usa los recursos públicos de integración para construir una herramienta educativa o contribuir a LAMB.
translationKey: developers
weight: 3
---

Desarrollamos LAMB en [GitHub](https://github.com/Lamb-Project/lamb) y usamos la [rama `dev`](https://github.com/Lamb-Project/lamb/tree/dev) para el desarrollo. Puedes instalar LAMB en local pasándole a un agente de programación el fichero [`Documentation/installation/deployLocal.md`](https://github.com/Lamb-Project/lamb/blob/dev/Documentation/installation/deployLocal.md): está escrito para que lo siga un agente, que te pide los datos que necesita. Todo funciona en localhost con Docker.

LAMB ofrece una capa de gestión de asistentes y de acceso a modelos que las aplicaciones educativas pueden usar dentro de un entorno institucional. Construye una nueva herramienta docente, automatiza un flujo de trabajo o contribuye al ecosistema de software libre. LAMB se distribuye con la licencia GNU GPL v3.

## Construye una herramienta para una actividad de aprendizaje {#build-a-tool-for-a-learning-activity}

La plantilla pública **lamb-tool-template** muestra una herramienta que se lanza desde un LMS, usa un asistente de LAMB autorizado y devuelve al LMS un resultado aprobado por el docente. Da a un equipo de desarrollo un punto de partida concreto.

Necesitas una instalación de LAMB que admita el acceso a la API de creador, permiso para usar ese acceso y un asistente publicado que esté disponible para tu cuenta. La institución también debe permitir la versión de LTI que usa la herramienta. La plantilla de la demostración usa LTI 1.1.

[Consulta la guía ilustrada de la herramienta →](/es/guides/learning-tool/)

## Herramientas para desarrollo y pruebas {#tools-for-development-and-testing}

| Herramienta | Para qué te sirve | Código fuente público |
|---|---|---|
| LAMB LTI Test Tool | Ejercitar lanzamientos LTI 1.1, roles de docente y de estudiante, parámetros de lanzamiento y devolución de calificaciones con Basic Outcomes durante el desarrollo | [LTI Test Tool](https://github.com/Lamb-Project/lamb-lti-test-tool) |
| Moodle CLI | Trabajar con las API estándar de servicios web de Moodle desde la línea de comandos, dentro de los permisos de la cuenta | [Moodle CLI](https://github.com/Lamb-Project/moodle-cli) |
| LAMB CLI | Gestionar asistentes, bases de conocimiento, rúbricas, pruebas, analíticas y los flujos de agente admitidos desde el terminal | [LAMB CLI](https://github.com/Lamb-Project/lamb/tree/lamb-0.8/lamb-cli) |
| Plantilla de herramienta de LAMB | Empezar una aplicación educativa alojada por separado, con acceso autorizado a asistentes e integración con el LMS | [Plantilla de herramienta](https://github.com/Lamb-Project/lamb-tool-template) |

Usa la LTI Test Tool para inspeccionar y ensayar una integración, y valídala después en la configuración real del LMS de la institución. Su entorno de desarrollo no certifica la compatibilidad con Moodle ni con Canvas.

Moodle CLI y el conector de Moodle de LAMB usan servicios web estándar; no necesitan ningún plugin de Moodle a medida. Las operaciones disponibles dependen de los servicios habilitados, de los permisos de la cuenta y, en el caso del conector, de la política de la organización en LAMB.

## Conoce el contrato público {#understand-the-public-contract}

La API de creador de LAMB expone los modelos admitidos y las compleciones de chat mediante una interfaz compatible con OpenAI en los despliegues que tienen esa capacidad. La compatibilidad describe la interfaz admitida; no promete todos los endpoints ni todas las opciones de otro servicio.

Usa los identificadores de asistente que devuelve la API. Guarda las claves personales en el servidor de la herramienta, nunca en el JavaScript que llega a los estudiantes. Comprueba los requisitos de permisos y de versión antes de suponer que una respuesta vacía significa que una funcionalidad está rota.

El [repositorio de la plantilla](https://github.com/Lamb-Project/lamb-tool-template) incluye sus instrucciones públicas de instalación. Fija la revisión que pruebas y anota la versión de LAMB con la que la combinas. La guía de la plantilla enlaza a una revisión fechada en lugar de describir una descarga futura sin probar.

## Contribuye al proyecto {#contribute-to-the-project}

LAMB se distribuye con la licencia GPL v3. Puedes informar de un problema, mejorar la documentación, probar un cambio o proponer una contribución a través del [repositorio de código fuente](https://github.com/Lamb-Project/lamb).

[Prepara una contribución útil →](/es/developers/contribute/)

Si un agente de IA te ayuda a evaluar o desarrollar una herramienta, empieza por la [guía pública de lectura para agentes](/es/agents/). La documentación pública describe el uso admitido; la arquitectura interna y las notas de diseño no forman parte de este sitio web.
