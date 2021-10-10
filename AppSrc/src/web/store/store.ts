import { combineReducers } from "redux";
import { EntityState, configureStore } from "@reduxjs/toolkit";
import { BookDateState, bookDateSlice } from "./bookDateSlice";
import { PurchasedItem, purchasedItemListSlice } from "./PurchasedItemListSlice";

export type States = {
    bookDate: BookDateState,
    purchasedItemList: EntityState<PurchasedItem>
};

const rootReducer = combineReducers({
    bookDate: bookDateSlice.reducer,
    purchasedItemList: purchasedItemListSlice.reducer
});

const store = configureStore({ reducer: rootReducer});

export default store;