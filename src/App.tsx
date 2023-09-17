import { memo, useState } from 'react';
import { HouseBook } from '@/features/files/utils/houseBook';
import { FileOpenStatus } from '@/types/fileOpen';
import { PurchasedItemEditor } from '@/features/editors/components/editors/PurchasedItemEditor';
import { Sidebar } from '@/features/files/components/Sidebars/Sidebar';
import { HouseBookFile } from './features/files/utils/houseBookFile';
import styles from './App.module.scss';
import { useSetHouseBookState } from './stores/atoms/useSetHouseBookState';

const App = memo(() => {
  const [houseBook, setHouseBook] = useState<HouseBook | undefined>(undefined);
  const { openHousBookFile } = useSetHouseBookState();

  return (
    <div className={styles['contents-container']}>
      <Sidebar />
      <button
        type="button"
        onClick={() => {
          void window.api.openFile().then((result) => {
            if (result.status === FileOpenStatus.OK) {
              const book = HouseBook.fromJsonString(result.text || '');
              setHouseBook(book);

              const file = HouseBookFile.initByOpenFile({
                filePath: result.filePath,
                dateStr: '202202',
              });

              if (book) {
                openHousBookFile({ newFile: file, newBook: book });
              }
            }
          });
        }}
      >
        開く
      </button>
      {/* 一旦読み込みするまでは何も表示しない */}
      {houseBook && (
        <PurchasedItemEditor initialPurchasedItems={houseBook?.items} />
      )}
    </div>
  );
});

export default App;
