import type { ProjectConfig } from "../types/index.js";
import { loadTemplate } from "../utils/load-template.js";
import { interpolate } from "../utils/interpolate.js";
import { writeFile, writeAndLog } from "../utils/fs.js";
import { logCreated, logSkipped } from "../utils/logger.js";

function withAugmentation(base: string, augmentation?: string): string {
  return augmentation ? `${base}\n${augmentation}` : base;
}

export async function generateClaudeDir(config: ProjectConfig): Promise<void> {
  const { ruleAugmentations } = config.preset;

  await writeAndLog(
    ".claude/rules/design-tokens.md",
    withAugmentation(
      loadTemplate("templates/rules/design-tokens.md"),
      ruleAugmentations?.["design-tokens"],
    ),
  );
  await writeAndLog(
    ".claude/rules/component-naming.md",
    withAugmentation(
      loadTemplate("templates/rules/component-naming.md"),
      ruleAugmentations?.["component-naming"],
    ),
  );
  await writeAndLog(
    ".claude/rules/spacing-layout.md",
    withAugmentation(
      loadTemplate("templates/rules/spacing-layout.md"),
      ruleAugmentations?.["spacing-layout"],
    ),
  );

  if (config.useMemoryFiles) {
    const today = new Date().toISOString().slice(0, 10);
    const content = interpolate(
      loadTemplate("templates/memory/design-decisions.md"),
      {
        date: today,
        presetLabel: config.preset.label,
      },
    );
    await writeAndLog(".claude/memory/design-decisions.md", content);
  }

  if (config.includeHooks) {
    const hookPath = ".claude/hooks/pre-tool-use.sh";
    const written = await writeFile(
      hookPath,
      loadTemplate("templates/hooks/pre-tool-use.sh"),
    );
    if (written) {
      logCreated(hookPath);
      const { chmod } = await import("node:fs/promises");
      await chmod(hookPath, 0o755);
    } else {
      logSkipped(hookPath);
    }
  }
}
