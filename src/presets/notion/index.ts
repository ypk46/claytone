import type { PresetDefinition } from '../../types/index.js';
import { loadTemplate } from '../../utils/load-template.js';

export const notionPreset: PresetDefinition = {
  id: 'notion',
  label: 'Notion',
  description:
    "Notion's design language — Inter type, warm near-black palette, 4px grid, minimal decoration",
  tokens: loadTemplate('presets/notion/tokens.css'),
  claudeMdSection: loadTemplate('presets/notion/claude-md-section.md'),
  ruleAugmentations: {
    'design-tokens': loadTemplate('presets/notion/augmentations/design-tokens.md'),
    'spacing-layout': loadTemplate('presets/notion/augmentations/spacing-layout.md'),
  },
};
