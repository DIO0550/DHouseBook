const FilePath = {
  getFileName: (filePath: string) => filePath.replace(/^.*(\\|\/|:)/, ''),
};

export { FilePath };
