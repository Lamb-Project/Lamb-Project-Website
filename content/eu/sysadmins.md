---
title: "Sistemaren Administratzaileentzat"
description: "LAMB instalazio eta mantentze gidak"
date: 2026-05-07
draft: false
weight: 200
---

# Sistemaren Administratzaileentzat

## Docker Instalazio Gida

Docker da LAMB produkzio inguruneetan hedatzeko gomendatutako metodoa. Gida honek Docker edukiontziak erabiliz LAMB instalatu eta konfiguratzeko prozesuan zehar lagunduko zaitu.

### 1. Ingurune Aldagaien Fitxategiaren Konfigurazioa

Lehenengo urratsa zure instalazioaren erroko direktorioan `.env` fitxategi bat sortzea da. Fitxategi honek LAMBen funtzionatzeko behar diren konfigurazio aldagai guztiak edukiko ditu. Jarraian, zure ingurunera egokitu dezakezun lehenetsitako konfigurazioarekin adibide bat erakusten da:

```
# LAMB Next Docker Compose Environment Configuration
# Copy this file to .env (same directory as docker-compose.next.yaml).
#
# Current phase policy:
# - Required vars are UNCOMMENTED below (must be set).
# - Optional vars are COMMENTED and can be enabled only if needed.

# ============================================================================
# REQUIRED VARIABLES (compose fails if missing)
# ============================================================================

# Public/internal LAMB URLs
LAMB_WEB_HOST=http://localhost:9099
LAMB_BACKEND_HOST=http://localhost:9099

# Database/data paths inside container
OWI_PATH=/data/openwebui

# OpenWebUI internal API URL
OWI_BASE_URL=http://openwebui:8080

# Auth/secrets required by current backend config
LAMB_BEARER_TOKEN=change-me
SIGNUP_SECRET_KEY=change-me

# OpenAI provider required by current backend config
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4o-mini

# OpenWebUI bootstrap admin required by current backend config
OWI_ADMIN_NAME=Admin User
OWI_ADMIN_EMAIL=admin@owi.com
OWI_ADMIN_PASSWORD=admin

# ============================================================================
# OPTIONAL VARIABLES (uncomment to override defaults)
# ============================================================================

# Ports
# LAMB_PORT=9099
# KB_PORT=9090
# OPENWEBUI_PORT=8080

# OpenWebUI public/browser URL
# OWI_PUBLIC_BASE_URL=http://localhost:8080

# DB table prefix (defaults to LAMB_)
# Set empty for unprefixed schemas: LAMB_DB_PREFIX=
# LAMB_DB_PREFIX=LAMB_

# DB path override (defaults to /data/lamb)
# LAMB_DB_PATH=/data/lamb

# Additional tokens/keys
# LAMB_KB_SERVER_TOKEN=change-me
# LAMB_API_KEY=change-me
# OPENAI_API_KEY=

# LAMB/KB integration
# LAMB_KB_SERVER=http://kb:9090
# KB_HOME_URL=http://localhost:9090

# KB embeddings
# EMBEDDINGS_MODEL=nomic-embed-text
# EMBEDDINGS_VENDOR=ollama
# EMBEDDINGS_ENDPOINT=http://ollama:11434
# EMBEDDINGS_APIKEY=

# KB optional Firecrawl integration
# FIRECRAWL_API_URL=http://host.docker.internal:3002
# FIRECRAWL_API_KEY=

# OpenAI model listing
# OPENAI_MODELS=gpt-4o-mini,gpt-4o

# Ollama
# OLLAMA_BASE_URL=http://ollama:11434
# OLLAMA_MODEL=nomic-embed-text
# EMBEDDINGS_ENDPOINT=http://ollama:11434

# Frontend runtime config (generated at container startup)
# LAMB_FRONTEND_BUILD_PATH=/app/frontend/build
# LAMB_FRONTEND_BASE_URL=/creator
# LAMB_FRONTEND_LAMB_SERVER=
# LAMB_FRONTEND_OPENWEBUI_SERVER=
# LAMB_ENABLE_OPENWEBUI=true
# LAMB_ENABLE_DEBUG=false

# Feature/runtime toggles
# SIGNUP_ENABLED=true
# LTI_SECRET=change-me
# DEV_MODE=false
# GLOBAL_LOG_LEVEL=WARNING

# OpenWebUI trusted headers/role/secret
# WEBUI_AUTH_TRUSTED_EMAIL_HEADER=X-User-Email
# WEBUI_AUTH_TRUSTED_NAME_HEADER=X-User-Name
# DEFAULT_USER_ROLE=user
# WEBUI_SECRET_KEY=

# Production Caddy overlay (docker-compose.next.prod.yaml)
# CADDY_EMAIL=admin@yourdomain.com
# LAMB_PUBLIC_HOST=lamb.yourdomain.com
# OWI_PUBLIC_HOST=owi.lamb.yourdomain.com
```

