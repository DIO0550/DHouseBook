import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { memo } from 'react';
import { PurchasedItemList } from '@/features/editors/components/lists/PurchasedItemList';
import { useHouseBookEditor } from '@/features/editors/hooks/useHouseBookEditor';
import { usePurchasedItemSelect } from '@/features/editors/hooks/usePurchasedItemSelect';
import { useHouseBookEditorMode } from '@/features/editors/hooks/useHouseBookEditorMode';
import { HouseBookEditorNavigation } from '../HouseBookEditorNavigation';
import styles from './HouseBookEditor.module.scss';

const HouseBookEditor = memo(({ fileId }: { fileId: string }) => {
  const editor = useHouseBookEditor({ fileId });
  const { selectItemIds, changeSelectItem } = usePurchasedItemSelect();
  const { mode, changeMode } = useHouseBookEditorMode();

  return (
    <div className={`${styles['editor-container']}`}>
      <div>
        <HouseBookEditorNavigation
          mode={mode}
          date={editor.houseBookDate}
          onChangeMode={changeMode}
          onAddItem={() => editor.addPurchasedItem(HouseBookItem.init())}
          onChangeDate={editor.updateHouseBookDate}
        />
      </div>
      <div className={`${styles['editor-list']}`}>
        <PurchasedItemList
          mode={mode}
          purchasedItems={editor.filteredHouseBookItems}
          onUpdateData={editor.updatePurchasedItem}
          selectedItems={selectItemIds}
          onChangeSelect={changeSelectItem}
        />
      </div>
    </div>
  );
});

export { HouseBookEditor };
