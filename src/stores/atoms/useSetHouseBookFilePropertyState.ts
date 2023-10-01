import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { houseBookFilePropertyState } from './houseBookState';

const useSetHouseBookFilePropertyState = ({ id }: { id: string }) => {
  const setHouseBookFilePropertyState = useSetRecoilState(
    houseBookFilePropertyState({ id }),
  );

  const setIsDirty = useCallback(
    (isDirty: boolean) => {
      setHouseBookFilePropertyState((current) => ({
        ...current,
        isDirty,
      }));
    },
    [setHouseBookFilePropertyState],
  );

  return {
    setIsDirty,
  };
};

export default useSetHouseBookFilePropertyState;
