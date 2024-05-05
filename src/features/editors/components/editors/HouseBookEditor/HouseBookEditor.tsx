import { useEditor } from '@/features/editors/hooks/useEditor';

import { houseBookItemsState } from '@/stores/atoms/houseBookState';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import useSetHouseBookItemsState from '@/stores/atoms/useSetHouseBookItemsState';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import { HouseBookFileState } from '@/features/files/utils/houseBookFileProperty';
import { PurchasedItemList } from '@/features/editors/components/lists/PurchasedItemList';
import { AddPurchasedItemButton } from '@/features/editors/components/editors/AddPurchasedItemButton';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const houseBookItems = useRecoilValue(houseBookItemsState({ id: fileId }));
  const { setFileState } = useSetHouseBookFilePropertyState({
    id: fileId,
  });
  const { setHouseBookItems } = useSetHouseBookItemsState(fileId);
  const editor = useEditor({ initialPurchasedItems: houseBookItems });
  const isFirstRef = useRef(true);

  useEffect(() => {
    if (isFirstRef.current) {
      isFirstRef.current = false;
    } else {
      setHouseBookItems(editor.purchasedItems);
      setFileState(HouseBookFileState.Dirty);
    }
  }, [editor.purchasedItems, setFileState, setHouseBookItems]);

  return (
    <div>
      <PurchasedItemList
        purchasedItems={editor.purchasedItems}
        handleUpdate={editor.updatePurchaedItem}
      />
      <AddPurchasedItemButton
        onClick={() => editor.addPurhcasedItem(HouseBookItem.init())}
      />
    </div>
  );
});

export { HouseBookEditor };
