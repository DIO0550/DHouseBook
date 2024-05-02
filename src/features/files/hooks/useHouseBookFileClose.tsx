import {
  UnsaveMessageBox,
  UnsaveMessageBoxButtonId,
} from '@/features/messageBoxies/utils/unsaveMessageBox';
import { houseBookFilePropertyState } from '@/stores/atoms/houseBookState';
import { useResetHouseBookState } from '@/stores/atoms/useResetHouseBookState';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import {
  HouseBookSaveResult,
  useFileSave,
} from '@/providers/files/hooks/useFileSave';
import { FilePath } from '../utils/filePath';
import { HouseBookFileProperty } from '../utils/houseBookFileProperty';

const useHouseBookFileClose = ({ id }: { id: string }) => {
  const { resetHouseBookState } = useResetHouseBookState();
  const fileProperty = useRecoilValue(houseBookFilePropertyState({ id }));
  const { saveFile } = useFileSave({ id });

  const closeHouseBookFile = useCallback(async () => {
    const buttonId = await UnsaveMessageBox.sycnShow(
      FilePath.getFileName(fileProperty.filePath) ||
        HouseBookFileProperty.newFileName,
    );

    if (buttonId === UnsaveMessageBoxButtonId.Cancel) {
      return;
    }

    if (buttonId === UnsaveMessageBoxButtonId.Save) {
      const saveResult = await saveFile();
      if (saveResult !== HouseBookSaveResult.Success) {
        // 何かポップアップ出す
        return;
      }
    }

    resetHouseBookState(id);
  }, [fileProperty.filePath, id, resetHouseBookState, saveFile]);

  return {
    closeHouseBookFile,
  };
};

export { useHouseBookFileClose };
