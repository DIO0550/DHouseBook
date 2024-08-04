import {
  HouseBookFilter,
  HouseBookFilterCategory,
  houseBookFilterState,
} from '@/stores/atoms/houseBookFilterState';
import { useSetHouseBookFilterState } from '@/stores/atoms/useSetHouseBookFilterState';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

const useHouseBookEditorFilter = () => {
  const filters = useRecoilValue(houseBookFilterState);
  const { setHouseBookFilterWithCategory } = useSetHouseBookFilterState();

  const addNewFilter = useCallback(() => {
    const newFilter = HouseBookFilter.initWithCategory(
      HouseBookFilterCategory.Name,
    );
    setHouseBookFilterWithCategory(newFilter);
  }, [setHouseBookFilterWithCategory]);

  return { filters, addNewFilter };
};

export { useHouseBookEditorFilter };
