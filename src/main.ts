import { BrowserWindow, app, Menu, session, ipcMain, dialog } from 'electron';
import { searchDevtools } from 'electron-search-devtools';
import path from 'node:path';
import { DialogIpc, FileFilters } from '@/utils/dialogs/dialog';
import fs from 'fs';
import { FileOpenResult, FileOpenStatus } from './types/fileOpen';
import { FileSaveResult, FileSaveStatus } from './types/fileSave';
import { OverwriteSaveFileInfo } from './types/global';
import {
  FileOverwriteSaveResult,
  FileOverwriteSaveStatus,
} from './types/fileOverwriteSave';

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

// 開く
ipcMain.handle(DialogIpc.Open, (): FileOpenResult => {
  const filePaths = dialog.showOpenDialogSync(mainWindow, {
    buttonLabel: '開く', // 確認ボタンのラベル
    filters: FileFilters,
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
      filePath,
      text: data.toString(),
    };
  } catch (e) {
    if (e instanceof Error) {
      return { status: FileOpenStatus.Error, message: e.message };
    }

    return { status: FileOpenStatus.Error, message: 'Error Open File' };
  }
});

// 保存
ipcMain.handle(DialogIpc.Save, (_, contents: string): FileSaveResult => {
  const filePath = dialog.showSaveDialogSync(mainWindow, {
    buttonLabel: '保存',
    filters: FileFilters,
    properties: ['createDirectory'],
  });

  if (filePath === undefined) {
    return { status: FileSaveStatus.Cancel };
  }

  try {
    fs.writeFileSync(filePath, contents);

    return {
      status: FileSaveStatus.OK,
      filePath,
    };
  } catch (e) {
    if (e instanceof Error) {
      return { status: FileSaveStatus.Error, message: e.message };
    }

    return { status: FileSaveStatus.Error, message: 'Error Save File' };
  }
});

// 上書き保存
ipcMain.handle(
  DialogIpc.OverwriteSave,
  (
    _,
    { filePath, contents }: OverwriteSaveFileInfo,
  ): FileOverwriteSaveResult => {
    try {
      fs.writeFileSync(filePath, contents);

      return {
        status: FileOverwriteSaveStatus.OK,
        filePath,
      };
    } catch (e) {
      if (e instanceof Error) {
        return { status: FileOverwriteSaveStatus.Error, message: e.message };
      }

      return {
        status: FileOverwriteSaveStatus.Error,
        message: 'Error Overwrite Save File',
      };
    }
  },
);
