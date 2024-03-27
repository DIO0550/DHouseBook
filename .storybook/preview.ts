import '../src/index.scss';
import { FileOpenResult } from '../src/types/fileOpen';
import { FileSaveResult } from '../src/types/fileSave';
import '../src/types/global';
import { fn } from '@storybook/test';
import { OverwriteSaveFileInfo } from '../src/types/global';

global.window.api = {
  on: {
    openFile: fn(),
    saveFile: fn(),
    createNewFile: fn(),
    changeThemeColor: fn(),
  },
  invoke: {
    openFile: fn(),
    saveFile: fn(),
    overwriteSaveFile: fn(),
    createNewFile: fn(),
    changeThemeColor: fn(),
  },
};

const parameters = {
  // actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default parameters;
