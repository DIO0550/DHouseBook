import { renderHook } from '@testing-library/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookDateSlice } from 'stores/slices/bookDateSlice';

import { Provider } from 'react-redux';
import useBookDateState from './useBookDateState';
import { ReactNode } from 'react';

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
      });

      const wrapper = ({ children }: { children: ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useBookDateState(), { wrapper });
    });
  });
});
