import { FileFilter } from 'electron';

export const DialogIpc = {
  Invoke: {
    Open: 'FileOpen',
    Save: 'FileSave',
    OverwriteSave: 'FileOverwriteSave',
    CreateNewFile: 'CreateNewFile',
  },

  On: {
    Open: 'FileOpen',
    Save: 'FileSave',
    OverwriteSave: 'FileOverwriteSave',
    CreateNewFile: 'CreateNewFile',
  },

  Send: {
    Open: 'FileOpen',
    Save: 'FileSave',
    OverwriteSave: 'FileOverwriteSave',
    CreateNewFile: 'CreateNewFile',
  },
} as const;

export const FileFilters: FileFilter[] = [
  { name: 'json', extensions: ['json'] },
  { name: 'csv', extensions: ['csv'] },
];
