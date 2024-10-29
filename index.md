---
layout: default
title: LAMB - Learning Assistant Manager and Builder
description: An open-source framework for creating AI-powered Learning Assistants integrated with Learning Management Systems
---
Warning: This is an AI generated temptative, do not believe everything you read here. 
# LAMB
## Learning Assistant Manager and Builder

LAMB is an innovative open-source software framework designed to create AI-powered Learning Assistants tailored for integration into learning management systems.

[Get Started](#getting-started){: .btn} [View on GitHub](https://github.com/your-username/lamb){: .btn}

## About

LAMB leverages the capabilities of large language models and associated generative artificial intelligence technologies to create intelligent learning assistants that enhance educational experiences. The framework allows educators to develop and deploy Learning Assistants seamlessly within their institutional software and processes regardless of technical expertise.

### Key Features

- **Modular Architecture**: Supports prompt engineering, retrieval-augmented generation (RAG), and extensive knowledge base creation
- **LMS Integration**: Seamlessly integrates with existing Learning Management Systems via IMS LTI
- **Easy-to-Use**: No coding required for creating and deploying learning assistants
- **Privacy-Focused**: Designed with educational privacy requirements in mind
- **Scalable**: Built to handle multiple AI assistant instances and users

## Architecture

LAMB consists of several key components:

1. **LAMB Core**
   - Prompt engineering interface
   - Content library manager
   - RAG engine
   - Pipeline manager
   - LLM integration layer

2. **LAMB Knowledge Base**
   - Manages semantic collections
   - Stores vector representations
   - Based on ChromaDB

3. **LAMB LTI Provider**
   - IMS LTI integration
   - Privacy policy management
   - Seamless LMS deployment

4. **LAMB Chatbot Interface**
   - User-friendly frontend
   - Customizable UI
   - Based on modified OpenWebUI

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Access to LLM APIs (OpenAI, Anthropic, etc.)
- A Learning Management System supporting IMS LTI

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/your-username/lamb.git
cd lamb
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your settings
```

3. Start LAMB using Docker Compose:
```bash
docker-compose up -d
```

4. Access the LAMB dashboard at `http://localhost:3000`

## Use Cases

### Macroeconomics Study Coach

Our flagship implementation helps students access and understand lecture content through:
- Natural language queries about course material
- Direct links to relevant video segments
- Citation-backed responses
- Personalized learning support

### Expert-Based Case Studies

Support for complex analysis tasks with:
- Integration of expert interviews
- Access to authoritative sources
- Guided inquiry and analysis
- Enhanced student engagement

## Documentation

- [Installation Guide](docs/installation.md)
- [User Guide](docs/user-guide.md)
- [Administrator Guide](docs/admin-guide.md)
- [API Reference](docs/api-reference.md)
- [Contributing Guidelines](CONTRIBUTING.md)

## Community and Support

- [Discord Server](#)
- [Discussion Forum](#)
- [Issue Tracker](https://github.com/your-username/lamb/issues)
- [Email Support](#)

## License

LAMB is released under the [MIT License](LICENSE).

## Citation

If you use LAMB in your research, please cite:

```bibtex
@article{lamb2024,
  title={LAMB: An Open-Source Software Framework to Create Artificial Intelligence Assistants Deployed and Integrated into Learning Management Systems},
  author={Alier, Marc and Pereira, Juanan and García-Peñalvo, Francisco José and Casañ, Maria Jose and Cabré, Jose},
  journal={Computer Standards & Interfaces},
  year={2024}
}
```

## Acknowledgments

LAMB is developed and maintained by researchers from:
- UPC Universitat Politècnica de Catalunya - Barcelona Tech
- Universidad de Salamanca
- UPV/EHU Computer Science Faculty
