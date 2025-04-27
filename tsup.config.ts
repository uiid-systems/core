import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/constants/index.ts",
    "src/styles/index.ts",
    "src/types/index.ts",
    "src/utils/index.ts",
    "src/styles/globals.css",
    "src/styles/tokens.css",
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
