---
title: "Para Sysadmins"
description: "Guías de instalación y mantenimiento de LAMB"
date: 2026-05-07
draft: false
weight: 200
---

# Para Administradores de Sistemas

## Guía de Instalación con Docker

Docker es el método recomendado para desplegar LAMB en entornos de producción. Esta guía le acompañará en el proceso de instalación y configuración de LAMB utilizando contenedores Docker.

### 1. Configuración del Archivo de Variables de Entorno

El primer paso consiste en crear un archivo `.env` en el directorio raíz de su instalación. Este archivo contendrá todas las variables de configuración necesarias para el funcionamiento de LAMB. A continuación se muestra un ejemplo con la configuración por defecto que puede adaptar a su entorno:

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

### 2. Configuración de Docker Compose

Cree un archivo `docker-compose.yml` en el mismo directorio donde se encuentra el archivo `.env`. Este archivo define los servicios que componen la arquitectura de LAMB:

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


### 3. Iniciar los Servicios

Una vez configurados los archivos `.env` y `docker-compose.yml`, ejecute el siguiente comando para iniciar todos los servicios:

```bash
docker compose up -d
```

Este comando descargará automáticamente las imágenes de Docker necesarias desde el registro de contenedores y levantará todos los servicios en segundo plano.

#### Verificación del Despliegue

Puede verificar que todos los servicios están funcionando correctamente con:

```bash
docker compose ps
```

#### Acceso a la Plataforma

Una vez iniciados los servicios, puede acceder a LAMB con las siguientes credenciales:

- **URL**: `http://localhost:9099` (según el valor de `LAMB_WEB_HOST` en su archivo `.env`)
- **Usuario**: `admin@example.com` (según el valor de `OWI_ADMIN_EMAIL`)
- **Contraseña**: `admin` (según el valor de `OWI_ADMIN_PASSWORD`)

> **Importante**: Por razones de seguridad, se recomienda cambiar estas credenciales por defecto tras el primer acceso.

### 4. Optimización para Entornos de Producción

#### 4.1. Configuración de Proxy Reverso

Para entornos de producción, es altamente recomendable configurar un proxy reverso que gestione las conexiones HTTPS y proporcione funcionalidades adicionales de seguridad y balanceo de carga. A continuación se muestra un ejemplo de configuración utilizando **Caddy**.

##### Configuración del Servicio Caddy

Añada el siguiente servicio a su configuración de Docker Compose:

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

##### Archivo Caddyfile

Cree un archivo llamado `Caddyfile` en el mismo directorio que su `docker-compose.yml` con el siguiente contenido:

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

##### Variables de Entorno Necesarias

Añada las siguientes variables a su archivo `.env`:

```bash
# Configuración de Caddy para producción
CADDY_EMAIL=admin@yourdomain.com
LAMB_PUBLIC_HOST=lamb.yourdomain.com
OWI_PUBLIC_HOST=owi.lamb.yourdomain.com
```

##### Integración con Docker Compose

Esta configuración puede añadirse directamente al archivo `docker-compose.yml` principal o, preferiblemente, separarse en un archivo independiente llamado `docker-compose.prod.yml` para mantener una mejor organización entre entornos de desarrollo y producción.

Para utilizar múltiples archivos de configuración:

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

Este enfoque permite mantener la configuración base en `docker-compose.yml` y las extensiones específicas de producción en `docker-compose.prod.yml`.

#### 4.2. Configuración de Workers

LAMB utiliza **Uvicorn** como servidor ASGI para ejecutar la aplicación backend. En entornos de producción con alta carga, es recomendable configurar múltiples procesos workers para aprovechar mejor los recursos del sistema y mejorar el rendimiento.

##### ¿Qué son los Workers?

Los workers son procesos independientes que pueden manejar peticiones de forma concurrente. Cada worker puede procesar solicitudes de forma simultánea, lo que mejora significativamente la capacidad de respuesta bajo carga.

##### Configuración mediante Variables de Entorno

Desde la versión que incluye el PR #362, LAMB soporta la configuración de workers mediante la variable de entorno `LAMB_WORKERS`. Esta puede definirse en el archivo `.env`:

```bash
# Número de workers de Uvicorn (recomendado: 2-4 para producción)
# LAMB_WORKERS=4
```

##### Comportamiento

- **No establecido o vacío**: Se ejecuta un único worker (modo desarrollo, comportamiento por defecto de Uvicorn)
- **Valor entero positivo** (ej: `4`): Se ejecutan múltiples workers (modo producción)
- **Valor 0 o inválido**: Se ignora y se utiliza el comportamiento por defecto (un solo worker)

##### Recomendaciones

| Entorno | Configuración Recomendada | Descripción |
|---------|---------------------------|-------------|
| **Desarrollo** | No establecer o `LAMB_WORKERS=1` | Un solo worker facilita la depuración y reduce el consumo de recursos |
| **Producción (baja carga)** | `LAMB_WORKERS=2` | Configuración mínima para producción con redundancia básica |
| **Producción (carga media)** | `LAMB_WORKERS=4` | Configuración óptima para la mayoría de casos de uso |
| **Producción (alta carga)** | `LAMB_WORKERS=4-8` | Ajustar según el número de núcleos de CPU disponibles |

##### Ejemplo de Configuración en `.env`

```bash
# Para un servidor con 4 núcleos en producción
LAMB_WORKERS=4
```

##### Verificación

Después de configurar los workers, puede verificar que se están utilizando correctamente revisando los logs del contenedor:

```bash
docker compose logs lamb | grep -i worker
```

Deberá ver mensajes indicando que Uvicorn ha iniciado con el número especificado de workers.
