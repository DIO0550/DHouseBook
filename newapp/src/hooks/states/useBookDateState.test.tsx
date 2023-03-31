import { act, renderHook } from '@testing-library/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookDateSlice } from '@/stores/slices/bookDateSlice';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { useBookDateState } from './useBookDateState';

// Dateをmockにする
const mockDate = new Date(2021, 0, 1, 1, 1, 1);
jest.useFakeTimers();
jest.setSystemTime(mockDate);

describe('useBookDateState', () => {
  describe('bookDate', () => {
    it('デフォルト', () => {
      const store = configureStore({
        reducer: combineReducers({
          [bookDateSlice.name]: bookDateSlice.reducer,
        }),
        preloadedState: {
          bookDate: {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
          },
        },
      });

      const wrapper = ({ children }: { children: ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useBookDateState(), { wrapper });

      expect(result.current.year).toBe(2021);
      expect(result.current.month).toBe(1);
    });

    it('incrementDateMonth', () => {
      const store = configureStore({
        reducer: combineReducers({
          [bookDateSlice.name]: bookDateSlice.reducer,
        }),
        preloadedState: {
          bookDate: {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
          },
        },
      });

      const wrapper = ({ children }: { children: ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useBookDateState(), { wrapper });

      expect(result.current.year).toBe(2021);
      expect(result.current.month).toBe(1);

      act(() => {
        result.current.incrementDateMonth();
      });

      expect(result.current.year).toBe(2021);
      expect(result.current.month).toBe(2);
    });
  });
});
