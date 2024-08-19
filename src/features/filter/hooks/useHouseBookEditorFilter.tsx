import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import {
  HouseBookFilterName,
  HouseBookFilterNameCondition,
} from '@/utils/filters/houseBookFilterName';
import { HouseBookFilterOperationDefault } from '@/utils/filters/houseBookFilterOperation';
import { useCallback, useState } from 'react';

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

type UpdateFilter = UpdateFilterName;

type Props = {
  initFilters?: HouseBookFilter[];
};
const useHouseBookEditorFilter = ({ initFilters = [] }: Props) => {
  const [filters, setFilters] = useState(initFilters);

  const addNewFilter = useCallback(() => {
    const operation = !filters?.length
      ? undefined
      : HouseBookFilterOperationDefault;

    const newFilter = {
      ...HouseBookFilter.initWithCategory(HouseBookItemCategory.Name),
      operation,
    } as HouseBookFilter;

    setFilters((cur) => [...cur, newFilter]);
  }, [filters]);

  const updateFilter = useCallback((id: string, value: UpdateFilter) => {
    const targetFilter = filters.find((filter) => filter.id === id);
  }, []);

  const removeFilterById = useCallback(
    (id: string) => {
      const result = filters.filter((filter) => filter.id !== id);

      setFilters(result);
    },
    [filters],
  );

  return {
    addNewFilter,
    removeFilterById,
    filters,
  };
};

export { useHouseBookEditorFilter };
