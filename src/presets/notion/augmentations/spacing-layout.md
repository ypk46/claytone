## Notion Preset Constraints

- **4px grid strictly enforced**: every spacing value must be a multiple of 4px —
  use only tokens from the `--space-*` scale; `--space-1` (4px) is the minimum unit
- **No sub-4px layout spacing**: 1px/2px/3px appear only in border-width and border-radius
  definitions, never as padding, margin, or gap values
- **Sidebar layout pattern**: persistent left sidebar + flexible main content area;
  avoid top-navigation-only layouts for app-like interfaces
- **Content max-width**: prose/page content should not exceed 900px; full-bleed content
  uses the viewport width with horizontal padding drawn from the spacing scale
- **No horizontal scroll**: layout must not introduce horizontal overflow at any breakpoint