### 2. Docker Compose Konfigurazioa

Sortu `docker-compose.yml` fitxategi bat `.env` fitxategia dagoen direktorio berean. Fitxategi honek LAMBen arkitektura osatzen duten zerbitzuak definitzen ditu:

```yaml
services:
  lamb:
    image: ghcr.io/lamb-project/lamb:latest
    build:
      context: .
      dockerfile: backend/Dockerfile
    restart: unless-stopped
    environment:
      PORT: ${LAMB_PORT:-9099}
      OWI_BASE_URL: ${OWI_BASE_URL?Set OWI_BASE_URL}
      OWI_PATH: ${OWI_PATH?Set OWI_PATH}
      LAMB_KB_SERVER: ${LAMB_KB_SERVER:-http://kb:9090}
      LAMB_BACKEND_HOST: ${LAMB_BACKEND_HOST?Set LAMB_BACKEND_HOST}
      LAMB_WEB_HOST: ${LAMB_WEB_HOST?Set LAMB_WEB_HOST}
      LAMB_BEARER_TOKEN: ${LAMB_BEARER_TOKEN?Set LAMB_BEARER_TOKEN}
      LAMB_KB_SERVER_TOKEN: ${LAMB_KB_SERVER_TOKEN:-0p3n-w3bu!}
      OPENAI_API_KEY: ${OPENAI_API_KEY:-}
      OPENAI_BASE_URL: ${OPENAI_BASE_URL?Set OPENAI_BASE_URL}
      OPENAI_MODEL: ${OPENAI_MODEL?Set OPENAI_MODEL}
      OPENAI_MODELS: ${OPENAI_MODELS:-gpt-4o-mini,gpt-4o}
      SIGNUP_SECRET_KEY: ${SIGNUP_SECRET_KEY?Set SIGNUP_SECRET_KEY}
      LTI_SECRET: ${LTI_SECRET:-lamb-lti-secret-key-2024}
      OWI_ADMIN_NAME: ${OWI_ADMIN_NAME?Set OWI_ADMIN_NAME}
      OWI_ADMIN_EMAIL: ${OWI_ADMIN_EMAIL?Set OWI_ADMIN_EMAIL}
      OWI_ADMIN_PASSWORD: ${OWI_ADMIN_PASSWORD?Set OWI_ADMIN_PASSWORD}
    ports:
      - "9099:9099"
    volumes:
      - lamb-data:/data/lamb
      - openwebui-data:/data/openwebui
    depends_on:
      kb:
        condition: service_started
      openwebui:
        condition: service_healthy

  kb:
    image: ghcr.io/lamb-project/lamb-kb:latest
    build:
      context: ./lamb-kb-server-stable
      dockerfile: Dockerfile
    restart: unless-stopped
    environment:
      PORT: ${KB_PORT:-9090}
      HOME_URL: ${KB_HOME_URL:-http://localhost:9090}
      LAMB_API_KEY: ${LAMB_API_KEY:-0p3n-w3bu!}
      EMBEDDINGS_MODEL: ${EMBEDDINGS_MODEL:-nomic-embed-text}
      EMBEDDINGS_VENDOR: ${EMBEDDINGS_VENDOR:-ollama}
      EMBEDDINGS_ENDPOINT: ${EMBEDDINGS_ENDPOINT:-http://ollama:11434}
      EMBEDDINGS_APIKEY: ${EMBEDDINGS_APIKEY:-}
      FIRECRAWL_API_URL: ${FIRECRAWL_API_URL:-http://host.docker.internal:3002}
      FIRECRAWL_API_KEY: ${FIRECRAWL_API_KEY:-}
    ports:
      - "9090:9090"
    volumes:
      - kb-data:/app/backend/data
      - kb-static:/app/backend/static

  openwebui:
    image: ghcr.io/lamb-project/openwebui:latest
    build:
      context: ./open-webui
      dockerfile: Dockerfile
    restart: unless-stopped
    environment:
      PORT: ${OPENWEBUI_PORT:-8080}
      WEBUI_AUTH_TRUSTED_EMAIL_HEADER: ${WEBUI_AUTH_TRUSTED_EMAIL_HEADER:-X-User-Email}
      WEBUI_AUTH_TRUSTED_NAME_HEADER: ${WEBUI_AUTH_TRUSTED_NAME_HEADER:-X-User-Name}
      DEFAULT_USER_ROLE: ${DEFAULT_USER_ROLE:-user}
      WEBUI_SECRET_KEY: ${WEBUI_SECRET_KEY:-}
    ports:
      - "8080:8080"
    volumes:
      - openwebui-data:/app/backend/data
    healthcheck:
      test: ["CMD", "curl", "-sf", "http://localhost:8080/health"]
      interval: 10s
      timeout: 5s
      retries: 12
      start_period: 30s

  ollama:
    image: ollama/ollama:latest
    profiles: ["ollama"]
    restart: unless-stopped
    ports:
      - "11434:11434"
    volumes:
      - ollama-data:/root/.ollama

volumes:
  lamb-data:
  kb-data:
  kb-static:
  openwebui-data:
  ollama-data:
```


