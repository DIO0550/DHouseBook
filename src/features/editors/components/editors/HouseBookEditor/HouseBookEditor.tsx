import { useEditor } from '@/features/editors/hooks/useEditor';

import { houseBookState } from '@/stores/atoms/houseBookFileState';
import { PurchasedItem } from '@/utils/editors/purchasedItem';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton/AddPurchasedItemButton';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const houseBook = useRecoilValue(houseBookState({ id: fileId }));
  const editor = useEditor({ initialPurchasedItems: houseBook.items });

  return (
    <div>
      <PurchasedItemList
        purchasedItems={houseBook.items}
        handleUpdate={editor.updatePurchaedItem}
      />
      <AddPurchasedItemButton
        handleAddButtonClick={() =>
          editor.addPurhcasedItem(PurchasedItem.init())
        }
      />
    </div>
  );
});

export { HouseBookEditor };
