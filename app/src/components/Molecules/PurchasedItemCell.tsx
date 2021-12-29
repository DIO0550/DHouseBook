import { FC } from 'react';
import usePurchasedItemUnitCell from '../../hooks/usePurchasedItemUnitCell';
import usePurchasedItemQuery from '../../hooks/usePurchaseItemQuery';

import styles from './PurchasedItemCell.module.scss';

type Props = {
  // id
  id: string;
  // 名前
  name: string;
  // 値段
  price: string;
  // 種別
  type: string;
  // 購入日
  purchasedDate: string;
};

const PurchasedItemCell: FC<Props> = (props: Props) => {
  const { id, name, price, type, purchasedDate } = props;

  const unitCellName = usePurchasedItemUnitCell(name, id, 'name');
  const unitCellPrice = usePurchasedItemUnitCell(price, id, 'price');
  const unitCellType = usePurchasedItemUnitCell(type, id, 'type');
  const unitCellPurchasedDate = usePurchasedItemUnitCell(
    purchasedDate,
    id,
    'purchasedDate',
  );

  const { removePurchasedItemById } = usePurchasedItemQuery();

  return (
    <div className={styles['purchased-item-cell']}>
      <div
        contentEditable="true"
        className={`${styles['purchased-item-div']} ${styles.start}`}
        onBlur={unitCellName.onBlurHandler}
        onInput={(e) => unitCellName.onInputHandler(e.currentTarget.innerHTML)}
      >
        {unitCellName.ref.current}
      </div>
      <div
        contentEditable="true"
        className={`${styles['purchased-item-div']} ${styles['not-edge']}`}
        onBlur={unitCellPrice.onBlurHandler}
        onInput={(e) => unitCellPrice.onInputHandler(e.currentTarget.innerHTML)}
      >
        {unitCellPrice.ref.current}
      </div>
      <div
        contentEditable="true"
        className={`${styles['purchased-item-div']} ${styles['not-edge']}`}
        onBlur={unitCellType.onBlurHandler}
        onInput={(e) => unitCellType.onInputHandler(e.currentTarget.innerHTML)}
      >
        {unitCellType.ref.current}
      </div>
      <div
        contentEditable="true"
        className={`${styles['purchased-item-div']} ${styles['not-edge']}`}
        onBlur={unitCellPurchasedDate.onBlurHandler}
        onInput={(e) =>
          unitCellPurchasedDate.onInputHandler(e.currentTarget.innerHTML)
        }
      >
        {unitCellPurchasedDate.ref.current}
      </div>
      <div className={`${styles['purchased-item-div']} ${styles.end}`}>
        <button
          type="button"
          className={`${styles['delete-button']}`}
          onClick={() => removePurchasedItemById(props.id)}
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default PurchasedItemCell;
