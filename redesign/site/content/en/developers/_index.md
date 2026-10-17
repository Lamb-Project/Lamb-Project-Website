---
title: Build a learning application with LAMB
description: Use public integration resources to build an educational tool or contribute to LAMB.
translationKey: developers
weight: 3
---

LAMB provides a management layer for assistants and model access that educational applications can use within an institutional environment. Build a new teaching tool, automate a workflow or contribute to the free-software ecosystem. LAMB is licensed under GNU GPL v3.

## Build a tool for a learning activity

The public **lamb-tool-template** demonstrates a tool launched from an LMS, using an authorized LAMB assistant and returning an instructor-approved result to the LMS. It gives an application team a concrete place to begin.

You need a LAMB installation that supports creator API access, permission to use that access, and a published assistant available to your account. An institution must also permit the LTI version used by the tool. The demonstrated template uses LTI 1.1.

[See the illustrated tool walkthrough →](/en/guides/learning-tool/)

## Tools for development and testing

| Tool | What it helps you do | Public source |
|---|---|---|
| LAMB LTI Test Tool | Exercise LTI 1.1 launches, instructor/learner roles, launch parameters and Basic Outcomes grade return during development | [LTI Test Tool](https://github.com/Lamb-Project/lamb-lti-test-tool) |
| Moodle CLI | Work with Moodle’s standard web-service APIs from the command line, within the account’s permissions | [Moodle CLI](https://github.com/Lamb-Project/moodle-cli) |
| LAMB CLI | Manage assistants, knowledge bases, rubrics, tests, analytics and supported agent workflows from the terminal | [LAMB CLI](https://github.com/Lamb-Project/lamb/tree/lamb-0.8/lamb-cli) |
| LAMB tool template | Start a separately hosted educational application with authorized assistant access and LMS integration | [Tool template](https://github.com/Lamb-Project/lamb-tool-template) |

Use the LTI Test Tool to inspect and rehearse an integration, then validate it in the institution’s actual LMS configuration. Its development environment is not a certification of Moodle or Canvas compatibility.

Moodle CLI and LAMB’s Moodle connector use standard web services; they do not require a custom Moodle plugin. The available operations depend on enabled services, account permissions and, for the connector, LAMB’s organization policy.

## Understand the public contract

LAMB's creator API exposes supported models and chat completions through an OpenAI-compatible interface on deployments with that capability. Compatibility describes the supported interface; it does not promise every endpoint or option of another service.

Use the assistant identifiers returned by the API. Keep personal keys on the tool's server, never in student-facing JavaScript. Check permission and version prerequisites before assuming an empty response means a feature is broken.

The [template repository](https://github.com/Lamb-Project/lamb-tool-template) provides its public setup instructions. Pin the revision you test and record the LAMB version it is paired with. The template walkthrough links to a dated revision rather than describing an untested future checkout.

## Contribute to the project

LAMB is distributed under GPL v3. You can report an issue, improve documentation, test a change or propose a contribution through the [source repository](https://github.com/Lamb-Project/lamb).

[Prepare a useful contribution →](/en/developers/contribute/)

If an AI agent is helping you evaluate or develop a tool, start with the [public agent reading guide](/en/agents/). Public documentation describes supported use; internal architecture and design notes are not part of this website.
