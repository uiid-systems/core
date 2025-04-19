type StyleObject = Record<string, React.CSSProperties>;

/**
 * @deprecated prefer @uiid/style-props/toggleProps
 * */
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
