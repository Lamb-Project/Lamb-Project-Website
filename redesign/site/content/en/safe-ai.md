---
title: LAMB and the Safe AI in Education Manifesto
description: Why the LAMB authors wrote the Safe AI in Education Manifesto, how LAMB responds to each of its seven principles, and how it relates to the EU rules on AI.
translationKey: safe-ai
weight: 6
---

**The people who build LAMB wrote the Safe AI in Education Manifesto to guide LAMB's design.** Its five authors are Marc Alier Forment, Francisco José García-Peñalvo, María José Casañ Guerrero, Juan Antonio (Juanan) Pereira and Faraón Llorens Largo. Marc Alier and Juanan Pereira created LAMB; Francisco José García-Peñalvo and María José Casañ co-wrote the paper that describes it.

The principles were written down before LAMB was first described. In February 2024, Marc Alier, Francisco José García-Peñalvo and Jorge D. Camba set out five points for "Safe AI in Education" in an editorial of the International Journal of Interactive Multimedia and Artificial Intelligence. The LAMB paper, submitted in July 2024, took those points as design requirements: one of its stated goals was "examining the implications of AI safety in the context of education for the design of LAMB". The authors published the points as the manifesto on 29 August 2024, when a first LAMB prototype already existed, and extended them to seven principles in September 2024. Version 0.4.0 followed on 8 October 2024. The current text is version 0.5.0, of 9 March 2026, which renamed principle 6 and left the wording of the principles unchanged.

This page takes each principle in turn: what the manifesto asks, how LAMB responds by design, what stays with the institution and the teacher, and where LAMB does not yet deliver. It describes LAMB 0.8, the current candidate (October 2026). Your installation may run another version.

{{< callout type="info" >}}
LAMB is software. The institution that runs it is responsible for how it is used. Nothing on this page is legal advice, a certification or a compliance statement for any installation.
{{< /callout >}}

## Principle 1: Human Oversight and Accountability

> "An AI system cannot be responsible for the education of students. Any decisions made by AI, particularly those related to grading and assessment, must be transparent and fully accountable to human oversight."
>
> Safe AI in Education Manifesto 0.5.0, Principle 1

**LAMB's response.** The teacher designs every assistant: its instructions, its prompt template, its model and the course materials it may use. Rubrics belong to the teacher; an AI drafts or changes a rubric only when the teacher asks.

In the file-evaluation activity, the AI proposes a grade and a comment, and the teacher sets the final grade. Only a teacher can start an evaluation, edit grades or send them to the LMS gradebook, and only the teacher's final grade is sent, never the AI's raw proposal. Students see no grade until the teacher publishes it. Then they see the AI's proposal and the final grade as two separately labelled lines.

Teachers can read chat transcripts with students' names only if they turned that option on when they first set up the activity; it cannot be changed afterwards. Whatever that setting, the teacher who owns an assistant, and a system administrator, can read the conversations students have with it in LAMB's chat analytics, where students appear as numbered users instead of by name.

**What stays with the institution and the teacher.** The manifesto gives students a right to appeal AI-driven decisions to a human. LAMB has no appeal feature: appeals go through the teacher and the institution's usual procedures. The teacher decides how much weight any AI proposal carries.

**Limits today.** A teacher can accept all AI proposals for an activity in one step, and LAMB does not record whether each one was reviewed. An assistant built to apply a rubric can also be placed in a chat activity, where it can show students a score with no teacher review and no label saying the score is only formative. The student upload page does not say that an AI may evaluate the submission.

## Principle 2: Guaranteeing Confidentiality

> "We caution against the use of free tools that require students to register with third-party services as a mandatory component of their education."
>
> Safe AI in Education Manifesto 0.5.0, Principle 2

**LAMB's response.** LAMB is free software under GNU GPL v3, and an institution can run all of it on its own servers, including a local model service. Students reach LAMB from their course in the LMS and never register with LAMB or with an AI company. Each organization in LAMB sets its own model providers and keys.

The model provider does not receive the student's name or email. LAMB rebuilds every chat request, so the provider receives the model name, the teacher's instructions, the conversation and any retrieved course excerpts, and no identity details. In the LLM access activity, which gives students a personal key for their own tools, the gateway sees an opaque reference instead of a name or email. The analytics that an assistant's owner sees include the text of students' conversations, with each student shown as a numbered user, never by name or email.

