export type DesignSystemType = 'custom' | 'shadcn' | 'radix' | 'material' | 'tailwind';
export type TokenFormat = 'css-vars' | 'js-object' | 'json';
export type DesignPreset = 'none' | 'notion';

export interface PresetDefinition {
  id: DesignPreset;
  label: string;
  description: string;
  defaultDesignSystemType: DesignSystemType;
  tokens: Record<TokenFormat, string>;
  claudeMdSection: string;
  ruleAugmentations: {
    'design-tokens'?: string;
    'spacing-layout'?: string;
    'component-naming'?: string;
  };
}

export interface ProjectConfig {
  projectName: string;
  designPreset: DesignPreset;
  designSystemType: DesignSystemType;
  tokenFormat: TokenFormat;
  includeHooks: boolean;
  useMemoryFiles: boolean;
}
