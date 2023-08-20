import { memo } from 'react';
import { PurchasedItem } from '@/utils/editors/purchasedItem';
import { UpdateEntity } from '@/utils/editors/purchasedItemsEntity';
import { PurchasedItemRow } from '@/features/editors/components/rows/PurchasedItemRow';

type Props = {
  purchasedItems: PurchasedItem[];
  handleUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemList = memo<Props>(({ purchasedItems }) => (
  <div>
    {purchasedItems.map((item) => (
      <PurchasedItemRow
        name={item.name}
        price={String(item.price)}
        type={item.type}
        date={item.date}
      />
    ))}
  </div>
));

export { PurchasedItemList };
