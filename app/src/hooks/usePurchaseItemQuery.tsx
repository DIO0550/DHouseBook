import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { PurchasedItem } from '../@types/purchasedItem';
import { purchasedItemListSlice } from '../store/purchasedItemListSlice';

type UsePurchasedItemQueryValue = {
  insertParchasedItem: () => void;
  insertAllPurchasedItems: (items: PurchasedItem[]) => void;
  removePurchasedItemById: (id: string) => void;
  removeAllPurchasedItems: () => void;
  updatePurchasedItem: (id: string, key: string, value: string) => void;
};

const usePurchasedItemQuery = (): UsePurchasedItemQueryValue => {
  const {
    purchasedItemAdded,
    purchasedItemSetAll,
    purchasedItemRemoveAll,
    purchasedItemRemoveById,
    purchasedItemUpdated,
  } = purchasedItemListSlice.actions;

  const dispatch = useDispatch();

  /**
   * 購入アイテム挿入
   */
  const insertParchasedItem = () => {
    const newItem: PurchasedItem = {
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
   * アイテムを更新する
   * @param id アイテムのID
   * @param key 設定するキー名
   * @param value 設定する値
   */
  const updatePurchasedItem = (id: string, key: string, value: string) => {
    dispatch(
      purchasedItemUpdated({
        id,
        key,
        value,
      }),
    );
  };

  return {
    insertParchasedItem,
    insertAllPurchasedItems,
    removePurchasedItemById,
    removeAllPurchasedItems,
    updatePurchasedItem,
  };
};

export default usePurchasedItemQuery;
