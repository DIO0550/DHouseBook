import { FC } from 'react';
import usePurchasedItem from '../../CustomHook/usePurchasedItem';

import styles from './PurchasedItemCell.module.scss';

type props = {
  ids: string;
};

const PurchasedItemCell: FC<props> = ({ ids }) => {
  const { purchasedItemList, selectById, onInputPurchasedItem } =
    usePurchasedItem();
  const purchasedItem = selectById(purchasedItemList, ids);
  console.log(purchasedItem);
  return (
    <div className={styles['purchased-item-cell']}>
      <div
        contentEditable='true'
        className={styles['purchased-item-div']}
        onInput={(e) =>
          onInputPurchasedItem(ids, 'name', e.currentTarget.innerHTML)
        }
      >
        {purchasedItem?.name}
      </div>
      <div
        contentEditable='true'
        className={styles['purchased-item-div']}
        onInput={(e) =>
          onInputPurchasedItem(ids, 'price', e.currentTarget.innerHTML)
        }
      >
        {purchasedItem?.price}
      </div>
      <div
        contentEditable='true'
        className={styles['purchased-item-div']}
        onInput={(e) =>
          onInputPurchasedItem(ids, 'type', e.currentTarget.innerHTML)
        }
      >
        {purchasedItem?.type}
      </div>
      <div
        contentEditable='true'
        className={styles['purchased-item-div']}
        onInput={(e) =>
          onInputPurchasedItem(ids, 'purchasedDate', e.currentTarget.innerHTML)
        }
      >
        {purchasedItem?.purchasedDate}
      </div>
    </div>
  );
};

export default PurchasedItemCell;
