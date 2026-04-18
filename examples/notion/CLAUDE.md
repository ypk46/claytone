# Notion - Settings Page — Design Engine

This file governs how Claude Code contributes to **Notion - Settings Page**.

## Notion Design Preset

This project uses the **Notion design preset** — a faithful encoding of Notion's
design language into Claude Code guardrails.

### Design Philosophy

Notion's interface is built on restraint, information density, and calm. Every
visual decision should serve the content, never compete with it. When in doubt,
subtract — remove color, reduce radius, eliminate shadow.

### Block-Based Thinking

Every piece of content is a block. UI components should reflect this:

- Prefer content-driven layout over decorative structure
- Sidebar navigation is a content outline, not a chrome element
- Hover states reveal affordances; they do not add decoration
- Inline editing is the default; modal-heavy flows are a last resort

### Typography Contract

Inter is the only permitted typeface. No system font used as a visual choice —
only as a loading fallback in the `--font-sans` stack. Use the defined type scale;
do not interpolate between steps.

### Color Discipline

The entire UI is expressible in `#37352F` and `#FFFFFF` with three levels of
opacity for hierarchy. The accent color (`#2383E2`) is reserved for interactive
affordances (links, selection handles, focus rings). No gradients. No additional
brand colors introduced outside the token file.


## Before Making UI or Styling Changes

Read all rule files in `.claude/rules/` before touching any component, style, or
layout code:

- `.claude/rules/design-tokens.md` — token authority and ban list
- `.claude/rules/component-naming.md` — naming conventions
- `.claude/rules/spacing-layout.md` — spacing and layout constraints

## Design Tokens

Tokens are defined in `src/styles/tokens.css`. They are the **single source of
truth** for all design values. Never use raw px, hex, or arbitrary values.

## Design Decisions

Significant design and architecture decisions are tracked in
`.claude/memory/design-decisions.md`. Read it before proposing architectural
changes and update it when new decisions are finalized.


## Key Conventions

- Components are PascalCase, one per file, exported from a barrel `index.ts`
- Spacing and layout use only tokens — no arithmetic composition
- Breakpoints are defined in the design system — no arbitrary breakpoints
