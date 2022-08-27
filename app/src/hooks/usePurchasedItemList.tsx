import { useSelector } from 'react-redux';
import { EntityState } from '@reduxjs/toolkit';
import { useCallback, useEffect, useState } from 'react';
import { States } from '../store/store';
import { PurchasedItem } from '../@types/purchasedItem';
import { BookDateState } from '../store/bookDateSlice';
import { SORT_TYPE, SORT_ORDER_TYPE } from '../store/itemSortSlice';
import useBookFile from './useBookFile';
import usePrevious from './usePrevious';
import usePurchasedItemQuery from './usePurchaseItemQuery';
import useItemSort from './useItemSort';

/**
 * カスタムフックの返却値
 */
type UsePurchasedItemListValue = {
  // ソートしたアイテムのリスト
  sortItemList: PurchasedItem[];
  // ロード中かどうか
  isLoading: boolean;
  // アイテムのリスト
  purchasedItemList: EntityState<PurchasedItem>;
};

const usePurchasedItemList = (): UsePurchasedItemListValue => {
  // Reduxで管理している以下のstate取得
  // - 表示中の日時
  // - 購入したアイテムのリスト
  const { bookDate, purchasedItemList } = useSelector<
    States,
    {
      bookDate: BookDateState;
      purchasedItemList: EntityState<PurchasedItem>;
    }
  >((state) => ({
    bookDate: state.bookDate,
    purchasedItemList: state.purchasedItemList,
  }));
  // 1つ前の日時
  const prevBookDate: BookDateState = usePrevious(bookDate);
  // ソートの種類
  const { sortType, orderType } = useItemSort();
  // ロード中か
  const { isLoading, loadFile, switchFile } = useBookFile();

  // アイテムの一覧
  const [sortItemList, setSortItemList] = useState<PurchasedItem[]>([]);

  // query
  const { insertAllPurchasedItems, removeAllPurchasedItems } =
    usePurchasedItemQuery();

  /**
   * ソートで使用する値
   * @param item アイテム
   * @returns ソート時に使用する値
   */
  const sortValue = useCallback(
    (item: PurchasedItem): string | number => {
      switch (sortType) {
        case SORT_TYPE.NONE:
          return item.id;
        case SORT_TYPE.NAME:
          return item.name;
        case SORT_TYPE.PRICE:
          return Number(item.price);
        case SORT_TYPE.TYPE:
          return item.type;
        case SORT_TYPE.PURCHASE_DATE:
          return item.purchasedDate;
        default:
          return item.id;
      }
    },
    [sortType],
  );

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
      if (item) {
        itemList.push(item);
      }
    }

    // ソートなしなら、順番通りに返す
    if (sortType === SORT_TYPE.NONE) {
      setSortItemList(itemList);

      return;
    }

    itemList.sort((a, b) => {
      const aValue = sortValue(a);
      const bValue = sortValue(b);

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        if (aValue < bValue) {
          return orderType === SORT_ORDER_TYPE.ASCENDING ? -1 : 1;
        }

        if (aValue > bValue) {
          return orderType === SORT_ORDER_TYPE.ASCENDING ? 1 : -1;
        }

        return 0;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (
          (orderType === SORT_ORDER_TYPE.ASCENDING ? 1 : -1) * (aValue - bValue)
        );
      }

      return 0;
    });

    setSortItemList(itemList);
  }, [
    purchasedItemList.entities,
    purchasedItemList.ids,
    sortType,
    orderType,
    sortValue,
  ]);

  return {
    sortItemList,
    isLoading,
    purchasedItemList,
  };
};

export default usePurchasedItemList;
