import { PurchasedItem } from '@/utils/editors/purchasedItem';
import { HouseBook } from '@/types/housebook';

export type BookApi = {
  openBook: () => HouseBook;
  saveBook: (filePath: string, jsonStr: string) => Promise<void>;
};

declare global {
  interface Window {
    api: BookApi;
  }
}
