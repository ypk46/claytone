# Claytone

A CLI that scaffolds a design engine for AI coding assistants. Run it in any project to generate a structured [Claude Code](https://claude.ai/code) configuration that teaches Claude how to work within your design system.

## What it generates

```
your-project/
├── CLAUDE.md                          # Project-level rules for Claude
├── .claude/
│   ├── rules/
│   │   ├── design-tokens.md           # Token authority and ban list
│   │   ├── component-naming.md        # Naming conventions
│   │   └── spacing-layout.md          # Spacing and layout constraints
│   ├── memory/
│   │   └── design-decisions.md        # Design decision log (optional)
│   └── hooks/
│       └── pre-tool-use.sh            # Pre-write validation hook (optional)
└── src/styles/tokens.css              # Design tokens (CSS custom properties)
```

All files are tailored to the design preset you select during setup.

## Install

```sh
npm install -g claytone
```

Or run directly with npx:

```sh
npx claytone init
```

## Usage

Navigate to your project root and run:

```sh
claytone init
```

You'll be prompted for:

- **Project name** — defaults to the current directory name
- **Design preset** — the design system to base your guardrails on (e.g. Notion)
- **Memory files** — whether to scaffold a design decisions log
- **Hooks** — whether to include a Claude Code pre-tool-use hook stub

To skip prompts and use defaults:

```sh
claytone init --yes
```

## Presets

Each preset encodes a real, tested design system as Claude Code guardrails — tokens, rules, and philosophy all in one.

| Preset     | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| **Notion** | Inter type, warm near-black palette, 4px grid, minimal decoration   |
| **Vercel** | Geist type, high-contrast monochrome, 8px grid, technical precision |

## Development

```sh
# Install dependencies
npm install

# Build
npm run build

# Build in watch mode
npm run dev

# Type check
npm run typecheck

# Test locally
npm link
claytone init
```

## Project structure

```
src/
├── cli.ts                    # Binary entry — Commander program root
├── commands/init.ts          # init command handler
├── prompts/                  # @clack/prompts interactive flow
├── generators/               # File writers (orchestrator + per-output generators)
├── templates/                # Markdown/shell template files
│   ├── claude-md.md          # CLAUDE.md template ({{projectName}}, {{presetSection}}, …)
│   ├── rules/                # Base rule files (static markdown)
│   ├── memory/               # Design decisions log template
│   └── hooks/                # Hook stub
├── presets/                  # One directory per preset (notion, vercel, …)
│   └── <name>/
│       ├── index.ts          # Assembles PresetDefinition from files
│       ├── tokens.css        # CSS custom properties
│       ├── claude-md-section.md
│       └── augmentations/    # Preset-specific rule additions
├── types/index.ts            # ProjectConfig and PresetDefinition interfaces
└── utils/                    # fs helpers, logger, interpolate, load-template
```

### Adding a preset

1. Create `src/presets/<name>/` with `tokens.css`, `claude-md-section.md`, and any `augmentations/*.md`
2. Create `src/presets/<name>/index.ts` that assembles a `PresetDefinition` using `loadTemplate()`
3. Register it in `src/presets/index.ts`
