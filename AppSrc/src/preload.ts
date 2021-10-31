const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');

contextBridge.exposeInMainWorld('api', {
  saveBook: (filePath: string, jsonStr: string) => {
    ipcRenderer.invoke('saveBook', filePath, jsonStr);
  },
  loadBook: (filePath: string) => {},
});
