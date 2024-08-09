import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { useCallback, useState } from 'react';

type Props = {
  initFilters?: HouseBookFilter[];
};
const useHouseBookEditorFilter = ({ initFilters = [] }: Props) => {
  const [filters, setFilters] = useState(initFilters);

  const addNewFilter = useCallback(() => {
    const newFilter = HouseBookFilter.initWithCategory(
      HouseBookItemCategory.Name,
    );

    setFilters((cur) => [...cur, newFilter]);
  }, []);

  return {
    addNewFilter,
    filters,
  };
};

export { useHouseBookEditorFilter };
