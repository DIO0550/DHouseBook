// TODO: contextBridge.exposeInMainWorldつかって、ipcRendererのimportはしない
import { ipcRenderer } from 'electron';
import { DialogIpc } from './utils/dialogs/dialog';

const App = () => (
  <div>
    hoge
    <button type="button" onClick={() => ipcRenderer.invoke(DialogIpc.open)}>
      開く
    </button>
  </div>
);

export default App;
