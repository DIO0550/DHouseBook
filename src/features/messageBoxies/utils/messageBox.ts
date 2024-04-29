const MessageBox = {
  syncShow: (options: Electron.MessageBoxOptions) =>
    window.api.invoke.syncShowMessageBox(options),
};

export { MessageBox };
