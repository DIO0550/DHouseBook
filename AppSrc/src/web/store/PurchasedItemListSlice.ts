import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';

type PurchasedItem = {
  // id
  id: string;
  // 名前
  name: string;
  // 値段
  price: number;
  // 種類
  type: string;
  // 購入日
  purchasedDate: string;
};

type UpdateItem = {
  id: string;
  key: string;
  value: unknown;
};

const purchasedItemAdapter = createEntityAdapter<PurchasedItem>({
  selectId: (purchasedItem) => purchasedItem.id,
});

const { selectById } = purchasedItemAdapter.getSelectors();

const purchasedItemListSlice = createSlice({
  name: 'purchasedItemList',
  initialState: purchasedItemAdapter.getInitialState(),
  reducers: {
    purchasedItemAdded: purchasedItemAdapter.addOne,
    purchasedItemSetAll(state, action) {
      purchasedItemAdapter.setAll(state, action.payload.purchasedItemList);
    },
    purchasedItemUpdated: (state, action: PayloadAction<UpdateItem>): void => {
      purchasedItemAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          ...state.entities[action.payload.id],
          [action.payload.key]: action.payload.value,
        },
      });
    },
  },
});

export { PurchasedItem, purchasedItemListSlice, selectById };
