import { HouseBookFile } from '@/features/files/utils/houseBookFile';
import { atom } from 'recoil';

export const houseBookFileState = atom<HouseBookFile[]>({
  key: 'houseBookFileState',
  default: [],
});
