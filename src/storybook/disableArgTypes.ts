export const disableArgTypes = (...properties: string[]) => {
  return properties.map((property, i) => ({
    [property]: { table: { disable: true } },
  }));
};
