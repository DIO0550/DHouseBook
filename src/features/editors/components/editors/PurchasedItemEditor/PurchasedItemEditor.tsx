import { useEditor } from '@/features/editors/hooks/useEditor';
import { memo } from 'react';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { HouseBookData } from '@/features/files/utils/houseBookData';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton/AddPurchasedItemButton';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';

type Props = {
  initialPurchasedItems?: HouseBookItem[];
};

const PurchasedItemEditor = memo<Props>(({ initialPurchasedItems = [] }) => {
  const editor = useEditor({ initialPurchasedItems });

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          void window.api.saveFile(
            HouseBookData.toJson({
              date: {
                year: 2022,
                month: 12,
              },
              items: editor.purchasedItems,
            }),
          );
        }}
      >
        保存
      </button>
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

export { PurchasedItemEditor };
