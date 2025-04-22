import { defineConfig, type VariantProps } from "cva";
import { twMerge } from "tailwind-merge";

const config = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});

export const cva = config.cva;
export const compose = config.compose;

export function cx(...args: Parameters<typeof config.cx>): string | undefined {
  const merged = config.cx(...args);
  return merged.trim() ? merged : undefined;
}

export type { VariantProps };
