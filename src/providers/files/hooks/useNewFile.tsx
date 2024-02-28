import { HouseBookState } from '@/stores/atoms/houseBookState';
import { useSetActiveFileIdState } from '@/stores/atoms/useSetActiveFileIdState';
import { useSetHouseBookState } from '@/stores/atoms/useSetHouseBookState';
import { useEffect } from 'react';

const useNewFile = () => {
  const { setNewHouseBookState } = useSetHouseBookState();
  const { setActiveFileId } = useSetActiveFileIdState();

  useEffect(() => {
    const createNewFileCallback = () => {
      const houseBookState = HouseBookState.init();
      setNewHouseBookState(houseBookState);
      setActiveFileId(houseBookState.id);
    };

    // イベントを受け取る
    const remove = window.api.on.createNewFile(createNewFileCallback);

    return () => {
      remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useNewFile };
