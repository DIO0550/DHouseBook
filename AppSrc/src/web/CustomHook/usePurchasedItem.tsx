import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { EntityId, EntityState } from '@reduxjs/toolkit';
import { States } from '../store/store';
import {
  PurchasedItem,
  purchasedItemListSlice,
  selectById,
} from '../store/PurchasedItemListSlice';

type UsePurchasedItemParams = {
  purchasedItemList: EntityState<PurchasedItem>;
  selectById: (
    state: EntityState<PurchasedItem>,
    id: EntityId
  ) => PurchasedItem | undefined;
  onInputPurchasedItem: (id: string, key: string, value: unknown) => void;
};

const usePurchasedItem = (): UsePurchasedItemParams => {
  const dispatch = useDispatch();
  const { purchasedItemUpdated } = purchasedItemListSlice.actions;
  const { purchasedItemList } = useSelector<
    States,
    { purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    purchasedItemList: state.purchasedItemList,
  }));

  const updatePurchasedItem = (id: string, key: string, value: unknown) => {
    dispatch(
      purchasedItemUpdated({
        id,
        key,
        value,
      })
    );
  };

  const onInputPurchasedItem = (id: string, key: string, value: unknown) => {
    console.log(`id = ${id}, key=${key}`);
    updatePurchasedItem(id, key, value);
  };

  return {
    purchasedItemList,
    selectById,
    onInputPurchasedItem,
  };
};

export default usePurchasedItem;
