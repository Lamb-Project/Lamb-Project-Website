---
title: Prepara una instalación de LAMB 0.8
description: Elige una revisión, sigue las instrucciones de despliegue y comprueba el servicio antes de un piloto docente.
translationKey: v08-installation
weight: 8
aliases: [/guides/installation/]
---

**Para administradores de sistemas.** Empieza en un entorno de pruebas aislado. Esta edición de revisión se centra en la candidata 0.8; no anuncia una versión estable ni sustituye el proceso de despliegue de tu institución.

## 1. Elige la versión que vas a ejecutar {#1-select-the-version-you-will-run}

Usa la [línea de código fuente de LAMB 0.8](https://github.com/Lamb-Project/lamb/tree/lamb-0.8). Anota la revisión exacta que despliegas y usa su documentación. No combines instrucciones de otra rama con los contenedores que has elegido.

Las referencias siguientes están fijadas a la candidata revisada para esta edición, `ee28560e`:

- [Instrucciones de instalación con Docker](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/deployLocal.md).
- [Referencia de despliegue en producción](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/deployNext.md).
- [README del repositorio](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/README.md).

Algunos documentos de despliegue conservan el nombre **LAMB NEXT**. Usa los archivos y la configuración de la revisión elegida en lugar de tratar ese nombre como si fuera otra versión. La rama predeterminada de la guía general de instalación no sustituye a elegir explícitamente la candidata 0.8.

## 2. Prepara el entorno {#2-prepare-the-environment}

Prepara Git, Docker y Docker Compose v2 para la vía de contenedores documentada. Decide el directorio de instalación y los puertos, los proveedores de generación y de embeddings, las direcciones de los servicios y los ajustes iniciales de administración. Guarda las credenciales fuera de los repositorios públicos y de las capturas de pantalla.

Una instalación local con Docker y un servicio en producción tienen requisitos distintos. Un despliegue abierto a estudiantes necesita una dirección institucional, HTTPS, una política de acceso, copias de seguridad y un responsable de operación con nombre. [Planifica esas responsabilidades](/es/institutions/operations/) antes de invitar a un curso.

## 3. Sigue la guía de despliegue elegida {#3-follow-the-selected-deployment-guide}

Usa la plantilla de entorno y las instrucciones de despliegue de esa revisión. Configura de forma explícita los servicios de modelo y de embeddings previstos. Que la página web funcione no demuestra que el acceso a los modelos, la recuperación o la conexión con el LMS estén listos.

En una instalación existente, haz una copia de seguridad de los datos persistentes y ensaya la actualización en una copia aparte. Confirma una restauración antes de cambiar el servicio que usan docentes o estudiantes.

## 4. Comprueba un flujo docente pequeño {#4-verify-a-small-teaching-workflow}

1. Inicia sesión con la cuenta de creador y la organización previstas.
2. Crea un asistente y obtén una respuesta del modelo configurado.
3. Añade un documento de curso sintético y comprueba que se recupera un pasaje conocido.
4. Publica el asistente y prueba la [vía de entrada LTI](/es/guides/0.8/lti/) que hayas elegido con cuentas de docente y de estudiante de demostración.
5. Revisa los controles de la actividad que correspondan, la política de conversaciones y cualquier devolución de calificaciones.
6. Confirma quién se encargará de las actualizaciones, las solicitudes de acceso y las incidencias.

**Resultado esperado:** un piloto documentado y repetible sobre una revisión conocida, con el flujo docente comprobado y un responsable de operación asignado.

## ¿Quieres hablar de la instalación? {#want-to-discuss-the-setup}

El equipo de LAMB ofrece [formación](/es/contact/#training) y [consultoría](/es/contact/#consultancy); la consultoría puede empezar con una demostración. Escribe a contact-lamb-project@proton.me e indica qué entorno y qué flujo docente estás considerando.
