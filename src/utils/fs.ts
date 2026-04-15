import { writeFile as fsWrite, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname } from "node:path";
import { logCreated, logSkipped } from "./logger.js";

export async function ensureDir(dir: string): Promise<void> {
  await mkdir(dir, { recursive: true });
}

export async function writeFile(
  path: string,
  content: string,
  overwrite = false,
): Promise<boolean> {
  if (!overwrite && existsSync(path)) {
    return false;
  }
  await ensureDir(dirname(path));
  await fsWrite(path, content, "utf8");
  return true;
}

export async function writeAndLog(
  path: string,
  content: string,
): Promise<void> {
  const written = await writeFile(path, content);
  if (written) {
    logCreated(path);
  } else {
    logSkipped(path);
  }
}
