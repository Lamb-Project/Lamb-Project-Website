---
title: Trabaja con LAMB LEGATUS
description: Usa el agente integrado de LAMB para docentes para crear, mejorar y probar asistentes, con tu aprobación antes de que cambie nada.
translationKey: v08-legatus
weight: 3
aliases: [/guides/legatus/]
---

**Para docentes.** LAMB LEGATUS es el agente integrado de LAMB para docentes. Describes lo que quieres con palabras sencillas, y te ayuda a crear y mejorar asistentes, trabajar con bases de conocimiento y rúbricas, escribir y ejecutar pruebas, y orientarte en LAMB. Actúa en tu nombre, y las decisiones siguen siendo tuyas: los cambios en tu trabajo esperan tu aprobación. El nombre viene del legatus romano, que actuaba en nombre del Senado.

Las capturas muestran LAMB 0.8 el 17 de octubre de 2026 con contenido sintético y un modelo local. Tu organización puede usar otro modelo.

## Ábrelo {#open-it}

Elige el botón azul oscuro **LAMB LEGATUS** de la barra superior, junto a tu nombre. Se abre un panel al lado de la página en la que estás trabajando, así que puedes ver cómo cambia LAMB mientras conversas. En un teléfono, el panel ocupa toda la pantalla y tiene un botón **Back to LAMB**.

La cabecera del panel tiene **New conversation**, **History** y **Escenarios de aprendizaje**. Si has descrito escenarios de aprendizaje (tu público, tu propósito y tus restricciones), una conversación nueva te pregunta primero cuál usar. **History** muestra tus conversaciones guardadas para que puedas buscarlas y retomarlas.

{{< capture src="/images/guides/legatus-welcome.png" alt="Panel de LAMB LEGATUS abierto junto a la lista Asistentes de Aprendizaje, con su mensaje de bienvenida" caption="Una conversación nueva de LAMB LEGATUS junto a la página Asistentes de Aprendizaje, LAMB 0.8, 17 de octubre de 2026." >}}

## Cuatro cosas para probar {#four-things-to-try}

1. **Crea un asistente.** "Crea un asistente llamado Stats Tutor para estudiantes de primer curso que responda solo a partir de mi base de conocimiento Statistics notes." LAMB LEGATUS propone el asistente y muestra una tarjeta con un botón **Crear**.
2. **Mejora sus instrucciones.** "Cambia las instrucciones de Stats Tutor para que dé pistas en lugar de soluciones completas." La tarjeta indica que se actualizarán las instrucciones y ofrece **Aprobar**, **Editar propuesta** y **Cancelar**.
3. **Pruébalo.** "Genera tres casos de prueba para Stats Tutor y dime qué respuestas no tienen en cuenta los apuntes." Propone casos, los guarda cuando estás de acuerdo, y puede ejecutarlos y evaluarlos. Guardar y ejecutar pruebas no necesita tarjeta de aprobación.
4. **Usa tu curso de Moodle.** Si tu organización ha activado el conector de Moodle y has conectado tu cuenta: "Crea una base de conocimiento llamada Unit 1 readings a partir de la carpeta Readings de mi curso de Moodle." Consulta [Conecta LAMB y Moodle](/es/guides/0.8/moodle/).

{{< capture src="/images/guides/legatus-improve-prompt.png" alt="Tarjeta de aprobación de LAMB LEGATUS para actualizar las instrucciones de un asistente" caption="Una propuesta para actualizar las instrucciones de un asistente, pendiente de aprobación. Todavía no ha cambiado nada." >}}

{{< capture src="/images/guides/legatus-tests-saved.png" alt="Tres casos de prueba guardados por LAMB LEGATUS y mostrados en la pestaña Tests del asistente" caption="Después de que el docente pidiera guardar los tres casos propuestos, LAMB LEGATUS los guardó sin tarjeta de aprobación y abrió la pestaña Tests. Las pruebas todavía no se han ejecutado." >}}

Después, comprueba tú el resultado: abre el asistente, chatea con él y lee los [resultados de las pruebas](/es/guides/0.8/testing/).

## Cómo funcionan las aprobaciones, y por qué {#how-approvals-work-and-why}

LAMB LEGATUS lee libremente, pero pregunta antes de cambiar tu trabajo. Crear, actualizar, publicar, despublicar o borrar un asistente, cambiar una base de conocimiento, una rúbrica, una plantilla o un escenario de aprendizaje, y cada importación o escritura en Moodle muestran antes una tarjeta de aprobación.

