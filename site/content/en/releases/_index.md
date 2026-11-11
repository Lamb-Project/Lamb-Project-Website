---
title: Release notes
description: What changed in each LAMB version, why it changed and what an installation needs to do about it.
translationKey: releases
weight: 9
---

These pages record what each LAMB version adds and changes, the reason for each change and what an administrator has to do when upgrading. They are written against the code: every entry names the public issue or the place in the source where it can be checked.

| Version | Status on 11 November 2026 | Notes |
|---|---|---|
| **0.9** | Release candidate, on the development branch since 11 November 2026. Not tagged. | [What's new in LAMB 0.9](/en/releases/0.9/): LTI 1.3 for course activities, prompt filters, LAMB LEGATUS Auto mode, assistant activity analysis |
| **0.8** | Tagged `v0.8` on 11 November 2026. | [What's new in LAMB 0.8](/en/releases/0.8/): course activities as modules, file evaluation, LLM access. [Source at the tag](https://github.com/Lamb-Project/lamb/tree/v0.8) |
| **0.7** | Tagged `v0.7` on 20 October 2026. | [What's new in LAMB 0.7](/en/releases/0.7/): LAMB LEGATUS, the Moodle connection, support access, creator API keys. [Source at the tag](https://github.com/Lamb-Project/lamb/tree/v0.7) |

## Coming from 0.7 {#coming-from-07}

An installation that moves from 0.7 to 0.9 receives the 0.8 and the 0.9 changes together, because 0.9 is built on 0.8. Read both pages. The short version:

- **Nothing existing is removed.** Individual-assistant publication, Creator access from the LMS and the LTI 1.1 activity tool keep working as they did. LTI 1.3 is an addition to the activity tool, not a replacement.
- **Three kinds of course activity** replace the single chat activity: chat, file evaluation and LLM access. The teacher chooses one on the first launch.
- **The database upgrades itself** when the new version starts (five migrations, numbers 28, 31, 33, 34 and 35). Back up the database first, as for any upgrade.
- **One behaviour changes for conversations in progress.** From 0.9 a conversation keeps the system prompt it started with. See [Upgrade notes](/en/releases/0.9/#upgrade-notes) before you choose the day.
- **Two features need an administrator before anyone sees them:** LTI 1.3 (register your LMS) and LLM access (deploy the optional gateway).

## How to read the status {#status}

A **release candidate** is a version under test. It runs on the project's development instance and may still change before it is tagged. A **tagged** version is the one installations are expected to run. The label in the top left corner of LAMB Creator shows the version an installation runs, and what a teacher sees also depends on what the organization has enabled. See [Versions and feature availability](/en/availability/).

The illustrated guides remain at [Guides and versions](/en/guides/). They document 0.8; where 0.9 changes a guide's procedure, the 0.9 notes say so.
