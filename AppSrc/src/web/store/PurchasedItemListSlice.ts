import { createEntityAdapter, createSlice, PayloadAction, } from '@reduxjs/toolkit';

type PurchasedItem = {
    // id
    id: string,
    // 名前
    name: string,
    // 値段
    price: number,
    // 種類
    type: string,
    // 購入日
    purchasedDate: string,
}

const purchasedItemAdapter = createEntityAdapter<PurchasedItem>({
    selectId: (purchasedItem) => purchasedItem.id,
})

const purchasedItemListSlice = createSlice({
    name: "purchasedItemList",
    initialState: purchasedItemAdapter.getInitialState(),
    reducers: {
        purchasedItemAdded: purchasedItemAdapter.addOne,
        purchasedItemSetAll(state, action) {
            purchasedItemAdapter.setAll(state, action.payload.purchasedItemList)
        },
    },
});

export { PurchasedItem, purchasedItemListSlice };