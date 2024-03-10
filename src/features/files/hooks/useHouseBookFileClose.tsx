import { useResetHouseBookState } from '@/stores/atoms/useResetHouseBookState';
import { useCallback } from 'react';

const useHouseBookFileClose = () => {
  const { resetHouseBookState } = useResetHouseBookState();

  const closeHouseBookFile = useCallback(
    (id: string) => {
      // TODO: 未保存なら、保存処理を呼び出してから閉じさせる

      resetHouseBookState(id);
    },
    [resetHouseBookState],
  );

  return {
    closeHouseBookFile,
  };
};

export { useHouseBookFileClose };
