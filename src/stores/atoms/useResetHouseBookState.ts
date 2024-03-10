import { useRecoilCallback } from 'recoil';
import {
  houseBookIds,
  houseBookFilePropertyState,
  houseBookItemsState,
  houseBookDateState,
} from './houseBookState';
import { InactiveFileId, activeFileIdState } from './activeFileIdState';

const useResetHouseBookState = () => {
  const resetHouseBookState = useRecoilCallback(
    ({ set, reset }) =>
      (id: string) => {
        set(houseBookIds, (prev) => prev.filter((v) => v !== id));
        reset(houseBookFilePropertyState({ id }));
        reset(houseBookItemsState({ id }));
        reset(houseBookDateState({ id }));
        set(activeFileIdState, (prev) => {
          if (prev !== id) {
            return prev;
          }

          return InactiveFileId;
        });
      },
    [],
  );

  return {
    resetHouseBookState,
  };
};

export { useResetHouseBookState };
