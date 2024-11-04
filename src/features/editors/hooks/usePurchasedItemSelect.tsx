import { ObjectEx } from '@/utils/extensions/ObjectEx';
import { useCallback, useState } from 'react';

export type SelectPurchasedItems = { [key in string]?: 1 };
const SelectPurchasedItems = {
  addKey: (items: SelectPurchasedItems, id: string): SelectPurchasedItems => ({
    ...items,
    [id]: 1,
  }),

  addKeys: (
    items: SelectPurchasedItems,
    ids: string[],
  ): SelectPurchasedItems => ({
    ...items,
    ...ids.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: 1,
      }),
      {} as SelectPurchasedItems,
    ),
  }),
};

type Props = {
  allItemIds: string[];
};

const usePurchasedItemSelect = ({ allItemIds }: Props) => {
  const [selectItemIds, setSelectItemIds] = useState<SelectPurchasedItems>({});

  const selectItems = useCallback((ids: string[]) => {
    setSelectItemIds((cur) => SelectPurchasedItems.addKeys(cur, ids));
  }, []);

  const deselectAllItems = useCallback(() => {
    setSelectItemIds({});
  }, []);

  const handleChangeSelectAllItems = useCallback(() => {
    if (Object.keys(selectItemIds).length !== allItemIds.length) {
      selectItems(allItemIds);

      return;
    }

    if (allItemIds.some((id) => !(id in selectItemIds))) {
      selectItems(allItemIds);

      return;
    }

    deselectAllItems();
  }, [allItemIds, deselectAllItems, selectItemIds, selectItems]);

  const selectItem = useCallback((id: string) => {
    setSelectItemIds((cur) => ({
      ...cur,
      [id]: 1,
    }));
  }, []);

  const deselectItem = useCallback((id: string) => {
    setSelectItemIds((cur) => ObjectEx.omitKey(cur, id));
  }, []);

  const handleChangeSelectItem = useCallback(
    (id: string) => {
      if (id in selectItemIds) {
        deselectItem(id);

        return;
      }

      selectItem(id);
    },
    [deselectItem, selectItem, selectItemIds],
  );

  return {
    selectItemIds,
    handleChangeSelectAllItems,
    handleChangeSelectItem,
  };
};

export { usePurchasedItemSelect };
