## Vercel Design Preset

This project uses the **Vercel design preset** — a faithful encoding of Vercel's
design language into Claude Code guardrails.

### Design Philosophy

Vercel's interface is built on technical precision, high contrast, and zero
decoration. Every visual element earns its place by communicating function. When
in doubt, remove it — the design should feel faster and cleaner as complexity
grows, not heavier.

### Typography Contract

Geist is the only permitted typeface. It is Vercel's open-source type family,
optimized for developer interfaces and code-adjacent UIs. Use the defined type
scale; do not interpolate between steps. Geist Mono is for all code, terminal
output, file paths, and data values — never use sans-serif for these.

### Color Discipline

The palette is anchored at pure black (`#000000`) and white (`#ffffff`), with a
stepped gray scale for hierarchy. No raw hex values outside the token file. The
accent color (`#0070F3`) is reserved exclusively for interactive affordances:
links, focus rings, active states, and primary actions. No gradients. No
additional brand colors introduced without a token entry.

### Layout Pattern

Dashboards and apps use a top-navigation layout with full-width content areas.
Content is organized into cards with `--color-border` separators. Full-bleed
section alternation (white / `--color-background-secondary`) creates rhythm
without decorative elements. Sidebar layouts are acceptable for settings or
file-tree UIs, but should not be the default.
