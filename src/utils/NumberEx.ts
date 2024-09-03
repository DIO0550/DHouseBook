export const NumberEx = {
  isNumericString: (target: string) => /^-?\d+$/.test(target),
} as const;
