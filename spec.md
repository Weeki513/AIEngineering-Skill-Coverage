Build AI Engineering Skill Coverage page

Build a client-side product page for pivnev.design at:

/AIEngineering-Skill-Coverage

The page should be immediately usable. No landing page flow. No account system. No backend dependency. No login. No paywall.

Product goal

Create an interactive skill coverage checker for AI Engineering.

The user should be able to:

1. See a table of AI Engineering skills.
2. Understand how often each skill appears in the source market data.
3. Select their current level for each skill manually.
4. Take a short test for an individual skill.
5. Take a full test across all skills.
6. Get an automatically calculated market coverage score.
7. See which missing skills matter most, ranked by market frequency.
8. Open official learning resources for every skill.
9. Export their result as Markdown.
10. Export their result as PDF.
11. Open a methodology modal explaining source, normalization, scoring, and limitations.

Source of truth

Use this public repository as the source of truth:

https://github.com/alexeygrigorev/ai-engineering-field-guide

Specifically reference:

* job-market/README.md
* role/02-skills.md

The product should clearly state that the underlying source is Alexey Grigorev’s AI Engineering Field Guide.

Show this in the UI:

Based on Alexey Grigorev’s AI Engineering Field Guide.
The source repository analyzes AI Engineer job descriptions from BuiltIn, January–March 2026.

Include a visible link to:

https://github.com/alexeygrigorev/ai-engineering-field-guide

Main page structure

The page should have:

1. Header / summary area
2. Score panel
3. Controls
4. Skills table
5. Missing skills section
6. Methodology modal
7. Skill test modal
8. Full test flow
9. Export actions

Header copy

Use concise copy:

AI Engineering Skill Coverage
Check how your current skills match AI Engineer market expectations.
Based on Alexey Grigorev’s AI Engineering Field Guide: a public analysis of AI Engineer job descriptions and interview preparation materials.
No login. No courses. No paywall.

Primary controls:

* Take full test
* Reset
* Export Markdown
* Export PDF
* Methodology

Skill levels

Use these levels:

type SkillLevel = 'unknown' | 'awareness' | 'basic' | 'usable' | 'strong'

Display labels:

const skillLevelLabels = {
  unknown: 'Unknown',
  awareness: 'Awareness',
  basic: 'Basic',
  usable: 'Usable',
  strong: 'Strong'
}

Map levels to numeric values:

const skillLevelValue = {
  unknown: 0,
  awareness: 0.25,
  basic: 0.5,
  usable: 0.75,
  strong: 1
}

Score formula

Use a simple weighted coverage formula:

marketCoverage =
  sum(skill.frequencyPercent * skillLevelValue[userLevel])
  / sum(skill.frequencyPercent)

Show result as percentage.

Example:

Market coverage: 54%

Also show:

Skills assessed: 18 / 35

If a skill is still unknown, it contributes 0.

Missing skills ranking

A missing skill is any skill where level is:

* unknown
* awareness
* basic

Rank missing skills by frequencyPercent descending.

Show a section:

Highest-impact gaps

Each item should show:

* skill name
* current level
* market frequency
* short description
* resources link/action

Do not generate project ideas.

Skills table columns

The main table should contain:

1. Skill
2. Short explanation
3. Market demand
4. Current level
5. Test
6. Official resources

Market demand bar

For each skill, show:

* percentage label, for example 35.9%
* horizontal bar proportional to frequency

The maximum bar width should be relative to the highest frequency skill in the dataset, not 100%.

Example: Python is the highest at ~82.5%; Python bar is full width; RAG at 35.9% is proportionally smaller.

Data model

Create a central data file, for example:

src/data/aiEngineeringSkills.ts

Use this structure:

export type SkillCategory =
  | 'language'
  | 'cloud'
  | 'ops'
  | 'genai'
  | 'framework'
  | 'web'
  | 'database'
  | 'ml'
