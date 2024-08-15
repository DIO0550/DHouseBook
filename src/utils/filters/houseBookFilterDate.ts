import { DateEx } from '@/utils/DateEx';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { HouseBookFilterOperation } from './houseBookFilterOperation';

// 購入日フィルターの条件
export const HouseBookFilterDateCondition = {
  // より大きい
  GreaterThan: 'GreaterThan',
  // 以上
  GreaterThanOrEqual: 'GreaterThanOrEqual',
  // 未満
  LessThan: 'LessThan',
  // 以下
  LessThanOrEqual: 'LessThanOrEqual',
} as const;
export type HouseBookFilterDateCondition =
  (typeof HouseBookFilterDateCondition)[keyof typeof HouseBookFilterDateCondition];

export type HouseBookFilterDateValue = string;
export type HouseBookFilterDate = {
  category: typeof HouseBookItemCategory.Date;
  value: HouseBookFilterDateValue;
  condition: HouseBookFilterDateCondition;
  operation: HouseBookFilterOperation | undefined;
};
export const HouseBookFilterDateDefault = {
  Value: '',
  Condition: HouseBookFilterDateCondition.GreaterThan,
} as const;
const HouseBookFilterDate = {
  init: (): HouseBookFilterDate => ({
    category: HouseBookItemCategory.Date,
    value: HouseBookFilterDateDefault.Value,
    condition: HouseBookFilterDateDefault.Condition,
    operation: undefined,
  }),

  match: (filter: HouseBookFilterDate, item: HouseBookItem) => {
    const filterDate = new Date(filter.value);
    const itemDate = new Date(item.date);
    if (DateEx.isInvalidDate(filterDate) || DateEx.isInvalidDate(itemDate)) {
      return false;
    }

    if (filter.condition === HouseBookFilterDateCondition.GreaterThan) {
      return itemDate.getTime() > filterDate.getTime();
    }

    if (filter.condition === HouseBookFilterDateCondition.GreaterThanOrEqual) {
      return itemDate.getTime() >= filterDate.getTime();
    }

    if (filter.condition === HouseBookFilterDateCondition.LessThan) {
      return itemDate.getTime() < filterDate.getTime();
    }

    if (filter.condition === HouseBookFilterDateCondition.LessThanOrEqual) {
      return itemDate.getTime() <= filterDate.getTime();
    }

    return false;
  },
} as const;
