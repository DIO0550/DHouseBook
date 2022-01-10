import { useSelector, useDispatch } from 'react-redux';
import { States } from '../store/store';
import {
  BookDateState,
  bookDateSlice,
  SORT_TYPE,
} from '../store/bookDateSlice';

const useBooksDate = () => {
  const dispatch = useDispatch();
  const { bookDate } = useSelector<States, { bookDate: BookDateState }>(
    (state) => ({
      bookDate: state.bookDate,
    }),
  );
  const { incrementMonth, decrementMonth, changeSortType } =
    bookDateSlice.actions;

  return {
    dateStr: bookDate.dateStr,
    sortType: bookDate.sortType,
    incrementMonth: () => dispatch(incrementMonth()),
    decrementMonth: () => dispatch(decrementMonth()),
    changeSortType: (sortType: SORT_TYPE) => dispatch(changeSortType(sortType)),
  };
};

export default useBooksDate;
