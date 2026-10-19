---
title: Prepare a LAMB 0.8 installation
description: Select a revision, follow the deployment instructions and check the service before a teaching pilot.
translationKey: v08-installation
weight: 8
aliases: [/guides/installation/]
---

**For system administrators.** Begin in an isolated test environment. This edition documents the 0.8 candidate; it does not announce a stable release or replace your institution's deployment process.

## 1. Select the version you will run

Use the [LAMB 0.8 source line](https://github.com/Lamb-Project/lamb/tree/lamb-0.8). Record the exact revision you deploy and use its documentation. Do not combine instructions from a different branch with the selected containers.

The references below are pinned to the candidate reviewed for this edition, `ee28560e`:

- [Docker installation instructions](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/deployLocal.md).
- [Production deployment reference](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/deployNext.md).
- [Repository README](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/README.md).

Some deployment documents retain the name **LAMB NEXT**. Use the selected revision's files and configuration rather than treating that name as a different release. The general installation guide's default branch is not a substitute for selecting the 0.8 candidate explicitly.

## 2. Prepare the environment

Arrange Git, Docker and Docker Compose v2 for the documented container route. Choose the installation directory and ports, generation and embedding providers, service addresses and initial administration settings. Store credentials outside public repositories and screenshots.

A local Docker setup and a production service have different requirements. A student-facing deployment needs an institutional address, HTTPS, access policy, backups and a named operator. [Plan those responsibilities](/en/institutions/operations/) before inviting a course.

## 3. Follow the selected deployment guide

Use that revision's environment template and deployment instructions. Set the intended model and embedding services explicitly. A working web page does not establish that model access, retrieval or the LMS connection is ready.

For an existing installation, back up the persistent data and rehearse the upgrade on a separate copy. Confirm a restore before changing the service used by teachers or students.

## 4. Verify a small teaching workflow

1. Sign in with the intended creator account and organization.
2. Create an assistant and obtain an answer from the configured model.
3. Add a synthetic course document and verify retrieval of a known passage.
4. Publish the assistant and test your chosen [LTI entry path](/en/guides/0.8/lti/) with instructor and demonstration learner accounts.
5. Check the relevant activity controls, conversation policy and any grade return.
6. Confirm who will handle updates, access requests and incidents.

**Expected result:** a documented, repeatable pilot on a known revision, with the teaching workflow checked and an operator assigned.

## Want to discuss the setup?

The LAMB team offers [training](/en/contact/#training) and [consultancy](/en/contact/#consultancy); consultancy can start with a demonstration. Write to contact-lamb-project@proton.me and say which environment and teaching workflow you are considering.
