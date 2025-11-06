---
title: "For Developers"
description: "Documentation and resources for contributing to the LAMB project"
date: 2025-05-29
draft: false
weight: 200
---

# For Developers

## LAMB is an Open Source Project

**LAMB** is an **open source** project developed under GPL v3 license. We're on GitHub and we greatly appreciate community collaborations and contributions.

<div style="text-align: center; margin: 2rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb" style="primary" >}}🔗 View on GitHub{{< /button >}}
</div>

## 🤝 Contributions

We appreciate all types of contributions:

- **Pull Requests** with new features or improvements
- **Bug fixes** and reported issues
- **Documentation** and translations
- **Testing** and issue reporting
- **Ideas** and improvement suggestions

## 📚 Technical Documentation

We maintain complete and updated documentation for developers:

### System Architecture

Complete document on LAMB architecture, including:
- System components
- Data architecture
- Completion pipeline
- Plugin architecture
- Frontend and backend architecture

<div style="margin: 1rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/lamb_architecture.md" style="secondary" >}}📖 View Architecture Documentation{{< /button >}}
</div>

### Product Requirements Document (PRD)

Product requirements document with:
- Functional specifications
- Use cases
- Workflows
- Technical requirements

<div style="margin: 1rem 0;">
  {{< button href="https://github.com/Lamb-Project/lamb/blob/main/Documentation/prd.md" style="secondary" >}}📋 View Product Requirements Document (PRD){{< /button >}}
</div>

## 🛠️ Tech Stack

- **Backend**: FastAPI (Python 3.11+)
- **Frontend**: Svelte 5, SvelteKit
- **Database**: SQLite
- **Vector Store**: ChromaDB
- **Containerization**: Docker, Docker Compose

## 🚀 Getting Started with Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Lamb-Project/lamb.git
   cd lamb
   ```

2. **Set up environment**:
   ```bash
   export LAMB_PROJECT_PATH=$(pwd)
   docker-compose up -d
   ```

3. **Access services**:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:9099
   - Open WebUI: http://localhost:8080

## 💬 Community

- **GitHub Issues**: To report bugs or request features
- **GitHub Discussions**: For questions and discussions
- **Pull Requests**: Welcome with improvements and new features

## 📖 Academic Publication

If you use LAMB in your research, please cite our work:

**"LAMB: An open-source software framework to create artificial intelligence assistants deployed and integrated into learning management systems"**

- **Authors:** Marc Alier, Juanan Pereira, Francisco José García-Peñalvo, Maria Jose Casañ, Jose Cabré
- **Journal:** Computer Standards & Interfaces, Volume 92, March 2025
- **DOI:** [10.1016/j.csi.2024.103940](https://doi.org/10.1016/j.csi.2024.103940)

---

<div style="text-align: center; margin: 2rem 0;">
  <p><strong>Join us on GitHub and help make LAMB a better platform for education!</strong></p>
  {{< button href="https://github.com/Lamb-Project/lamb" style="primary" >}}🌟 Star on GitHub{{< /button >}}
</div>

