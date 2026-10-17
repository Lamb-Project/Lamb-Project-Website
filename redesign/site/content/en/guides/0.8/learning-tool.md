---
title: Explore a LAMB-connected learning tool
description: A real walkthrough of instructor setup, learner chat and grade return using the public tool template.
translationKey: v08-learning-tool
weight: 5
aliases: [/guides/learning-tool/, /tool-template/]
---

**For application developers and teaching-innovation teams.** This walkthrough shows the public [lamb-tool-template](https://github.com/Lamb-Project/lamb-tool-template/tree/c8c6f2fecc4a55da8e67574ce5857270552a7db5), recaptured on 17 October 2026, connected to LAMB 0.8. It uses a demonstration LMS, real assistant responses and synthetic participants. These are not screenshots of a production Moodle course.

## Before you begin

You need a supporting LAMB installation, permission to create a personal creator API key, an assistant published and available to that account, and a local tool installation following the template's README. The demonstrated template uses LTI 1.1 and Basic Outcomes grade return.

Have your administrator enable creator API access where needed. Keep the API key on the tool server and use a separate key for each deployment. Students do not need this key. Pin the template revision and test it against your LAMB deployment.

## 1. Configure the tool

Run the template using the public README for the checked revision. Open its administration page and supply the LAMB address, creator key and the tool's LMS credentials. The template expects the LAMB root address and appends its API paths itself; follow its configuration contract rather than copying a URL from another API client.

{{< capture src="/images/guides/tool-admin.png" alt="Tool-template administration form with service address and write-only credential fields" caption="Template administration connected to the local LAMB 0.8 instance, 17 October 2026. Secret fields are empty." >}}

## 2. Set up an activity as an instructor

Register the local tool with the [LAMB LTI Test Tool](https://github.com/Lamb-Project/lamb-lti-test-tool), then launch it as an instructor from a demonstration course. Choose the available published assistant. For the grade-return exercise below, select **Enable grade passback**, then save the activity settings.

{{< capture src="/images/guides/tool-setup.png" alt="Instructor setup page for selecting an assistant and configuring a learning activity" caption="Instructor setup after a signed launch, with the published LAMB 0.8 demonstration assistant available." >}}

## 3. Launch as a learner

Use the test LMS's learner launch. Ask the assistant a question and check its response. The language of the example comes from its assistant configuration; your own activity can use a different language.

{{< capture src="/images/guides/tool-chat.png" alt="Learner chat showing an actual response from a LAMB assistant through the tool template" caption="A new response from the LAMB 0.8 RAG assistant through the tool template, 17 October 2026: CORAL-19 and Tuesday at 10:00." >}}

## 4. Review a result before sending it

Return as an instructor, inspect the activity and enter a deliberate test grade. Send it through the tool's grade-return action, then check the value in the test LMS.

{{< capture src="/images/guides/tool-grade.png" alt="Instructor dashboard with review and grade-return controls" caption="Instructor view of the new demonstration activity, 17 October 2026. The example grade is entered but not submitted in this capture." >}}

**Known limitation of this snapshot:** a saved normalized grade such as `0.8` reloads directly into an input labelled 0–10. Do not reuse the saved display as though it were already on the 0–10 scale. The display conversion must be corrected and save → reload → save tested before classroom grading. This example is not a production-readiness claim.

## 5. Evaluate the complete result

Check learner/instructor separation, authorized assistant access, the actual answer, and the grade recorded by the LMS. A response proves connectivity for that case, not educational quality. A local mock-LMS pass is not acceptance on your institution's LMS.

For a real deployment, agree HTTPS hosting, supported LTI settings, credential handling, backups and support with your institutional team. Use public installation and interface instructions from the chosen revision. This guide intentionally focuses on using the tool rather than reproducing LAMB's internal architecture.

[Developer starting point](/en/developers/) · [Operational planning](/en/institutions/operations/)
