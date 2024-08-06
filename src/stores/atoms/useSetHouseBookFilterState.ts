import { useRecoilCallback } from 'recoil';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import {
  HouseBookFilter,
  HouseBookFilterName,
  HouseBookFilterNameCondition,
  HouseBookFilterOperationDefault,
  houseBookFilterState,
} from './houseBookFilterState';

const UpdateType = {
  Category: 'Category',
  Value: 'Value',
  Condition: 'Condition',
} as const;
type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

type UpdateFilterNameCategory = {
  type: typeof UpdateType.Category;
  value: HouseBookItemCategory;
};

type UpdateFilterNameValue = {
  type: typeof UpdateType.Value;
  value: HouseBookFilterName['value'];
};

type UpdateFilterNameCondition = {
  type: typeof UpdateType.Value;
  value: HouseBookFilterNameCondition;
};

type UpdateFilterName =
  | { category: typeof HouseBookItemCategory.Name }
  | UpdateFilterNameCategory
  | UpdateFilterNameValue
  | UpdateFilterNameCondition;

const useSetHouseBookFilterState = () => {
  const setHouseBookFilterWithCategory = useRecoilCallback(
    ({ set }) =>
      (filter: HouseBookFilter) => {
        set(houseBookFilterState, (current) => {
          if (!current?.length) {
            return [
              {
                ...filter,
                operation: undefined,
              },
            ];
          }

          const newValue: HouseBookFilter = {
            ...filter,
            operation: filter.operation
              ? filter.operation
              : HouseBookFilterOperationDefault,
          };

          return [...current, newValue];
        });
      },
    [],
  );

  const updateHouseBookFilter = useRecoilCallback(
    ({ set }) =>
      (id: string, type: UpdateType, value: string) => {
        set(houseBookFilterState, (current) => {
          if (!current) {
            return undefined;
          }

          const filter: HouseBookFilter = current.find((f) => f.id === id);
          if (!filter) {
            return current;
          }

          return [...current, newValue];
        });
      },
    [],
  );

  const removeHouseBookFilterById = useRecoilCallback(
    ({ set }) =>
      (id: string) => {
        set(houseBookFilterState, (current) => {
          if (!current) {
            return undefined;
          }

          const result = current.filter((v) => v.id !== id);

          return result;
        });
      },
    [],
  );

  return {
    setHouseBookFilterWithCategory,
    removeHouseBookFilterById,
  };
};

export { useSetHouseBookFilterState };
