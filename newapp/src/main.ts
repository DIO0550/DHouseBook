import * as path from 'path';
import { BrowserWindow, app, Menu, session, ipcMain } from 'electron';
import { searchDevtools } from 'electron-search-devtools';
import * as fs from 'fs';

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

// Window 生成
const createWindow = () => {
  const mainWindow = new BrowserWindow({
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
 * ファイルの保存
 * @param filePath 保存するファイルのパス
 * @param bookDate 保存するデータ
 */
ipcMain.handle('saveBook', (_, filePath: string, bookData: string): boolean => {
  try {
    fs.writeFileSync(path.join(__dirname, `${filePath}`), bookData, 'utf8');

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
});

/**
 * ファイルロードする
 * @param filePath 読み込むファイルのパス
 * @returns ファイルあり:JsonObject / ファイルなし:null
 */
ipcMain.handle('loadBook', (_, filePath: string): string | undefined => {
  try {
    const content = fs.readFileSync(
      path.join(__dirname, `${filePath}`),
      'utf8',
    );

    return content;
  } catch (err) {
    return undefined;
  }
});

/**
 * パス確認用（TODO：不要になったら削除する）
 */
ipcMain.handle('getPath', (): string => {
  const dirPath = '';

  return path.join(__dirname, `${dirPath}`);
});
