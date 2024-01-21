import { memo } from 'react';
import { Sidebar } from '@/features/files/components/Sidebars/Sidebar';
import { useRecoilValue } from 'recoil';
import { FileProvider } from '@/providers/files/components';
import styles from './App.module.scss';
import { HouseBookEditor } from './features/editors/components/editors/HouseBookEditor/HouseBookEditor';
import {
  InactiveFileId,
  activeFileIdState,
} from './stores/atoms/activeFileIdState';
import { useCreateFile } from './features/files/hooks/useCreateFile';

const App = memo(() => {
  const activeFileId = useRecoilValue(activeFileIdState);
  const { createNewFile } = useCreateFile();

  return (
    <FileProvider>
      <div className={styles['contents-container']}>
        <Sidebar />
        <button type="button" onClick={createNewFile}>
          新規作成
        </button>
        {activeFileId !== InactiveFileId && (
          <HouseBookEditor key={activeFileId} fileId={activeFileId} />
        )}
      </div>
    </FileProvider>
  );
});

export default App;
