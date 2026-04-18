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
