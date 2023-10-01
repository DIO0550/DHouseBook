import { useSetRecoilState } from 'recoil';
import { HouseBookItems } from '@/utils/editors/houseBookItem';
import { useCallback } from 'react';
import { houseBookItemsState } from './houseBookState';

const useSetHouseBookItemsState = (id: string) => {
  const setHousebookItemsState = useSetRecoilState(houseBookItemsState({ id }));

  const setHouseBookItems = useCallback(
    (items: HouseBookItems) => {
      setHousebookItemsState(items);
    },
    [setHousebookItemsState],
  );

  return {
    setHouseBookItems,
  };
};

export default useSetHouseBookItemsState;
