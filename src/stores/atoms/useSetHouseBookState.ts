import { useRecoilCallback } from 'recoil';
import {
  houseBookIds,
  houseBookFilePropertyState,
  houseBookItemsState,
  houseBookDateState,
  HouseBookState,
} from './houseBookState';

const useSetHouseBookState = () => {
  const setNewHouseBookState = useRecoilCallback(
    ({ set }) =>
      ({ id, fileProperty, data }: HouseBookState) => {
        set(houseBookIds, (prev) => [...prev, id]);
        set(houseBookFilePropertyState({ id }), fileProperty);
        set(houseBookItemsState({ id }), data.items);
        set(houseBookDateState({ id }), data.date);
      },
    [],
  );

  const setHouseBookState = useRecoilCallback(
    ({ set }) =>
      ({ id, fileProperty, data }: HouseBookState) => {
        set(houseBookIds, (prev) => [...prev, id]);
        set(houseBookFilePropertyState({ id }), fileProperty);
        set(houseBookItemsState({ id }), data.items);
        set(houseBookDateState({ id }), data.date);
      },
    [],
  );

  return {
    setNewHouseBookState,
    setHouseBookState,
  };
};

export { useSetHouseBookState };
