# Code Lab / مختبر البرمجة

Run locally: `node server.mjs` then open http://127.0.0.1:4173 (put GEMINI_API_KEY in `.env`, see `.env.example`).

## Generate content
`node build-content.mjs` (Term 1) · `node build-content.mjs --term2` · `node build-content.mjs --projects [--term2]` · `node export-curriculum.mjs` (printable Word/PDF-ready files).
Add `--force` to overwrite, or grade/lesson numbers (`... 4 2`) to do one lesson. Re-run any time: finished files are skipped.

## Deploy (Render / Railway / any Node host)
1. Commit the `content/` folder (never `.env`). 2. Start command: `node server.mjs`. 3. Environment variables: `GEMINI_API_KEY`, `GEMINI_MODEL`, `NODE_ENV=production`, optional `TUTOR_DAILY_LIMIT=400` (protects the free quota). The host's `PORT` is used automatically.
