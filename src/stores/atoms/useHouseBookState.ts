import { HouseBook } from '@/features/files/utils/houseBook';
import { HouseBookFile } from '@/features/files/utils/houseBookFile';
import { useCallback } from 'react';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import {
  houseBookFileIds,
  houseBookFileState,
  houseBookState,
} from './houseBookFileState';

const useHouseBookSetState = () => {
  const addNewHouseBookFile = useRecoilCallback(
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
    addNewHouseBookFile,
  };
};

export { useHouseBookSetState };
