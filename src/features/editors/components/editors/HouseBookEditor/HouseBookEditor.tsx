import { useEditor } from '@/features/editors/hooks/useEditor';

import { houseBookItemsState } from '@/stores/atoms/houseBookFileState';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton/AddPurchasedItemButton';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const houseBook = useRecoilValue(houseBookItemsState({ id: fileId }));
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
