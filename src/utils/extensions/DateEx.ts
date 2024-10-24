export const DateEx = {
  isInvalidDate: (date: Date) => Number.isNaN(date.getTime()),
} as const;
