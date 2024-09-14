import '../src/index.scss';
import '../src/types/global';
import { fn } from '@storybook/test';

global.window.api = {
  on: {
    openFile: fn(() => fn()),
    saveFile: fn(() => fn()),
    createNewFile: fn(() => fn()),
    changeThemeColor: fn(() => fn()),
  },
  invoke: {
    openFile: fn(),
    saveFile: fn(),
    overwriteSaveFile: fn(),
    createNewFile: fn(),
    changeThemeColor: fn(),
    initialThemeColor: fn(),
    syncShowMessageBox: fn(),
  },
};

const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default parameters;