### 3. Zerbitzuak Abiarazi

`.env` eta `docker-compose.yml` fitxategiak konfiguratu ondoren, exekutatu komando hau zerbitzu guztiak abiarazteko:

```bash
docker compose up -d
```

Komando honek automatikoki deskargatuko ditu beharrezko Docker irudiak edukiontzien erregistrotik eta zerbitzu guztiak atzeko planoan abiaraziko ditu.

#### Hedapenaren Egiaztapena

Zerbitzu guztiak behar bezala funtzionatzen ari direla egiaztatu dezakezu honekin:

```bash
docker compose ps
```

#### Plataformarako Sarbidea

Zerbitzuak abiarazi ondoren, LAMBera sarbide hauek erabiliz sartu zaitezke:

- **URLa**: `http://localhost:9099` (zure `.env` fitxategiko `LAMB_WEB_HOST` balioaren arabera)
- **Erabiltzailea**: `admin@example.com` (`OWI_ADMIN_EMAIL` balioaren arabera)
- **Pasahitza**: `admin` (`OWI_ADMIN_PASSWORD` balioaren arabera)

> **Garrantzitsua**: Segurtasun arrazoiengatik, gomendagarria da lehenetsitako kredentzial hauek lehen sarbidearen ondoren aldatzea.

### 4. Produkzio Inguruneetarako Optimizazioa

#### 4.1. Alderantzizko Proxy Konfigurazioa

Produkzio inguruneetan, oso gomendagarria da HTTPS konexioak kudeatzen dituen alderantzizko proxy bat konfiguratzea eta segurtasun eta karga orekatzeko funtzionalitate gehigarriak eskaintzea. Jarraian **Caddy** erabiliz konfigurazio adibide bat erakusten da.

##### Caddy Zerbitzuaren Konfigurazioa

Gehitu zerbitzu hau zure Docker Compose konfiguraziora:

```yaml
services:
  caddy:
    image: caddy:2.8
    restart: unless-stopped
    environment:
      CADDY_EMAIL: ${CADDY_EMAIL:-admin@yourdomain.com}
      LAMB_PUBLIC_HOST: ${LAMB_PUBLIC_HOST:-lamb.yourdomain.com}
      OWI_PUBLIC_HOST: ${OWI_PUBLIC_HOST:-owi.lamb.yourdomain.com}
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy-data:/data
      - caddy-config:/config
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - lamb
      - kb
      - openwebui

volumes:
  caddy-data:
  caddy-config:
```

##### Caddyfile Fitxategia

Sortu `Caddyfile` izeneko fitxategi bat zure `docker-compose.yml`ekin direktorio berean eduki honekin:

```caddyfile
{
    email {$CADDY_EMAIL}
}

{$LAMB_PUBLIC_HOST} {
    encode gzip

    handle /creator/* {
        reverse_proxy lamb:9099
    }

    handle /api/* {
        reverse_proxy lamb:9099
    }

    handle /lamb/* {
        uri strip_prefix /lamb
        reverse_proxy lamb:9099
    }

    handle /kb/* {
        uri strip_prefix /kb
        reverse_proxy kb:9090
    }

    @oldowi path /openwebui/*
    handle @oldowi {
        redir https://{$OWI_PUBLIC_HOST}{uri} 301
    }

    handle {
        reverse_proxy lamb:9099
    }
}

{$OWI_PUBLIC_HOST} {
    encode gzip
    reverse_proxy openwebui:8080
}
```

##### Konfigurazioaren Azalpena

**Bloke Globala:**
- `email {$CADDY_EMAIL}`: Helbide elektronikoa SSL/TLS ziurtagiri automatikoak Let's Encrypt bidez emateko

