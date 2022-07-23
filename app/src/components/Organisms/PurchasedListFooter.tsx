import { FC } from 'react';
import useBookFile from '../../hooks/useBookFile';
import usePurchasedItemQuery from '../../hooks/usePurchaseItemQuery';
import styles from './PurchasedListFooter.module.scss';
import OperateButton from '../Atoms/OperateButton';

const PurcahsedListFooter: FC = () => {
  const { saveFile } = useBookFile();
  const { insertParchasedItem } = usePurchasedItemQuery();

  return (
    <>
      <div className={styles['purchased-list-footer-container']}>
        <OperateButton title="新規追加" onClick={insertParchasedItem} />
        <OperateButton title="保存" onClick={saveFile} />
      </div>
    </>
  );
};

export default PurcahsedListFooter;
