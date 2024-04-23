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
import { ThemeColorProvider } from './providers/themes/components/ThemeProvider/LoadThemeProvider';

const App = memo(() => {
  const activeFileId = useRecoilValue(activeFileIdState);

  return (
    <ThemeColorProvider>
      <FileProvider>
        <div className={styles['contents-container']}>
          <Sidebar />
          <div className={styles['editor-block']}>
            {activeFileId !== InactiveFileId && (
              <HouseBookEditor key={activeFileId} fileId={activeFileId} />
            )}
          </div>
        </div>
      </FileProvider>
    </ThemeColorProvider>
  );
});

export { App };
