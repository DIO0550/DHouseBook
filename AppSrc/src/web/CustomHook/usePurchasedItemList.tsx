import { useSelector, useDispatch } from "react-redux";
import { States } from "../store/store";
import { PurchasedItem, purchasedItemListSlice } from "../store/PurchasedItemListSlice";
import { EntityState } from "@reduxjs/toolkit";
import { zeroPadding } from "../util/converter";

const usePurchasedItemList = () => {
    const dispatch = useDispatch();
    const { purchasedItemList } = useSelector<
        States,
        { purchasedItemList: EntityState<PurchasedItem> }
    >((state) => ({
        purchasedItemList: state.purchasedItemList
    }));
    const { purchasedItemAdded, purchasedItemSetAll } = purchasedItemListSlice.actions;
    const fetchData = (year: number, month: number) => {

    }
    const saveData = (year: number, month: number) => {
        const fileName = `${year}${zeroPadding(month, 2)}.json`
        const filePath = `bookdata/${fileName}`;
        window.api.saveBook(filePath, "dir");
    }
    return {
        purchasedItemList: purchasedItemList,
        purchasedItemAdded: (item: PurchasedItem) => dispatch(purchasedItemAdded(item)),
        purchasedItemSetAll: (items: PurchasedItem[]) => dispatch(purchasedItemSetAll(items)),
        fetchData,
        saveData
    }
};

export default usePurchasedItemList;