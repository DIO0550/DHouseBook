const FilePath = {
  getFileName: (filePath: string) => filePath.replace(/^.*(\\|\/|:)/, ''),
} as const;

export { FilePath };
