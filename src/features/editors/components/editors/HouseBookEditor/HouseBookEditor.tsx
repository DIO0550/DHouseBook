import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo } from 'react';
import { PurchasedItemList } from '@/features/editors/components/lists/PurchasedItemList';
import { useHouseBookEditor } from '@/features/editors/hooks/useHouseBookEditor';
import { usePurchasedItemSelect } from '@/features/editors/hooks/usePurchasedItemSelect';
import { useHouseBookEditorMode } from '@/features/editors/hooks/useHouseBookEditorMode';
import { HouseBookEditorNavigation } from '../HouseBookEditorNavigation';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const editor = useHouseBookEditor({ fileId });
  const { selectItemIds, changeSelectItem } = usePurchasedItemSelect();
  const { mode, changeMode } = useHouseBookEditorMode();

  return (
    <div>
      <HouseBookEditorNavigation
        mode={mode}
        date={editor.houseBookDate}
        onChangeMode={changeMode}
        onAddItem={() => editor.addPurchasedItem(HouseBookItem.init())}
        onChangeDate={editor.updateHouseBookDate}
      />
      <PurchasedItemList
        mode={mode}
        purchasedItems={editor.filteredHouseBookItems}
        onUpdateData={editor.updatePurchasedItem}
        selectedItems={selectItemIds}
        onChangeSelect={changeSelectItem}
      />
    </div>
  );
});

export { HouseBookEditor };
