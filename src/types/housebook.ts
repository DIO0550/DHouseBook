import { PurchasedItem } from '@/utils/editors/purchasedItem';

// 家計簿のデータ
export type HouseBook = {
  year: number;
  month: number;
  items: PurchasedItem[];
};

export const HouseBook = {
  /**
   * jsonからブック生成する
   * @param json json文字列
   * @returns ブック
   */
  fromJsonString: (json: string) => {
    try {
      const houseBook = JSON.parse(json) as HouseBook;

      return houseBook;
    } catch (e) {
      return undefined;
    }
  },
  /**
   * csvに変換する
   * @param houseBook ブック
   * @returns csvの文字列
   */
  toCsv: (houseBook: HouseBook) => {
    const LineBreak = '\n';
    const Delimiter = ',';
    let csv = `${houseBook.year}${houseBook.month}${LineBreak}`;
    houseBook.items.forEach((item) => {
      Object.values(item).forEach((prop) => {
        csv += `${prop}${Delimiter}`;
      });
      csv += LineBreak;
    });

    return csv;
  },

  /**
   * jsonに変換した文字列
   * @param houseBook ブック
   * @returns jsonの文字列
   */
  toJson: (houseBook: HouseBook) => {
    const json = JSON.stringify(houseBook);

    return json;
  },
} as const;
