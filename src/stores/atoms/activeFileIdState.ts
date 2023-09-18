import { atom } from 'recoil';

export const InactiveFileId = '';

export const activeFileIdState = atom<string>({
  key: 'activeFileIdState',
  default: InactiveFileId,
});
