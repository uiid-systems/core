export const booleanProps = <T extends readonly string[]>(
  props: Record<string, any>,
  booleanProperties: T
) => {
  const classes = booleanProperties
    .filter((key) => props[key] === true)
    .join(" ");

  return classes;
};
