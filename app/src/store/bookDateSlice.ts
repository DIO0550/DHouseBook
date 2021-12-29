import { createSlice } from '@reduxjs/toolkit';

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
    incrementMonth: (state) => {
      const date = new Date(state.dateStr.toString());
      const incrementMonthDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1,
      );

      return { dateStr: incrementMonthDate.toString() };
    },
    decrementMonth: (state) => {
      const date = new Date(state.dateStr.toString());
      const decrementMonthDate = new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1,
      );

      return { dateStr: decrementMonthDate.toString() };
    },
  },
});

export { BookDateState, bookDateSlice };
