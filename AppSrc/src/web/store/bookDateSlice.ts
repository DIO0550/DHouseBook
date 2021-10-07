import { createSlice } from "@reduxjs/toolkit"

type BookDateState = {
    date: Date;
}

const now = new Date();
const initialState: BookDateState = { date: new Date(now.getFullYear(), now.getMonth(), 1) };

const bookDateSlice = createSlice({
  name: 'bookDate',
  initialState,
  reducers: {
    incrementMonth: (state) => {
        state.date.setMonth(state.date.getMonth() + 1);
        return { ...state, date: state.date};
    },
    decrementMonth: (state) => {
        state.date.setMonth(state.date.getMonth() - 1);
        return { ...state, date: state.date};
    }
  }
})

export  { BookDateState, bookDateSlice };