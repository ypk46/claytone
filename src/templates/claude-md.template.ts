import type { ProjectConfig, PresetDefinition } from '../types/index.js';

const tokenFileRef: Record<NonNullable<ProjectConfig['tokenFormat']>, string> = {
  'css-vars':  '`src/styles/tokens.css`',
  'js-object': '`src/tokens.ts`',
  'json':      '`tokens.json`',
};

const designSystemLabel: Record<NonNullable<ProjectConfig['designSystemType']>, string> = {
  custom:   'a custom design system',
  shadcn:   'shadcn/ui',
  radix:    'Radix UI',
  material: 'Material UI',
  tailwind: 'Tailwind CSS',
};

export function claudeMdTemplate(config: ProjectConfig, preset?: PresetDefinition): string {
  const presetBlock = preset ? `\n${preset.claudeMdSection}\n` : '';

  return `# ${config.projectName} — Design Engine

This file governs how Claude Code contributes to **${config.projectName}**.

## Design System

This project uses ${designSystemLabel[config.designSystemType]}. Always work within the
established system boundaries — do not introduce external UI libraries or override
design system primitives.
${presetBlock}

## Before Making UI or Styling Changes

Read all rule files in \`.claude/rules/\` before touching any component, style, or
layout code:

- \`.claude/rules/design-tokens.md\` — token authority and ban list
- \`.claude/rules/component-naming.md\` — naming conventions
- \`.claude/rules/spacing-layout.md\` — spacing and layout constraints

## Design Tokens

Tokens are defined in ${tokenFileRef[config.tokenFormat]}. They are the **single source
of truth** for all design values. Never use raw px, hex, or arbitrary values.
${config.useMemoryFiles ? `
## Design Decisions

Significant design and architecture decisions are tracked in
\`.claude/memory/design-decisions.md\`. Read it before proposing architectural
changes and update it when new decisions are finalized.
` : ''}${config.includeHooks ? `
## Automation Hooks

This project uses Claude Code hooks for automated design system validation.
See \`.claude/hooks/\` for hook definitions.
` : ''}
## Key Conventions

- Components are PascalCase, one per file, exported from a barrel \`index.ts\`
- Spacing and layout use only tokens — no arithmetic composition
- Breakpoints are defined in the design system — no arbitrary breakpoints
`.trimStart();
}
