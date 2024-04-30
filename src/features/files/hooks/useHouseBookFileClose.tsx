import { MessageBox } from '@/features/messageBoxies/utils/messageBox';
import { houseBookFilePropertyState } from '@/stores/atoms/houseBookState';
import { useResetHouseBookState } from '@/stores/atoms/useResetHouseBookState';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

const useHouseBookFileClose = ({ id }: { id: string }) => {
  const { resetHouseBookState } = useResetHouseBookState();
  const fileProperty = useRecoilValue(houseBookFilePropertyState({ id }));

  const closeHouseBookFile = useCallback(async () => {
    // TODO: 未保存なら、保存処理を呼び出してから閉じさせる
    await MessageBox.syncShow({
      buttons: ['Close'],
      cancelId: -1,
      message: '未保存です',
    });

    resetHouseBookState(id);
  }, [id, resetHouseBookState]);

  return {
    closeHouseBookFile,
  };
};

export { useHouseBookFileClose };
