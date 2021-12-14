import { FC } from 'react';
import useBookFile from '../../hooks/useBookFile';
import usePurchasedItemList from '../../hooks/usePurchasedItemList';
import styles from './OperateDataButtons.module.scss';

const PurcahsedListFooter: FC = () => {
  const { saveFile } = useBookFile();
  const { insertParchasedItem } = usePurchasedItemList();

  return (
    <>
      <div className={styles['purchased-list-footer-container']}>
        <button
          type='button'
          onClick={insertParchasedItem}
          className={styles['operate-button']}
        >
          新規追加
        </button>
        <button
          type='button'
          onClick={saveFile}
          className={styles['operate-button']}
        >
          保存
        </button>
        <button
          type='button'
          onClick={saveFile}
          className={styles['operate-button']}
        >
          削除
        </button>
        <div>合計０</div>
      </div>
    </>
  );
};

export default PurcahsedListFooter;
