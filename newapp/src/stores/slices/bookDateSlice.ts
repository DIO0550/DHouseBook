import { createSlice } from '@reduxjs/toolkit';

/**
 * Stateの型
 */
type BookDateState = {
  // 年
  year: number;
  // 月
  month: number;
};

const initialState: BookDateState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

const bookDateSlice = createSlice({
  name: 'bookDate',
  initialState,
  reducers: {
    /**
     * 月を１つ増やす
     * @param state
     * @returns
     */
    incrementMonth: (state) => {
      const newDate = new Date(state.year, state.month + 1);

      state.year = newDate.getFullYear();
      state.month = newDate.getMonth();
    },

    /**
     * 月を１つ減らす
     * @param state
     * @returns
     */
    decrementMonth: (state) => {
      const newDate = new Date(state.year, state.month - 1);

      state.year = newDate.getFullYear();
      state.month = newDate.getMonth();
    },
  },
});

export { BookDateState, bookDateSlice };
