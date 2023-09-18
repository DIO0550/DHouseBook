import { useSetHouseBookState } from '@/stores/atoms/useSetHouseBookState';
import { FileOpenStatus } from '@/types/fileOpen';
import { useCallback, useState } from 'react';
import { HouseBook } from '../utils/houseBook';
import { HouseBookFile } from '../utils/houseBookFile';

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

    const book = HouseBook.fromJsonString(result.text || '');

    if (!book) {
      setOpenStatus(HouseFileOpenStatus.Error);

      return;
    }

    const file = HouseBookFile.initByOpenFile({
      filePath: result.filePath,
      dateStr: '202202',
    });

    openHousBookFile({ newFile: file, newBook: book });
  }, [openHousBookFile]);

  return { openStatus, openFile };
};

export { useOpenHouseFile };
