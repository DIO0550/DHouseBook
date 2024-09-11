export const NumberEx = {
  isNumericString: (target: string) => /^([1-9]\d*|0)$/.test(target),
} as const;
