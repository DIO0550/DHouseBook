import { useEditor } from '@/features/editors/hooks/useEditor';
import { memo } from 'react';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { PurchasedItemList } from '../../lists/PurchasedItemList/PurchasedItemList';
import { HouseBookEditorNavigation } from '../HouseBookEditorNavigation';

type Props = {
  initialPurchasedItems?: HouseBookItem[];
};

const PurchasedItemEditor = memo<Props>(({ initialPurchasedItems = [] }) => {
  const editor = useEditor({ initialPurchasedItems });

  return (
    <div>
      <HouseBookEditorNavigation
        onAddItem={() => editor.addPurhcasedItem(HouseBookItem.init())}
      />
      <PurchasedItemList
        purchasedItems={editor.purchasedItems}
        handleUpdate={editor.updatePurchaedItem}
      />
    </div>
  );
});

export { PurchasedItemEditor };
