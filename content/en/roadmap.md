---
title: "LAMB Project Roadmap"
description: "Development roadmap for the LAMB Learning Assistants Manager and Builder project"
date: 2025-01-08
draft: false
---

# LAMB PROJECT ROADMAP

Last update 8/7/2025

## LAMB Main Project 

The main lamb project implements the Learning Assistant manager and Builder. It combines the LAMB frontend (svelte ) and Backend (Fastapi) on a single app. It requires a slightly modified of open-webui forked from the main project. And it can be connected to lamb-project lamb-kb-server. 


### Milestone Release 0.1 

**Objective** : Provide a codebase that a sysadmin can deploy.
**Owner** @granludo 

### Tasks
* Compile a semi-production ready codebase with a stable enough lamb + open-webui + lamb-kb-server  -> @granludo -> Est Aug 15 2025
* Write and test a comprehensive documentation (maybe a screencast of the install process). -> @granludo -> Est Aug 15 2025
* Create a docker-compose so the three pieces of lamb 0.1 can be launched on containers. -> @juananpe -> Est ??
* Multi tennant features and admin

### Milestone Analytics and Evals
(Big One)
**Owner** TBD
**Objective**
Integrate the experimental developments for analitycs and LLM Evals into Lamb  

### Milestone LTI Task activity 
** Owner ** @MJCasañ 
**Objective** 
Create a new kind of LTI frontend for lamb assitants:
-> instructor sets up task and instructions for students
-> students deliver document(s) (adding names of peers, roles and kind of contributions)
-> lamb assitant makes rubric based assesment and feedback
-> instructor gets assesment and decides actions (send to student(s), corrections, grade)
-> grades can be sent to LMS via LTI gradebook integration

[--> It can be plugged into EvaluAItor agents ]


## LAMB-KB-Server
**Owner** Noa
**Objective**
Add all the experimental features on the lamb-kb-server branches, and setup LAMB to access it dynamically.
* Dockling based multimodal pdf parsing, chunking and ingestion
* Dockling based document parsing and extraction (not provided as an embeddings kb, but as a set of raw md + img files)
* Video ingestion plugin (based on old LLMPrimer workflows)
* Import and Export of full kb-bases
* Re-building of kb-bases (change of embeddings functions, chunking strategy, adding metadata)
* Onthology driven domain enhanced ingestion, query and fine-tunning

## EvaluAItor Agents 
**A whole big ass project** roadmap pending

## LAMB Jarvis 
**A whole big ass project** roadmap pending


