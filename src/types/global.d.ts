import { FileOpenResult } from './fileOpen';

export interface BookApi {
  openFile: () => Promise<FileOpenResult>;
  saveFile: () => void;
}

declare global {
  interface Window {
    api: BookApi;
  }
}
