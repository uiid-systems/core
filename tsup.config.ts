import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/globals.css"],
  treeshake: false,
  sourcemap: "inline",
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ["esm"],
  loader: { ".css": "copy" },
  external: ["cva", "tailwind-merge"],
  injectStyle: false,
});
