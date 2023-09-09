import { atom } from 'recoil';

export const displayFileIdState = atom<string>({
  key: 'displayFileIdState',
  default: '',
});
