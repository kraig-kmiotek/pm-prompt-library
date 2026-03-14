# Discovery

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
