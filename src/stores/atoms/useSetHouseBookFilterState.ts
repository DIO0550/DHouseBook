import { useRecoilCallback } from 'recoil';
import {
  HouseBookFilter,
  HouseBookFilterOperationDefault,
  houseBookFilterState,
} from './houseBookFilterState';

const useSetHouseBookFilterState = () => {
  const setHouseBookFilterWithCategory = useRecoilCallback(
    ({ set }) =>
      (filter: HouseBookFilter) => {
        set(houseBookFilterState, (current) => {
          if (!current?.length) {
            return [
              {
                ...filter,
                operation: undefined,
              },
            ];
          }

          const newValue: HouseBookFilter = {
            ...filter,
            operation: filter.operation
              ? filter.operation
              : HouseBookFilterOperationDefault,
          };

          return [...current, newValue];
        });
      },
    [],
  );

  const removeHouseBookFilterById = useRecoilCallback(
    ({ set }) =>
      (id: string) => {
        set(houseBookFilterState, (current) => {
          if (!current) {
            return undefined;
          }

          const result = current.filter((v) => v.id !== id);

          return result;
        });
      },
    [],
  );

  return {
    setHouseBookFilterWithCategory,
    removeHouseBookFilterById,
  };
};

export { useSetHouseBookFilterState };
