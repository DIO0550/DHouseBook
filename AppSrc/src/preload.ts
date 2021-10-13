const { contextBridge, ipcRenderer} = require("electron");
const fs = require('fs');

contextBridge.exposeInMainWorld(
    "api", {
        saveBook:(filePath: string, jsonStr: string) => {
            console.info("call saveBook")
            ipcRenderer.invoke("saveBook", filePath, jsonStr)
        },
    }
);