import { HouseBookItem } from '@/utils/editors/houseBookItem';
import {
  EntityDictionary,
  HouseBookItemsEntity,
  UpdateEntity,
} from '@/utils/editors/houseBookItemsEntity';
import { useCallback, useMemo, useReducer } from 'react';

type Props = {
  initialPurchasedItems?: HouseBookItem[];
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
  payload: HouseBookItem;
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
const normalizedPurchasedItem = (purchasedItems: HouseBookItem[]) => {
  const ids = [] as string[];
  const itemsEntity: EntityDictionary = {};

  purchasedItems.forEach((item) => {
    ids.push(item.id);
    itemsEntity[item.id] = item;
  });

  const normalizedPurchasedItems: HouseBookItemsEntity = {
    ids,
    entities: itemsEntity,
  };

  return normalizedPurchasedItems;
};

const reducer = (state: HouseBookItemsEntity, action: Action) => {
  switch (action.type) {
    // アイテム追加
    case ActionType.Add:
      return HouseBookItemsEntity.addOne(state, action.payload);

    // アイテム削除
    case ActionType.Remove:
      return HouseBookItemsEntity.removeOne(state, action.payload);

    // アイテム更新
    case ActionType.Update:
      return HouseBookItemsEntity.updateOne(state, action.payload);

    default:
      return state;
  }
};

const useEditor = ({ initialPurchasedItems = [] }: Props) => {
  const [purchasedItemsEntity, dispatch] = useReducer(
    reducer,
    normalizedPurchasedItem(initialPurchasedItems),
  );

  /**
   * 購入したアイテムの追加
   * @param item 追加するアイテム
   */
  const addPurchasedItem = useCallback((item: HouseBookItem) => {
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
  const updatePurchasedItem = useCallback((update: UpdateEntity) => {
    dispatch({
      payload: update,
      type: ActionType.Update,
    });
  }, []);

  /**
   * アイテム一覧
   */
  const purchasedItems = useMemo(
    () => HouseBookItemsEntity.selectAll(purchasedItemsEntity),
    [purchasedItemsEntity],
  );

  return {
    purchasedItems,
    addPurchasedItem,
    removePurchasedItem,
    updatePurchasedItem,
  };
};

export { useEditor };
