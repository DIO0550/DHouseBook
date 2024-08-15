export const HouseBookFilterOperation = {
  And: 'And',
  Or: 'Or',
} as const;
export type HouseBookFilterOperation =
  (typeof HouseBookFilterOperation)[keyof typeof HouseBookFilterOperation];
export const HouseBookFilterOperationDefault = HouseBookFilterOperation.And;
