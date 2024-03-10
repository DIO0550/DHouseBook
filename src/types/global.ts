import { BookThemeColor } from '@/components/Providers';
import { FileOpenResult } from './fileOpen';
import { FileSaveResult } from './fileSave';

export type OverwriteSaveFileInfo = {
  contents: string;
  filePath: string;
};

export interface BookApi {
  invoke: {
    openFile: () => Promise<FileOpenResult>;
    saveFile: (contents: string) => Promise<FileSaveResult>;
    overwriteSaveFile: ({
      contents,
      filePath,
    }: OverwriteSaveFileInfo) => Promise<FileSaveResult>;
    createNewFile: () => Promise<void>;
    changeThemeColor: () => Promise<void>;
  };

  on: {
    openFile: (listener: (result: FileOpenResult) => void) => () => void;
    saveFile: (listener: () => void) => () => void;
    createNewFile: (listener: () => void) => () => void;
    changeThemeColor: (listener: (value: BookThemeColor) => void) => () => void;
  };
}

declare global {
  interface Window {
    api: BookApi;
  }
}
