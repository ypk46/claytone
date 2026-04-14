# claytone

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
└── src/styles/tokens.css              # Design token starter file (format varies)
```

All files are tailored to the design system and token format you select during setup.

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
- **Design system type** — Custom, shadcn/ui, Radix UI, Material UI, or Tailwind
- **Token format** — CSS custom properties, JS/TS object, or JSON
- **Memory files** — whether to scaffold a design decisions log
- **Hooks** — whether to include a Claude Code pre-tool-use hook stub

To skip prompts and use defaults:

```sh
claytone init --yes
```

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
├── cli.ts                 # Binary entry — Commander program root
├── commands/init.ts       # init command handler
├── prompts/               # @clack/prompts interactive flow
├── generators/            # File writers (orchestrator + per-output generators)
├── templates/             # Typed TypeScript template functions
├── types/index.ts         # ProjectConfig interface
└── utils/                 # fs helpers, logger
```
