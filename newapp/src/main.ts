import * as path from 'path';
import { BrowserWindow, app, Menu, session, ipcMain, dialog } from 'electron';
import { searchDevtools } from 'electron-search-devtools';
import { DialogIpc } from '@/utils/dialogs/dialog';

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
  require('electron-reload')(__dirname, {
    electron: path.join(
      __dirname,
      '..',
      '..',
      'node_modules',
      '.bin',
      'electron',
    ),
    forceHardReset: true,
    hardResetMethod: 'exit',
  });
}

// アプリケーションメニュー
const appMenu = Menu.buildFromTemplate([
  {
    label: 'ファイル',
    submenu: [{ role: 'close', label: 'ウィンドウを閉じる' }],
  },
  {
    label: '編集',
    submenu: [
      { role: 'undo', label: '元に戻す' },
      { role: 'redo', label: 'やり直す' },
      { type: 'separator' },
      { role: 'cut', label: '切り取り' },
      { role: 'copy', label: 'コピー' },
      { role: 'paste', label: '貼り付け' },
    ],
  },
]);

Menu.setApplicationMenu(appMenu);
let mainWindow: BrowserWindow;
// Window 生成
const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  // レンダラープロセスをロード
  void mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

// アプリ初期化時
void app.whenReady().then(async () => {
  if (isDev) {
    const devtools = await searchDevtools('REACT');
    if (devtools) {
      await session.defaultSession.loadExtension(devtools, {
        allowFileAccess: true,
      });
    }
  }
  createWindow();
});

// 全てのWindowsが閉じられたとき
app.once('window-all-closed', () => app.quit());

/**
 * パス確認用（TODO：不要になったら削除する）
 */
ipcMain.handle('getPath', (): string => {
  const dirPath = '';

  return path.join(__dirname, `${dirPath}`);
});

ipcMain.handle(DialogIpc.open, () => {
  dialog.showOpenDialogSync(mainWindow, {
    buttonLabel: '開く', // 確認ボタンのラベル
    filters: [{ name: 'Text', extensions: ['txt', 'text'] }],
    properties: [
      'openFile', // ファイルの選択を許可
      'createDirectory', // ディレクトリの作成を許可 (macOS)
    ],
  });
});
