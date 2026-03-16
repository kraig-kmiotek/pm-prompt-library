const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { name: 'Discovery',        file: 'Discovery/README.md' },
  { name: 'Strategy',         file: 'Strategy/README.md' },
  { name: 'Data Analysis',    file: 'Data-Analysis/README.md' },
  { name: 'Stakeholder Comms',file: 'Stakeholder-Comms/README.md' },
  { name: 'Sales Enablement', file: 'Sales-Enablement/README.md' },
  { name: 'Content Creation', file: 'Content-Creation/README.md' },
  { name: 'Leadership',       file: 'Leadership/README.md' },
];

function parsePrompts(markdown, category) {
  const prompts = [];

  // Split on H2 headings
  const sections = markdown.split(/(?=^## )/m);

  for (const section of sections) {
    if (!section.startsWith('## ')) continue;

    const title = section.match(/^## (.+)$/m)?.[1]?.trim();
    if (!title) continue;

    const useCaseMatch = section.match(/\*\*Use Case:\*\*\s*([\s\S]+?)(?=\n\n)/);
    if (!useCaseMatch) continue;
    const useCase = useCaseMatch[1].trim();

    const promptMatch = section.match(/\*\*Prompt:\*\*\s*\n\n((?:>.*(?:\n|$))+)/);
    if (!promptMatch) continue;
    const prompt = promptMatch[1]
      .split('\n')
      .map(l => l.replace(/^> ?/, ''))
      .join('\n')
      .trim();

    const whyMatch = section.match(/\*\*Why It Works:\*\*\s*([\s\S]+?)(?=\n\n---|^\*\*Posting|\n\*\*Pro Tip|$)/m);
    if (!whyMatch) continue;
    const why = whyMatch[1].trim();

    prompts.push({ title, category, useCase, prompt, why });
  }

  return prompts;
}

const allPrompts = [];

for (const { name, file } of CATEGORIES) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: ${filePath} not found, skipping.`);
    continue;
  }
  const markdown = fs.readFileSync(filePath, 'utf8');
  const prompts = parsePrompts(markdown, name);
  allPrompts.push(...prompts);
  console.log(`  ${name}: ${prompts.length} prompt${prompts.length !== 1 ? 's' : ''}`);
}

fs.writeFileSync(
  path.join(__dirname, 'prompts.json'),
  JSON.stringify(allPrompts, null, 2)
);

console.log(`\nDone. ${allPrompts.length} prompts written to prompts.json`);
