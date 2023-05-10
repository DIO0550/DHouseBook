import { contextBridge, ipcRenderer } from 'electron';
import { DialogIpc } from './utils/dialogs/dialog';

const openFile = async () => {
  await ipcRenderer.invoke(DialogIpc.open);
};
contextBridge.exposeInMainWorld('api', {
  openFile,
});
