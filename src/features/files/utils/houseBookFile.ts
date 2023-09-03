import { HouseBook } from './houseBook';

export type HouseBookFile = {
  id: string;
  filePath: string;
  book: HouseBook;
  isDirty: boolean;
};

export const HouseBookFile = {
  /**
   * ファイルパス更新
   * @param file ファイル
   * @param value 更新で使用する値
   * @returns 更新結果のファイル
   */
  updateFilePath: (file: HouseBookFile, value: string): HouseBookFile => ({
    ...file,
    filePath: value,
  }),
} as const;
