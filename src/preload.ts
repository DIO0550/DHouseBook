import { contextBridge, ipcRenderer } from 'electron';
import { DialogIpc } from './utils/dialogs/dialog';

const openFile = () => ipcRenderer.invoke(DialogIpc.open);

contextBridge.exposeInMainWorld('api', {
  openFile,
});
