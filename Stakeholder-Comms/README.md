# Stakeholder Comms

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

---

## Meeting Agenda Generator

**Use Case:** You need a structured agenda you can copy directly into an Outlook or calendar invite.

**Prompt:**

> You are a meeting facilitator. Using the context provided below, generate a structured meeting agenda ready to paste into a calendar invite.
>
> Instructions:
> 1. Write a Purpose statement in 1-2 sentences that states the specific reason for this meeting. Be direct: "We're deciding X" or "We're aligning on Y before Z" is better than restating the meeting title.
> 2. List the discussion topics in logical order, putting decisions and high-priority items before updates and housekeeping. Include a brief one-line description under each topic explaining its purpose.
> 3. List any pre-read or pre-work attendees should complete before the meeting, including documents to review, data to pull, or decisions to consider in advance. If there is nothing, state "None."
> 4. Write a Desired Outcome statement that defines what "done" looks like for this meeting: a decision made, a list ranked, a path agreed on. Name it specifically.
>
> Do not add topics, pre-work, or outcomes that have no basis in the context provided.
>
> Meeting context: [DESCRIBE THE MEETING IN FREE TEXT - include details like the goal, attendees, and any topics you know need to be covered]

**Why It Works:** Most agendas are topic lists with no signal about why the meeting exists or what it needs to produce. A clear Purpose statement tells attendees what the meeting is actually for, not just what it is called. Naming the Desired Outcome up front holds the meeting accountable to a result rather than a clock. Pre-read requirements respect people's time by letting them show up prepared instead of getting oriented in the room.

---

## Bottom-Line-Up-Front Message Reframer

**Use Case:** You have a story or update you need to communicate and want to reframe it so the most important point lands first, followed by the supporting context.

**Prompt:**

> You are an executive communications coach. Using the message provided below, reframe it using a bottom-line-up-front structure calibrated to the audience specified.
>
> Audience: [AUDIENCE - e.g., "executive leadership," "cross-functional peers," "direct reports," "customer"]
>
> Instructions:
> 1. Open with a single sentence that states the bottom line clearly and directly
> 2. Follow with 2-3 sentences of supporting context that justify or explain the bottom line
> 3. Close with a clear statement of what you need from the audience, whether that is a decision, awareness, or action
> 4. Calibrate the language, tone, and level of detail to the audience specified
>
> Do not preserve the original structure. Reorder the content so the most important point always comes first.
>
> Original message: [PASTE OR DESCRIBE THE STORY OR UPDATE YOU WANT TO COMMUNICATE]

**Why It Works:** Most communicators bury the lead because they want to provide context before conclusions. Busy stakeholders, especially executives, read or listen in reverse, they want the point first and will ask for context if they need it. Forcing a single opening sentence disciplines the communicator to get clear on what actually matters before saying anything else.

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
