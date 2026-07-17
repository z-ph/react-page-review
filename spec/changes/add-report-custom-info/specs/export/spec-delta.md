# Spec Delta: Custom Report Info Injection

## ADDED Requirements

### Requirement: Custom Report Info Injection
WHEN reviews are exported (JSON, Markdown, or ZIP),
系统 SHALL merge host-provided custom metadata fields (`reportInfo`) into the report: as top-level fields in JSON/ZIP report data, and as `key：value` lines in the Markdown report header.

`reportInfo` MAY be a plain object or a function returning an object; the function form SHALL be evaluated lazily at export time.

#### Scenario: JSON export contains custom fields
GIVEN the host app configures `reportInfo = { version: '1.2.3', env: 'demo' }`
WHEN the reviewer exports JSON
THEN the exported JSON contains top-level `version = "1.2.3"` and `env = "demo"` alongside `exportTime`, `total`, and `reviews`.

#### Scenario: Function form evaluated at export time
GIVEN the host app configures `reportInfo = () => ({ version: readCurrentVersion() })`
WHEN the reviewer exports a report
THEN the function is called at export time and the current value is used.

#### Scenario: Markdown header lists custom fields
GIVEN the host app configures `reportInfo = { version: '1.2.3' }`
WHEN the reviewer exports Markdown
THEN the report header contains a line `version：1.2.3`.

### Requirement: Reserved Report Keys Cannot Be Overridden
IF a custom field key collides with a reserved report key (`exportTime`, `total`, `reviews`),
系统 SHALL keep the reserved value and ignore the custom one; the Markdown header SHALL NOT print a duplicate line for reserved keys.

#### Scenario: Custom field attempts to override total
GIVEN the host app configures `reportInfo = { total: 999 }`
WHEN the reviewer exports JSON
THEN the exported JSON still contains the numeric review count in `total`.

### Requirement: Empty Custom Values Are Omitted in Markdown
IF a custom field value is `null` or `undefined`,
系统 SHALL omit that line from the Markdown header; object values SHALL be JSON-stringified.

#### Scenario: Null value skipped
GIVEN the host app configures `reportInfo = { build: null, version: '1.2.3' }`
WHEN the reviewer exports Markdown
THEN the header contains `version：1.2.3` and no `build` line.

## MODIFIED Requirements

None.

## REMOVED Requirements

None.
