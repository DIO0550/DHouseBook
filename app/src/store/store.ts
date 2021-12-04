import { combineReducers } from 'redux';
import { EntityState, configureStore } from '@reduxjs/toolkit';
import { BookDateState, bookDateSlice } from './bookDateSlice';
import { purchasedItemListSlice } from './purchasedItemListSlice';
import { PurchasedItem } from '../@types/purchasedItem';

// stateの型
export type States = {
  // データの日付
  bookDate: BookDateState;
  // 購入アイテム一覧
  purchasedItemList: EntityState<PurchasedItem>;
};

// Root
const rootReducer = combineReducers({
  bookDate: bookDateSlice.reducer,
  purchasedItemList: purchasedItemListSlice.reducer,
});

// store
const store = configureStore({ reducer: rootReducer });

export default store;
