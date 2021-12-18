import { useSelector, useDispatch } from 'react-redux';
import { EntityState } from '@reduxjs/toolkit';
import { States } from '../store/store';
import { purchasedItemListSlice } from '../store/purchasedItemListSlice';
import { PurchasedItem } from '../@types/purchasedItem';
import { v4 as uuidv4 } from 'uuid';
import { BookDateState } from '../store/bookDateSlice';
import useBookFile from './useBookFile';
import { useEffect, useState } from 'react';
import usePrevious from './usePrevious';

const SORT_TYPE = {
  NONE: 'NONE',
  NAME: 'NAME',
  PRICE: 'PRICE',
  TYPE: 'TYPWE',
  PURCHASE_DATE: 'PRUCHASE_DATE',
} as const;
type SORT_TYPE = typeof SORT_TYPE[keyof typeof SORT_TYPE];

type UsePurchasedItemListValue = {
  isLoading: boolean;
  purchasedItemList: EntityState<PurchasedItem>;
  insertParchasedItem: () => void;
  insertAllPurchasedItems: (items: PurchasedItem[]) => void;
  removePurchasedItemById: (id: string) => void;
};

const usePurchasedItemList = (): UsePurchasedItemListValue => {
  const dispatch = useDispatch();
  const { bookDate, purchasedItemList } = useSelector<
    States,
    { bookDate: BookDateState; purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    bookDate: state.bookDate,
    purchasedItemList: state.purchasedItemList,
  }));
  const prevBookDate: BookDateState = usePrevious(bookDate);

  const { isLoading, loadFile, bookData, switchFile } = useBookFile();

  const {
    purchasedItemAdded,
    purchasedItemSetAll,
    purchasedItemRemoveAll,
    purchasedItemRemoveById,
  } = purchasedItemListSlice.actions;

  // ソートの種類
  const [sortType, setSortType] = useState<SORT_TYPE>(SORT_TYPE.NONE);

  // アイテムの一覧
  const [sortItemList, setItemList] = useState<[]>([]);

  // 合計
  const [priceSum, setPriceSum] = useState<Number>(0);

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

  /**
   * 購入アイテムを削除
   * @param id 削除するアイテムのid
   */
  const removePurchasedItemById = (id: string) => {
    dispatch(purchasedItemRemoveById(id));
  };

  /**
   * すべての購入アイテムを削除する
   */
  const removeAllPurchasedItems = () => {
    dispatch(purchasedItemRemoveAll());
  };

  /**
   * コンポーネント読み込み時
   */
  useEffect(() => {
    loadFile();
  }, []);

  /**
   * 日付変更時
   */
  useEffect(() => {
    if (bookDate.dateStr === prevBookDate.dateStr) {
      return;
    }

    (async () => {
      await switchFile();
    })();
  }, [bookDate.dateStr]);

  /**
   * BookDataが変更時
   */
  useEffect(() => {
    if (bookData === null) {
      return;
    }

    // データすべて削除
    removeAllPurchasedItems();

    if (bookData === null || bookData.length === 0) {
      return;
    }

    insertAllPurchasedItems(bookData);
  }, [bookData]);

  return {
    isLoading: isLoading,
    purchasedItemList,
    insertParchasedItem,
    insertAllPurchasedItems,
    removePurchasedItemById,
  };
};

export default usePurchasedItemList;