export type ResourceType =
  | 'docs'
  | 'tutorial'
  | 'academy'
  | 'quickstart'
export type Resource = {
  title: string
  url: string
  type: ResourceType
}
export type Question = {
  id: string
  skillId: string
  question: string
  options: string[]
  correctOptionIndex: number
  explanation: string
}
export type Skill = {
  id: string
  name: string
  description: string
  category: SkillCategory
  frequencyPercent: number
  sourceCount?: number
  normalizedFrom?: string[]
  resources: Resource[]
  questions: Question[]
}

Initial skill list

Create normalized skill cards from the source repository’s skill analysis.

Use approximately 35 skill cards.

Start with these skills and frequencies. When counts are available, include them.

const skills = [
  { id: 'python', name: 'Python', frequencyPercent: 82.5, sourceCount: 738, category: 'language' },
  { id: 'aws', name: 'AWS', frequencyPercent: 40.1, sourceCount: 359, category: 'cloud' },
  { id: 'rag', name: 'RAG', frequencyPercent: 35.9, sourceCount: 321, category: 'genai' },
  { id: 'docker', name: 'Docker', frequencyPercent: 30.9, sourceCount: 277, category: 'ops' },
  { id: 'cicd', name: 'CI/CD', frequencyPercent: 29.3, sourceCount: 262, category: 'ops' },
  { id: 'kubernetes', name: 'Kubernetes', frequencyPercent: 29.1, sourceCount: 260, category: 'ops' },
  { id: 'prompt-engineering', name: 'Prompt engineering', frequencyPercent: 29.1, sourceCount: 260, category: 'genai' },
  { id: 'llms', name: 'LLMs', frequencyPercent: 25.4, sourceCount: 227, category: 'genai' },
  { id: 'azure', name: 'Azure', frequencyPercent: 23.9, sourceCount: 214, category: 'cloud' },
  { id: 'typescript', name: 'TypeScript', frequencyPercent: 23.4, sourceCount: 209, category: 'language' },
  { id: 'gcp', name: 'GCP', frequencyPercent: 22.9, sourceCount: 205, category: 'cloud' },
  { id: 'pytorch', name: 'PyTorch', frequencyPercent: 22.0, sourceCount: 197, category: 'ml' },
  { id: 'langchain', name: 'LangChain', frequencyPercent: 18.8, sourceCount: 168, category: 'framework' },
  { id: 'java', name: 'Java', frequencyPercent: 14.9, sourceCount: 133, category: 'language' },
  { id: 'react', name: 'React', frequencyPercent: 14.7, sourceCount: 132, category: 'web' },
  { id: 'agents', name: 'Agents / agentic workflows', frequencyPercent: 14.4, sourceCount: 129, category: 'genai' },
  { id: 'tensorflow', name: 'TensorFlow', frequencyPercent: 12.8, sourceCount: 115, category: 'ml' },
  { id: 'mlops', name: 'MLOps', frequencyPercent: 12.0, sourceCount: 107, category: 'ops' },
  { id: 'terraform', name: 'Terraform', frequencyPercent: 11.6, sourceCount: 104, category: 'ops' },
  { id: 'go', name: 'Go', frequencyPercent: 11.3, sourceCount: 101, category: 'language' },
  { id: 'vector-databases', name: 'Vector databases', frequencyPercent: 10.8, sourceCount: 97, category: 'database' },
  { id: 'fastapi', name: 'FastAPI', frequencyPercent: 10.7, sourceCount: 96, category: 'web' },
  { id: 'sql-postgresql', name: 'SQL / PostgreSQL', frequencyPercent: 9.8, sourceCount: 88, category: 'database', normalizedFrom: ['SQL', 'PostgreSQL', 'Postgres'] },
  { id: 'openai-api', name: 'OpenAI API', frequencyPercent: 8.7, sourceCount: 78, category: 'genai' },
  { id: 'fine-tuning', name: 'Fine-tuning', frequencyPercent: 8.5, sourceCount: 76, category: 'ml' },
  { id: 'langgraph', name: 'LangGraph', frequencyPercent: 8.0, sourceCount: 72, category: 'framework' },
  { id: 'api-rest', name: 'APIs / REST / API design', frequencyPercent: 6.5, sourceCount: 58, category: 'web', normalizedFrom: ['APIs', 'REST APIs', 'REST', 'API design'] },
  { id: 'model-training', name: 'Model training', frequencyPercent: 6.4, sourceCount: 57, category: 'ml' },
  { id: 'pinecone', name: 'Pinecone', frequencyPercent: 5.9, sourceCount: 53, category: 'database' },
  { id: 'llamaindex', name: 'LlamaIndex', frequencyPercent: 5.8, sourceCount: 52, category: 'framework' },
  { id: 'anthropic-api', name: 'Anthropic API', frequencyPercent: 5.5, sourceCount: 49, category: 'genai' },
  { id: 'redis', name: 'Redis', frequencyPercent: 4.8, sourceCount: 43, category: 'database' },
  { id: 'weaviate', name: 'Weaviate', frequencyPercent: 4.6, sourceCount: 41, category: 'database' },
  { id: 'model-evaluation', name: 'Model evaluation / evals', frequencyPercent: 4.5, sourceCount: 40, category: 'ml' },
  { id: 'scikit-learn', name: 'scikit-learn', frequencyPercent: 3.7, sourceCount: 33, category: 'ml' },
  { id: 'embeddings', name: 'Embeddings', frequencyPercent: 3.7, sourceCount: 33, category: 'genai' },
  { id: 'crewai', name: 'CrewAI', frequencyPercent: 3.1, sourceCount: 28, category: 'framework' },
  { id: 'autogen', name: 'AutoGen', frequencyPercent: 1.9, sourceCount: 17, category: 'framework' }
]

