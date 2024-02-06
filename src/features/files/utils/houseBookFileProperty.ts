type HouseBookFilePath = string | typeof HouseBookFileProperty.newFilePath;

export const HouseBookFileState = {
  Saved: 'Saved',
  Dirty: 'Dirty',
} as const;

export type HouseBookFileState =
  (typeof HouseBookFileState)[keyof typeof HouseBookFileState];

export type HouseBookFileProperty = {
  filePath: HouseBookFilePath;
  fileState: HouseBookFileState;
  isNewFile: boolean;
};

export const HouseBookFileProperty = {
  newFilePath: '',
  newFileName: '新規ファイル',

  /**
   * 初期化
   * @returns 作成したHouseBookFileProperty
   */
  init: (): HouseBookFileProperty => ({
    filePath: HouseBookFileProperty.newFilePath,
    fileState: HouseBookFileState.Dirty,
    isNewFile: true,
  }),

  /**
   * オープンファイルによるHouseBookFilePropertyの初期化
   * @param filePath ファイルパス
   * @returns 作成したHouseBookFileProperty
   */
  initWithFilePath: ({
    filePath,
  }: {
    filePath: string;
  }): HouseBookFileProperty => ({
    filePath,
    fileState: HouseBookFileState.Saved,
    isNewFile: false,
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
