import { HouseFileSaveStatus } from '@/features/files/hooks/useSaveHouseFile';
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
      return;
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

      return;
    }

    if (result.status === FileOpenStatus.Cancel) {
      setSaveStatus(HouseFileSaveStatus.Idle);

      return;
    }

    setFileState(HouseBookFileState.Saved);
  }, [bookDateState, items, setFileState]);

  const overwriteSaveFile = useCallback(async () => {
    if (!filePropertyState.filePath || !bookDateState) {
      return;
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

      return;
    }

    if (result.status === FileOpenStatus.Cancel) {
      setSaveStatus(HouseFileSaveStatus.Idle);

      return;
    }

    setFileState(HouseBookFileState.Saved);
  }, [bookDateState, filePropertyState, items, setFileState]);

  const saveFile = useCallback(() => {
    if (!filePropertyState || filePropertyState.isNewFile) {
      void saveNewFile();

      return;
    }

    void overwriteSaveFile();
  }, [filePropertyState, overwriteSaveFile, saveNewFile]);

  useEffect(() => {
    const saveCallback = () => {
      saveFile();
    };
    // イベントを受け取る
    const remove = window.api.on.saveFile(saveCallback);

    return () => {
      remove();
    };
  }, [saveFile]);

  return {
    saveStatus,
  };
};

export { useFileSave };
