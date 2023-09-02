import { FileFilter } from 'electron';

export const DialogIpc = {
  Open: 'fileOpen',
  Save: 'fileSave',
} as const;

export const FileFilters: FileFilter[] = [
  { name: 'json', extensions: ['json'] },
  { name: 'csv', extensions: ['csv'] },
];
