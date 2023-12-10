import { contextBridge, ipcRenderer } from 'electron';
import { DialogIpc } from './utils/dialogs/dialog';
import { OverwriteSaveFileInfo } from './types/global';

/**
 * ファイルを開く
 * @returns ファイル開く処理
 */
const openFile = () => ipcRenderer.invoke(DialogIpc.Open);

/**
 * ファイルを保存する
 * @param contents 保存するデータ
 * @returns ファイル保存処理
 */
const saveFile = (contents: string) =>
  ipcRenderer.invoke(DialogIpc.Save, contents);

/**
 * ファイルを上書き保存する
 * @param info 保存データの情報
 * @returns ファイル上書き保存処理
 */
const overwriteSaveFile = (info: OverwriteSaveFileInfo) =>
  ipcRenderer.invoke(DialogIpc.OverwriteSave, info);

contextBridge.exposeInMainWorld('api', {
  openFile,
  saveFile,
  overwriteSaveFile,
});
