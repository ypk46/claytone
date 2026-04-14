import { writeFile as fsWrite, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname } from 'node:path';

export async function ensureDir(dir: string): Promise<void> {
  await mkdir(dir, { recursive: true });
}

export async function writeFile(
  path: string,
  content: string,
  overwrite = false
): Promise<boolean> {
  if (!overwrite && existsSync(path)) {
    return false;
  }
  await ensureDir(dirname(path));
  await fsWrite(path, content, 'utf8');
  return true;
}
