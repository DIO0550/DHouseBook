import { FC } from 'react';
import usePurchasedItemUnitCell from '../../hooks/usePurchasedItemUnitCell';
import usePurchasedItemCell from '../../hooks/usePurchasedItemUnitCell';
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
  const unitCellName = usePurchasedItemUnitCell(props.name, props.id, 'name');
  const unitCellPrice = usePurchasedItemCell(props.price, props.id, 'price');
  const unitCellType = usePurchasedItemUnitCell(props.type, props.id, 'type');
  const unitCellPurchasedDate = usePurchasedItemUnitCell(
    props.purchasedDate,
    props.id,
    'purchasedDate'
  );

  const { removePurchasedItemById } = usePurchasedItemQuery();

  return (
    <div className={styles['purchased-item-cell']}>
      <div
        contentEditable='true'
        className={`${styles['purchased-item-div']} ${styles['start']}`}
        onBlur={unitCellName.onBlurHandler}
        onInput={(e) => unitCellName.onInputHandler(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{ __html: unitCellName.ref.current }}
      />
      <div
        contentEditable='true'
        className={`${styles['purchased-item-div']} ${styles['not-edge']}`}
        onBlur={unitCellPrice.onBlurHandler}
        onInput={(e) => unitCellPrice.onInputHandler(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{ __html: unitCellPrice.ref.current }}
      />
      <div
        contentEditable='true'
        className={`${styles['purchased-item-div']} ${styles['not-edge']}`}
        onBlur={unitCellType.onBlurHandler}
        onInput={(e) => unitCellType.onInputHandler(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{ __html: unitCellType.ref.current }}
      />
      <div
        contentEditable='true'
        className={`${styles['purchased-item-div']} ${styles['not-edge']}`}
        onBlur={unitCellPurchasedDate.onBlurHandler}
        onInput={(e) =>
          unitCellPurchasedDate.onInputHandler(e.currentTarget.innerHTML)
        }
        dangerouslySetInnerHTML={{ __html: unitCellPurchasedDate.ref.current }}
      />
      <div className={`${styles['purchased-item-div']} ${styles['end']}`}>
        <button
          type='button'
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
