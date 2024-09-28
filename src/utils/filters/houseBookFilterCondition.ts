import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookFilterDateCondition } from './houseBookFilterDate';
import { HouseBookFilterNameCondition } from './houseBookFilterName';
import { HouseBookFilterPriceCondition } from './houseBookFilterPrice';
import { HouseBookFilterTypeCondition } from './houseBookFilterType';

const HouseBookFilterNameConditionLabel: {
  [x in HouseBookFilterNameCondition]: string;
} = {
  [HouseBookFilterNameCondition.Include]: '含む',
  [HouseBookFilterNameCondition.NotInclude]: '含まない',
};

const HouseBookFilterDateConditionLabel: {
  [x in HouseBookFilterDateCondition]: string;
} = {
  [HouseBookFilterDateCondition.GreaterThan]: 'より後',
  [HouseBookFilterDateCondition.GreaterThanOrEqual]: '以降',
  [HouseBookFilterDateCondition.LessThan]: 'より前',
  [HouseBookFilterDateCondition.LessThanOrEqual]: '以前',
};

const HouseBookFilterPriceConditionLabel: {
  [x in HouseBookFilterPriceCondition]: string;
} = {
  [HouseBookFilterPriceCondition.GreaterThan]: 'より大きい',
  [HouseBookFilterPriceCondition.GreaterThanOrEqual]: '以上',
  [HouseBookFilterPriceCondition.LessThan]: 'より小さい',
  [HouseBookFilterPriceCondition.LessThanOrEqual]: '以下',
};

const HouseBookFilterTypeConditionLabel: {
  [x in HouseBookFilterTypeCondition]: string;
} = {
  [HouseBookFilterTypeCondition.Include]: '含む',
  [HouseBookFilterTypeCondition.NotInclude]: '含まない',
};

export type HouseBookFilterCondition =
  | HouseBookFilterDateCondition
  | HouseBookFilterNameCondition
  | HouseBookFilterTypeCondition
  | HouseBookFilterPriceCondition;

export const HouseBookFilterCondition = {
  conditions: (category: HouseBookItemCategory) => {
    switch (category) {
      case HouseBookItemCategory.Name:
        return HouseBookFilterNameCondition;

      case HouseBookItemCategory.Price:
        return HouseBookFilterPriceCondition;

      case HouseBookItemCategory.Type:
        return HouseBookFilterTypeCondition;

      case HouseBookItemCategory.Date:
        return HouseBookFilterDateCondition;

      default:
        return HouseBookFilterNameCondition;
    }
  },

  label: (
    category: HouseBookItemCategory,
    condition: HouseBookFilterCondition,
  ): string => {
    switch (category) {
      case HouseBookItemCategory.Name:
        return HouseBookFilterNameConditionLabel[
          condition as HouseBookFilterNameCondition
        ];

      case HouseBookItemCategory.Price:
        return HouseBookFilterPriceConditionLabel[
          condition as HouseBookFilterPriceCondition
        ];

      case HouseBookItemCategory.Type:
        return HouseBookFilterTypeConditionLabel[
          condition as HouseBookFilterTypeCondition
        ];

      case HouseBookItemCategory.Date:
        return HouseBookFilterDateConditionLabel[
          condition as HouseBookFilterDateCondition
        ];

      default:
        return HouseBookFilterNameConditionLabel[
          condition as HouseBookFilterNameCondition
        ];
    }
  },
} as const;
