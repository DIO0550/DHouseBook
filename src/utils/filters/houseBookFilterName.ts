import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { HouseBookFilterOperation } from './houseBookFilterOperation';

// 名前フィルターの条件
export const HouseBookFilterNameCondition = {
  NotInclude: 'NotInclude',
  Include: 'Include',
} as const;
export type HouseBookFilterNameCondition =
  (typeof HouseBookFilterNameCondition)[keyof typeof HouseBookFilterNameCondition];
export type HouseBookFilterNameValue = string;

export type HouseBookFilterName = {
  category: typeof HouseBookItemCategory.Name;
  value: HouseBookFilterNameValue;
  condition: HouseBookFilterNameCondition;
  operation: HouseBookFilterOperation | undefined;
};
export const HouseBookFilterNameDefault = {
  Value: '',
  Condition: HouseBookFilterNameCondition.Include,
} as const;

export const HouseBookFilterName = {
  init: (): HouseBookFilterName => ({
    category: HouseBookItemCategory.Name,
    value: HouseBookFilterNameDefault.Value,
    condition: HouseBookFilterNameDefault.Condition,
    operation: undefined,
  }),

  match: (filter: HouseBookFilterName, item: HouseBookItem) => {
    if (filter.condition === HouseBookFilterNameCondition.Include) {
      return item.name.includes(filter.value);
    }

    return !item.name.includes(filter.value);
  },

  validate: (target: string) => typeof target === 'string',
} as const;
