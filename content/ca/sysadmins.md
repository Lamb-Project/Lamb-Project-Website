---
title: "Per a Administradors de Sistemes"
description: "Guies d'instal·lació i manteniment de LAMB"
date: 2026-05-07
draft: false
weight: 200
---

# Per a Administradors de Sistemes

## Guia d'Instal·lació amb Docker

Docker és el mètode recomanat per desplegar LAMB en entorns de producció. Aquesta guia us acompanyarà en el procés d'instal·lació i configuració de LAMB utilitzant contenidors Docker.

### 1. Configuració del Fitxer de Variables d'Entorn

El primer pas consisteix a crear un fitxer `.env` al directori arrel de la vostra instal·lació. Aquest fitxer contindrà totes les variables de configuració necessàries per al funcionament de LAMB. A continuació es mostra un exemple amb la configuració per defecte que podeu adaptar al vostre entorn:

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

### 2. Configuració de Docker Compose

Creeu un fitxer `docker-compose.yml` al mateix directori on es troba el fitxer `.env`. Aquest fitxer defineix els serveis que componen l'arquitectura de LAMB:

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


### 3. Iniciar els Serveis

Un cop configurats els fitxers `.env` i `docker-compose.yml`, executeu la comanda següent per iniciar tots els serveis:

```bash
docker compose up -d
```

Aquesta comanda descarregarà automàticament les imatges de Docker necessàries des del registre de contenidors i aixecarà tots els serveis en segon pla.

#### Verificació del Desplegament

Podeu verificar que tots els serveis estan funcionant correctament amb:

```bash
docker compose ps
```

#### Accés a la Plataforma

Un cop iniciats els serveis, podeu accedir a LAMB amb les credencials següents:

- **URL**: `http://localhost:9099` (segons el valor de `LAMB_WEB_HOST` al vostre fitxer `.env`)
- **Usuari**: `admin@example.com` (segons el valor de `OWI_ADMIN_EMAIL`)
- **Contrasenya**: `admin` (segons el valor de `OWI_ADMIN_PASSWORD`)

> **Important**: Per raons de seguretat, es recomana canviar aquestes credencials per defecte després del primer accés.

### 4. Optimització per a Entorns de Producció

#### 4.1. Configuració de Proxy Invers

Per a entorns de producció, és altament recomanable configurar un proxy invers que gestioni les connexions HTTPS i proporcioni funcionalitats addicionals de seguretat i balanceig de càrrega. A continuació es mostra un exemple de configuració utilitzant **Caddy**.

##### Configuració del Servei Caddy

Afegiu el servei següent a la vostra configuració de Docker Compose:

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

##### Fitxer Caddyfile

Creeu un fitxer anomenat `Caddyfile` al mateix directori que el vostre `docker-compose.yml` amb el contingut següent:

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

##### Variables d'Entorn Necessàries

Afegiu les variables següents al vostre fitxer `.env`:

```bash
# Configuració de Caddy per a producció
CADDY_EMAIL=admin@yourdomain.com
LAMB_PUBLIC_HOST=lamb.yourdomain.com
OWI_PUBLIC_HOST=owi.lamb.yourdomain.com
```

##### Integració amb Docker Compose

Aquesta configuració pot afegir-se directament al fitxer `docker-compose.yml` principal o, preferiblement, separar-se en un fitxer independent anomenat `docker-compose.prod.yml` per mantenir una millor organització entre entorns de desenvolupament i producció.

Per utilitzar múltiples fitxers de configuració:

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

Aquest enfocament permet mantenir la configuració base a `docker-compose.yml` i les extensions específiques de producció a `docker-compose.prod.yml`.

#### 4.2. Configuració de Workers

LAMB utilitza **Uvicorn** com a servidor ASGI per executar l'aplicació backend. En entorns de producció amb alta càrrega, és recomanable configurar múltiples processos workers per aprofitar millor els recursos del sistema i millorar el rendiment.

##### Què són els Workers?

Els workers són processos independents que poden gestionar peticions de forma concurrent. Cada worker pot processar sol·licituds de forma simultània, cosa que millora significativament la capacitat de resposta sota càrrega.

##### Configuració mitjançant Variables d'Entorn

Des de la versió que inclou el PR #362, LAMB suporta la configuració de workers mitjançant la variable d'entorn `LAMB_WORKERS`. Aquesta es pot definir al fitxer `.env`:

```bash
# Nombre de workers d'Uvicorn (recomanat: 2-4 per a producció)
# LAMB_WORKERS=4
```

##### Comportament

- **No establert o buit**: S'executa un únic worker (mode desenvolupament, comportament per defecte d'Uvicorn)
- **Valor enter positiu** (ex: `4`): S'executen múltiples workers (mode producció)
- **Valor 0 o invàlid**: S'ignora i s'utilitza el comportament per defecte (un sol worker)

##### Recomanacions

| Entorn | Configuració Recomanada | Descripció |
|--------|-------------------------|------------|
| **Desenvolupament** | No establir o `LAMB_WORKERS=1` | Un sol worker facilita la depuració i redueix el consum de recursos |
| **Producció (baixa càrrega)** | `LAMB_WORKERS=2` | Configuració mínima per a producció amb redundància bàsica |
| **Producció (càrrega mitjana)** | `LAMB_WORKERS=4` | Configuració òptima per a la majoria de casos d'ús |
| **Producció (alta càrrega)** | `LAMB_WORKERS=4-8` | Ajustar segons el nombre de nuclis de CPU disponibles |

##### Exemple de Configuració a `.env`

```bash
# Per a un servidor amb 4 nuclis en producció
LAMB_WORKERS=4
```

##### Verificació

Després de configurar els workers, podeu verificar que s'estan utilitzant correctament revisant els logs del contenidor:

```bash
docker compose logs lamb | grep -i worker
```

Hauríeu de veure missatges indicant que Uvicorn ha iniciat amb el nombre especificat de workers.
