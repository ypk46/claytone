import * as p from "@clack/prompts";
import type {
  ProjectConfig,
  DesignPreset,
  DesignSystemType,
  TokenFormat,
} from "../types/index.js";
import { getPreset } from "../presets/index.js";
import { basename, resolve } from "node:path";

function buildDefaults(): ProjectConfig {
  return {
    projectName: basename(resolve(".")),
    designPreset: "none",
    designSystemType: "custom",
    tokenFormat: "css-vars",
    includeHooks: false,
    useMemoryFiles: true,
  };
}

function cancel(): never {
  p.cancel("Setup cancelled.");
  process.exit(0);
}

export async function runInitPrompts(options: {
  yes?: boolean;
}): Promise<ProjectConfig> {
  if (options.yes) return buildDefaults();

  // 1. Project name
  const projectName = await p.text({
    message: "Project name",
    placeholder: basename(resolve(".")),
    defaultValue: basename(resolve(".")),
    validate: (v) => (v.trim().length === 0 ? "Required" : undefined),
  });
  if (p.isCancel(projectName)) cancel();

  // 2. Design preset
  const designPreset = await p.select<DesignPreset>({
    message: "Design engine preset",
    options: [
      { value: "none" as DesignPreset, label: "None — start from scratch" },
      {
        value: "notion" as DesignPreset,
        label:
          "Notion — Inter type, warm palette, 4px grid, minimal decoration",
      },
    ],
  });
  if (p.isCancel(designPreset)) cancel();

  // 3. Design system type — skipped when a preset is selected
  let designSystemType: DesignSystemType;
  if (designPreset !== "none") {
    const preset = getPreset(designPreset);
    designSystemType = preset?.defaultDesignSystemType ?? "custom";
    p.log.info(
      `Using ${preset?.label ?? designPreset} preset — design system type set to '${designSystemType}' automatically`,
    );
  } else {
    const answer = await p.select<DesignSystemType>({
      message: "Design system type",
      options: [
        { value: "custom" as DesignSystemType, label: "Custom (from scratch)" },
        { value: "shadcn" as DesignSystemType, label: "shadcn/ui" },
        { value: "radix" as DesignSystemType, label: "Radix UI" },
        { value: "material" as DesignSystemType, label: "Material UI" },
        { value: "tailwind" as DesignSystemType, label: "Tailwind only" },
      ],
    });
    if (p.isCancel(answer)) cancel();
    designSystemType = answer;
  }

  // 4. Token format
  const tokenFormat = await p.select<TokenFormat>({
    message: "Design token format",
    options: [
      { value: "css-vars" as TokenFormat, label: "CSS custom properties" },
      {
        value: "js-object" as TokenFormat,
        label: "JS/TS object (style-dictionary)",
      },
      { value: "json" as TokenFormat, label: "Raw JSON" },
    ],
  });
  if (p.isCancel(tokenFormat)) cancel();

  // 5. Memory files
  const useMemoryFiles = await p.confirm({
    message: "Scaffold memory files for design decisions?",
    initialValue: true,
  });
  if (p.isCancel(useMemoryFiles)) cancel();

  // 6. Hooks
  const includeHooks = await p.confirm({
    message: "Include Claude Code automation hooks?",
    initialValue: false,
  });
  if (p.isCancel(includeHooks)) cancel();

  return {
    projectName: projectName as string,
    designPreset: designPreset as DesignPreset,
    designSystemType,
    tokenFormat: tokenFormat as TokenFormat,
    useMemoryFiles: useMemoryFiles as boolean,
    includeHooks: includeHooks as boolean,
  };
}