**LAMBen Ostalari Nagusia (`{$LAMB_PUBLIC_HOST}`):**
- `encode gzip`: Erantzunen konpresioa errendimenduaren hobekuntza
- `/creator/*`: Laguntzaileen sortzailearen interfazea → LAMB zerbitzua
- `/api/*`: Backend APIa → LAMB zerbitzua
- `/lamb/*`: LAMBen bide espezifikoak (aurrizkia kenduta)
- `/kb/*`: Ezagutza Basea (aurrizkia kenduta) → KB zerbitzua
- `/openwebui/*`: 301 birbideraketa OpenWebUIren ostalari espezifikora (atzerantz bateragarritasunerako)
- Gainerako bideak: Proxy LAMB zerbitzu nagusira

**OpenWebUI Ostalarira (`{$OWI_PUBLIC_HOST}`):**
- OpenWebUIrako konfigurazio dedikatua gzip konpresioarekin
- Eskaera guztiak `openwebui:8080` zerbitzura bidaltzen dira

##### Beharrezko Ingurune Aldagaiak

Gehitu aldagai hauek zure `.env` fitxategian:

```bash
# Caddyren konfigurazioa produkziorako
CADDY_EMAIL=admin@yourdomain.com
LAMB_PUBLIC_HOST=lamb.yourdomain.com
OWI_PUBLIC_HOST=owi.lamb.yourdomain.com
```

##### Docker Compose Integrazioa

Konfigurazio hau zuzenean `docker-compose.yml` fitxategi nagusian gehitu daiteke edo, nahiago bada, `docker-compose.prod.yml` izeneko fitxategi independente batean banatu garapen eta produkzio inguruneen artean antolakuntza hobea mantentzeko.

Konfigurazio fitxategi anitz erabiltzeko:

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

Ikuspegi honek oinarrizko konfigurazioa `docker-compose.yml`n mantentzeko eta produkzio-hedapen espezifikoak `docker-compose.prod.yml`n mantentzeko aukera ematen du.

#### 4.2. Worker-en Konfigurazioa

LAMBek **Uvicorn** erabiltzen du ASGI zerbitzari gisa backend aplikazioa exekutatzeko. Karga handiko produkzio inguruneetan, gomendagarria da worker prozesu anitzak konfiguratzea sistemaren baliabideak hobeto aprobetxatu eta errendimendua hobetzeko.

##### Zer dira Worker-ak?

Worker-ak eskaerak aldi berean kudeatu ditzaketen prozesu independenteak dira. Worker bakoitzak eskaerak aldi berean prozesatu ditzake, eta honek kargapeko erantzun gaitasuna nabarmen hobetzen du.

##### Ingurune Aldagaien bidezko Konfigurazioa

PR #362 barne hartzen duen bertsiotik aurrera, LAMBek worker-en konfigurazioa onartzen du `LAMB_WORKERS` ingurune aldagaiaren bidez. Hau `.env` fitxategian definitu daiteke:

```bash
# Uvicorn worker-en kopurua (gomendatua: 2-4 produkziorako)
# LAMB_WORKERS=4
```

##### Portaera

- **Ezarri gabe edo hutsa**: Worker bakarra exekutatzen da (garapen modua, Uvicornen lehenetsitako portaera)
- **Balio oso positiboa** (adib: `4`): Worker anitz exekutatzen dira (produkzio modua)
- **0 balioa edo baliogabea**: Ez ikusi egiten da eta lehenetsitako portaera erabiltzen da (worker bakarra)

##### Gomendioak

| Ingurunea | Gomendatutako Konfigurazioa | Deskribapena |
|-----------|----------------------------|--------------|
| **Garapena** | Ez ezarri edo `LAMB_WORKERS=1` | Worker bakarrak arazketa errazten du eta baliabideen kontsumoa murrizten du |
| **Produkzioa (karga txikia)** | `LAMB_WORKERS=2` | Produkziorako gutxieneko konfigurazioa oinarrizko erredundantziarekin |
| **Produkzioa (karga ertaina)** | `LAMB_WORKERS=4` | Erabilera kasu gehienetarako konfigurazio optimoa |
| **Produkzioa (karga handia)** | `LAMB_WORKERS=4-8` | Eskuragarri dauden CPU nukleoaren arabera doitu |

##### Konfigurazio Adibidea `.env`-n

```bash
# 4 nukleoko zerbitzari baterako produkzioan
LAMB_WORKERS=4
```

##### Egiaztapena

Worker-ak konfiguratu ondoren, behar bezala erabiltzen ari direla egiaztatu dezakezu edukiontziko log-ak berrikusten:

```bash
docker compose logs lamb | grep -i worker
```

Uvicornek zehaztutako worker kopuruarekin hasi duela adierazten duten mezuak ikusi beharko zenituzke.
