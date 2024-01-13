import { FileFilter } from 'electron';

export const DialogIpc = {
  Invoke: {
    Open: 'FileOpen',
    Save: 'FileSave',
    OverwriteSave: 'FileOverwriteSave',
  },

  On: {
    Open: 'FileOpen',
    Save: 'FileSave',
    OverwriteSave: 'FileOverwriteSave',
  },

  Send: {
    Open: 'FileOpen',
    Save: 'FileSave',
    OverwriteSave: 'FileOverwriteSave',
  },
} as const;

export const FileFilters: FileFilter[] = [
  { name: 'json', extensions: ['json'] },
  { name: 'csv', extensions: ['csv'] },
];
