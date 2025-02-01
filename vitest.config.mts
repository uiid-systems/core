import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    passWithNoTests: true,
    coverage: {
      include: ["{src,tests}/**/*"],
    },
  },
});
