import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ItemSortState = {
  sortType: SORT_TYPE;
  orderType: SORT_ORDER_TYPE;
};

/**
 * ソートの種類
 */
const SORT_TYPE = {
  /// なし
  NONE: 'NONE',
  /// 名前
  NAME: 'NAME',
  /// 値段
  PRICE: 'PRICE',
  /// 種類
  TYPE: 'TYPE',
  /// 購入日
  PURCHASE_DATE: 'PRUCHASE_DATE',
} as const;
type SORT_TYPE = typeof SORT_TYPE[keyof typeof SORT_TYPE];

/**
 * ソートのオーダー種類
 * - 昇順
 * - 降順
 */
const SORT_ORDER_TYPE = {
  /// 昇順
  ASCENDING: 'ASCENDING',
  /// 降順
  DESCENDING: 'DESCENDING',
} as const;
type SORT_ORDER_TYPE = typeof SORT_ORDER_TYPE[keyof typeof SORT_ORDER_TYPE];

/**
 * 初期state
 */
const initialState: ItemSortState = {
  sortType: SORT_TYPE.NONE,
  orderType: SORT_ORDER_TYPE.ASCENDING,
};

const itemSortSlice = createSlice({
  name: 'itemSort',
  initialState,
  reducers: {
    /**
     * ソートの種類変更
     * @param state state
     * @param action 変更内容
     * @returns 変更後のstate
     */
    changeSortType: (state, action: PayloadAction<SORT_TYPE>) => {
      if (state.sortType === action.payload) {
        return state;
      }

      return { ...state, sortType: action.payload };
    },

    /**
     * オーダーの種類変更
     * @param state state
     * @param action 変更内容
     * @returns 変更後のstate
     */
    changeOrderType: (state, action: PayloadAction<SORT_ORDER_TYPE>) => {
      if (state.orderType === action.payload) {
        return state;
      }

      return { ...state, orderType: action.payload };
    },
  },
});

export { itemSortSlice };
export type { ItemSortState, SORT_TYPE, SORT_ORDER_TYPE };
