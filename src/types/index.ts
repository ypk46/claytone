export interface PresetDefinition {
  id: string;
  label: string;
  description: string;
  tokens: string;
  claudeMdSection: string;
  ruleAugmentations?: {
    'design-tokens'?: string;
    'spacing-layout'?: string;
    'component-naming'?: string;
  };
}

export interface ProjectConfig {
  projectName: string;
  preset: PresetDefinition;
  includeHooks: boolean;
  useMemoryFiles: boolean;
}
