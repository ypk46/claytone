import { createRequire } from 'module';
import { Command } from 'commander';
import { registerInit } from './commands/init.js';

const require = createRequire(import.meta.url);
const { version } = require('../package.json');

const program = new Command();

program
  .name('claytone')
  .description('Design engine scaffolder for AI coding assistants')
  .version(version);

registerInit(program);

program.parse();
