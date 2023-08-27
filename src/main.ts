import { BrowserWindow, app, Menu, session, ipcMain, dialog } from 'electron';
import { searchDevtools } from 'electron-search-devtools';
import path from 'node:path';
import { DialogIpc } from '@/utils/dialogs/dialog';
import fs from 'fs';
import { FileOpenResult, FileOpenStatus } from './types/fileOpen';

const isDev = process.env.NODE_ENV === 'development';

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
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js'),
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

ipcMain.handle(DialogIpc.open, (): FileOpenResult => {
  const filePaths = dialog.showOpenDialogSync(mainWindow, {
    buttonLabel: '開く', // 確認ボタンのラベル
    filters: [
      { name: 'json', extensions: ['json'] },
      { name: 'csv', extensions: ['csv'] },
    ],
    properties: [
      'openFile', // ファイルの選択を許可
      'createDirectory', // ディレクトリの作成を許可 (macOS)
    ],
  });

  if (filePaths === undefined) {
    return {
      status: FileOpenStatus.Cancel,
    };
  }

  try {
    const filePath = filePaths[0];
    const data = fs.readFileSync(filePath);

    return {
      status: FileOpenStatus.OK,
      text: data.toString(),
    };
  } catch (error) {
    if (error instanceof Error) {
      return { status: FileOpenStatus.Error, message: error.message };
    }

    return { status: FileOpenStatus.Error, message: 'Error Read File' };
  }
});
