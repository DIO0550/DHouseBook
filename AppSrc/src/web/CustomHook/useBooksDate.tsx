import { useSelector, useDispatch } from 'react-redux';
import { States } from '../store/store';
import { BookDateState, bookDateSlice } from '../store/bookDateSlice';

const useBooksDate = () => {
  const dispatch = useDispatch();
  const { bookDate } = useSelector<States, { bookDate: BookDateState }>(
    (state) => ({
      bookDate: state.bookDate,
    })
  );
  const { incrementMonth, decrementMonth } = bookDateSlice.actions;
  return {
    dateStr: bookDate.dateStr,
    incrementMonth: () => dispatch(incrementMonth()),
    decrementMonth: () => dispatch(decrementMonth()),
  };
};

export default useBooksDate;
