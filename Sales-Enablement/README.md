# Sales Enablement

## Competitive Feature Comparison Table

**Use Case:** You have product materials for your product and one or more competitors and want a clean feature comparison table ready to use in sales conversations or customer-facing collateral.

**Prompt:**

> You are a product marketing specialist building a competitive comparison table for an external sales audience.
>
> Our product name: [PRODUCT NAME]
> Competitor(s): [COMPETITOR NAME(S) - add one column per competitor, e.g., "Competitor A" or "Competitor A, Competitor B, Competitor C"]
>
> Instructions:
> 1. Extract all distinct features and specifications mentioned across all materials provided
> 2. Build a table with the following columns: Feature | [PRODUCT NAME] | [COMPETITOR NAME(S)]
> 3. Populate each cell with the raw value from the materials as it appears in the source, whether that is a number, range, unit, tier, or descriptive term
> 4. If a feature or specification is not mentioned for a product, leave the cell blank
> 5. Sort the table so features where our product has a clear value advantage appear first
>
> Do not infer values that have no basis in the materials.
>
> Our product materials: [ATTACH FILES or PASTE CONTENT - spec sheets, marketing collateral, product pages]
>
> Competitor materials: [ATTACH FILES or PASTE CONTENT - spec sheets, marketing collateral, competitor URLs]

**Why It Works:** Separating the input fields for your product and competitors keeps the model from conflating sources. Using raw values instead of Yes/No makes the table accurate across product types, whether the specs are quantitative like hardware measurements or descriptive like software tiers. Sorting by our product's advantages makes the output immediately usable in a sales conversation without manual reorganization. Leaving cells blank rather than marking them Unknown keeps the table clean for an external audience.

---

## Product Podcast Script Generator

**Use Case:** You have marketing collateral or product materials and want to generate a podcast-style script that can be used for internal training, sales enablement, or external content.

**Prompt:**

> You are a podcast script writer. Using only the materials provided below, generate a conversational two-host podcast script.
>
> Focus: [FOCUS - describe the specific topic, application, or angle you want the script to cover]
>
> Audience type: [INTERNAL or EXTERNAL - internal scripts may use technical jargon and product-specific language freely; external scripts should provide context and avoid assumed knowledge]
>
> Audience: [AUDIENCE - e.g., "sales," "chemical engineers," "IT," "service technicians," or multiple e.g., "sales and chemical engineers"]
>
> Format: [FORMAT - choose one]
> - Deep Dive: A lively conversation between two hosts, unpacking and connecting topics in your sources
> - Brief: A bite-sized overview to help you grasp the core ideas from your sources quickly
> - Critique: An expert review of your sources, offering constructive feedback to help you improve your material
> - Debate: A thoughtful debate between the two hosts, illuminating different perspectives on your sources
>
> Target length: [LENGTH IN MINUTES - estimated spoken length]
>
> Instructions:
> 1. Format the entire script using [Speaker 1] and [Speaker 2] labels for every line of dialogue. Note: do not change the speaker names.
> 2. Calibrate the language, depth, and tone to the audience type and audience specified
> 3. Match the structure and energy of the script to the format selected
> 4. Write for spoken delivery, use natural conversational language, not prose
> 5. Target the specified length assuming an average speaking pace of 130 words per minute
>
> Do not introduce claims or information that have no basis in the materials provided.
>
> Materials: [ATTACH FILES or PASTE CONTENT - product materials, marketing collateral, URLs]

**Why It Works:** Podcast-style scripts make dense product or technical content more accessible and engaging than traditional collateral. The format variable produces fundamentally different scripts from the same source material, making this prompt reusable across different enablement needs. Calibrating to audience type prevents the script from either overwhelming an external listener with jargon or under-serving a technical internal audience. The 130 words per minute anchor keeps the length output predictable and accurate.

---

## Trade Show Elevator Pitch Generator

**Use Case:** You are preparing for a trade show or conference and want a ready-to-deliver pitch in three lengths calibrated to your role and the event audience.

**Prompt:**

> You are a communications specialist. Using the materials provided below, generate three elevator pitches of different lengths calibrated to the role and audience specified.
>
> Your role: [ROLE - e.g., "sales rep," "product manager," "executive," "technical specialist"]
>
> Instructions:
> 1. Generate three pitches: 30 seconds, 60 seconds, and 90 seconds
> 2. Calibrate the language and tone to the role specified
> 3. Calibrate the depth and focus to the event and audience context from the conference materials
> 4. Write for spoken delivery, use natural conversational language, not prose
> 5. Label each pitch clearly with its target length
> 6. Target each length assuming an average speaking pace of 130 words per minute
>
> Do not introduce claims or information that have no basis in the materials provided.
>
> Conference or trade show materials: [ATTACH FILES or PASTE CONTENT - conference URLs, event agenda, exhibitor information]
>
> Company materials: [ATTACH FILES or PASTE CONTENT - company URLs, marketing collateral]
>
> Product materials: [ATTACH FILES or PASTE CONTENT - spec sheets, product pages, marketing collateral]

**Why It Works:** Trade show conversations happen at different depths depending on how much time you have and who you are talking to. Generating all three lengths from the same materials means the rep can adapt on the floor without repreparing. Pulling context from the conference materials grounds the pitch in the event audience rather than producing a generic product speech. The role variable ensures the pitch sounds like it is coming from the right person.
