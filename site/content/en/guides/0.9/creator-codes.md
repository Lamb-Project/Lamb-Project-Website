---
title: "Give teachers their account with a creator code"
description: "Create creator codes for your organization and write the text teachers read. As a teacher, enter a code the first time you open a LAMB activity from the LMS, and move between the activity and LAMB Creator."
translationKey: v09-creator-codes
weight: 1
---

**For organization administrators and teachers.** In LAMB 0.9 a teacher who opens a LAMB activity from the LMS and has no LAMB Creator account can create one on the spot, with a **creator code** from the institution. The administrator creates the codes and hands them out. The teacher types one, once.

The screenshots are real captures of the 0.9 release candidate with invented organizations, people and course. [About the screenshots](#screenshots).

## Before you start {#before-you-start}

- Your institution runs **LAMB 0.9** and its LMS has the LAMB activity tool. [Connect LAMB and Moodle](/en/guides/0.8/moodle/) shows the setup with LTI 1.1; the [0.9 release notes](/en/releases/0.9/#lti-13) cover LTI 1.3.
- The codes belong to an **organization** other than the system organization. The system organization issues no codes.
- Administrators need the administrator role in that organization. Teachers need the instructor role in the LMS course.

A code works only for a person the LMS presents as an instructor, and only on the page LAMB returns when that person opens an activity. A student cannot use it, and nobody can use it from outside the LMS. Within those limits, every instructor who has the code can join your organization while the code is active: use the expiry date, the use limit and the **Disable** button to stay in control.

## Administrators: create a code {#create-a-code}

1. Sign in to LAMB Creator and open **Org Admin → Settings → LTI Creator**. Go down to **Creator codes**.
2. Under **New code**, write a **Label** such as the term or the faculty. The label is for you: teachers never see it. Add an **Expiry date**, a **Use limit**, both or neither.

   {{< capture src="/images/guides/0.9/creator-codes-admin-new.png" alt="The Creator codes section of an organization with no codes yet: the New code form with label Autumn term 2026 and use limit 30, and below it the text for instructors without an account" caption="A first code for the autumn term, for at most thirty teachers. Demonstration data." details="#screenshots" >}}

3. Select **Create code**. LAMB shows the code once: three groups of four characters. **Copy** it, pass it on to your teachers, then select **I have saved it**.
4. From now on the list shows the code's last four characters, its status, how many teachers have used it and when it expires. LAMB does not keep the code itself, so it cannot show it again. If a code is lost, create another.

   {{< capture src="/images/guides/0.9/creator-codes-admin-list.png" alt="The list of creator codes: Summer school 2027, disabled, 0 of 10 uses; Autumn term 2026, active, 1 of 30 uses; a notice says that the first one was disabled; below, the organization's text" caption="One teacher has used the autumn code. The summer code is disabled until it is needed. Demonstration data." details="#screenshots" >}}

**Disable** stops a code at once, and **Enable** brings it back. Disabling a code does not affect the accounts already created with it. A code that has passed its date shows **Expired**; one that has reached its limit shows **Used up**.

## Administrators: write the text teachers read {#write-the-text}

A teacher who arrives without an account, and perhaps without a code, needs to know whom to ask. On the same screen, **Text for instructors without an account** holds that message: write it under **Text of this organization** and select **Save text**. **Restore the default text** goes back to the default.

Where the text appears depends on how the LMS is connected:

- **With LTI 1.1**, LAMB does not know the teacher's organization until the code is entered, so the page shows the **default text of the installation**. The system administrator writes it on this same screen, in the system organization. Your organization's text appears below the message when one of your codes is refused because it is disabled, expired or used up.
- **With LTI 1.3**, when the LMS registration is enabled for a single organization, the page shows that organization's text from the start.

## Teachers: enter the code {#enter-the-code}

1. In your course, open the LAMB activity. Instead of the activity you get the page **Set up this activity with LAMB**, with your institution's message.

   {{< capture src="/images/guides/0.9/creator-codes-teacher-page.png" alt="The page Set up this activity with LAMB: the LMS identified you as an instructor in Databases 101, the institution's message in a blue box, a Creator code field and the button Create my account and continue" caption="What a teacher without an account sees when opening the activity. The blue box is the institution's own text. Demonstration data." details="#screenshots" >}}

2. Type the code in **Creator code**. Capitals, spaces and hyphens do not matter. Select **Create my account and continue**.
3. LAMB Creator opens in the same window, with your session already started. Your name is at the top with your organization below it. A bar says which activity you came from and offers **Back to the activity**.

   {{< capture src="/images/guides/0.9/creator-codes-in-creator.png" alt="LAMB Creator, Learning Assistants page, for Robin Vale in Tutorial University: Engineering; a bar reads You came from the activity in Databases 101 with the button Back to the activity" caption="Straight into LAMB Creator, with the way back to the activity. Demonstration data." details="#screenshots" >}}

4. [Create an assistant](/en/guides/0.8/first-assistant/) and publish it. An activity needs at least one published assistant.
5. Select **Back to the activity**, choose the activity type and the assistants, and save. [Connect LAMB and Moodle](/en/guides/0.8/moodle/) walks through the setup page.

   {{< capture src="/images/guides/0.9/creator-codes-activity.png" alt="LAMB Activity Setup for the course Databases 101: the organization Tutorial University: Engineering, the link Add an organization with a creator code, the button Open LAMB Creator, the activity types and a notice that no published assistants were found" caption="Back in the activity. Until an assistant is published, the page says so and offers LAMB Creator. Demonstration data." details="#screenshots" >}}

The code is asked once. From then on, opening this or any other LAMB activity from the same LMS takes you to the activity.

Your account has no password: you enter LAMB by opening an activity from the LMS. The page that asks for the code is in English in this version, whatever language you use in LAMB.

## If the code is refused {#if-refused}

The page keeps the field and says why.

{{< capture src="/images/guides/0.9/creator-codes-teacher-refused.png" alt="The same page with a red message: That code is not valid. Check it and try again. The Creator code field is empty and ready for another attempt" caption="A code that does not exist. Demonstration data." details="#screenshots" >}}

| Message | What it means | What to do |
|---|---|---|
| That code is not valid. Check it and try again. | No code like that exists in this LAMB. | Check the characters. Codes never contain 0, O, 1 or I. |
| This code is no longer active. | An administrator disabled it. | Ask for a current code. The organization's text below the message says whom. |
| This code has expired. | Its date has passed. | Ask for a current code. |
| This code has reached its limit of uses. | As many teachers as it allowed have used it. | Ask for a current code. |
| Too many attempts. Wait a few minutes, then open the activity from your LMS again. | Five refused attempts in fifteen minutes. | Wait fifteen minutes and open the activity again. |
| You already have an account in this organization. Go back and choose it. | The code is for an organization you already belong to. | Go back and choose that organization. |
| This code belongs to an organization that your LMS is not connected to. | With LTI 1.3, the code must be of an organization enabled for your LMS. | Ask your administrator. |
| Your LAMB account in this organization is disabled. | An administrator disabled your account. | Ask your administrator. |
| Session expired. | The page was open for more than fifteen minutes. | Open the activity from the LMS again. |

## More than one organization {#several-organizations}

A teacher can have an account in several organizations of the same LAMB, for example two faculties, each with its own code.

1. On the activity setup page, select **Add an organization with a creator code**.

   {{< capture src="/images/guides/0.9/creator-codes-add-organization.png" alt="The page Add an organization: you already work in LAMB; with a creator code from another organization you get an account there too; a Creator code field, the button Add this organization and the link Back to your organizations" caption="Adding a second organization with its own code. Demonstration data." details="#screenshots" >}}

2. Enter the other organization's code and select **Add this organization**.
3. The setup page now lists your organizations. Choose the one this activity belongs to: its assistants are the ones you can offer in it. **This cannot be changed later.**

   {{< capture src="/images/guides/0.9/creator-codes-two-organizations.png" alt="LAMB Activity Setup with Choose Organization: Tutorial University: Engineering and Tutorial University: Education, the second one selected, and the warning This cannot be changed later" caption="One activity belongs to one organization. Demonstration data." details="#screenshots" >}}

In LAMB Creator, the organization below your name becomes a menu. **Change organization** takes you to another of your organizations without going back to the LMS.

{{< capture src="/images/guides/0.9/creator-codes-change-organization.png" alt="LAMB Creator with the organization menu open under the name Robin Vale: Change organization, Tutorial University: Education marked as current, and Tutorial University: Engineering" caption="Changing organization inside LAMB Creator. Demonstration data." details="#screenshots" >}}

## Between the activity and LAMB Creator {#activity-and-creator}

- LAMB stays in the window the LMS opened. **Open LAMB Creator**, on the activity pages, takes you to LAMB Creator; **Back to the activity** brings you back.
- This works for up to **four hours** after you opened the activity from the LMS. After that, or when a page answers "Session expired", open the activity from the LMS again. An activity setup page left open for more than two hours also expires.
- Each browser tab remembers its own activity. Opening another activity in another tab does not change where the first one returns to.
- Two tabs do not hold two organizations: when you change organization in one tab, LAMB Creator changes in the other too.

## What a code does not do {#limits}

- It does not make anyone an administrator. A system administrator can promote an account afterwards.
- It does not give a password. Teachers who sign in to LAMB with an email and a password keep doing so: a launch from the LMS does not sign them in to LAMB Creator.
- It is not the organization's sign-up key, which belongs to the sign-up form on LAMB's login page. Each is refused in the other's place.
- It is separate from the organization's LTI Creator tool, described under "Educator access to Creator" in [Choose your LMS entry path](/en/guides/0.8/lti/). That tool gives an account to whoever opens it from the LMS; a creator code serves teachers who arrive through an activity.

**Expected result:** as an administrator, you have an active code, you know how many teachers have used it, and teachers without a code read whom to ask. As a teacher, you have a LAMB Creator account in your organization, you have built and published an assistant, and your activity is set up, without asking anyone to create the account for you.

## About the screenshots {#screenshots}

The images are real captures of LAMB 0.9 (version label `v0.9-dev.1`), taken on 15 November 2026 from a test deployment running the release candidate. The organizations, the people, the course and the addresses are invented, and the launches from the LMS were signed by a test script as an LMS signs them. No image shows a creator code: the panel that shows a new code once was not photographed.
