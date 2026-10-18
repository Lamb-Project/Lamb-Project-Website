---
title: "Prova abans de publicar"
description: "Registra el comportament esperat, fes preguntes reals i revisa les respostes desades."
translationKey: v08-testing
weight: 3
aliases: [/guides/testing/]
---

**Necessites:** un assistent desat i accés a la seva pestanya **Tests**. Executar una prova fa servir el model configurat i pot tenir costos. Les captures mostren LAMB 0.8 el 17 d’octubre de 2026.

## 1. Escriu què fa una bona resposta {#1-write-down-what-a-good-answer-does}

Comença amb tres casos: una pregunta normal d’un estudiant, una pregunta que els materials no poden respondre i un intent de fer que l’assistent ignori el seu propòsit. En una activitat conversacional, inclou una pregunta de seguiment que depengui d’un intercanvi anterior.

«La resposta sona segura» no és un criteri d’acceptació útil. «Identifica la norma correcta del curs i no s’inventa cap termini» és una cosa que pots comprovar.

## 2. Desa un cas de prova {#2-save-a-test-case}

Obre **Tests → + Afegir cas de prova**. Introdueix un títol, el **Student message / test prompt**, el tipus de cas de prova disponible i l’**Expected behavior**. La interfície il·lustrada ofereix Normal, Multi-turn i Adversarial. Fes clic a **Add** per desar-lo.

{{< capture src="/images/guides/tests-add.png" alt="Formulari per afegir un cas de prova amb el missatge de l’estudiant, el tipus de cas i el comportament esperat" caption="Un cas de prova nou per a l’assistent RAG de demostració a LAMB 0.8, 17 d’octubre de 2026." >}}

## 3. Executa i examina {#3-run-and-inspect}

Fes servir **Run** per a un cas o **Run All** per al conjunt desat. Espera els resultats i després obre una execució desada i llegeix-ne la resposta real. Un temps d’espera esgotat no demostra que no s’hagi desat cap execució; revisa l’historial abans de tornar-ho a provar.

**Debug** i **Debug All (bypass)** examinen com es munta el prompt sense cap crida al model de compleció. No demostren la qualitat de la resposta, i la recuperació encara pot fer servir altres serveis. No equiparis el mode de depuració amb una garantia de cost de punta a punta.

{{< capture src="/images/guides/tests-run.png" alt="Cas de prova desat amb els controls individuals Run i Debug i les accions per lots" caption="Controls de prova de LAMB 0.8 i una execució desada, 17 d’octubre de 2026. Desplega l’execució per examinar-ne la resposta." >}}

{{< capture src="/images/guides/tests-result.png" alt="Execució de prova de LAMB 0.8 desplegada amb la seva entrada i la resposta real" caption="La resposta desada identifica CORAL-19 i dimarts a les 10:00. Revisa la resposta sencera respecte al comportament esperat." >}}

## 4. Revisa, millora i torna a executar {#4-review-improve-and-rerun}

Compara la resposta amb l’expectativa. Fes servir **Evaluate** per registrar el teu judici i les teves notes. Si canvies l’assistent, desa el canvi i torna a executar els casos afectats. Revisa els suggeriments de LAMB LEGATUS abans de refiar-te’n.

**Resultat esperat:** tens exemples desats tant de la pregunta com de la resposta observada, amb un judici lligat al teu propòsit d’aprenentatge. Superar un conjunt petit de casos no demostra que l’assistent sigui correcte en tots els casos.

[Següent: publica a través de l’LMS de la teva institució →](/ca/guides/0.8/publishing/)
