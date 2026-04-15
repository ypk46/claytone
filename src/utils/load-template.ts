import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const distRoot = dirname(fileURLToPath(import.meta.url));

export function loadTemplate(relativePath: string): string {
  return readFileSync(join(distRoot, relativePath), 'utf-8');
}
