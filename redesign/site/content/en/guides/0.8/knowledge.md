---
title: Add and check your course materials
description: Upload a document, inspect its processing status and verify retrieval before using it with an assistant.
translationKey: v08-knowledge
weight: 2
aliases: [/guides/knowledge/]
---

This guide prepares sources for **retrieval-augmented generation (RAG)**: retrieving relevant course material to supply context for an assistant’s answers.

**You need:** permission to use the material, a creator account and a supported ingestion service. Start with a small, non-sensitive document whose contents you know. The illustrations use a synthetic course note.

## 1. Create or open a knowledge base

Open **Sources of Knowledge → Knowledge Bases**. Select **Create Knowledge Base**, enter its name and description, then confirm. For an existing base, open its detail view instead.

{{< capture src="/images/guides/kb-create.png" alt="Create Knowledge Base dialog with name and description fields" caption="Knowledge-base creation dialog in LAMB 0.8, 17 October 2026." >}}

## 2. Choose and upload the file

Open **Ingest Content**. Under **Select File**, use **Choose File** and select the document on your computer. Check its filename before uploading. The **Files** tab is where you inspect processing state, not the upload form in this interface.

Choose an available **Ingestion Plugin** suitable for the file. The documented interface uses `simple_ingest` for plain text or Markdown and `markitdown_ingest` for supported PDF/Office conversion when that plugin is installed. A file extension alone does not establish successful support.

Keep the initial parameters unless you have a reason to change them, then click **Upload File**. If a request times out, inspect the saved state before submitting the same file again.

{{< capture src="/images/guides/kb-ingest.png" alt="Ingest Content form with a selected course-notes.md file and Upload File button" caption="LAMB 0.8 with course-notes.md selected and simple_ingest chosen, 17 October 2026." >}}

## 3. Check processing

Open **Files** and use **Refresh Status**. A row marked **processing** is not ready yet. Wait for completion; inspect any error rather than treating a successful upload as successful ingestion.

{{< capture src="/images/guides/kb-files.png" alt="Files tab showing course-notes.md with completed processing status" caption="Completed ingestion of the demonstration document in LAMB 0.8, 17 October 2026." >}}

## 4. Ask a question only this document can answer

Open **Query**. Ask about a distinctive fact in the uploaded document and click **Submit Query**. Check the returned passage and source identity. In the demonstration, the note contains the reference code **CORAL-19** and says office hours are Tuesday.

{{< capture src="/images/guides/kb-query.png" alt="Query Results returning CORAL-19 and Tuesday from the uploaded course note" caption="Actual retrieval in LAMB 0.8: CORAL-19 and Tuesday at 10:00 from the uploaded note, 17 October 2026." >}}

## 5. Connect the source to your assistant

Open **Create Assistant**, choose **Simple Rag** and select the intended knowledge base under **RAG Options**. Check that the prompt template includes `{context}` and `{user_input}`, then save. The example creates a new assistant named `Course_RAG_08` and connects `course_notes_08`.

**Choose the RAG processor at creation time.** In 0.8 this selector is disabled when editing a saved assistant. If your first assistant uses **No Rag**, create a new assistant for this knowledge-base workflow. For an assistant already using Simple Rag, use **Edit** to review its selected knowledge bases.

{{< capture src="/images/guides/assistant-kb.png" alt="Assistant configuration with Simple Rag and knowledge-base selection" caption="A new LAMB 0.8 assistant with Simple Rag and course_notes_08 selected, 17 October 2026." >}}

**Expected result:** a query retrieves the intended source, and the saved assistant points to that source. Test the assistant's actual answers next. Retrieved context can improve grounding, but it does not guarantee a correct answer or citation.

**If nothing is returned:** check ingestion state, the selected knowledge base and whether the question actually matches the source. Do not silently replace the material with invented information.

[Next: test the assistant's behaviour →](/en/guides/0.8/testing/)
