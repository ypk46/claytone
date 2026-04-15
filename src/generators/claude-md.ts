import type { ProjectConfig } from '../types/index.js';
import { loadTemplate } from '../utils/load-template.js';
import { interpolate } from '../utils/interpolate.js';
import { writeAndLog } from '../utils/fs.js';

const MEMORY_SECTION = `
## Design Decisions

Significant design and architecture decisions are tracked in
\`.claude/memory/design-decisions.md\`. Read it before proposing architectural
changes and update it when new decisions are finalized.
`;

const HOOKS_SECTION = `
## Automation Hooks

This project uses Claude Code hooks for automated design system validation.
See \`.claude/hooks/\` for hook definitions.
`;

export async function generateClaudeMd(config: ProjectConfig): Promise<void> {
  const template = loadTemplate('templates/claude-md.md');
  const content = interpolate(template, {
    projectName: config.projectName,
    presetSection: config.preset.claudeMdSection,
    memorySection: config.useMemoryFiles ? MEMORY_SECTION : '',
    hooksSection: config.includeHooks ? HOOKS_SECTION : '',
  });
  await writeAndLog('CLAUDE.md', content);
}
