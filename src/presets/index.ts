import type { DesignPreset, PresetDefinition } from "../types/index.js";
import { notionPreset } from "./notion.js";

export const presetRegistry = new Map<DesignPreset, PresetDefinition>([
  ["notion", notionPreset],
]);

export function getPreset(id: DesignPreset): PresetDefinition | undefined {
  return presetRegistry.get(id);
}
