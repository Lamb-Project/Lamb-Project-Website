---
title: The last mile for your AI
description: Give each student access to your institution's models, in the right amount and at the right time, under rules set by the organization and the teacher.
translationKey: ai-governance
weight: 0
---

**For institutions, schools and the teachers who work in them.** Many institutions have settled where inference runs: local models, or a provider that meets their requirements. The question that remains is the last mile. How does each student get access to those models, according to their needs, under rules their school and their teacher set?

An inference service knows models, keys and tokens. It does not know who is enrolled, in which course, with which role, in which school. Your LMS knows, and LAMB learns it through LTI each time a student opens an activity, and maps it to its own organizations. That is what lets LAMB deliver **the right model, to the right person, in the right amount, at the right time.**

<figure class="lamb-diagram"><img src="/images/diagrams/last-mile.svg" alt="Diagram: your AI infrastructure gives LAMB the authorized models; your LMS tells LAMB through LTI who is enrolled, in which course, with which role and in which school; LAMB's AI governance layer applies organization rules and the teacher's activity, and a gateway gives each person a scoped key. In LAMB 0.8 it governs students' own tools; assistants, LAMB LEGATUS and learning apps are in design." width="1200" height="800"><figcaption>Solid: governed in LAMB 0.8. Dashed: in design.</figcaption></figure>

## How it works in LAMB 0.8

LAMB does not carry the traffic itself. An open-source gateway ([LiteLLM](https://github.com/BerriAI/litellm), shown as **Proxy** in LAMB's admin screens) sits in front of your models, and LAMB controls it: it issues a personal key for each student in an activity, sets the key's limits and timetable, and reads back how many tokens each key has used. The gateway ships with LAMB 0.8 as an optional add-on to the deployment.

Limits are counted in tokens. A token is a piece of a word; a page of text is roughly 500 to 700 tokens.

## Who decides what

- **The institution** runs the gateway and chooses which models it serves. Its system administrator connects each organization to the gateway once.
- **Each school or department** is an organization in LAMB, with its own administrators and rules. The organization admin decides whether teachers may hand out model access, how tokens are limited (a shared pool per activity, a personal allowance per student, or both), how many tokens each teacher may commit, with exceptions for named teachers, and which models teachers may offer.
- **The teacher** adds an **LLM access** activity to a course in the LMS and decides, inside those rules, the pool, how much each student may use per time slot and in total, and when the activity is open: on chosen days and hours, between two dates, or all the time.
- **The student** opens the activity from the course, reads what is recorded, and takes a personal key for their own tools: any OpenAI-compatible tool, such as VS Code with Continue or Cline, Aider, Zed or Cursor, and Claude Code.

One Moodle, one LAMB, many strategies: the institution sets the frame, each school sets its own rules, and the teacher decides in the course.

{{< capture src="/images/guides/governance-org-policy.png" alt="LLM access settings of an organization: policy Both, default allowance per teacher 300000 tokens, one teacher exception of 1000000, model course-model, 10-minute time slot, and a table of use by teacher" caption="An organization's LLM access rules in LAMB 0.8, with the use by teacher." >}}

## What is accounted for

The organization admin sees, for each teacher, the allowance, what the teacher has **committed** (pools, plus the totals of students who have taken a key) and the tokens actually used. The teacher sees each student's use in the current time slot and in total, and refused requests.

Before taking a key, the student reads what is recorded. With the configuration shipped with LAMB, the gateway's database records the time, the model and the number of tokens of each request, linked to the student so that the teacher can see their usage, and not the text of prompts or answers. If the model runs at an outside provider, that provider receives the text under the institution's account, without the student's name. The gateway operator's logs fall under the institution's own policies. [Privacy, GDPR and institutional control](/en/privacy/) covers the rest of LAMB.

## What 0.8 covers, and its limits

- These rules govern **LLM access** activities: personal keys for students' own tools. Chat and file-evaluation activities run the organization's assistants through the organization's model provider, and their use is not counted against these allowances.
- **A firm ceiling needs a pool.** In 0.8 a student who replaces their key starts a new total, and a teacher who raises the per-student total later is not checked against their allowance again. Only an activity pool caps what an activity can use.
- **Closing the activity is what stops access.** In 0.8 a blocked student can still replace their key, and a student who leaves the course keeps their key until the teacher revokes it or the activity closes.
- The gateway has been tested as one instance; running several for load or availability is not yet tested.

We are designing the same governance for LAMB's assistants and LAMB LEGATUS, adding budgets per model.

## Start

- **Organization admins and teachers:** [give students model access under your rules](/en/guides/0.8/llm-access/), step by step, with every screen.
- **System operators:** the gateway's [installation notes](https://github.com/Lamb-Project/lamb/blob/lamb-0.8/Documentation/installation/token-dealer.md) in the LAMB repository, and [plan the operated service](/en/institutions/operations/).
- **Institutions planning a strategy:** the LAMB team offers [consultancy on AI governance](/en/contact/#consultancy).
