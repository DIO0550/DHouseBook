import { FC } from 'react';
import useBookFile from '../../hooks/useBookFile';
import usePurchasedItemList from '../../hooks/usePurchasedItemList';
import styles from './OperateDataButtons.module.scss';

const OperateDataButtons: FC = () => {
  const { saveFile } = useBookFile();
  const { insertParchasedItem } = usePurchasedItemList();

  return (
    <>
      <div className={styles['operate-buttons-container']}>
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
      </div>
    </>
  );
};

export default OperateDataButtons;
