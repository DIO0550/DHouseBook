import { HouseBook } from '@/features/files/utils/houseBook';
import { HouseBookFile } from '@/features/files/utils/houseBookFile';
import { atom, atomFamily, selector } from 'recoil';

export const houseBookFileIds = atom<string[]>({
  key: 'houseBookIds',
  default: [],
});

export const houseBookFileState = atomFamily<HouseBookFile, { id: string }>({
  key: 'houseBookFileState',
  default: undefined,
});

export const houseBookState = atomFamily<HouseBook, { id: string }>({
  key: 'houseBookState',
  default: undefined,
});

export const houseBookFilesSelector = selector<HouseBookFile[]>({
  key: 'houseBookFileSelector',
  get: ({ get }) => {
    const ids = get(houseBookFileIds);

    return ids.map((id) => {
      const files = get(houseBookFileState({ id }));

      return files;
    });
  },
});

export const houseBookStatesSelector = selector<HouseBook[]>({
  key: 'houseBookStateSelector',
  get: ({ get }) => {
    const ids = get(houseBookFileIds);

    return ids.map((id) => {
      const states = get(houseBookState({ id }));

      return states;
    });
  },
});
