import { atom } from 'recoil';

const InactiveFileId = '';

export const activeFileIdState = atom<string>({
  key: 'activeFileIdState',
  default: InactiveFileId,
});
