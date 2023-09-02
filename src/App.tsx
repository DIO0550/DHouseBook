import { useState } from 'react';
import { FileOpenStatus } from './types/fileOpen';
import { PurchasedItemEditor } from './features/editors/components/editors/PurchasedItemEditor';
import { HouseBook } from './types/housebook';

const App = () => {
  const [houseBook, setHouseBook] = useState<HouseBook | undefined>(undefined);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          void window.api.openFile().then((result) => {
            if (result.status === FileOpenStatus.OK) {
              const book = HouseBook.fromJsonString(result.text || '');
              setHouseBook(book);
            }
          });
        }}
      >
        開く
      </button>
      <button
        type="button"
        onClick={() => {
          void window.api.saveFile(HouseBook.toJson(houseBook!));
        }}
      >
        保存
      </button>
      {/* 一旦読み込みするまでは何も表示しない */}
      {houseBook && (
        <PurchasedItemEditor initialPurchasedItems={houseBook?.items} />
      )}
    </div>
  );
};

export default App;
