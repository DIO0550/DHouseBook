import { useRecoilValue } from 'recoil';
import { useMemo } from 'react';
import { houseBookFilterState } from './houseBookFilterState';

const useHouseBookFilterState = () => {
  const filters = useRecoilValue(houseBookFilterState);

  const isApplyFilter = useMemo(() => {
    if (!filters) {
      return false;
    }

    return filters.length !== 0;
  }, [filters]);

  return {
    filters,
    isApplyFilter,
  };
};

export { useHouseBookFilterState };
