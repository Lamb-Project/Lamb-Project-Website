---
title: LAMB - Learning Assistants Manager and Builder
description: Free software for institution-managed generative AI in your LMS, with RAG assistants, rubric-based pre-assessment, LAMB LEGATUS (an agent for teachers), a Moodle connection and developer tools.
translationKey: home
---

<section class="lamb-hero">
<div>
<p class="lamb-kicker">Free software · GNU GPL v3</p>
<h1>LAMB <small class="lamb-release-badge">{{< documentation-version >}}</small><span>Learning Assistants<br>Manager and Builder</span></h1>
<p class="lamb-lead">Bring generative AI into your institution’s LMS. Teachers create RAG assistants and rubric-based pre-assessment (PRE) activities, while the institution manages access, model providers and data.</p>
<div class="lamb-actions"><a class="lamb-button" href="/en/teaching/">Explore LAMB for teaching ↗</a><a class="lamb-button lamb-button-outline" href="https://github.com/Lamb-Project/lamb">View on GitHub ↗</a></div>
<div class="lamb-project-facts"><a href="https://github.com/Lamb-Project/lamb/blob/main/LICENSE">Free software · GPL v3</a><a href="https://manifesto.safeaieducation.org">Safe AI in Education Manifesto ↗</a></div>
<p class="lamb-authors">Created by <a href="/en/research/">Marc Alier and Juanan Pereira</a><br><span>Universitat Politècnica de Catalunya · UPV/EHU</span></p>
</div>
<figure class="lamb-brand-art"><img src="/images/lamb-logo.png" alt="LAMB logo: a sheep teaching at a blackboard" width="768" height="1152" fetchpriority="high"></figure>
</section>

<div class="lamb-strip"><span><b>Free software</b> · GNU GPL v3</span><span><b>Inside your LMS</b> · Moodle, Canvas and LTI</span><span><b>Your choice of AI</b> · Self-hosted or cloud inference</span></div>
<nav class="lamb-overview-nav" aria-label="Explore LAMB capabilities"><a href="#institutional-ai">Institutional governance</a><a href="#teaching-tools">RAG, PRE & evaluation</a><a href="#lamb-legatus">LAMB LEGATUS and Moodle</a><a href="#last-mile">The last mile for your AI</a><a href="#developer-ecosystem">Developer tools</a></nav>

<section id="institutional-ai" class="lamb-governance">
<div><p class="lamb-kicker">For the whole institution</p><h2>Generative AI within<br>your learning environment.</h2><p>LAMB integrates into the institutional LMS through LTI, bringing AI activities into the courses teachers and students already use.</p><a class="lamb-text-link" href="/en/institutions/">Plan institutional adoption ↗</a></div>
<div class="lamb-governance-details"><div><h3>Privacy, GDPR and AI governance</h3><p>Manage access, provider choices and data handling as part of your institution’s AI governance and GDPR work. LAMB provides controls; compliance also depends on your policies and deployment.</p><a href="/en/privacy/">Privacy and governance in practice ↗</a></div><div><h3>Choose where inference runs</h3><p>Use your own inference infrastructure or supported cloud providers. Select models for your teaching needs, institutional policy and resources.</p></div><div><h3>Free software you can inspect and adapt</h3><p>LAMB is licensed under GNU GPL v3. Its source code is available to inspect, adapt and share under the license.</p></div></div>
</section>

<section id="teaching-tools" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">Tools for teachers</p><h2>Course materials.<br>Rubrics. Evidence.</h2></div><p>Build learning activities, review their behaviour and keep the teacher’s judgment at the centre.</p></div>
<div class="lamb-teaching-showcase"><div><h3>RAG assistants built around your course</h3><p>Retrieval-augmented generation (RAG) brings relevant passages from your teaching materials into an assistant’s responses. Create an assistant, connect its sources and make it available inside an LMS such as Moodle or Canvas through the configured LTI integration.</p><a class="lamb-text-link" href="/en/guides/knowledge/">Build with your course materials ↗</a></div><figure class="lamb-product"><div class="lamb-product-top"><span>LAMB CREATOR</span><span>Create an assistant</span></div><a href="/en/guides/first-assistant/" aria-label="See the guide to creating an assistant"><img src="/images/guides/assistant-create.png" alt="Real LAMB Creator form with assistant name, instructions and model controls" width="1280" height="1234" loading="lazy"></a><figcaption>Real LAMB 0.8 Creator screen, 17 October 2026, with demonstration content. <a href="/en/guides/screenshots/">Capture details ↗</a></figcaption></figure></div>
<div class="lamb-teaching-pair"><article><span class="lamb-kicker">PRE · Pre-assessment</span><h3>Apply rubrics. Review the assessment.</h3><p>Create pre-assessment assistants that apply a rubric to student work and propose feedback. The teacher reviews the result and decides how it is used in assessment.</p><a class="lamb-text-link" href="/en/teaching/#rubric-based-pre-assessment-pre">Explore PRE ↗</a></article><article><span class="lamb-kicker">Analysis & evaluation</span><h3>Check how your assistants behave.</h3><p>Use test cases, saved results and activity analysis to inspect responses, identify weaknesses and assess changes to your assistants.</p><a class="lamb-text-link" href="/en/guides/testing/">Test and evaluate an assistant ↗</a></article></div>
</section>

