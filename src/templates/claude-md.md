# {{projectName}} — Design Engine

This file governs how Claude Code contributes to **{{projectName}}**.

{{presetSection}}

## Before Making UI or Styling Changes

Read all rule files in `.claude/rules/` before touching any component, style, or
layout code:

- `.claude/rules/design-tokens.md` — token authority and ban list
- `.claude/rules/component-naming.md` — naming conventions
- `.claude/rules/spacing-layout.md` — spacing and layout constraints

## Design Tokens

Tokens are defined in `src/styles/tokens.css`. They are the **single source of
truth** for all design values. Never use raw px, hex, or arbitrary values.
{{memorySection}}{{hooksSection}}

## Key Conventions

- Components are PascalCase, one per file, exported from a barrel `index.ts`
- Spacing and layout use only tokens — no arithmetic composition
- Breakpoints are defined in the design system — no arbitrary breakpoints
