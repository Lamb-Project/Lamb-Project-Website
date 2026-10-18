---
title: Bring AI into your course
description: A practical route from a teaching purpose to a tested learning assistant.
translationKey: teaching
weight: 1
---

LAMB gives teachers an environment for creating RAG learning assistants, preparing rubric-based pre-assessment (PRE), and analysing and improving their activities, with LAMB LEGATUS and an optional connection to the teacher's Moodle courses. Students access the configured tools from the institution’s LMS, including Moodle or Canvas through LTI. You can prepare an assistant in a web interface without writing application code.

## RAG assistants from course materials

Retrieval-augmented generation (RAG) supplies an assistant with relevant passages from selected sources when it responds. Use it to build an assistant around your course readings, reference documents or teaching materials.

You define its role and instructions, choose an available model and connect the sources. The institution manages the permitted models and access. Test both retrieval and the generated answer: retrieving a relevant passage does not guarantee that the answer uses it correctly.

{{< capture src="/images/guides/kb-query.png" alt="Knowledge Base Details with a query about the course reference code and office hours, and the retrieved passage from the course notes" caption="Checking retrieval: the query returns the passage from the course notes. LAMB 0.8, demonstration data." >}}

[Connect and check your materials →](/en/guides/knowledge/)

[Research: improving retrieval of educational terminology →](/en/research/#improving-retrieval-for-educational-terminology)

## Rubric-based pre-assessment (PRE)

Create an assistant that applies a rubric to student work and prepares feedback or a proposed assessment for review. PRE supports the teacher’s assessment process: the teacher evaluates the proposal and decides what to communicate or record.

LAMB includes rubric authoring and file-evaluation workflows. Define the criteria, provide the intended rubric to the evaluation assistant and test it with representative submissions. Review the feedback and proposed scores before using them in a course. If the activity returns a grade to the LMS, check both the teacher review and the gradebook result.

{{< capture src="/images/guides/pre-review.png" alt="Teacher view of a file-evaluation activity: one student submission with the AI score, a collapsed AI feedback button, the final score, and a button to sync grades to Moodle" caption="A file-evaluation activity: the AI proposes a score and feedback with the teacher's rubric; the teacher reviews, accepts or edits the grade, and sends it to the gradebook. LAMB 0.8, 16 October 2026, synthetic data, with an LTI test tool in place of Moodle." >}}

[Choose the course activity and LTI path →](/en/guides/0.8/lti/#course-activities)

[Research: a proof of concept for rubric-based AI assessment →](/en/research/#ai-assisted-assessment-in-software-engineering)

## LAMB LEGATUS: an agent for the teacher

LAMB LEGATUS is an agent built into LAMB. A language model on its own only writes text. LAMB LEGATUS is the harness around it: tools that read and change your work in LAMB and read your Moodle course, the permissions of your account, and an approval step the model cannot skip. The name comes from the Roman legatus, who acted on behalf of the Senate.

You describe what you want in plain language, and it works beside the page you are on:

- **Design by conversation:** create an assistant, improve its instructions, prepare a knowledge base or a rubric.
- **Tests built in:** it proposes test cases, saves them when you agree, runs them and gives its own evaluation of each answer for you to check.
- **Your Moodle course, within reach:** with the Moodle connection, it lists and reads your course resources and imports the ones you choose.
- **Learning scenarios:** describe your audience, purpose and constraints once, and new conversations start from them.

**It asks before it changes your work.** Creating, updating, publishing or deleting an assistant, changing a knowledge base, rubric or learning scenario, and every Moodle import or write wait on an approval card; the change you approve is the change LAMB makes. Reading, and saving, running and evaluating tests, need no card. Your organization chooses the model it uses.

{{< capture src="/images/guides/legatus-improve-prompt.png" alt="LAMB LEGATUS panel beside the Learning Assistants list, with an approval card to update an assistant's instructions" caption="A proposal to update an assistant's instructions, waiting for the teacher's approval. Nothing has changed yet. LAMB 0.8, demonstration data." >}}

{{< capture src="/images/guides/legatus-tests-saved.png" alt="Three test cases saved by LAMB LEGATUS in the assistant's Tests tab" caption="Test cases LAMB LEGATUS proposed and saved after the teacher agreed, before running them. Saving tests needs no approval card. LAMB 0.8, demonstration data." >}}

[Work with LAMB LEGATUS →](/en/guides/0.8/legatus/)

## Your Moodle course, connected

LAMB connects to Moodle in two kinds of way, and **no Moodle plugin is required** for either.

- **Activities in your course.** LAMB activities are added to a Moodle course as an External tool through standard LTI 1.1: a chat with your assistants, file evaluation with a rubric and, where your organization has set it up, [LLM access](/en/institutions/ai-governance/) with personal keys for students' own tools. Students open them from the course. For file evaluation, the teacher reviews the grades and sends them to the Moodle gradebook. A single published assistant or Creator access can also be added through LTI; see [the LTI guide](/en/guides/0.8/lti/).
- **Your course, for LAMB LEGATUS.** With the optional Moodle connector, you connect your own Moodle account on the **Your Moodle** page (the **Moodle** link in LAMB's top bar). LAMB LEGATUS can then list your courses, read their resources and import selected material into a knowledge base, through Moodle's standard web services and the permissions of your account.

Your LAMB administrator enables the connector, and Moodle must expose the standard services. The connector only reads, unless your organization allows forum posts or saving grades; then each write needs its own approval, one learner at a time for grades. Student names, posts and grades that LAMB LEGATUS reads reach the organization's configured model provider; with an outside provider, they leave your institution. Use the institution's approved data and model settings.

{{< capture src="/images/guides/connector-import-approval.png" alt="Your Moodle page, connected, beside a LAMB LEGATUS approval card to create a knowledge base from a Moodle folder, listing two files" caption="Your Moodle, connected, and an import from a Moodle folder waiting for approval: the card lists the source, the destination and each file. Demonstration Moodle 4.5 and LAMB 0.8, synthetic account." >}}

[Connect LAMB and Moodle →](/en/guides/0.8/moodle/)

## Analyse and evaluate assistant behaviour

Use repeatable test cases and saved results to examine how an assistant responds. Activity views and analytics provide available usage and conversation evidence according to permissions and the configured review policy. LAMB LEGATUS can help interpret that evidence and suggest improvements.

Compare actual responses with your learning purpose and rubric. Test runs and student activity are different kinds of evidence; a usage count alone does not demonstrate learning benefit.

{{< capture src="/images/guides/tests-result.png" alt="Assistant Tests tab with one saved test case and its run, showing the question and the assistant's answer" caption="A saved test case and its run against a RAG assistant. The teacher reads the response and records an evaluation. LAMB 0.8, demonstration data." >}}

[Test an assistant →](/en/guides/testing/)

## Start with a teaching purpose

An assistant might help students practise explaining a concept, find a passage in course notes, or work through a question without immediately giving away the answer. These are possible teaching designs: their quality depends on your instructions, sources, model and tests.

For a first activity, keep the purpose narrow. For example: “Help students find the relevant section of the course handbook and explain it in their own words.” Decide what the assistant should do when it cannot find an answer.

## A small first project

1. **Get access.** Your institution supplies a LAMB address or a launch link in its LMS. The public project website is not a shared login service.
2. **Create an assistant.** Give it a purpose, instructions and an institution-approved model.
3. **Add course material.** Connect an available knowledge base, then check that the intended passages can be retrieved.
4. **Test its behaviour.** Try a normal question, an unsupported question and a misleading request. Read the answers yourself.
5. **Publish for a course.** Follow your institution's LMS integration path and check access as a student.

[Create your first assistant →](/en/guides/first-assistant/)

## What remains your decision

You choose the learning objective, the materials students may use and what counts as a useful answer. Providing documents does not guarantee correct answers or references. Explain the assistant's role to students and give them a way to raise problems.

The available controls and permissions depend on your institution’s installed revision and configuration. Review AI-generated feedback and suggestions according to your course’s assessment process.

## If you already use LAMB

- [Connect and check course materials](/en/guides/knowledge/).
- [Build a repeatable set of test cases](/en/guides/testing/).
- [Make an assistant available through your LMS](/en/guides/publishing/).
- [Check versions and feature availability](/en/availability/).

For account access and course permissions, contact your institutional support team. For a reproducible product issue, use the [project issue tracker](https://github.com/Lamb-Project/lamb/issues) without including private course content or credentials.
