import { useRecoilCallback } from 'recoil';
import { HouseBookFilter, houseBookFilterState } from './houseBookFilterState';

const useSetHouseBookFilterState = () => {
  const setHouseBookFilters = useRecoilCallback(
    ({ set }) =>
      (filters: HouseBookFilter[]) => {
        set(houseBookFilterState, filters);
      },
    [],
  );

  return {
    setHouseBookFilters,
  };
};

export { useSetHouseBookFilterState };
