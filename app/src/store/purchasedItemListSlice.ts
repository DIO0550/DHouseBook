import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { PurchasedItem } from '../@types/purchasedItem';

// 更新時のアイテム
type UpdateItem = {
  // id
  id: string;
  // 更新するキー
  key: string;
  // 値
  value: unknown;
};

// adapter
const purchasedItemAdapter = createEntityAdapter<PurchasedItem>({
  selectId: (purchasedItem) => purchasedItem.id,
});

// selectById
const { selectById } = purchasedItemAdapter.getSelectors();

const purchasedItemListSlice = createSlice({
  name: 'purchasedItemList',
  initialState: purchasedItemAdapter.getInitialState(),
  reducers: {
    // アイテム１つ追加
    purchasedItemAdded: (state, action: PayloadAction<PurchasedItem>) =>
      purchasedItemAdapter.addOne(state, action.payload),
    /**
     * 複数アイテム追加
     * @param state state
     * @param action action
     */
    purchasedItemSetAll: (state, action: PayloadAction<PurchasedItem[]>) => {
      purchasedItemAdapter.setAll(state, action.payload);
    },
    /**
     * 購入アイテム更新
     * @param state state
     * @param action action
     */
    purchasedItemUpdated: (state, action: PayloadAction<UpdateItem>): void => {
      purchasedItemAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          ...state.entities[action.payload.id],
          [action.payload.key]: action.payload.value,
        },
      });
    },

    /**
     * 購入アイテム削除
     * @param state state
     * @param action action
     */
    purchasedItemRemoveById: (state, action: PayloadAction<string>): void => {
      purchasedItemAdapter.removeOne(state, action);
    },

    /**
     * アイテムすべて削除
     */
    purchasedItemRemoveAll: (state) => purchasedItemAdapter.removeAll(state),
  },
});

export { purchasedItemListSlice, selectById };
