import { atom } from 'recoil';

// 名前フィルターの条件
export const HouseBookFilterNameCondition = {
  NotInclude: 'NotInclude',
  Include: 'Include',
} as const;
export type HouseBookFilterNameCondition =
  (typeof HouseBookFilterNameCondition)[keyof typeof HouseBookFilterNameCondition];
export type HouseBookFilterNameValue = string;

export type HouseBookFillterName = {
  value: HouseBookFilterNameValue;
  condition: HouseBookFilterNameCondition;
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
  value: HouseBookFilterPriceValue;
  condition: HouseBookFilterPriceCondition;
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
  value: HouseBookFilterTypeValue;
  condition: HouseBookFilterTypeCondition;
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
  value: HouseBookFilterPucrchaseDateValue;
  condition: HouseBookFilterPucrchaseDateCondition;
};

export type HouseBookFilter = {
  name: HouseBookFillterName | undefined;
  price: HouseBookFilterPrice | undefined;
  type: HouseBookFillterType | undefined;
  purchaseDate: HouseBookFilterPucrchaseDate | undefined;
};

export const houseBookFilterState = atom<HouseBookFilter>({
  key: 'houseBookFilter',
  default: undefined,
});
