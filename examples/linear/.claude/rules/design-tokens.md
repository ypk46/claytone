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

## Linear Preset Constraints

- **No raw hex values**: all colors must derive from the `--color-*` token set; introducing
  colors outside the token file requires an explicit design decision entry
- **Alpha-based borders on dark surfaces**: use `--color-border` (rgba) or
  `--color-border-strong` (rgba) — solid-color borders wash out on dark backgrounds
- **Text hierarchy via tokens only**: use `--color-text-primary` → `--color-text-secondary` →
  `--color-text-tertiary`; never use opacity on text elements to create hierarchy
- **Accent color is reserved**: `--color-accent` (#5e6ad2) is for interactive affordances only —
  links, focus rings, active nav items, primary CTAs; never for decorative purposes
- **Gradient is scoped**: `--gradient-accent` is permitted only on primary action buttons and
  explicit accent-coloured UI elements; forbidden on layout, backgrounds, and decorative surfaces
- **Shadows for elevation only**: `--shadow-sm` for slightly raised cards, `--shadow-md` for
  dropdowns and menus, `--shadow-lg` for modals and command palette; never decorative
- **Focus ring via shadow-accent**: interactive elements must use `--shadow-accent` as their
  focus indicator — do not use `outline` with a raw color
- **No light-mode overrides**: this preset has no light theme; do not add `@media (prefers-color-scheme: light)` blocks
