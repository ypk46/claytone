import type { ProjectConfig } from '../types/index.js';
import { claudeMdTemplate } from '../templates/claude-md.template.js';
import { writeFile } from '../utils/fs.js';
import { logCreated, logSkipped } from '../utils/logger.js';

export async function generateClaudeMd(config: ProjectConfig): Promise<void> {
  const content = claudeMdTemplate(config);
  const written = await writeFile('CLAUDE.md', content);
  if (written) {
    logCreated('CLAUDE.md');
  } else {
    logSkipped('CLAUDE.md');
  }
}
