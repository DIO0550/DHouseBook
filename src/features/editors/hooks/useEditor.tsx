import { PurchasedItem } from '@/utils/editors/purchasedItem';
import {
  EntityDictionary,
  PurchasedItemsEntity,
  UpdateEntity,
} from '@/utils/editors/purchasedItemsEntity';
import { useCallback, useReducer } from 'react';

type Props = {
  initialPurchasedItems: PurchasedItem[];
};

const ActionType = {
  Add: 'Add',
  Remove: 'Remove',
  Update: 'Update',
} as const;
type ActionType = (typeof ActionType)[keyof typeof ActionType];

type ActionBase = {
  type: ActionType;
};

/**
 * アイテム更新
 */
type UpdateItem = ActionBase & {
  payload: UpdateEntity;
  type: typeof ActionType.Update;
};

/**
 * アイテム追加
 */
type AddItem = ActionBase & {
  payload: PurchasedItem;
  type: typeof ActionType.Add;
};

/**
 * アイテム削除
 */
type RemoveItem = ActionBase & {
  payload: string;
  type: typeof ActionType.Remove;
};

type Action = AddItem | RemoveItem | UpdateItem;

export { AddItem, RemoveItem, UpdateItem };

/**
 * 購入済みアイテムの正規化
 * @param purchasedItems 購入済みアイテム
 * @returns 正規化された購入済みアイテム
 */
const normalizedPurchasedItem = (purchasedItems: PurchasedItem[]) => {
  const ids = [] as string[];
  const itemsEntity: EntityDictionary = {};

  purchasedItems.forEach((item) => {
    ids.push(item.id);
    itemsEntity[item.id] = item;
  });

  const normalizedPurchasedItems: PurchasedItemsEntity = {
    ids,
    entities: itemsEntity,
  };

  return normalizedPurchasedItems;
};

const reducer = (state: PurchasedItemsEntity, action: Action) => {
  switch (action.type) {
    // アイテム追加
    case ActionType.Add:
      return PurchasedItemsEntity.addOne(state, action.payload);

    // アイテム削除
    case ActionType.Remove:
      return PurchasedItemsEntity.removeOne(state, action.payload);

    // アイテム更新
    case ActionType.Update:
      return PurchasedItemsEntity.updateOne(state, action.payload);

    default:
      return state;
  }
};

const useEditor = ({ initialPurchasedItems }: Props) => {
  const [purchasedItems, dispatch] = useReducer(
    reducer,
    normalizedPurchasedItem(initialPurchasedItems),
  );

  /**
   * 購入したアイテムの追加
   * @param item 追加するアイテム
   */
  const addPurhcasedItem = useCallback((item: PurchasedItem) => {
    dispatch({
      payload: item,
      type: ActionType.Add,
    });
  }, []);

  /**
   * 購入したアイテムの削除
   * @param id 削除するアイテムのid
   */
  const removePurchasedItem = useCallback((id: string) => {
    dispatch({
      payload: id,
      type: ActionType.Remove,
    });
  }, []);

  /**
   * 購入したアイテムの更新
   * @param update 更新内容
   */
  const updatePurchaedItem = useCallback((update: UpdateEntity) => {
    dispatch({
      payload: update,
      type: ActionType.Update,
    });
  }, []);

  return {
    purchasedItems,
    addPurhcasedItem,
    removePurchasedItem,
    updatePurchaedItem,
  };
};

export { useEditor };
