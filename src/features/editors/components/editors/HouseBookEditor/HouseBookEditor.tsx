import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo } from 'react';
import { PurchasedItemList } from '@/features/editors/components/lists/PurchasedItemList';
import { useHouseBookEditor } from '@/features/editors/hooks/useHouseBookEditor';
import { usePurchasedItemSelect } from '@/features/editors/hooks/usePurchasedItemSelect';
import { HouseBookEditorNavigation } from '../HouseBookEditorNavigation';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const editor = useHouseBookEditor({ fileId });
  const { selectItemIds, selectedItem } = usePurchasedItemSelect();

  return (
    <div>
      <HouseBookEditorNavigation
        date={editor.houseBookDate}
        onAddItem={() => editor.addPurchasedItem(HouseBookItem.init())}
        onChangeDate={editor.updateHouseBookDate}
      />
      <PurchasedItemList
        purchasedItems={editor.filteredHouseBookItems}
        onUpdateData={editor.updatePurchasedItem}
        selectedItems={selectItemIds}
        onChangeSelect={selectedItem}
      />
    </div>
  );
});

export { HouseBookEditor };
