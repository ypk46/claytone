# Component Naming Conventions

## File Naming

- **PascalCase** for all component files: `Button.tsx`, `CardHeader.tsx`
- **Barrel exports** via `index.ts` in each component directory
- **Test files** colocated: `Button.test.tsx`
- **Story files** colocated: `Button.stories.tsx`

## Component Naming Patterns

| Type      | Pattern             | Examples                     |
| --------- | ------------------- | ---------------------------- |
| Primitive | Single noun         | `Button`, `Input`, `Badge`   |
| Composite | Compound noun       | `CardHeader`, `NavMenu`      |
| Page      | `[Name]Page` suffix | `DashboardPage`, `LoginPage` |
| Layout    | `[Name]Layout`      | `AppLayout`, `SidebarLayout` |
| Hook      | `use[Name]`         | `useModal`, `useTokenValue`  |

## Props Interface Naming

- Always named `[ComponentName]Props`
- Exported from the component file alongside the component

```ts
// Correct
export interface ButtonProps { ... }
export function Button(props: ButtonProps) { ... }
```

## Variants

- Use a `variant` prop over conditional class logic
- Variant values are lowercase strings aligned with design token categories
- Define a `const variants = { ... } as const` object in the component file for
  exhaustive variant mapping — do not use switch statements

## Directory Structure

```
src/components/
├── Button/
│   ├── index.ts          ← barrel export
│   ├── Button.tsx
│   └── Button.test.tsx
├── Card/
│   ├── index.ts
│   ├── Card.tsx
│   ├── CardHeader.tsx
│   └── Card.test.tsx
```

## Never Do

- Mix casing styles within a category
- Name components after their implementation detail (e.g. `FlexRow`, `RedButton`)
- Export components directly from `src/components/index.ts` without a subdirectory
