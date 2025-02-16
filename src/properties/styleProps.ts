export type StyleProp<K extends keyof React.CSSProperties> = {
  property: K;
  values: Array<React.CSSProperties[K] | number>;
  scale?: {
    variable: `--${string}`;
    unit: "px" | "em" | "rem" | "dvh" | "dvw" | "%";
  };
};

export type StyleProps<P extends Record<string, StyleProp<any>>> = {
  [K in keyof P]?: P[K]["values"][number];
};

/**
 * Converts style props to React.CSSProperties
 * Handles both direct CSS values and spacing multipliers
 */
export const styleProps = <P extends Record<string, StyleProp<any>>>(
  props: StyleProps<P>,
  properties: P
): React.CSSProperties => {
  const styles: React.CSSProperties = {};

  Object.entries(props).forEach(([prop, value]) => {
    if (value === undefined || value === null) return;

    const propKey = prop as keyof P;
    const propertyConfig = properties[propKey];
    const property = propertyConfig?.property;

    const { scale } = propertyConfig;

    if (!propertyConfig) return;

    if (scale) {
      if (typeof value === "number") {
        styles[property as keyof React.CSSProperties] = `calc(var(${
          scale.variable
        })*${value + scale.unit})` as any;
      }
    } else {
      styles[property as keyof React.CSSProperties] = value as any;
    }
  });

  return styles;
};
