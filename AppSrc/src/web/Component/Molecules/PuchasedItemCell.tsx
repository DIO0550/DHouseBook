import { FC } from 'react';
import usePurchasedItem from '../../CustomHook/usePurchasedItem';

import styles from './PurchasedItemCell.module.scss';

type props = {
  // id
  id: string;
};

const PurchasedItemCell: FC<props> = ({ id }) => {
  const { purchasedItemList, selectById, onInputPurchasedItem } =
    usePurchasedItem();
  const purchasedItem = selectById(purchasedItemList, id);
  console.log(purchasedItem);
  return (
    <div className={styles['purchased-item-cell']}>
      <div
        contentEditable='true'
        className={styles['purchased-item-div']}
        onInput={(e) =>
          onInputPurchasedItem(id, 'name', e.currentTarget.innerHTML)
        }
      >
        {purchasedItem?.name}
      </div>
      <div
        contentEditable='true'
        className={styles['purchased-item-div']}
        onInput={(e) =>
          onInputPurchasedItem(id, 'price', e.currentTarget.innerHTML)
        }
      >
        {purchasedItem?.price}
      </div>
      <div
        contentEditable='true'
        className={styles['purchased-item-div']}
        onInput={(e) =>
          onInputPurchasedItem(id, 'type', e.currentTarget.innerHTML)
        }
      >
        {purchasedItem?.type}
      </div>
      <div
        contentEditable='true'
        className={styles['purchased-item-div']}
        onInput={(e) =>
          onInputPurchasedItem(id, 'purchasedDate', e.currentTarget.innerHTML)
        }
      >
        {purchasedItem?.purchasedDate}
      </div>
    </div>
  );
};

export default PurchasedItemCell;
