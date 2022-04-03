import { PurchasedItem } from './purchasedItem';

export interface BookAPI {
  saveBook: (filePath: string, jsonStr: string) => Promise<void>;
  loadBook: (filePath: string) => Promise<PurchasedItem[] | null>;
  getPath: () => Promise<string>;
}

declare global {
  interface Window {
    api: BookAPI;
  }
}