Add short descriptions for every skill.

Keep descriptions practical and concise, 1–2 sentences.

Official resources only

For each skill, add 1–3 official resources.

Use only official documentation, official tutorials, official quickstarts, or official academy pages.

Examples:

* Python official docs
* AWS official docs
* Azure official docs
* Google Cloud official docs
* Docker official docs
* Kubernetes official docs
* Terraform official docs
* FastAPI official docs
* React official docs
* TypeScript official docs
* OpenAI official docs
* Anthropic official docs
* LangChain official docs
* LangGraph official docs / LangChain Academy
* LlamaIndex official docs
* Pinecone official docs
* Weaviate official docs
* Redis official docs
* PostgreSQL official docs
* PyTorch official docs
* TensorFlow official docs
* scikit-learn official docs
* CrewAI official docs
* Microsoft AutoGen official docs

If an official resource is not obvious, leave the resource list empty for that skill rather than adding third-party resources.

Questions

Each skill should have a small multiple-choice question set.

Question count:

* high-frequency/core skills: 5 questions
* medium-frequency skills: 3 questions
* low-frequency/niche skills: 2 questions

Every question should have:

* 4 answer options
* exactly one correct answer
* short explanation

Questions should test practical understanding, not trivia.

Question types to include across the bank:

* definition
* practical scenario
* typical failure mode
* trade-off
* production usage

Skill test modal

When the user clicks Take test on a skill:

1. Open modal.
2. Show one question at a time.
3. Let user select an option.
4. After completing the skill test, calculate percentage correct.
5. Convert result to skill level.
6. Update the table.
7. Save state to Local Storage.
8. Show short result summary and explanations.

Skill test result mapping:

function scoreToLevel(scorePercent: number): SkillLevel {
  if (scorePercent <= 20) return 'unknown'
  if (scorePercent <= 40) return 'awareness'
  if (scorePercent <= 60) return 'basic'
  if (scorePercent <= 80) return 'usable'
  return 'strong'
}

