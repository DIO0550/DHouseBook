import {
  HouseBookFilter,
  houseBookFilterState,
} from '@/stores/atoms/houseBookFilterState';
import { useSetHouseBookFilterState } from '@/stores/atoms/useSetHouseBookFilterState';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

const useHouseBookEditorFilter = () => {
  const filters = useRecoilValue(houseBookFilterState);
  const { setHouseBookFilterWithCategory, removeHouseBookFilterById } =
    useSetHouseBookFilterState();

  const addNewFilter = useCallback(() => {
    const newFilter = HouseBookFilter.initWithCategory(
      HouseBookItemCategory.Name,
    );
    setHouseBookFilterWithCategory(newFilter);
  }, [setHouseBookFilterWithCategory]);

  return { filters, addNewFilter, removeHouseBookFilterById };
};

export { useHouseBookEditorFilter };
