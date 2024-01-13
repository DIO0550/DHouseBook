import { memo } from 'react';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { PurchasedItemRow } from '@/features/editors/components/rows/PurchasedItemRow';
import { PurchasedItemListHeader } from '../PurchasedItemListHeader/PurchasedItemListHeader';
import styles from './PurchasedItemList.module.scss';

type Props = {
  purchasedItems: HouseBookItem[];
  handleUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemList = memo<Props>(({ purchasedItems, handleUpdate }) => (
  <div className={`${styles['purchased-item-list']}`}>
    <PurchasedItemListHeader />
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
