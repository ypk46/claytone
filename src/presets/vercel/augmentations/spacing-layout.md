## Vercel Preset Constraints

- **8px grid strictly enforced**: every spacing value must be a multiple of 8px —
  use only tokens from the `--space-*` scale; sub-8px values appear only in border-width
  and border-radius definitions, never as padding, margin, or gap values
- **Top-navigation layout is the standard**: for dashboards and apps, use a sticky top nav
  with full-width content below; sidebar layouts are reserved for settings or file-tree UIs
- **Content max-width**: general content areas cap at `--breakpoint-lg` (1200px) with
  horizontal padding from the spacing scale; prose content caps at 800px
- **Card-based structure**: group related content in bordered cards using `--color-border`
  and `--radius-md`; avoid borderless content blobs
- **No horizontal scroll**: layout must not introduce horizontal overflow at any breakpoint
