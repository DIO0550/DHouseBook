/* eslint-disable @typescript-eslint/no-explicit-any */
import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron';
import { DialogIpc } from './utils/dialogs/dialog';
import { OverwriteSaveFileInfo } from './types/global';
import { FileOpenResult } from './types/fileOpen';

/**
 * ファイルを開く
 * @returns ファイル開く処理
 */
const invokeOpenFile = () => ipcRenderer.invoke(DialogIpc.Invoke.Open);

// メインプロセス => レンダラープロセス
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
  ipcRenderer.invoke(DialogIpc.Invoke.Open, contents);

/**
 * ファイルを上書き保存する
 * @param info 保存データの情報
 * @returns ファイル上書き保存処理
 */
const invokeOverwriteSaveFile = (info: OverwriteSaveFileInfo) =>
  ipcRenderer.invoke(DialogIpc.Invoke.OverwriteSave, info);

contextBridge.exposeInMainWorld('api', {
  on: {
    openFile: onOpenFile,
  },
  invoke: {
    openFile: invokeOpenFile,
    saveFile: invokeSaveFile,
    overwriteSaveFile: invokeOverwriteSaveFile,
  },
});
