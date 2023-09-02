import { contextBridge, ipcRenderer } from 'electron';
import { DialogIpc } from './utils/dialogs/dialog';

/**
 * ファイルを開く
 * @returns ファイル開く処理
 */
const openFile = () => ipcRenderer.invoke(DialogIpc.Open);

/**
 * ファイルを保存する
 * @returns ファイル保存処理
 */
const saveFile = (data: string) => ipcRenderer.invoke(DialogIpc.Save, data);

contextBridge.exposeInMainWorld('api', {
  openFile,
  saveFile,
});
