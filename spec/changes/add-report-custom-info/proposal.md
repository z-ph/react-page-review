# Proposal: Add Custom Report Info Injection

## Change ID

`add-report-custom-info`

## Why

Review reports are exported and handed to developers who were not present when the feedback was written. Today the report header only carries `exportTime` and `total` — there is no way to tell which app version, environment, or build the feedback was collected from. Host apps need a way to stamp their own metadata (e.g. `version`, `env`) into every exported report.

## What Changes

1. `usePageReview` accepts a new `reportInfo` option: a plain object, or a function returning an object (evaluated lazily at export time).
2. `ReviewTool` gains a `reportInfo` prop, passed through to `usePageReview`.
3. JSON / ZIP exports merge the custom fields into the top-level report object. Reserved keys (`exportTime`, `total`, `reviews`) cannot be overridden by custom fields.
4. Markdown export renders each custom field as a `key：value` line in the report header. `null` / `undefined` values are skipped; object values are JSON-stringified; reserved keys are not repeated in the header.
5. Example app and e2e script gain coverage for the new option; README / README.zh-CN / CHANGELOG are updated.

## Impact

- **API surface**: one new optional option/prop. No breaking change — exports are byte-identical to before when `reportInfo` is omitted.
- **Data model**: review records in localStorage are untouched; the fields only exist at report level.
- **Bundle size**: negligible.

## Out of Scope

- Persisting custom fields into individual review records.
- Any UI for editing these fields inside the tool.

## Verification

- `pnpm build` succeeds and refreshes `dist/`.
- `BASE_URL=http://localhost:5173 NODE_PATH=$(npm root -g) node test-react-e2e.cjs` passes, including the new assertions: JSON report contains the injected fields, reserved keys stay intact, Markdown header lists the fields.
