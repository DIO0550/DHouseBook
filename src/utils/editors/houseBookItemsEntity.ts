import { HouseBookItem } from './houseBookItem';

type EntityDictionary = { [id in string]: HouseBookItem };

type HouseBookItemsEntity = {
  ids: string[];
  entities: EntityDictionary;
};

export type UpdateEntity = {
  // ID
  id: string;
  // 更新対象
  change: Partial<HouseBookItem>;
};

/**
 * アイテムを１つ追加
 * @param itemsEntity エンティティ
 * @param item 追加するアイテム
 * @return 追加後のエンチィティ
 */
const addOne = (itemsEntity: HouseBookItemsEntity, item: HouseBookItem) => {
  const newItemsEntity: HouseBookItemsEntity = {
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
const removeOne = (itemsEntity: HouseBookItemsEntity, itemId: string) => {
  const copyItemsEntity = { ...itemsEntity.entities };
  delete copyItemsEntity[itemId];

  const newEntities: HouseBookItemsEntity = {
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
const updateOne = (itemsEntity: HouseBookItemsEntity, update: UpdateEntity) => {
  const updateTarget = itemsEntity.entities[update.id];
  const isAdd = updateTarget === undefined;

  const newItem = { ...updateTarget, ...update.change };

  const copyItemsEntity = { ...itemsEntity.entities };
  copyItemsEntity[update.id] = newItem;

  const newItemsEntity: HouseBookItemsEntity = {
    ids: isAdd ? [...itemsEntity.ids, update.id] : itemsEntity.ids,
    entities: copyItemsEntity,
  };

  return newItemsEntity;
};

/**
 * 全てのアイテムを配列で取得する
 * @param itemsEntity
 * @returns 全てのアイテムの配列
 */
const selectAll = (itemsEntity: HouseBookItemsEntity) => {
  const items: HouseBookItem[] = [] as HouseBookItem[];
  itemsEntity.ids.forEach((id) => {
    const item = itemsEntity.entities[id];
    if (items) {
      items.push(item);
    }
  });

  return items;
};

const HouseBookItemsEntity = {
  addOne,
  updateOne,
  removeOne,
  selectAll,
};

export { EntityDictionary };
export { HouseBookItemsEntity };
