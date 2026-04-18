# Design Token Rules

## Authority

Design tokens are the **only** permitted source of values for:

- Colors (background, foreground, border, fill)
- Typography (font-size, font-weight, line-height, font-family)
- Spacing (padding, margin, gap)
- Border radius
- Box shadow
- Z-index layers

## Token File

`src/styles/tokens.css` — use CSS custom property names (e.g. `var(--color-primary)`)

## Never Do

- Hardcode hex colors, RGB, or HSL values in component code
- Hardcode px/rem font sizes or spacing values
- Use Tailwind arbitrary values: `text-[13px]`, `bg-[#fff]`, `p-[6px]`
- Use inline `style` attributes with raw values
- Copy-paste token values — always reference by name

## Always Do

- Reference the token by its CSS variable name
- If a required value is absent from the token set, **add it to `src/styles/tokens.css` first**,
  then reference it — do not use a one-off raw value
- When generating or editing components, verify every value traces back to a token

## Adding New Tokens

1. Add the token to `src/styles/tokens.css`
2. Follow the existing naming convention for the category
3. Reference the new token in your component code
4. Note the addition in `.claude/memory/design-decisions.md` if it represents
   a new design decision

## Notion Preset Constraints

- **No gradients**: `linear-gradient`, `radial-gradient`, and `conic-gradient` are banned
- **No vibrant colors**: all colors must derive from the `--color-*` token set; introducing
  colors outside the token file requires an explicit design decision entry
- **Alpha-based borders**: prefer `--color-border` (rgba) over solid-color borders
- **Text hierarchy via tokens**: use `--color-text-primary` → `--color-text-secondary` →
  `--color-text-tertiary` for hierarchy — never use opacity on text to create hierarchy
- **Shadows for elevation only**: use `--shadow-border` for containment,
  `--shadow-sm` only for floating elements (menus, tooltips, modals)
- **Accent color is reserved**: `--color-accent` (#2383E2) is for interactive affordances
  only — links, selection handles, focus rings; never decorative
