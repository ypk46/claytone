import type { PresetDefinition } from '../../types/index.js';
import { loadTemplate } from '../../utils/load-template.js';

export const linearPreset: PresetDefinition = {
  id: 'linear',
  label: 'Linear',
  description:
    "Linear's design language — Inter type, dark surfaces, indigo-purple accent, 4px grid, sidebar-driven",
  tokens: loadTemplate('presets/linear/tokens.css'),
  claudeMdSection: loadTemplate('presets/linear/claude-md-section.md'),
  ruleAugmentations: {
    'design-tokens': loadTemplate('presets/linear/augmentations/design-tokens.md'),
    'spacing-layout': loadTemplate('presets/linear/augmentations/spacing-layout.md'),
  },
};
