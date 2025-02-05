export const layoutStyles = (
  props: any,
  properties: any
): React.CSSProperties => {
  let styles: React.CSSProperties = {};

  Object.entries(props).map(([prop, value]) => {
    if (!value) return null;

    const propKey = prop as keyof typeof properties;
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
