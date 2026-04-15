import type { ProjectConfig } from "../types/index.js";
import { writeFile } from "../utils/fs.js";
import { logCreated, logSkipped } from "../utils/logger.js";

const TOKEN_PATH = "src/styles/tokens.css";

export async function generateDesignTokens(
  config: ProjectConfig,
): Promise<void> {
  const written = await writeFile(TOKEN_PATH, config.preset.tokens);
  if (written) {
    logCreated(TOKEN_PATH);
  } else {
    logSkipped(TOKEN_PATH);
  }
}
