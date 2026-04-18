# Release Process

Releases are fully automated via [Changesets](https://github.com/changesets/changesets) and GitHub Actions. The flow is:

1. Developer adds a changeset alongside their work
2. CI opens (or updates) a "Version Packages" PR
3. Merging that PR triggers an npm publish

---

## Step 1 — Add a changeset

After making changes, run:

```bash
npx changeset
```

Follow the interactive prompt:
- Select the bump type — `patch` (bug fix), `minor` (new feature), `major` (breaking change)
- Write a one-line summary of what changed (this becomes the changelog entry)

Commit the generated `.changeset/*.md` file alongside your code changes.

## Step 2 — Open a pull request

Push your branch and open a PR against `main` as normal. CI runs `typecheck` and `build` on every push.

## Step 3 — Merge to main

Once approved, merge your PR. The Release workflow on `main` detects the new changeset and automatically opens (or updates) a **"Version Packages"** PR. That PR:

- Bumps the version in `package.json`
- Updates `CHANGELOG.md`
- Deletes the consumed `.changeset/*.md` files

## Step 4 — Merge the Version Packages PR

Review the version bump and changelog, then merge. The Release workflow detects the `Version Packages` commit message and runs:

```bash
npm run release  # → npm run build && npm publish --provenance --access public
```

The package is published to npm with provenance attestation.

---

## Hotfixes

For urgent fixes, follow the same process — add a changeset, merge to `main`, then immediately merge the generated Version Packages PR.

## Checking the current version

```bash
npm info claytone version
```
