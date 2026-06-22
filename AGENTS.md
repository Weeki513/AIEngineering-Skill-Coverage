# AI Engineering Skill Coverage — project guide

## Purpose

This repository contains a static React/Vite skill-assessment page based on the
`alexeygrigorev/ai-engineering-field-guide` skill-frequency dataset. The app has
English and Russian interfaces, manual skill levels, per-skill and full tests,
local persistence, Markdown export, print/PDF export, and a methodology modal.

Work directly in code. Do not generate images, mockups, visual concepts, 3D
assets, or separate design previews.

## Commands

```bash
npm run dev
npm run validate:questions
npm run build
```

Before completing a change, run at least `npm run build`. Question-bank changes
must also pass `npm run validate:questions`.

The usual local page is:

```text
http://127.0.0.1:5174/AIEngineering-Skill-Coverage
```

## Important files

- `src/App.tsx` — page structure, score calculation, tests, persistence, exports,
  and modals.
- `src/styles.css` — responsive light/dark presentation and print rules.
- `src/i18n.ts` — interface labels, level/category names, Russian skill
  descriptions, and question localization lookup.
- `src/data/aiEngineeringSkills.ts` — types, immutable skill seed table, English
  question bank, question builder, exported skills, and source URL.
- `src/data/questionTranslationsRu.ts` — Russian question, option, and
  explanation strings keyed by generated question ID.
- `scripts/validate-question-bank.mjs` — validates question-bank IDs against the
  seed table and reports skills without questions.
- `spec.md` — original functional and design requirements.

## Data invariants

Treat the `seeds` array in `src/data/aiEngineeringSkills.ts` as the authoritative
skill table. Do not add, rename, remove, or silently edit seed records when the
task only concerns questions or localization.

Every top-level `questionBank` key must exactly match an existing `seed.id`.
Never introduce separate bank keys such as `observability`, `ai-security`,
`product-ai`, or `evals`. Place those topics under an existing production skill.
Use `model-evaluation`, not `evals`, as the skill ID.

Current generated question IDs use this format:

```text
<skill.id>-q<1-based position within that skill>
```

Reordering questions changes their IDs and therefore their Russian localization
keys. When questions are added, removed, moved, or reordered, update both locale
banks together and verify that there are no missing or extra Russian IDs.

Preserve each question's meaning, option order, `correctOptionIndex`, and
explanation unless the user explicitly requests content editing.

## Localization rules

English source questions live in `questionBank`. Russian question content lives
in `questionTranslationsRu.ts`. Both locales must contain the same skills,
question counts, option counts, order, and correct-answer indexes.

Use natural technical Russian rather than literal translation. Keep established
terms and product names where that is clearer: API, RAG, LLM, runtime, production,
Pod, Deployment, fine-tuning, prompt, eval, CI/CD, and framework names.

When adding interface text, add both English and Russian values in `src/i18n.ts`.
Do not leave English-only ARIA labels in the Russian interface.

## Functional constraints

- Skill levels and display preferences persist in Local Storage.
- Market coverage is a frequency-weighted score; unknown skills contribute 0.
- Demand progress bars represent the actual percentage and must not normalize
  the highest skill to 100%.
- A skill with no questions must not open an empty test modal.
- Resource links must retain their real titles rather than a generic
  “Official resource” label.
- Markdown and print/PDF exports must remain usable in both locales.
- Preserve responsive table/card behavior and light/dark theme support.

## Change discipline

- Keep changes scoped to the user's request.
- Preserve unrelated user changes.
- Prefer `apply_patch` for hand edits.
- Do not add image-generation dependencies or generated visual assets.
- Do not change skill-frequency values or source counts without an explicit data
  update request.
- Do not claim browser verification unless the relevant interaction was actually
  exercised in the running page.

## Completion checklist

1. Confirm question-bank keys are valid and locale structures match.
2. Run `npm run validate:questions` for question changes.
3. Run `npm run build`.
4. For UI or interaction changes, verify the affected English and Russian flows
   in the local browser and check the console for errors.
5. Report changed files and any intentionally unresolved gaps.
