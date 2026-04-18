## Linear Design Preset

This project uses the **Linear design preset** — a faithful encoding of Linear's
design language into Claude Code guardrails.

### Design Philosophy

Linear's interface is built on speed, density, and low visual noise. The dark
palette eliminates eye strain during long sessions; the indigo-purple accent
provides a single, intentional point of focus. Every visual decision should
reduce friction, not add personality. The UI should feel invisible — a tool
that gets out of the way.

### Dark-First Contract

This preset does not provide a light mode. All surfaces, borders, and shadows
are calibrated for dark backgrounds. Do not attempt to invert tokens to produce
a light theme without a dedicated token set.

### Sidebar-Driven Navigation

Linear's core navigation is a persistent left sidebar: teams and projects in the
top section, views and settings in the bottom. The main content area is a
list, board, or detail view depending on context. Avoid top-navigation-only
layouts for app-like interfaces.

### Command Palette Pattern

The command palette (`⌘K`) is a first-class navigation surface. Any action
reachable via sidebar or toolbar must also be reachable via the command palette.
Represent it as a centred modal overlay with `backdrop-filter: blur(8px)` and
`--shadow-lg`.

### Typography Contract

Inter is the only permitted typeface. Use the defined type scale; do not
interpolate between steps. `--font-mono` is for issue identifiers (e.g. LIN-123),
code snippets, commit hashes, and branch names — never use sans-serif for these.

### Color Discipline

All surfaces derive from `--color-background`, `--color-background-secondary`,
and `--color-background-tertiary`. No raw hex values outside the token file.
The accent (`#5e6ad2`) is reserved for interactive affordances: links, focus rings,
active sidebar items, and primary CTAs. `--gradient-accent` is permitted only on
primary buttons and accent-coloured elements — never on layout or decorative surfaces.
