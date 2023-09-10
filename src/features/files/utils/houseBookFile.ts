export type HouseBookFile = {
  id: string;
  date: string;
  filePath: string;
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
