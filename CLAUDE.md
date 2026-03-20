# CLAUDE.md

This file defines the standards and conventions for this repository. Follow them on every change.

## What This Project Is

A curated, copy-paste-ready library of AI prompts for product managers. Prompts are organized by PM practice area, stored as Markdown, and surfaced through a static GitHub Pages site.

The audience is experienced PMs. Prompts should assume craft fluency — not explain basics, not hold hands.

## Repository Structure

```
/                          # Root: build script, rendered site, generated data
├── build.js               # Parses category READMEs → prompts.json
├── prompts.json           # Generated. Do not edit manually.
├── index.html             # GitHub Pages front-end
├── Discovery/README.md
├── Strategy/README.md
├── Data-Analysis/README.md
├── Stakeholder-Comms/README.md
├── Sales-Enablement/README.md
├── Content-Creation/README.md
└── Leadership/README.md
```

## Build Process

`node build.js` reads each category `README.md`, parses the prompts, and writes `prompts.json`.

Always run `node build.js` after adding or editing prompts. Commit the updated `prompts.json` alongside any markdown changes — they should always be in sync.

## Prompt Format (strict)

Every prompt must follow this exact template. The build parser depends on it.

```markdown
## [Title]

**Use Case:** One sentence on when a PM would reach for this prompt.

**Prompt:**

> You are a [role]. [Instructions in structured numbered steps.]
>
> [Bracketed variables] for user-supplied context.

**Why It Works:** 2–4 sentences. Explain why the structure, framing, or specificity produces meaningfully better output than asking the question directly.

---
```

Rules:
- Titles are `##` (H2). No other heading level for prompt titles.
- `**Use Case:**` is a single sentence, inline on the same line as the label.
- Prompt body uses `>` blockquote lines. Every line of the prompt, including blank lines between paragraphs, must use `>`.
- User-supplied inputs use `[BRACKETED VARIABLES IN ALL CAPS]`.
- `**Why It Works:**` is required. No exceptions.
- Prompts are separated by `---`.

## The Bar for New Prompts

A prompt belongs here if and only if: its structure, framing, or specificity produces meaningfully better output than asking the question directly. If the answer to "why does this prompt exist?" is "it's just a good question," it doesn't belong here.

PRs and issues without a **Why It Works** rationale will not be merged.

## Writing Style

- Concise and direct. No filler.
- Prompts speak to the AI model in second person ("You are a...").
- Instructions inside prompts use numbered steps.
- Use Case lines are written from the PM's perspective ("You have...", "You need...").
- Why It Works explains mechanism, not just outcome.

## Categories

Only add prompts to existing categories. Do not create new category directories without a clear gap that none of the seven existing categories can cover. If a new category is warranted, it must have at least three quality prompts to justify the addition, and `build.js` must be updated to include it.

Existing categories: Discovery, Strategy, Data Analysis, Stakeholder Comms, Sales Enablement, Content Creation, Leadership.

## index.html

This is a self-contained static file. It reads `prompts.json` at runtime. Do not introduce build dependencies, bundlers, or external frameworks. Keep it vanilla — plain HTML, CSS, and JavaScript.

Add Google Analytics events sparingly and only for meaningful user interactions (e.g., copy, filter, search).

## Git Practices

- Commit `prompts.json` with every prompt change — never out of step with the markdown.
- Commit messages describe what changed and why, not just "update README."
- One logical change per PR. Don't bundle prompt additions with site feature changes.
