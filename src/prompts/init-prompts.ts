import * as p from '@clack/prompts';
import type { ProjectConfig } from '../types/index.js';
import { getAllPresets } from '../presets/index.js';
import { basename, resolve } from 'node:path';

export interface InitPromptsOpt {
  yes?: boolean;
}

/**
 * Build init default configuration by taking the first registered preset and using the current folder name as project name.
 * @returns
 */
function buildDefaults(): ProjectConfig {
  const [defaultPreset] = getAllPresets();
  if (!defaultPreset) throw new Error('No presets registered');
  return {
    projectName: basename(resolve('.')),
    preset: defaultPreset,
    includeHooks: false,
    useMemoryFiles: true,
  };
}

/**
 * Cancel the prompt flow and exit the process.
 */
function cancel(): never {
  p.cancel('Setup cancelled.');
  process.exit(0);
}

/**
 * Run the initialization prompts to gather configuration for scaffolding a design engine.
 * @param options
 * @returns
 */
export async function runInitPrompts(options: InitPromptsOpt): Promise<ProjectConfig> {
  if (options.yes) return buildDefaults();

  // 1. Project name
  const projectName = await p.text({
    message: 'Project name',
    placeholder: basename(resolve('.')),
    defaultValue: basename(resolve('.')),
    validate: (v) => (v.trim().length === 0 ? 'Required' : undefined),
  });
  if (p.isCancel(projectName)) cancel();

  // 2. Preset (required)
  const presets = getAllPresets();
  const selectedId = await p.select({
    message: 'Design preset',
    options: presets.map((pr) => ({
      value: pr.id,
      label: pr.label,
      hint: pr.description,
    })),
  });
  if (p.isCancel(selectedId)) cancel();
  const preset = presets.find((pr) => pr.id === (selectedId as string))!;

  // 3. Memory files
  const useMemoryFiles = await p.confirm({
    message: 'Scaffold memory files for design decisions?',
    initialValue: true,
  });
  if (p.isCancel(useMemoryFiles)) cancel();

  // 4. Hooks
  const includeHooks = await p.confirm({
    message: 'Include Claude Code automation hooks?',
    initialValue: false,
  });
  if (p.isCancel(includeHooks)) cancel();

  return {
    projectName: projectName,
    preset,
    useMemoryFiles: useMemoryFiles,
    includeHooks: includeHooks,
  };
}
