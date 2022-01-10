import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BookDateState = {
  dateStr: string;
  sortType: SORT_TYPE;
};

/**
 * ソートの種類
 */
const SORT_TYPE = {
  NONE: 'NONE',
  NAME: 'NAME',
  PRICE: 'PRICE',
  TYPE: 'TYPE',
  PURCHASE_DATE: 'PRUCHASE_DATE',
} as const;
type SORT_TYPE = typeof SORT_TYPE[keyof typeof SORT_TYPE];

const now = new Date();
const initialState: BookDateState = {
  dateStr: new Date(now.getFullYear(), now.getMonth(), 1).toString(),
  sortType: SORT_TYPE.NONE,
};

const bookDateSlice = createSlice({
  name: 'bookDate',
  initialState,
  reducers: {
    incrementMonth: (state) => {
      const date = new Date(state.dateStr.toString());
      const incrementMonthDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1,
      );

      return { ...state, dateStr: incrementMonthDate.toString() };
    },
    decrementMonth: (state) => {
      const date = new Date(state.dateStr.toString());
      const decrementMonthDate = new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1,
      );

      return { ...state, dateStr: decrementMonthDate.toString() };
    },
    changeSortType: (state, action: PayloadAction<SORT_TYPE>) => {
      if (state.sortType === action.payload) {
        return state;
      }

      return { ...state, sortType: action.payload };
    },
  },
});

export { BookDateState, bookDateSlice, SORT_TYPE };
