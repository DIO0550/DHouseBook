import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { HouseBookFilterOperation } from './houseBookFilterOperation';

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
  category: typeof HouseBookItemCategory.Price;
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
    category: HouseBookItemCategory.Price,
    value: HouseBookFilterPriceDefault.Value,
    condition: HouseBookFilterPriceDefault.Condition,
    operation: undefined,
  }),

  match: (filter: HouseBookFilterPrice, item: HouseBookItem) => {
    if (filter.condition === HouseBookFilterPriceCondition.GreaterThan) {
      return item.price > filter.value;
    }

    if (filter.condition === HouseBookFilterPriceCondition.GreaterThanOrEqual) {
      return item.price >= filter.value;
    }

    if (filter.condition === HouseBookFilterPriceCondition.LessThan) {
      return item.price < filter.value;
    }

    if (filter.condition === HouseBookFilterPriceCondition.LessThanOrEqual) {
      return item.price <= filter.value;
    }

    return false;
  },
} as const;
