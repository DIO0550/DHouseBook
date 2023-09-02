import { useEditor } from '@/features/editors/hooks/useEditor';
import { memo } from 'react';
import { PurchasedItem } from '@/utils/editors/purchasedItem';
import { HouseBook } from '@/types/housebook';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton/AddPurchasedItemButton';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';

type Props = {
  initialPurchasedItems?: PurchasedItem[];
};

const PurchasedItemEditor = memo<Props>(({ initialPurchasedItems = [] }) => {
  const editor = useEditor({ initialPurchasedItems });

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          void window.api.saveFile(
            HouseBook.toJson({
              year: 2022,
              month: 12,
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
          editor.addPurhcasedItem(PurchasedItem.init())
        }
      />
    </div>
  );
});

export { PurchasedItemEditor };
