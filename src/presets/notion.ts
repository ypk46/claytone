import type { PresetDefinition } from "../types/index.js";

// Notion Design System — claytone preset
// Token values use px units to match Notion's actual CSS output.
// Notion ships its UI in px, not rem, and this preset stays faithful to that.

const cssVars = `:root {
  /* === Notion Design System — claytone preset ===
     Token values are in px to match Notion's actual CSS output. */

  /* Colors — near-monochrome with one accent */
  --color-text-primary: #37352F;
  --color-text-secondary: #787774;
  --color-text-tertiary: #ACABA8;
  --color-background: #FFFFFF;
  --color-background-secondary: #F7F7F5;
  --color-background-tertiary: #EFEFEF;
  --color-border: rgba(55, 53, 47, 0.09);
  --color-border-strong: rgba(55, 53, 47, 0.35);
  --color-accent: #2383E2;
  --color-accent-bg: #E7F3FB;
  --color-destructive: #E03E3E;
  --color-destructive-bg: #FBE4E4;
  --color-success: #0F7B6C;
  --color-success-bg: #DDEDEA;

  /* Typography — Inter only */
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'SFMono-Regular', 'Consolas', 'Roboto Mono', monospace;

  /* Type scale */
  --text-xs: 11px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-md: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-h3: 20px;
  --text-h2: 30px;
  --text-h1: 40px;

  /* Line heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;

  /* Font weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing — 4px base grid, px units */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Border radius — restrained */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-full: 999px;

  /* Shadows — soft and layered */
  --shadow-border: rgba(55, 53, 47, 0.09) 0px 0px 0px 1px;
  --shadow-sm: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  --shadow-md: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.2) 0px 5px 10px;

  /* Z-index layers */
  --z-base: 0;
  --z-overlay: 100;
  --z-modal: 200;
  --z-toast: 300;
  --z-tooltip: 400;

  /* Breakpoints */
  --breakpoint-sm: 768px;
  --breakpoint-md: 1024px;
  --breakpoint-lg: 1280px;
}
`;

const jsObject = `// Notion Design System — claytone preset
// Token values are in px to match Notion's actual CSS output.
export const tokens = {
  color: {
    textPrimary:            '#37352F',
    textSecondary:          '#787774',
    textTertiary:           '#ACABA8',
    background:             '#FFFFFF',
    backgroundSecondary:    '#F7F7F5',
    backgroundTertiary:     '#EFEFEF',
    border:                 'rgba(55, 53, 47, 0.09)',
    borderStrong:           'rgba(55, 53, 47, 0.35)',
    accent:                 '#2383E2',
    accentBg:               '#E7F3FB',
    destructive:            '#E03E3E',
    destructiveBg:          '#FBE4E4',
    success:                '#0F7B6C',
    successBg:              '#DDEDEA',
  },
  font: {
    sans: "'Inter', sans-serif",
    mono: "'SFMono-Regular', 'Consolas', 'Roboto Mono', monospace",
  },
  text: {
    xs:   '11px',
    sm:   '12px',
    base: '14px',
    md:   '16px',
    lg:   '18px',
    xl:   '20px',
    h3:   '20px',
    h2:   '30px',
    h1:   '40px',
  },
  leading: {
    tight:   1.2,
    normal:  1.5,
    relaxed: 1.7,
  },
  fontWeight: {
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
  },
  space: {
    1:  '4px',
    2:  '8px',
    3:  '12px',
    4:  '16px',
    5:  '20px',
    6:  '24px',
    8:  '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },
  radius: {
    sm:   '3px',
    md:   '6px',
    lg:   '8px',
    full: '999px',
  },
  shadow: {
    border: 'rgba(55, 53, 47, 0.09) 0px 0px 0px 1px',
    sm:     'rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px',
    md:     'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.2) 0px 5px 10px',
  },
  zIndex: {
    base:    0,
    overlay: 100,
    modal:   200,
    toast:   300,
    tooltip: 400,
  },
  breakpoint: {
    sm:  '768px',
    md:  '1024px',
    lg:  '1280px',
  },
} as const;

export type Tokens = typeof tokens;
`;

