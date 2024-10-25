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

const usePurchasedItemSelect = () => {
  const [selectItemIds, setSelectItemIds] = useState<SelectPurchasedItems>({});

  const selectItems = useCallback((ids: string[]) => {
    setSelectItemIds((cur) => SelectPurchasedItems.addKeys(cur, ids));
  }, []);

  const deselectItems = useCallback((ids: string[]) => {
    setSelectItemIds((cur) =>
      ids.reduce(
        (acc, currentValue) => ObjectEx.omitKey(acc, currentValue),
        cur,
      ),
    );
  }, []);

  const selectItem = useCallback((id: string) => {
    setSelectItemIds((cur) => ({
      ...cur,
      [id]: 1,
    }));
  }, []);

  const deselectItem = useCallback((id: string) => {
    setSelectItemIds((cur) => ObjectEx.omitKey(cur, id));
  }, []);

  const changeSelectItem = useCallback(
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
    selectItems,
    deselectItems,
    changeSelectItem,
  };
};

export { usePurchasedItemSelect };
