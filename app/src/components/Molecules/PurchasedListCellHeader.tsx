import { FC } from 'react';
import styles from './PurchasedItemCell.module.scss';

const PurcahsedListCellHeader: FC = () => {
  return (
    <div className={styles['purchased-item-cell-header']}>
      <div className={styles['purchased-item-div-header']}>名前</div>
      <div className={styles['purchased-item-div-header']}>値段</div>
      <div className={styles['purchased-item-div-header']}>種類</div>
      <div className={styles['purchased-item-div-header']}>購入日</div>
    </div>
  );
};

export default PurcahsedListCellHeader;
