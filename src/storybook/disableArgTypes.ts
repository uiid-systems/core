export type DisabledArgTypes = {
  [key: string]: {
    table: {
      disable: boolean;
    };
  };
};

export const disableArgTypes = <T>(
  ...keys: Array<keyof T>
): DisabledArgTypes => {
  return keys.reduce((acc, key) => {
    acc[key as string] = { table: { disable: true } };
    return acc;
  }, {} as DisabledArgTypes);
};
