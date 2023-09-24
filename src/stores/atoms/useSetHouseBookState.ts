import { HouseBookData } from '@/features/files/utils/houseBookData';
import { HouseBookFileProperty } from '@/features/files/utils/houseBookFileProperty';
import { useRecoilCallback } from 'recoil';
import {
  houseBookIds,
  houseBookFilePropertyState,
  houseBookItemsState,
  houseBookDateState,
} from './houseBookFileState';

const useSetHouseBookState = () => {
  const setNewHouseBookFile = useRecoilCallback(
    ({ set }) =>
      ({
        id,
        fileProperty,
        bookData,
      }: {
        id: string;
        fileProperty: HouseBookFileProperty;
        bookData: HouseBookData;
      }) => {
        set(houseBookIds, (prev) => [...prev, id]);
        set(houseBookFilePropertyState({ id }), fileProperty);
        set(houseBookItemsState({ id }), bookData.items);
        set(houseBookDateState({ id }), bookData.date);
      },
    [],
  );

  const openHousBookFile = useRecoilCallback(
    ({ set }) =>
      ({
        id,
        fileProperty,
        bookData,
      }: {
        id: string;
        fileProperty: HouseBookFileProperty;
        bookData: HouseBookData;
      }) => {
        set(houseBookIds, (prev) => [...prev, id]);
        set(houseBookFilePropertyState({ id }), fileProperty);
        set(houseBookItemsState({ id }), bookData.items);
        set(houseBookDateState({ id }), bookData.date);
      },
    [],
  );

  return {
    setNewHouseBookFile,
    openHousBookFile,
  };
};

export { useSetHouseBookState };
