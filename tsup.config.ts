import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/constants/index.ts",
    "src/properties/index.ts",
    "src/storybook/index.ts",
    "src/globals.css",
  ],
  treeshake: false,
  sourcemap: "inline",
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ["esm"],
  loader: { ".css": "copy" },
  injectStyle: false,
});
