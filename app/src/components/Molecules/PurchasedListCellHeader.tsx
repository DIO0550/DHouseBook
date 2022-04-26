/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import useHeaderCell from '../../hooks/useHeaderCell';
import useItemSort from '../../hooks/useItemSort';
import { SORT_TYPE, SORT_ORDER_TYPE } from '../../store/itemSortSlice';
import styles from './PurchasedItemCell.module.scss';
import { ORDER_MARK } from '../../util/const';

const PurcahsedListCellHeader: FC = () => {
  const { onClickHeader } = useHeaderCell();
  const { sortType, orderType } = useItemSort();

  return (
    <div className={styles['purchased-item-cell-header']}>
      <div
        className={`${styles['purchased-item-div-header']} ${styles.start}`}
        onClick={() => {
          onClickHeader(SORT_TYPE.NAME);
        }}
      >
        名前
        {sortType === SORT_TYPE.NAME &&
          (orderType === SORT_ORDER_TYPE.ASCENDING
            ? ORDER_MARK.ASCENDING_MARK
            : ORDER_MARK.DESCENDING_MARK)}
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
        onClick={() => {
          onClickHeader(SORT_TYPE.PRICE);
        }}
      >
        値段
        {sortType === SORT_TYPE.PRICE &&
          (orderType === SORT_ORDER_TYPE.ASCENDING
            ? ORDER_MARK.ASCENDING_MARK
            : ORDER_MARK.DESCENDING_MARK)}
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
        onClick={() => {
          onClickHeader(SORT_TYPE.TYPE);
        }}
      >
        種類
        {sortType === SORT_TYPE.TYPE &&
          (orderType === SORT_ORDER_TYPE.ASCENDING
            ? ORDER_MARK.ASCENDING_MARK
            : ORDER_MARK.DESCENDING_MARK)}
      </div>
      <div
        className={`${styles['purchased-item-div-header']} ${styles['not-edge']}`}
        onClick={() => {
          onClickHeader(SORT_TYPE.PURCHASE_DATE);
        }}
      >
        購入日
        {sortType === SORT_TYPE.PURCHASE_DATE &&
          (orderType === SORT_ORDER_TYPE.ASCENDING
            ? ORDER_MARK.ASCENDING_MARK
            : ORDER_MARK.DESCENDING_MARK)}
      </div>
      <div className={`${styles['purchased-item-div-header']} ${styles.end}`}>
        削除
      </div>
    </div>
  );
};

export default PurcahsedListCellHeader;
