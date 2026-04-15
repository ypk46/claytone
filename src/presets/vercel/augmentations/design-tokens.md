## Vercel Preset Constraints

- **No gradients**: `linear-gradient`, `radial-gradient`, and `conic-gradient` are banned
- **No raw hex values**: all colors must derive from the `--color-*` token set; introducing
  colors outside the token file requires an explicit design decision entry
- **Solid borders only**: use `--color-border` or `--color-border-strong` — no alpha-based
  border tricks or `box-shadow` substitutes for borders
- **Gray hierarchy via tokens**: use `--color-text-primary` → `--color-text-secondary` →
  `--color-text-tertiary` for text hierarchy — never use opacity on text to create hierarchy
- **Shadows for elevation only**: `--shadow-sm` for cards, `--shadow-md` for menus/dropdowns,
  `--shadow-lg` for modals — never use shadows as decorative borders or outlines
- **Accent color is reserved**: `--color-accent` (#0070F3) is for interactive affordances
  only — links, focus rings, active states, primary CTAs; never decorative
