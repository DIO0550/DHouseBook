import { MessageBox } from '@/features/messageBoxies/utils/messageBox';
import { useResetHouseBookState } from '@/stores/atoms/useResetHouseBookState';
import { useCallback } from 'react';

const useHouseBookFileClose = () => {
  const { resetHouseBookState } = useResetHouseBookState();

  const closeHouseBookFile = useCallback(
    async (id: string) => {
      // TODO: 未保存なら、保存処理を呼び出してから閉じさせる
      await MessageBox.syncShow({
        buttons: ['Close'],
        cancelId: -1,
        message: '未保存です',
      });

      resetHouseBookState(id);
    },
    [resetHouseBookState],
  );

  return {
    closeHouseBookFile,
  };
};

export { useHouseBookFileClose };
