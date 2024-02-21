import { useSetActiveFileIdState } from '@/stores/atoms/useSetActiveFileIdState';
import { useSetHouseBookState } from '@/stores/atoms/useSetHouseBookState';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HouseBookData } from '../utils/houseBookData';
import { HouseBookFileProperty } from '../utils/houseBookFileProperty';

const useCreateHouseBookFile = () => {
  const { setNewHouseBook } = useSetHouseBookState();
  const { setActiveFileId } = useSetActiveFileIdState();

  const createNewFile = useCallback(() => {
    const id = uuidv4();
    const fileProperty = HouseBookFileProperty.init();
    const bookData = HouseBookData.init();

    setNewHouseBook({
      id,
      fileProperty,
      bookData,
    });
    setActiveFileId(id);
  }, [setActiveFileId, setNewHouseBook]);

  return { createNewFile };
};

export { useCreateHouseBookFile };