La tarjeta muestra los campos clave y, cuando tu organización tiene un modelo pequeño y rápido, una frase sencilla que explica lo que va a pasar. En una importación, muestra el origen, el destino y cada archivo. Puedes:

- **Aprobar** (o **Crear**, o **Crear e importar**) para ejecutar exactamente lo que muestra la tarjeta;
- **Editar propuesta** y describir qué cambiar;
- **Cancelar**.

También funciona escribir sí o no en la conversación. Si pides otra cosa mientras hay una propuesta pendiente, LAMB LEGATUS te dice que la propuesta sigue esperando y no hace nada más en ese turno. Si revisa una propuesta, aparece una tarjeta nueva: aprueba la tarjeta que ves, no la que esperabas. Donde el conector de Moodle está activado, marca **Modo avanzado** en la página Tu Moodle para ver en cada tarjeta el comando exacto y la nueva configuración completa.

Estas acciones se ejecutan sin tarjeta: leer, chatear con un asistente para comprobarlo, añadir, ejecutar y evaluar pruebas, generar una rúbrica, abrirte una página de LAMB y leer Moodle. Abrir una página nunca la rellena ni la envía.

El motivo es la rendición de cuentas. Tú eres responsable de lo que usan tus estudiantes, así que el cambio que apruebas es el cambio que hace LAMB, y puedes verlo antes de que ocurra.

## Lo que no puede hacer {#what-it-cannot-do}

- Elegir o subir archivos de tu ordenador. En su lugar, te guía por la pantalla Bases de Conocimiento.
- Configurar la actividad del curso en tu LMS. Ese paso lo haces tú, y se describe en la [guía LTI](/es/guides/0.8/lti/).
- Cambiar los modelos, los proveedores o los ajustes de tu organización.
- Calificar en bloque. Guardar una calificación en Moodle está desactivado salvo que tu organización lo active, y entonces es un estudiante y una aprobación cada vez. Publicar en foros también está desactivado salvo que se active.
- Pedirte tu token de Moodle, o tratar el texto del contenido de Moodle como instrucciones o como aprobación.
- Cambiar de idioma a mitad de conversación. La conversación mantiene el idioma fijado al empezar: el idioma de tu interfaz (inglés, español, catalán o euskera), o el idioma alternativo que tu organización haya definido para ese idioma. Empieza una conversación nueva para cambiarlo.

## Qué modelo, y qué datos le llegan {#which-model-and-what-data-reaches-it}

El administrador de tu organización elige el modelo en **Admin Org > Settings > API**, en la sección **LAMB LEGATUS**. Puede ser el modelo por defecto de la organización o un modelo concreto compatible con OpenAI o de Ollama. Si no hay ningún modelo configurado, LAMB LEGATUS no está disponible, en lugar de pasar a otro proveedor. Los docentes no pueden cambiarlo; pregunta a tu administrador.

{{< capture src="/images/guides/legatus-settings.png" alt="Ajustes de LAMB LEGATUS de la organización con proveedor, modelo, paquete de conocimiento, modelo auxiliar y soporte de idiomas" caption="La sección LAMB LEGATUS de los ajustes de la organización, visible solo para los administradores de la organización. Recortada a esta sección. El modelo es un ejemplo." >}}

El modelo recibe la conversación entera: tus mensajes y lo que LAMB LEGATUS lee por ti, como las instrucciones de los asistentes, pasajes de las bases de conocimiento, entradas y respuestas de las pruebas, los chats guardados de tus estudiantes si preguntas por la actividad, y nombres, publicaciones y calificaciones de Moodle. Un modelo pequeño y rápido aparte, si tu organización lo configura, redacta la frase de aprobación a partir de los detalles de la acción propuesta y lee los documentos de Moodle que LAMB LEGATUS abre sin importarlos. Sin modelo pequeño no hay frase en lenguaje sencillo en la tarjeta, y los documentos los lee el modelo de LAMB LEGATUS. Las credenciales del proveedor nunca se envían al modelo. Con un proveedor local, estos datos se quedan en las instalaciones de tu institución; con un proveedor externo, salen de ellas.

Las conversaciones te pertenecen y se guardan en **History**. Borrar una la archiva en lugar de eliminarla, y el servidor también guarda un registro de cada sesión. Pregunta a tu administrador cuánto tiempo se conservan. Consulta también la página de [privacidad](/es/privacy/).

**Resultado esperado:** puedes abrir LAMB LEGATUS, pedirle que mejore y pruebe un asistente, leer cada tarjeta de aprobación antes de que cambie nada, y saber a qué modelo llega tu conversación.
