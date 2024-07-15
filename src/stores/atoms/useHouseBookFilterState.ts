import { useRecoilValue } from 'recoil';
import { useMemo } from 'react';
import { houseBookFilterState } from './houseBookFilterState';

const useHouseBookFilterState = () => {
  const filter = useRecoilValue(houseBookFilterState);

  const isApplyFilter = useMemo(() => {
    if (!filter) {
      return false;
    }

    return filter.length !== 0;
  }, [filter]);

  return {
    isApplyFilter,
  };
};

export { useHouseBookFilterState };
