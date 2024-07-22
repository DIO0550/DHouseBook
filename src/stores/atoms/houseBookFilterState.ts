import { atom } from 'recoil';

export const HouseBookFilterOperation = {
  Or: 'Or',
  And: 'And',
} as const;
export type HouseBookFilterOperation =
  (typeof HouseBookFilterOperation)[keyof typeof HouseBookFilterOperation];

export const HouseBookFilterCategory = {
  Name: 'Name',
  Price: 'Price',
  Type: 'Type',
  PurchaseDate: 'PurchaseDate',
} as const;

// 名前フィルターの条件
export const HouseBookFilterNameCondition = {
  NotInclude: 'NotInclude',
  Include: 'Include',
} as const;
export type HouseBookFilterNameCondition =
  (typeof HouseBookFilterNameCondition)[keyof typeof HouseBookFilterNameCondition];
export type HouseBookFilterNameValue = string;

export type HouseBookFilterName = {
  type: typeof HouseBookFilterCategory.Name;
  value: HouseBookFilterNameValue;
  condition: HouseBookFilterNameCondition;
  operation: HouseBookFilterOperation | undefined;
};

// 値段フィルターの条件
export const HouseBookFilterPriceCondition = {
  // より大きい
  GreaterThan: 'GreaterThan',
  // 以上
  GreaterThanOrEqual: 'GreaterThanOrEqual',
  // 未満
  LessThan: 'LessThan',
  // 以下
  LessThanOrEqual: 'LessThanOrEqual',
} as const;
export type HouseBookFilterPriceCondition =
  (typeof HouseBookFilterPriceCondition)[keyof typeof HouseBookFilterPriceCondition];

export type HouseBookFilterPriceValue = number;
export type HouseBookFilterPrice = {
  type: typeof HouseBookFilterCategory.Price;
  value: HouseBookFilterPriceValue;
  condition: HouseBookFilterPriceCondition;
  operation: HouseBookFilterOperation | undefined;
};

// 種類フィルターの条件
export const HouseBookFilterTypeCondition = {
  NotInclude: 'NotInclude',
  Include: 'Include',
} as const;
export type HouseBookFilterTypeCondition =
  (typeof HouseBookFilterTypeCondition)[keyof typeof HouseBookFilterNameCondition];
export type HouseBookFilterTypeValue = string;

export type HouseBookFillterType = {
  type: typeof HouseBookFilterCategory.Type;
  value: HouseBookFilterTypeValue;
  condition: HouseBookFilterTypeCondition;
  operation: HouseBookFilterOperation | undefined;
};

// 購入日フィルターの条件
export const HouseBookFilterPucrchaseDateCondition = {
  // より大きい
  GreaterThan: 'GreaterThan',
  // 以上
  GreaterThanOrEqual: 'GreaterThanOrEqual',
  // 未満
  LessThan: 'LessThan',
  // 以下
  LessThanOrEqual: 'LessThanOrEqual',
} as const;
export type HouseBookFilterPucrchaseDateCondition =
  (typeof HouseBookFilterPucrchaseDateCondition)[keyof typeof HouseBookFilterPucrchaseDateCondition];

export type HouseBookFilterPucrchaseDateValue = string;
export type HouseBookFilterPucrchaseDate = {
  type: typeof HouseBookFilterCategory.PurchaseDate;
  value: HouseBookFilterPucrchaseDateValue;
  condition: HouseBookFilterPucrchaseDateCondition;
  operation: HouseBookFilterOperation | undefined;
};

export type HouseBookFilter =
  | HouseBookFilterName
  | HouseBookFilterPrice
  | HouseBookFillterType
  | HouseBookFilterPucrchaseDate;

export const houseBookFilterState = atom<HouseBookFilter[] | undefined>({
  key: 'houseBookFilter',
  default: undefined,
});
