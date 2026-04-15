import type { PresetDefinition } from "../types/index.js";
import { notionPreset } from "./notion/index.js";

export const presetRegistry = new Map<string, PresetDefinition>([
  ["notion", notionPreset],
]);

export function getPreset(id: string): PresetDefinition | undefined {
  return presetRegistry.get(id);
}

export function getAllPresets(): PresetDefinition[] {
  return Array.from(presetRegistry.values());
}
