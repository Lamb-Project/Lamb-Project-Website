---
title: Explora una herramienta de aprendizaje conectada a LAMB
description: Un recorrido real por la configuración del docente, el chat del estudiante y la devolución de calificaciones con la plantilla pública de herramienta.
translationKey: v08-learning-tool
weight: 5
aliases: [/guides/learning-tool/, /tool-template/]
---

**Para desarrolladores de aplicaciones y equipos de innovación docente.** Este recorrido muestra la plantilla pública [lamb-tool-template](https://github.com/Lamb-Project/lamb-tool-template/tree/c8c6f2fecc4a55da8e67574ce5857270552a7db5), capturada de nuevo el 17 de octubre de 2026 y conectada a LAMB 0.8. Usa un LMS de demostración, respuestas reales de un asistente y participantes sintéticos. No son capturas de un curso de Moodle en producción.

## Antes de empezar {#before-you-begin}

Necesitas una instalación de LAMB compatible, permiso para crear una clave de API personal de creador, un asistente publicado y disponible para esa cuenta, y una instalación local de la herramienta según el README de la plantilla. La plantilla de la demostración usa LTI 1.1 y la devolución de calificaciones de Basic Outcomes.

Pide a tu administrador que habilite el acceso a la API de creador donde haga falta. Guarda la clave de API en el servidor de la herramienta y usa una clave distinta para cada despliegue. Los estudiantes no necesitan esta clave. Fija la revisión de la plantilla y pruébala con tu despliegue de LAMB.

## 1. Configura la herramienta {#1-configure-the-tool}

Ejecuta la plantilla siguiendo el README público de la revisión comprobada. Abre su página de administración e introduce la dirección de LAMB, la clave de creador y las credenciales LMS de la herramienta. La plantilla espera la dirección raíz de LAMB y añade ella misma las rutas de la API; sigue su contrato de configuración en lugar de copiar una URL de otro cliente de la API.

{{< capture src="/images/guides/tool-admin.png" alt="Formulario de administración de la plantilla de herramienta con la dirección del servicio y campos de credenciales de solo escritura" caption="Administración de la plantilla conectada a la instancia local de LAMB 0.8, 17 de octubre de 2026. Los campos secretos están vacíos." >}}

## 2. Configura una actividad como docente {#2-set-up-an-activity-as-an-instructor}

Registra la herramienta local en la [LAMB LTI Test Tool](https://github.com/Lamb-Project/lamb-lti-test-tool) y lánzala como docente desde un curso de demostración. Elige el asistente publicado disponible. Para el ejercicio de devolución de calificaciones de más abajo, selecciona **Enable grade passback** y guarda los ajustes de la actividad.

{{< capture src="/images/guides/tool-setup.png" alt="Página de configuración del docente para seleccionar un asistente y configurar una actividad de aprendizaje" caption="Configuración del docente tras un lanzamiento firmado, con el asistente de demostración publicado de LAMB 0.8 disponible." >}}

## 3. Lanza como estudiante {#3-launch-as-a-learner}

Usa el lanzamiento de estudiante del LMS de prueba. Hazle una pregunta al asistente y comprueba su respuesta. El idioma del ejemplo viene de la configuración de su asistente; tu propia actividad puede usar otro idioma.

{{< capture src="/images/guides/tool-chat.png" alt="Chat del estudiante con una respuesta real de un asistente de LAMB a través de la plantilla de herramienta" caption="Una respuesta nueva del asistente RAG de LAMB 0.8 a través de la plantilla de herramienta, 17 de octubre de 2026: CORAL-19 y el martes a las 10:00." >}}

## 4. Revisa un resultado antes de enviarlo {#4-review-a-result-before-sending-it}

Vuelve como docente, examina la actividad e introduce una calificación de prueba deliberada. Envíala con la acción de devolución de calificaciones de la herramienta y comprueba después el valor en el LMS de prueba.

{{< capture src="/images/guides/tool-grade.png" alt="Panel del docente con controles de revisión y de devolución de calificaciones" caption="Vista de docente de la nueva actividad de demostración, 17 de octubre de 2026. En esta captura, la calificación de ejemplo está introducida pero no enviada." >}}

**Limitación conocida de esta revisión:** una calificación normalizada guardada, como `0.8`, se vuelve a cargar tal cual en un campo etiquetado 0–10. No reutilices el valor guardado que se muestra como si ya estuviera en la escala 0–10. Hay que corregir la conversión de la visualización y probar guardar → recargar → guardar antes de calificar en el aula. Este ejemplo no afirma que la herramienta esté lista para producción.

## 5. Evalúa el resultado completo {#5-evaluate-the-complete-result}

Comprueba la separación entre estudiante y docente, el acceso autorizado al asistente, la respuesta real y la calificación que registra el LMS. Una respuesta demuestra la conectividad para ese caso, no la calidad educativa. Que funcione con un LMS simulado local no equivale a la aceptación en el LMS de tu institución.

Para un despliegue real, acuerda con tu equipo institucional el alojamiento con HTTPS, los ajustes LTI admitidos, la gestión de credenciales, las copias de seguridad y el soporte. Usa las instrucciones públicas de instalación y de interfaz de la revisión elegida. Esta guía se centra a propósito en el uso de la herramienta, en lugar de reproducir la arquitectura interna de LAMB.

[Punto de partida para desarrolladores](/es/developers/) · [Planificación operativa](/es/institutions/operations/)
