import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { HouseBookFileProperty } from '@/features/files/utils/houseBookFileProperty';
import { HouseBookItems } from '@/utils/editors/houseBookItem';
import { atom, atomFamily, selector } from 'recoil';

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

export const houseBookFilesSelector = selector<HouseBookFileProperty[]>({
  key: 'houseBookFileSelector',
  get: ({ get }) => {
    const ids = get(houseBookIds);

    return ids.map((id) => {
      const files = get(houseBookFilePropertyState({ id }));

      return files;
    });
  },
});

export const houseBookItemsStatesSelector = selector<HouseBookItems[]>({
  key: 'houseBookItemsStatesSelector',
  get: ({ get }) => {
    const ids = get(houseBookIds);

    return ids.map((id) => {
      const states = get(houseBookItemsState({ id }));

      return states;
    });
  },
});
