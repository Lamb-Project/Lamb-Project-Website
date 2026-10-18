---
title: Privacy, GDPR and AI governance
description: Understand which choices determine where content is processed and who can access it.
translationKey: privacy
weight: 7
---

LAMB provides controls for institutions to manage AI access, supported model providers and data handling within their learning environment. These controls support the institution’s privacy and AI-governance work, including its GDPR responsibilities.

The institution determines how the service is used and operated. Configuring LAMB is one part of that work; the software does not provide an automatic guarantee of GDPR compliance. The [European Commission’s GDPR guidance](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en) explains organizational responsibility for complying with, and demonstrating compliance with, data-protection principles.

## Controls and institutional decisions

| Area | What to manage |
|---|---|
| Access | Organizations, accounts, authoring permissions and LMS activity access |
| Model providers | Approved generation, embedding and authoring-agent services, using local or cloud inference |
| Course content | Which materials can be imported or sent to a model, and who may use them |
| Conversation review | Which review features are enabled, who has access and what learners are told |
| Students' model access | Whether teachers may hand out LLM access keys, which models, teacher allowances, per-student limits and timetables, and what students are told before taking a key |
| Moodle connection | Whether the connector is enabled, which site it can use and which operations are permitted |
| Operation | Retention, backups, provider agreements and institutional procedures for handling requests |

Some of these are product settings; others are institutional policies and operational responsibilities. Evaluate them together for the selected deployment.

## Where information is processed

When an assistant uses an external model provider, the content sent in that request is processed by that provider. The same holds for students' own tools in an LLM access activity: their requests go through the institution's gateway, which with LAMB's shipped configuration records the time, model and tokens of each request, linked to the student, and not the text ([the last mile for your AI](/en/institutions/ai-governance/)). This may include the student's message, conversation context and relevant passages from course materials. Document preparation or retrieval may also use an external embedding service. Authoring features can have their own model configuration.

Running LAMB on your own server does not make these external services local. A local-model deployment must still account for every service it enables.

## Who can read conversations

Conversation access depends on the integration, permissions and configuration. Some supported workflows expose conversations to authorized reviewers. Institutions should tell students what access is enabled and should not describe conversations as anonymous without verifying the actual configuration and behaviour.

Publishing, sharing and administrative access are different concepts. An unpublished assistant is not a general guarantee that no other authorized person can access its information.

## Questions to settle before a course starts

| Question | Who should be able to answer it? |
|---|---|
| Which services process prompts, documents and embeddings? | System operator and provider owner |
| Which people can see conversation content? | LMS/LAMB administrator and teaching lead |
| How long are records and backups retained? | Institutional service owner |
| What happens when a student or teacher leaves? | Account and course administrators |
| What should students avoid entering? | Teaching team and institutional privacy contact |
| Who handles access, correction or deletion requests? | Institutional service and privacy teams |

## A basis for informed decisions

The [Safe AI in Education Manifesto](https://manifesto.safeaieducation.org) informs the project. It is not a certification of any particular deployment. [LAMB and the Safe AI in Education Manifesto](/en/safe-ai/) sets out LAMB's response to each principle and to the EU rules on AI. Open source allows inspection; responsible operation still requires people, tested configurations and institutional decisions.

[Plan a pilot](/en/institutions/) · [Plan operation](/en/institutions/operations/)
