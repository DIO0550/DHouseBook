import { HouseBookFileState } from '@/features/files/utils/houseBookFileProperty';
import {
  houseBookDateState,
  houseBookItemsState,
} from '@/stores/atoms/houseBookState';
import { useSetHouseBookDateState } from '@/stores/atoms/useSetHouseBookDateState';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import useSetHouseBookItemsState from '@/stores/atoms/useSetHouseBookItemsState';
import { useRecoilValue } from 'recoil';
import { useDidUpdateEffect } from '@/hooks/useDidUpdateEffect';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { useCallback, useMemo } from 'react';
import {
  HouseBookFilter,
  houseBookFilterState,
} from '@/stores/atoms/houseBookFilterState';
import { useEditor } from './useEditor';

type Props = {
  fileId: string;
};

const useHouseBookEditor = ({ fileId }: Props) => {
  const houseBookItems = useRecoilValue(houseBookItemsState({ id: fileId }));
  const filters = useRecoilValue(houseBookFilterState);
  const houseBookDate = useRecoilValue(houseBookDateState({ id: fileId }));
  const { setFileState } = useSetHouseBookFilePropertyState({
    id: fileId,
  });
  const { setHouseBookItems } = useSetHouseBookItemsState(fileId);
  const { setHouseBookDate } = useSetHouseBookDateState({
    id: fileId,
  });

  const updateHouseBookDate = useCallback(
    (date: HouseBookDate) => {
      setHouseBookDate(date);
    },
    [setHouseBookDate],
  );

  const {
    purchasedItems,
    addPurchasedItem,
    updatePurchasedItem,
    removePurchasedItem,
    removePurchasedItems,
  } = useEditor({ initialPurchasedItems: houseBookItems });

  const filteredHouseBookItems = useMemo(() => {
    if (!filters) {
      return purchasedItems;
    }

    if (!filters.length) {
      return purchasedItems;
    }

    const result = HouseBookFilter.filterItems(filters, purchasedItems);

    return result;
  }, [filters, purchasedItems]);

  useDidUpdateEffect(() => {
    setHouseBookItems(purchasedItems);
    setFileState(HouseBookFileState.Dirty);
  }, [purchasedItems, setFileState, setHouseBookItems]);

  return {
    filteredHouseBookItems,
    houseBookDate,
    updateHouseBookDate,
    purchasedItems,
    addPurchasedItem,
    updatePurchasedItem,
    removePurchasedItem,
    removePurchasedItems,
  };
};

export { useHouseBookEditor };
