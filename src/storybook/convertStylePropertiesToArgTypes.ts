import { ArgTypes } from "@storybook/types";
import type { StyleProp } from "../styleProps";

export const convertStylePropertiesToArgTypes = (
  properties: Record<string, StyleProp>,
  category?: string
): ArgTypes => {
  return Object.entries(properties).reduce((acc, [key, prop]) => {
    acc![key] = {
      options: [...prop.values],
      control: "select",
      table: { category },
    };
    return acc;
  }, {} as ArgTypes);
};
