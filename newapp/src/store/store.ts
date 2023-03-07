import { EntityState, configureStore, combineReducers } from '@reduxjs/toolkit';
import { BookDateState, bookDateSlice } from './bookDateSlice';
import { purchasedItemListSlice } from './purchasedItemListSlice';
import { PurchasedItem } from '../@types/purchasedItem';
import { itemSortSlice, ItemSortState } from './itemSortSlice';

// stateの型
export type States = {
  // データの日付
  bookDate: BookDateState;
  // 購入アイテム一覧
  purchasedItemList: EntityState<PurchasedItem>;
  // ソート情報
  itemSort: ItemSortState;
};

// Root
const rootReducer = combineReducers({
  bookDate: bookDateSlice.reducer,
  purchasedItemList: purchasedItemListSlice.reducer,
  itemSort: itemSortSlice.reducer,
});

// store
const store = configureStore({ reducer: rootReducer });

export default store;
