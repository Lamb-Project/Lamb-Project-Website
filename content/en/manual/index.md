---
title: "LAMB User Manual"
description: "Complete guide for educators: create, configure, test, publish and manage AI learning assistants with LAMB"
date: 2026-04-03
draft: false
weight: 50
type: "docs"
---

# LAMB User Manual

> **Audience**: Educators and instructional designers who create and manage AI learning assistants using the LAMB platform. This manual covers everything from your first login to publishing assistants into your LMS.

---

## 1. Getting Started

### 1.1 Logging In

Open your LAMB instance URL in a browser. You will see the login screen.

![LAMB Login Screen](01-login.png)

Enter the **email** and **password** provided by your institution's LAMB administrator, then click **Login**.

If your institution has enabled self-registration, click **Sign up** and complete the form. You will need the **signup key** provided by your organization administrator.

> **LTI Access**: If your institution has configured LTI Creator integration, you can access LAMB directly from your LMS (Moodle, Canvas, etc.) without a separate login. Your account is created automatically on first launch.

### 1.2 The Dashboard

After logging in, you land on the **Dashboard** — your home screen.

![LAMB Dashboard](02-dashboard.png)

The dashboard shows:

- **Your name, organization, and role** (e.g., Admin, Member)
- **My Resources** — a summary of everything you own:
  - **Assistants** — how many you have created and how many are published
  - **Knowledge Bases** — your document collections
  - **Rubrics** — evaluation rubrics you have created
  - **Prompt Templates** — reusable prompt configurations
- **Shared with Me** — resources other educators in your organization have shared with you

### 1.3 Navigation

The top navigation bar is always visible:

| Menu Item | What it does |
|-----------|-------------|
| **Learning Assistants** | Create, edit, test, and publish your assistants |
| **Sources of Knowledge** | Manage Knowledge Bases and Rubrics |
| **Admin** | Organization and user management (admin users only) |
| **Language selector** (EN/ES/CA/EU) | Switch the interface language |

---

## 2. Learning Assistants

Assistants are the core of LAMB — AI-powered tutors, evaluators, and learning companions that your students interact with.

### 2.1 Viewing Your Assistants

Click **Learning Assistants** in the navigation bar. The **My Assistants** tab shows all assistants you own.

![Assistants List](03-assistants-list.png)

For each assistant, the list shows:

- **Name** and **publication status** (Published / Unpublished)
- **Description**
- **Creation and last update dates**
- **Technical configuration** — the prompt processor, connector, LLM model, and RAG processor
- **Actions** — View (eye icon), Export (download icon), Delete (trash icon)

You can **search** by name or description, **filter** by status (All, Published, Unpublished), and **sort** by different criteria.

### 2.2 Creating an Assistant

Click the **+ Create Assistant** button. The creation form appears.

![Create Assistant Form](04-create-assistant.png)

Fill in the following fields:

#### Basic Information

| Field | Description | Required |
|-------|-------------|----------|
| **Assistant Name** | A unique name (max 20 characters). Spaces and special characters are converted to underscores. | Yes |
| **Description** | A brief summary of what the assistant does. Click **Generate** to auto-generate from the name and system prompt. | No |
| **System Prompt** | Instructions that define the assistant's personality, expertise, and behavior. This is the most important field. | No (but strongly recommended) |
| **Prompt Template** | Controls how the student's question and any retrieved context are assembled before being sent to the AI model. Use the `{context}` and `{user_input}` placeholder buttons to insert them. | No |

#### Configuration Panel (right side)

| Setting | Description | Default |
|---------|-------------|---------|
| **Language Model (LLM)** | Which AI model to use (e.g., gpt-4o-mini, gpt-4o) | Organization default |
| **Enable Vision** | Allow the assistant to process images alongside text | Disabled |
| **RAG Processor** | How to use knowledge base documents. "No Rag" means the assistant answers from its training data only. | No Rag |

#### Advanced Mode

Toggle **Advanced Mode** to access additional settings like the Connector (OpenAI, Ollama, etc.) and Prompt Processor.

#### Import from JSON

