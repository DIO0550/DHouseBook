import { EntityState } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookDateState } from '../store/bookDateSlice';
import { States } from '../store/store';
import { PurchasedItem } from '../@types/purchasedItem';
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
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [bookData, setBookData] = useState<PurchasedItem[] | null>(null);

  /**
   * ファイル読み込み処理
   */
  const loadFile = () => {
    setIsLoading(true);
    const date = new Date(bookDate.dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;
    window.api.loadBook(filePath).then((data) => {
      console.log(data);
      setBookData(data);
      setIsLoading(false);
    });
  };

  const asyncLoadFile = () => {
    const date = new Date(bookDate.dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;
    return window.api.loadBook(filePath);
  };

  /**
   * ファイル保存処理
   */
  const saveFile = () => {
    if (
      purchasedItemList.entities === null ||
      purchasedItemList.ids.length === 0
    ) {
      return;
    }
    const date = new Date(prevBookDate.dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const formatData = formatSaveData(purchasedItemList.entities);
    const dataJsonString: string = JSON.stringify(formatData);
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;
    window.api.saveBook(filePath, dataJsonString);
  };

  const asyncSaveFile = () => {
    const date = new Date(prevBookDate.dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const formatData = formatSaveData(purchasedItemList.entities);
    const dataJsonString: string = JSON.stringify(formatData);
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;
    return window.api.saveBook(filePath, dataJsonString);
  };

  const switchFile = async () => {
    setIsLoading(true);
    try {
      await asyncSaveFile();
    } catch (e) {
      return;
    }

    try {
      const data = await asyncLoadFile();
      console.log(data);
      setBookData(data);
    } catch (e) {
      return;
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    bookData,
    saveFile,
    loadFile,
    switchFile,
  };
};

export default useBookFile;
