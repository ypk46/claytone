import type { ProjectConfig } from "../../types/index.js";

const tokenFileMap: Record<ProjectConfig["tokenFormat"], string> = {
  "css-vars":
    "`src/styles/tokens.css` — use CSS custom property names (e.g. `var(--color-primary)`)",
  "js-object":
    "`src/tokens.ts` — import and reference by key (e.g. `tokens.color.primary`)",
  json: "`tokens.json` — load at runtime or via build step",
};

export function designTokensRule(config: ProjectConfig, augmentation?: string): string {
  const base = `# Design Token Rules

## Authority

Design tokens are the **only** permitted source of values for:

- Colors (background, foreground, border, fill)
- Typography (font-size, font-weight, line-height, font-family)
- Spacing (padding, margin, gap)
- Border radius
- Box shadow
- Z-index layers

## Token File

${tokenFileMap[config.tokenFormat]}

## Never Do

- Hardcode hex colors, RGB, or HSL values in component code
- Hardcode px/rem font sizes or spacing values
- Use Tailwind arbitrary values: \`text-[13px]\`, \`bg-[#fff]\`, \`p-[6px]\`
- Use inline \`style\` attributes with raw values
- Copy-paste token values — always reference by name

## Always Do

- Reference the token by its name or CSS variable
- If a required value is absent from the token set, **add it to the token file first**,
  then reference it — do not use a one-off raw value
- When generating or editing components, verify every value traces back to a token

## Adding New Tokens

1. Add the token to ${tokenFileMap[config.tokenFormat].split(" ")[0]}
2. Follow the existing naming convention for the category
3. Reference the new token in your component code
4. Note the addition in \`.claude/memory/design-decisions.md\` if it represents
   a new design decision
`;
  return augmentation ? `${base}\n${augmentation}` : base;
}
