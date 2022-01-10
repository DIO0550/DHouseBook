import { FC } from 'react';
import usePurchasedItemList from '../../hooks/usePurchasedItemList';
import PurchasedItemCell from '../Molecules/PurchasedItemCell';
import Loading from '../Templates/Loading';

import styles from './PurchasedList.module.scss';
import PurchasedListCellHeader from '../Molecules/PurchasedListCellHeader';

const PurchasedList: FC = () => {
  const { sortItemList, isLoading } = usePurchasedItemList();

  return (
    <>
      <div className={styles['purchased-list-container']}>
        <PurchasedListCellHeader />
        {isLoading && <Loading />}
        {sortItemList.map((item) => (
          <PurchasedItemCell
            key={String(item.id)}
            id={String(item.id)}
            name={item.name}
            price={String(item.price ?? 0)}
            type={item.type}
            purchasedDate={item.purchasedDate}
          />
        ))}
      </div>
    </>
  );
};

export default PurchasedList;
