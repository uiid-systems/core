import { defineConfig, type VariantProps } from "cva";
import { twMerge } from "tailwind-merge";

export const { cva, cx, compose } = defineConfig({
  hooks: { onComplete: (className) => twMerge(className) },
});

export type { VariantProps };
