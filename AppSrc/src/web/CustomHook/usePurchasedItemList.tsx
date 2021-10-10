import { useSelector, useDispatch } from "react-redux";
import { States } from "../store/store";
import { PurchasedItem, purchasedItemListSlice } from "../store/PurchasedItemListSlice";
import { EntityState } from "@reduxjs/toolkit";

const usePurchasedItemList = () => {
    const dispatch = useDispatch();
    const { purchasedItemList } = useSelector<
        States,
        { purchasedItemList: EntityState<PurchasedItem> }
    >((state) => ({
        purchasedItemList: state.purchasedItemList
    }));
    const { purchasedItemAdded, purchasedItemSetAll } = purchasedItemListSlice.actions;
    return {
        purchasedItemList: purchasedItemList,
        purchasedItemAdded: (item: PurchasedItem) => dispatch(purchasedItemAdded(item)),
        purchasedItemSetAll: (items: PurchasedItem[]) => dispatch(purchasedItemSetAll(items))
    }
};

export default usePurchasedItemList;