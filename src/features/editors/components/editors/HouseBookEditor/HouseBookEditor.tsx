import { useEditor } from '@/features/editors/hooks/useEditor';

import {
  houseBookDateState,
  houseBookItemsState,
} from '@/stores/atoms/houseBookState';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import useSetHouseBookItemsState from '@/stores/atoms/useSetHouseBookItemsState';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import { HouseBookFileState } from '@/features/files/utils/houseBookFileProperty';
import { PurchasedItemList } from '@/features/editors/components/lists/PurchasedItemList';
import { useSetHouseBookDateState } from '@/stores/atoms/useSetHouseBookDateState';
import { HouseBookEditorNavigation } from '../HouseBookEditorNavigation';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const houseBookItems = useRecoilValue(houseBookItemsState({ id: fileId }));
  const houseBookDate = useRecoilValue(houseBookDateState({ id: fileId }));
  const { setFileState } = useSetHouseBookFilePropertyState({
    id: fileId,
  });
  const { setHouseBookItems } = useSetHouseBookItemsState(fileId);
  const { setHouseBookDate } = useSetHouseBookDateState({
    id: fileId,
  });

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
      <HouseBookEditorNavigation
        date={houseBookDate}
        onAddItem={() => editor.addPurhcasedItem(HouseBookItem.init())}
        onChangeDate={setHouseBookDate}
      />
      <PurchasedItemList
        purchasedItems={editor.purchasedItems}
        handleUpdate={editor.updatePurchaedItem}
      />
    </div>
  );
});

export { HouseBookEditor };
