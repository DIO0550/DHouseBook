import { FileOpenResult } from './fileOpen';
import { FileSaveResult } from './fileSave';

export interface BookApi {
  openFile: () => Promise<FileOpenResult>;
  saveFile: (data: string) => Promise<FileSaveResult>;
  // overwriteSaveFile: ({data: string, filePath}) => Promise<FileSaveResult>
}

declare global {
  interface Window {
    api: BookApi;
  }
}
