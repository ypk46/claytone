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
