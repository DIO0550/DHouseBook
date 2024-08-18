import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookFilterOperationDefault } from '@/utils/filters/houseBookFilterOperation';
import { useCallback, useState } from 'react';

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
