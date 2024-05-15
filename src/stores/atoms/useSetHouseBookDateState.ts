import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { houseBookDateState } from './houseBookState';

const useSetHouseBookDateState = ({ id }: { id: string }) => {
  const setHouseBookDateState = useSetRecoilState(houseBookDateState({ id }));

  const setHouseBookDate = useCallback(
    (date: HouseBookDate) => {
      setHouseBookDateState(date);
    },
    [setHouseBookDateState],
  );

  return {
    setHouseBookDate,
  };
};

export { useSetHouseBookDateState };