If you have an assistant configuration exported from another LAMB instance, click **Import from JSON** to load it.

Click **Save** when done. Your assistant is created in **Unpublished** state — only you can see and test it.

### 2.3 Writing Effective System Prompts

The system prompt is the most important part of your assistant. Here are some tips:

- **Define the role clearly**: "You are a music history tutor for high school students."
- **Set the scope**: "Focus on 1960s British rock, particularly the British blues revolution."
- **Give behavioral instructions**: "Keep explanations clear, accurate, age-appropriate, and engaging."
- **Handle edge cases**: "If the question is outside the provided context, say so plainly and answer cautiously."
- **Encourage interaction**: "Ask brief follow-up questions when helpful."

### 2.4 Viewing Assistant Details

Click the **View** (eye) icon on any assistant to open its detail page.

![Assistant Detail View](05-assistant-detail.png)

The detail page has several tabs:

| Tab | Purpose |
|-----|---------|
| **Properties** | Read-only view of the assistant's configuration |
| **Edit** | Modify the assistant's settings |
| **Share** | Control who else can access this assistant |
| **Chat** | Test the assistant by chatting with it directly |
| **Activity** | View usage statistics and chat history |
| **Tests** | Create and run test scenarios |
| **Explain** | Ask the AI agent to explain the assistant's configuration |
| **Improve** | Ask the AI agent to suggest improvements |

The Properties view shows all configuration details including the system prompt, prompt template, connected knowledge bases, and the full technical configuration (connector, LLM, RAG processor, etc.).

### 2.5 Editing an Assistant

Click the **Edit** tab (or the Edit button on Properties) to modify your assistant.

![Edit Assistant](06-assistant-edit.png)

The edit form is similar to the creation form. On the right panel you can:

- Change the **LLM model**, **connector**, and **processors**
- Enable or disable **Vision Capability**
- Select a different **RAG Processor** and configure RAG options
- Choose which **Knowledge Bases** to connect (checkboxes appear when a RAG processor is selected)

Click **Save Changes** when done. Click **Cancel** to discard changes.

### 2.6 Sharing Assistants

The **Share** tab lets you grant other educators in your organization access to your assistant.

![Share Assistant](07-assistant-share.png)

Click **Manage Shared Users** to add or remove users. Shared users can:
- View the assistant's configuration
- Chat with the assistant
- See its test results

Shared users **cannot** edit, delete, or publish your assistant — only the owner can do that.

> **Note**: Sharing must be enabled at the organization level by your administrator. If you don't see the Share tab, contact your admin.

---

## 3. Knowledge Bases (RAG)

Knowledge Bases let your assistants answer questions using **your own documents** — lecture notes, textbooks, articles, web content — instead of relying solely on the AI model's general training data. This is called **Retrieval-Augmented Generation (RAG)**.

### 3.1 Why Use a Knowledge Base?

Without a Knowledge Base, your assistant answers from its general training data. This means:
- It might give outdated information
- It cannot reference your specific course materials
- It might "hallucinate" — generate plausible-sounding but incorrect answers

With a Knowledge Base, the assistant **retrieves relevant passages from your documents** and uses them as context when generating answers. This makes responses more accurate, grounded, and specific to your course.

### 3.2 Managing Knowledge Bases

Navigate to **Sources of Knowledge > Knowledge Bases**.

![Knowledge Bases List](10-knowledge-bases.png)

The list shows all your knowledge bases with their name, creation date, sharing status, and actions (Share, View, Edit, Delete).

Click **Create Knowledge Base** to create a new one. Give it a descriptive name related to its content.

### 3.3 Adding Documents

Click **View** on a knowledge base to see its details and manage files.

![Knowledge Base Detail](11-kb-detail.png)

The detail page has three tabs:

#### Files Tab
Shows all uploaded documents with their name, size, type, and processing status. Upload documents by dragging files or clicking the upload button. Supported formats include:
- **PDF** — textbooks, articles, handouts
- **Markdown / Text** — lecture notes, study guides
- **Word documents** — course materials

Each file goes through an ingestion pipeline that splits it into searchable chunks and creates vector embeddings for semantic search.

