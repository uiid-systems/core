export type StyleProp = {
  property: keyof React.CSSProperties;
  values: readonly (string | number)[];
};

export type StyleProps<P extends Record<string, StyleProp>> = {
  [K in keyof P]?: P[K]["values"][number];
};

export const styleProps = <P extends Record<string, StyleProp>>(
  props: StyleProps<P>,
  properties: P
): React.CSSProperties => {
  let styles: React.CSSProperties = {};

  Object.entries(props).map(([prop, value]) => {
    if (!value) return null;

    const propKey = prop as keyof P;
    const property = properties[propKey]?.property;

    if (typeof value === "string") {
      styles = { ...styles, ...{ [property]: value } };
    }

    if (typeof value === "number") {
      const style = `calc(var(--spacing)*${value})`;
      styles = { ...styles, ...{ [property]: style } };
    }
  });

  return styles;
};
