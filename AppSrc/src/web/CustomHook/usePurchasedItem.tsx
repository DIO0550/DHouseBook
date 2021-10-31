import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { EntityId, EntityState } from '@reduxjs/toolkit';
import { States } from '../store/store';
import {
  purchasedItemListSlice,
  selectById,
} from '../store/purchasedItemListSlice';
import { PurchasedItem } from '../types/purchasedItem';

// カスタムフックの返却値
type UsePurchasedItemParams = {
  // 購入アイテムの一覧
  purchasedItemList: EntityState<PurchasedItem>;
  // selectById
  selectById: (
    state: EntityState<PurchasedItem>,
    id: EntityId
  ) => PurchasedItem | undefined;
  // 購入アイテムの更新
  onInputPurchasedItem: (id: string, key: string, value: unknown) => void;
};

const usePurchasedItem = (): UsePurchasedItemParams => {
  const dispatch = useDispatch();
  // 購入アイテムの更新
  const { purchasedItemUpdated } = purchasedItemListSlice.actions;
  // 購入アイテム一覧
  const { purchasedItemList } = useSelector<
    States,
    { purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    purchasedItemList: state.purchasedItemList,
  }));

  /**
   * 入力変更時
   * @param id id
   * @param key 更新するアイテムのキー名
   * @param value 更新する値
   */
  const onInputPurchasedItem = (id: string, key: string, value: unknown) => {
    dispatch(
      purchasedItemUpdated({
        id,
        key,
        value,
      })
    );
  };

  return {
    purchasedItemList,
    selectById,
    onInputPurchasedItem,
  };
};

export default usePurchasedItem;
