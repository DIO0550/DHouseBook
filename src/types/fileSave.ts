export const FileSaveStatus = {
  OK: 'OK',
  Cancel: 'Cancel',
  Error: 'Error',
} as const;

type FileSaveResultOK = {
  status: typeof FileSaveStatus.OK;
  filePath: string;
};

type FileSaveResultCancel = {
  status: typeof FileSaveStatus.Cancel;
};

type FileSaveResultError = {
  status: typeof FileSaveStatus.Error;
  message?: string;
};

export type FileSaveResult =
  | FileSaveResultOK
  | FileSaveResultCancel
  | FileSaveResultError;
