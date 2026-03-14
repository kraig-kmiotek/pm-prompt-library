# Stakeholder Comms

## Meeting Agenda Generator

**Use Case:** You need a structured agenda you can copy directly into an Outlook or calendar invite.

**Prompt:**

> You are a meeting facilitator. Using the context provided below, generate a structured meeting agenda ready to paste into a calendar invite.
>
> Instructions:
> 1. Generate a list of agenda topics with a time allocation for each based on the meeting length and goals described
> 2. Order topics logically, putting decisions and high-priority items before updates and housekeeping
> 3. Include a brief one-line description under each topic explaining its purpose
> 4. Reserve the last 5 minutes for next steps and wrap-up
> 5. Format the output so it can be copied directly into a calendar invite
>
> Do not add topics that have no basis in the context provided.
>
> Meeting context: [DESCRIBE THE MEETING IN FREE TEXT - include details like the goal, attendees, meeting length, and any topics you know need to be covered]

**Why It Works:** A well-ordered agenda signals to attendees what the meeting is for and what they need to prepare. Putting decisions before updates prevents meetings from running out of time on the things that matter most. The free text input keeps the friction low so the PM actually uses the prompt rather than skipping it.

---

## Meeting Notes to Follow-Up Email

**Use Case:** You have raw meeting notes and want a professional follow-up email with action items ready to send.

**Prompt:**

> You are a professional business writer. Using only the meeting notes provided below, generate a follow-up email with action items.
>
> Audience: [AUDIENCE - e.g., "internal team," "customer," "executive leadership," "cross-functional stakeholders"]
>
> Instructions:
> 1. Open with a brief 1-2 sentence summary of what the meeting covered
> 2. List all action items clearly, including who owns each one and any deadlines mentioned in the notes
> 3. Note any open questions or decisions that were not resolved
> 4. Close with a professional sign-off
> 5. Calibrate the language and tone to the audience specified
>
> Do not introduce action items, decisions, or details that have no basis in the notes.
>
> Meeting notes: [PASTE RAW MEETING NOTES HERE]

**Why It Works:** Follow-up emails written from memory miss action items and introduce ambiguity. Grounding the output strictly in the notes keeps it accurate. Separating action items from open questions forces clarity on what was decided versus what still needs resolution, which is where most meeting follow-ups fall short.

---

## Stakeholder Question Anticipator

**Use Case:** You are preparing for a high-stakes meeting or presentation and want to anticipate the questions different roles in the room are likely to ask.

**Prompt:**

> You are an experienced product leader preparing for a critical stakeholder meeting. Using the context and materials provided below, generate a list of likely questions organized by role.
>
> Roles in the room: [ROLES - e.g., "engineering, finance, legal" or "executive leadership, sales, customer success"]
>
> Instructions:
> 1. Generate 3-5 likely questions per role based on the topic and materials provided
> 2. Organize the output by role with a clear header for each
> 3. For each question, add a one-line note on why that role is likely to ask it
> 4. Flag any questions that multiple roles are likely to ask
> 5. At the end, list 2-3 questions that could derail the conversation if not addressed proactively
>
> Do not generate questions that have no basis in the context or materials provided.
>
> Topic or context: [DESCRIBE THE TOPIC, PROPOSAL, OR SITUATION IN FREE TEXT]
>
> Supporting materials: [ATTACH FILES or PASTE CONTENT - PRDs, roadmap proposals, decks, or any relevant documents]

**Why It Works:** Most presenters prepare for the questions they expect from people who already agree with them. This prompt forces preparation across roles with different incentives and concerns. The "why they'd ask it" note builds empathy for each stakeholder's perspective rather than just producing a list to memorize. The derailing questions section surfaces the hardest objections so the PM can address them before they come up.
