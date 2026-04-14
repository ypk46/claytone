export type DesignSystemType = 'custom' | 'shadcn' | 'radix' | 'material' | 'tailwind';
export type TokenFormat = 'css-vars' | 'js-object' | 'json';

export interface ProjectConfig {
  projectName: string;
  designSystemType: DesignSystemType;
  tokenFormat: TokenFormat;
  includeHooks: boolean;
  useMemoryFiles: boolean;
}
