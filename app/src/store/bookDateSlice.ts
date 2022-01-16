import { createSlice } from '@reduxjs/toolkit';

/**
 * Stateの型
 */
type BookDateState = {
  dateStr: string;
};

const now = new Date();
const initialState: BookDateState = {
  dateStr: new Date(now.getFullYear(), now.getMonth(), 1).toString(),
};

const bookDateSlice = createSlice({
  name: 'bookDate',
  initialState,
  reducers: {
    /**
     * 日付１日増やす
     * @param state
     * @returns
     */
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
  },
});

export { BookDateState, bookDateSlice };
