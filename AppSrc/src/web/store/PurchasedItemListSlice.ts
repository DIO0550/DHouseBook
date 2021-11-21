import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';

import { PurchasedItem } from '../types/purchasedItem';

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
    purchasedItemAdded: purchasedItemAdapter.addOne,
    /**
     * 複数アイテム追加
     * @param state state
     * @param action action
     */
    purchasedItemSetAll(state, action) {
      purchasedItemAdapter.setAll(state, action.payload.purchasedItemList);
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

    purchasedItemRemoveAll: purchasedItemAdapter.removeAll,
  },
});

export { purchasedItemListSlice, selectById };
