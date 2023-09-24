import { useSetHouseBookState } from '@/stores/atoms/useSetHouseBookState';
import { FileOpenStatus } from '@/types/fileOpen';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useState } from 'react';
import { HouseBookData } from '../utils/houseBookData';
import { HouseBookFileProperty } from '../utils/houseBookFileProperty';

export const HouseFileOpenStatus = {
  Idle: 'idle',
  Open: 'open',
  Error: 'error',
} as const;
type FileOpenStatus =
  (typeof HouseFileOpenStatus)[keyof typeof HouseFileOpenStatus];

const useOpenHouseFile = () => {
  const { openHousBookFile } = useSetHouseBookState();
  const [openStatus, setOpenStatus] = useState<FileOpenStatus>(
    HouseFileOpenStatus.Idle,
  );

  const openFile = useCallback(async () => {
    setOpenStatus(HouseFileOpenStatus.Open);
    const result = await window.api.openFile();

    if (result.status === FileOpenStatus.Error) {
      setOpenStatus(HouseFileOpenStatus.Error);

      return;
    }

    if (result.status === FileOpenStatus.Cancel) {
      setOpenStatus(HouseFileOpenStatus.Idle);

      return;
    }

    const bookData = HouseBookData.fromJsonString(result.text || '');

    if (!bookData) {
      setOpenStatus(HouseFileOpenStatus.Error);

      return;
    }

    const fileProperty = HouseBookFileProperty.initWithFilePath({
      filePath: result.filePath,
    });

    const id = uuidv4();
    openHousBookFile({ id, fileProperty, bookData });
  }, [openHousBookFile]);

  return { openStatus, openFile };
};

export { useOpenHouseFile };
