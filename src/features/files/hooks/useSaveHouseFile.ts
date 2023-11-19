import {
  houseBookDateState,
  houseBookFilePropertyState,
  houseBookItemsState,
} from '@/stores/atoms/houseBookState';
import { FileOpenStatus } from '@/types/fileOpen';
import { useCallback, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { HouseBookData } from '../utils/houseBookData';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';

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
  const { filePath } = useRecoilValue(houseBookFilePropertyState({ id }));
  const items = useRecoilValue(houseBookItemsState({ id }));
  const { year, month } = useRecoilValue(houseBookDateState({ id }));
  const { setIsDirty } = useSetHouseBookFilePropertyState({ id });

  const [saveStatus, setSaveStatus] = useState<HouseFileSaveStatus>(
    HouseFileSaveStatus.Idle,
  );

  const overWriteSaveFile = useCallback(async () => {
    const jsonData = HouseBookData.toJson({
      date: {
        year,
        month,
      },
      items,
    });
    const result = await window.api.saveFile(jsonData);

    if (result.status === FileOpenStatus.Error) {
      setSaveStatus(HouseFileSaveStatus.Error);

      return;
    }

    if (result.status === FileOpenStatus.Cancel) {
      setSaveStatus(HouseFileSaveStatus.Idle);

      return;
    }

    setIsDirty(false);
  }, [items, month, setIsDirty, year]);

  return {
    saveStatus,
    overWriteSaveFile,
  };
};

export { useSaveHouseFile };
