/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');

contextBridge.exposeInMainWorld('api', {
  saveBook: (filePath: string, jsonStr: string) => {
    void ipcRenderer.invoke('saveBook', filePath, jsonStr);
  },
  loadBook: (filePath: string): unknown | null =>
    ipcRenderer.invoke('loadBook', filePath),

  // TODO: パス確認用のため
  getPath: () => ipcRenderer.invoke('getPath'),
});
