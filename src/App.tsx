import { memo } from 'react';
import { Sidebar } from '@/features/files/components/Sidebars/Sidebar';
import { useRecoilValue } from 'recoil';
import styles from './App.module.scss';
import {
  useOpenHouseFile,
  HouseFileOpenStatus,
} from './features/files/hooks/useOpenHouseFile';
import { HouseBookEditor } from './features/editors/components/editors/HouseBookEditor/HouseBookEditor';
import {
  InactiveFileId,
  activeFileIdState,
} from './stores/atoms/activeFileIdState';

const App = memo(() => {
  // const [houseBook, setHouseBook] = useState<HouseBook | undefined>(undefined);
  // const { openHousBookFile } = useSetHouseBookState();
  const { openStatus, openFile } = useOpenHouseFile();
  const activeFileId = useRecoilValue(activeFileIdState);
  const handleOpen = () => {
    void openFile();
  };

  return (
    <div className={styles['contents-container']}>
      <Sidebar />
      {openStatus === HouseFileOpenStatus.Open && <div>ファイルオープン中</div>}
      <button type="button" onClick={handleOpen}>
        開く
      </button>
      {activeFileId !== InactiveFileId && (
        <HouseBookEditor key={activeFileId} fileId={activeFileId} />
      )}
    </div>
  );
});

export default App;
