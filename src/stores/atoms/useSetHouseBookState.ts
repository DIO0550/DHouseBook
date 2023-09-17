import { HouseBook } from '@/features/files/utils/houseBook';
import { HouseBookFile } from '@/features/files/utils/houseBookFile';
import { useRecoilCallback } from 'recoil';
import {
  houseBookFileIds,
  houseBookFileState,
  houseBookState,
} from './houseBookFileState';

const useSetHouseBookState = () => {
  const setNewHouseBookFile = useRecoilCallback(
    ({ set }) =>
      ({
        newFile,
        newBook,
      }: {
        newFile: HouseBookFile;
        newBook: HouseBook;
      }) => {
        set(houseBookFileIds, (prev) => [...prev, newFile.id]);
        set(houseBookFileState({ id: newFile.id }), newFile);
        set(houseBookState({ id: newFile.id }), newBook);
      },
    [],
  );

  const openHousBookFile = useRecoilCallback(
    ({ set }) =>
      ({
        newFile,
        newBook,
      }: {
        newFile: HouseBookFile;
        newBook: HouseBook;
      }) => {
        set(houseBookFileIds, (prev) => [...prev, newFile.id]);
        set(houseBookFileState({ id: newFile.id }), newFile);
        set(houseBookState({ id: newFile.id }), newBook);
      },
    [],
  );

  return {
    setNewHouseBookFile,
    openHousBookFile,
  };
};

export { useSetHouseBookState };
