import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/stores/store';
import { bookDateSlice, BookDateState } from '@/stores/slices/bookDateSlice';

const useBookDateState = () => {
  const dispatch = useAppDispatch();
  const { year, month } = useSelector<RootState, BookDateState>(
    (state) => state.bookDate,
  );

  const { incrementMonth, decrementMonth } = bookDateSlice.actions;

  /**
   * 0スタートなので補正する
   */
  const fixMonth = useMemo(() => month + 1, [month]);

  /**
   * ブックの日付の月を１つ増やす
   */
  const incrementDateMonth = useCallback(() => {
    dispatch(incrementMonth());
  }, [dispatch, incrementMonth]);

  /**
   * ブックの日付の月を１つ減らす
   */
  const decrementDateMonth = useCallback(() => {
    dispatch(decrementMonth());
  }, [decrementMonth, dispatch]);

  return {
    year,
    month: fixMonth,
    incrementDateMonth,
    decrementDateMonth,
  };
};

export { useBookDateState };
