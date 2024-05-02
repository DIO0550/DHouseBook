import { useEditor } from '@/features/editors/hooks/useEditor';

import { houseBookItemsState } from '@/stores/atoms/houseBookState';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import useSetHouseBookItemsState from '@/stores/atoms/useSetHouseBookItemsState';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import { HouseBookFileState } from '@/features/files/utils/houseBookFileProperty';
import { useHouseBookFileClose } from '@/features/files/hooks/useHouseBookFileClose';
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
  const { closeHouseBookFile } = useHouseBookFileClose({ id: fileId });

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
        handleAddButtonClick={() =>
          editor.addPurhcasedItem(HouseBookItem.init())
        }
      />
      {/* TODO:閉じるボタン  */}
      <button
        type="button"
        onClick={() => {
          void closeHouseBookFile();
        }}
      >
        閉じる
      </button>
    </div>
  );
});

export { HouseBookEditor };