const json =
  JSON.stringify(
    {
      _preset: "notion",
      _note: "Token values are in px to match Notion's actual CSS output.",
      color: {
        textPrimary: "#37352F",
        textSecondary: "#787774",
        textTertiary: "#ACABA8",
        background: "#FFFFFF",
        backgroundSecondary: "#F7F7F5",
        backgroundTertiary: "#EFEFEF",
        border: "rgba(55, 53, 47, 0.09)",
        borderStrong: "rgba(55, 53, 47, 0.35)",
        accent: "#2383E2",
        accentBg: "#E7F3FB",
        destructive: "#E03E3E",
        destructiveBg: "#FBE4E4",
        success: "#0F7B6C",
        successBg: "#DDEDEA",
      },
      font: {
        sans: "'Inter', sans-serif",
        mono: "'SFMono-Regular', 'Consolas', 'Roboto Mono', monospace",
      },
      text: {
        xs: "11px",
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        h3: "20px",
        h2: "30px",
        h1: "40px",
      },
      leading: { tight: 1.2, normal: 1.5, relaxed: 1.7 },
      fontWeight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
      space: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
      },
      radius: { sm: "3px", md: "6px", lg: "8px", full: "999px" },
      shadow: {
        border: "rgba(55, 53, 47, 0.09) 0px 0px 0px 1px",
        sm: "rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px",
        md: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.2) 0px 5px 10px",
      },
      zIndex: { base: 0, overlay: 100, modal: 200, toast: 300, tooltip: 400 },
      breakpoint: { sm: "768px", md: "1024px", lg: "1280px" },
    },
    null,
    2,
  ) + "\n";

export const notionPreset: PresetDefinition = {
  id: "notion",
  label: "Notion",
  description:
    "Notion's design language — Inter type, warm near-black palette, 4px grid, minimal decoration",

  defaultDesignSystemType: "custom",

  tokens: {
    "css-vars": cssVars,
    "js-object": jsObject,
    json,
  },

  claudeMdSection: `## Notion Design Preset

This project uses the **Notion design preset** — a faithful encoding of Notion's
design language into Claude Code guardrails.

### Design Philosophy

Notion's interface is built on restraint, information density, and calm. Every
visual decision should serve the content, never compete with it. When in doubt,
subtract — remove color, reduce radius, eliminate shadow.

### Block-Based Thinking

Every piece of content is a block. UI components should reflect this:

- Prefer content-driven layout over decorative structure
- Sidebar navigation is a content outline, not a chrome element
- Hover states reveal affordances; they do not add decoration
- Inline editing is the default; modal-heavy flows are a last resort

### Typography Contract

Inter is the only permitted typeface. No system font used as a visual choice —
only as a loading fallback in the \`--font-sans\` stack. Use the defined type scale;
do not interpolate between steps.

### Color Discipline

The entire UI is expressible in \`#37352F\` and \`#FFFFFF\` with three levels of
opacity for hierarchy. The accent color (\`#2383E2\`) is reserved for interactive
affordances (links, selection handles, focus rings). No gradients. No additional
brand colors introduced outside the token file.`,

  ruleAugmentations: {
    "design-tokens": `## Notion Preset Constraints

- **No gradients**: \`linear-gradient\`, \`radial-gradient\`, and \`conic-gradient\` are banned
- **No vibrant colors**: all colors must derive from the \`--color-*\` token set; introducing
  colors outside the token file requires an explicit design decision entry
- **Alpha-based borders**: prefer \`--color-border\` (rgba) over solid-color borders
- **Text hierarchy via tokens**: use \`--color-text-primary\` → \`--color-text-secondary\` →
  \`--color-text-tertiary\` for hierarchy — never use opacity on text to create hierarchy
- **Shadows for elevation only**: use \`--shadow-border\` for containment,
  \`--shadow-sm\` only for floating elements (menus, tooltips, modals)
- **Accent color is reserved**: \`--color-accent\` (#2383E2) is for interactive affordances
  only — links, selection handles, focus rings; never decorative
`,

    "spacing-layout": `## Notion Preset Constraints

- **4px grid strictly enforced**: every spacing value must be a multiple of 4px —
  use only tokens from the \`--space-*\` scale; \`--space-1\` (4px) is the minimum unit
- **No sub-4px layout spacing**: 1px/2px/3px appear only in border-width and border-radius
  definitions, never as padding, margin, or gap values
- **Sidebar layout pattern**: persistent left sidebar + flexible main content area;
  avoid top-navigation-only layouts for app-like interfaces
- **Content max-width**: prose/page content should not exceed 900px; full-bleed content
  uses the viewport width with horizontal padding drawn from the spacing scale
- **No horizontal scroll**: layout must not introduce horizontal overflow at any breakpoint
`,
  },
};
