import { PurchasedItem } from '@/utils/editors/purchasedItem';

// 家計簿のデータ
export type HouseBook = {
  year: number;
  month: number;
  items: PurchasedItem[];
};

export const HouseBook = {
  fromJsonString: (json: string) => {
    try {
      const houseBook = JSON.parse(json) as HouseBook;

      return houseBook;
    } catch (e) {
      return undefined;
    }
  },
} as const;
