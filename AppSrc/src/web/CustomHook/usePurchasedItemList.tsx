import { useSelector, useDispatch } from 'react-redux';
import { EntityState } from '@reduxjs/toolkit';
import { States } from '../store/store';
import { purchasedItemListSlice } from '../store/purchasedItemListSlice';
import { formatSaveData, zeroPadding } from '../util/converter';
import { PurchasedItem } from '../types/purchasedItem';
import { v4 as uuidv4 } from 'uuid';
import { BookDateState } from '../store/bookDateSlice';
import useBookFile from './useBookFile';
import { useEffect } from 'react';

const usePurchasedItemList = () => {
  const dispatch = useDispatch();
  const { bookDate, purchasedItemList } = useSelector<
    States,
    { bookDate: BookDateState; purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    bookDate: state.bookDate,
    purchasedItemList: state.purchasedItemList,
  }));

  const useBookFileValue = useBookFile();

  const { purchasedItemAdded, purchasedItemSetAll, purchasedItemRemoveAll } =
    purchasedItemListSlice.actions;

  /**
   * 購入アイテム挿入
   */
  const insertParchasedItem = () => {
    const newItem = {
      id: `id-${uuidv4()}`,
      name: '',
      price: 0,
      type: '',
      purchasedDate: '',
    };
    dispatch(purchasedItemAdded(newItem));
  };

  /**
   * 複数の購入アイテムを挿入
   * @param items 挿入するアイテム
   */
  const insertAllPurchasedItems = (items: PurchasedItem[]) => {
    dispatch(purchasedItemSetAll(items));
  };

  const removeAllPurchasedItems = () => {
    console.log('removeAllPurchasedItems');
    dispatch(purchasedItemRemoveAll());
  };

  useEffect(() => {
    console.log(bookDate.dateStr);
    useBookFileValue.saveFile();
    useBookFileValue.loadFile();
  }, [bookDate]);

  useEffect(() => {
    if (useBookFileValue.bookData === null) {
      return;
    }
    // データすべて削除
    removeAllPurchasedItems();

    console.log(purchasedItemList);
    if (
      useBookFileValue.bookData === null ||
      useBookFileValue.bookData.length === 0
    ) {
      return;
    }

    insertAllPurchasedItems(useBookFileValue.bookData);
  }, [useBookFileValue.bookData]);

  return {
    isLoading: useBookFileValue.isLoading,
    purchasedItemList,
    saveFile: useBookFileValue.saveFile,
    insertParchasedItem,
    insertAllPurchasedItems,
  };
};

export default usePurchasedItemList;
