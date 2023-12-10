export const FileOverwriteSaveStatus = {
  OK: 'OK',
  Error: 'Error',
} as const;

type FileSaveResultOK = {
  status: typeof FileOverwriteSaveStatus.OK;
  filePath: string;
};
type FileSaveResultError = {
  status: typeof FileOverwriteSaveStatus.Error;
  message?: string;
};

export type FileOverwriteSaveResult = FileSaveResultOK | FileSaveResultError;
