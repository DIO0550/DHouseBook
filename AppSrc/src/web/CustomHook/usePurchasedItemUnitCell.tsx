import { MutableRefObject, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { purchasedItemListSlice } from '../store/purchasedItemListSlice';
import usePrevious from './usePrevious';

type UsePurchasedItemCellValue = {
  ref: MutableRefObject<string>;
  onBlurHandler: () => void;
  onInputHandler: (value: string) => void;
};

const usePurchasedItemUnitCell = (
  defaultValue: string,
  id: string,
  key: string
): UsePurchasedItemCellValue => {
  const ref = useRef(defaultValue);
  const prevRef = usePrevious(ref);

  const dispatch = useDispatch();
  // 購入アイテムの更新
  const { purchasedItemUpdated } = purchasedItemListSlice.actions;

  const onInputHandler = useCallback((value: string) => {
    ref.current = value;
  }, []);

  const onBlurHandler = useCallback(() => {
    dispatch(
      purchasedItemUpdated({
        id,
        key,
        value: ref.current ? ref.current : '',
      })
    );
  }, [id, key]);

  return {
    ref,
    onInputHandler,
    onBlurHandler,
  };
};

export default usePurchasedItemUnitCell;
