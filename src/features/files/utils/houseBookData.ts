import { HouseBookItems } from '@/utils/editors/houseBookItem';
import { HouseBookDate } from './houseBookDate';

// 家計簿のデータ
export type HouseBookData = {
  date: HouseBookDate;
  items: HouseBookItems;
};

export const HouseBookData = {
  init: () => {
    const housebookDate = HouseBookDate.init();
    const newHouseBook: HouseBookData = {
      date: housebookDate,
      items: [],
    };

    return newHouseBook;
  },

  /**
   * jsonからブック生成する
   * @param json json文字列
   * @returns ブック
   */
  fromJsonString: (json: string) => {
    try {
      const houseBook = JSON.parse(json) as HouseBookData;

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
  toCsv: (houseBook: HouseBookData) => {
    const LineBreak = '\n';
    const Delimiter = ',';
    let csv = `${houseBook.date.year}${houseBook.date.month}${LineBreak}`;
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
  toJson: (houseBook: HouseBookData) => {
    const json = JSON.stringify(houseBook);

    return json;
  },
} as const;
