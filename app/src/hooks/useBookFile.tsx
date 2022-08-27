import { EntityState } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PurchasedItem } from '../@types/purchasedItem';
import { BookDateState } from '../store/bookDateSlice';
import { States } from '../store/store';
import { formatSaveData, zeroPadding } from '../util/converter';
import usePrevious from './usePrevious';

// jsonデータの読み込み/保存を行うフック
const useBookFile = () => {
  const { bookDate, purchasedItemList } = useSelector<
    States,
    { bookDate: BookDateState; purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    bookDate: state.bookDate,
    purchasedItemList: state.purchasedItemList,
  }));
  // 前のブックデータ
  const prevBookDate: BookDateState = usePrevious(bookDate);
  // ロード中か
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * ファイルロード
   * @returns ファイルロードのPromise
   */
  const loadFile = (): Promise<PurchasedItem[] | null> => {
    const date = new Date(bookDate.dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dir = process.env.REACT_APP_BOOK_DATA_PATH ?? 'bookdata';
    const relativePath = `${dir}/${year}${zeroPadding(month, 2)}.json`;

    return window.api.loadBook(relativePath);
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
    const dir = process.env.REACT_APP_BOOK_DATA_PATH ?? 'bookdata';
    const relativePath = `${dir}/${year}${zeroPadding(month, 2)}.json`;

    return window.api.saveBook(relativePath, dataJsonString);
  };

  /**
   * ファイル切り替え
   * @returns ファイル切り替えのPromise
   */
  const switchFile = async (): Promise<PurchasedItem[]> => {
    setIsLoading(true);

    let items: PurchasedItem[] = [];
    try {
      await saveFile();
    } catch (e) {
      setIsLoading(false);

      return [];
    }

    try {
      const data = await loadFile();
      if (!data) {
        return items;
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
