/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path';
import { BrowserWindow, app, session, ipcMain } from 'electron';
import { searchDevtools } from 'electron-search-devtools';

const fs = require('fs');

const isDev = process.env.NODE_ENV === 'development';

const execPath =
  process.platform === 'win32'
    ? '../node_modules/electron/dist/electron.exe'
    : '../node_modules/.bin/electron';

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.resolve(__dirname, execPath),
    forceHardReset: true,
    hardResetMethod: 'exit',
  });
}

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
  void mainWindow.loadFile('dist/index.html');
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

// ===================
// ipc通信
// ===================

/**
 * ファイルの保存
 * @param filePath 保存するファイルのパス
 * @param bookDate 保存するデータ
 */
ipcMain.handle('saveBook', (event, filePath: string, bookData: string) => {
  try {
    fs.writeFileSync(filePath, bookData, 'utf8');
  } catch (err) {
    console.log(err);
  }
});

/**
 * ファイルロードする
 * @param filePath 読み込むファイルのパス
 * @returns ファイルあり:JsonObject / ファイルなし:null
 */
ipcMain.handle('loadBook', (event, filePath: string): unknown | null => {
  let jsonObject: unknown;
  try {
    jsonObject = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    return null;
  }

  return jsonObject;
});
