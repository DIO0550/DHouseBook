type HouseBookFilePath = string | typeof HouseBookFileProperty.newFilePath;

export type HouseBookFileProperty = {
  filePath: HouseBookFilePath;
  isDirty: boolean;
};

export const HouseBookFileProperty = {
  newFilePath: 'newfile',
  /**
   * 初期化
   * @returns 作成したHouseBookFileProperty
   */
  init: (): HouseBookFileProperty => ({
    filePath: HouseBookFileProperty.newFilePath,
    isDirty: true,
  }),

  /**
   * オープンファイルによるHouseBookFilePropertyの初期化
   * @param filePath ファイルパス
   * @returns 作成したHouseBookFileProperty
   */
  initWithFilePath: ({ filePath }: { filePath: string }) => ({
    filePath,
    isDirty: false,
  }),

  /**
   * ファイルパス更新
   * @param file ファイル
   * @param value 更新で使用する値
   * @returns 更新結果のファイル
   */
  updateFilePath: (
    file: HouseBookFileProperty,
    value: string,
  ): HouseBookFileProperty => ({
    ...file,
    filePath: value,
  }),
} as const;
