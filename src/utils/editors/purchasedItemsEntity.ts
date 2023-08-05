import { PurchasedItem } from './purchasedItem';

type EntityDictionary = { [id in string]: PurchasedItem };

type PurchasedItemsEntity = {
  ids: string[];
  entities: EntityDictionary;
};

export type UpdateEntity = {
  // ID
  id: string;
  // 更新対象
  change: Partial<PurchasedItem>;
};

/**
 * アイテムを１つ追加
 * @param itemsEntity エンティティ
 * @param item 追加するアイテム
 * @return 追加後のエンチィティ
 */
const addOne = (itemsEntity: PurchasedItemsEntity, item: PurchasedItem) => {
  const newItemsEntity: PurchasedItemsEntity = {
    ids: [...itemsEntity.ids, item.id],
    entities: {
      ...itemsEntity.entities,
      [item.id]: item,
    },
  };

  return newItemsEntity;
};

/**
 * アイテムを１つ削除
 * @param itemsEntity エンティティ
 * @param itemId 削除するアイテムのID
 * @returns 削除後のエンティティ
 */
const removeOne = (itemsEntity: PurchasedItemsEntity, itemId: string) => {
  const copyItemsEntity = { ...itemsEntity.entities };
  delete copyItemsEntity[itemId];

  const newEntities: PurchasedItemsEntity = {
    ids: [...itemsEntity.ids.filter((id) => id !== itemId)],
    entities: copyItemsEntity,
  };

  return newEntities;
};

/**
 * アイテムを更新する
 * @param itemsEntity エンティティ
 * @param item 更新対象のアイテム
 * @returns アイテムを更新した後のエンティティ
 */
const updateOne = (itemsEntity: PurchasedItemsEntity, update: UpdateEntity) => {
  const updateTarget = itemsEntity.entities[update.id];
  const isAdd = updateTarget === undefined;

  const newItem = { ...updateTarget, ...update.change };

  const copyItemsEntity = { ...itemsEntity.entities };
  copyItemsEntity[update.id] = newItem;

  const newItemsEntity: PurchasedItemsEntity = {
    ids: isAdd ? [...itemsEntity.ids, update.id] : itemsEntity.ids,
    entities: copyItemsEntity,
  };

  return newItemsEntity;
};

const PurchasedItemsEntity = {
  addOne,
  updateOne,
  removeOne,
};

export { EntityDictionary };
export { PurchasedItemsEntity };
