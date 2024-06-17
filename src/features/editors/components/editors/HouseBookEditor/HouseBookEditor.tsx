import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo } from 'react';
import { PurchasedItemList } from '@/features/editors/components/lists/PurchasedItemList';
import { useHouseBookEditor } from '@/features/editors/hooks/useHouseBookEditor';
import { HouseBookEditorNavigation } from '../HouseBookEditorNavigation';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const editor = useHouseBookEditor({ fileId });

  return (
    <div>
      <HouseBookEditorNavigation
        date={editor.houseBookDate}
        onAddItem={() => editor.addPurhcasedItem(HouseBookItem.init())}
        onChangeDate={editor.updateHouseBookDate}
      />
      <PurchasedItemList
        purchasedItems={editor.purchasedItems}
        handleUpdate={editor.updatePurchaedItem}
      />
    </div>
  );
});

export { HouseBookEditor };
