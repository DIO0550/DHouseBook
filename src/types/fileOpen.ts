export const FileOpenStatus = {
  OK: 'OK',
  Cancel: 'Cancel',
  Error: 'Error',
} as const;

type FileOpenResultOK = {
  status: typeof FileOpenStatus.OK;
  filePath: string;
  text?: string;
};

type FileOpenResultCancel = {
  status: typeof FileOpenStatus.Cancel;
};

type FileOpenResultError = {
  status: typeof FileOpenStatus.Error;
  message?: string;
};

export type FileOpenResult =
  | FileOpenResultOK
  | FileOpenResultCancel
  | FileOpenResultError;
