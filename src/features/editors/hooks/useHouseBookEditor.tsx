import { HouseBookFileState } from '@/features/files/utils/houseBookFileProperty';
import {
  houseBookItemsState,
  houseBookDateState,
} from '@/stores/atoms/houseBookState';
import { useSetHouseBookDateState } from '@/stores/atoms/useSetHouseBookDateState';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import useSetHouseBookItemsState from '@/stores/atoms/useSetHouseBookItemsState';
import { useRecoilValue } from 'recoil';
import { useDidUpdateEffect } from '@/hooks/useDidUpdateEffect';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { useCallback } from 'react';
import { useEditor } from './useEditor';

type Props = {
  fileId: string;
};

const useHouseBookEditor = ({ fileId }: Props) => {
  const houseBookItems = useRecoilValue(houseBookItemsState({ id: fileId }));
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
    addPurhcasedItem,
    updatePurchaedItem,
    removePurchasedItem,
  } = useEditor({ initialPurchasedItems: houseBookItems });

  useDidUpdateEffect(() => {
    setHouseBookItems(purchasedItems);
    setFileState(HouseBookFileState.Dirty);
  }, [purchasedItems, setFileState, setHouseBookItems]);

  return {
    houseBookDate,
    updateHouseBookDate,
    purchasedItems,
    addPurhcasedItem,
    updatePurchaedItem,
    removePurchasedItem,
  };
};

export { useHouseBookEditor };
