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

const usePurchasedItemSelect = () => {
  const [selectItemIds, setSelectItemIds] = useState<SelectPurchasedItems>({});

  const selectedItems = useCallback((ids: string[]) => {
    setSelectItemIds((cur) => SelectPurchasedItems.addKeys(cur, ids));
  }, []);

  const selectedItem = useCallback((id: string) => {
    setSelectItemIds((cur) => ({
      ...cur,
      [id]: 1,
    }));
  }, []);

  return {
    selectItemIds,
    selectedItems,
    selectedItem,
  };
};

export { usePurchasedItemSelect };
