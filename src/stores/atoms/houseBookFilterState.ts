import { HouseBookItem, HouseBookItems } from '@/utils/editors/houseBookItem';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookFilterDate } from '@/utils/filters/houseBookFilterDate';
import { HouseBookFilterName } from '@/utils/filters/houseBookFilterName';
import { HouseBookFilterOperation } from '@/utils/filters/houseBookFilterOperation';
import { HouseBookFilterPrice } from '@/utils/filters/houseBookFilterPrice';
import { HouseBookFilterType } from '@/utils/filters/houseBookFilterType';
import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

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

  /**
   * Orオペレーションで、フィルターを分割する
   * @param filters 分割対象のフィルター
   */
  splitFilterByOrOperation: (
    filters: HouseBookFilter[],
  ): HouseBookFilter[][] => {
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

  match: (filter: HouseBookFilter, item: HouseBookItem) => {
    switch (filter.category) {
      case HouseBookItemCategory.Name:
        return HouseBookFilterName.match(filter, item);
      case HouseBookItemCategory.Price:
        return HouseBookFilterPrice.match(filter, item);
      case HouseBookItemCategory.Type:
        return HouseBookFilterType.match(filter, item);
      case HouseBookItemCategory.Date:
        return HouseBookFilterDate.match(filter, item);
      default:
        return false;
    }
  },

  filterItems: (filters: HouseBookFilter[], items: HouseBookItems) => {
    const splitedFiltersByOrOperation =
      HouseBookFilter.splitFilterByOrOperation(filters);

    const filteredItems = splitedFiltersByOrOperation.reduce<HouseBookItem[]>(
      (acc, currentFilters) => {
        let returnValue = [...items] as HouseBookItem[];
        for (let i = 0; i < currentFilters.length; i += 1) {
          const filter = currentFilters[i];
          returnValue = returnValue.filter((item) =>
            HouseBookFilter.match(filter, item),
          );
        }

        return acc.concat(returnValue);
      },
      [] as HouseBookItem[],
    );

    const result = filteredItems.filter(
      (element, index, self) =>
        self.findIndex((e) => e.id === element.id) === index,
    );

    return result;
  },

  validate: (category: HouseBookItemCategory, target: string) => {
    switch (category) {
      case HouseBookItemCategory.Name:
        return HouseBookFilterName.validate(target);

      case HouseBookItemCategory.Price:
        return HouseBookFilterPrice.validate(target);

      case HouseBookItemCategory.Type:
        return HouseBookFilterType.validate(target);

      case HouseBookItemCategory.Date:
        return HouseBookFilterDate.validate(target);

      default:
        return false;
    }
  },
} as const;

export const houseBookFilterState = atom<HouseBookFilter[] | undefined>({
  key: 'houseBookFilter',
  default: undefined,
});
