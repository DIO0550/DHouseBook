import { PurchasedItem } from '../utils/editors/purchasedItem';

export type BookApi = {
  saveBook: (filePath: string, jsonStr: string) => Promise<void>;
  loadBook: (filePath: string) => Promise<PurchasedItem[] | null>;
  getPath: () => Promise<string>;
};

declare global {
  interface Window {
    api: BookApi;
  }
}
