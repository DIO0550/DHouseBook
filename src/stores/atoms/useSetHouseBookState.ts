import { HouseBookData } from '@/features/files/utils/houseBookData';
import { HouseBookFileProperty } from '@/features/files/utils/houseBookFileProperty';
import { useRecoilCallback } from 'recoil';
import {
  houseBookIds,
  houseBookFileState,
  houseBookItemsState,
} from './houseBookFileState';

const useSetHouseBookState = () => {
  const setNewHouseBookFile = useRecoilCallback(
    ({ set }) =>
      ({
        newFile,
        newBook,
      }: {
        newFile: HouseBookFileProperty;
        newBook: HouseBookData;
      }) => {
        set(houseBookIds, (prev) => [...prev, newFile.id]);
        set(houseBookFileState({ id: newFile.id }), newFile);
        set(houseBookItemsState({ id: newFile.id }), newBook);
      },
    [],
  );

  const openHousBookFile = useRecoilCallback(
    ({ set }) =>
      ({
        newFile,
        newBook,
      }: {
        newFile: HouseBookFileProperty;
        newBook: HouseBookData;
      }) => {
        set(houseBookIds, (prev) => [...prev, newFile.id]);
        set(houseBookFileState({ id: newFile.id }), newFile);
        set(houseBookItemsState({ id: newFile.id }), newBook);
      },
    [],
  );

  return {
    setNewHouseBookFile,
    openHousBookFile,
  };
};

export { useSetHouseBookState };
