import { useSelector } from 'react-redux';
import { EntityState } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { States } from '../store/store';
import { PurchasedItem } from '../@types/purchasedItem';
import { BookDateState } from '../store/bookDateSlice';
import useBookFile from './useBookFile';
import usePrevious from './usePrevious';
import usePurchasedItemQuery from './usePurchaseItemQuery';

/**
 * ソートの種類
 */
const SORT_TYPE = {
  NONE: 'NONE',
  NAME: 'NAME',
  PRICE: 'PRICE',
  TYPE: 'TYPE',
  PURCHASE_DATE: 'PRUCHASE_DATE',
} as const;
type SORT_TYPE = typeof SORT_TYPE[keyof typeof SORT_TYPE];

/**
 * カスタムフックの返却値
 */
type UsePurchasedItemListValue = {
  sortItemList: PurchasedItem[];
  isLoading: boolean;
  purchasedItemList: EntityState<PurchasedItem>;
  changeSortType: (type: SORT_TYPE) => void;
};

const usePurchasedItemList = (): UsePurchasedItemListValue => {
  const { bookDate, purchasedItemList } = useSelector<
    States,
    { bookDate: BookDateState; purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    bookDate: state.bookDate,
    purchasedItemList: state.purchasedItemList,
  }));
  const prevBookDate: BookDateState = usePrevious(bookDate);

  const { isLoading, loadFile, switchFile } = useBookFile();

  // ソートの種類
  const [sortType, setSortType] = useState<SORT_TYPE>(SORT_TYPE.NONE);

  // アイテムの一覧
  const [sortItemList, setItemList] = useState<PurchasedItem[]>([]);

  // query
  const { insertAllPurchasedItems, removeAllPurchasedItems } =
    usePurchasedItemQuery();

  /**
   * ソートの種類を変更
   * @param type 変更するタイプ
   */
  const changeSortType = (type: SORT_TYPE) => {
    setSortType(type);
  };

  /**
   * コンポーネント読み込み時
   */
  useEffect(() => {
    // ファイルロード
    void (async () => {
      const data: PurchasedItem[] | null = await loadFile();
      if (!data) {
        return;
      }
      insertAllPurchasedItems(data);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 日付変更時
   */
  useEffect(() => {
    if (bookDate.dateStr === prevBookDate.dateStr) {
      return;
    }

    void (async () => {
      const data = await switchFile();

      // データすべて削除
      removeAllPurchasedItems();

      // データ挿入
      insertAllPurchasedItems(data);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookDate.dateStr]);

  useEffect(() => {
    const itemList: PurchasedItem[] = [];

    for (let i = 0; i < purchasedItemList.ids.length; i += 1) {
      const id = purchasedItemList.ids[i];
      const item = purchasedItemList.entities[id];
      if (item && sortType !== SORT_TYPE.NONE) {
        itemList.push(item);
      }
    }

    setItemList(itemList);
  }, [purchasedItemList.entities, purchasedItemList.ids, sortType]);

  return {
    sortItemList,
    isLoading,
    purchasedItemList,
    changeSortType,
  };
};

export default usePurchasedItemList;
