import { useSetHouseBookState } from '@/stores/atoms/useSetHouseBookState';
import { FileOpenStatus } from '@/types/fileOpen';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useState } from 'react';
import { useSetActiveFileIdState } from '@/stores/atoms/useSetActiveFileIdState';
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
  const { openHouseBook: openHouseBookFile } = useSetHouseBookState();
  const { setActiveFileId } = useSetActiveFileIdState();
  const [openStatus, setOpenStatus] = useState<FileOpenStatus>(
    HouseFileOpenStatus.Idle,
  );

  const openFile = useCallback(async () => {
    setOpenStatus(HouseFileOpenStatus.Open);
    const result = await window.api.invoke.openFile();

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
    openHouseBookFile({ id, fileProperty, bookData });
    setActiveFileId(id);
    setOpenStatus(HouseFileOpenStatus.Idle);
  }, [openHouseBookFile, setActiveFileId]);

  return { openStatus, openFile };
};

export { useOpenHouseFile };
