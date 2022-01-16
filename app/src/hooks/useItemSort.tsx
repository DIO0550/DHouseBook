import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { States } from '../store/store';
import {
  ItemSortState,
  itemSortSlice,
  SORT_TYPE,
  SORT_ORDER_TYPE,
} from '../store/itemSortSlice';

type UseItemSortValue = {
  sortType: SORT_TYPE;
  orderType: SORT_ORDER_TYPE;
  changeSortType: (sortType: SORT_TYPE) => {
    payload: SORT_TYPE;
    type: string;
  };
  changeOrderType: (orderType: SORT_ORDER_TYPE) => {
    payload: SORT_ORDER_TYPE;
    type: string;
  };
  isAscending: boolean;
};

const useItemSort = (): UseItemSortValue => {
  const dispatch = useDispatch();
  const { itemSort } = useSelector<States, { itemSort: ItemSortState }>(
    (state) => ({
      itemSort: state.itemSort,
    }),
  );
  const { changeSortType, changeOrderType } = itemSortSlice.actions;
  const isAscending = useMemo(
    () => itemSort.orderType === SORT_ORDER_TYPE.ASCENDING,
    [itemSort.orderType],
  );

  return {
    sortType: itemSort.sortType,
    orderType: itemSort.orderType,
    changeSortType: (sortType: SORT_TYPE) => dispatch(changeSortType(sortType)),
    changeOrderType: (orderType: SORT_ORDER_TYPE) =>
      dispatch(changeOrderType(orderType)),
    isAscending,
  };
};

export default useItemSort;
