import { FC } from 'react';
import useBookFile from '../../hooks/useBookFile';
import usePurchasedInfo from '../../hooks/usePurchasedInfo';
import usePurchasedItemQuery from '../../hooks/usePurchaseItemQuery';
import styles from './PurchasedListFooter.module.scss';

const PurcahsedListFooter: FC = () => {
  const { saveFile } = useBookFile();
  const { insertParchasedItem } = usePurchasedItemQuery();
  const { priceSum } = usePurchasedInfo();

  return (
    <>
      <div className={styles['purchased-list-footer-container']}>
        <button
          type="button"
          onClick={insertParchasedItem}
          className={styles['operate-button']}
        >
          新規追加
        </button>
        <button
          type="button"
          onClick={saveFile}
          className={styles['operate-button']}
        >
          保存
        </button>
        <div>合計:{priceSum}</div>
      </div>
    </>
  );
};

export default PurcahsedListFooter;
