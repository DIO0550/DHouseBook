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
  };

  on: { openFile: (listener: (result: FileOpenResult) => void) => () => void };
}

declare global {
  interface Window {
    api: BookApi;
  }
}
