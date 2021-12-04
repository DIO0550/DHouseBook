import { PurchasedItem } from './purchasedItem';

export interface BookAPI {
  saveBook: (filePath: string, jsonStr: String) => void;
  loadBook: (filePath: string) => Promise<PurchasedItem[] | null>;
}

declare global {
  interface Window {
    api: BookAPI;
  }
}
