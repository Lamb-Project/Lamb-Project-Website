---
title: Bring AI into your course
description: A practical route from a teaching purpose to a tested learning assistant.
translationKey: teaching
weight: 1
---

LAMB gives teachers an environment for creating RAG learning assistants, preparing rubric-based pre-assessment (PRE), and analysing and improving their activities. Students access the configured tools from the institution’s LMS, including Moodle or Canvas through LTI. You can prepare an assistant in a web interface without writing application code.

## RAG assistants from course materials

Retrieval-augmented generation (RAG) supplies an assistant with relevant passages from selected sources when it responds. Use it to build an assistant around your course readings, reference documents or teaching materials.

You define its role and instructions, choose an available model and connect the sources. The institution manages the permitted models and access. Test both retrieval and the generated answer: retrieving a relevant passage does not guarantee that the answer uses it correctly.

[Connect and check your materials →](/en/guides/knowledge/)

[Research: improving retrieval of educational terminology →](/en/research/#improving-retrieval-for-educational-terminology)

## Rubric-based pre-assessment (PRE)

Create an assistant that applies a rubric to student work and prepares feedback or a proposed assessment for review. PRE supports the teacher’s assessment process: the teacher evaluates the proposal and decides what to communicate or record.

LAMB includes rubric authoring and file-evaluation workflows. Define the criteria, provide the intended rubric to the evaluation assistant and test it with representative submissions. Review the feedback and proposed scores before using them in a course. If the activity returns a grade to the LMS, check both the teacher review and the gradebook result.

[Choose the course activity and LTI path →](/en/guides/0.8/lti/#course-activities)

[Research: a proof of concept for rubric-based AI assessment →](/en/research/#ai-assisted-assessment-in-software-engineering)

## The authoring agent and Moodle

LAMB’s authoring agent helps you create, analyse and improve assistants and learning activities. You can ask it to prepare a configuration, inspect test results or available activity evidence, and propose changes for your review.

With the optional Moodle connector, the agent can inspect authorized course resources and teaching activity and help create assistants directly from selected course content. For example, it can help you select readings, import them into a knowledge base, connect them to an assistant and check retrieval.

**No additional Moodle plugin is required.** The connector uses Moodle’s standard web services. Your LAMB administrator enables it, Moodle must expose the required services, and your account must have the necessary course permissions. Moodle permissions continue to apply.

Connecting the account happens in LAMB’s Moodle page. You review imports and proposed changes before they run. Course information used by the agent can reach the configured AI provider, so use the institution’s approved data and model settings.

## Analyse and evaluate assistant behaviour

Use repeatable test cases and saved results to examine how an assistant responds. Activity views and analytics provide available usage and conversation evidence according to permissions and the configured review policy. The agent can help interpret that evidence and suggest improvements.

Compare actual responses with your learning purpose and rubric. Test runs and student activity are different kinds of evidence; a usage count alone does not demonstrate learning benefit.

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
