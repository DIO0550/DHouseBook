import { useSelector, useDispatch } from 'react-redux';
import { EntityState } from '@reduxjs/toolkit';
import { States } from '../store/store';
import { purchasedItemListSlice } from '../store/purchasedItemListSlice';
import { formatSaveData, zeroPadding } from '../util/converter';
import { PurchasedItem } from '../types/purchasedItem';
import { v4 as uuidv4 } from 'uuid';

const usePurchasedItemList = () => {
  const dispatch = useDispatch();
  const { purchasedItemList } = useSelector<
    States,
    { purchasedItemList: EntityState<PurchasedItem> }
  >((state) => ({
    purchasedItemList: state.purchasedItemList,
  }));

  const { purchasedItemAdded, purchasedItemSetAll } =
    purchasedItemListSlice.actions;
  const fetchData = (year: number, month: number) => {};
  const saveData = (year: number, month: number) => {
    const formatData = formatSaveData(purchasedItemList.entities);
    const dataJsonString: string = JSON.stringify(formatData);
    const fileName = `${year}${zeroPadding(month, 2)}.json`;
    const filePath = `bookdata/${fileName}`;
    window.api.saveBook(filePath, dataJsonString);
  };

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

  const insertAllPurchasedItems = (items: PurchasedItem[]) => {
    dispatch(purchasedItemSetAll(items));
  };

  return {
    purchasedItemList,
    insertParchasedItem,
    insertAllPurchasedItems,
    fetchData,
    saveData,
  };
};

export default usePurchasedItemList;
