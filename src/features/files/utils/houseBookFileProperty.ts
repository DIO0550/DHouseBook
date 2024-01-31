type HouseBookFilePath = string | typeof HouseBookFileProperty.newFilePath;

export const FileState = {
  NewFile: 'NewFile',
  Saved: 'Saved',
  Dirty: 'Dirty',
} as const;

export type FileState = (typeof FileState)[keyof typeof FileState];

export type HouseBookFileProperty = {
  filePath: HouseBookFilePath;
  fileState: FileState;
};

export const HouseBookFileProperty = {
  newFilePath: '',
  /**
   * 初期化
   * @returns 作成したHouseBookFileProperty
   */
  init: (): HouseBookFileProperty => ({
    filePath: HouseBookFileProperty.newFilePath,
    fileState: FileState.NewFile,
  }),

  /**
   * オープンファイルによるHouseBookFilePropertyの初期化
   * @param filePath ファイルパス
   * @returns 作成したHouseBookFileProperty
   */
  initWithFilePath: ({ filePath }: { filePath: string }) => ({
    filePath,
    fileState: FileState.Saved,
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