#### Ingest Content Tab
Import content from external sources:
- **Web pages** — paste a URL to scrape and ingest its content
- **YouTube videos** — paste a YouTube URL to ingest the transcript

#### Query Tab
Test your knowledge base by entering a search query. The system shows the most relevant chunks it would retrieve, along with similarity scores. This is useful for verifying that your documents are properly indexed and that the right content is being found.

### 3.4 Connecting a Knowledge Base to an Assistant

To use a Knowledge Base with an assistant:

1. **Edit** your assistant
2. Set the **RAG Processor** to one of:
   - **Simple Rag** — basic retrieval, good for most use cases
   - **Context Aware Rag** — more sophisticated context handling
   - **Rubric Rag** — specialized for rubric-based evaluation
3. Set **RAG Top K** — how many document chunks to retrieve (1-10, default 3)
4. Check the **Knowledge Bases** you want to connect (they appear as checkboxes)
5. Ensure your **Prompt Template** includes the `{context}` placeholder (this is where retrieved content is inserted) and the `{user_input}` placeholder (where the student's question goes)

**Example Prompt Template:**
```
Context:
{context}

Student question: {user_input}

Answer using the provided context. Cite your sources when possible.
```

### 3.5 Sharing Knowledge Bases

Click the **Share** button to make a knowledge base available to other educators in your organization. Shared knowledge bases are read-only for other users — they can connect them to their assistants but cannot modify the content.

---

## 4. Rubrics (EvaluAItor)

Rubrics let you create AI assistants that **evaluate student work** against structured criteria. Navigate to **Sources of Knowledge > Rubrics**.

![Rubrics List](12-rubrics.png)

### 4.1 What is EvaluAItor?

EvaluAItor is LAMB's rubric-based evaluation system. You define evaluation criteria with performance levels, and the AI assistant uses these criteria to assess student submissions. This is particularly useful for:

- Evaluating written assignments
- Assessing project presentations
- Providing structured feedback on student work
- Ensuring consistent evaluation across multiple submissions

### 4.2 Creating a Rubric

Click **Create Rubric** and define:

- **Rubric Name** — a descriptive title
- **Description** — what this rubric evaluates
- **Subject** — the academic discipline
- **Scoring Type** — points or qualitative levels
- **Maximum Score** — the total possible score
- **Criteria** — each criterion has:
  - A name and weight (percentage of total)
  - Performance levels (e.g., Excellent, Good, Adequate, Insufficient) with descriptions and point values

### 4.3 Using a Rubric with an Assistant

To create an evaluator assistant that uses a rubric:

1. **Create** a new assistant (or edit an existing one)
2. Set the **RAG Processor** to **Rubric Rag**
3. Select the rubric in the assistant configuration
4. Write a system prompt that instructs the assistant to evaluate submissions using the rubric
5. The prompt template should include `{context}` (where the rubric content is injected) and `{user_input}` (the student's submission)

When a student submits their work, the assistant retrieves the rubric criteria and provides structured evaluation feedback based on the defined performance levels.

### 4.4 Example: Published Evaluator Assistant

Here is an example of a published evaluator assistant with a rubric attached:

![Published Assistant with Rubric](13-assistant-published.png)

Notice the **Selected Rubric** section at the bottom showing the rubric content with its criteria and performance levels. The **LTI Publish Details** on the right show the integration information for connecting to your LMS.

---

## 5. Prompt Templates

Prompt Templates let you save and reuse system prompt configurations across multiple assistants. Access them from the **Prompt Templates** tab on the Learning Assistants page.

![Prompt Templates](14-prompt-templates.png)

### 5.1 Managing Templates

- **+ New Template** — create a template with a name, description, system prompt, and prompt template
- **Edit** — modify an existing template
- **Share / Unshare** — make a template available to other educators in your organization
- **Duplicate** — create a copy of a template
- **Delete** — remove a template

### 5.2 Using Templates

When creating or editing an assistant, click **Load Template** next to the System Prompt field to populate the assistant's configuration from a saved template. This is useful when you want to create multiple assistants with the same base personality or instructional approach.

---

## 6. Testing Your Assistant

Before publishing an assistant to students, you should test it thoroughly. LAMB provides two ways to test: direct chat and structured test scenarios.

### 6.1 Direct Chat

Click the **Chat with [assistant name]** tab on the assistant detail page to have a conversation with your assistant. This lets you quickly check:
- Does it respond appropriately to typical student questions?
- Does it stay within the defined scope?
- Does it use knowledge base content when available?

### 6.2 Debug Mode (Bypass)

Debug mode shows you **exactly what the AI model receives** — the full system prompt, retrieved knowledge base content, and assembled prompt — without actually calling the AI model. This costs zero tokens and is invaluable for verifying that:

- The RAG pipeline is working (is `{context}` populated with relevant content?)
- The prompt template is correctly assembled
- The right knowledge base documents are being retrieved

### 6.3 Test Scenarios

The **Tests** tab lets you create structured test scenarios and run them systematically.

![Assistant Tests](08-assistant-tests.png)

#### Creating Scenarios

Click **+ Add Scenario** to create a test case:
- **Title** — a descriptive name (e.g., "Bluesbreakers overview")
- **Type** — Normal, Edge case, or Adversarial
- **Message** — the test question or prompt
- **Expected behavior** — what a good response should include

#### Running Tests

| Button | What it does |
|--------|-------------|
| **Run** (per scenario) | Run a single test with the real AI model (costs tokens) |
| **Debug** (per scenario) | Run a single test in bypass mode (free, shows what the model sees) |
| **Run All** | Run all scenarios with the real AI model |
| **Debug All (bypass)** | Run all scenarios in bypass mode |
| **Test & Evaluate with Agent** | Launch the AI agent to generate, run, and evaluate tests automatically |

#### Test Results

Test runs appear below the scenarios with:
- The **model** used and the **date** of the run
- **Token count** — how many tokens were consumed
- **Response time** — how long the model took to respond
- **Evaluation** — thumbs up (Good), thumbs down (Bad), or Mixed

Click on a run to see the full response. Click **Evaluate** to record your judgment.

> **Best practice**: Always run **Debug (bypass)** first to verify your RAG pipeline is working correctly, then run with the real model.

---

## 7. Activity & Analytics

The **Activity** tab shows usage statistics for your assistant.

![Assistant Activity](09-assistant-activity.png)

You can see:
- **Total chats** — how many conversations have occurred
- **Unique users** — how many different students used the assistant
- **Total messages** — the total number of messages exchanged
- **Messages per chat** — the average conversation length

The **Chat History** table lists individual conversations with the date, user, title, and message count. Click on a chat to see the full conversation transcript (subject to privacy settings).

Use **Filter Results** to search by date range, user, or content.

---

## 8. Publishing to Your LMS

Once you are satisfied with your assistant's performance, you can publish it so students can access it.

### 8.1 Publishing an Assistant

On the assistant's Properties page, click the **Publish** button. This:

1. Registers the assistant as available for students
2. Generates **LTI integration credentials** (Consumer Key and Secret)
3. Creates a **Tool URL** for LMS integration

After publishing, the Properties page shows the **LTI Publish Details** panel:

- **Assistant Name** — the published name
- **Model ID** — the internal identifier
- **Tool URL** — the URL to configure in your LMS
- **Consumer Key** — the LTI OAuth key
- **Secret** — ask your LAMB administrator for the secret value

### 8.2 Connecting to Moodle (LTI)

To make your assistant available in a Moodle course:

1. **In LAMB**: Publish the assistant and note the Tool URL and Consumer Key
2. **In Moodle**: Go to your course > Turn editing on > Add an activity > External Tool
3. Configure the External Tool:
   - **Tool URL**: paste the URL from LAMB
   - **Consumer Key**: paste from LAMB
   - **Shared Secret**: get this from your LAMB administrator
4. Save the activity

Students clicking the activity link in Moodle will be redirected to a chat interface where they can interact with your assistant.

#### Unified LTI (Recommended)

If your institution has set up **Unified LTI**, a single LTI tool is configured for the entire LAMB instance. As an instructor, when you click the LTI link for the first time, you see a **setup page** where you choose which published assistants to make available in that activity. Students then see all selected assistants in one view.

The Unified LTI approach also provides an **Instructor Dashboard** with:
- Usage statistics (how many students, how many messages)
- Student access tracking
- Anonymized chat transcripts (if enabled during setup)

### 8.3 Unpublishing

Click the **Unpublish** button to remove the assistant from student access. Students will no longer be able to start new conversations, but existing chat history is preserved.

---

## 9. Collaboration

### 9.1 Sharing Assistants

Share your assistants with colleagues so they can learn from your configurations, test them, or use them as inspiration. See [Section 2.6](#26-sharing-assistants) for details.

### 9.2 Sharing Knowledge Bases

Share your document collections so other educators can connect them to their own assistants. See [Section 3.5](#35-sharing-knowledge-bases) for details.

### 9.3 Shared Templates

Share your prompt templates as reusable starting points for other educators. Access **Shared Templates** from the Prompt Templates tab.

### 9.4 The "Shared with Me" View

The **Shared with Me** tab on the Learning Assistants page shows all assistants that other educators have shared with you. You can view their configuration and chat with them, but you cannot edit or publish them.

---

## 10. Tips and Best Practices

### For System Prompts
- **Be specific**: "You are a biology tutor for 10th-grade students" is better than "You are a tutor"
- **Set boundaries**: Tell the assistant what it should and should not do
- **Define tone**: Specify if the assistant should be formal, friendly, Socratic, etc.
- **Include language preferences**: If your students work in a specific language, specify it

### For Knowledge Bases
- **Quality over quantity**: Well-structured documents produce better retrieval than large dumps of raw content
- **Use clear headings and sections** in your documents — they help the chunking process
- **Test retrieval** using the Query tab before connecting to an assistant
- **Start with a few documents** and add more as needed

### For RAG Configuration
- **Always use a prompt template** with `{context}` and `{user_input}` when RAG is enabled
- **Test with bypass first** to verify the pipeline before spending tokens on real AI calls
- **Adjust RAG Top K** — more chunks (5-10) give more context but may dilute relevance; fewer chunks (1-3) are more focused

### For Testing
- Create at least 3-5 test scenarios covering:
  - **Normal questions** — the core use case
  - **Edge cases** — related but off-center topics
  - **Adversarial inputs** — attempts to make the assistant go off-topic
- Run bypass first, then real tests
- Use the evaluation system to track quality over time

### For Publishing
- **Test thoroughly** before publishing
- **Start with a small group** of students if possible
- **Monitor the Activity tab** to spot issues early
- **Iterate**: use test results and student feedback to improve the system prompt and knowledge base

---

## 11. Glossary

| Term | Definition |
|------|-----------|
| **Assistant** | An AI-powered learning tool configured with a specific personality, knowledge, and behavior |
| **System Prompt** | Instructions that define how the assistant behaves and responds |
| **Prompt Template** | The template that assembles the system prompt, retrieved context, and student question into the final prompt sent to the AI model |
| **Knowledge Base (KB)** | A collection of documents that the assistant can search and use as context |
| **RAG** | Retrieval-Augmented Generation — the technique of retrieving relevant document chunks to ground AI responses |
| **RAG Processor** | The algorithm that handles document retrieval (Simple Rag, Context Aware Rag, Rubric Rag) |
| **RAG Top K** | How many document chunks to retrieve for each query |
| **Connector** | The AI provider (OpenAI, Ollama, etc.) |
| **LLM** | Large Language Model — the AI model that generates responses (e.g., GPT-4o, GPT-4o-mini) |
| **Bypass / Debug Mode** | Testing mode that shows what the AI model would receive without actually calling it (zero cost) |
| **LTI** | Learning Tools Interoperability — the standard protocol for integrating LAMB with your LMS |
| **Publishing** | Making an assistant available to students through the LMS |
| **Rubric** | A structured evaluation framework with criteria and performance levels |
| **Prompt Template** | A reusable configuration that can be loaded into multiple assistants |

---

*LAMB User Manual — Version 0.6*
*Last updated: April 2026*
