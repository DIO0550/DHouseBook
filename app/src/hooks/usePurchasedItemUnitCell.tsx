import { MutableRefObject, useCallback, useRef } from 'react';
import usePurchasedItemQuery from './usePurchaseItemQuery';

/**
 * 本フックの返り値
 */
type UsePurchasedItemCellValue = {
  ref: MutableRefObject<string>;
  onBlurHandler: () => void;
  onInputHandler: (value: string) => void;
};

/**
 * 単体セルのカスタムフック
 * @param defaultValue デフォルト値
 * @param id id
 * @param key キー
 * @returns
 */
const usePurchasedItemUnitCell = (
  defaultValue: string,
  id: string,
  key: string,
): UsePurchasedItemCellValue => {
  const ref = useRef(defaultValue);
  const { updatePurchasedItem } = usePurchasedItemQuery();

  /**
   * 入力時の処理
   */
  const onInputHandler = useCallback((value: string) => {
    ref.current = value;
  }, []);

  /**
   * フォーカスが外れた際の処理
   */
  const onBlurHandler = useCallback(() => {
    updatePurchasedItem(id, key, ref.current ? ref.current : '');
  }, [id, key, updatePurchasedItem]);

  return {
    ref,
    onInputHandler,
    onBlurHandler,
  };
};

export default usePurchasedItemUnitCell;
