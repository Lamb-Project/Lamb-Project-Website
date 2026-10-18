---
title: Prestatu LAMB 0.8 instalazio bat
description: Hautatu berrikuspen bat, jarraitu hedapen-jarraibideak eta egiaztatu zerbitzua irakaskuntzako pilotu-proba baten aurretik.
translationKey: v08-installation
weight: 8
aliases: [/guides/installation/]
---

**Sistema-administratzaileentzat.** Hasi proba-ingurune isolatu batean. Azterketa-edizio honek 0.8 hautagaia du helburu; ez du bertsio egonkorrik iragartzen, ezta zure instituzioaren hedapen-prozesua ordezten ere.

## 1. Hautatu exekutatuko duzun bertsioa {#1-select-the-version-you-will-run}

Erabili [LAMB 0.8 iturburu-lerroa](https://github.com/Lamb-Project/lamb/tree/lamb-0.8). Erregistratu hedatzen duzun berrikuspen zehatza eta erabili bere dokumentazioa. Ez nahastu beste adar bateko jarraibideak hautatutako edukiontziekin.

Beheko erreferentziak edizio honetarako aztertutako hautagaiari lotuta daude, `ee28560e`:

- [Docker bidezko instalazio-jarraibideak](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/deployLocal.md).
- [Ekoizpen-hedapenerako erreferentzia](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/deployNext.md).
- [Biltegiaren README fitxategia](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/README.md).

Hedapen-dokumentu batzuek **LAMB NEXT** izena gordetzen dute. Erabili hautatutako berrikuspenaren fitxategiak eta konfigurazioa, izen hori beste bertsio bat balitz bezala hartu gabe. Instalazio-gida orokorraren adar lehenetsiak ez du ordezten 0.8 hautagaia esplizituki hautatzea.

## 2. Prestatu ingurunea {#2-prepare-the-environment}

Prestatu Git, Docker eta Docker Compose v2 dokumentatutako edukiontzi-biderako. Aukeratu instalazio-direktorioa eta atakak, sorkuntza- eta embedding-hornitzaileak, zerbitzuen helbideak eta hasierako administrazio-ezarpenak. Gorde kredentzialak biltegi publikoetatik eta pantaila-argazkietatik kanpo.

Tokiko Docker konfigurazio batek eta ekoizpen-zerbitzu batek eskakizun desberdinak dituzte. Ikasleek erabiliko duten hedapen batek instituzio-helbide bat, HTTPS, sarbide-politika bat, babeskopiak eta operadore izendatu bat behar ditu. [Planifikatu erantzukizun horiek](/eu/institutions/operations/) ikastaro bat gonbidatu aurretik.

## 3. Jarraitu hautatutako hedapen-gida {#3-follow-the-selected-deployment-guide}

Erabili berrikuspen horren ingurune-txantiloia eta hedapen-jarraibideak. Ezarri esplizituki aurreikusitako eredu- eta embedding-zerbitzuak. Web-orri batek funtzionatzeak ez du frogatzen ereduetarako sarbidea, berreskurapena edo LMSarekiko konexioa prest daudenik.

Lehendik dagoen instalazio baterako, egin datu iraunkorren babeskopia eta entseatu bertsio-berritzea beste kopia batean. Egiaztatu leheneratze bat, irakasleek edo ikasleek erabiltzen duten zerbitzua aldatu aurretik.

## 4. Egiaztatu irakaskuntza-lan-fluxu txiki bat {#4-verify-a-small-teaching-workflow}

1. Hasi saioa aurreikusitako sortzaile-kontuarekin eta erakundearekin.
2. Sortu laguntzaile bat eta lortu erantzun bat konfiguratutako eredutik.
3. Gehitu ikastaroko dokumentu sintetiko bat eta egiaztatu pasarte ezagun bat berreskuratzen dela.
4. Argitaratu laguntzailea eta probatu aukeratutako [LTI sarbide-bidea](/eu/guides/0.8/lti/) irakasle-kontuekin eta erakustaldiko ikasle-kontuekin.
5. Egiaztatu jardueraren kontrol egokiak, elkarrizketa-politika eta kalifikazioen itzulera, halakorik badago.
6. Berretsi nork kudeatuko dituen eguneraketak, sarbide-eskaerak eta gorabeherak.

**Espero den emaitza:** berrikuspen ezagun batean dokumentatutako pilotu-proba errepikagarri bat, irakaskuntza-lan-fluxua egiaztatuta eta operadore bat esleituta.

## Konfigurazioaz hitz egin nahi duzu? {#want-to-discuss-the-setup}

LAMB taldeak [prestakuntza](/eu/contact/#training) eta [aholkularitza](/eu/contact/#consultancy) eskaintzen ditu; aholkularitza erakustaldi batekin has daiteke. Idatzi contact-lamb-project@proton.me helbidera eta esan zein ingurune eta irakaskuntza-lan-fluxu ari zaren aztertzen.
