import type { ProjectConfig } from "../types/index.js";
import { getPreset } from "../presets/index.js";
import { designTokensRule } from "../templates/rules/design-tokens.rule.js";
import { componentNamingRule } from "../templates/rules/component-naming.rule.js";
import { spacingLayoutRule } from "../templates/rules/spacing-layout.rule.js";
import { designDecisionsMemory } from "../templates/memory/design-decisions.memory.js";
import { preToolUseHook } from "../templates/hooks/pre-tool-use.hook.js";
import { writeFile } from "../utils/fs.js";
import { logCreated, logSkipped } from "../utils/logger.js";

async function write(path: string, content: string): Promise<void> {
  const written = await writeFile(path, content);
  if (written) {
    logCreated(path);
  } else {
    logSkipped(path);
  }
}

export async function generateClaudeDir(config: ProjectConfig): Promise<void> {
  const preset =
    config.designPreset !== "none" ? getPreset(config.designPreset) : undefined;

  await write(
    ".claude/rules/design-tokens.md",
    designTokensRule(config, preset?.ruleAugmentations["design-tokens"]),
  );
  await write(
    ".claude/rules/component-naming.md",
    componentNamingRule(config, preset?.ruleAugmentations["component-naming"]),
  );
  await write(
    ".claude/rules/spacing-layout.md",
    spacingLayoutRule(config, preset?.ruleAugmentations["spacing-layout"]),
  );

  if (config.useMemoryFiles) {
    await write(
      ".claude/memory/design-decisions.md",
      designDecisionsMemory(config),
    );
  }

  if (config.includeHooks) {
    const hookPath = ".claude/hooks/pre-tool-use.sh";
    const written = await writeFile(hookPath, preToolUseHook(config));
    if (written) {
      logCreated(hookPath);
      // Make the hook executable
      const { chmod } = await import("node:fs/promises");
      await chmod(hookPath, 0o755);
    } else {
      logSkipped(hookPath);
    }
  }
}
