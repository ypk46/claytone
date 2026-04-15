import { defineConfig } from "tsup";

export default defineConfig({
  entry: { cli: "src/cli.ts" },
  format: ["esm"],
  target: "node24",
  platform: "node",
  outDir: "dist",
  clean: true,
  splitting: false,
  sourcemap: true,
  banner: { js: "#!/usr/bin/env node" },
  async onSuccess() {
    const { cp } = await import("node:fs/promises");
    await cp("src/templates", "dist/templates", { recursive: true });
    await cp("src/presets", "dist/presets", {
      recursive: true,
      filter: (src) => !src.endsWith(".ts"),
    });
  },
});
