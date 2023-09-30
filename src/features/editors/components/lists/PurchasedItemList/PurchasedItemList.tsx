import { memo } from 'react';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { PurchasedItemRow } from '@/features/editors/components/rows/PurchasedItemRow';

type Props = {
  purchasedItems: HouseBookItem[];
  handleUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemList = memo<Props>(({ purchasedItems, handleUpdate }) => (
  <div>
    {purchasedItems.map((item) => (
      <PurchasedItemRow
        key={item.id}
        id={item.id}
        name={item.name}
        price={String(item.price)}
        type={item.type}
        date={item.date}
        handleUpdate={handleUpdate}
      />
    ))}
  </div>
));

export { PurchasedItemList };
