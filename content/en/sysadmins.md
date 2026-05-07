---
title: "For System Administrators"
description: "LAMB installation and maintenance guides"
date: 2026-05-07
draft: false
weight: 200
---

# For System Administrators

## Docker Installation Guide

Docker is the recommended method for deploying LAMB in production environments. This guide will walk you through the process of installing and configuring LAMB using Docker containers.

### 1. Environment Variables Configuration

The first step is to create a `.env` file in the root directory of your installation. This file will contain all the configuration variables necessary for LAMB to function. Below is an example with default configuration that you can adapt to your environment:

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

### 2. Docker Compose Configuration

Create a `docker-compose.yml` file in the same directory where the `.env` file is located. This file defines the services that make up LAMB's architecture:

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


### 3. Starting the Services

Once the `.env` and `docker-compose.yml` files are configured, run the following command to start all services:

```bash
docker compose up -d
```

This command will automatically download the necessary Docker images from the container registry and start all services in the background.

#### Deployment Verification

You can verify that all services are running correctly with:

```bash
docker compose ps
```

#### Platform Access

Once the services are started, you can access LAMB with the following credentials:

- **URL**: `http://localhost:9099` (according to the `LAMB_WEB_HOST` value in your `.env` file)
- **Username**: `admin@example.com` (according to the `OWI_ADMIN_EMAIL` value)
- **Password**: `admin` (according to the `OWI_ADMIN_PASSWORD` value)

> **Important**: For security reasons, it is recommended to change these default credentials after the first login.

### 4. Production Environment Optimization

#### 4.1. Reverse Proxy Configuration

For production environments, it is highly recommended to configure a reverse proxy that manages HTTPS connections and provides additional security and load balancing features. Below is an example configuration using **Caddy**.

##### Caddy Service Configuration

Add the following service to your Docker Compose configuration:

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

##### Caddyfile

Create a file named `Caddyfile` in the same directory as your `docker-compose.yml` with the following content:

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

##### Configuration Explanation

**Global Block:**
- `email {$CADDY_EMAIL}`: Email for automatic SSL/TLS certificate issuance via Let's Encrypt

**Main LAMB Host (`{$LAMB_PUBLIC_HOST}`):**
- `encode gzip`: Response compression for improved performance
- `/creator/*`: Assistant creator interface → LAMB service
- `/api/*`: Backend API → LAMB service
- `/lamb/*`: LAMB-specific routes (with prefix stripping)
- `/kb/*`: Knowledge Base (with prefix stripping) → KB service
- `/openwebui/*`: 301 redirect to the specific OpenWebUI host (for backward compatibility)
- Other routes: Proxy to main LAMB service

**OpenWebUI Host (`{$OWI_PUBLIC_HOST}`):**
- Dedicated OpenWebUI configuration with gzip compression
- All requests are sent to the `openwebui:8080` service

##### Required Environment Variables

Add the following variables to your `.env` file:

```bash
# Caddy configuration for production
CADDY_EMAIL=admin@yourdomain.com
LAMB_PUBLIC_HOST=lamb.yourdomain.com
OWI_PUBLIC_HOST=owi.lamb.yourdomain.com
```

##### Docker Compose Integration

This configuration can be added directly to the main `docker-compose.yml` file or, preferably, separated into an independent file called `docker-compose.prod.yml` to maintain better organization between development and production environments.

To use multiple configuration files:

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

This approach allows you to keep the base configuration in `docker-compose.yml` and production-specific extensions in `docker-compose.prod.yml`.

#### 4.2. Workers Configuration

LAMB uses **Uvicorn** as an ASGI server to run the backend application. In production environments with high load, it is recommended to configure multiple worker processes to better utilize system resources and improve performance.

##### What are Workers?

Workers are independent processes that can handle requests concurrently. Each worker can process requests simultaneously, which significantly improves response capacity under load.

##### Configuration via Environment Variables

Since the version including PR #362, LAMB supports worker configuration through the `LAMB_WORKERS` environment variable. This can be defined in the `.env` file:

```bash
# Number of Uvicorn workers (recommended: 2-4 for production)
# LAMB_WORKERS=4
```

##### Behavior

- **Not set or empty**: A single worker runs (development mode, Uvicorn default behavior)
- **Positive integer value** (e.g., `4`): Multiple workers run (production mode)
- **Value 0 or invalid**: Ignored and default behavior is used (single worker)

##### Recommendations

| Environment | Recommended Configuration | Description |
|-------------|---------------------------|-------------|
| **Development** | Not set or `LAMB_WORKERS=1` | Single worker facilitates debugging and reduces resource consumption |
| **Production (low load)** | `LAMB_WORKERS=2` | Minimum configuration for production with basic redundancy |
| **Production (medium load)** | `LAMB_WORKERS=4` | Optimal configuration for most use cases |
| **Production (high load)** | `LAMB_WORKERS=4-8` | Adjust according to available CPU cores |

##### Calculating the Optimal Number of Workers

A general rule for calculating the optimal number of workers is:

```
Workers = (2 × CPU Cores) + 1
```

For example, on a server with 2 cores:
```
Workers = (2 × 2) + 1 = 5
```

However, it is recommended to start with conservative values (2-4 workers) and adjust based on observed performance metrics.

##### Configuration Example in `.env`

```bash
# For a server with 4 cores in production
LAMB_WORKERS=4
```

##### Verification

After configuring workers, you can verify they are being used correctly by checking the container logs:

```bash
docker compose logs lamb | grep -i worker
```

You should see messages indicating that Uvicorn has started with the specified number of workers.

##### Additional Considerations

- **RAM Memory**: Each worker consumes additional memory. Ensure the server has sufficient RAM available.
- **Horizontal Scaling**: For very high loads, consider distributing the load across multiple LAMB instances instead of indefinitely increasing the number of workers.
- **Monitoring**: Implement monitoring tools to observe CPU and memory usage and adjust worker configuration as needed.
