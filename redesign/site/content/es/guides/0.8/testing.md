---
title: Prueba antes de publicar
description: Registra el comportamiento esperado, lanza preguntas reales y revisa las respuestas guardadas.
translationKey: v08-testing
weight: 3
aliases: [/guides/testing/]
---

**Necesitas:** un asistente guardado y acceso a su pestaña **Tests**. Ejecutar una prueba usa el modelo configurado y puede generar costes. Las capturas muestran LAMB 0.8 el 17 de octubre de 2026.

## 1. Escribe qué hace una buena respuesta {#1-write-down-what-a-good-answer-does}

Empieza con tres casos: una pregunta normal de un estudiante, una pregunta que los materiales no pueden responder y un intento de que el asistente ignore su propósito. Para una actividad conversacional, incluye una pregunta de seguimiento que dependa de un intercambio anterior.

«La respuesta suena segura» no es un criterio de aceptación útil. «Identifica la normativa correcta de la asignatura y no se inventa ninguna fecha límite» es algo que puedes comprobar.

## 2. Guarda un caso de prueba {#2-save-a-test-case}

Abre **Tests → + Añadir caso de prueba**. Escribe un título, el **Student message / test prompt**, el tipo de caso de prueba disponible y el **Expected behavior**. La interfaz que se muestra ofrece Normal, Multi-turn y Adversarial. Haz clic en **Add** para guardar.

{{< capture src="/images/guides/tests-add.png" alt="Formulario Añadir caso de prueba con el mensaje del estudiante, el tipo de caso y el comportamiento esperado" caption="Un nuevo caso de prueba para el asistente RAG de demostración en LAMB 0.8, 17 de octubre de 2026." >}}

## 3. Ejecuta e inspecciona {#3-run-and-inspect}

Usa **Run** para un caso o **Run All** para el conjunto guardado. Espera los resultados y después abre una ejecución guardada y lee su respuesta real. Un tiempo de espera agotado no demuestra que no se haya guardado ninguna ejecución; revisa el historial antes de volver a intentarlo.

**Debug** y **Debug All (bypass)** inspeccionan cómo se monta el prompt sin llamar al modelo de compleción. No establecen la calidad de la respuesta, y la recuperación puede seguir implicando otros servicios. No equipares la depuración con una garantía de coste de extremo a extremo.

{{< capture src="/images/guides/tests-run.png" alt="Caso de prueba guardado con los controles individuales Run y Debug y las acciones por lotes" caption="Controles de prueba de LAMB 0.8 y una ejecución guardada, 17 de octubre de 2026. Despliega la ejecución para inspeccionar su respuesta." >}}

{{< capture src="/images/guides/tests-result.png" alt="Ejecución de prueba desplegada en LAMB 0.8 con su entrada y su respuesta real" caption="La respuesta guardada identifica CORAL-19 y el martes a las 10:00. Revisa la respuesta completa frente al comportamiento esperado." >}}

## 4. Revisa, mejora y vuelve a ejecutar {#4-review-improve-and-rerun}

Compara la respuesta con lo que esperabas. Usa **Evaluate** para registrar tu juicio y tus notas. Si cambias el asistente, guarda el cambio y vuelve a ejecutar los casos afectados. Revisa las sugerencias de LAMB LEGATUS antes de confiar en ellas.

**Resultado esperado:** tienes ejemplos guardados tanto de la pregunta como de la respuesta observada, con un juicio vinculado a tu propósito de aprendizaje. Superar un conjunto pequeño de casos no establece una corrección universal.

[Siguiente: publica a través del LMS de tu institución →](/es/guides/0.8/publishing/)
