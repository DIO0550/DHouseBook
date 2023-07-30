import { PurchasedItem } from '@/utils/editors/purchasedItem';
import {
  EntityDictionary,
  PurchasedItemsEntity,
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

const UpdateTarget = {
  Name: 'name',
  Price: 'price',
  Date: 'date',
  Type: 'type',
} as const;

type UpdateItemName = {
  id: string;
  name: string;
  target: typeof UpdateTarget.Date;
};

type UpdateItemPrice = {
  id: string;
  price: string;
  target: typeof UpdateTarget.Price;
};

type UpdateItemDate = {
  id: string;
  date: string;
  target: typeof UpdateTarget.Date;
};

type UpdateItemType = {
  id: string;
  type: string;
  target: typeof UpdateTarget.Type;
};

type ActionBase = {
  type: ActionType;
};

type UpdateItem = ActionBase & {
  payload: UpdateItemName | UpdateItemPrice | UpdateItemDate | UpdateItemType;
  type: typeof ActionType.Update;
};

type AddItem = ActionBase & {
  payload: PurchasedItem;
  type: typeof ActionType.Add;
};

type RemoveItem = ActionBase & {
  type: typeof ActionType.Remove;
};

type Action = AddItem | RemoveItem | UpdateItem;

export {
  AddItem,
  RemoveItem,
  UpdateItem,
  UpdateItemName,
  UpdateItemPrice,
  UpdateItemDate,
  UpdateItemType,
};

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
    case ActionType.Add:
      return state;

    case ActionType.Remove:
      return state;

    case ActionType.Update:
      return state;

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
   */
  const addPurhcasedItem = useCallback((item: PurchasedItem) => {
    dispatch({
      payload: item,
      type: ActionType.Add,
    });
  }, []);

  const handleChange = (value: PurchasedItems) => {};

  return {
    purchasedItems,
  };
};

export { useEditor };
