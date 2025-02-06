export const booleanProps = (props: { [key: string]: boolean | undefined }) => {
  return Object.entries(props)
    .filter(([_, value]) => value === true)
    .map(([key]) => key)
    .join(" ");
};
