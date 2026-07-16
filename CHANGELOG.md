# Changelog

All notable changes to `react-page-review` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.10] - 2026-07-16

### Fixed
- ZIP export no longer fails with "Invalid base64 input, it looks like a data url." when a review contains a screenshot whose data URL is not PNG-prefixed (e.g. legacy non-PNG records or the empty `data:,` produced by a failed capture). Any `data:...,` prefix is now stripped and empty payloads are skipped.

## [0.7.9] - 2026-07-14

### Fixed
- Modal / drawer / confirm dialogs now lock page scroll while open and restore it on close.
- Focus moves into the review modal when opened and returns to the trigger button when cancelled.
- Multi-target reviews now export per-target locator info in Markdown; top-level locators are kept as a fallback for older records.

### Changed
- Moved the "Clear selection" action out of the "More" dropdown to a dedicated toolbar button.
- Replaced the element/box mode Radio tabs with a compact native `<select>` dropdown.

## [0.7.8] - 2026-07-14

### Fixed
- Viewport screenshots now preserve the current scroll position instead of snapping to the top of the page.
- Full-page screenshots now include all scrollable content.
- Highlight overlays are drawn at the correct document coordinates in both viewport and full-page screenshots.

## [0.7.7] - 2026-07-14

### Fixed
- Screenshots now hide the review toolbar, modal, and drawers while preserving target highlight overlays.

## [0.7.6] - 2026-07-14

### Fixed
- Prevented native text selection while creating or resizing viewport boxes.

## [0.7.5] - 2026-07-14

### Changed
- Build now preserves React component names in the dist bundle (`oxc mangle.keepNames`).

## [0.7.4] - 2026-07-14

### Fixed
- Highlight boxes now scroll-follow independently of the active mode.
- Review UI is hidden from screenshots.

## [0.7.3] - 2026-07-14

### Changed
- Externalized `react/jsx-runtime` to reduce bundle size.
- Widened React peer dependency to `^18.0.0 || ^19.0.0`.
- Upgraded toolchain.

## [0.7.2] - 2026-07-14

### Changed
- Collapsed review-list drawer header actions into a dropdown menu.

## [0.7.1] - 2026-07-14

### Fixed
- Selection capture now skips `a[download]` elements so file exports actually trigger downloads.

## [0.7.0] - 2026-07-14

### Added
- Initial stable release of the React rewrite.
- `ReviewTool` component with element selection, viewport boxing, screenshots, and review form.
- `usePageReview` hook for localStorage-backed review state and JSON / Markdown / ZIP export.
- Headless interaction hooks: `useElementSelection`, `useViewportBoxing`, `useDragResize`.
- Component tree inspector drawer.
