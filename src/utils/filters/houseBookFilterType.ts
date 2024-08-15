import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { HouseBookFilterOperation } from './houseBookFilterOperation';

// 種類フィルターの条件
export const HouseBookFilterTypeCondition = {
  NotInclude: 'NotInclude',
  Include: 'Include',
} as const;
export type HouseBookFilterTypeCondition =
  (typeof HouseBookFilterTypeCondition)[keyof typeof HouseBookFilterTypeCondition];
export type HouseBookFilterTypeValue = string;

export type HouseBookFilterType = {
  category: typeof HouseBookItemCategory.Type;
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
    category: HouseBookItemCategory.Type,
    value: HouseBookFilterTypeDefault.Value,
    condition: HouseBookFilterTypeDefault.Condition,
    operation: undefined,
  }),

  match: (filter: HouseBookFilterType, item: HouseBookItem) => {
    if (filter.condition === HouseBookFilterTypeCondition.Include) {
      return item.type.includes(filter.value);
    }

    return !item.type.includes(filter.value);
  },
} as const;
