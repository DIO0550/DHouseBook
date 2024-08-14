import { HouseBookData } from '@/features/files/utils/houseBookData';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { HouseBookFileProperty } from '@/features/files/utils/houseBookFileProperty';
import { HouseBookItems } from '@/utils/editors/houseBookItem';
import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export type HouseBookState = {
  id: string;
  fileProperty: HouseBookFileProperty;
  data: HouseBookData;
};

export const HouseBookState = {
  init: (): HouseBookState => ({
    id: uuidv4(),
    fileProperty: HouseBookFileProperty.init(),
    data: HouseBookData.init(),
  }),
};

export const houseBookIds = atom<string[]>({
  key: 'houseBookIds',
  default: [],
});

export const houseBookFilePropertyState = atomFamily<
  HouseBookFileProperty,
  { id: string }
>({
  key: 'houseBookFilePropertyState',
  default: undefined,
});

export const houseBookItemsState = atomFamily<HouseBookItems, { id: string }>({
  key: 'houseBookItemsState',
  default: undefined,
});

export const houseBookDateState = atomFamily<HouseBookDate, { id: string }>({
  key: 'houseBookDateState',
  default: undefined,
});

export const filteredHouseBookItems = selectorFamily<
  HouseBookItems,
  { id: string }
>({
  key: 'filteredHouseBookItems',
  get:
    ({ id }) =>
    ({ get }) => {
      const items = get(houseBookItemsState({ id }));

      return items;
    },
});
