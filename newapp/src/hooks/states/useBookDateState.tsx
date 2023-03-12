import { RootState, useAppDispatch } from 'stores/store';
import { useSelector } from 'react-redux';
import { bookDateSlice, BookDateState } from 'stores/slices/bookDateSlice';
import { useCallback } from 'react';

const useBookDateState = () => {
  const dispatch = useAppDispatch();
  const { dateStr } = useSelector<RootState, BookDateState>(
    (state) => state.bookDate,
  );

  const { incrementMonth, decrementMonth } = bookDateSlice.actions;

  /**
   * ブックの日付の月を１つ増やす
   */
  const incrementDateMonth = useCallback(() => {
    dispatch(incrementMonth);
  }, [dispatch, incrementMonth]);

  /**
   * ブックの日付の月を１つ減らす
   */
  const decrementDateMonth = useCallback(() => {
    dispatch(decrementMonth);
  }, [decrementMonth, dispatch]);

  return {
    dateStr,
    incrementDateMonth,
    decrementDateMonth,
  };
};

export default useBookDateState;
