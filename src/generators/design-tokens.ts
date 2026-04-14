import type { ProjectConfig } from '../types/index.js';
import { getPreset } from '../presets/index.js';
import { writeFile } from '../utils/fs.js';
import { logCreated, logSkipped } from '../utils/logger.js';

function cssVarsTokens(): string {
  return `:root {
  /* Colors */
  --color-primary: #0070f3;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f5f5f5;
  --color-secondary-foreground: #111111;
  --color-background: #ffffff;
  --color-foreground: #111111;
  --color-muted: #f0f0f0;
  --color-muted-foreground: #6b7280;
  --color-border: #e5e7eb;
  --color-destructive: #ef4444;

  /* Typography */
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', 'Cascadia Code', monospace;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  /* Spacing (4px base grid) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Z-index */
  --z-base: 0;
  --z-overlay: 100;
  --z-modal: 200;
  --z-toast: 300;
  --z-tooltip: 400;

  /* Breakpoints (use in @media queries) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
`;
}

function jsObjectTokens(): string {
  return `export const tokens = {
  color: {
    primary: '#0070f3',
    primaryForeground: '#ffffff',
    secondary: '#f5f5f5',
    secondaryForeground: '#111111',
    background: '#ffffff',
    foreground: '#111111',
    muted: '#f0f0f0',
    mutedForeground: '#6b7280',
    border: '#e5e7eb',
    destructive: '#ef4444',
  },
  font: {
    sans: "system-ui, -apple-system, sans-serif",
    mono: "'Fira Code', 'Cascadia Code', monospace",
  },
  text: {
    xs:   '0.75rem',
    sm:   '0.875rem',
    base: '1rem',
    lg:   '1.125rem',
    xl:   '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  space: {
    1:  '0.25rem',
    2:  '0.5rem',
    3:  '0.75rem',
    4:  '1rem',
    6:  '1.5rem',
    8:  '2rem',
    12: '3rem',
    16: '4rem',
  },
  radius: {
    sm:   '0.25rem',
    md:   '0.375rem',
    lg:   '0.5rem',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  zIndex: {
    base:    0,
    overlay: 100,
    modal:   200,
    toast:   300,
    tooltip: 400,
  },
  breakpoint: {
    sm:  '640px',
    md:  '768px',
    lg:  '1024px',
    xl:  '1280px',
  },
} as const;

export type Tokens = typeof tokens;
`;
}

function jsonTokens(): string {
  return JSON.stringify(
    {
      color: {
        primary: '#0070f3',
        primaryForeground: '#ffffff',
        secondary: '#f5f5f5',
        secondaryForeground: '#111111',
        background: '#ffffff',
        foreground: '#111111',
        muted: '#f0f0f0',
        mutedForeground: '#6b7280',
        border: '#e5e7eb',
        destructive: '#ef4444',
      },
      font: {
        sans: 'system-ui, -apple-system, sans-serif',
        mono: "'Fira Code', 'Cascadia Code', monospace",
      },
      text: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem' },
      space: { '1': '0.25rem', '2': '0.5rem', '3': '0.75rem', '4': '1rem', '6': '1.5rem', '8': '2rem', '12': '3rem', '16': '4rem' },
      radius: { sm: '0.25rem', md: '0.375rem', lg: '0.5rem', full: '9999px' },
      shadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      },
      zIndex: { base: 0, overlay: 100, modal: 200, toast: 300, tooltip: 400 },
      breakpoint: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    },
    null,
    2
  ) + '\n';
}

const tokenFileMap: Record<ProjectConfig['tokenFormat'], { path: string; content: () => string }> = {
  'css-vars':  { path: 'src/styles/tokens.css', content: cssVarsTokens },
  'js-object': { path: 'src/tokens.ts',          content: jsObjectTokens },
  'json':      { path: 'tokens.json',             content: jsonTokens },
};

export async function generateDesignTokens(config: ProjectConfig): Promise<void> {
  const preset = config.designPreset !== 'none' ? getPreset(config.designPreset) : undefined;
  const { path, content } = tokenFileMap[config.tokenFormat];
  const tokenContent = preset ? preset.tokens[config.tokenFormat] : content();
  const written = await writeFile(path, tokenContent);
  if (written) {
    logCreated(path);
  } else {
    logSkipped(path);
  }
}
