import * as p from '@clack/prompts';
import type { ProjectConfig } from '../types/index.js';
import { generateClaudeMd } from './claude-md.js';
import { generateClaudeDir } from './claude-dir.js';
import { generateDesignTokens } from './design-tokens.js';

export async function generate(config: ProjectConfig): Promise<void> {
  const spinner = p.spinner();
  spinner.start('Generating design engine files...');

  try {
    await generateClaudeMd(config);
    await generateClaudeDir(config);
    await generateDesignTokens(config);
    spinner.stop('Files generated');
  } catch (err) {
    spinner.stop('Generation failed');
    throw err;
  }
}
