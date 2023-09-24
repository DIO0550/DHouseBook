import { useEditor } from '@/features/editors/hooks/useEditor';

import { houseBookItemsState } from '@/stores/atoms/houseBookFileState';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton/AddPurchasedItemButton';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const houseBook = useRecoilValue(houseBookItemsState({ id: fileId }));
  const editor = useEditor({ initialPurchasedItems: houseBook });

  return (
    <div>
      <PurchasedItemList
        purchasedItems={houseBook}
        handleUpdate={editor.updatePurchaedItem}
      />
      <AddPurchasedItemButton
        handleAddButtonClick={() =>
          editor.addPurhcasedItem(HouseBookItem.init())
        }
      />
    </div>
  );
});

export { HouseBookEditor };
