import { PurchasedItem } from '../utils/editors/purchasedItem';

// 家計簿のデータ
export type HouseBook = {
  year: number;
  month: number;
  items: PurchasedItem[];
};
