import { EntityState } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookDateState } from '../store/bookDateSlice';
import { States } from '../store/store';
import { PurchasedItem } from '../types/purchasedItem';
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

  const loadFile = () => {
    const date = new Date(prevBookDate.dateStr);
    const year = date.getFullYear();
    const month = date.getMonth();
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;

    const jsonObject = window.api.loadBook(filePath);
    console.log(jsonObject);
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
    const month = date.getMonth();
    const formatData = formatSaveData(purchasedItemList.entities);
    const dataJsonString: string = JSON.stringify(formatData);
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;
    window.api.saveBook(filePath, dataJsonString);
  };

  useEffect(() => {
    saveFile();
    loadFile();
  }, [bookDate]);
};

export default useBookFile;
