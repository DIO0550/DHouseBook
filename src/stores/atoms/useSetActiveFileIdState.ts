import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { activeFileIdState } from './activeFileIdState';

const useSetActiveFileIdState = () => {
  const setActiveFileIdState = useSetRecoilState(activeFileIdState);

  const setActiveFileId = useCallback(
    (fileId: string) => {
      setActiveFileIdState(fileId);
    },
    [setActiveFileIdState],
  );

  return { setActiveFileId };
};

export { useSetActiveFileIdState };
