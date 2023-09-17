import { useRecoilValue } from 'recoil';
import { useCallback } from 'react';
import { activeFileIdState } from './activeFileIdState';

const useActiveFileIdState = () => {
  const activeFileId = useRecoilValue(activeFileIdState);

  const isActive = useCallback(
    (fileId: string) => fileId === activeFileId,
    [activeFileId],
  );

  return { isActive };
};

export { useActiveFileIdState };
