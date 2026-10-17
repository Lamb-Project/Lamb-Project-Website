---
title: Choose your LMS entry path
description: Find the right LTI route for an assistant, educator access, a course activity or a separate learning tool.
translationKey: v08-lti
weight: 4
aliases: [/guides/lti/]
---

**For educators and LMS administrators.** LAMB 0.8 retains the existing LTI entry paths. There is no requirement to replace a course link simply because a newer activity path exists. Use the path your institution has configured and test it with the intended roles.

## Which path fits your task?

| What you want to do | Entry path | What to arrange |
|---|---|---|
| Let students use one published assistant | Individual-assistant LTI publication | Publish the assistant and use its supplied launch details in the LMS |
| Let educators open LAMB Creator from the LMS | Organization Creator access | An administrator configures the organization's Creator tool and access permissions |
| Configure a course activity and launch it as teacher or learner | LAMB activity tool | An instructor completes the activity setup before learners enter |
| Launch a separately hosted educational application | The application's own LTI tool | Configure that application's launch details and its authorized access to LAMB |

These are distinct entry points. A consumer key, shared secret or launch URL from one is not interchangeable with another. The documented integrations use **LTI 1.1**; this guide does not claim LTI 1.3 support.

## One published assistant

1. Create and test the assistant in LAMB Creator.
2. Publish it using the assistant's publication control.
3. Use the launch URL, consumer key and shared secret supplied for that assistant when configuring the LMS External Tool.
4. Open the course activity with a demonstration learner account and check that the correct assistant is available.

Your LMS administrator may manage these settings for you. Keep the publication credentials private. [Review the complete publication checklist](/en/guides/0.8/publishing/).

## Educator access to Creator

1. Ask your LAMB and LMS administrators to configure Creator access for your organization.
2. Open the institution-provided Creator link from the LMS.
3. Check that you arrive in the intended organization with the appropriate authoring permissions.
4. [Create your first assistant](/en/guides/0.8/first-assistant/).

Creator access is an authoring route. It does not by itself publish an assistant or create a student activity. Direct sign-in at your institution's LAMB address remains a separate access option where enabled.

## Course activities

An institution can configure the LAMB activity tool in its LMS. The first instructor launch sets up the activity; subsequent instructor and learner launches open the corresponding view. A learner cannot complete the instructor's initial setup.

The 0.8 candidate includes chat, file-evaluation and LLM-access activity modules. The options available to a teacher depend on the installation and its configuration. Use the exact instructions your administrator provides for the selected module.

- **Chat:** select the intended published assistants and review conversation-visibility settings.
- **File evaluation:** check the task, submission requirements, rubric and instructor review before any grade is returned.
- **LLM access:** confirm that the organization has configured model access and that the course allowance and schedule match the intended activity.

Before student use, test both the instructor and learner views. For assessment, check the resulting LMS grade as well as the launch. For model access, check that the learner's tool can make an authorized request within the configured conditions.

## Separately hosted learning tools

An application built from the LAMB tool template has its own launch and configuration. It uses an authorized published assistant through LAMB's API. Follow the [illustrated application walkthrough](/en/guides/0.8/learning-tool/); do not paste the application's launch details into a different LAMB tool configuration.

**Expected result:** you can identify which entry path your course uses, who configures it and what to test as teacher and learner. If a launch fails, report the path, installed version and role to your institution's support team without sharing secrets.
