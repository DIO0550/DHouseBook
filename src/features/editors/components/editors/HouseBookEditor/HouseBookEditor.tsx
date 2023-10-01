import { useEditor } from '@/features/editors/hooks/useEditor';

import { houseBookItemsState } from '@/stores/atoms/houseBookState';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import useSetHouseBookItemsState from '@/stores/atoms/useSetHouseBookItemsState';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton/AddPurchasedItemButton';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const houseBookItems = useRecoilValue(houseBookItemsState({ id: fileId }));
  const { setIsDirty } = useSetHouseBookFilePropertyState({ id: fileId });
  const { setHouseBookItems } = useSetHouseBookItemsState(fileId);
  const editor = useEditor({ initialPurchasedItems: houseBookItems });
  const isFirstRef = useRef(true);

  useEffect(() => {
    if (isFirstRef.current) {
      isFirstRef.current = false;
    } else {
      setHouseBookItems(editor.purchasedItems);
      setIsDirty(true);
    }
  }, [editor.purchasedItems, setHouseBookItems, setIsDirty]);

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
