import { HouseBookData } from '@/features/files/utils/houseBookData';
import { HouseBookFileProperty } from '@/features/files/utils/houseBookFileProperty';
import { useSetActiveFileIdState } from '@/stores/atoms/useSetActiveFileIdState';
import { useSetHouseBookState } from '@/stores/atoms/useSetHouseBookState';
import { FileOpenResult, FileOpenStatus } from '@/types/fileOpen';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const HouseFileOpenStatus = {
  Idle: 'idle',
  Open: 'open',
  Error: 'error',
} as const;
type FileOpenStatus =
  (typeof HouseFileOpenStatus)[keyof typeof HouseFileOpenStatus];

const useFileOpen = () => {
  const { openHouseBook: openHouseBookFile } = useSetHouseBookState();
  const { setActiveFileId } = useSetActiveFileIdState();
  const [openStatus, setOpenStatus] = useState<FileOpenStatus>(
    HouseFileOpenStatus.Idle,
  );

  useEffect(() => {
    const openCallBack = (result: FileOpenResult) => {
      setOpenStatus(HouseFileOpenStatus.Open);

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
    };

    // イベントを受け取る
    const remove = window.api.on.openFile(openCallBack);

    return () => {
      remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    openStatus,
  };
};

export { useFileOpen };
