---
title: "LAMB Proiektuaren Ibilbide-orria"
description: "LAMB Learning Assistants Manager and Builder proiektuaren garapen ibilbide-orria"
date: 2025-01-08
draft: false
---

# LAMB PROIEKTUAREN IBILBIDE-ORRIA

**Azken eguneraketa:** 2025eko irailaren 10a

---

## 🎯 LAMB Proiektu Nagusia

LAMB proiektu nagusiak Learning Assistant Manager and Builder inplementatzen du. LAMB-en frontend-a (Svelte 5) eta backend-a (FastAPI) aplikazio bakar batean konbinatzen ditu. Open WebUI-ren bertsio apur bat aldatu bat behar du, jatorrizko proiektutik fork eginda, eta LAMB Knowledge Base Server-ekin konekta daiteke.

### 📊 Egoera Egungoa

- ✅ **Proiektua guztiz kode irekiko** [lamb-project.org](https://lamb-project.org) helbidean
- ✅ **Instalazio-dokumentazioa** osatuta, Docker eta eskuzko instalazio aukerekin
- ✅ **Oinarrizko funtzionaltasuna** probatuta eta egonkorra

---

### 🚀 Mugarria: 0.1 Bertsioa

**🎯 Helburua:** Multi-tenant kode-base guztiz egonkorra
**👥 Arduradunak:** @granludo eta @juananpe

#### 📋 Zereginak
- [ ] **Multi-tenant funtzionalitateak** eta administrazioa → erakundeak
- [ ] **KB-Server hobekuntzak:** JSON ingesta + YouTube transkripzioen inportatzailea
- [ ] **PDF inportazio hobetua** ingestarako
- [ ] **Playwright-en proba-suite osoa**

---

### 📈 Mugarria: Analitika eta Ebaluazioak
*(Funtzionalitate Nagusia)*

**🎯 Helburua:** LLM analitika eta ebaluazioen garapen esperimentalak LAMBen integratzea
**👥 Arduraduna:** Zehazteke

#### 📋 Irismena
Ikaskuntza-laguntzaileen errendimendua ebaluatzeko analitika eta ebaluazio-marko aurreratuen integrazioa.

---

### 🎓 Mugarria: LTI Zeregin Jarduera

**🎯 Helburua:** LAMB laguntzaileentzako LTI frontend mota berri bat sortzea
**👥 Arduraduna:** @MJCasañ

#### 📋 Lan-fluxua
1. **Irakaslearen konfigurazioa:** zeregina eta jarraibideak ikasleentzat
2. **Ikaslearen entrega:** talde-kideen izen, rol eta ekarpenak dituzten dokumentua(k)
3. **LAMBen ebaluazioa:** errubrikan oinarritutako ebaluazioa eta itzulpena (feedback-a)
4. **Irakaslearen berrikuspena:** ebaluazioaren berrikuspena eta ekintza-erabakiak
5. **Noten integrazioa:** LMSaren notak-liburuarekin integrazioa LTI bidez

> 🔗 **Oharra:** EvaluAItor agenteekin integra daiteke

---

## 🗃️ LAMB Knowledge Base Server

**🎯 Helburua:** Funtzionalitate esperimentalak eta LAMBekin integrazio dinamikoa gehitzea
**👥 Arduradunak:** @granludo + Noa

### 📋 Funtzionalitateen Garapena

#### 🔄 Dokumentuen Prozesamendua
- [ ] **Dockling bidezko PDF multimodalaren** analisia, chunking-a eta ingesta
- [ ] **Dockling bidezko dokumentuen analisia** eta erauzketa (MD gordina + irudi-fitxategiak)
- [ ] **Bideoen ingesta plugina** (LLMPrimer-en lan-fluxuetan oinarritua)

#### 💾 Ezagutza-baseen Kudeaketa
- [ ] **Ezagutza-base osoen** inportazioa/esportazioa
- [ ] **KB berreraikitzea:** embedding funtzioak, chunking estrategia, metadatuak aldatzea
- [ ] **Ontologian oinarritutako domeinu-hobekuntza** ingesta, kontsulta eta doikuntza finerako

---

## 🤖 Etorkizuneko Proiektuak

### EvaluAItor Agenteak
**Egoera:** Plangintza fasean dagoen proiektu nagusia
**Ibilbide-orria:** Zehaztapen zehatzaren zain

### LAMB Jarvis
**Egoera:** Plangintza fasean dagoen proiektu nagusia
**Ibilbide-orria:** Zehaztapen zehatzaren zain

---

## 📞 Kontaktua eta Ekarpenak

Ibilbide-orriari buruzko galderak edo garapenean parte hartzeko:

- **GitHub Issues:** [github.com/Lamb-Project/lamb/issues](https://github.com/Lamb-Project/lamb/issues)
- **Proiektuaren arduradunak:** Marc Alier (UPC), Juanan Pereira (UPV/EHU)
- **Webgunea:** [lamb-project.org](http://www.lamb-project.org)
