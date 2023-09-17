import { v4 as uuidv4 } from 'uuid';
import { DateFormat, dateFormatter } from './dateFormatter';

type HouseBookFilePath = string | typeof HouseBookFile.newFilePath;

export type HouseBookFile = {
  id: string;
  date: string;
  filePath: HouseBookFilePath;
  isDirty: boolean;
};

export const HouseBookFile = {
  newFilePath: 'newfile',
  /**
   * 初期化
   * @returns 作成したHouseBookFile
   */
  init: (): HouseBookFile => {
    const id = uuidv4();
    const date = new Date();
    const formatter = dateFormatter();
    const dateStr = formatter.toString(date, DateFormat.yyyyMMdd);

    return {
      id,
      date: dateStr,
      filePath: HouseBookFile.newFilePath,
      isDirty: true,
    };
  },

  /**
   * オープンファイルによるHouseBookFileの初期化
   * @param filePath ファイルパス
   * @param dateStr 日付の文字列
   * @returns 作成したHouseBookFile
   */
  initByOpenFile: ({
    filePath,
    dateStr,
  }: {
    filePath: string;
    dateStr: string;
  }) => {
    const id = uuidv4();

    return {
      id,
      date: dateStr,
      filePath,
      isDirty: false,
    };
  },
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
