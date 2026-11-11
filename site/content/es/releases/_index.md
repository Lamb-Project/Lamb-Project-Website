---
title: Notas de versión
description: Qué ha cambiado en cada versión de LAMB, por qué ha cambiado y qué tiene que hacer una instalación al respecto.
translationKey: releases
weight: 9
---

Estas páginas recogen lo que añade y cambia cada versión de LAMB, el motivo de cada cambio y lo que tiene que hacer un administrador al actualizar. Se han escrito contrastándolas con el código: cada entrada indica la incidencia pública o el lugar del código fuente donde se puede comprobar.

| Versión | Estado a 11 de noviembre de 2026 | Notas |
|---|---|---|
| **0.9** | Versión candidata, en la rama de desarrollo desde el 11 de noviembre de 2026. Sin etiquetar. | [Novedades de LAMB 0.9](/es/releases/0.9/): LTI 1.3 para las actividades de curso, filtros del prompt, modo Auto de LAMB LEGATUS, análisis de actividad de los asistentes |
| **0.8** | Etiquetada como `v0.8` el 11 de noviembre de 2026. | [Novedades de LAMB 0.8](/es/releases/0.8/): actividades de curso como módulos, evaluación de archivos, LLM access. [Código fuente en la etiqueta](https://github.com/Lamb-Project/lamb/tree/v0.8) |
| **0.7** | Etiquetada como `v0.7` el 20 de octubre de 2026. | [Novedades de LAMB 0.7](/es/releases/0.7/): LAMB LEGATUS, la conexión con Moodle, acceso de soporte, claves de API de creador. [Código fuente en la etiqueta](https://github.com/Lamb-Project/lamb/tree/v0.7) |

## Si vienes de la 0.7 {#coming-from-07}

Una instalación que pasa de la 0.7 a la 0.9 recibe juntos los cambios de la 0.8 y los de la 0.9, porque la 0.9 está construida sobre la 0.8. Lee las dos páginas. La versión corta:

- **No se elimina nada de lo existente.** La publicación de asistentes individuales, el acceso a Creator desde el LMS y la herramienta de actividades con LTI 1.1 siguen funcionando como antes. LTI 1.3 es un añadido a la herramienta de actividades, no un sustituto.
- **Tres tipos de actividad de curso** sustituyen a la única actividad de chat: chat, evaluación de archivos y LLM access. El docente elige uno en el primer lanzamiento.
- **La base de datos se actualiza sola** cuando arranca la versión nueva (cinco migraciones, las números 28, 31, 33, 34 y 35). Haz antes una copia de seguridad de la base de datos, como en cualquier actualización.
- **Cambia un comportamiento para las conversaciones en curso.** A partir de la 0.9, una conversación conserva el prompt del sistema con el que empezó. Consulta las [notas de actualización](/es/releases/0.9/#upgrade-notes) antes de elegir el día.
- **Dos funcionalidades necesitan a un administrador antes de que nadie las vea:** LTI 1.3 (registra tu LMS) y LLM access (despliega la pasarela opcional).

## Cómo leer el estado {#status}

Una **versión candidata** es una versión en pruebas. Funciona en la instancia de desarrollo del proyecto y todavía puede cambiar antes de que se etiquete. Una versión **etiquetada** es la que se espera que ejecuten las instalaciones. La etiqueta de la esquina superior izquierda de LAMB Creator muestra la versión que ejecuta una instalación, y lo que ve un docente depende además de lo que la organización haya habilitado. Consulta [Versiones y disponibilidad de funcionalidades](/es/availability/).

Las guías ilustradas siguen en [Guías y versiones](/es/guides/). Documentan la 0.8; cuando la 0.9 cambia el procedimiento de una guía, las notas de la 0.9 lo indican.
