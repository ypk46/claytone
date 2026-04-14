import * as p from '@clack/prompts';
import type { ProjectConfig, DesignSystemType, TokenFormat } from '../types/index.js';
import { basename, resolve } from 'node:path';

function buildDefaults(): ProjectConfig {
  return {
    projectName: basename(resolve('.')),
    designSystemType: 'custom',
    tokenFormat: 'css-vars',
    includeHooks: false,
    useMemoryFiles: true,
  };
}

export async function runInitPrompts(options: { yes?: boolean }): Promise<ProjectConfig> {
  if (options.yes) return buildDefaults();

  const answers = await p.group(
    {
      projectName: () =>
        p.text({
          message: 'Project name',
          placeholder: basename(resolve('.')),
          defaultValue: basename(resolve('.')),
          validate: (v) => (v.trim().length === 0 ? 'Required' : undefined),
        }),

      designSystemType: () =>
        p.select({
          message: 'Design system type',
          options: [
            { value: 'custom' as DesignSystemType,   label: 'Custom (from scratch)' },
            { value: 'shadcn' as DesignSystemType,   label: 'shadcn/ui' },
            { value: 'radix' as DesignSystemType,    label: 'Radix UI' },
            { value: 'material' as DesignSystemType, label: 'Material UI' },
            { value: 'tailwind' as DesignSystemType, label: 'Tailwind only' },
          ],
        }),

      tokenFormat: () =>
        p.select({
          message: 'Design token format',
          options: [
            { value: 'css-vars' as TokenFormat,  label: 'CSS custom properties' },
            { value: 'js-object' as TokenFormat, label: 'JS/TS object (style-dictionary)' },
            { value: 'json' as TokenFormat,      label: 'Raw JSON' },
          ],
        }),

      useMemoryFiles: () =>
        p.confirm({
          message: 'Scaffold memory files for design decisions?',
          initialValue: true,
        }),

      includeHooks: () =>
        p.confirm({
          message: 'Include Claude Code automation hooks?',
          initialValue: false,
        }),
    },
    {
      onCancel: () => {
        p.cancel('Setup cancelled.');
        process.exit(0);
      },
    }
  );

  return answers as unknown as ProjectConfig;
}
