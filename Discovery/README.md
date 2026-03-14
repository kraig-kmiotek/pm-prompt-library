# Discovery

## Assumption Mapper

**Use Case:** You have an idea you're considering and want to surface the assumptions baked into it before committing time or resources to validation.

**Prompt:**

> You are a product strategist. Using the idea described below, identify and map the assumptions the person is making and assess how critical each one is to the idea's viability.
>
> Instructions:
> 1. Extract all assumptions embedded in the idea, including ones that are unstated or implied
> 2. Organize them into three categories: Customer Assumptions (about who has this problem and how painful it is), Solution Assumptions (about whether this approach will actually work), and Market Assumptions (about size, timing, and willingness to pay)
> 3. For each assumption, rate its criticality on a scale of Low, Medium, or High based on how much the idea depends on it being true
> 4. Flag any assumptions rated High as Dangerous, meaning if proven false, the idea falls apart
> 5. Close with a 2-3 sentence summary of where the idea is most vulnerable and what should be validated first
>
> Do not evaluate whether the idea is good or bad. Focus only on surfacing and assessing the assumptions.
>
> Idea: [DESCRIBE YOUR IDEA IN FREE TEXT - include what problem you think you're solving, who you're solving it for, and how you're thinking about solving it]

**Why It Works:** Most ideas fail not because they were poorly executed but because a critical assumption was never tested. Organizing assumptions by category helps PMs see where their blind spots are concentrated. Flagging dangerous assumptions gives a clear starting point for discovery work rather than leaving the PM to guess what to validate first.

---

## Discovery Question Generator

**Use Case:** You have a hypothesis you want to test in a customer interview and want a set of non-leading questions designed to validate or invalidate it without biasing the customer.

**Prompt:**

> You are a product researcher. Using the hypothesis described below, generate a set of interview questions designed to test it without leading the customer toward a predetermined answer.
>
> Interview direction: [VALIDATE - generate questions that test whether the hypothesis is true | INVALIDATE - generate questions that challenge the hypothesis and surface evidence against it | BOTH - generate questions that explore both directions]
>
> Instructions:
> 1. Generate 8-10 interview questions based on the direction specified
> 2. Order the questions so they move from broad and open to specific and probing
> 3. Flag any question that risks leading the customer toward a specific answer and suggest a neutral alternative
> 4. Include at least 2 questions that explore the customer's current behavior or workarounds, not just their opinions
> 5. Close with 2-3 follow-up probes that can be used when a customer gives a vague or surface-level answer
>
> Do not generate questions that assume the problem exists. Let the customer confirm or deny it.
>
> Hypothesis: [DESCRIBE YOUR HYPOTHESIS IN FREE TEXT - include what you believe to be true, who you believe it about, and why]

**Why It Works:** Most discovery interviews fail because the questions are written to confirm what the PM already believes. Flagging leading questions forces the researcher to confront their own bias before sitting down with a customer. Anchoring questions in behavior rather than opinion produces more reliable signal because what customers do is more honest than what they say they would do.

---

## $100 Test Simulation from Interview Notes

**Use Case:** You have raw interview notes from a customer conversation and want to simulate how that customer would allocate priority across needs or features without scheduling a follow-up.

**Prompt:**

> You are a product researcher analyzing a customer interview. Using only the evidence in the notes below, simulate a $100 prioritization exercise.
>
> Focus area: [FOCUS AREA - e.g., "feature requests," "product capabilities they rely on," "areas where they want more control," "integrations they need" - or write "no constraint" to extract all needs]
>
> Instructions:
> 1. Extract the distinct customer needs, pain points, or jobs-to-be-done within the focus area mentioned or implied in the notes
> 2. Allocate $100 across those needs based on intensity of language, frequency of mention, and emotional weight in the notes
> 3. Return a ranked table: Need | $ Allocated | Evidence from notes
> 4. Below the table, write a 2-3 sentence synthesis paragraph stating what this customer actually cares most about and what a PM should take away
>
> Do not infer needs that have no basis in the notes. Flag any allocation where the evidence is weak.
>
> Interview notes: [PASTE RAW NOTES HERE]

**Why It Works:** Most interview notes contain signal that PMs underuse because synthesis takes time. Forcing a dollar allocation on top of the notes compels the model to weight evidence rather than list everything equally. The focus area constraint keeps the output scoped to what the PM is actually trying to answer. The "flag weak evidence" instruction reduces hallucination risk and keeps the output honest enough to act on.
