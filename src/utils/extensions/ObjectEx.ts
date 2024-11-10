export const ObjectEx = {
  omitKey: <T extends object, K extends keyof T>(obj: T, key: K) => {
    const { [key]: _, ...rest } = obj;

    return rest;
  },

  omitKeys: <T extends object, K extends keyof T>(
    obj: T,
    keys: K[],
  ): Omit<T, K> => {
    const copyObj = { ...obj };
    let result = copyObj;
    keys.forEach((key) => {
      result = ObjectEx.omitKey(result, key) as T;
    });

    return result;
  },
} as const;
