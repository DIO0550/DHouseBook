import { memo, useState } from 'react';
import { HouseBook } from '@/features/files/utils/houseBook';
import { FileOpenStatus } from '@/types/fileOpen';
import { PurchasedItemEditor } from '@/features/editors/components/editors/PurchasedItemEditor';
import { v4 as uuidv4 } from 'uuid';
import { Sidebar } from '@/features/files/components/Sidebars/Sidebar';
import { useHouseBookFiles } from './features/files/hooks/useHouseBookFiles';
import { HouseBookFile } from './features/files/utils/houseBookFile';
import styles from './App.module.scss';

const App = memo(() => {
  const [houseBook, setHouseBook] = useState<HouseBook | undefined>(undefined);
  const { files, addFile } = useHouseBookFiles();

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

              if (book) {
                const bookFile: HouseBookFile = {
                  id: uuidv4(),
                  filePath: result.filePath,
                  houseBook: book,
                  isDirty: false,
                };

                addFile(bookFile);
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