When a teacher can read the transcripts of a chat activity, LAMB 0.8 shows each student a one-time notice before the chat opens. It says that the teachers of the activity can read everything the student writes and the assistant's answers, with the student's name. A student who does not agree is told not to enter and to talk to the teacher. No notice tells students that the assistant's owner can read their conversations, without names, in the analytics.

**What stays with the institution and the teacher.** The content of the conversation does reach the model. If the model runs on campus, it stays on campus. If it is a cloud model, the provider receives the text under the institution's account, and the institution needs a contract with that provider and a decision about where the data may go. The institution also sets how long chats are kept: LAMB keeps them until someone deletes them.

**Limits today.** LAMB does not remove personal data that a student types into a message. The default assistant settings point to a cloud model, so an institution that wants everything on campus must change them. Some optional features send data to outside services when an administrator turns them on, such as developer tracing and an image-generation connector that uses an outside provider. A few student-facing notice pages load their styling from a public content network, so the student's browser contacts it.

## Principle 3: Alignment with Educational Strategies

> "We advocate for the use of AI systems that are tailored to fit the specific needs and goals of educational institutions."
>
> Safe AI in Education Manifesto 0.5.0, Principle 3

**LAMB's response.** LAMB is built for education rather than general use. It works inside the LMS as course activities: a chat with selected assistants, file evaluation, and, where the institution has deployed its LLM gateway and an administrator has enabled it, LLM access. It is organized by institution, with owner, administrator and member roles. Administrators decide which providers and models their teachers can use. An assistant can have a cost limit, and in the LLM access activity the teacher sets per-student token limits and a timetable that opens and closes access.

**What stays with the institution and the teacher.** The institution's AI policy, its rules on cheating and plagiarism, and which tools it approves. LAMB gives administrators levers; it does not write the policy.

**Limits today.** An assistant's behaviour depends on the instructions the teacher writes and on how well the chosen model follows them. LAMB has no moderation or policy layer that enforces an institution's rules in code. The LMS connection uses LTI 1.1; LTI 1.3 is not yet supported.

## Principle 4: Alignment with Didactic Practices

> "We emphasize the need for AI tools to be adaptable to various instructional designs."
>
> Safe AI in Education Manifesto 0.5.0, Principle 4

**LAMB's response.** The teacher chooses the activity type that fits the course design, and how the assistant works with the materials: several retrieval strategies are available, including one that applies a rubric. An authoring agent helps teachers design an assistant without writing code. Teachers can share prompt templates, rubrics and assistants with colleagues and reuse them.

**What stays with the institution and the teacher.** The instructional design itself, and the time to test an assistant with real tasks before students use it.

**Limits today.** The chat students see is a general chat window, the same for every activity, not an interface shaped to each one. The default prompt template is generic and does not reflect any course design until the teacher adapts it.

## Principle 5: Accuracy and Explainability

> "We encourage rigorous quality assessments for AI tools used in education. The reliability of AI systems is non-negotiable, and continuous evaluation is necessary to maintain the integrity of the educational process."
>
> Safe AI in Education Manifesto 0.5.0, Principle 5

**LAMB's response.** Assistants can answer from the teacher's own course materials through retrieval-augmented generation (RAG), which keeps them in a narrow, defined context, as the manifesto recommends. The titles and links of the retrieved sources are passed to the model with each question. Teachers can see the full prompt that LAMB assembles, save test scenarios, run them, and record their own verdict on each answer before students use the assistant. Rubric-based feedback works from an explicit rubric with its weights.

**What stays with the institution and the teacher.** Testing each assistant with representative questions, checking that the course materials are correct and current, and repeating the checks when materials or models change.

**Limits today.** The manifesto asks tools to "reference their sources". In LAMB, students see sources only when the model writes them into its answer; the chat does not show them as a separate list, and the default template does not ask the model to cite. Testing is manual: LAMB does not evaluate answer quality continuously, detect invented content or show how confident an answer is.

## Principle 6: Comprehensible Interface and Behavior

> "These tools must explicitly convey their limitations and avoid presenting erroneous information with undue confidence."
>
> Safe AI in Education Manifesto 0.5.0, Principle 6

**LAMB's response.** LAMB is clear about who sees what. In the chat, the student sees the assistant's name and the teacher's description, and every answer appears under the assistant's name. When transcript review is on, the transcript notice tells students plainly that the teacher can read their chats with their name. Before the student takes a key, the LLM access page explains what the gateway records and that an outside provider receives the requests without the student's name; it names the model once the key is issued. In file evaluation, the AI grade and the teacher's grade are labelled separately.