Full test

When the user clicks Take full test:

1. Open a full test modal or full-screen panel.
2. Ask all questions from all skills.
3. Questions may be grouped by skill.
4. Show progress.
5. At the end, calculate result per skill.
6. Automatically fill skill levels in the table.
7. Save state to Local Storage.
8. Recalculate market coverage score.
9. Show summary.

Manual level selection

Every skill row should allow manual level selection.

When user changes a level manually:

1. Update state.
2. Save to Local Storage.
3. Recalculate coverage score.
4. Update missing skills section.

Local Storage

Persist user-selected skill levels.

Use a stable key, for example:

const STORAGE_KEY = 'ai-engineering-skill-coverage:v1'

Store:

type StoredState = {
  levels: Record<string, SkillLevel>
  updatedAt: string
}

On load, restore saved levels if available.

Add a Reset button to clear saved state.

Export Markdown

Generate a Markdown report with:

1. Title
2. Date
3. Overall market coverage score
4. Assessed skills count
5. Skill table:
    * skill
    * frequency
    * level
6. Highest-impact gaps
7. Source and methodology note
8. Link to source repository

Download as .md.

Example filename:

ai-engineering-skill-coverage.md

Export PDF

Implement PDF export using browser print.

Add print styles so the printed/PDF version includes:

1. title
2. score
3. skills table
4. highest-impact gaps
5. source/methodology note

The PDF export button can call:

window.print()

Use CSS print media rules to hide interactive controls in print mode.

Methodology modal

Add a Methodology button.

The modal should explain:

1. The product uses Alexey Grigorev’s AI Engineering Field Guide as the source.
2. Skill frequencies are based on the repository’s job description analysis.
3. Some skills were normalized into combined cards.
4. The score is a weighted self-assessment/test-assessment.
5. The product is not a certification.
6. The product does not guarantee hiring outcomes.
7. The source snapshot is treated as static.

Use this text as a base:

This tool is based on Alexey Grigorev’s AI Engineering Field Guide:
https://github.com/alexeygrigorev/ai-engineering-field-guide
The source repository analyzes AI Engineer job descriptions and interview preparation materials. Skill frequencies on this page are based on the job-description skill analysis in that repository.
Some related terms are normalized into a single skill card. For example, API, REST, REST APIs, and API design are grouped together. PostgreSQL and Postgres are grouped together.
Market coverage is calculated as a weighted score:
sum(skill market frequency × selected skill level) / sum(skill market frequency)
Selected skill levels are mapped to numeric values:
Unknown = 0
Awareness = 0.25
Basic = 0.5
Usable = 0.75
Strong = 1
This is not a certification and not a hiring guarantee. It is a market-weighted self-assessment tool intended to help identify skill gaps and choose what to learn next.

Design direction

Use a clean, information-dense interface.

The page should feel like a product/tool, not a marketing landing page.

Visual priorities:

* readable table
* clear score
* obvious bars
* simple controls
* no visual clutter
* good mobile fallback

Desktop is the primary experience.

Mobile should still be usable: table may become stacked cards.

Acceptance criteria

The implementation is complete when:

1. /AIEngineering-Skill-Coverage renders a usable page.
2. The page shows the skill table.
3. The table includes market frequency bars.
4. User can manually set skill levels.
5. User can take a test for an individual skill.
6. User can take the full test.
7. Score updates after manual selection or tests.
8. Missing skills are ranked by market frequency.
9. Official resources are shown for skills.
10. State persists in Local Storage.
11. Reset clears state.
12. Markdown export works.
13. PDF export via print works.
14. Methodology modal works.
15. The source repository is clearly linked.
16. The implementation follows the existing project’s framework, styling conventions, and routing patterns.

Implementation note

Inspect the existing pivnev.design project structure first.

Use the existing framework, component conventions, styling approach, and route structure.

Keep data in a static local data file. No server calls are required for the first implementation.