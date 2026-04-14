import * as p from '@clack/prompts';

export function logSkipped(path: string): void {
  p.log.warn(`skipped (already exists): ${path}`);
}

export function logCreated(path: string): void {
  p.log.success(`created: ${path}`);
}
