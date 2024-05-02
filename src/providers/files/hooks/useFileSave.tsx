import { HouseBookData } from '@/features/files/utils/houseBookData';
import { HouseBookFileState } from '@/features/files/utils/houseBookFileProperty';
import {
  houseBookFilePropertyState,
  houseBookItemsState,
  houseBookDateState,
} from '@/stores/atoms/houseBookState';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import { FileOpenStatus } from '@/types/fileOpen';
import { useState, useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const HouseFileSaveStatus = {
  Idle: 'idle',
  Open: 'open',
  Error: 'error',
} as const;
export type HouseFileSaveStatus =
  (typeof HouseFileSaveStatus)[keyof typeof HouseFileSaveStatus];

export const HouseBookSaveResult = {
  Success: 'Success',
  Error: 'Error',
  Cancel: 'Cancel',
};

type Props = {
  id: string;
};

const useFileSave = ({ id }: Props) => {
  const filePropertyState = useRecoilValue(houseBookFilePropertyState({ id }));
  const items = useRecoilValue(houseBookItemsState({ id }));
  const bookDateState = useRecoilValue(houseBookDateState({ id }));
  const { setFileState } = useSetHouseBookFilePropertyState({ id });

  const [saveStatus, setSaveStatus] = useState<HouseFileSaveStatus>(
    HouseFileSaveStatus.Idle,
  );

  const saveNewFile = useCallback(async () => {
    if (!bookDateState) {
      return HouseBookSaveResult.Error;
    }

    const jsonData = HouseBookData.toJson({
      date: {
        year: bookDateState.year,
        month: bookDateState.month,
      },
      items,
    });
    const result = await window.api.invoke.saveFile(jsonData);

    if (result.status === FileOpenStatus.Error) {
      setSaveStatus(HouseFileSaveStatus.Error);

      return HouseBookSaveResult.Error;
    }

    if (result.status === FileOpenStatus.Cancel) {
      setSaveStatus(HouseFileSaveStatus.Idle);

      return HouseBookSaveResult.Cancel;
    }

    setFileState(HouseBookFileState.Saved);

    return HouseBookSaveResult.Success;
  }, [bookDateState, items, setFileState]);

  const overwriteSaveFile = useCallback(async () => {
    if (!filePropertyState.filePath || !bookDateState) {
      return HouseBookSaveResult.Error;
    }

    const jsonData = HouseBookData.toJson({
      date: {
        year: bookDateState.year,
        month: bookDateState.month,
      },
      items,
    });
    const result = await window.api.invoke.overwriteSaveFile({
      contents: jsonData,
      filePath: filePropertyState.filePath,
    });

    if (result.status === FileOpenStatus.Error) {
      setSaveStatus(HouseFileSaveStatus.Error);

      return HouseBookSaveResult.Error;
    }

    if (result.status === FileOpenStatus.Cancel) {
      setSaveStatus(HouseFileSaveStatus.Idle);

      return HouseBookSaveResult.Cancel;
    }

    setFileState(HouseBookFileState.Saved);

    return HouseBookSaveResult.Success;
  }, [bookDateState, filePropertyState, items, setFileState]);

  const saveFile = useCallback(async () => {
    if (!filePropertyState || filePropertyState.isNewFile) {
      const result = await saveNewFile();

      return result;
    }

    const result = await overwriteSaveFile();

    return result;
  }, [filePropertyState, overwriteSaveFile, saveNewFile]);

  useEffect(() => {
    const saveCallback = () => {
      void saveFile();
    };
    // イベントを受け取る
    const remove = window.api.on.saveFile(saveCallback);

    return () => {
      remove();
    };
  }, [saveFile]);

  return {
    saveFile,
    saveStatus,
  };
};

export { useFileSave };
