import {
  houseBookDateState,
  houseBookFilePropertyState,
  houseBookItemsState,
} from '@/stores/atoms/houseBookState';
import { FileOpenStatus } from '@/types/fileOpen';
import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import { HouseBookData } from '../utils/houseBookData';
import { FileState } from '../utils/houseBookFileProperty';

export const HouseFileSaveStatus = {
  Idle: 'idle',
  Open: 'open',
  Error: 'error',
} as const;
export type HouseFileSaveStatus =
  (typeof HouseFileSaveStatus)[keyof typeof HouseFileSaveStatus];

type Props = {
  id: string;
};

const useSaveHouseFile = ({ id }: Props) => {
  const { filePath, fileState } = useRecoilValue(
    houseBookFilePropertyState({ id }),
  );
  const items = useRecoilValue(houseBookItemsState({ id }));
  const { year, month } = useRecoilValue(houseBookDateState({ id }));
  const { setFileState } = useSetHouseBookFilePropertyState({ id });

  const [saveStatus, setSaveStatus] = useState<HouseFileSaveStatus>(
    HouseFileSaveStatus.Idle,
  );

  const saveNewFile = useCallback(async () => {
    const jsonData = HouseBookData.toJson({
      date: {
        year,
        month,
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

    setFileState(FileState.Saved);
  }, [items, month, setFileState, year]);

  const overWriteSaveFile = useCallback(async () => {
    const jsonData = HouseBookData.toJson({
      date: {
        year,
        month,
      },
      items,
    });
    const result = await window.api.invoke.overwriteSaveFile({
      contents: jsonData,
      filePath,
    });

    if (result.status === FileOpenStatus.Error) {
      setSaveStatus(HouseFileSaveStatus.Error);

      return;
    }

    if (result.status === FileOpenStatus.Cancel) {
      setSaveStatus(HouseFileSaveStatus.Idle);

      return;
    }

    setFileState(FileState.Saved);
  }, [filePath, items, month, setFileState, year]);

  const saveFile = useCallback(() => {
    if (fileState === FileState.NewFile) {
      void saveNewFile();

      return;
    }

    void overWriteSaveFile();
  }, [fileState, overWriteSaveFile, saveNewFile]);

  return {
    saveStatus,
    saveFile,
  };
};

export { useSaveHouseFile };
