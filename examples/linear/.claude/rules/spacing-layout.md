# Spacing and Layout Rules

## Spacing

All spacing values **must** derive from the design token spacing scale.

- Never compose spacing from arithmetic (e.g. `margin: 8px` is banned — use the token)
- Never mix token spacing with raw values (e.g. `gap: calc(var(--space-2) + 3px)`)
- Padding and margin always reference a scale step, never an arbitrary value

## Layout Primitives

| Use case             | Approach                   |
| -------------------- | -------------------------- |
| One-dimensional flow | `display: flex`            |
| Two-dimensional grid | `display: grid`            |
| Overlay / modal      | `position: absolute/fixed` |
| Sticky header/footer | `position: sticky`         |

- Avoid `position: absolute` outside of overlays, tooltips, and dropdowns
- Avoid `position: relative` as a layout primitive — use flex/grid instead

## Breakpoints

- Use **only** breakpoints defined in the design system token file
- Never introduce arbitrary breakpoints (e.g. `@media (max-width: 823px)`)
- Mobile-first: write base styles for small screens, add breakpoints upward

## Max Widths and Containers

- Page-level containers: use the design system's container token
- Content (prose): use the design system's prose width token
- Never hardcode `max-width` values — always reference a token

## Z-Index

- Z-index values come from the design system's z-index scale
- Never use arbitrary z-index values (e.g. `z-index: 9999`)
- Common layers: base → overlay → modal → toast → tooltip

## Never Do

- Use `margin: auto` for centering — prefer flex/grid `justify-content: center`
- Mix spacing scales (combining 4px and 8px base grids)
- Use negative margins for layout — use flex `gap` or `grid-gap` instead

## Linear Preset Constraints

- **4px grid strictly enforced**: every spacing value must be a multiple of 4px —
  use only tokens from the `--space-*` scale; `--space-1` (4px) is the minimum unit
- **No sub-4px layout spacing**: 1px/2px/3px appear only in border-width and border-radius
  definitions, never as padding, margin, or gap values
- **Left sidebar + main content is the standard layout**: persistent sidebar (220–260px wide)
  with a flexible main content area; avoid top-navigation-only layouts for app-like interfaces
- **Command palette overlay**: centred fixed modal with `backdrop-filter: blur(8px)`,
  max-width 560px, using `--shadow-lg` — this is a required pattern for any `⌘K` surface
- **Content max-width**: list and table views cap at 1100px; issue detail and prose content
  caps at 720px; both use horizontal padding drawn from the spacing scale
- **No horizontal scroll**: layout must not introduce horizontal overflow at any breakpoint
- **Sidebar collapses on mobile**: below `--breakpoint-sm` (640px) the sidebar becomes a
  bottom sheet or drawer; the main content fills the full viewport width
