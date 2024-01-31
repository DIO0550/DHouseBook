import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { FileState } from '@/features/files/utils/houseBookFileProperty';
import { houseBookFilePropertyState } from './houseBookState';

const useSetHouseBookFilePropertyState = ({ id }: { id: string }) => {
  const setHouseBookFilePropertyState = useSetRecoilState(
    houseBookFilePropertyState({ id }),
  );

  const setFileState = useCallback(
    (fileState: FileState) => {
      setHouseBookFilePropertyState((current) => ({
        ...current,
        fileState,
      }));
    },
    [setHouseBookFilePropertyState],
  );

  return {
    setFileState,
  };
};

export default useSetHouseBookFilePropertyState;
