import { useEditor } from '@/features/editors/hooks/useEditor';

import { houseBookItemsState } from '@/stores/atoms/houseBookFileState';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton/AddPurchasedItemButton';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const houseBookItems = useRecoilValue(houseBookItemsState({ id: fileId }));
  const setHouseBookItems = useSetRecoilState(
    houseBookItemsState({ id: fileId }),
  );
  const editor = useEditor({ initialPurchasedItems: houseBookItems });
  useEffect(() => {
    setHouseBookItems(editor.purchasedItems);
  }, [editor.purchasedItems, setHouseBookItems]);

  return (
    <div>
      <PurchasedItemList
        purchasedItems={editor.purchasedItems}
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
