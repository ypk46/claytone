# Design Decisions Log

This file tracks significant design system decisions made during development.

**Instructions for Claude Code:** Read this file before proposing design system
architecture changes. Append new entries when architectural choices are finalized.
Oldest entries are at the bottom.

## Format

```
- **Date**: YYYY-MM-DD
- **Decision**: What was decided
- **Rationale**: Why
- **Alternatives Considered**: What was rejected and why
```

---

- **Date**: 2026-04-18
- **Decision**: Settings page built with scroll-spy active nav — sidebar highlights the section in the viewport, and clicking a nav item smooth-scrolls to that section.
- **Rationale**: Single-page scroll avoids routing complexity; scroll-spy keeps the nav state honest without needing URL hash changes.
- **Alternatives Considered**: Hash-based routing (overkill for a single settings page), tab switching that mounts/unmounts sections (loses form state on tab change).

- **Date**: 2026-04-18
- **Decision**: CSS Modules used for all component styles; no Tailwind or global utility classes.
- **Rationale**: Scoped styles align with the block-based component model; all values trace to token variables per design-tokens rules.
- **Alternatives Considered**: Tailwind (banned by arbitrary-value rule), global BEM classes (naming conflicts at scale).

<!-- Append new entries above this line -->

---

- **Date**: 2026-04-18
- **Decision**: Adopted Notion design system
- **Rationale**: Project initialized with `claytone init` selecting this preset
- **Alternatives Considered**: Other design system presets available via claytone scaffold
