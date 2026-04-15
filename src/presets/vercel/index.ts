import type { PresetDefinition } from '../../types/index.js';
import { loadTemplate } from '../../utils/load-template.js';

export const vercelPreset: PresetDefinition = {
  id: 'vercel',
  label: 'Vercel',
  description:
    "Vercel's design language — Geist type, high-contrast monochrome, 8px grid, technical precision",
  tokens: loadTemplate('presets/vercel/tokens.css'),
  claudeMdSection: loadTemplate('presets/vercel/claude-md-section.md'),
  ruleAugmentations: {
    'design-tokens': loadTemplate('presets/vercel/augmentations/design-tokens.md'),
    'spacing-layout': loadTemplate('presets/vercel/augmentations/spacing-layout.md'),
  },
};
