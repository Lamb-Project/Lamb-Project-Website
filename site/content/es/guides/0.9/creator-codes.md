---
title: "Da a los docentes su cuenta con un código de creador"
description: "Crea códigos de creador para tu organización y escribe el texto que leen los docentes. Como docente, introduce un código la primera vez que abres una actividad de LAMB desde el LMS y muévete entre la actividad y LAMB Creator."
translationKey: v09-creator-codes
weight: 1
---

**Para administradores de organización y docentes.** En LAMB 0.9, un docente que abre una actividad de LAMB desde el LMS y no tiene cuenta en LAMB Creator puede crearla en ese momento, con un **código de creador** de su institución. El administrador crea los códigos y los reparte. El docente escribe uno, una sola vez.

Las capturas son reales, de la versión candidata 0.9, con organizaciones, personas y curso inventados. Muestran la interfaz en inglés; el texto usa los nombres que ves con LAMB en español. [Sobre las capturas](#screenshots).

## Antes de empezar {#before-you-start}

- Tu institución usa **LAMB 0.9** y su LMS tiene la herramienta de actividades de LAMB. [Conecta LAMB y Moodle](/es/guides/0.8/moodle/) muestra la configuración con LTI 1.1; las [notas de la versión 0.9](/es/releases/0.9/#lti-13) tratan LTI 1.3.
- Los códigos son de una **organización** distinta de la organización del sistema. La organización del sistema no emite códigos.
- Los administradores necesitan el rol de administrador en esa organización. Los docentes necesitan el rol de profesor en el curso del LMS.

Un código solo sirve a una persona que el LMS presenta como docente, y solo en la página que LAMB devuelve cuando esa persona abre una actividad. Un estudiante no puede usarlo, y nadie puede usarlo desde fuera del LMS. Dentro de esos límites, cualquier docente que tenga el código puede entrar en tu organización mientras el código esté activo: usa la fecha de caducidad, el límite de usos y el botón **Desactivar** para mantener el control.

## Administradores: crea un código {#create-a-code}

1. Inicia sesión en LAMB Creator y abre **Admin Org → Settings → LTI Creator**. Baja hasta **Códigos de creador**.
2. En **Nuevo código**, escribe una **Etiqueta**, por ejemplo el cuatrimestre o la facultad. La etiqueta es para ti: los docentes no la ven. Añade una **Fecha de caducidad**, un **Límite de usos**, las dos cosas o ninguna.

   {{< capture src="/images/guides/0.9/creator-codes-admin-new.png" alt="La sección Creator codes de una organización que todavía no tiene códigos: el formulario New code con la etiqueta Autumn term 2026 y el límite de usos 30 y, debajo, el texto para docentes sin cuenta" caption="Un primer código para el cuatrimestre de otoño, para treinta docentes como máximo. Datos de demostración." details="#screenshots" >}}

3. Pulsa **Crear código**. LAMB muestra el código una sola vez: tres grupos de cuatro caracteres. Pulsa **Copiar**, pásalo a tus docentes y después pulsa **Ya lo he guardado**.
4. A partir de ese momento, la lista muestra los cuatro últimos caracteres del código, su estado, cuántos docentes lo han usado y cuándo caduca. LAMB no conserva el código, así que no puede volver a mostrarlo. Si se pierde un código, crea otro.

   {{< capture src="/images/guides/0.9/creator-codes-admin-list.png" alt="La lista de códigos de creador: Summer school 2027, desactivado, 0 de 10 usos; Autumn term 2026, activo, 1 de 30 usos; un aviso dice que el primero se ha desactivado; debajo, el texto de la organización" caption="Un docente ha usado el código de otoño. El de verano está desactivado hasta que haga falta. Datos de demostración." details="#screenshots" >}}

**Desactivar** detiene un código al instante y **Activar** lo recupera. Desactivar un código no afecta a las cuentas que ya se crearon con él. Un código cuya fecha ha pasado aparece como **Caducado**; uno que ha llegado a su límite, como **Agotado**.

## Administradores: escribe el texto que leen los docentes {#write-the-text}

Un docente que llega sin cuenta, y quizá sin código, necesita saber a quién pedirlo. En la misma pantalla, **Texto para docentes sin cuenta** contiene ese mensaje: escríbelo en **Texto de esta organización** y pulsa **Guardar texto**. **Restaurar el texto predeterminado** vuelve al texto por defecto.

Dónde aparece el texto depende de cómo esté conectado el LMS:

- **Con LTI 1.1**, LAMB no conoce la organización del docente hasta que se introduce el código, así que la página muestra el **texto predeterminado de la instalación**. Lo escribe el administrador del sistema en esta misma pantalla, en la organización del sistema. El texto de tu organización aparece bajo el mensaje cuando se rechaza uno de tus códigos por estar desactivado, caducado o agotado.
- **Con LTI 1.3**, cuando el registro del LMS está habilitado para una sola organización, la página muestra desde el principio el texto de esa organización.

## Docentes: introduce el código {#enter-the-code}

1. En tu curso, abre la actividad de LAMB. En lugar de la actividad recibes la página **Set up this activity with LAMB** (configura esta actividad con LAMB), con el mensaje de tu institución.

   {{< capture src="/images/guides/0.9/creator-codes-teacher-page.png" alt="La página Set up this activity with LAMB: el LMS te ha identificado como docente en Databases 101, el mensaje de la institución en un recuadro azul, un campo Creator code y el botón Create my account and continue" caption="Lo que ve un docente sin cuenta al abrir la actividad. El recuadro azul es el texto propio de la institución. Datos de demostración." details="#screenshots" >}}

2. Escribe el código en **Creator code**. Las mayúsculas, los espacios y los guiones no importan. Pulsa **Create my account and continue** (crear mi cuenta y continuar).
3. LAMB Creator se abre en la misma ventana, con tu sesión ya iniciada. Tu nombre está arriba, con tu organización debajo. Una barra dice desde qué actividad has llegado y ofrece **Volver a la actividad**.

   {{< capture src="/images/guides/0.9/creator-codes-in-creator.png" alt="LAMB Creator, página Learning Assistants, para Robin Vale en Tutorial University: Engineering; una barra dice You came from the activity in Databases 101, con el botón Back to the activity" caption="Directamente en LAMB Creator, con el camino de vuelta a la actividad. Datos de demostración." details="#screenshots" >}}

4. [Crea un asistente](/es/guides/0.8/first-assistant/) y publícalo. Una actividad necesita al menos un asistente publicado.
5. Pulsa **Volver a la actividad**, elige el tipo de actividad y los asistentes, y guarda. [Conecta LAMB y Moodle](/es/guides/0.8/moodle/) recorre la página de configuración.

   {{< capture src="/images/guides/0.9/creator-codes-activity.png" alt="LAMB Activity Setup del curso Databases 101: la organización Tutorial University: Engineering, el enlace Add an organization with a creator code, el botón Open LAMB Creator, los tipos de actividad y un aviso de que no se han encontrado asistentes publicados" caption="De vuelta en la actividad. Mientras no haya un asistente publicado, la página lo dice y ofrece LAMB Creator. Datos de demostración." details="#screenshots" >}}

El código se pide una sola vez. Desde entonces, abrir esta o cualquier otra actividad de LAMB desde el mismo LMS te lleva a la actividad.

Tu cuenta no tiene contraseña: entras en LAMB abriendo una actividad desde el LMS. En esta versión, la página que pide el código está en inglés, sea cual sea el idioma en que uses LAMB.

## Si el código se rechaza {#if-refused}

La página conserva el campo y dice por qué. Los mensajes están en inglés.

{{< capture src="/images/guides/0.9/creator-codes-teacher-refused.png" alt="La misma página con un mensaje en rojo: That code is not valid. Check it and try again. El campo Creator code está vacío y listo para otro intento" caption="Un código que no existe. Datos de demostración." details="#screenshots" >}}

| Mensaje | Qué significa | Qué hacer |
|---|---|---|
| That code is not valid. Check it and try again. | No existe ningún código así en este LAMB. | Revisa los caracteres. Los códigos nunca contienen 0, O, 1 ni I. |
| This code is no longer active. | Un administrador lo ha desactivado. | Pide un código vigente. El texto de la organización, bajo el mensaje, dice a quién. |
| This code has expired. | Su fecha ha pasado. | Pide un código vigente. |
| This code has reached its limit of uses. | Lo han usado tantos docentes como permitía. | Pide un código vigente. |
| Too many attempts. Wait a few minutes, then open the activity from your LMS again. | Cinco intentos rechazados en quince minutos. | Espera quince minutos y vuelve a abrir la actividad. |
| You already have an account in this organization. Go back and choose it. | El código es de una organización a la que ya perteneces. | Vuelve atrás y elige esa organización. |
| This code belongs to an organization that your LMS is not connected to. | Con LTI 1.3, el código tiene que ser de una organización habilitada para tu LMS. | Pregunta a tu administrador. |
| Your LAMB account in this organization is disabled. | Un administrador ha desactivado tu cuenta. | Pregunta a tu administrador. |
| Session expired. | La página ha estado abierta más de quince minutos. | Vuelve a abrir la actividad desde el LMS. |

## Más de una organización {#several-organizations}

Un docente puede tener cuenta en varias organizaciones del mismo LAMB, por ejemplo dos facultades, cada una con su código.

1. En la página de configuración de la actividad, pulsa **Añadir una organización con un código de creador**.

   {{< capture src="/images/guides/0.9/creator-codes-add-organization.png" alt="La página Add an organization: ya trabajas en LAMB; con un código de creador de otra organización consigues también una cuenta allí; un campo Creator code, el botón Add this organization y el enlace Back to your organizations" caption="Añadir una segunda organización con su propio código. Datos de demostración." details="#screenshots" >}}

2. Introduce el código de la otra organización y pulsa **Add this organization** (añadir esta organización).
3. La página de configuración muestra ahora tus organizaciones. Elige aquella a la que pertenece esta actividad: sus asistentes son los que puedes ofrecer en ella. **Después no se puede cambiar.**

   {{< capture src="/images/guides/0.9/creator-codes-two-organizations.png" alt="LAMB Activity Setup con Choose Organization: Tutorial University: Engineering y Tutorial University: Education, la segunda seleccionada, y la advertencia This cannot be changed later" caption="Una actividad pertenece a una sola organización. Datos de demostración." details="#screenshots" >}}

En LAMB Creator, la organización que aparece bajo tu nombre se convierte en un menú. **Cambiar de organización** te lleva a otra de tus organizaciones sin volver al LMS.

{{< capture src="/images/guides/0.9/creator-codes-change-organization.png" alt="LAMB Creator con el menú de organización abierto bajo el nombre Robin Vale: Change organization, Tutorial University: Education marcada como actual y Tutorial University: Engineering" caption="Cambio de organización dentro de LAMB Creator. Datos de demostración." details="#screenshots" >}}

## Entre la actividad y LAMB Creator {#activity-and-creator}

- LAMB se queda en la ventana que abrió el LMS. **Abrir LAMB Creator**, en las páginas de la actividad, te lleva a LAMB Creator; **Volver a la actividad** te trae de vuelta.
- Esto funciona hasta **cuatro horas** después de abrir la actividad desde el LMS. Pasado ese tiempo, o cuando una página responda "Session expired", vuelve a abrir la actividad desde el LMS. Una página de configuración que lleve abierta más de dos horas también caduca.
- Cada pestaña del navegador recuerda su propia actividad. Abrir otra actividad en otra pestaña no cambia adónde vuelve la primera.
- Dos pestañas no mantienen dos organizaciones: cuando cambias de organización en una pestaña, LAMB Creator cambia también en la otra.

## Lo que un código no hace {#limits}

- No convierte a nadie en administrador. Un administrador del sistema puede promover una cuenta después.
- No da una contraseña. Los docentes que entran en LAMB con un correo y una contraseña siguen haciéndolo así: un lanzamiento desde el LMS no les abre sesión en LAMB Creator.
- No es la clave de registro de la organización, que pertenece al formulario de registro de la página de inicio de sesión de LAMB. Cada una se rechaza en el lugar de la otra.
- Es independiente de la herramienta LTI Creator de la organización, descrita en "Acceso de los docentes a Creator" de [Elige tu vía de entrada desde el LMS](/es/guides/0.8/lti/). Esa herramienta da una cuenta a quien la abre desde el LMS; un código de creador sirve a los docentes que llegan a través de una actividad.

**Resultado esperado:** como administrador, tienes un código activo, sabes cuántos docentes lo han usado, y los docentes sin código leen a quién pedirlo. Como docente, tienes una cuenta de LAMB Creator en tu organización, has creado y publicado un asistente y tu actividad está configurada, sin pedir a nadie que te cree la cuenta.

## Sobre las capturas {#screenshots}

Las imágenes son capturas reales de LAMB 0.9 (etiqueta de versión `v0.9-dev.1`), tomadas el 15 de noviembre de 2026 en un despliegue de pruebas con la versión candidata. Las organizaciones, las personas, el curso y las direcciones son inventados, y los lanzamientos desde el LMS los firmó un script de pruebas igual que los firma un LMS. Ninguna imagen muestra un código de creador: el panel que muestra una vez un código nuevo no se fotografió.
