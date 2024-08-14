import { DateEx } from '@/utils/DateEx';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export const HouseBookFilterOperation = {
  And: 'And',
  Or: 'Or',
} as const;
export type HouseBookFilterOperation =
  (typeof HouseBookFilterOperation)[keyof typeof HouseBookFilterOperation];
export const HouseBookFilterOperationDefault = HouseBookFilterOperation.And;

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

const HouseBookFilterName = {
  init: (): HouseBookFilterName => ({
    category: HouseBookItemCategory.Name,
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
} as const;

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

export type HouseBookFilter = {
  id: string;
} & (
  | HouseBookFilterName
  | HouseBookFilterPrice
  | HouseBookFilterType
  | HouseBookFilterDate
);

export const HouseBookFilter = {
  initWithCategory: (category: HouseBookItemCategory): HouseBookFilter => {
    const id = uuidv4();
    switch (category) {
      case HouseBookItemCategory.Name:
        return {
          id,
          ...HouseBookFilterName.init(),
        };
      case HouseBookItemCategory.Price:
        return {
          id,
          ...HouseBookFilterPrice.init(),
        };
      case HouseBookItemCategory.Type:
        return {
          id,
          ...HouseBookFilterType.init(),
        };
      case HouseBookItemCategory.Date:
        return {
          id,
          ...HouseBookFilterDate.init(),
        };
      default:
        return {
          id,
          ...HouseBookFilterName.init(),
        };
    }
  },

  spllitFilter: (filters: HouseBookFilter[]): HouseBookFilter[][] => {
    const result: HouseBookFilter[][] = filters.reduce<HouseBookFilter[][]>(
      (prev, cur) => {
        if (!prev.length) {
          prev.push([cur]);

          return prev;
        }
        if (cur.operation !== HouseBookFilterOperation.And) {
          prev.push([cur]);
        }
        const lastFilter = prev.at(-1);
        lastFilter?.push(cur);

        return prev;
      },
      [] as HouseBookFilter[][],
    );

    return result;
  },
} as const;

const filterItems = (items: HouseBookItem[], filters: HouseBookFilter[]) => {
  const;
};

export const houseBookFilterState = atom<HouseBookFilter[] | undefined>({
  key: 'houseBookFilter',
  default: undefined,
});
