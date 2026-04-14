import type { Command } from 'commander';
import * as p from '@clack/prompts';
import { runInitPrompts } from '../prompts/init-prompts.js';
import { generate } from '../generators/index.js';

export function registerInit(program: Command): void {
  program
    .command('init')
    .description('Scaffold a design engine for your project')
    .option('--yes', 'Skip prompts, use defaults')
    .action(async (options: { yes?: boolean }) => {
      p.intro('claytone — design engine setup');
      const config = await runInitPrompts(options);
      await generate(config);
      p.outro('Design engine ready. Start building.');
    });
}
