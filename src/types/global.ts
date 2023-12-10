import { FileOpenResult } from './fileOpen';
import { FileSaveResult } from './fileSave';

export type OverwriteSaveFileInfo = {
  contents: string;
  filePath: string;
};

export interface BookApi {
  openFile: () => Promise<FileOpenResult>;
  saveFile: (contents: string) => Promise<FileSaveResult>;
  overwriteSaveFile: ({
    contents,
    filePath,
  }: OverwriteSaveFileInfo) => Promise<FileSaveResult>;
}

declare global {
  interface Window {
    api: BookApi;
  }
}
