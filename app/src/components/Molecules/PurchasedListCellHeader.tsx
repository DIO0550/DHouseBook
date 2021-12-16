import { FC } from 'react';
import styles from './PurchasedItemCell.module.scss';

const PurcahsedListCellHeader: FC = () => {
  return (
    <div className={styles['purchased-item-cell-header']}>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['start']}`}
      >
        名前
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
      >
        値段
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
      >
        種類
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
      >
        購入日
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['end']}`}
      >
        削除
      </div>
    </div>
  );
};

export default PurcahsedListCellHeader;
