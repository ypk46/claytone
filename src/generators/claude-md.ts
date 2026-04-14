import type { ProjectConfig } from '../types/index.js';
import { getPreset } from '../presets/index.js';
import { claudeMdTemplate } from '../templates/claude-md.template.js';
import { writeFile } from '../utils/fs.js';
import { logCreated, logSkipped } from '../utils/logger.js';

export async function generateClaudeMd(config: ProjectConfig): Promise<void> {
  const preset = config.designPreset !== 'none' ? getPreset(config.designPreset) : undefined;
  const content = claudeMdTemplate(config, preset);
  const written = await writeFile('CLAUDE.md', content);
  if (written) {
    logCreated('CLAUDE.md');
  } else {
    logSkipped('CLAUDE.md');
  }
}
