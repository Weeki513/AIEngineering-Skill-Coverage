# AI Engineering Skill Coverage

A static, bilingual skill-assessment tool based on the skill-frequency data from
[Alexey Grigorev's AI Engineering Field Guide](https://github.com/alexeygrigorev/ai-engineering-field-guide).

The application compares a self-assessment or test result with market-weighted
AI engineering skills. It runs entirely in the browser and does not require an
account or backend.

## Features

- English and Russian interfaces
- Manual skill-level assessment
- Per-skill and full question-based tests
- Market-frequency-weighted coverage score
- Local browser persistence
- Markdown and print/PDF export
- Responsive light and dark themes

## Requirements

- Node.js 20.19 or newer
- npm 10 or newer

## Local development

```bash
npm ci
npm run dev
```

Vite prints the local URL when the development server starts.

## Validation and production build

```bash
npm run validate:questions
npm run build
```

The production output is written to `dist/` and is intentionally excluded from
version control.

## Deployment note

The current Vite base path is `/`, suitable for a root-domain deployment. Before
deploying as a GitHub Pages project site, change `base` in `vite.config.ts` to
the repository path, for example `/AIEngineering-Skill-Coverage/`.

## Data source and methodology

The skill names, market frequencies, and source counts are derived from the
[AI Engineering Field Guide](https://github.com/alexeygrigorev/ai-engineering-field-guide).
Related terms are normalized as described in the application's methodology
dialog. The score is a weighted self-assessment, not a certification or hiring
guarantee.

See [NOTICE.md](NOTICE.md) for the distinction between the license for this
application's original code and rights in the source-derived data.

## License

The original application code is available under the [MIT License](LICENSE).
That license does not grant rights to third-party or source-derived data; see
[NOTICE.md](NOTICE.md).

