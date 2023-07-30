import { PurchasedItem } from './purchasedItem';

type EntityDictionary = { [id in string]: PurchasedItem };

type PurchasedItemsEntity = {
  ids: string[];
  entities: EntityDictionary;
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
 * @param item 削除するアイテム
 * @returns 削除後のエンティティ
 */
const removeOne = (itemsEntity: PurchasedItemsEntity, item: PurchasedItem) => {
  const copyItemsEntity = { ...itemsEntity.entities };
  delete copyItemsEntity[item.id];

  const newEntities: PurchasedItemsEntity = {
    ids: [...itemsEntity.ids.filter((id) => id !== item.id)],
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
const updateOne = (itemsEntity: PurchasedItemsEntity, item: PurchasedItem) => {
  const copyItemsEntity = { ...itemsEntity.entities };
  copyItemsEntity[item.id] = item;

  const newItemsEntity: PurchasedItemsEntity = {
    ids: itemsEntity.ids,
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
