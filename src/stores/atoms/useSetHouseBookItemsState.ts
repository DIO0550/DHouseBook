import { useSetRecoilState } from 'recoil';
import { HouseBookItems } from '@/utils/editors/houseBookItem';
import { useCallback } from 'react';
import { houseBookItemsState } from './houseBookState';

const useSetHouseBookItemsState = (id: string) => {
  const setHouseBookItemsState = useSetRecoilState(houseBookItemsState({ id }));

  const setHouseBookItems = useCallback(
    (items: HouseBookItems) => {
      setHouseBookItemsState(items);
    },
    [setHouseBookItemsState],
  );

  return {
    setHouseBookItems,
  };
};

export default useSetHouseBookItemsState;
