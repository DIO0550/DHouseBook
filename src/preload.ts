/* eslint-disable @typescript-eslint/no-explicit-any */
import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron';
import { DialogIpc } from './utils/dialogs/dialog';
import { OverwriteSaveFileInfo } from './types/global';
import { FileOpenResult } from './types/fileOpen';
import { ThemeColor } from './providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeColorIpc } from './utils/ipcs/themeColors';

/**
 * ファイルを開く
 * @returns ファイル開く処理
 */
const invokeOpenFile = () => ipcRenderer.invoke(DialogIpc.Invoke.Open);

//  レンダラープロセス => メインプロセス
const onOpenFile = (listener: (result: FileOpenResult) => void) => {
  ipcRenderer.on(
    DialogIpc.On.Open,
    (_: IpcRendererEvent, result: FileOpenResult) => listener(result),
  );

  return () => {
    ipcRenderer.removeAllListeners(DialogIpc.On.Open);
  };
};

/**
 * ファイルを保存する
 * @param contents 保存するデータ
 * @returns ファイル保存処理
 */
const invokeSaveFile = (contents: string) =>
  ipcRenderer.invoke(DialogIpc.Invoke.Save, contents);

/**
 * ファイル保存
 * レンダラープロセス => メインプロセス
 */
const onSaveFile = (listener: () => void) => {
  ipcRenderer.on(DialogIpc.On.Save, (_: IpcRendererEvent) => listener());

  return () => {
    ipcRenderer.removeAllListeners(DialogIpc.On.Save);
  };
};

/**
 * ファイルを上書き保存する
 * @param info 保存データの情報
 * @returns ファイル上書き保存処理
 */
const invokeOverwriteSaveFile = (info: OverwriteSaveFileInfo) =>
  ipcRenderer.invoke(DialogIpc.Invoke.OverwriteSave, info);

/**
 * ファイル新規作成
 * @returns ファイル新規作成処理
 */
const invokeCreateNewFile = () =>
  ipcRenderer.invoke(DialogIpc.Invoke.CreateNewFile);

const onCreateNewFile = (listener: () => void) => {
  ipcRenderer.on(DialogIpc.On.CreateNewFile, (_: IpcRendererEvent) =>
    listener(),
  );

  return () => {
    ipcRenderer.removeAllListeners(DialogIpc.On.CreateNewFile);
  };
};

// テーマカラー変更
const onChangeThemeColor = (listener: (value: ThemeColor) => void) => {
  ipcRenderer.on(
    ThemeColorIpc.On.Change,
    (_: IpcRendererEvent, value: ThemeColor) => listener(value),
  );

  return () => {
    ipcRenderer.removeAllListeners(ThemeColorIpc.On.Change);
  };
};

const invokeInitialThemeColor = () =>
  ipcRenderer.invoke(ThemeColorIpc.Invoke.InitialValue);

const invokeSyncShowMessageBox = (options: Electron.MessageBoxOptions) =>
  ipcRenderer.invoke(DialogIpc.Invoke.ShowMessageBoxSync, options);

const myApi = {
  on: {
    openFile: onOpenFile,
    saveFile: onSaveFile,
    createNewFile: onCreateNewFile,
    changeThemeColor: onChangeThemeColor,
  },
  invoke: {
    openFile: invokeOpenFile,
    saveFile: invokeSaveFile,
    overwriteSaveFile: invokeOverwriteSaveFile,
    createNewFile: invokeCreateNewFile,
    initialThemeColor: invokeInitialThemeColor,
    syncShowMessageBox: invokeSyncShowMessageBox,
  },
} as const;

contextBridge.exposeInMainWorld('api', myApi);
