import { HouseBookData } from '@/features/files/utils/houseBookData';
import { HouseBookFileProperty } from '@/features/files/utils/houseBookFileProperty';
import { useRecoilCallback } from 'recoil';
import {
  houseBookIds,
  houseBookFilePropertyState,
  houseBookItemsState,
  houseBookDateState,
} from './houseBookState';

const useSetHouseBookState = () => {
  const setNewHouseBook = useRecoilCallback(
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

  const openHousBook = useRecoilCallback(
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
    setNewHouseBook,
    openHousBook,
  };
};

export { useSetHouseBookState };
