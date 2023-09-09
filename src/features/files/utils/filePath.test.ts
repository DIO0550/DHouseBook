import { FilePath } from './filePath';

describe('FilePath', () => {
  describe('getFileName', () => {
    it('windows', () => {
      const windowsPath = 'c:\\temp\\images\\cat.jpg';

      const sut = FilePath.getFileName(windowsPath);
      expect(sut).toBe('cat.jpg');
    });
  });
});
