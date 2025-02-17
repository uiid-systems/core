type StyleObject = Record<string, React.CSSProperties>;

export const booleanProps = (
  props: Record<string, any>,
  styleObjects: StyleObject
) => {
  return Object.entries(props)
    .filter(([key, value]) => value === true && key in styleObjects)
    .reduce(
      (acc, [key]) => ({
        ...acc,
        ...styleObjects[key],
      }),
      {} as React.CSSProperties
    );
};
