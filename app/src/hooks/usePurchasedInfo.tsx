import { EntityId, EntityState } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { PurchasedItem } from '../@types/purchasedItem';
import { States } from '../store/store';

type UsePurchasedInfoValue = {
  priceSum: number;
};

const usePurchasedInfo = (): UsePurchasedInfoValue => {
  const { purchasedItemList } = useSelector<
    States,
    { purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    purchasedItemList: state.purchasedItemList,
  }));

  /**
   * 合計金額
   */
  const priceSum = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < purchasedItemList.ids.length; i += 1) {
      const id: EntityId = purchasedItemList.ids[i];
      const item = purchasedItemList.entities[id];
      if (item) {
        sum += Number(item.price);
      }
    }

    return sum;
  }, [purchasedItemList.entities, purchasedItemList.ids]);

  return {
    priceSum,
  };
};

export default usePurchasedInfo;