**What stays with the institution and the teacher.** Telling students, in the assistant's description or instructions, what the assistant is for, what it cannot do and that its answers can be wrong.

**Limits today.** This is where LAMB falls furthest short of the principle. The chat shows no standing notice that answers come from an AI model and may contain mistakes, and it does not tell students which model or provider is answering. An assistant states its limits only if the teacher writes that into its instructions; the default settings do not.

## Principle 7: Ethical Training and Transparency

> "We insist that all AI tools in educational contexts must be developed and deployed with a commitment to ethical standards. This includes openly declaring the sources of training data, ensuring that the models are designed to minimize biases, and providing transparency about the potential limitations inherent in the AI's decision-making processes."
>
> Safe AI in Education Manifesto 0.5.0, Principle 7

**LAMB's response.** LAMB trains and fine-tunes no models. What it offers is choice: each organization can use local open-weight models, or any service with an OpenAI-compatible interface, instead of being tied to one vendor. That lets an institution prefer models whose training data and methods are documented.

**What stays with the institution and the teacher.** Choosing models with this principle in mind, and keeping the providers' documentation on training data, bias and limits.

**Limits today.** LAMB records no information about a model's training data or known biases, and shows none to teachers or students.

## The EU rules on AI in education

The manifesto does not cite any EU law. Its authors present its seven principles as a way to put the European guidance on AI and education into practice. That guidance includes the European Commission's ethical guidelines for educators on AI and data, first issued in 2022 and revised in an edition published on 5 March 2026. Since the first edition, binding rules have arrived. This section summarizes the points of EU law that matter most when an institution offers AI to students, and how LAMB relates to each. It describes the rules as of 17 October 2026.

{{< callout type="warning" >}}
This is a plain-language summary, not legal advice. Whether a particular use of LAMB falls under a given rule depends on how the institution uses it. Check with your legal and data-protection services.
{{< /callout >}}

### Who is responsible: provider and deployer

The AI Act (Regulation (EU) 2024/1689, in force since 1 August 2024) gives most duties to two roles. The provider develops an AI system and puts it on the market or into service under its own name. The deployer uses an AI system under its own authority.

The LAMB project publishes free software. **An institution that runs LAMB for its courses is the deployer.** An institution that configures LAMB and offers it to its students under its own name may also count as a provider; the Act does not settle that case clearly. The Act does not apply to AI systems released under free and open-source licences, unless they are placed on the market or put into service as high-risk systems, or fall under the prohibited practices or the transparency rules described below. A LAMB chat assistant that talks to students is therefore still covered by the transparency rules.

The AI Act was amended by the Digital Omnibus on AI (Regulation (EU) 2026/1744), in force since 27 July 2026. The dates below take it into account.

### AI literacy

Since 2 February 2025, providers and deployers have had duties on AI literacy. Since 27 July 2026, the text says they "shall take measures to support the development of AI literacy of their staff and other persons dealing with the operation and use of AI systems on their behalf". It does not require any guaranteed level.

**How LAMB helps.** Teachers build their own assistants, can see the full prompt that is sent to the model, and test assistants before students use them. That is hands-on contact with how these systems work.

