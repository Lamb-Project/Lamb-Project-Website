---
title: Plan an operated service
description: The operational decisions to settle before deploying LAMB for a course.
translationKey: operations
weight: 1
---

**For system and LMS administrators.** Select a reviewed LAMB revision and a staging environment before following deployment instructions. A running container is not a completed teaching-service acceptance test.

## Agree the service boundaries

If teachers will hand out model access to students, plan the optional gateway that LAMB 0.8 ships as an add-on: its database, the public address students paste into their tools, and the system administrator's proxy connection for each organization. See the [installation notes](https://github.com/Lamb-Project/lamb/blob/lamb-0.8/Documentation/installation/token-dealer.md) and [the last mile for your AI](/en/institutions/ai-governance/).


Identify the service owner, the hosting environment, the model providers, the expected teaching load and the people who handle access requests. Decide who approves updates and who can restore the service.

Model access may incur costs. Account for generation, embedding and any enabled auxiliary model services. Confirm the limits available in your selected deployment instead of assuming every version has the same budget controls.

## Use instructions for the selected revision

Start with the [0.8 installation guide](/en/guides/installation/) for pinned deployment references and the pilot sequence.

The [public LAMB repository](https://github.com/Lamb-Project/lamb) includes local and production deployment resources. Select the branch or tag you intend to deploy and use that revision's README and deployment instructions. Do not mix the documentation of one line with the containers of another.

LMS integration also requires an institution-approved External Tool configuration. The public tool-template guide describes **LTI 1.1**; verify that this protocol and your chosen integration path are permitted by your institution.

## Acceptance before student use

- Teacher access works with the intended account and organization.
- The selected model responds, and a known source can be retrieved.
- A student can launch the intended activity and cannot gain instructor controls.
- Conversation visibility, provider processing and retention have been explained.
- Any grade return has been checked in the LMS using a demonstration learner.
- A backup can be restored into an isolated environment.
- Updates, incident reporting and support have named owners.

Keep credentials, logs containing conversations and backups outside public repositories. This is operational guidance, not a claim that completing a checklist establishes regulatory compliance.

[Privacy and data questions](/en/privacy/) · [Version boundaries](/en/availability/)
