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
