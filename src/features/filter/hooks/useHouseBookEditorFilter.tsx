import {
  HouseBookFilter,
  HouseBookFilterOperationDefault,
} from '@/stores/atoms/houseBookFilterState';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
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

    console.log(newFilter);

    setFilters((cur) => [...cur, newFilter]);
  }, [filters]);

  return {
    addNewFilter,
    filters,
  };
};

export { useHouseBookEditorFilter };