**What the institution must do.** Take measures to support the AI literacy of the staff who configure and use LAMB, for example training. The software does not include a training programme. The LAMB team offers [staff training on AI literacy and AI governance](/en/contact/#training).

### Prohibited practices: emotion recognition

Since 2 February 2025, the AI Act prohibits the use of AI systems "to infer emotions of a natural person in the areas of workplace and education institutions", except for medical or safety reasons. The Commission's guidelines give education examples: inferring students' interest or attention is prohibited, and so is emotion recognition during admission tests. AI that uses manipulative or deceptive techniques, or exploits vulnerabilities due to age, is also prohibited when it materially distorts a person's behaviour in a way that causes or is likely to cause significant harm.

**How LAMB helps.** LAMB has no feature designed to infer students' emotions, interest or attention.

**What the institution must do.** Not use LAMB, or any tool connected to it, for that purpose, and check that assistants are not designed to manipulate students.

### High-risk uses in education

The AI Act lists four education uses as high-risk: deciding admission or assignment to institutions, evaluating learning outcomes, assessing the level of education a person will receive, and monitoring students for prohibited behaviour during tests. **The obligations for these uses apply from 2 December 2027.** The Digital Omnibus moved this date from 2 August 2026.

The Commission's draft guidelines on classification, published for consultation on 19 May 2026 and not yet final, draw a line between summative and formative uses. AI that evaluates towards a final decision, such as grading that counts towards a final mark, is high-risk. AI that gives feedback and learning support during the course, such as a tutoring assistant, should not be classified as high-risk.

**How LAMB helps.** A chat assistant used for tutoring or feedback during the course is the kind of formative use the draft guidelines describe as not high-risk. For assessment, the file-evaluation activity keeps the teacher in charge: the AI only proposes, the teacher sets the final grade, only that grade goes to the gradebook, and students see the AI proposal and the final grade labelled separately.

**What the institution must do.** Decide whether each use falls in a high-risk category, for example when AI proposals feed grades that count. If it does, the deployer must, among other duties, assign human oversight to people with the competence, training and authority to exercise it, monitor the system, keep its logs for at least six months, and tell students that a high-risk AI system is used for decisions about them. Public bodies, and private bodies that provide public services, must also carry out a fundamental rights impact assessment before first use. LAMB has no appeal workflow and does not record whether a teacher reviewed each AI proposal, so the institution must provide both through its own procedures. The LAMB project has not carried out a high-risk conformity assessment.

The 2 December 2027 date applies to systems put into service from then on. A system already in service before that date is covered only once its design changes significantly, and systems used by public authorities must comply by 2 August 2030 at the latest. For an existing LAMB installation at a public university, the applicable date may therefore be later than 2 December 2027.

### Transparency

Since 2 August 2026, people must be told when they are interacting with an AI system, unless it is obvious, at the latest at the first interaction. Providers of systems that generate text must also mark the output in a machine-readable way, with a transition period until 2 December 2026 for systems already on the market.

**How LAMB helps.** Students meet a named assistant inside a course activity, and every answer appears under that name. Before a student takes a key, the LLM access page explains what the gateway records and what an outside provider receives, and it names the model once the key is issued. File evaluation labels the AI grade.

**What the institution should do.** Make sure students are told, in the activity or the course, that they are talking to an AI. The chat itself shows no general notice of that kind and does not name the model. LAMB adds no machine-readable marking to generated text, so the institution should check how its model provider handles that duty.

### General-purpose AI models

Since 2 August 2025, providers of general-purpose models, such as large language models, must publish a summary of the content used to train them and, unless the model is released under a free and open-source licence with public weights, document it for those who build on it. Models already on the market before 2 August 2025 have until 2 August 2027 to comply. These duties fall on the model providers, not on the institutions that use the models.

**How LAMB helps.** Each organization chooses its models, including local open-weight models.

**What the institution can do.** When it chooses a model, check the provider's published training-content summary and any documentation, in line with Principle 7.

### Data protection: the GDPR

The General Data Protection Regulation applies to every LAMB installation that handles student data. The Commission's 2026 guidelines for educators state that education institutions act as data controllers, while other parties may act as processors on their behalf. A Commission proposal to amend the GDPR had not been adopted as of 17 October 2026, so the GDPR applies as written.

| GDPR point | How LAMB helps | What the institution still decides |
|---|---|---|
| Data minimization | Providers receive the conversation without the student's name or email; LLM access keys use an opaque reference; teacher analytics show conversations with numbered users instead of names | What students are told not to type; LAMB does not filter personal data out of messages |
| Information to students | The transcript notice and the LLM access notice explain, before use, named transcript review and what the gateway records; no notice mentions that the assistant's owner can read conversations, without names, in the analytics | The privacy notice, the lawful basis and how to exercise rights; the transcript notice is information, not a legal basis |
| Processors and transfers | Local models keep conversations on campus; providers are chosen per organization | Contracts with any cloud provider and the conditions for any transfer outside the EU |
| Automated decisions | In file evaluation, the teacher's grade is the decision | That no significant decision rests on an AI output alone, and how students can contest one |
| Impact assessment | Free software that can be inspected, run on campus and tested | Whether a data-protection impact assessment is needed, and carrying it out |
| Retention | When the institution runs LAMB, chats, submissions and grades are stored in its own databases | How long chats, submissions and grades are kept; LAMB deletes nothing automatically |

A pseudonymous reference still counts as personal data for the institution, which can link it to the student.

## Read further

The manifesto, with its current text and its checklist for evaluating AI tools in education, is published by its authors.

[Read the Safe AI in Education Manifesto ↗](https://manifesto.safeaieducation.org)

[Privacy, GDPR and AI governance](/en/privacy/) · [Using LAMB as a student](/en/students/) · [The project and its research](/en/research/)
