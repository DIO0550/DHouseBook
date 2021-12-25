import { EntityState } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PurchasedItem } from '../@types/purchasedItem.d.ts';
import { BookDateState } from '../store/bookDateSlice';
import { States } from '../store/store';
import { formatSaveData, zeroPadding } from '../util/converter';
import usePrevious from './usePrevious';

const useBookFile = () => {
  const { bookDate, purchasedItemList } = useSelector<
    States,
    { bookDate: BookDateState; purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    bookDate: state.bookDate,
    purchasedItemList: state.purchasedItemList,
  }));
  const prevBookDate: BookDateState = usePrevious(bookDate);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * ファイルロード
   * @returns ファイルロードのPromise
   */
  const loadFile = (): Promise<PurchasedItem[] | null> => {
    const date = new Date(bookDate.dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;
    return window.api.loadBook(filePath);
  };

  /**
   * ファイルセーブ
   * @returns ファイルセーブのPromise
   */
  const saveFile = (): Promise<void> => {
    const date = new Date(prevBookDate.dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const formatData = formatSaveData(purchasedItemList.entities);
    const dataJsonString: string = JSON.stringify(formatData);
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;
    return window.api.saveBook(filePath, dataJsonString);
  };

  /**
   * ファイル切り替え
   * @returns ファイル切り替えのPromise
   */
  const switchFile = async (): Promise<PurchasedItem[]> => {
    setIsLoading(true);

    let items: PurchasedItem[] | null = [];
    try {
      await saveFile();
    } catch (e) {
      setIsLoading(false);
      return items;
    }

    try {
      const data = await loadFile();
      if (!data) {
        return [];
      }
      items = data;
    } catch (e) {
      setIsLoading(false);
      return items;
    }
    setIsLoading(false);
    return items;
  };

  return {
    isLoading,
    saveFile,
    loadFile,
    switchFile,
  };
};

export default useBookFile;
