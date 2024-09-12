import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookFilterOperationDefault } from '@/utils/filters/houseBookFilterOperation';
import { useCallback, useState } from 'react';
import { useFilterInputValidator } from './useFilterInputValidator';

const UpdateType = {
  Category: 'Category',
  Value: 'Value',
  Condition: 'Condition',
  Operation: 'Operation',
} as const;
type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

type UpdateCategory = {
  type: typeof UpdateType.Category;
  value: HouseBookFilter['category'];
};

type UpdateValue = {
  type: typeof UpdateType.Value;
  value: HouseBookFilter['value'];
};

type UpdateCondition = {
  type: typeof UpdateType.Condition;
  value: HouseBookFilter['condition'];
};

type UpdateOperation = {
  type: typeof UpdateType.Operation;
  value: HouseBookFilter['operation'];
};

export type UpdateTarget =
  | UpdateCategory
  | UpdateValue
  | UpdateCondition
  | UpdateOperation;

type Props = {
  initFilters?: HouseBookFilter[];
};

const useHouseBookEditorFilter = ({ initFilters = [] }: Props) => {
  const { validate, validates, addValidate, updateValidate, removeValidate } =
    useFilterInputValidator({ filters: initFilters });
  const [filters, setFilters] = useState(initFilters);

  const addNewFilter = useCallback(() => {
    const operation = !filters?.length
      ? undefined
      : HouseBookFilterOperationDefault;

    const newFilter = {
      ...HouseBookFilter.initWithCategory(HouseBookItemCategory.Name),
      operation,
    } as HouseBookFilter;

    addValidate(newFilter.id, true);

    setFilters((cur) => [...cur, newFilter]);
  }, [filters, addValidate]);

  const updateFilter = useCallback(
    (id: string, target: UpdateTarget) => {
      const targetFilter = filters.find((filter) => filter.id === id);
      if (!targetFilter) {
        return;
      }
      let newValue: HouseBookFilter;

      switch (target.type) {
        case UpdateType.Category:
          newValue = {
            ...HouseBookFilter.initWithCategory(target.value),
            id,
            operation: targetFilter.operation,
          };
          updateValidate(newValue.id, true);
          break;

        case UpdateType.Condition:
          newValue = {
            ...targetFilter,
            condition: target.value,
          } as HouseBookFilter;
          break;

        case UpdateType.Operation:
          newValue = {
            ...targetFilter,
            operation: target.value,
          };
          break;

        case UpdateType.Value:
          newValue = {
            ...targetFilter,
            value: target.value,
          } as HouseBookFilter;

          updateValidate(
            newValue.id,
            HouseBookFilter.validate(newValue.category, String(target.value)),
          );
          break;

        default:
          return;
      }

      const result = filters.map((f) => {
        if (f.id === id) {
          return newValue;
        }

        return f;
      });

      setFilters(result);
    },
    [filters, updateValidate],
  );

  const removeFilterById = useCallback(
    (id: string) => {
      const result = filters.filter((filter) => filter.id !== id);

      removeValidate(id);
      setFilters(result);
    },
    [filters, removeValidate],
  );

  return {
    validate,
    validates,
    addNewFilter,
    removeFilterById,
    updateFilter,
    filters,
  };
};

export { useHouseBookEditorFilter };

export type UpdateFilter = ReturnType<
  typeof useHouseBookEditorFilter
>['updateFilter'];

export type RemoveFilter = ReturnType<
  typeof useHouseBookEditorFilter
>['removeFilterById'];
