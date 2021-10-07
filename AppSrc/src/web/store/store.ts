import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { BookDateState, bookDateSlice } from "./bookDateSlice";

export type States = {
    bookDate: BookDateState
};

const rootReducer = combineReducers({
    bookDate: bookDateSlice.reducer,
});

const store = configureStore({ reducer: rootReducer});

export default store;