<section id="lamb-legatus" class="lamb-agent-section">
<div><p class="lamb-kicker">An agent that works for the teacher</p><h2>LAMB LEGATUS.<br>Design by conversation.</h2><p>LAMB LEGATUS is an agent built into LAMB: a harness around a language model, with tools for LAMB and your Moodle course, your account's permissions, and an approval step the model cannot skip. It helps you create and improve assistants, build and run tests, and prepare knowledge bases from your course. Changes to your assistants, materials and Moodle course wait for your approval.</p><a class="lamb-text-link" href="/en/teaching/#lamb-legatus-an-agent-for-the-teacher">Meet LAMB LEGATUS ↗</a></div>
<div class="lamb-agent-workflow"><h3>From a Moodle course to an assistant</h3><ol><li><strong>Connect your course.</strong> Use your authorized Moodle account and the services your institution enables.</li><li><strong>Select the material.</strong> Ask LAMB LEGATUS to inspect course resources and prepare the selected content for a RAG assistant.</li><li><strong>Review and improve.</strong> Approve the proposed changes, test responses and refine the activity with LAMB LEGATUS.</li></ol><p><strong>No additional Moodle plugin is required.</strong> The connector uses standard Moodle web services; enabled services and account permissions determine what it can access.</p></div>
</section>

<section id="last-mile" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">AI governance</p><h2>The last mile<br>for your AI.</h2></div><p>The right model, to the right person, in the right amount, at the right time.</p></div>
<div class="lamb-teaching-showcase"><div><h3>Your models, under your rules, for every student</h3><p>An inference service does not know who is enrolled, in which course or with which role. Your LMS does, and LAMB learns it through LTI each time a student opens an activity. The organization sets the rules and each teacher's allowance; the teacher sets limits and a timetable in the course; each student gets a personal key for their own tools, and the use of every key is counted.</p><a class="lamb-text-link" href="/en/institutions/ai-governance/">How the last mile works ↗</a></div><figure class="lamb-diagram"><a href="/en/institutions/ai-governance/" aria-label="How the last mile works"><img src="/images/diagrams/last-mile.svg" alt="Diagram: your AI infrastructure gives LAMB the authorized models; your LMS tells LAMB through LTI who is enrolled, in which course, with which role and in which school; LAMB's AI governance layer applies organization rules and the teacher's activity, and a gateway gives each person a scoped key. In LAMB 0.8 it governs students' own tools; assistants, LAMB LEGATUS and learning apps are in design." width="1200" height="800" loading="lazy"></a><figcaption>Students' own tools are governed in LAMB 0.8; assistants, LAMB LEGATUS and learning apps are in design.</figcaption></figure></div>
</section>

<section id="developer-ecosystem" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">An ecosystem for developers</p><h2>Build tools on the<br>same institutional foundation.</h2></div><p>Extend teaching workflows with applications that use LAMB assistants and its management layer. Public APIs, a tool template and development utilities provide practical starting points.</p></div>
<div class="lamb-dev-tools"><a href="https://github.com/Lamb-Project/lamb-lti-test-tool"><strong>LTI Test Tool ↗</strong><span>Exercise LTI 1.1 launches, instructor and learner roles, and grade return in a development environment.</span></a><a href="https://github.com/Lamb-Project/moodle-cli"><strong>Moodle CLI ↗</strong><span>Work with Moodle through its web-service APIs from the command line.</span></a><a href="https://github.com/Lamb-Project/lamb/tree/lamb-0.8/lamb-cli"><strong>LAMB CLI ↗</strong><span>Manage assistants, materials, tests and activity analysis from the terminal.</span></a><a href="/en/developers/"><strong>APIs & application template ↗</strong><span>Build an educational application with authorized assistant access and LMS integration.</span></a></div>
</section>

{{< release-panel >}}

<section class="lamb-section"><p class="lamb-kicker">Bring LAMB to your institution</p><h2>Choose your next step.</h2>

{{< adoption-routes >}}

</section>

<section class="lamb-project-note"><div><h2>A project grounded in research</h2><p>Created by Marc Alier and Juanan Pereira, LAMB is studied and written about with research groups at UPC, UPV/EHU, the Universidad de Salamanca and the Universidad de Alicante: EduSTEAM, ONEKIN, GRIAL and Smart Learning.</p></div><a class="lamb-text-link" href="/en/research/">Research groups & publications ↗</a></section>
<section class="lamb-student"><div><h2>Looking for your course assistant?</h2><p>Your teacher or institution provides access through your course.</p></div><a class="lamb-text-link" href="/en/students/">Start here as a student ↗</a></section>
