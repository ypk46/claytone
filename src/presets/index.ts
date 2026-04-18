import type { PresetDefinition } from '../types/index.js';
import { linearPreset } from './linear/index.js';
import { notionPreset } from './notion/index.js';
import { vercelPreset } from './vercel/index.js';

export const presetRegistry = new Map<string, PresetDefinition>([
  ['notion', notionPreset],
  ['vercel', vercelPreset],
  ['linear', linearPreset],
]);

export function getPreset(id: string): PresetDefinition | undefined {
  return presetRegistry.get(id);
}

export function getAllPresets(): PresetDefinition[] {
  return Array.from(presetRegistry.values());
}
