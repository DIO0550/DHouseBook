import { useEditor } from '@/features/editors/hooks/useEditor';
import { memo } from 'react';
import { PurchasedItem } from '@/utils/editors/purchasedItem';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton/AddPurchasedItemButton';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';

type Props = {
  initialPurchasedItems?: PurchasedItem[];
};

const PurchasedItemEditor = memo<Props>(({ initialPurchasedItems = [] }) => {
  const editor = useEditor({ initialPurchasedItems });

  return (
    <div>
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
