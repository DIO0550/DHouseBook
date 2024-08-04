import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export const HouseBookFilterOperation = {
  And: 'And',
  Or: 'Or',
} as const;
export type HouseBookFilterOperation =
  (typeof HouseBookFilterOperation)[keyof typeof HouseBookFilterOperation];
export const HouseBookFilterOperationDefault = HouseBookFilterOperation.And;

export const HouseBookFilterCategory = {
  Name: 'Name',
  Price: 'Price',
  Type: 'Type',
  PurchaseDate: 'PurchaseDate',
} as const;
export type HouseBookFilterCategory =
  (typeof HouseBookFilterCategory)[keyof typeof HouseBookFilterCategory];

// 名前フィルターの条件
export const HouseBookFilterNameCondition = {
  NotInclude: 'NotInclude',
  Include: 'Include',
} as const;
export type HouseBookFilterNameCondition =
  (typeof HouseBookFilterNameCondition)[keyof typeof HouseBookFilterNameCondition];
export type HouseBookFilterNameValue = string;

export type HouseBookFilterName = {
  category: typeof HouseBookFilterCategory.Name;
  value: HouseBookFilterNameValue;
  condition: HouseBookFilterNameCondition;
  operation: HouseBookFilterOperation | undefined;
};
export const HouseBookFilterNameDefault = {
  Value: '',
  Condition: HouseBookFilterNameCondition.Include,
} as const;

const HouseBookFilterName = {
  init: (): HouseBookFilterName => ({
    category: HouseBookFilterCategory.Name,
    value: HouseBookFilterNameDefault.Value,
    condition: HouseBookFilterNameDefault.Condition,
    operation: undefined,
  }),
} as const;

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
  category: typeof HouseBookFilterCategory.Price;
  value: HouseBookFilterPriceValue;
  condition: HouseBookFilterPriceCondition;
  operation: HouseBookFilterOperation | undefined;
};
export const HouseBookFilterPriceDefault = {
  Value: 0,
  Condition: HouseBookFilterPriceCondition.GreaterThan,
} as const;
const HouseBookFilterPrice = {
  init: (): HouseBookFilterPrice => ({
    category: HouseBookFilterCategory.Price,
    value: HouseBookFilterPriceDefault.Value,
    condition: HouseBookFilterPriceDefault.Condition,
    operation: undefined,
  }),
} as const;

// 種類フィルターの条件
export const HouseBookFilterTypeCondition = {
  NotInclude: 'NotInclude',
  Include: 'Include',
} as const;
export type HouseBookFilterTypeCondition =
  (typeof HouseBookFilterTypeCondition)[keyof typeof HouseBookFilterNameCondition];
export type HouseBookFilterTypeValue = string;

export type HouseBookFilterType = {
  category: typeof HouseBookFilterCategory.Type;
  value: HouseBookFilterTypeValue;
  condition: HouseBookFilterTypeCondition;
  operation: HouseBookFilterOperation | undefined;
};
export const HouseBookFilterTypeDefault = {
  Value: '',
  Condition: HouseBookFilterTypeCondition.Include,
} as const;

const HouseBookFilterType = {
  init: (): HouseBookFilterType => ({
    category: HouseBookFilterCategory.Type,
    value: HouseBookFilterTypeDefault.Value,
    condition: HouseBookFilterTypeDefault.Condition,
    operation: undefined,
  }),
} as const;

// 購入日フィルターの条件
export const HouseBookFilterPurchaseDateCondition = {
  // より大きい
  GreaterThan: 'GreaterThan',
  // 以上
  GreaterThanOrEqual: 'GreaterThanOrEqual',
  // 未満
  LessThan: 'LessThan',
  // 以下
  LessThanOrEqual: 'LessThanOrEqual',
} as const;
export type HouseBookFilterPurchaseDateCondition =
  (typeof HouseBookFilterPurchaseDateCondition)[keyof typeof HouseBookFilterPurchaseDateCondition];

export type HouseBookFilterPurchaseDateValue = string;
export type HouseBookFilterPurchaseDate = {
  category: typeof HouseBookFilterCategory.PurchaseDate;
  value: HouseBookFilterPurchaseDateValue;
  condition: HouseBookFilterPurchaseDateCondition;
  operation: HouseBookFilterOperation | undefined;
};
export const HouseBookFilterPurchaseDateDefault = {
  Value: '',
  Condition: HouseBookFilterPurchaseDateCondition.GreaterThan,
} as const;
const HouseBookFilterPurchaseDate = {
  init: (): HouseBookFilterPurchaseDate => ({
    category: HouseBookFilterCategory.PurchaseDate,
    value: HouseBookFilterPurchaseDateDefault.Value,
    condition: HouseBookFilterPurchaseDateDefault.Condition,
    operation: undefined,
  }),
} as const;

export type HouseBookFilter = {
  id: string;
} & (
  | HouseBookFilterName
  | HouseBookFilterPrice
  | HouseBookFilterType
  | HouseBookFilterPurchaseDate
);

export const HouseBookFilter = {
  initWithCategory: (category: HouseBookFilterCategory): HouseBookFilter => {
    const id = uuidv4();
    switch (category) {
      case HouseBookFilterCategory.Name:
        return {
          id,
          ...HouseBookFilterName.init(),
        };
      case HouseBookFilterCategory.Price:
        return {
          id,
          ...HouseBookFilterPrice.init(),
        };
      case HouseBookFilterCategory.Type:
        return {
          id,
          ...HouseBookFilterType.init(),
        };
      case HouseBookFilterCategory.PurchaseDate:
        return {
          id,
          ...HouseBookFilterPurchaseDate.init(),
        };
      default:
        return {
          id,
          ...HouseBookFilterName.init(),
        };
    }
  },
} as const;

export const houseBookFilterState = atom<HouseBookFilter[] | undefined>({
  key: 'houseBookFilter',
  default: undefined,
});
