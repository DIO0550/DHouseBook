import { useState } from 'react';
import { FileOpenStatus } from './types/fileOpen';

const App = () => {
  const [file, setFile] = useState<string>('');

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          void window.api.openFile().then((result) => {
            console.log(result);
            if (result.status === FileOpenStatus.OK) {
              setFile(result.text || '');
            }
          });
        }}
      >
        開く
      </button>
      <div>
        File:
        <div>{file}</div>
      </div>
    </div>
  );
};

export default App;
