import type { ProjectConfig } from '../../types/index.js';

const designSystemLabel: Record<ProjectConfig['designSystemType'], string> = {
  custom:   'custom design system',
  shadcn:   'shadcn/ui',
  radix:    'Radix UI',
  material: 'Material UI',
  tailwind: 'Tailwind CSS',
};

const tokenFormatLabel: Record<ProjectConfig['tokenFormat'], string> = {
  'css-vars':  'CSS custom properties',
  'js-object': 'JS/TS object (style-dictionary)',
  'json':      'Raw JSON',
};

export function designDecisionsMemory(config: ProjectConfig): string {
  const today = new Date().toISOString().slice(0, 10);

  return `# Design Decisions Log

This file tracks significant design system decisions made during development.

**Instructions for Claude Code:** Read this file before proposing design system
architecture changes. Append new entries when architectural choices are finalized.
Oldest entries are at the bottom.

## Format

\`\`\`
- **Date**: YYYY-MM-DD
- **Decision**: What was decided
- **Rationale**: Why
- **Alternatives Considered**: What was rejected and why
\`\`\`

---

<!-- Append new entries above this line -->

---

- **Date**: ${today}
- **Decision**: Adopted ${designSystemLabel[config.designSystemType]} as the design system foundation
- **Rationale**: Project initialized with \`claytone init\` selecting this option
- **Alternatives Considered**: Other design systems available via claytone scaffold

---

- **Date**: ${today}
- **Decision**: Design tokens use ${tokenFormatLabel[config.tokenFormat]} format
- **Rationale**: Selected during project initialization based on team/stack preference
- **Alternatives Considered**: Other token formats (CSS vars, JS object, JSON)
`;
}
