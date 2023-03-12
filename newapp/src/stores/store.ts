import { EntityState, configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { BookDateState, bookDateSlice } from './slices/bookDateSlice';
import { purchasedItemListSlice } from './slices/purchasedItemListSlice';
import { PurchasedItem } from '../types/purchasedItem';
import { itemSortSlice, ItemSortState } from './slices/itemSortSlice';

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
  [bookDateSlice.name]: bookDateSlice.reducer,
  [purchasedItemListSlice.name]: purchasedItemListSlice.reducer,
  [itemSortSlice.name]: itemSortSlice.reducer,
});

// store
const store = configureStore({ reducer: rootReducer });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
