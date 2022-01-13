/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import useHeaderCell from '../../hooks/useHeaderCell';
import { SORT_TYPE } from '../../store/bookDateSlice';
import styles from './PurchasedItemCell.module.scss';

const PurcahsedListCellHeader: FC = () => {
  const { onClickHeader } = useHeaderCell();

  return (
    <div className={styles['purchased-item-cell-header']}>
      <div
        className={`${styles['purchased-item-div-header']} ${styles.start}`}
        onClick={() => {
          onClickHeader(SORT_TYPE.NAME);
        }}
      >
        名前
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
        onClick={() => {
          onClickHeader(SORT_TYPE.PRICE);
        }}
      >
        値段
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
        onClick={() => {
          onClickHeader(SORT_TYPE.TYPE);
        }}
      >
        種類
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
        onClick={() => {
          onClickHeader(SORT_TYPE.PURCHASE_DATE);
        }}
      >
        購入日
      </div>
      <div className={`${styles['purchased-item-div-header']} ${styles.end}`}>
        削除
      </div>
    </div>
  );
};

export default PurcahsedListCellHeader;
